import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(await readFile('media/icons/network-manifest.json','utf8'));
const urls=JSON.parse(await readFile('media/icons/network-readme-urls.json','utf8'));
const publishing=JSON.parse(await readFile('media/publishing-manifest.json','utf8'));
const welcome='docs/Start Here/welcome-to-wanaware.md';
let article=await readFile(welcome,'utf8');
for(const icon of manifest.icons) {
  const bytes=await readFile(icon.file),url=urls[icon.id];
  if(!url?.startsWith('https://files.readme.io/')||!url.endsWith(`-${icon.id}-network-v2.png`))throw new Error(`Missing revised upload: ${icon.id}`);
  const alt=`Network-device illustration for ${icon.label}, without a pedestal.`;
  const entry={id:`help-icon-${icon.id}`,kind:'icon',source:icon.source,publishingFile:icon.file,sha256:createHash('sha256').update(bytes).digest('hex'),width:352,height:352,bytes:bytes.length,alt,articles:['/docs/welcome-to-wanaware'],publishedUrl:url,renderedOn:new Date().toISOString().slice(0,10),approvalState:'pending-product-support-review'};
  const index=publishing.assets.findIndex(a=>a.id===entry.id);
  if(index<0)publishing.assets.push(entry);else publishing.assets[index]=entry;
  article=article.replace(new RegExp(`https://files\\.readme\\.io/[^"\\s]+-${icon.id}(?:-network-v2)?\\.png`,'g'),url);
  icon.publication='hosted-pending-rendered-preview';
}
await writeFile(welcome,article);
await writeFile('media/icons/network-manifest.json',JSON.stringify(manifest,null,2)+'\n');
await writeFile('media/publishing-manifest.json',JSON.stringify(publishing,null,2)+'\n');
