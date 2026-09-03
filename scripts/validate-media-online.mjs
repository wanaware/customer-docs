import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import process from 'node:process';

const manifest = JSON.parse(readFileSync('media/publishing-manifest.json', 'utf8'));
const failures = [];

await Promise.all(
  (manifest.assets || []).map(async (asset) => {
    try {
      const response = await fetch(asset.publishedUrl, {
        method: 'GET',
        signal: AbortSignal.timeout(15000)
      });
      const contentType = response.headers.get('content-type') || '';
      if (!response.ok && response.status !== 206) {
        failures.push(`${asset.id}: HTTP ${response.status}`);
      } else if (!contentType.toLowerCase().startsWith('image/png')) {
        failures.push(`${asset.id}: expected image/png, received ${contentType || 'no content type'}`);
      } else {
        const bytes = Buffer.from(await response.arrayBuffer());
        const checksum = createHash('sha256').update(bytes).digest('hex');
        if (checksum !== asset.sha256) failures.push(`${asset.id}: hosted checksum does not match the approved publishing PNG`);
        if (bytes.length !== asset.bytes) failures.push(`${asset.id}: hosted byte count does not match the approved publishing PNG`);
        if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a' || bytes.length < 24) {
          failures.push(`${asset.id}: hosted file is not a valid PNG`);
        } else {
          const width = bytes.readUInt32BE(16);
          const height = bytes.readUInt32BE(20);
          if (width !== asset.width || height !== asset.height) failures.push(`${asset.id}: hosted dimensions do not match the approved publishing PNG`);
        }
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
