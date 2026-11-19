import data from '../data/products.json';

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

export function GET(context) {
  // Pinterest only receives guides that have passed the explicit editorial gate.
  const guides = (data.guides ?? [])
    .filter(isPublishable)
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
      <category>${escapeXml(guide.category ?? 'Buying Guides')}</category>
    </item>`;
  });

  const feedUrl = new URL('/rss.xml', site).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SmartPickHub — Approved Buying Guides</title>
    <link>${escapeXml(site.href)}</link>
    <description>Approved buying guides with original vertical cover artwork and region-aware product comparisons.</description>
    <language>en-gb</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
