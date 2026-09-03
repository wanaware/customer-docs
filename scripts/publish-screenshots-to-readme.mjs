import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const dryRun = process.argv.includes('--dry-run');
const token = process.env.README_API_TOKEN;
const urlMapFlagIndex = process.argv.indexOf('--url-map');
const urlMapPath = urlMapFlagIndex === -1 ? null : process.argv[urlMapFlagIndex + 1];
const screenshotManifestPath = join(root, 'media/screenshot-manifest.json');
const publishingManifestPath = join(root, 'media/publishing-manifest.json');
const workflowCoveragePath = join(root, 'media/workflow-visual-coverage.json');
const placementsPath = join(root, 'media/screenshot-placements.json');

if (urlMapFlagIndex !== -1 && (!urlMapPath || urlMapPath.startsWith('--'))) {
  console.error('--url-map requires a path to a JSON object that maps screenshot IDs or filenames to files.readme.io URLs.');
  process.exit(1);
}

if (!dryRun && !token && !urlMapPath) {
  console.error('README_API_TOKEN or --url-map is required. Set the token in the current shell or import already-hosted files.readme.io URLs; never commit credentials.');
  process.exit(1);
}

const urlMap = urlMapPath ? JSON.parse(readFileSync(urlMapPath, 'utf8')) : null;
if (urlMap && (Array.isArray(urlMap) || typeof urlMap !== 'object')) {
  console.error('--url-map must contain a JSON object.');
  process.exit(1);
}

const screenshots = JSON.parse(readFileSync(screenshotManifestPath, 'utf8')).screenshots;
const publishing = JSON.parse(readFileSync(publishingManifestPath, 'utf8'));
const coverage = JSON.parse(readFileSync(workflowCoveragePath, 'utf8')).entries;
const placements = JSON.parse(readFileSync(placementsPath, 'utf8')).placements;

function pngDimensions(buffer) {
  if (buffer.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
    throw new Error('Publishing file is not a PNG.');
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function findReadMeUrl(value) {
  if (typeof value === 'string' && value.startsWith('https://files.readme.io/')) return value;
  if (Array.isArray(value)) {
    for (const item of value) {
      const match = findReadMeUrl(item);
      if (match) return match;
    }
  }
  if (value && typeof value === 'object') {
    for (const item of Object.values(value)) {
      const match = findReadMeUrl(item);
      if (match) return match;
    }
  }
  return null;
}

function articlesFor(screenshot) {
  const articles = new Set([screenshot.article]);
  for (const entry of coverage) {
    if ((entry.screenshotIds || []).includes(screenshot.id)) articles.add(entry.article);
  }
  for (const placement of placements) {
    if (placement.screenshotId === screenshot.id) articles.add(placement.article);
  }
  const existing = publishing.assets.find((asset) => asset.id === screenshot.id);
  for (const article of existing?.articles || []) articles.add(article);
  return [...articles].sort();
}

async function upload(screenshot, buffer) {
  const body = new FormData();
  body.append('file', new Blob([buffer], { type: 'image/png' }), basename(screenshot.file));
  const response = await fetch('https://api.readme.com/v2/images', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body
  });
  const raw = await response.text();
  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    payload = raw;
  }
  if (!response.ok) throw new Error(`ReadMe image upload failed (${response.status}): ${raw.slice(0, 300)}`);
  const url = findReadMeUrl(payload);
  if (!url) throw new Error(`ReadMe image upload returned no files.readme.io URL for ${screenshot.id}.`);
  return url;
}

function importedUrlFor(screenshot) {
  if (!urlMap) return null;
  const url = urlMap[screenshot.id] || urlMap[basename(screenshot.file)];
  if (!url) {
    throw new Error(`No ReadMe URL was supplied for ${screenshot.id} (${basename(screenshot.file)}).`);
  }
  if (typeof url !== 'string' || !url.startsWith('https://files.readme.io/')) {
    throw new Error(`Invalid ReadMe URL for ${screenshot.id}; expected an https://files.readme.io/ URL.`);
  }
  return url;
}

const captured = screenshots.filter((screenshot) => /^(?:captured|approved)/.test(screenshot.status || ''));
let changed = false;

for (const screenshot of captured) {
  const publishingPath = join(root, screenshot.file);
  const buffer = readFileSync(publishingPath);
  const sha256 = createHash('sha256').update(buffer).digest('hex');
  const dimensions = pngDimensions(buffer);
  const existingIndex = publishing.assets.findIndex((asset) => asset.id === screenshot.id);
  const existing = existingIndex === -1 ? null : publishing.assets[existingIndex];
  const alreadyCurrent = existing?.sha256 === sha256 && existing?.bytes === buffer.length;

  if (alreadyCurrent) {
    console.log(`current  ${screenshot.id}`);
    continue;
  }
  if (dryRun) {
    console.log(`upload   ${screenshot.id}`);
    continue;
  }

  const importedUrl = importedUrlFor(screenshot);
  console.log(`${importedUrl ? 'import' : 'upload'}   ${screenshot.id}`);
  const publishedUrl = importedUrl || await upload(screenshot, buffer);
  const entry = {
    id: screenshot.id,
    kind: 'screenshot',
    source: screenshot.sourceFile,
    publishingFile: screenshot.file,
    sha256,
    width: dimensions.width,
    height: dimensions.height,
    bytes: buffer.length,
    alt: screenshot.alt,
    articles: articlesFor(screenshot),
    publishedUrl,
    renderedOn: new Date().toISOString().slice(0, 10),
    approvalState: 'pending-product-support-review'
  };
  if (existingIndex === -1) publishing.assets.push(entry);
  else publishing.assets[existingIndex] = entry;
  changed = true;
}

if (changed) {
  publishing.screenshotPolicy = {
    status: 'action-coverage-capture-in-progress',
    reason: 'Captured screenshots are hosted through ReadMe and mapped to the action they explain. Remaining blocked states stay draft.',
    inventory: 'media/screenshot-manifest.json',
    workflowCoverage: 'media/workflow-visual-coverage.json'
  };
  writeFileSync(publishingManifestPath, `${JSON.stringify(publishing, null, 2)}\n`);
  console.log(`updated  ${publishingManifestPath}`);
}
