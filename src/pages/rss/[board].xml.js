import data from '../../data/products.json';

const BOARDS = {
  'home-office': {
    title: 'SmartPickHub — Home Office & Ergonomics',
    description: 'Approved buying guides for home office equipment, displays, webcams and workplace productivity.',
    slugs: [
      'home-office-ergonomics-us-uk',
      'webcams-video-calls-streaming-us-uk',
      '4k-usb-c-monitors-home-office-us-uk',
      'thunderbolt-usb-c-docking-stations-us-uk',
      'home-printers-us-uk',
    ],
  },
  'smart-home': {
    title: 'SmartPickHub — Smart Home & Security',
    description: 'Approved buying guides for smart home security, networking and connected home care.',
    slugs: [
      'smart-home-security-cameras-us-uk',
      'wifi-7-home-mesh-routers-us-uk',
      'robot-vacuum-mops-us-uk',
      'home-air-purifiers-us-uk',
      'home-nas-storage-us-uk',
    ],
  },
  'kitchen-home-tech': {
    title: 'SmartPickHub — Kitchen & Home Tech',
    description: 'Approved buying guides for kitchen appliances, cleaning, coffee and practical home technology.',
    slugs: [
      'air-fryers-us-uk',
      'cordless-vacuum-cleaners-us-uk',
      'cordless-drills-us-uk',
      'espresso-coffee-machines-us-uk',
      'electric-toothbrushes-us-uk',
      'portable-projectors-us-uk',
    ],
  },
  'travel-tech': {
    title: 'SmartPickHub — Travel & Tech Gear',
    description: 'Approved buying guides for portable power, charging, audio, car technology and travel gear.',
    slugs: [
      'portable-power-travel-tech-us-uk',
      'usb-c-gan-chargers-us-uk',
      'noise-cancelling-headphones-us-uk',
      'wireless-earbuds-us-uk',
      'dash-cams-us-uk',
      'smartwatches-us-uk',
    ],
  },
  'computing-gaming': {
    title: 'SmartPickHub — Computing & Gaming',
    description: 'Approved buying guides for computing, storage, tablets and gaming peripherals.',
    slugs: [
      'portable-ssd-external-storage-us-uk',
      'tablets-for-work-study-us-uk',
      'gaming-mice-us-uk',
    ],
  },
};

const escapeXml = (value = '') => String(value).replace(/[<>&'"]/g, (char) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;',
}[char]));

const asRfc822Date = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date(0).toUTCString() : date.toUTCString();
};

const isPublishable = (guide) =>
  guide.publicationStatus === 'published' &&
  guide.editorialStatus === 'Approved for publication';

export function getStaticPaths() {
  return Object.keys(BOARDS).map((board) => ({ params: { board } }));
}

export function GET(context) {
  const board = context.params.board;
  const config = BOARDS[board];
  if (!config) return new Response('Not found', { status: 404 });

  const allowedSlugs = new Set(config.slugs);
  const guides = (data.guides ?? [])
    .filter((guide) => allowedSlugs.has(guide.slug) && isPublishable(guide))
    .sort((a, b) => new Date(b.updatedAt ?? b.publishedAt ?? 0) - new Date(a.updatedAt ?? a.publishedAt ?? 0));

  const site = context.site ?? new URL(context.url);
  const items = guides.map((guide) => {
    const link = new URL(`/guides/${guide.slug}/`, site).href;
    const image = new URL(`/images/pinterest/${guide.slug}.png`, site).href;
    const productTerms = [...new Set((guide.products ?? []).map((product) => product.name).filter(Boolean))];
    const keywordSummary = productTerms.length
      ? ` Products covered: ${productTerms.slice(0, 6).join(', ')}.`
      : '';
    const description = `${guide.summary ?? ''}${keywordSummary} Research-led buying guidance for shoppers. Check the guide for regional compatibility and current retailer details.`;

    return `    <item>
      <title>${escapeXml(guide.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${asRfc822Date(guide.updatedAt ?? guide.publishedAt)}</pubDate>
      <description>${escapeXml(description)}</description>
      <enclosure url="${escapeXml(image)}" type="image/png" length="0" />
      <media:content url="${escapeXml(image)}" medium="image" type="image/png" width="1000" height="1500" />
      <category>${escapeXml(guide.category ?? config.title)}</category>
    </item>`;
  });

  const feedUrl = new URL(`/rss/${board}.xml`, site).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(config.title)}</title>
    <link>${escapeXml(site.href)}</link>
    <description>${escapeXml(config.description)}</description>
    <language>en-gb</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${items.join('\\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
