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

## 3. Current QA architecture and known issues

- There is one QA workflow: `.github/workflows/build-check.yml`. Gemini's reference commit `ef55e105` used this same workflow; no separate test workflow needs importing or merging.
- `.github/workflows/auto-publish.yml` is a separate draft-research writer that saves unverified drafts to `content-drafts/`; it is not a QA workflow and must not be manually dispatched without owner authorization.
- Both workflow Node runtimes are aligned to Node 22. The quality workflow uses concurrency cancellation to avoid spending CI time on superseded commits.
- The QA suite derives guide routes from `src/data/products.json`. Current data is 10 guides / 40 products, but future guides are included without hard-coded route lists.
- The unified checks cover catalogue structure, Amazon US/UK URL construction and tracking tags, generated HTML noindex/robots/canonical/internal links, required guide JSON-LD Article/ItemList, sponsored/nofollow affiliate anchors, axe-core, Lighthouse and npm audit.
- Individual JSON reports are saved under `test-reports/`; the consolidated `test-reports/latest-audit.json` is uploaded in the `smartpickhub-quality-reports` artifact for 14 days.
- Historical Gemini Actions #129 and #130 at `ef55e105` failed at the smoke-test step because the older rendered-HTML checks falsely reported missing noindex/canonical tags. Lighthouse did not run and no artifact was produced. Later test revisions fixed the parser; see Run #179.
- Runs #174 and #175 succeeded but were documentation-change runs, not Gemini test runs.
- Run #179 passed the dynamic QA workflow on commit `6a2f61e2faca5927093afcfbfe0d8b92be1e8d4f`: axe-core 13 routes, zero violations, two incomplete homepage checks; Lighthouse 14 pages with Performance/Accessibility/Best Practices 100 and SEO 66 (expected for noindex preview).
- Run #179 npm audit: 5 findings (1 low, 3 high, 1 critical). Astro is the direct critical package; transitive affected paths include esbuild, sharp, zod and zod-to-ts. No package upgrade has been applied.
- The latest unified report run is still pending CI verification. Treat this handoff as the intended implementation state until the latest branch run confirms it.

## 4. Next actions – recommended order

1. Verify the unified QA workflow on the latest branch SHA; inspect `test-reports/latest-audit.json` and the artifact.
2. Review current npm advisory IDs, exact dependency paths and fixed versions. Do not run `npm audit fix --force` or make an untested major upgrade.
3. Prepare a separate Astro upgrade branch or isolated test commit with lockfile/build/QA evidence before recommending adoption.
4. Manually review the two incomplete axe checks on the homepage.
5. Repeat the one homepage desktop Lighthouse Performance 79 outlier; current report attributes the 500 ms TBT largely to Unattributable long tasks, while mobile and all other routes scored 100.
6. Review exact product US/UK variants and marketplace listings before editorial approval. Keep all guides as drafts and do not enable public publication or migrate WordPress without approval.

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


## 16 November 2026 – Unified QA update
- Reviewed Gemini reference `ef55e105`: it was the same build-check workflow, not a second QA system. Its Actions #129/#130 failed at the old smoke test due to false-negative parsing of rendered noindex/canonical tags; Lighthouse did not run. Runs #174/#175 were documentation runs and succeeded, but were not the Gemini workflow result.
- Run #179 subsequently passed the dynamic all-guide QA on SHA `6a2f61e2faca5927093afcfbfe0d8b92be1e8d4f`: axe 13 routes, zero violations, 2 incomplete homepage checks; Lighthouse 14 pages with 100/100/100/66 scores.
- Run #179 npm audit: 5 vulnerabilities (1 low, 3 high, 1 critical), Astro direct and esbuild/sharp/zod/zod-to-ts transitive. No upgrade applied.
- Current implementation adds dynamic marketplace-link and JSON-LD checks, noindex/robots/canonical/internal-link checks, structured test JSON and consolidated `test-reports/latest-audit.json`. CI verification is pending for this batch.
- Node 22 is aligned across workflows. No publishing, merge, WordPress or DNS changes.


## 16 November 2026 – Latest QA implementation checkpoint
- Latest code checkpoint: `5a2234a6536eb33ad753f514b4f8129f879ee636`.
- Unified dynamic validation now checks every guide and every product's Amazon US/UK generated destination, tags, rendered affiliate links, sponsored/nofollow attributes, required Article/ItemList JSON-LD, noindex, robots.txt, canonicals and internal links.
- Reports: `test-reports/catalogue-validation.json`, `test-reports/smoke-test.json`, `test-reports/axe/summary.json`, Lighthouse per-page JSON, `test-reports/npm-audit.json`, consolidated `test-reports/latest-audit.json`.
- Both workflow files use Node 22. Only one QA workflow exists; `auto-publish.yml` remains a distinct draft-research writer and must not be manually dispatched without authorization.
- The first enhanced implementation had a syntax error in smoke-test regex literals; Run #184 failed at Astro check. The script was corrected at commit `f76412d1d7bdf9727b78426d0ca62eb51c65c225`.
- Runs #185/#188 have not completed; Run #189 is queued. Latest successful full dynamic-route baseline is Run #179 on SHA `6a2f61e2faca5927093afcfbfe0d8b92be1e8d4f`: 13 axe routes, zero violations, two incomplete homepage checks; 14 Lighthouse reports, all 100/100/100/66.
- Freshest completed npm audit report in Run #179: 5 package findings (1 low, 3 high, 1 critical); direct Astro critical, transitive sharp/zod/zod-to-ts/esbuild. Do not upgrade blindly; no package change has been made.
- Immediate next action: verify a final CI run on latest SHA and inspect its artifact before marking enhanced tests complete.


## 16 November 2026 – Final unified QA result (Run #193)
- [Run #193](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43898538709) passed on SHA `6f27c02809827ce05bb2f04f7abc73da2e1d5daf`.
- Dynamic QA covers all 10 current guides / 40 products and future slugs from the catalogue. Catalogue validation: 40 US and 40 UK generated URL checks passed.
- Smoke test: 14 HTML pages passed; noindex and robots.txt block verified; no canonical or internal-link errors; all 10 guide pages have required Article/ItemList/Product JSON-LD and exactly 4 Amazon US plus 4 Amazon UK product links, with correct tags and sponsored/nofollow attributes. No warnings.
- axe-core: 13 routes, zero violations, two incomplete homepage checks for manual review.
- Lighthouse: 14 reports. Accessibility 100, Best Practices 100, SEO 66 (intentional noindex) on every page. Performance 100 on 13 pages; homepage desktop 79 due 500ms TBT / unattributed long tasks, while its own JS evaluation was under 1ms. Mobile homepage and all other pages were 100. Recheck this single outlier before changing UI.
- The enhanced smoke test discovered and helped fix a genuine Amazon tracking bug: search URLs previously appended `?tag=` after an existing `?k=`, so the tag was not a separate parameter. `src/config/affiliate.ts` now uses URLSearchParams. Run #193 verifies actual rendered links.
- Lighthouse route-list newline bug fixed; all 14 Lighthouse reports generated.
- Artifact `smartpickhub-quality-reports` ID `14240212318`, includes `latest-audit.json`, per-route axe/Lighthouse JSON, catalogue/smoke reports and `npm-audit.json`; retention through 30 Nov 2026.
- npm audit: 5 findings (1 low, 3 high, 1 critical). No package upgrade applied. Review Astro, sharp, zod, zod-to-ts and esbuild paths before remediation.
- Node 22 aligned across workflows; Node 20 is EOL as of 30 Apr 2026. No publication, WordPress/DNS change or PR merge.
- Next: inspect npm advisory paths and test compatible Astro remediation separately; review two incomplete axe checks and repeat the desktop homepage Lighthouse outlier.


## 16 November 2026 – CI trigger de-duplication
- QA concurrency now groups push and pull-request events by `github.head_ref || github.ref_name`, avoiding duplicate runs for the same branch while keeping both triggers enabled.
- This is scheduling-only; no test code or dependencies changed. The last complete QA evidence is Run #193, successful.
