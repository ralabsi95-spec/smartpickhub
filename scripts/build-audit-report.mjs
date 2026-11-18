import fs from 'node:fs';
import path from 'node:path';

const root = 'test-reports';
const catalogue = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const guides = catalogue.guides ?? [];

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return null; }
}
function listJson(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(name => name.endsWith('.json')).sort().map(name => path.join(dir, name));
}

const validation = readJson(path.join(root, 'catalogue-validation.json'));
const smoke = readJson(path.join(root, 'smoke-test.json'));
const axeSummary = readJson(path.join(root, 'axe', 'summary.json'));
const axeFiles = listJson(path.join(root, 'axe')).filter(file => !file.endsWith('summary.json'));
const lighthouseFiles = listJson(path.join(root, 'lighthouse'));
const npmAudit = readJson(path.join(root, 'npm-audit.json'));

const lighthousePages = lighthouseFiles.map(file => {
  const data = readJson(file) ?? {};
  const categories = data.categories ?? {};
  const scores = {};
  for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
    scores[key] = categories[key]?.score == null ? null : Math.round(categories[key].score * 100);
  }
  return { file: path.basename(file), requestedUrl: data.requestedUrl ?? null, finalUrl: data.finalUrl ?? null, scores };
});

const vulnerabilitySummary = npmAudit?.metadata?.vulnerabilities ?? null;
const vulnerabilities = Object.entries(npmAudit?.vulnerabilities ?? {}).map(([name, item]) => ({
  package: name,
  severity: item.severity ?? null,
  direct: item.isDirect ?? false,
  range: item.range ?? null,
  fixAvailable: item.fixAvailable ?? null,
  advisories: (item.via ?? []).filter(via => typeof via === 'object').map(via => ({
    title: via.title,
    severity: via.severity,
    url: via.url,
    range: via.range,
    cvss: via.cvss?.score ?? null
  }))
}));

const securityPolicy = readJson('SECURITY_EXCEPTIONS.json');
const advisoryMap = new Map();
for (const item of vulnerabilities) {
  for (const advisory of item.advisories) {
    const entry = advisoryMap.get(advisory.url) ?? { ...advisory, affectedPackages: [] };
    entry.affectedPackages.push(item.package);
    advisoryMap.set(advisory.url, entry);
  }
}
const uniqueAdvisories = [...advisoryMap.values()].map(item => ({
  ...item,
  affectedPackages: [...new Set(item.affectedPackages)].sort()
}));
const exceptionReview = uniqueAdvisories.map(item => {
  const exception = securityPolicy?.exceptions?.find(candidate => candidate.advisoryUrl === item.url);
  return {
    advisoryUrl: item.url,
    status: exception ? 'pending-owner-review' : 'unaccepted',
    expiresOn: exception?.expiresOn ?? null,
    rationale: exception?.rationale ?? null
  };
});

  package: name,
  severity: item.severity ?? null,
  direct: item.isDirect ?? false,
  range: item.range ?? null,
  fixAvailable: item.fixAvailable ?? null,
  advisories: (item.via ?? []).filter(via => typeof via === 'object').map(via => ({
    title: via.title,
    severity: via.severity,
    url: via.url,
    range: via.range,
    cvss: via.cvss?.score ?? null
  }))
}));

const expectedAxeRoutes = guides.length + 3;
const expectedLighthousePages = guides.length + 4;
const axeStatus = axeSummary?.status ?? (axeFiles.length ? 'partial' : 'missing');
const lighthouseStatus = lighthousePages.length === expectedLighthousePages ? 'completed' : 'partial';
const checksPassed = validation?.status === 'passed' && smoke?.status === 'passed' && axeStatus === 'passed' && lighthouseStatus === 'completed';

const report = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  commit: process.env.GITHUB_SHA ?? null,
  runtime: { node: process.version, platform: process.platform },
  previewSafety: {
    robotsTxtDisallowAll: smoke?.robotsTxtDisallowAll ?? null,
    noindexVerified: smoke?.status === 'passed',
    publicPublicationEnabled: false
  },
  catalogue: {
    guideCount: guides.length,
    productCount: guides.reduce((sum, guide) => sum + (guide.products?.length ?? 0), 0),
    slugs: guides.map(guide => guide.slug)
  },
  checks: {
    catalogue: validation ?? { status: 'missing' },
    smoke: smoke ?? { status: 'missing' },
    accessibility: {
      status: axeStatus,
      auditedRoutes: axeSummary?.auditedRoutes ?? axeFiles.length,
      expectedRoutes: expectedAxeRoutes,
      totalViolations: axeSummary?.totalViolations ?? null,
      totalIncomplete: axeSummary?.totalIncomplete ?? null,
      results: axeSummary?.results ?? []
    },
    lighthouse: {
      status: lighthouseStatus,
      auditedPages: lighthousePages.length,
      expectedPages: expectedLighthousePages,
      pages: lighthousePages
    },
    npmAudit: {
      status: vulnerabilitySummary?.total ? 'review-required' : (vulnerabilitySummary ? 'clean' : 'missing'),
      vulnerabilities: vulnerabilitySummary,
      uniqueAdvisories,
      exceptionReview,
      packages: vulnerabilities
    }
  },
  overall: checksPassed ? (vulnerabilitySummary?.total ? 'quality-passed-security-review-required' : 'passed') : 'incomplete-or-failed'
};

fs.mkdirSync(root, { recursive: true });
fs.writeFileSync(path.join(root, 'latest-audit.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({
  report: path.join(root, 'latest-audit.json'),
  overall: report.overall,
  guides: report.catalogue.guideCount,
  products: report.catalogue.productCount,
  axeRoutes: report.checks.accessibility.auditedRoutes,
  lighthousePages: report.checks.lighthouse.auditedPages,
  npmAudit: report.checks.npmAudit.vulnerabilities
}, null, 2));
