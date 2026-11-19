import fs from 'node:fs/promises';
import path from 'node:path';

const siteValue = process.env.PUBLIC_SITE_URL ?? process.env.SITE_URL ?? 'https://smartpickhub.pages.dev';
const apiKey = process.env.INDEXNOW_KEY ?? 'smartpickhub-20261119-7f3c9a2d4b6e8a1c';
const distDir = path.resolve(process.env.DIST_DIR ?? 'dist');

const skip = (reason) => {
  console.log(`IndexNow skipped: ${reason}`);
  process.exit(0);
};

if (!siteValue || !apiKey) skip('PUBLIC_SITE_URL/SITE_URL or INDEXNOW_KEY is not configured.');
if (!/^[A-Za-z0-9-]{8,128}$/.test(apiKey)) throw new Error('INDEXNOW_KEY must be 8–128 letters, numbers or hyphens.');

const site = new URL(siteValue);
const approvedProductionOrigin = 'https://smartpickhub.pages.dev';
if (site.origin !== approvedProductionOrigin || site.pathname !== '/' || site.search || site.hash) {
  skip('IndexNow is permitted only for the exact approved MVP origin https://smartpickhub.pages.dev.');
}
if (site.protocol !== 'https:' || site.hostname !== 'smartpickhub.pages.dev') {
  skip('the configured host is not the approved HTTPS production host.');
}

const robotsPath = path.join(distDir, 'robots.txt');
const homePath = path.join(distDir, 'index.html');
let robots = '';
let homepage = '';
try {
  [robots, homepage] = await Promise.all([
    fs.readFile(robotsPath, 'utf8'),
    fs.readFile(homePath, 'utf8'),
  ]);
} catch {
  skip('dist/robots.txt or dist/index.html is missing; build the site first.');
}
if (/Disallow:\s*\/\s*(?:\r?\n|$)/i.test(robots)) skip('robots.txt blocks crawling.');
if (/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(homepage)) {
  skip('the built homepage contains a noindex directive.');
}

const sitemapCandidates = ['sitemap-index.xml', 'sitemap.xml'];
let sitemapText = '';
let sitemapFile = '';
for (const name of sitemapCandidates) {
  try {
    sitemapFile = path.join(distDir, name);
    sitemapText = await fs.readFile(sitemapFile, 'utf8');
    break;
  } catch {}
}
if (!sitemapText) skip('no sitemap XML was found in dist/.');

const parseLocs = (xml) => [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1].trim().replaceAll('&amp;', '&'));
const sitemapUrls = parseLocs(sitemapText);
const nestedSitemaps = sitemapUrls.filter((url) => /sitemap[^/]*\.xml(?:$|\?)/i.test(url));
let pageUrls = nestedSitemaps.length ? [] : sitemapUrls;
for (const nestedUrl of nestedSitemaps) {
  const nested = new URL(nestedUrl);
  if (nested.origin !== site.origin) continue;
  const relative = nested.pathname.replace(/^\//, '');
  const nestedXml = await fs.readFile(path.join(distDir, relative), 'utf8');
  pageUrls.push(...parseLocs(nestedXml));
}
pageUrls = [...new Set(pageUrls)].filter((value) => {
  try {
    const url = new URL(value);
    return url.origin === site.origin && !url.pathname.endsWith('.xml') && !url.pathname.endsWith('.png');
  } catch { return false; }
});

if (pageUrls.length === 0) skip('the sitemap contains no eligible same-host page URLs.');
if (pageUrls.length > 10000) throw new Error('IndexNow accepts at most 10,000 URLs per request; split the sitemap before submission.');

const keyFile = path.join(distDir, `${apiKey}.txt`);
await fs.writeFile(keyFile, apiKey, 'utf8');
if (process.env.INDEXNOW_PREPARE_ONLY === 'true') {
  console.log(`IndexNow key file prepared at dist/${apiKey}.txt. Deploy this build before running the notification step.`);
  process.exit(0);
}


const expectedDeploymentSha = process.env.EXPECTED_DEPLOYMENT_SHA;
const deploymentResponse = await fetch(new URL('/deployment.json', site));
if (!deploymentResponse.ok) skip('the live deployment marker is not reachable yet.');
let deploymentMarker;
try { deploymentMarker = await deploymentResponse.json(); } catch { skip('the live deployment marker is not valid JSON.'); }
if (expectedDeploymentSha && deploymentMarker.commit !== expectedDeploymentSha) {
  if (process.env.ALLOW_DESCENDANT_DEPLOYMENT !== 'true') {
    skip(`Cloudflare is serving commit ${deploymentMarker.commit ?? 'unknown'}, not the expected commit ${expectedDeploymentSha}.`);
  }
  try {
    const { execFileSync } = await import('node:child_process');
    const deployedSha = deploymentMarker.commit;
    execFileSync('git', ['merge-base', '--is-ancestor', expectedDeploymentSha, deployedSha], { stdio: 'ignore' });
    execFileSync('git', ['merge-base', '--is-ancestor', deployedSha, 'origin/main'], { stdio: 'ignore' });
    const changedFiles = execFileSync('git', ['diff', '--name-only', expectedDeploymentSha, deployedSha], { encoding: 'utf8' })
      .split('\\n').map((file) => file.trim()).filter(Boolean);
    if (changedFiles.some((file) => !file.endsWith('.md'))) {
      skip('the newer live deployment contains non-documentation changes; require CI for that exact commit before notifying.');
    }
    console.log(`Cloudflare serves documentation-only descendant ${deployedSha} of tested commit ${expectedDeploymentSha}.`);
  } catch {
    skip(`Cloudflare serves ${deploymentMarker.commit ?? 'unknown'}, which is not a verified documentation-only descendant of tested commit ${expectedDeploymentSha} on main.`);
  }
}

const [liveRobotsResponse, liveHomeResponse, liveSitemapResponse] = await Promise.all([
  fetch(new URL('/robots.txt', site)),
  fetch(new URL('/', site)),
  fetch(new URL('/sitemap-index.xml', site)),
]);
if (!liveRobotsResponse.ok || !liveHomeResponse.ok || !liveSitemapResponse.ok) {
  skip('live robots.txt, homepage or sitemap index is not reachable.');
}
const [liveRobots, liveHome, liveSitemapIndex] = await Promise.all([
  liveRobotsResponse.text(), liveHomeResponse.text(), liveSitemapResponse.text(),
]);
if (/Disallow:\s*\/\s*(?:\r?\n|$)/i.test(liveRobots)) skip('the live production robots.txt blocks crawling.');
if (/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(liveHome)) {
  skip('the live production homepage still contains a noindex directive.');
}
const liveNestedSitemaps = parseLocs(liveSitemapIndex).filter((url) => /sitemap[^/]*\.xml(?:$|\?)/i.test(url));
const liveSitemapPages = new Set(liveNestedSitemaps.length ? [] : parseLocs(liveSitemapIndex));
for (const nestedUrl of liveNestedSitemaps) {
  const nestedResponse = await fetch(nestedUrl);
  if (!nestedResponse.ok) skip(`live child sitemap could not be fetched: ${nestedUrl}`);
  for (const url of parseLocs(await nestedResponse.text())) liveSitemapPages.add(url);
}
const missingLiveUrls = pageUrls.filter((url) => !liveSitemapPages.has(url));
if (missingLiveUrls.length) skip(`live sitemap is not yet aligned with this build (${missingLiveUrls.length} expected URLs missing).`);

const keyLocation = new URL(`/${apiKey}.txt`, site);
const keyResponse = await fetch(keyLocation);
if (!keyResponse.ok || (await keyResponse.text()).trim() !== apiKey) {
  skip('the deployed production key file is not publicly reachable yet; deploy the prepared dist/ before notifying IndexNow.');
}
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: site.hostname,
    key: apiKey,
    keyLocation: keyLocation.href,
    urlList: pageUrls,
  }),
});
if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow returned HTTP ${response.status}: ${body.slice(0, 500)}`);
}
console.log(`IndexNow accepted notification for ${pageUrls.length} URLs on ${site.hostname}. Acceptance is not a guarantee of crawling or indexing.`);
