import fs from 'node:fs/promises';
import path from 'node:path';

const marker = {
  commit: process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA ?? 'local',
  branch: process.env.CF_PAGES_BRANCH ?? process.env.GITHUB_REF_NAME ?? 'local',
  environment: process.env.DEPLOYMENT_ENV ?? (process.env.CF_PAGES_BRANCH === 'main' ? 'production' : 'build'),
  generatedAt: new Date().toISOString(),
};

await fs.mkdir('dist', { recursive: true });
await fs.writeFile(path.join('dist', 'deployment.json'), JSON.stringify(marker, null, 2) + '\n');
console.log(`Wrote deployment marker for ${marker.branch} at ${marker.commit}.`);
