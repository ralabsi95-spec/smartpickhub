import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smartpickhub.infinityfree.me',
  output: 'static',
  integrations: [sitemap()],
});
