import { readFileSync } from 'node:fs';
import process from 'node:process';

const manifest = JSON.parse(readFileSync('media/publishing-manifest.json', 'utf8'));
const failures = [];

await Promise.all(
  (manifest.assets || []).map(async (asset) => {
    try {
      const response = await fetch(asset.publishedUrl, {
        method: 'GET',
        headers: { Range: 'bytes=0-31' },
        signal: AbortSignal.timeout(15000)
      });
      const contentType = response.headers.get('content-type') || '';
      if (!response.ok && response.status !== 206) {
        failures.push(`${asset.id}: HTTP ${response.status}`);
      } else if (!contentType.toLowerCase().startsWith('image/png')) {
        failures.push(`${asset.id}: expected image/png, received ${contentType || 'no content type'}`);
      }
    } catch (error) {
      failures.push(`${asset.id}: ${error.message}`);
    }
  })
);

if (failures.length) {
  console.error(`Online media checks failed with ${failures.length} issue${failures.length === 1 ? '' : 's'}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Online media checks passed for ${manifest.assets.length} ReadMe-hosted PNGs.`);
