import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
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

const markdownFiles = walk(docsRoot).filter((file) => extname(file) === '.md');
const allFiles = walk(root);
const slugFiles = new Set(markdownFiles.map((file) => file.replace(/\.md$/, '')));

for (const file of markdownFiles) {
  const text = readFileSync(file, 'utf8');
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---\n/);

  if (!frontmatter) {
    fail(file, 'missing YAML frontmatter');
    continue;
  }

  for (const field of ['title:', 'excerpt:', 'deprecated:', 'hidden:']) {
    if (!frontmatter[1].includes(field)) fail(file, `frontmatter is missing ${field}`);
  }

  if (!/^# .+/m.test(text.slice(frontmatter[0].length))) {
    fail(file, 'missing an H1 heading');
  }

  const isCategory = file.endsWith('/index.md');
  if (!isCategory) {
    const metadata = text.match(/<!-- kb-meta\n([\s\S]*?)\n-->/);
    if (!metadata) {
      fail(file, 'missing kb-meta block');
    } else {
      for (const field of [
        'content-type:',
        'audience:',
        'permission:',
        'product-area:',
        'content-owner:',
        'review-owner:',
        'last-verified:'
      ]) {
        if (!metadata[1].includes(field)) fail(file, `kb-meta is missing ${field}`);
      }

      const contentType = metadata[1].match(/content-type:\s*([^\n]+)/)?.[1]?.trim();
      if (contentType === 'workflow' || contentType === 'quickstart') {
        for (const label of ['**Outcome:**', '**For:**', '**Permission:**', '**Time:**', '**Changes made:**']) {
          if (!text.includes(label)) fail(file, `workflow is missing ${label}`);
        }
        if (!/^## (Check your result|Verify)/m.test(text)) fail(file, 'workflow is missing a success-verification section');
        if (!text.includes('support@wanaware.com')) fail(file, 'workflow is missing the support handoff');
      }

      if (contentType === 'troubleshooting') {
        for (const heading of ['## Fast checks', '## Common causes and fixes', '## Verify the fix', '## Known limitations', '## Get help']) {
          if (!text.includes(heading)) fail(file, `troubleshooting article is missing ${heading}`);
        }
      }
    }
  }

  const links = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(?:https?:|mailto:|#)/.test(link) || link.startsWith('/docs/')) continue;
    const cleanLink = link.split('#')[0];
    if (!cleanLink) continue;
    const destination = resolve(dirname(file), cleanLink);
    if (!existsSync(destination) && !existsSync(`${destination}.md`) && !slugFiles.has(destination)) {
      fail(file, `broken relative link: ${link}`);
    }
  }
}

for (const orderFile of walk(docsRoot).filter((file) => file.endsWith('_order.yaml'))) {
  const directory = dirname(orderFile);
  const entries = readFileSync(orderFile, 'utf8')
    .split('\n')
    .map((line) => line.match(/^\s*-\s+(.+?)\s*$/)?.[1])
    .filter(Boolean);

  for (const entry of entries) {
    if (!existsSync(join(directory, entry)) && !existsSync(join(directory, `${entry}.md`))) {
      fail(orderFile, `ordered entry does not exist: ${entry}`);
    }
  }
}

const highConfidenceSecretPatterns = [
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key'],
  [/\bAKIA[0-9A-Z]{16}\b/, 'AWS access key'],
  [/\bghp_[A-Za-z0-9]{20,}\b|\bgithub_pat_[A-Za-z0-9_]{20,}\b/, 'GitHub token'],
  [/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/, 'JWT'],
  [/(?:client_secret|api_key|access_token)\s*[:=]\s*["'][^"']{8,}["']/i, 'assigned secret value'],
  [/https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/i, 'local-only URL'],
  [/wanaware\/wanaware-doc/i, 'private engineering repository name'],
  [/support@readme\.io|Welcome to ReadMe|Developer Hub/i, 'stock ReadMe content']
];

for (const file of allFiles) {
  if (!['.md', '.json', '.yaml', '.yml', '.csv'].includes(extname(file))) continue;
  const text = readFileSync(file, 'utf8');
  for (const [pattern, label] of highConfidenceSecretPatterns) {
    if (pattern.test(text)) fail(file, `contains a forbidden ${label} pattern`);
  }
}

const legacyPolicy = JSON.parse(readFileSync(join(root, 'migration/source-policy.json'), 'utf8'));
if (legacyPolicy.status !== 'outdated') {
  fail(join(root, 'migration/source-policy.json'), 'all Stonly material must remain marked outdated');
}

const benchmark = JSON.parse(readFileSync(join(root, 'integration/search-quality-questions.json'), 'utf8'));
if (benchmark.questions.length !== 20) {
  fail(join(root, 'integration/search-quality-questions.json'), 'Ask AI benchmark must contain exactly 20 questions');
}

if (errors.length) {
  console.error(`Documentation checks failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Documentation checks passed for ${markdownFiles.length} guide pages.`);
