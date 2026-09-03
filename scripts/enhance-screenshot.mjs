#!/usr/bin/env node

import { mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const MAX_BYTES = 500 * 1024;

function usage(message) {
  if (message) console.error(message);
  console.error(`
Usage:
  npm run media:enhance -- --input media/screenshots/source/example.png --generated /tmp/generated.png --output media/screenshots/example.png

Options:
  --input PATH       Sanitized source crop containing the exact released UI.
  --generated PATH   Image-generator result used only for the decorative background treatment.
  --output PATH      Retina-resolution PNG for review and ReadMe publishing.
  --padding-x N      Horizontal frame padding (default: 64).
  --padding-y N      Vertical frame padding (default: 56).

The source crop is composited without scaling. Generated UI pixels are deliberately
obscured and never used as product instructions.
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

function integerOption(value, fallback) {
  if (value === undefined) return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) usage(`Expected a positive integer, received: ${value}`);
  return parsed;
}

function roundedMask(width, height, radius) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/>
    </svg>
  `);
}

function surfaceOverlay(width, height) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#061421" stop-opacity="0.92"/>
          <stop offset="0.58" stop-color="#0B2032" stop-opacity="0.86"/>
          <stop offset="1" stop-color="#0A3B47" stop-opacity="0.76"/>
        </linearGradient>
        <radialGradient id="glow" cx="86%" cy="5%" r="78%">
          <stop offset="0" stop-color="#53DED6" stop-opacity="0.22"/>
          <stop offset="0.42" stop-color="#2F93A0" stop-opacity="0.08"/>
          <stop offset="1" stop-color="#07131F" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="30" fill="url(#wash)"/>
      <rect width="${width}" height="${height}" rx="30" fill="url(#glow)"/>
      <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="29" fill="none" stroke="#66D8DE" stroke-opacity="0.34" stroke-width="2"/>
    </svg>
  `);
}

function screenshotChrome(width, height) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="190%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#020912" flood-opacity="0.52"/>
        </filter>
      </defs>
      <rect x="18" y="12" width="${width - 36}" height="${height - 30}" rx="18" fill="#020912" opacity="0.42" filter="url(#shadow)"/>
      <rect x="0.75" y="0.75" width="${width - 1.5}" height="${height - 1.5}" rx="18" fill="none" stroke="#E1FBFF" stroke-opacity="0.30" stroke-width="1.5"/>
    </svg>
  `);
}

async function writePngUnderLimit(pipeline, output) {
  const attempts = [
    { colours: 256, quality: 96, dither: 0.35 },
    { colours: 224, quality: 94, dither: 0.30 },
    { colours: 192, quality: 92, dither: 0.25 },
    { colours: 160, quality: 90, dither: 0.20 }
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
  throw new Error(`${output} is ${size} bytes; simplify the crop before publishing (limit: ${MAX_BYTES}).`);
}

const args = parseArgs(process.argv.slice(2));
if (!args.input || !args.generated || !args.output) usage();

const input = resolve(args.input);
const generated = resolve(args.generated);
const output = resolve(args.output);
const paddingX = integerOption(args['padding-x'], 64);
const paddingY = integerOption(args['padding-y'], 56);

await mkdir(dirname(output), { recursive: true });

const source = await sharp(input).metadata();
if (!source.width || !source.height) throw new Error(`Cannot read source dimensions: ${input}`);

const canvasWidth = source.width + paddingX * 2;
const canvasHeight = source.height + paddingY * 2;
if (canvasWidth < 1500 || canvasWidth > 2200) {
  usage(`Output width must be between 1500 and 2200 pixels; received: ${canvasWidth}`);
}

// The generated candidate contributes only color, texture, and tone. Heavy blur plus
// an opaque branded wash prevents invented UI from entering the documentation image.
const generatedSurface = await sharp(generated)
  .resize(canvasWidth, canvasHeight, { fit: 'cover' })
  .blur(32)
  .modulate({ brightness: 0.42, saturation: 0.72 })
  .composite([{ input: surfaceOverlay(canvasWidth, canvasHeight), blend: 'over' }])
  .png()
  .toBuffer();

const exactUi = await sharp(input)
  .composite([{ input: roundedMask(source.width, source.height, 18), blend: 'dest-in' }])
  .png()
  .toBuffer();

const finalImage = sharp(generatedSurface).composite([
  { input: screenshotChrome(source.width, source.height), left: paddingX, top: paddingY },
  { input: exactUi, left: paddingX, top: paddingY }
]);

const bytes = await writePngUnderLimit(finalImage, output);
console.log(JSON.stringify({
  source: input,
  generatedStyleReference: generated,
  output,
  width: canvasWidth,
  height: canvasHeight,
  bytes,
  uiPixelsScaled: false
}, null, 2));
