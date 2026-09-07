import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import sharp from 'sharp';

// Uses approved public device artwork only; no product implementation is imported.
const directory=process.argv[2];
await mkdir('media/icons/devices',{recursive:true});
const art={};
for(const name of ['switch','network-router','server','desktop']) {
  const path=`media/icons/devices/${name}.svg`;
  let svg;
  if(directory) {
    svg=await readFile(join(directory,`${name}.svg`),'utf8');
    const start=svg.search(/<g\b[^>]*id="Base[^\"]*"/);
    if(start<0)throw new Error(`Inspect pedestal manually: ${name}`);
    const tags=/<\/?g\b[^>]*>/g; tags.lastIndex=start;
    let depth=0,end;
    for(let m;(m=tags.exec(svg));) {depth+=m[0].startsWith('</')?-1:1;if(!depth){end=tags.lastIndex;break;}}
    if(!end)throw new Error(`Unbalanced groups: ${name}`);
    svg=(svg.slice(0,start)+svg.slice(end)).replace(/cls-/g,`${name}-cls-`).replace(/[ \t]+$/gm,'');
    const {info}=await sharp(Buffer.from(svg)).trim().png().toBuffer({resolveWithObject:true});
    svg=svg.replace(/viewBox="[^"]+"/,`viewBox="${-info.trimOffsetLeft} ${-info.trimOffsetTop} ${info.width} ${info.height}"`);
    await writeFile(path,svg);
  } else svg=await readFile(path,'utf8');
  art[name]=svg.replace(/<\?xml[^>]*>/,'');
}
const device=(name,x,y,w,h)=>art[name].replace('<svg ',`<svg x="${x}" y="${y}" width="${w}" height="${h}" `);
const link=d=>`<path d="${d}" fill="none" stroke="#9986DE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
const icons={
  explore:{label:'Explore WanAware',shape:`${device('switch',14,31,132,89)}<circle cx="127" cy="116" r="24" fill="#F3F0FF" stroke="#7964C5" stroke-width="6"/><path d="M145 135 163 153" stroke="#7964C5" stroke-width="8" stroke-linecap="round"/>${device('server',114,100,26,34)}`},
  build:{label:'Build your environment',shape:`${link('M86 83V128H135M86 128H37')}${device('network-router',47,20,79,67)}${device('server',16,107,42,58)}${device('desktop',113,114,54,44)}`},
  assets:{label:'Assets',shape:`${device('server',23,19,65,116)}${device('switch',66,104,99,55)}`},
  integrations:{label:'Integrations',shape:`${link('M53 82V112H118V83')}${device('server',14,22,59,75)}${device('network-router',93,30,74,66)}<path d="M77 101 89 112 77 123" fill="none" stroke="#7964C5" stroke-width="5"/>`},
  relationships:{label:'Relationships',shape:`${link('M88 73V93M31 121V93H141V121')}${device('switch',40,19,96,60)}${device('server',12,112,42,55)}${device('desktop',115,115,52,45)}`},
  catalog:{label:'Asset Types and Service Catalog',shape:`<rect x="21" y="18" width="134" height="147" rx="10" fill="#F0EDFC" stroke="#9986DE" stroke-width="3"/><path d="M21 54H155" stroke="#C6BDEF" stroke-width="3"/>${device('switch',33,24,80,28)}${device('network-router',35,67,65,42)}${device('server',43,119,30,36)}${link('M112 82H141M112 96H133M94 130H141M94 144H133')}`},
  organization:{label:'Structures, Elements, and Collections',shape:`<rect x="5" y="97" width="75" height="71" rx="9" fill="none" stroke="#B7A8EC" stroke-width="2"/><rect x="96" y="97" width="75" height="71" rx="9" fill="none" stroke="#B7A8EC" stroke-width="2"/>${link('M87 65V83M43 97V83H133V97')}${device('network-router',47,15,80,54)}${device('server',11,105,32,52)}${device('switch',41,131,35,23)}${device('server',103,105,32,52)}${device('desktop',133,126,33,29)}`},
  support:{label:'Support and access',shape:`${device('switch',11,25,144,91)}<path d="M110 88 145 99 142 129Q138 144 111 158 87 145 84 127V100Z" fill="#7964C5" stroke="#D5CDF4" stroke-width="3"/><path d="M98 123 108 134 130 110" fill="none" stroke="#F4F1FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`}
};
const manifest={style:'wanaware-connected-device-v2',background:'transparent',pedestal:false,icons:[]};
for(const [id,{label,shape}]of Object.entries(icons)) {
  const source=`media/icons/${id}-network-v2.svg`,file=`media/icons/${id}-network-v2.png`;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="176" height="176" viewBox="0 0 176 176" role="img" aria-label="${label}"><title>${label}</title>${shape}</svg>\n`;
  await writeFile(source,svg);await sharp(Buffer.from(svg)).resize(352,352).png().toFile(file);
  manifest.icons.push({id,label,source,file,publication:'pending-upload-and-preview'});
}
await writeFile('media/icons/network-manifest.json',JSON.stringify(manifest,null,2)+'\n');
const samples=Object.entries(icons).map(([id,{shape}],i)=>`<g transform="translate(${i%4*200+20} ${Math.floor(i/4)*210+20})">${shape}<text x="84" y="185" text-anchor="middle" fill="#888894" font-family="sans-serif" font-size="14">${id}</text></g>`).join('');
for(const [theme,color]of [['light','#FAFAFA'],['dark','#202024']])await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="840" height="440"><rect width="840" height="440" fill="${color}"/>${samples}</svg>`)).png().toFile(`media/icons/preview-network-${theme}.png`);
