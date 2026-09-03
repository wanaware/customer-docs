#!/usr/bin/env node

import { mkdir } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

function usage(message) {
  if (message) console.error(message);
  console.error(`
Usage:
  node scripts/prepare-action-screenshots.mjs --captures /tmp/wanaware-action-captures

Converts authenticated, full-width portal captures into identifier-safe PNG source
crops. The source crops are then framed by scripts/enhance-screenshot.mjs.
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

const specs = [
  ['launchpad.png', 'launchpad-overview.png'],
  ['integration-provider-selection.png', 'integration-provider-selection.png'],
  ['integration-provider-setup.png', 'integration-provider-setup.png'],
  ['asset-inventory-filtered.png', 'asset-inventory-table-and-filters.png'],
  ['asset-inventory-map.png', 'asset-inventory-map.png'],
  ['asset-inventory-graph.png', 'asset-inventory-graph.png'],
  ['discovery-move-to-inventory.png', 'discovery-move-to-inventory.png'],
  ['discovery-move-confirmation.png', 'discovery-move-confirmation.png'],
  ['delete-asset-confirmation-raw.png', 'delete-asset-confirmation.png', 'delete-ids'],
  ['asset-details-fields.png', 'asset-details-fields.png', 'asset-details-id'],
  ['asset-schema-fields-save.png', 'asset-schema-fields-and-save.png', 'asset-details-id'],
  ['asset-relationship-graph-populated.png', 'asset-relationship-graph.png', 'record-id'],
  ['add-connection-target-chooser.png', 'add-connection-target-asset.png', 'connection-id'],
  ['add-connection-ip-block-filled.png', 'add-connection-ip-block.png', 'connection-id'],
  ['add-connection-endpoints-selected.png', 'add-connection-endpoints.png', 'connection-id'],
  ['add-connection-preview-result.png', 'add-connection-preview-conflict.png', 'connection-id'],
  ['asset-types-list.png', 'asset-types-list.png'],
  ['asset-type-starting-options-dev.png', 'asset-type-starting-options.png'],
  ['asset-type-field-builder-empty.png', 'asset-type-field-builder.png'],
  ['asset-type-field-types.png', 'asset-type-field-types.png'],
  ['asset-type-field-rule.jpg', 'asset-type-field-rule.png'],
  ['structures-hierarchy.png', 'structure-hierarchy.png'],
  ['structure-actions.png', 'structure-actions.png'],
  ['structure-add.png', 'structure-add.png'],
  ['element-add.png', 'element-add.png'],
  ['element-type-options.png', 'element-type-options.png'],
  ['element-site-location-fields.png', 'element-site-location-fields.png'],
  ['collection-details-assets.png', 'collection-details-and-assets.png', 'collection-id'],
  ['collection-add-asset-modal.png', 'collection-add-asset.png', 'collection-id-overlay'],
  ['site-assets-table.png', 'site-assets.png', 'element-id'],
  ['site-location-context.png', 'site-location.png', 'element-id']
];

function maskSvg(width, height, mask) {
  if (!mask) return null;
  const masks = {
    'record-id': [{ x: 40, y: 83, width: 150, height: 36, fill: '#F5F7FB' }],
    'asset-details-id': [{ x: 40, y: 104, width: 150, height: 38, fill: '#F5F7FB' }],
    'connection-id': [{ x: 40, y: 105, width: 150, height: 34, fill: '#8E949F' }],
    'delete-ids': [
      { x: 688, y: 451, width: 330, height: 22, fill: '#FFFFFF' },
      { x: 738, y: 505, width: 300, height: 22, fill: '#FFFFFF' },
      { x: 622, y: 526, width: 160, height: 22, fill: '#FFFFFF' }
    ],
    'collection-id': [{ x: 55, y: 244, width: 320, height: 34, fill: '#FFFFFF' }],
    'collection-id-overlay': [{ x: 55, y: 244, width: 320, height: 34, fill: '#8E949F' }],
    'element-id': [{ x: 40, y: 73, width: 330, height: 38, fill: '#F5F7FB' }]
  };
  const rectangles = (masks[mask] || []).map(({ x, y, width: rectWidth, height: rectHeight, fill }) =>
    `<rect x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}" rx="7" fill="${fill}"/>`
  ).join('');
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${rectangles}</svg>`);
}

const args = parseArgs(process.argv.slice(2));
if (!args.captures) usage('Missing --captures');

const captureDirectory = resolve(args.captures);
const sourceDirectory = resolve('media/screenshots/source');
await mkdir(sourceDirectory, { recursive: true });

const results = [];
for (const [inputName, outputName, mask] of specs) {
  const input = join(captureDirectory, inputName);
  const output = join(sourceDirectory, outputName);
  const metadata = await sharp(input).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Cannot read ${input}`);

  const left = 64;
  const width = metadata.width - left;
  let pipeline = sharp(input).extract({ left, top: 0, width, height: metadata.height });
  const overlay = maskSvg(width, metadata.height, mask);
  if (overlay) pipeline = pipeline.composite([{ input: overlay, blend: 'over' }]);
  await pipeline.png({ palette: true, colours: 256, compressionLevel: 9, effort: 10 }).toFile(output);
  results.push({ input: basename(input), output: `media/screenshots/source/${outputName}`, width, height: metadata.height, mask: mask || null });
}

console.log(JSON.stringify({ prepared: results.length, results }, null, 2));
