# SmartPickHub – Agent Handoff (READ THIS FIRST)

**Last verified:** 16 November 2026  
**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Working branch:** `automation/bootstrap`  
**Pull request:** [#1 – Draft Astro foundation and safe content workflow](https://github.com/ralabsi95-spec/smartpickhub/pull/1)  
**Live WordPress site:** https://smartpickhub.infinityfree.me/  
**Isolated Astro preview:** https://smartpickhub-preview.pages.dev/

> This file is the operational handoff for every new ChatGPT conversation, coding agent or human contributor. Read it before proposing or changing anything. Then read `MASTER_PROJECT.md` for the chronological record. If older notes conflict with this handoff, the current repository files and the dated latest-status section here take precedence.

## 1. Non-negotiable safety rules

1. Work on `automation/bootstrap` only unless the owner explicitly authorizes another branch.
2. Do not merge PR #1, push to `main`, publish content, connect a production domain, change DNS, or deploy over WordPress without explicit owner approval.
3. The existing WordPress site on InfinityFree is the live property and must be preserved. No WordPress edits, deletions, imports, plugin/theme changes or migration actions without explicit approval and a verified backup.
4. Never re-import the existing WordPress product catalogue. Existing candidate products were not migrated into this Astro catalogue.
5. Do not invent ASINs, direct retailer URLs, prices, discounts, ratings, reviews, stock, search volume, CPC, testing experience or product availability.
6. Model-name identifiers in the catalogue generate Amazon search URLs, not direct product links. A marketplace search result is not proof that the exact model/variant is available.
7. Keep all current guides as editorial research drafts. Do not set `editorialStatus` to `Approved for publication`, and do not publish without owner review.
8. Preview must remain `noindex,nofollow` and crawl-disallowed. Do not remove those protections to improve Lighthouse SEO scores.
9. Do not run `npm audit fix --force`, blind major upgrades, or destructive dependency changes. Investigate advisories, dependency paths and framework compatibility first.
10. No paid API, service, subscription or integration without owner approval. Secrets belong in GitHub Actions secrets, never committed files.
11. Do not claim an action/test/deployment succeeded until its exact commit/run/result has been checked.

## 2. Current verified project state

### Architecture and environments
- Astro static-site implementation lives on `automation/bootstrap`.
- GitHub repository is private: `ralabsi95-spec/smartpickhub`.
- PR #1 is open, Draft and unmerged. Base is `main`; do not merge without approval.
- Existing live site remains WordPress/Astra on InfinityFree at https://smartpickhub.infinityfree.me/.
- Astro preview is a separate Cloudflare Pages project `smartpickhub-preview` at https://smartpickhub-preview.pages.dev/.
- Preview has no custom domain mapping and must remain non-indexable.
- No WordPress migration or production cutover has been approved.

### Catalogue and editorial status
- Source of truth: `src/data/products.json`.
- Current catalogue: **10 research-draft guides, 4 products per guide, 40 product records**.
- Latest added guide: `air-fryers-us-uk`.
- Other guide slugs:
  - `home-office-ergonomics-us-uk`
  - `portable-power-travel-tech-us-uk`
  - `smart-home-security-cameras-us-uk`
  - `wifi-7-home-mesh-routers-us-uk`
  - `usb-c-gan-chargers-us-uk`
  - `webcams-video-calls-streaming-us-uk`
  - `4k-usb-c-monitors-home-office-us-uk`
  - `thunderbolt-usb-c-docking-stations-us-uk`
  - `portable-ssd-external-storage-us-uk`
  - `air-fryers-us-uk`
- Every product has separate US and UK model-name search phrases. These are not verified ASINs or guaranteed direct product links.
- Do not imply hands-on testing. Feature summaries are research-led and manufacturer-source-based; suitability statements are editorial analysis.
- No fixed prices, review counts, star ratings or availability claims are included.
- Confirm exact local SKU, electrical rating, plug, language/layout, dimensions, accessories and current marketplace listing before approving any regional product.
- RSS only includes guides explicitly marked `Approved for publication`; an empty RSS feed is expected while all guides remain drafts.
- Existing WordPress products have not been imported.

### Keywords
- Source: `src/data/keyword-clusters.json`.
- Generator: `scripts/build-keyword-universe.mjs`; command: `npm run keywords`.
- Latest previously recorded universe: 32,326 deduplicated candidate US/UK keyword opportunities across 12 clusters. Re-run the generator to confirm current count after changes.
- These are generated research phrases, not verified search volume, CPC, difficulty, traffic or demand.
- Do not generate one page per phrase. Cluster by shared intent and produce genuinely useful guides only; avoid thin/duplicated scaled content.

### Build and QA
- Workflow: `.github/workflows/build-check.yml`.
- Node 22 is configured in this workflow.
- Checks include Astro check, catalogue validation, keyword generation, build, smoke tests, Playwright/axe-core and Lighthouse; reports are uploaded as `smartpickhub-quality-reports` for 14 days.
- `scripts/validate-catalogue.mjs` currently expects 10 guides and 40 products.
- Latest catalogue build run checked during this handoff: [Run #169](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43891906353), conclusion **success**, for commit `5b29cb6df7186f7f62629ad58cb9f9f4ca4eb9ef`. A later documentation-only commit changed the branch head; this run validates the catalogue/code commit, not every later docs-only commit.
- Earlier Run #166 quality artifact: axe-core found zero violations on all 12 configured routes, but the homepage had two incomplete checks needing manual review. Lighthouse reported Performance 100, Accessibility 100, Best Practices 100 and SEO 66. SEO 66 is expected because preview indexing is deliberately blocked.
- QA coverage implementation: `scripts/accessibility-test.mjs` now loads guide slugs from `src/data/products.json`; Lighthouse now dynamically audits the guide index, affiliate disclosure and every catalogue guide. This is implemented but not yet CI-confirmed.
- The latest audit artifact reviewed was from Run #166, not the newest dependency tree. Re-run `npm audit --json` on current branch and inspect the new report.

### Dependency security – unresolved
- Run #166 audit reported 5 findings: 1 low, 3 high, 1 critical.
- Critical advisory recorded: `GHSA-26w7-cxv4-gfx2`, related to Astro AVIF image optimization / remote code execution; the recorded affected range was Astro versions below 7.2.8.
- Other affected dependency paths included Astro/transitive `esbuild`, `sharp`, `zod` and `zod-to-ts`.
- The suggested npm fix involved a major Astro upgrade to 7.4.12 from the current Astro 5 range. No automatic fix or package upgrade was applied.
- Next agent must retrieve a fresh audit report, verify each advisory against current installed/lockfile versions and official advisories, inspect `npm explain` paths, and prepare a tested upgrade plan. Do not blindly jump major versions or force-install.

## 3. Known stale or inconsistent documentation/code

These issues must be reconciled; do not assume old prose is current:
- Older sections in `MASTER_PROJECT.md` say the catalogue is empty or has 3/9 guides. They are historical. Current data file and validator say 10 guides / 40 products.
- `README.md` currently says product data is intentionally empty and no old products are imported. The no-import statement remains true, but the empty-catalogue statement is stale and must be corrected.
- The quality workflows still enumerate only 9 guide routes for accessibility/Lighthouse. Add coverage for all current guide slugs.
- `.github/workflows/auto-publish.yml` uses Node 20, while the build/QA workflow uses Node 22. It is a draft-research workflow only; scheduled GitHub Actions run from the default branch, so a schedule configured only on this development branch will not run until an approved merge/default-branch change. Do not merge just to activate it.
- The auto-publish workflow has write permissions and commits generated files under `content-drafts/`; inspect the script and branch target carefully before any manual dispatch. It must never publish pages.
- Historical entries may describe different earlier counts and run states. Use commit SHA, current files and the latest matching workflow run to establish current truth.

## 4. Next actions – recommended order

1. **Verify dynamic QA coverage:** inspect CI on the newest head; confirm axe-core and Lighthouse cover all 10 guide routes plus the guides index and disclosure page.
2. **Fresh dependency audit:** inspect the newest `npm audit --json` artifact; verify advisory IDs, fixed versions and dependency paths; assess a compatible Astro upgrade separately. No force fix.
3. **Reconcile workflow runtime:** assess Node 20 vs 22 in `auto-publish.yml`; keep automation draft-only and do not enable scheduled production actions.
4. **Manual visual review:** inspect preview desktop/mobile and key guide templates; record observations before UI changes.
5. **Manual visual review:** inspect Cloudflare preview at desktop and mobile sizes, including homepage, guides index, all guide pages, affiliate disclosure, navigation, tables and Amazon link labels. Automated tests do not replace visual review.
6. **Editorial verification:** verify exact US/UK product SKUs and marketplace search destinations, manufacturer claims, regional electrical differences and current listings. Keep drafts unapproved until owner review.
7. **Marketing/measurement:** plan Search Console and analytics integration only after owner authorizes accounts/consent/privacy choices. Distinguish real visitors from owner/QA traffic. Build Pinterest/social distribution only around approved guide URLs and assets.
8. **Production decision is separate:** compare continuing WordPress versus Astro migration, including backup, content migration, redirects, SEO, affiliate links, hosting and rollback. Present options; do not execute without explicit approval.

## 5. Working commands

```bash
npm install
npm run check
npm run validate
npm run keywords
npm run build
npm run smoke
npm run accessibility
npm audit --json
```

For a local visual preview after build:

```bash
npm run preview -- --host 127.0.0.1
```

## 6. Definition of done for each future batch

- Changes are limited to the approved development branch.
- No duplicate product import and no unsupported product/SEO claims.
- Catalogue validator and Astro checks pass.
- Build and smoke tests pass.
- axe-core and Lighthouse cover all current routes, not a hard-coded stale subset.
- Fresh npm audit findings are recorded; unresolved security findings are clearly stated.
- Desktop/mobile visual review is recorded when UI changes are made.
- `MASTER_PROJECT.md` is updated with date, exact changed files, commit SHA, run URL/conclusion, known risks and next action.
- This handoff is updated whenever the authoritative state or next actions materially change.
- No public publication, WordPress edit, DNS/domain change, PR merge or production cutover without explicit owner approval.

## 7. Required first response in a new chat/agent session

Start by confirming you have read `AGENT_HANDOFF.md` and `MASTER_PROJECT.md`. Report:
- current branch HEAD and PR state;
- current catalogue guide/product counts;
- latest successful/failed CI run and exact tested SHA;
- open security and QA gaps;
- the single next action you recommend.

Do not ask the owner to repeat details already documented here.
