import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * GitHub Pages returns HTTP 404 for client-side routes (even with 404.html fallback).
 * Google refuses to index those URLs. Copy index.html into each route folder so
 * crawlers get HTTP 200.
 */
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexHtml = join(dist, 'index.html');

const routes = [
  'enitexa.ai',
  'enitexa.ai/about',
  'enitexa.ai/services',
  'enitexa.ai/work',
  'enitexa.ai/work/cleanso',
  'enitexa.ai/work/infopark-daily',
  'enitexa.ai/work/kk-traveler',
  'enitexa.ai/solutions/laundry',
  'enitexa.ai/cleanso',
  'enitexa.ai/contact',
  'enitexa.ai/core-enitexa',
  'enitexa.ai/learning',
  'work',
  'learning',
  'learning/materials',
];

if (!existsSync(indexHtml)) {
  console.error('dist/index.html missing — run vite build first');
  process.exit(1);
}

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, 'index.html'));
  console.log(`spa page: /${route}/`);
}

console.log(`Created ${routes.length} SPA route pages for GitHub Pages (HTTP 200).`);
