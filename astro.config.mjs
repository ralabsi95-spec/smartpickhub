import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const productionSite = 'https://smartpickhub.pages.dev';
const previewSite = 'https://smartpickhub-preview.pages.dev';
const isPreviewBuild =
  process.env.DEPLOYMENT_ENV === 'preview' ||
  (Boolean(process.env.CF_PAGES_BRANCH) && process.env.CF_PAGES_BRANCH !== 'main');

export default defineConfig({
  // Canonical production host is fixed for the MVP. Set DEPLOYMENT_ENV=preview
  // (or build on a non-main Cloudflare Pages branch) for the isolated preview.
  site: process.env.PUBLIC_SITE_URL ?? (isPreviewBuild ? previewSite : productionSite),
  output: 'static',
  integrations: [sitemap()],
});
