import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const docsRoot = join(root, 'docs');
const placements = JSON.parse(readFileSync(join(root, 'media/screenshot-placements.json'), 'utf8')).placements;
const publishing = JSON.parse(readFileSync(join(root, 'media/publishing-manifest.json'), 'utf8')).assets;

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

const markdownBySlug = new Map(
  walk(docsRoot)
    .filter((file) => statSync(file).isFile() && file.endsWith('.md'))
    .map((file) => [`/docs/${basename(file, '.md')}`, file])
);

for (const placement of placements) {
  const file = markdownBySlug.get(placement.article);
  if (!file) throw new Error(`Unknown article ${placement.article}`);
  const asset = publishing.find((entry) => entry.id === placement.screenshotId && entry.kind === 'screenshot');
  if (!asset) throw new Error(`Screenshot has not been published through ReadMe: ${placement.screenshotId}`);
  const markdown = `![${asset.alt}](${asset.publishedUrl})`;
  let source = readFileSync(file, 'utf8');

  if (source.includes(markdown)) continue;

  const publishingName = basename(asset.publishingFile);
  const existingImage = new RegExp(`!\\[[^\\]]*\\]\\(https://files\\.readme\\.io/[^)]+-${publishingName.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\)`);
  if (existingImage.test(source)) {
    source = source.replace(existingImage, markdown);
  } else {
    const index = source.indexOf(placement.after);
    if (index === -1) throw new Error(`Placement anchor is missing in ${placement.article}: ${placement.after}`);
    const insertAt = index + placement.after.length;
    source = `${source.slice(0, insertAt)}\n\n${markdown}${source.slice(insertAt)}`;
  }

  const getHelpIndex = source.indexOf('\n## Get help');
  const imageIndex = source.indexOf(markdown);
  if (getHelpIndex !== -1 && imageIndex > getHelpIndex) {
    throw new Error(`Screenshot placement fell below Get help in ${placement.article}: ${placement.screenshotId}`);
  }
  writeFileSync(file, source);
  console.log(`placed   ${placement.screenshotId} -> ${placement.article}`);
}
