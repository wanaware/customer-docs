#!/usr/bin/env node

import { mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const MAX_BYTES = 250 * 1024;

function usage(message) {
  if (message) console.error(message);
  console.error(`
Usage:
  npm run media:frame -- --input capture.png --source-out media/screenshots/source/example.png --output media/screenshots/example.png --crop x,y,width,height

Options:
  --input PATH         Raw browser capture.
  --source-out PATH    Safe, cropped source retained for future reframing.
  --output PATH        Theme-neutral framed PNG for publishing.
  --crop X,Y,W,H       Crop that removes browser chrome, navigation, identifiers, and empty space.
  --max-inner-width N  Maximum inner screenshot width (default: full available width).
  --max-inner-height N Maximum inner screenshot height (default: 860).
  --canvas-width N     Output width from 1500 to 2200 pixels (default: 1800).
`);
  process.exit(1);
}

function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith('--')) usage(`Unexpected argument: ${key}`);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) usage(`Missing value for ${key}`);
    values[key.slice(2)] = value;
    index += 1;
  }
  return values;
}

function parseCrop(value) {
  const parts = String(value || '').split(',').map((part) => Number(part.trim()));
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0)) {
    usage('--crop must contain four non-negative integers: x,y,width,height');
  }
  const [left, top, width, height] = parts;
  if (width === 0 || height === 0) usage('Crop width and height must be greater than zero.');
  return { left, top, width, height };
}

function integerOption(value, fallback) {
  if (value === undefined) return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) usage(`Expected a positive integer, received: ${value}`);
  return parsed;
}

function rangedIntegerOption(value, fallback, minimum, maximum, name) {
  const parsed = integerOption(value, fallback);
  if (parsed < minimum || parsed > maximum) {
    usage(`--${name} must be between ${minimum} and ${maximum}; received: ${parsed}`);
  }
  return parsed;
}

function backgroundSvg(width, height, radius, inset) {
  const shadowY = inset.top + 10;
  const shadowHeight = height - inset.top - inset.bottom;
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#18181B" flood-opacity="0.16"/>
        </filter>
      </defs>
      <rect x="${inset.left}" y="${shadowY}" width="${width - inset.left - inset.right}" height="${shadowHeight}" rx="14" fill="#18181B" opacity="0.12" filter="url(#shadow)"/>
    </svg>
  `);
}

function roundedMask(width, height, radius) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/>
    </svg>
  `);
}

async function writePngUnderLimit(pipeline, output) {
  const attempts = [
    { colours: 256, quality: 92, dither: 0.65 },
    { colours: 192, quality: 88, dither: 0.55 },
    { colours: 128, quality: 84, dither: 0.45 },
    { colours: 96, quality: 80, dither: 0.35 }
  ];

  for (const options of attempts) {
    await pipeline.clone().png({
      palette: true,
      compressionLevel: 9,
      adaptiveFiltering: true,
      effort: 10,
      ...options
    }).toFile(output);
    const { size } = await stat(output);
    if (size <= MAX_BYTES) return size;
  }

  const { size } = await stat(output);
  throw new Error(`${output} is ${size} bytes; crop more tightly before publishing (limit: ${MAX_BYTES}).`);
}

const args = parseArgs(process.argv.slice(2));
if (!args.input || !args['source-out'] || !args.output || !args.crop) usage();

const input = resolve(args.input);
const sourceOutput = resolve(args['source-out']);
const output = resolve(args.output);
const crop = parseCrop(args.crop);

await mkdir(dirname(sourceOutput), { recursive: true });
await mkdir(dirname(output), { recursive: true });

const cropped = await sharp(input)
  .extract(crop)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toBuffer();
await sharp(cropped).toFile(sourceOutput);

const source = await sharp(cropped).metadata();
const maxInnerWidth = integerOption(args['max-inner-width'], 2200);
const maxInnerHeight = integerOption(args['max-inner-height'], 860);
const sourceIsPortrait = source.height > source.width * 1.15;
const horizontalPadding = sourceIsPortrait ? 64 : 32;
const verticalPadding = sourceIsPortrait ? 48 : 36;
const requestedWidth = rangedIntegerOption(args['canvas-width'], 1800, 1500, 2200, 'canvas-width');
const canvasWidth = Math.min(requestedWidth, source.width + horizontalPadding * 2);
const availableWidth = Math.min(maxInnerWidth, canvasWidth - horizontalPadding * 2);
const scale = Math.min(1, availableWidth / source.width, maxInnerHeight / source.height);
const innerWidth = Math.max(1, Math.round(source.width * scale));
const innerHeight = Math.max(1, Math.round(source.height * scale));
const canvasHeight = innerHeight + verticalPadding * 2;
const left = Math.round((canvasWidth - innerWidth) / 2);
const top = verticalPadding;

const inner = await sharp(cropped)
  .resize(innerWidth, innerHeight, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
  .composite([{ input: roundedMask(innerWidth, innerHeight, 16), blend: 'dest-in' }])
  .png()
  .toBuffer();

const background = backgroundSvg(canvasWidth, canvasHeight, 24, {
  left,
  right: canvasWidth - left - innerWidth,
  top,
  bottom: verticalPadding
});

const framed = sharp(background).composite([
  { input: inner, left, top },
  {
    input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${innerWidth}" height="${innerHeight}"><rect x="0.5" y="0.5" width="${innerWidth - 1}" height="${innerHeight - 1}" rx="16" fill="none" stroke="#71717A" stroke-opacity="0.28"/></svg>`),
    left,
    top
  }
]);

const bytes = await writePngUnderLimit(framed, output);
console.log(JSON.stringify({
  source: sourceOutput,
  output,
  width: canvasWidth,
  height: canvasHeight,
  bytes
}, null, 2));
