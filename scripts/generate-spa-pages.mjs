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
  'hexenity',
  'hexenity/about',
  'hexenity/services',
  'hexenity/work',
  'hexenity/work/cleanso',
  'hexenity/work/infopark-daily',
  'hexenity/work/kk-traveler',
  'hexenity/solutions/laundry',
  'hexenity/cleanso',
  'hexenity/contact',
  'hexenity/core-hexenity',
  'hexenity/learning',
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
