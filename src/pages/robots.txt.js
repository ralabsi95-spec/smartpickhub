export function GET(context) {
  const site = context.site ?? new URL(context.url);
  const isPreviewBuild =
    process.env.DEPLOYMENT_ENV === 'preview' ||
    (Boolean(process.env.CF_PAGES_BRANCH) && process.env.CF_PAGES_BRANCH !== 'main') ||
    site.hostname !== 'smartpickhub.pages.dev';

  const body = isPreviewBuild
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
