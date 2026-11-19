# SmartPickHub

UK-first, research-led affiliate buying guides, with a secondary US marketplace track.

## Current production environment
- Production: https://smartpickhub.pages.dev/ (Cloudflare Pages + Astro).
- Preview: https://smartpickhub-preview.pages.dev/ (must remain noindex/nofollow and crawl-disallowed).
- Source repository: https://github.com/ralabsi95-spec/smartpickhub
- Production branch: `main`.
- The former InfinityFree domain/hosting and former WordPress site are cancelled and completely outside SmartPickHub. Do not access, connect, edit, migrate, redirect, import from, or use them as fallback or data source.

## Current release (19 November 2026)
- 25 buying guides / 100 product records are owner-approved and published in the repository.
- Amazon UK tracking ID: `smartpickhubu-21`; secondary US ID: `smartpickh0bc-20`.
- Product identifiers are marketplace search phrases, not verified direct ASIN links. Do not invent ASINs, prices, ratings, reviews, stock, discounts or hands-on testing.
- Product imagery is optional. Use only exact-model images with documented commercial reuse rights; otherwise retain the existing text-based product information card.
- Production sitemap contains 28 URLs. Robots allows crawling; this does not guarantee Google/Bing indexing.
- Five category-specific RSS feeds are live and contain approved guide entries. Pinterest has not been connected to these feeds and no Pins have been published by this release.
- IndexNow key file is live. Guarded notification is gated on successful main CI and verified production deployment. Do not claim a notification until the workflow result confirms acceptance.
- Google Search Console sitemap processing/submission remains unconfirmed; OpenSEO currently has no connected GSC or GA4 account.

## Current audit snapshot
- Latest production deployment marker: `2fc29d32067a0b654b1f4e4a8133835002f45513`.
- Fresh OpenSEO audit: 28/28 pages crawled, all HTTP 200, indexable and in sitemap; no critical crawl issues.
- Informational SEO improvements: 21 title tags exceed the audit's 60-character recommendation; 4 meta descriptions exceed 160 characters. Preserve visible guide H1s; use separate concise SEO titles where appropriate.
- Catalogue: 25 guides / 100 products; four products per guide; all product records have manufacturer sources and US/UK marketplace search identifiers.
- OpenSEO has 24 saved UK commercial/transactional keyword opportunities with estimated volume, difficulty and CPC. These are estimates, not first-party traffic.

## Project continuity and safety
- Read [AGENT_HANDOFF.md](AGENT_HANDOFF.md) before work and [MASTER_PROJECT.md](MASTER_PROJECT.md) for the chronological record.
- [25-guide editorial approval audit](EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md) records the evidence scope and regional caveats.
- [Product ingestion playbook](PRODUCT_INGESTION_PLAYBOOK.md) governs safe product research and intake.
- Do not re-import products or repeat the 25-guide release.
- Never publish, delete, or materially change production content without owner approval.
- Do not run `npm audit fix --force`, blind major upgrades, or destructive dependency changes.
- No paid service, API or subscription without owner approval.

## Development commands
```bash
npm ci
npm run dev
npm run check
npm run validate
npm run keywords
npm run import:self-test
npm run import:integration-test
npm run build
npm run smoke
npm run accessibility
npm run audit-report
```
