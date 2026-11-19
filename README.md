# SmartPickHub

UK-first, research-led affiliate buying guides, with a secondary US marketplace track.

## Read this first
- **[Agent handoff and continuation rules](AGENT_HANDOFF.md)** – mandatory first read for every new ChatGPT conversation, coding agent or contributor.
- **[Master project log](MASTER_PROJECT.md)** – chronological project history, decisions and implementation notes.
- **[25-guide editorial approval audit](EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md)** – current guide status, evidence scope and publication/indexing gates.
- **[Product ingestion playbook](PRODUCT_INGESTION_PLAYBOOK.md)** – safe product research and intake procedure.

## Current status (19 November 2026)

- Production is live on Cloudflare Pages: https://smartpickhub.pages.dev/. The live deployment marker was verified at commit `4a6b67a5c60f93bfeb58b5f792c08825a0ad1706`.
- PR #8 was merged to `main` after its latest-head CI #798 passed. It includes evidence-backed product corrections and the 25-guide audit record.
- Release branch `release/approve-guides-indexing-20261119` prepares the owner-authorised publication of all **25 buying guides / 100 products**, optional product imagery, and guarded IndexNow notification. PR #9 and its CI must pass before this release reaches production.
- Product photos are optional. Use only exact-model assets with documented commercial reuse rights; otherwise retain the existing text-based product information card without a substitute image or empty placeholder.
- Amazon links remain marketplace search links, not verified direct ASIN listings. UK tracking ID: `smartpickhubu-21`; US secondary tracking ID: `smartpickh0bc-20`.
- Production robots currently allows crawling, the homepage has `index, follow`, and the live sitemap contains 28 URLs. This enables crawling but does not guarantee Google/Bing indexing.
- IndexNow verification key is already live. A guarded post-CI/post-deployment IndexNow workflow is being added; it will submit only after the live deployment marker, robots, sitemap and key file match the exact successful commit.
- Google Search Console's existing sitemap-fetch issue remains unresolved. The OpenSEO project does not currently have a connected Search Console account; no sitemap submission is claimed yet.
- Do not connect Pinterest RSS or publish Pins as part of this indexing release. RSS feeds may become populated after the approved guide release, but no Pinterest publishing action is authorised here.
- InfinityFree / `smartpickhub.infinityfree.me` is not the production host for this Astro release. Preserve the legacy property and WordPress installation unchanged.

## Verified quality snapshot
- CI push run [#44249569378](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44249569378) and PR run [#44249577388](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44249577388) passed on commit `3f49a59`.
- 29 generated HTML pages passed smoke checks; 25 guides; 100 US and 100 UK affiliate URL constructions.
- axe checked 28 routes: zero violations; 27 incomplete contrast checks remain for manual review because of gradient backgrounds.
- Lighthouse intentionally samples five representative pages: all five scored 100 Performance, Accessibility and Best Practices; SEO 66–69 is expected while noindex/robots protections remain enabled.
- Consolidated report: `quality-passed-security-review-and-manual-accessibility-review-required`. npm audit remains review-required for one high-severity picomatch advisory affecting 12 dependency nodes; 27 axe contrast checks still require manual review. This is not a clean security audit.

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

## Editorial and safety rules
All catalogue entries are research drafts. Verify exact local product variants, manufacturer claims and marketplace destinations before editorial approval. Do not invent ASINs, direct links, prices, ratings, reviews, stock or hands-on testing. Do not publish automatically. See `AGENT_HANDOFF.md` for mandatory operating rules and next actions.

## Draft research automation
The GitHub Actions draft-research workflow creates unverified research briefs for human review only. It uses a dedicated `automation/editorial-drafts` branch and opens/updates a pull request to the default branch; it must never push generated drafts directly to the default branch. Scheduled workflows run from the default branch, so the schedule becomes active only after the workflow itself is approved and merged. A missing Gemini secret causes generation to fail safely.
