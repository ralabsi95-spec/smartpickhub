import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // This branch is currently deployed only to the isolated Cloudflare preview.
  // Change this value only when a separately approved production domain is ready.
  site: 'https://smartpickhub-preview.pages.dev',
  output: 'static',
  integrations: [sitemap()],
});
