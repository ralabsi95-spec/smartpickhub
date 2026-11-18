# SmartPickHub

UK-first, research-led affiliate buying guides, with a secondary US marketplace track.

## Read this first
- **[Agent handoff and continuation rules](AGENT_HANDOFF.md)** – mandatory first read for every new ChatGPT conversation, coding agent or contributor.
- **[Master project log](MASTER_PROJECT.md)** – chronological project history, decisions and implementation notes.
- **[Release-readiness audit (18 Nov 2026)](docs/RELEASE_READINESS_AUDIT_2026-11-18.md)** – verified quality results, launch blockers and next actions.
- **[Product ingestion playbook](PRODUCT_INGESTION_PLAYBOOK.md)** – safe product research and intake procedure.

## Current status (18 November 2026)
- Astro implementation is on development branch `automation/bootstrap`, latest verified commit: `3f49a59ed44c8385ce41b63e94365e4c6161fda1`.
- Catalogue: **25 research-draft guides / 100 product records**. None is approved for publication.
- Amazon US/UK link generation is configured with tracking IDs, but current model-name links are marketplace search links, not verified direct ASIN links or proof of live listing availability.
- Preview project: https://smartpickhub-preview.pages.dev/; it must remain `noindex,nofollow` and crawl-disallowed. Freshness for the latest commit must be checked before visual sign-off.
- Production target: https://smartpickhub.pages.dev/; its Pages project remains disconnected and no production deployment is authorized.
- The old InfinityFree property is excluded from the SmartPickHub implementation plan. Do not edit, migrate, reconnect or rely on it.
- PR #1 remains Draft/open/unmerged. Do not merge without explicit owner approval.

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
