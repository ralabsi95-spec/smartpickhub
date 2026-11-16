import rss from '@astrojs/rss';
import data from '../data/products.json';

export function GET(context) {
  const guides = (data.guides ?? []).map((guide) => ({
    title: guide.title,
    pubDate: guide.publishedAt ? new Date(guide.publishedAt) : new Date(),
    description: guide.summary,
    link: `/guides/${guide.slug}/`,
  }));
  return rss({
    title: 'SmartPickHub – Buying Guides',
    description: 'Practical product comparisons for US and UK shoppers.',
    site: context.site,
    items: guides,
  });
}
