import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, dirname, extname, join, relative } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const docsRoot = join(root, 'docs');
const errors = [];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function fail(file, message) {
  errors.push(`${relative(root, file)}: ${message}`);
}

function parseJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch (error) {
    fail(file, `invalid JSON: ${error.message}`);
    return null;
  }
}

function metadataValue(block, field) {
  return block.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'))?.[1]?.trim();
}

function slugForMarkdown(file) {
  const name = basename(file, '.md');
  return name === 'index' ? basename(dirname(file)) : name;
}

function pngDimensions(file) {
  const buffer = readFileSync(file);
  const signature = buffer.subarray(0, 8).toString('hex');
  if (signature !== '89504e470d0a1a0a' || buffer.length < 24) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

const markdownFiles = walk(docsRoot).filter((file) => extname(file) === '.md');
const allFiles = walk(root);
const publicSlugs = new Set(markdownFiles.map((file) => `/docs/${slugForMarkdown(file)}`));
const publishingManifestFile = join(root, 'media/publishing-manifest.json');
const publishingManifest = parseJson(publishingManifestFile);
const publishedMediaByUrl = new Map(
  (publishingManifest?.assets || []).map((asset) => [asset.publishedUrl, asset])
);

if (publicSlugs.size !== markdownFiles.length) {
  fail(docsRoot, 'two or more guide pages resolve to the same public slug');
}

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8');
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---\n/);

  const discouragedProse = [
    [/\b(?:simply|just|easy|easily|obvious|obviously)\b/i, 'vague ease claim'],
    [/\bwill\b/i, 'future-tense product or publication claim']
  ];

  for (const [pattern, label] of discouragedProse) {
    const match = source.match(pattern);
    if (match) fail(file, `contains a ReadMe style-guide ${label}: ${match[0]}`);
  }

  if (!frontmatter) {
    fail(file, 'missing YAML frontmatter');
    continue;
  }

  for (const field of ['title:', 'excerpt:', 'deprecated:', 'hidden:']) {
    if (!frontmatter[1].includes(field)) fail(file, `frontmatter is missing ${field}`);
  }

  if (!/^# .+/m.test(source.slice(frontmatter[0].length))) {
    fail(file, 'missing an H1 heading');
  }

  const isCategory = file.endsWith('/index.md');
  if (!isCategory) {
    const metadata = source.match(/<!-- kb-meta\n([\s\S]*?)\n-->/);
    if (!metadata) {
      fail(file, 'missing kb-meta block');
    } else {
      const requiredMetadata = [
        'content-type',
        'audience',
        'permission',
        'product-area',
        'content-owner',
        'review-owner',
        'last-verified',
        'last-verified-release',
        'screenshot-set',
        'video-status',
        'release-status'
      ];

      for (const field of requiredMetadata) {
        if (!metadataValue(metadata[1], field)) fail(file, `kb-meta is missing ${field}`);
      }

      const releaseStatus = metadataValue(metadata[1], 'release-status');
      if (!['draft', 'ready'].includes(releaseStatus)) {
        fail(file, 'release-status must be draft or ready');
      }

      if (releaseStatus === 'ready') {
        for (const field of ['last-verified', 'last-verified-release', 'screenshot-set']) {
          if (metadataValue(metadata[1], field) === 'pending') {
            fail(file, `${field} cannot be pending when release-status is ready`);
          }
        }
      }

      const contentType = metadataValue(metadata[1], 'content-type');
      if (contentType === 'workflow' || contentType === 'quickstart') {
        for (const label of ['**Outcome:**', '**For:**', '**Permission:**', '**Time:**', '**Changes made:**']) {
          if (!source.includes(label)) fail(file, `workflow is missing ${label}`);
        }
        for (const heading of ['## If you\'re stuck', '## Before you start', '## Learn, show me, do it', '## Get help']) {
          if (!source.includes(heading)) fail(file, `workflow is missing ${heading}`);
        }
        if (!/^## (?:Field|Option|Starting option|Status and action|View and control|Field and relationship|Field and checkpoint|Page and checkpoint|Action-safety).+guide$/m.test(source)) {
          fail(file, 'workflow is missing a concrete field, option, action, or checkpoint guide');
        }
        if (!/\n1\.\s/.test(source)) fail(file, 'workflow is missing numbered steps');
        if (!source.includes('**Expected result:**')) fail(file, 'workflow is missing an expected-result checkpoint');
        if (!/^## (Check your result|Verify)/m.test(source)) fail(file, 'workflow is missing a success-verification section');
        const changesMade = source.match(/\*\*Changes made:\*\*\s*([^\n]+)/)?.[1]?.trim() || '';
        if (!/^None\b/i.test(changesMade) && !/^## (Undo this change|Recover)/m.test(source)) {
          fail(file, 'workflow changes data but is missing undo or recovery guidance');
        }
        if (!source.includes('support@wanaware.com')) fail(file, 'workflow is missing the support handoff');
        const vagueInstruction = source.match(/\b(?:complete the prompts|fill out (?:the )?descriptive fields|select the appropriate option|when available|available save action|available collection|available option)\b/i);
        if (vagueInstruction) fail(file, `contains vague instructional wording: ${vagueInstruction[0]}`);

        const permission = metadataValue(metadata[1], 'permission') || '';
        if (/\b[A-Z][A-Z_]{2,}\b/.test(permission)) {
          fail(file, 'permission metadata must use exact lowercase action resource wording');
        }
      }

      if (contentType === 'troubleshooting') {
        for (const heading of ['## Fast checks', '## Common causes and fixes', '## Verify the fix', '## Known limitations', '## Get help']) {
          if (!source.includes(heading)) fail(file, `troubleshooting article is missing ${heading}`);
        }
        if (!source.includes('support@wanaware.com')) fail(file, 'troubleshooting article is missing the support handoff');
      }
    }
  }

  const links = [...source.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(?:mailto:|#)/.test(link)) continue;
    if (link.startsWith('https://docs.wanaware.com/docs/')) {
      const destination = new URL(link).pathname;
      if (!publicSlugs.has(destination)) fail(file, `broken canonical documentation link: ${link}`);
      continue;
    }
    if (/^https?:/.test(link)) continue;
    if (link.startsWith('/docs/')) {
      fail(file, `internal documentation link is missing the canonical protocol and host: ${link}`);
      continue;
    }
    fail(file, `repository-relative documentation links fail ReadMe Docs Audit; use the canonical https://docs.wanaware.com/docs/... URL: ${link}`);
  }

  for (const image of source.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
    const alt = image[1].trim();
    const path = image[2].split('#')[0];
    if (!alt) fail(file, `image is missing alt text: ${path}`);
    if (/\.gif(?:$|\?)/i.test(path)) fail(file, `GIFs are not allowed: ${path}`);
    if (!path.startsWith('https://files.readme.io/')) {
      fail(file, `customer images must use an approved files.readme.io URL: ${path}`);
      continue;
    }
    const manifestAsset = publishedMediaByUrl.get(path);
    if (!manifestAsset) {
      fail(file, `image is missing from media/publishing-manifest.json: ${path}`);
      continue;
    }
    if (manifestAsset.alt !== alt) fail(file, `image alt text differs from the publishing manifest: ${path}`);
    if (!(manifestAsset.articles || []).includes(`/docs/${slugForMarkdown(file)}`)) {
      fail(file, `publishing manifest does not associate this image with the article: ${path}`);
    }
  }
}

for (const orderFile of walk(docsRoot).filter((file) => file.endsWith('_order.yaml'))) {
  const directory = dirname(orderFile);
  const entries = readFileSync(orderFile, 'utf8')
    .split('\n')
    .map((line) => line.match(/^\s*-\s+(.+?)\s*$/)?.[1])
    .filter(Boolean);

  if (new Set(entries).size !== entries.length) fail(orderFile, 'contains a duplicate entry');

  for (const entry of entries) {
    if (!existsSync(join(directory, entry)) && !existsSync(join(directory, `${entry}.md`))) {
      fail(orderFile, `ordered entry does not exist: ${entry}`);
    }
  }

  const childrenThatNeedOrdering = readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.name !== 'index.md' && entry.name !== '_order.yaml')
    .filter((entry) => entry.isDirectory() || extname(entry.name) === '.md')
    .map((entry) => entry.isDirectory() ? entry.name : basename(entry.name, '.md'));

  for (const child of childrenThatNeedOrdering) {
    if (!entries.includes(child)) fail(orderFile, `content is missing from order: ${child}`);
  }
}

const highConfidenceSecretPatterns = [
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key'],
  [/\bAKIA[0-9A-Z]{16}\b/, 'AWS access key'],
  [/\bghp_[A-Za-z0-9]{20,}\b|\bgithub_pat_[A-Za-z0-9_]{20,}\b/, 'GitHub token'],
  [/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/, 'JWT'],
  [/(?:client_secret|api_key|access_token)\s*[:=]\s*["'][^"']{8,}["']/i, 'assigned secret value'],
  [/https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/i, 'local-only URL'],
  [/https?:\/\/[a-z0-9-]+\.dev\.wanaware\.com/i, 'internal environment URL'],
  [/wanaware\/wanaware-doc/i, 'private engineering repository name'],
  [/support@readme\.io|Welcome to ReadMe|Developer Hub/i, 'stock ReadMe content'],
  [/\b\d{12}\b/, 'unmasked 12-digit account identifier']
];

for (const file of allFiles) {
  if (!['.md', '.json', '.yaml', '.yml', '.csv', '.svg', '.d2'].includes(extname(file))) continue;
  const source = readFileSync(file, 'utf8');
  for (const [pattern, label] of highConfidenceSecretPatterns) {
    if (pattern.test(source)) fail(file, `contains a forbidden ${label} pattern`);
  }
}

const excludedFamilyPattern = /\b(?:workers?|observability|pulse|monitors?|monitoring|fleet manager)\b/i;
const captureEnvironmentPattern = /\b(?:Harbor Meridian Systems|HMSD|Docs Demo|Demo Org)\b|demoaccount\.dev/i;
const publicScopeFiles = [
  ...markdownFiles,
  ...walk(join(root, 'recordings')).filter((file) => extname(file) === '.md'),
  ...walk(join(root, 'media/diagrams')).filter((file) => ['.d2', '.svg'].includes(extname(file))),
  join(root, 'integration/portal-help-links.json'),
  join(root, 'integration/search-quality-questions.json')
];

for (const file of publicScopeFiles) {
  const source = readFileSync(file, 'utf8');
  if (excludedFamilyPattern.test(source)) {
    fail(file, 'contains first-release-excluded product terminology');
  }
  if (captureEnvironmentPattern.test(source)) {
    fail(file, 'contains media-capture workspace or record identifiers in public content');
  }
}

const genericIntegration = join(docsRoot, 'integrations/add-an-integration.md');
const providerNamePattern = /\b(?:AWS|Amazon Web Services|Azure|Google Cloud|GCP|Oracle Cloud|VMware)\b/i;
if (providerNamePattern.test(readFileSync(genericIntegration, 'utf8'))) {
  fail(genericIntegration, 'provider-neutral integration guide contains a provider name');
}

const productMapFile = join(docsRoot, 'start-here/product-map-and-terminology.md');
const productMap = readFileSync(productMapFile, 'utf8');
const productModelSource = join(root, 'media/diagrams/organization-model.d2');
const productModelSvg = join(root, 'media/diagrams/organization-model.svg');
const organizationModelUrl = (publishingManifest?.assets || []).find((asset) => asset.id === 'organization-model')?.publishedUrl;
if (!existsSync(productModelSource)) fail(productModelSource, 'missing editable D2 source');
if (!existsSync(productModelSvg)) fail(productModelSvg, 'missing generated SVG');
const productMapMarkers = [
  '## Navigation and permission map',
  '| Portal path | Permission that makes it visible |',
  '## How the records fit together',
  organizationModelUrl,
  '## These sound alike',
  'capitalized words',
  '`read my_launchpad`',
  '`read structures`',
  '`read assets`',
  '`read elements`',
  '`view general` and `view company_information`',
  '`read integrations`',
  '`read users`',
  '`read asset_types_builder`',
  '`read service_catalog`',
  '`read billing`, `read billing_history`, `read my_subscriptions`, and `read payment_methods`',
  '`view my_profile`',
  '`view support`',
  '/assets/inventory',
  '/administration/service-catalog'
];
for (const marker of productMapMarkers) {
  if (!marker || !productMap.includes(marker)) {
    fail(productMapFile, `product map is missing required content: ${marker}`);
  }
}

const glossaryTerms = [
  'Integration',
  'Asset',
  'Discovery',
  'Inventory',
  'Asset Type',
  'Service Catalog',
  'Relationship',
  'Structure',
  'Structure Tag',
  'Data Tag',
  'Element',
  'Site',
  'Collection',
  'Role',
  'Permission'
];
for (const term of glossaryTerms) {
  const heading = `### ${term}`;
  const start = productMap.indexOf(heading);
  if (start === -1) {
    fail(productMapFile, `glossary is missing ${term}`);
    continue;
  }
  const nextTerm = productMap.indexOf('\n### ', start + heading.length);
  const nextSection = productMap.indexOf('\n## ', start + heading.length);
  const candidates = [nextTerm, nextSection].filter(index => index !== -1);
  const end = candidates.length ? Math.min(...candidates) : productMap.length;
  const section = productMap.slice(start, end);
  if (!section.includes('- **Where:**')) fail(productMapFile, `${term} is missing Where`);
  if (!section.includes('- **See also:**')) fail(productMapFile, `${term} is missing See also`);
}

const routeMapFile = join(root, 'integration/portal-help-links.json');
const routeMap = parseJson(routeMapFile);
if (routeMap) {
  const routeKeys = new Set();
  for (const [index, route] of (routeMap.routes || []).entries()) {
    for (const field of ['portalRoute', 'article', 'label']) {
      if (!route[field]) fail(routeMapFile, `route ${index + 1} is missing ${field}`);
    }
    if (route.article && !publicSlugs.has(route.article)) {
      fail(routeMapFile, `route ${index + 1} points to unknown article ${route.article}`);
    }
    if (routeKeys.has(route.portalRoute)) fail(routeMapFile, `route ${index + 1} duplicates ${route.portalRoute}`);
    routeKeys.add(route.portalRoute);
  }
}

if (publishingManifest) {
  if (publishingManifest.publishingHost !== 'files.readme.io') {
    fail(publishingManifestFile, 'publishingHost must be files.readme.io');
  }
  const ids = new Set();
  const urls = new Set();
  for (const [index, asset] of (publishingManifest.assets || []).entries()) {
    const label = `asset ${index + 1}`;
    for (const field of ['id', 'source', 'reviewArtifact', 'publishingFile', 'sha256', 'width', 'height', 'bytes', 'alt', 'publishedUrl', 'renderedOn', 'approvalState']) {
      if (asset[field] === undefined || asset[field] === '') fail(publishingManifestFile, `${label} is missing ${field}`);
    }
    if (ids.has(asset.id)) fail(publishingManifestFile, `${label} has duplicate id ${asset.id}`);
    if (urls.has(asset.publishedUrl)) fail(publishingManifestFile, `${label} has duplicate publishedUrl ${asset.publishedUrl}`);
    ids.add(asset.id);
    urls.add(asset.publishedUrl);

    if (!String(asset.source || '').endsWith('.d2')) fail(publishingManifestFile, `${label} source must be D2`);
    if (!String(asset.reviewArtifact || '').endsWith('.svg')) fail(publishingManifestFile, `${label} review artifact must be SVG`);
    if (!String(asset.publishingFile || '').endsWith('.png')) fail(publishingManifestFile, `${label} publishing file must be PNG`);
    if (!String(asset.publishedUrl || '').startsWith('https://files.readme.io/')) fail(publishingManifestFile, `${label} has an unapproved publishing URL`);

    for (const field of ['source', 'reviewArtifact', 'publishingFile']) {
      const path = join(root, asset[field] || '');
      if (!existsSync(path)) fail(publishingManifestFile, `${label} ${field} does not exist: ${asset[field]}`);
    }

    const publishingPath = join(root, asset.publishingFile || '');
    if (existsSync(publishingPath)) {
      const bytes = statSync(publishingPath).size;
      if (bytes !== asset.bytes) fail(publishingManifestFile, `${label} byte count does not match ${asset.publishingFile}`);
      if (bytes > 256000) fail(publishingManifestFile, `${label} exceeds 250 KB`);
      const checksum = createHash('sha256').update(readFileSync(publishingPath)).digest('hex');
      if (checksum !== asset.sha256) fail(publishingManifestFile, `${label} checksum does not match ${asset.publishingFile}`);
      const dimensions = pngDimensions(publishingPath);
      if (!dimensions) fail(publishingManifestFile, `${label} is not a valid PNG`);
      else if (dimensions.width !== asset.width || dimensions.height !== asset.height) {
        fail(publishingManifestFile, `${label} dimensions do not match ${asset.publishingFile}`);
      }
      if (dimensions?.width !== 1440) fail(publishingManifestFile, `${label} publishing PNG must be 1440 pixels wide`);
    }

    const altLength = String(asset.alt || '').trim().length;
    if (altLength < 40 || altLength > 150) fail(publishingManifestFile, `${label} alt text must be 40–150 characters`);
    if (!Array.isArray(asset.articles) || !asset.articles.length) fail(publishingManifestFile, `${label} has no associated articles`);
    for (const article of asset.articles || []) {
      if (!publicSlugs.has(article)) fail(publishingManifestFile, `${label} points to unknown article ${article}`);
    }
  }
}

const coverageFile = join(root, 'integration/first-release-coverage.json');
const coverage = parseJson(coverageFile);
if (coverage) {
  const keys = new Set();
  for (const [index, entry] of (coverage.entries || []).entries()) {
    const label = `coverage entry ${index + 1}`;
    for (const field of ['surface', 'routeOrAction', 'permission', 'disposition']) {
      if (!entry[field]) fail(coverageFile, `${label} is missing ${field}`);
    }
    const key = `${entry.surface}|${entry.routeOrAction}`;
    if (keys.has(key)) fail(coverageFile, `${label} is duplicated`);
    keys.add(key);
    if (!['documented', 'unpublished', 'blocked'].includes(entry.disposition)) {
      fail(coverageFile, `${label} has invalid disposition ${entry.disposition}`);
    }
    if (entry.disposition === 'documented' && !publicSlugs.has(entry.article)) {
      fail(coverageFile, `${label} must point to a published guide article`);
    }
    if (entry.disposition === 'blocked' && !publicSlugs.has(entry.article)) {
      fail(coverageFile, `${label} must point to its draft guide article`);
    }
    if (entry.disposition === 'unpublished' && !entry.reason) {
      fail(coverageFile, `${label} must explain why it is unpublished`);
    }
  }
}

const benchmarkFile = join(root, 'integration/search-quality-questions.json');
const benchmark = parseJson(benchmarkFile);
if (benchmark) {
  if (benchmark.questions?.length !== 20) {
    fail(benchmarkFile, 'Ask AI benchmark must contain exactly 20 questions');
  }
  for (const [index, question] of (benchmark.questions || []).entries()) {
    if (!publicSlugs.has(question.expectedSlug)) {
      fail(benchmarkFile, `question ${index + 1} points to unknown article ${question.expectedSlug}`);
    }
  }
}

const screenshotManifestFile = join(root, 'media/screenshot-manifest.json');
const screenshotManifest = parseJson(screenshotManifestFile);
if (screenshotManifest) {
  const screenshots = screenshotManifest.screenshots || [];
  if (screenshots.length < 40 || screenshots.length > 55) {
    fail(screenshotManifestFile, 'launch screenshot inventory must stay within the approved 40–55 item range');
  }
  const ids = new Set();
  const files = new Set();
  for (const [index, screenshot] of screenshots.entries()) {
    if (!screenshot.id || ids.has(screenshot.id)) fail(screenshotManifestFile, `screenshot ${index + 1} has a missing or duplicate id`);
    if (!screenshot.file || files.has(screenshot.file)) fail(screenshotManifestFile, `screenshot ${index + 1} has a missing or duplicate file`);
    ids.add(screenshot.id);
    files.add(screenshot.file);
    if (!/\.png$/i.test(screenshot.file || '')) fail(screenshotManifestFile, `screenshot ${index + 1} must use PNG`);
    const altLength = (screenshot.alt || '').trim().length;
    if (altLength < 40 || altLength > 150) fail(screenshotManifestFile, `screenshot ${index + 1} alt text must be 40–150 characters`);
    if (!publicSlugs.has(screenshot.article)) fail(screenshotManifestFile, `screenshot ${index + 1} points to unknown article ${screenshot.article}`);
    if (/^(?:captured|approved)/.test(screenshot.status || '')) {
      const path = join(root, screenshot.file);
      if (!existsSync(path)) fail(screenshotManifestFile, `captured screenshot is missing: ${screenshot.file}`);
      else {
        if (statSync(path).size > 256000) fail(screenshotManifestFile, `captured screenshot exceeds 250 KB: ${screenshot.file}`);
        const dimensions = pngDimensions(path);
        if (!dimensions) fail(screenshotManifestFile, `captured screenshot is not a valid PNG: ${screenshot.file}`);
        else if (dimensions.width < 750 || dimensions.width > 1000) {
          fail(screenshotManifestFile, `captured screenshot width must be 750–1000 pixels: ${screenshot.file}`);
        }
      }
      if (!screenshot.sourceFile || !existsSync(join(root, screenshot.sourceFile))) {
        fail(screenshotManifestFile, `captured screenshot is missing its safe source crop: ${screenshot.sourceFile || screenshot.file}`);
      }
      if (screenshot.style !== 'wanaware-framed-v1') {
        fail(screenshotManifestFile, `captured screenshot must use wanaware-framed-v1: ${screenshot.file}`);
      }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(screenshot.captureDate || '')) {
        fail(screenshotManifestFile, `captured screenshot needs a YYYY-MM-DD captureDate: ${screenshot.file}`);
      }
    }
  }
}

const recordingFiles = walk(join(root, 'recordings')).filter((file) => extname(file) === '.md');
if (recordingFiles.length !== 5) fail(join(root, 'recordings'), 'launch requires exactly five recording scripts');
for (const file of recordingFiles) {
  const source = readFileSync(file, 'utf8');
  for (const marker of ['**Status:**', '**Target length:**', '**Embed in:**', '## Recording guardrails', '## Transcript']) {
    if (!source.includes(marker)) fail(file, `recording script is missing ${marker}`);
  }
}

const legacyPolicyFile = join(root, 'migration/source-policy.json');
const legacyPolicy = parseJson(legacyPolicyFile);
if (legacyPolicy?.status !== 'outdated') {
  fail(legacyPolicyFile, 'all Stonly material must remain marked outdated');
}

const legacyRegisterFile = join(root, 'migration/legacy-stonly-guides.csv');
const legacyRows = readFileSync(legacyRegisterFile, 'utf8').trim().split('\n').slice(1);
if (legacyRows.length !== 54) fail(legacyRegisterFile, 'legacy register must contain all 54 Stonly guides');
for (const [index, row] of legacyRows.entries()) {
  const [, , disposition, target] = row.split(',');
  if (!['rewrite', 'merge', 'archive', 'redirect'].includes(disposition)) {
    fail(legacyRegisterFile, `row ${index + 2} has invalid disposition ${disposition}`);
  }
  if (target && !publicSlugs.has(target)) {
    fail(legacyRegisterFile, `row ${index + 2} points to unknown article ${target}`);
  }
}

const redirectsFile = join(root, 'integration/readme-redirects.csv');
const redirectRows = readFileSync(redirectsFile, 'utf8').trim().split('\n').slice(1);
for (const [index, row] of redirectRows.entries()) {
  const [, target] = row.split(',');
  if (!publicSlugs.has(target)) fail(redirectsFile, `row ${index + 2} points to unknown article ${target}`);
}

if (errors.length) {
  console.error(`Documentation checks failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Documentation checks passed for ${markdownFiles.length} guide pages, ${screenshotManifest?.screenshots?.length || 0} screenshot slots, and ${recordingFiles.length} recording scripts.`);
