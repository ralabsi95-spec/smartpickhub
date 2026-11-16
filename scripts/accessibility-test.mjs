import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4321';
const pages = [
  '/',
  '/guides/',
  '/affiliate-disclosure/',
  '/guides/home-office-ergonomics-us-uk/',
  '/guides/portable-power-travel-tech-us-uk/',
  '/guides/smart-home-security-cameras-us-uk/',
  '/guides/wifi-7-home-mesh-routers-us-uk/',
  '/guides/usb-c-gan-chargers-us-uk/',
  '/guides/webcams-video-calls-streaming-us-uk/',
  '/guides/4k-usb-c-monitors-home-office-us-uk/',
  '/guides/thunderbolt-usb-c-docking-stations-us-uk/',
  '/guides/portable-ssd-external-storage-us-uk/'
];

fs.mkdirSync('test-reports/axe', { recursive: true });
const browser = await chromium.launch({ headless: true });
const failures = [];
const summaries = [];

try {
  const page = await browser.newPage();
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
    const file = path.join('test-reports/axe', (route === '/' ? 'home' : route.replace(/^\\/+|\\/+$/g, '').replaceAll('/', '__')) + '.json');
    fs.writeFileSync(file, JSON.stringify(report, null, 2));
    summaries.push({ route, passes: results.passes.length, violations: results.violations.length });

    for (const violation of results.violations) {
      console.log(route + ' | ' + violation.impact + ' | ' + violation.id + ' | ' + violation.nodes.length + ' node(s)');
      if (violation.impact === 'critical' || violation.impact === 'serious') {
        failures.push(route + ': ' + violation.id + ' (' + violation.impact + ')');
      }
    }
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(summaries, null, 2));
if (failures.length) {
  console.error('axe-core found serious/critical accessibility violations:');
  for (const failure of failures) console.error('- ' + failure);
  process.exit(1);
}
console.log('axe-core audit passed: no serious or critical WCAG violations.');
