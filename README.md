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
- Five board-specific RSS feeds are live with 25 approved entries. The owner confirms all five are connected to their matching Pinterest boards; Pinterest-side ingestion and published Pin activity are not yet independently verified.
- IndexNow key file is live. Workflow #129 confirmed that production served the exact main SHA 806e231665dd398e9a2935a0854c65afa3a30857 and IndexNow accepted a notification for 28 URLs. Acceptance does not guarantee crawling or indexing.
- Google Search Console sitemap processing/submission remains unconfirmed; OpenSEO currently has no connected GSC or GA4 account.

## Current audit snapshot
- Latest independently confirmed production deployment marker: `806e231665dd398e9a2935a0854c65afa3a30857` (19 November 2026; verified by IndexNow workflow #129).
- Fresh OpenSEO audit: 28/28 pages crawled, all HTTP 200, indexable and in sitemap; no critical crawl issues.
- SEO metadata refinement PR #19 has been merged; exact retry CI run #853 passed all 22 steps. A fresh external crawl after that refinement is not recorded here; preserve visible guide H1s and keep concise SEO titles separate.
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


## Latest deployment checkpoint (19 November 2026)
- Production deployment marker confirms main commit `806e231665dd398e9a2935a0854c65afa3a30857`.
- Main quality workflow #862 passed for that exact SHA. IndexNow workflow #129 then confirmed the same SHA was live and accepted 28 URLs; duplicate follow-up runs #130/#131 were skipped.
- See `AGENT_HANDOFF.md`, `MASTER_PROJECT.md` and `SEARCH_DISCOVERY_INDEXING_LIFECYCLE.md` for the current operating state and scale-up plan.
