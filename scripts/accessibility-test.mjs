import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4321';
const catalogue = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const guides = catalogue.guides ?? [];
if (guides.length === 0) throw new Error('No guide routes found in src/data/products.json.');

const pages = [
  '/',
  '/guides/',
  '/affiliate-disclosure/',
  ...guides.map(({ slug }) => `/guides/${slug}/`)
];
if (new Set(pages).size !== pages.length) throw new Error('Duplicate route detected in accessibility test list.');

fs.mkdirSync('test-reports/axe', { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const failures = [];
const summaries = [];

try {
  const page = await context.newPage();
  for (const route of pages) {
    const response = await page.goto(baseUrl + route, { waitUntil: 'networkidle' });
    if (!response || !response.ok()) {
      failures.push(route + ': page did not return a successful HTTP response.');
      continue;
    }
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    const report = { url: route, violations: results.violations, passes: results.passes.length, incomplete: results.incomplete.length };
    const file = path.join('test-reports/axe', (route === '/' ? 'home' : route.split('/').filter(Boolean).join('__')) + '.json');
    fs.writeFileSync(file, JSON.stringify(report, null, 2));
    summaries.push({ route, passes: results.passes.length, violations: results.violations.length, incomplete: results.incomplete.length });

    for (const violation of results.violations) {
      console.log(route + ' | ' + violation.impact + ' | ' + violation.id + ' | ' + violation.nodes.length + ' node(s)');
      if (violation.impact === 'critical' || violation.impact === 'serious') {
        failures.push(route + ': ' + violation.id + ' (' + violation.impact + ')');
      }
    }
  }
} finally {
  await context.close();
  await browser.close();
}

console.log(JSON.stringify({ auditedRoutes: pages.length, guideCount: guides.length, results: summaries }, null, 2));
if (failures.length) {
  console.error('Accessibility audit failed:');
  for (const failure of failures) console.error('- ' + failure);
  process.exit(1);
}
console.log('axe-core audit passed: no serious or critical WCAG violations.');
