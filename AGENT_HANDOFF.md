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


## 16 November 2026 – Isolated Astro 7 security upgrade assessment
- Verified current development branch head: `7bb3537249d700d06d5b4296af20c0939297428b`. PR #1 remains open; no merge was performed. Cloudflare Pages confirmed the preview deployment for commit `7bb3537` succeeded.
- Created isolated branch `security/astro7-upgrade-assessment` from `automation/bootstrap`; the development branch remains unchanged.
- Prepared an upgrade test using Astro `^7.4.12`, `@astrojs/rss ^4.0.19`, `@astrojs/sitemap ^3.7.5`, `@astrojs/check ^0.9.12`, TypeScript `^5.9.3`, and Node `22.23.4` (recorded in `.nvmrc` and both workflows). The QA workflow now includes this isolated branch as a push trigger and copies the generated package lock into the quality artifact for review.
- Rationale: Run #193's npm audit reported five vulnerable packages (Astro direct/critical; sharp, zod and zod-to-ts high; esbuild low). Astro's official changelog confirms the Node 22.23.4 minimum; Astro v6 upgrade guidance also flags Vite 7 and Zod 4 migration considerations. Astro 7 uses Vite 8 and Zod 4, so this is a major migration, not a routine patch.
- No lockfile has yet been committed, no dependency upgrade has been merged into `automation/bootstrap`, and no production or WordPress changes were made. Await the isolated CI run and inspect the generated lockfile, audit results, build, smoke, axe and Lighthouse reports before deciding whether to proceed.
- Sources reviewed: official Astro upgrade guides and changelog; npm package metadata for Astro, RSS, Sitemap and Astro Check.
- **Next:** inspect the isolated branch's Actions result and artifact; if it passes, retrieve and commit the tested lockfile on this branch, switch CI from `npm install` to `npm ci`, and run the full suite again. Keep the branch unmerged until owner review.


## 16 November 2026 – Security assessment QA refinements
- On `security/astro7-upgrade-assessment`, updated `scripts/accessibility-test.mjs` to retain details for axe-core `incomplete` checks (rule IDs, descriptions, help URLs, target selectors and check messages), rather than recording only their count. This makes manual accessibility review actionable and does not convert incomplete checks into violations.
- Latest code change before this documentation entry: `20183ea2fba10de16994e35db79dad8cbd6d117a`. Isolated Astro 7 QA remains pending; inspect its workflow result and generated lockfile artifact before making any further dependency changes.
- The baseline branch `automation/bootstrap` remains unchanged at the verified `7bb3537249d700d06d5b4296af20c0939297428b` checkpoint. PR #1 remains open and unmerged; preview deployment for that checkpoint succeeded.


## 16 November 2026 – Draft security assessment PR
- Opened [Draft PR #2](https://github.com/ralabsi95-spec/smartpickhub/pull/2) from `security/astro7-upgrade-assessment` into `automation/bootstrap` so the migration can be reviewed independently. PR #2 is open, Draft and unmerged. PR #1 remains open and unmerged.
- The isolated QA workflow now also runs `npm ci` from the generated lockfile after capturing that lockfile in the artifact. This tests reproducibility without committing an unreviewed lockfile.
- Latest isolated branch code commit: `f40454e758ce69ee0b7286e04c3aca7e29649542`. CI status/artifacts have not yet been confirmed through the available GitHub status endpoints; do not mark the upgrade as passed.


## 16 November 2026 – Run #212 in progress (Astro 7 assessment)
- GitHub Actions run #212: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43901624336, commit `4a8bdd737caf3a9a0eeae83f19d65941ae0e1d62`, event `pull_request` for Draft PR #2.
- Confirmed successful steps: dependency installation; generated lockfile capture; clean `npm ci`; dependency-audit JSON capture; Astro type/content checks; catalogue and affiliate destination validation; keyword universe generation; static build; generated-page/SEO/JSON-LD/affiliate smoke test; Chromium install; axe-core audit across all catalogue routes; homepage desktop and mobile Lighthouse.
- At this checkpoint, Lighthouse on guide index, disclosure and all 10 guide pages is still in progress. Consolidated report and artifact upload are pending. Do not declare full QA passed until run completes.
- No dependency lockfile committed yet; audit findings must be inspected from artifact after upload. PR #2 remains Draft/open/unmerged; PR #1 remains open/unmerged. Production and WordPress remain untouched.


## Session update — 2026-11-16 (Astro 7 security assessment)

- Latest full verification: GitHub Actions Run #43904133719 completed successfully on PR validation (tested merge commit `331f2b1990989112aaf6ce73259326cdb99df5b0`, source branch head `d0f0fff60bf20e49e76e862d858cf2a239e20b6f`). Run: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43904133719
- Isolated branch: `security/astro7-upgrade-assessment`; Draft PR #2 remains open and unmerged. PR #1 also remains open/unmerged. No live WordPress, production, DNS, publication, or migration changes.
- Dependency audit: zero vulnerabilities across 362 dependency records. Tested lockfile artifact resolves Astro 7.4.12, RSS 4.0.19, Sitemap 3.7.5, Astro Check 0.9.12, TypeScript 5.9.3, Sharp 0.35.5 and Zod 4.6.7. The generated `package-lock.json` is retained in the workflow artifact for review; it has NOT yet been committed to the repository.
- QA: 10 guides / 40 products; 40 US and 40 UK affiliate URL constructions using tracking IDs `smartpickh0bc-20` and `smartpickhubu-21`; 14 HTML pages smoke-tested with zero errors/warnings; 13 accessibility routes with zero confirmed axe violations; 14 Lighthouse reports each score 100 for Performance, Accessibility and Best Practices. SEO score 66 is expected for this private preview because noindex/robots disallow is deliberately enabled; do not remove preview protections.
- Accessibility detail: the previous invalid `aria-label` on the homepage hero-panel div was removed in commit `d0f0fff60bf20e49e76e862d858cf2a239e20b6f`, then the full suite passed. One axe incomplete color-contrast rule remains on homepage only because axe cannot resolve the hero gradient and some overlapping card text; this is not a confirmed violation. Manual visual/contrast verification remains a review item.
- Verified preview safety: robots.txt disallows crawling, noindex is present, public publication is disabled.
- Next: review/commit the tested lockfile on this isolated branch, simplify CI to use committed `npm ci` (after lockfile is present), rerun full QA, then decide whether to promote the upgrade PR to non-draft. Do not merge or publish without explicit user approval.


## Session update — 2026-11-16 (Run #43907094811 complete; lockfile and contrast review)

- Follow-up GitHub Actions run #43907094811 completed successfully after the documentation update: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43907094811. All workflow steps completed, including Lighthouse for all 14 pages, consolidated audit generation, and artifact upload.
- Reviewed artifact #14245464108. latest-audit.json reports overall passed; npm audit reports zero vulnerabilities (0 info/low/moderate/high/critical); Lighthouse audited 14/14 pages, each scoring 100 Performance, 100 Accessibility, 100 Best Practices and 66 SEO. SEO remains intentionally limited by private-preview noindex/robots protections.
- Reviewed generated package-lock.json from the artifact: lockfileVersion 3; 363 package records including the root; direct dependencies resolve to Astro 7.4.12, RSS 4.0.19, Sitemap 3.7.5, Astro Check 0.9.12, TypeScript 5.9.3, axe Playwright 4.14.0 and Playwright 1.65.1. Key transitive versions include Vite 8.3.8, Sharp 0.35.5 and Zod 4.6.7. All package tarball URLs use https://registry.npmjs.org/; no non-registry resolved URLs or link packages were found. This exact generated lockfile passed the workflow's clean npm ci step and its npm audit was clean. It is still not committed to the branch.
- CSS contrast estimate for homepage text was checked against declared gradient endpoint colours and the 88%-opaque white hero panel. Main hero text colours measured at or above 5.75:1; muted text inside the translucent panel measured at or above approximately 4.63:1 on sampled gradient endpoints. This supports the CSS design but is not a rendered-pixel/manual visual sign-off. axe still reports homepage color-contrast items as incomplete because of gradient/overlap sampling; zero confirmed axe violations remain across 13 routes.
- Branch/PR safety verified: automation/bootstrap remains 7bb3537249d700d06d5b4296af20c0939297428b; assessment branch head at this checkpoint is 94eee455c2be853d950f1dabc0b160a243d95817; PR #2 remains Draft/open/unmerged and PR #1 remains open/unmerged. No production, WordPress, DNS, public publication or live-site changes.
- Next: commit this reviewed lockfile on the assessment branch only, then change the assessment workflow's install step to npm ci (without generating a new lockfile), rerun the full QA suite, and complete a visual homepage contrast check. Do not merge, promote, remove noindex protections or publish without explicit user approval.


## 16 November 2026 — Astro 7 lockfile and deterministic CI
- The exact `package-lock.json` generated and tested in successful QA run `43914985815` was committed to `security/astro7-upgrade-assessment` by the restricted `commit-tested-lockfile` workflow job. It is lockfileVersion 3 and contains 363 package records.
- That run completed successfully, including the generated lockfile verification, clean `npm ci`, zero-vulnerability dependency audit, Astro checks, catalogue validation, static build, smoke tests, axe-core and Lighthouse audits.
- Simplified CI to use the committed lockfile with `npm ci` directly and removed the temporary lockfile-commit job. A new PR run must pass on the lockfile-backed workflow before promotion.
- PR #2 remains Draft/open/unmerged; no merge to development or production deployment is performed in this step.


## Session update — 2026-11-16 (100-product catalogue migrated onto Astro 7)
- Astro 7 upgrade PR #2 was merged into `automation/bootstrap` at `5baea62d5b4a8fbd43d7360bf703d8d6a07dfb9a` after final lockfile-backed CI passed. `package-lock.json` is committed; the final workflow uses `npm ci` directly.
- Created isolated content branch `content/catalogue-100-astro7` from the updated Astro 7 development branch and migrated the 100-product / 25-guide research catalogue from the separate content QA branch.
- Catalogue includes 100 unique products across 25 guides; 56 new product records across 14 new guides were added. All entries remain unapproved research drafts. Amazon destinations remain model-name search links with the existing US/UK tracking IDs; no unverified ASINs, prices, ratings, stock claims or hands-on test claims.
- Prior Astro 5-based content-branch QA passed, but its npm audit showed 5 findings (1 low, 3 high, 1 critical). To avoid carrying those dependencies forward, the catalogue was transplanted onto the now-upgraded Astro 7 development branch with the committed zero-vulnerability lockfile.
- Cloudflare Pages preview for the 100-product branch was deployed successfully; it is noindex/nofollow and `robots.txt` disallows all. No live InfinityFree deployment, production DNS change, public content publication or Amazon product import.
- **Next:** create a draft PR to `automation/bootstrap` and run the full QA again on the combined Astro 7 + 100-product tree. Review all 25 guides before editorial approval or any public publication.


## Session close — 2026-11-16 (Astro 7 + 100-product milestone)
- **Astro 7 upgrade completed on development:** PR #2 merged into `automation/bootstrap` as `5baea62d5b4a8fbd43d7360bf703d8d6a07dfb9a`. Astro 7.4.12, Node 22.23.4, committed lockfileVersion 3 with 363 package records; CI now uses `npm ci`. Final lockfile-backed run #43916130906 passed with zero npm audit vulnerabilities, 14 smoke-tested pages, zero confirmed axe violations, and Lighthouse 100 Performance / Accessibility / Best Practices on all 14 audited routes. SEO 66 is expected while preview noindex is enabled.
- **100-product milestone completed on development:** PR #3 merged as `bacd8bf08add008654461d3c4f582ad3d3fad256`. Current catalogue is 25 guides / 100 unique product records (56 new products across 14 new guides). All new guides remain `Research draft — requires human review before publication`.
- **Combined Astro 7 + 100-product QA passed before merge:** run #43918004027. `npm ci`, audit, Astro checks, catalogue validation, build, smoke, axe-core and Lighthouse all passed. `npm audit`: zero vulnerabilities / 362 dependency records. Catalogue validator: 25 guides, 100 products, 100 US and 100 UK Amazon URL constructions, zero validation errors. Smoke: 29 HTML pages, zero errors. axe: 28 routes, zero confirmed violations, one incomplete homepage contrast check. Lighthouse: 29 reports, all 100 Performance / Accessibility / Best Practices; SEO 66 due noindex. Preview safety verified.
- **Post-merge verification:** run #43919470924 was triggered by the development-branch update and was still running at the time of this note; earlier combined PR QA #43918004027 already passed on the exact merged commit.
- **Preview and publication safeguards:** Cloudflare Pages development preview `https://8c4ac2dd.smartpickhub-preview.pages.dev/` deployed successfully. Verified `noindex, nofollow` and `robots.txt` `Disallow: /`. The separate Cloudflare Workers build check remains failing, as it did on the unchanged baseline; it is separate from the static Pages build. No live InfinityFree site, DNS, `main` branch or production publication was changed. PR #1 to `main` remains Draft/open/unmerged.
- **Affiliate safeguards:** all product destinations are marketplace search URLs using existing US/UK tracking IDs. Product identifiers are model-name search phrases, not verified ASINs. No invented ASINs, prices, ratings, availability or hands-on testing claims. No Amazon product import.
- **Next:** editorially verify exact regional variants and direct ASINs for the 56 new candidates; then improve guide-library search/filter navigation and internal linking. Do not publish the research drafts to `main` or the live site without user review and approval.


## Latest verified state — 16 November 2026 (supersedes older counts above)
- Development branch: `automation/bootstrap`, head `9051853d1164c03ba2e43920b641aca4c38a7abe` before the guide-library discovery change.
- `main`: `2b7b9a82bd8a7fdf601b2add42d5612d04d3e3b4`; unchanged.
- PR #1 remains Draft/open/unmerged. PR #2 Astro 7 and PR #3 100-product catalogue are merged into development.
- Latest docs-only CI run #43920465690 passed on the branch head above.
- Actual catalogue: **25 guides / 100 products**, all research drafts. This supersedes historical 10/40 counts and the old validator-count notes above. Validator dynamically counts the catalogue; do not hardcode 10/40.
- Astro 7.4.12; committed lockfile; CI installs with `npm ci`. Final combined Astro7 + catalogue QA run #43918004027 passed with zero npm audit vulnerabilities.
- Cloudflare Pages preview is isolated and noindex/nofollow with `robots.txt` disallowing crawling. Live WordPress on InfinityFree remains untouched.
- Latest development improvement in progress: accessible client-side guide search and category filtering on the guide index. Verify the associated CI run before calling this change complete.
- All product identifiers remain model-name Amazon search phrases, not verified direct ASINs. Do not publish, approve drafts, merge PR #1, or modify production without explicit owner approval.


## Session update — 16 November 2026 (guide and product improvements)
- Development commit `68c79f9` improved all 25 buying guides with guide-specific buyer checklists, clearer product-detail sections, on-page navigation, manufacturer-source links, and breadcrumb structured data. The guide template passes its canonical URL explicitly to the shared layout.
- Product catalogue remains **25 guides / 100 product records**. All entries remain research drafts; no prices, ratings, reviews or hands-on tests were added.
- Corrected product-level manufacturer references for Sony WF-1000XM6/XM5 and Apple AirPods Pro 3/AirPods 4 ANC; corrected Epson MoGo 4, EF21, EF-30 and CO-FH02 references; updated Apple Watch Series 12 and Ultra 4 names to match Apple's current comparison; corrected Garmin Forerunner 265 source; added direct Brother US product pages and model-specific Logitech/Synology references.
- Added an explicit availability warning for Epson EF21 because Epson's US product page marks that listing discontinued. Added electrical safety/regional compatibility notes for the four Brother US printer variants because their cited manufacturer pages specify 110–120V AC; UK buyers must verify a UK-rated model.
- Added 25 guide-specific `buyingChecklist` arrays covering product compatibility, model variants, total ownership cost, region/voltage, accessories, network/device support and other category-relevant purchase checks.
- First test attempt on commit `68c79f9` found a TypeScript error: the inferred catalogue type did not include optional `updatedAt`. Corrected the guide template to use the existing `publishedAt` field in commit `f1ad24c`.
- Latest combined quality workflow `43934409942` is still in progress at the Lighthouse audit stage at the time of this note. Astro checks, catalogue validation, static build, smoke/SEO/JSON-LD/affiliate checks and axe-core accessibility audit have completed without a reported failure; Lighthouse is not yet confirmed.
- Cloudflare Pages preview check succeeded for the latest candidate commit; preview remains noindex and blocked in robots.txt. The separate Cloudflare Workers build check continues to fail and is not a Pages deployment.
- Production `main` remains unchanged; PR #1 remains Draft/open/unmerged. No public site content, settings, DNS or production affiliate configuration was changed.
- Next: complete Lighthouse verification; review/replace the legacy EF21 candidate before any public release; continue product-by-product UK/US variant and direct Amazon listing/ASIN verification; then review homepage discovery layout. No direct Amazon ASINs, prices or ratings should be added without verification and editorial approval.


## 16 November 2026 – Pinterest cover automation implementation
- Development implementation commit: 76105fa678a952e960d3de9843fd76f6efe5d7c8 (branch automation/bootstrap).
- Added a deterministic, local image pipeline that reads the 25 guide records and generates one original branded 1000×1500 PNG cover per guide in public/images/pinterest/<slug>.png. Uses Sharp 0.35.5 with original SVG text/shapes; no external image service, stock photography, paid API, external artwork or credentials.
- The image command runs automatically before Astro dev and build. Guide pages display their cover and include Open Graph/Twitter image metadata; the Buying Guides index displays matching cover thumbnails.
- Smoke tests now verify every guide has a valid PNG signature and exact 1000×1500 dimensions, that the guide page references it, and that social image metadata exists.
- On quality run #43943510553, dependency installation, Astro checks, catalogue validation, keyword generation, static build, smoke tests, local preview server, axe accessibility audit and homepage desktop/mobile Lighthouse completed successfully. Per-guide Lighthouse audits were still running when this handoff note was written; check the final run result before calling full QA complete.
- Isolated Cloudflare preview guide page was fetched successfully and its canonical URL, noindex/nofollow directive, and Open Graph/Twitter image URLs point to the generated cover path. Direct binary extraction of the PNG was not available through the page fetch, while the CI smoke test verified the built PNG files.
- Confirmed main branch remains at 2b7b9a82bd8a7fdf601b2add42d5612d04d3e3b4; PR #1 remains open, Draft and unmerged. No production or WordPress changes.
- Product photos are still intentionally omitted. Existing manufacturer source links and Amazon US/UK model-search links remain; direct ASINs and image feeds require verified listings and applicable licensing/API eligibility. No product image has been scraped or copied.
- Free-operation note: the generator itself uses no paid API or stock asset. GitHub Actions and hosting remain subject to their normal included-usage quotas; this is not a promise of unlimited compute/hosting at zero cost.
- Next: check completion of run #43943510553, inspect the deployed preview cover, then continue product-by-product verification of official source links and exact US/UK retailer listings. Keep all content in draft/review status and do not merge or publish without owner approval.


## 17 November 2026 — Catalogue audit continuation and verified corrections
- User supplied Cloudflare Pages deployment log: deployment completed successfully and produced commit-specific preview URL `https://6da0c901.smartpickhub.pages.dev`. The log also states `Uploading 0 files (0/0)`; this proves the command completed but does not prove that updated project files were uploaded. Treat it as a preview deployment only, not a production release or confirmation that the latest catalogue commit is live.
- Continued the 100-product audit using official manufacturer pages and independent search. All 25 guides / 100 product records remain Research Draft; no guide has been approved.
- Corrected the Smartwatches guide's Apple Watch Series 12 and Ultra 4 feature bullets, which had incorrectly described Series 11 / Ultra 3 features. Replaced them with model-specific data from Apple's current official specifications: Series 12 42/46mm, LTPO3 Always-On Retina wide-angle OLED up to 2,000 nits, S11 chip and Apple-estimated up to 24-hour normal-use battery; Ultra 4 49mm Grade 5 titanium, up to 3,000-nit display and Apple-estimated up to 50-hour normal-use / 84-hour Low Power Mode battery. Refreshed the SE 3 source note to match its 40/44mm current model details.
- The correction is committed only to `automation/bootstrap` in commit `0bc633df5b1f5d2a0e7405f6ac12e05d68ed1f34`; `src/data/products.json` updated. Sources: Apple Watch comparison https://www.apple.com/watch/compare/ ; Series 12 technical specifications https://support.apple.com/en-mide/148589 ; Ultra 4 technical specifications https://support.apple.com/en-mide/148758 .
- Cross-checks also confirmed the catalogue's Apple Watch Series 12 / Ultra 4 and iPad mini (A20 Pro) names are real current Apple models as of this audit date; Logitech PRO X2 SUPERSTRIKE is an official current model; Sony WH-1000XM4C is a genuine 2026 Sony model (not to be described as a China-only variant); Synology DS224+ has two 1GbE ports, not 2.5GbE. These checks corrected earlier preliminary research assumptions; no change was needed to these catalogue names/specs in this commit.
- Known continuing review priorities: exact UK vs US electrical variants for power stations, air fryers, cordless tools and Brother printers; exact regional identifiers and listing matches; product sources that point only to brand catalogues instead of the exact model; and any stale/discontinued candidates. No direct ASINs, prices, ratings, availability claims or product photos were added.
- No change to `main`, no PR merge, no production/WordPress changes, no removal of noindex/robots protections, and no Amazon import. All catalogue entries remain unapproved drafts.
- **Next:** continue model-by-model checks across all 100 products, beginning with regional electrical/voltage compatibility and broad/generic source URLs; apply only corrections supported by exact manufacturer documentation, then run the full quality workflow and record its actual result.


## 17 November 2026 — Safe editorial automation and documentation correction
- Reviewed the current draft-research workflow and found it committed generated files on the checked-out default branch and ran `git push`. This could modify `main` directly once the workflow is active there, bypassing the intended editorial review gate.
- Replaced that behavior with `peter-evans/create-pull-request@v7`: generated briefs are staged only from `content-drafts/` on the dedicated `automation/editorial-drafts` branch, and submitted as an editorial-review pull request to the repository default branch. The workflow requests only the required `contents: write` and `pull-requests: write` permissions. It does not merge or publish.
- Changed dependency installation to `npm ci` using the committed lockfile and enabled npm cache. Missing `GEMINI_API_KEY` fails safely before any PR is created. Generated research remains unverified and requires human checks.
- Corrected README's stale catalogue count from 10/40 to the verified 25 guides / 100 product records and updated the automation description to match the PR-only behavior.
- Validation still required: run the full workflow and inspect the resulting GitHub Actions checks on the new commit. No merge to `main`, production deployment, WordPress change, public publication, or indexing change was performed.
- Release gate remains: PR #1 is Draft/open/unmerged; do not merge or trigger production deployment without the required owner approval.


## 17 November 2026 — Latest branch and PR verification
- Finalized the safe editorial workflow on development branch `automation/bootstrap`; latest head at this checkpoint: `8095d8632688957533385f627b4987e70ff79a64`.
- Removed optional PR labels from the workflow so it does not assume repository labels exist. The workflow now only stages `content-drafts/` and uses the dedicated review branch; no direct push to `main` and no automatic merge.
- Updated PR #1 description with the verified 25-guide / 100-product state, the successful earlier full QA run #297, and the fact that the latest full QA run #305 is still in progress. Cloudflare Pages preview build is also in progress. The separate Cloudflare Workers check is not a Pages build and reports that the named Worker does not exist.
- PR #1 remains Draft/open/unmerged. `main` remains unchanged. No production deployment, WordPress edit, public publication or removal of noindex/robots protections occurred.
- Next: wait for run #305 and the Cloudflare Pages preview check to complete; inspect their actual results before marking this revision validated. Keep the release/merge gate closed until owner approval.

- Renamed the workflow file from the misleading `.github/workflows/auto-publish.yml` to `.github/workflows/draft-research.yml`; workflow behavior remains review-PR-only with no direct main push, merge or publication.


## 17 November 2026 — Latest CI and preview verification
- Verified PR #1 head commit `42ae75ad9221a07bcad0a43de02d1f858254b45e`; PR #1 remains Draft/open/unmerged and targets `main` at `2b7b9a82bd8a7fdf601b2add42d5612d04d3e3b4`.
- Both `build-and-audit` checks on the latest head completed successfully (GitHub Actions run #44054042191 and its paired run #44054047662). The latest head therefore has a completed successful quality workflow.
- Cloudflare Pages preview deployment completed successfully for the exact latest head. Commit-specific preview: https://34a42ab1.smartpickhub-preview.pages.dev/ .
- Fetched and inspected the preview homepage, guide index, one guide detail page, affiliate disclosure and RSS. All HTML routes returned content; the guide index displays 25 guides, each marked as a research draft requiring human review. The guide detail page clearly distinguishes Amazon US/UK marketplace search links from direct product listings and disclaims hands-on testing. Affiliate disclosure is present. RSS contains no guide items because none are approved.
- Confirmed preview page metadata reports `noindex, nofollow`; canonical URLs point to the stable preview origin https://smartpickhub-preview.pages.dev/. Preview protections remain active.
- Separate Cloudflare Workers check remains failed because the account has no Worker named `smartpickhub`; this does not affect the successful Pages preview deployment and has not been modified.
- No merge to `main`, no production deployment, no WordPress/DNS changes, no public publication, and no removal of noindex/robots protections.
- Next: continue the 100-record product/source audit, prioritising exact regional SKUs, electrical/voltage compatibility, stale models and model-specific manufacturer sources. Keep all guides as drafts pending review and approval.


## 17 November 2026 — Regional product verification pass
- Audited all 100 product records in `src/data/products.json`; identified 92 records whose US and UK marketplace search phrases were identical. Identical phrases are not automatically incorrect for globally shared USB/peripheral models, but they remain a regional verification backlog and must not be treated as confirmed market-specific SKUs.
- Updated 7 higher-risk records with distinct US/UK search wording and explicit regional caveats, using official manufacturer documentation:
  - EcoFlow RIVER 2: US 120V AC vs UK/EU 230V AC variant.
  - Jackery Explorer 300 Plus JE-300B: same model code but US 100V/60Hz output vs European regional input/output specifications.
  - Brother printers: US 110–120V SKUs separated from UK-rated alternatives/searches; UK models MFC-L8390CDW, HL-L3240CDW and DCP-L2660DW verified at 220–240V; no exact UK counterpart asserted for MFC-L3780CDW.
  - COSORI TurboBlaze: US CAF-DC601-KUS 120V/60Hz explicitly distinguished from the UK 6L listing; UK voltage rating remains a buyer verification point because the captured UK product page did not expose it.
- Sources checked: EcoFlow official regional manual and UK product page; Jackery official US and Europe support pages; Brother UK official store pages; COSORI US and UK official product pages. No pricing, rating, availability or direct ASIN claims added.
- Data commit: `59b7f807054d92a28b2411ec16f537e32a296031` on `automation/bootstrap`. GitHub Actions build/audit and Cloudflare Pages preview were triggered and were pending/in progress at the time of this log update.
- PR #1 remains Draft/open/unmerged. No production, WordPress, DNS or indexing changes. noindex and robots blocking remain enabled.
- Next: inspect the new commit's validation and preview checks; continue the remaining regional model/source audit without guessing unverified counterparts.


## 17 November 2026 — Regional SKU audit continuation
- Continued the 100-product US/UK review using official manufacturer sources. Updated 12 product records in `src/data/products.json` (commit `26f9c0597dba6bf134eb7f4f09f56070faae843b`): four DEWALT cordless-drill records, four Breville/Sage espresso-machine records, and four Roborock robot-vacuum records.
- DEWALT: separated US 20V MAX / 12V MAX model identifiers from UK 18V XR / 12V XR candidates. No one-to-one equivalent is claimed where the model/kit differs; the DCD703F1 5-in-1 system has no exact UK counterpart confirmed. UK candidates and source references are documented in each product record.
- Sage/Breville: UK identifiers now use the Sage SES500, SES870, SES878 and SES985 families, with UK official pages/manuals and 220–240V regional caveats. Do not buy US electrical versions for UK/Jordan mains.
- Roborock: replaced a generic US catalogue source with the official UK store. The UK store lists Saros 10, Qrevo Curv 2 Pro and Qrevo Edge 2; only Qrevo Edge 2 is an exact UK model name confirmed in this pass. Saros 10R, Qrevo CurvX and Qrevo 2 Pro remain explicitly unconfirmed; no model equivalence is invented.
- Manufacturer sources checked: DEWALT UK drill-driver pages; Sage UK product pages and Oracle Jet manual; Roborock UK official store. Research refs include DEWALT DCD791NT-XJ/DCD708N-XJ/DCD701N-XJ, Sage SES500/SES878/SES985 and Roborock's UK product range.
- Validation: the previous exact-head quality workflow on `9f822d8` passed all steps. The new data commit `26f9c05` has not yet returned a workflow run or check result at the time of this note; do not mark this new commit validated until a new run completes. The separate Cloudflare Workers missing-worker issue remains distinct from Pages.
- Catalogue remains 25 guides / 100 products, all unapproved research drafts. No merge to `main`, production deployment, WordPress/DNS change, indexing/publication, Amazon import or change to noindex/robots protections.
- Next: validate commit `26f9c05`, inspect the matching Pages preview, then continue the remaining records with emphasis on exact model-specific source URLs, legacy/discontinued candidates and regional variants.


## 17 November 2026 — Preview review and search phrase cleanup
- Cloudflare Pages posted a successful deployment for PR head `f8a9ade5737a7cd68bd5b28bf743143a2bdbdb9b`: https://bbb9d261.smartpickhub-preview.pages.dev/ .
- Read the live preview homepage, guide index, and the cordless-drill, espresso-machine and robot-vacuum guide routes. All returned content. The index shows 25 guides and labels each as a research draft requiring human review. All inspected pages carry `noindex, nofollow`; canonical URLs resolve to the stable preview origin. Homepage and disclosure messaging explain research-led content and affiliate links; no hands-on testing is claimed.
- Preview inspection identified 8 UK marketplace search phrases that had editorial caveats embedded in the query string. Cleaned those phrases in the four DEWALT and four Roborock records; unconfirmed counterpart caveats remain in the availability/source notes, not in the Amazon search phrase. Commit: `72b5eb8c5b909019f3271596822ba31098bb2a8f`.
- CI run #325 on `26f9c05` was cancelled during Chromium installation after build, catalogue validation and smoke tests passed. The subsequent run #328 on `f8a9ade` progressed through Chromium, axe-core, homepage Lighthouse and was still running the per-guide Lighthouse sweep at last poll. Do not treat it as completed yet. A fresh run for `72b5eb8` had not appeared at the time of this note.
- PR #1 remains open/Draft/unmerged. No production, WordPress, DNS, publication or indexing changes. noindex and robots protections remain enabled.
- Next: confirm CI on `72b5eb8`, check the newest Pages deployment, then continue reviewing remaining catalogue sources and legacy product candidates.


## 17 November 2026 — Final search phrase validation
- Re-scanned all 100 `uk_identifier` fields after preview review. Found one remaining semicolon/caveat in Brother MFC-L3780CDW's UK search phrase and removed it; the unconfirmed UK counterpart note remains in `availabilityNote`. Data commit: `d93e14b544a585195246c8e8830e70f4fc0c0295`.
- Final catalogue check: 100 products; zero UK search phrases contain semicolon-delimited editorial caveats. The eight DEWALT/Roborock queries and Brother MFC-L3780CDW phrase are now clean search terms; caveats remain separately visible in the product notes.
- The successful Pages preview for `f8a9ade` was inspected across homepage, guide index and three changed guide pages. The new search-cleanup commit and latest documentation head still require their own completed CI and Pages preview checks.
- CI run #328 on `f8a9ade` was ultimately cancelled before final Lighthouse sweep completed; run #334 on later docs head was still in progress at last poll. Neither is counted as a full pass.
- PR #1 remains open/Draft/unmerged. No production/WordPress/DNS changes, public publishing or indexing changes; noindex/robots protections remain enabled.
- Next: verify a full successful quality workflow and Pages preview for the final head, then continue source-level review of the remaining 100-record catalogue and resolve the Cloudflare Workers integration only if its intended role is clarified.


## 17 November 2026 — Air purifier and NAS source audit
- Continued manufacturer-source review and updated five records in `src/data/products.json`:
  - Four Levoit air purifiers now use model-specific US manufacturer pages and distinct UK-market search phrases. Official UK listings confirm Core 300, Core 300S and Core 400S names; the exact UK Vital 200S counterpart was not confirmed. US Core 300-P and 300S-P pages specify 120V/60Hz, so the catalogue now warns against assuming electrical interchangeability and asks buyers to verify the UK rating plate/filter/warranty.
  - Synology DS224+ now links to its exact official specification page rather than a general product catalogue; its PSU input is specified as 100–240V AC, 50/60Hz. Legacy-platform and drive-compatibility caveats remain.
- Data commits: `74445de212c4afdfd2403723c7d13b2dc99f5511` (Levoit) and `44e45d6a758e090ae1949fe843893af3a6d2ebf2` (Synology).
- Official references reviewed: Levoit US model pages and Levoit UK air-purifier collection/product pages; Synology DS224+ hardware specifications. The UK store currently lists Core 300, Core 300S and Core 400S; no exact Vital 200S UK counterpart was verified. Do not claim exact electrical equivalence from shared model-family names.
- The final head now includes these data edits. CI and Pages checks must be re-confirmed for the final documentation head before marking this batch fully validated.
- PR #1 remains Draft/open/unmerged; no production, WordPress, DNS, publication or indexing changes. noindex/robots protections remain active.
- Next: confirm final CI/Pages checks, then continue regional verification of remaining appliances, vacuums, printers and product lifecycle/source freshness.

## 17 November 2026 – CURRENT HANDOFF (read this first; supersedes older contradictory hosting notes)

OWNER'S FINAL HOSTING DECISION: production/MVP address is https://smartpickhub.pages.dev/ on Cloudflare Pages. InfinityFree and smartpickhub.infinityfree.me are permanently excluded from the plan. A paid custom domain is deferred to phase two.

ENVIRONMENTS
- Preview project smartpickhub-preview: GitHub repo ralabsi95-spec/smartpickhub, branch automation/bootstrap, automatic deployments enabled. Stable preview hostname https://smartpickhub-preview.pages.dev/.
- Latest confirmed immutable preview deployment: commit 9d06a1d95076ec79378d4e3f6740d285d65761ee, URL https://b6896e8e.smartpickhub-preview.pages.dev/. Owner confirmed it loads in a private window on 17 Nov 2026.
- Preview Pages settings confirmed by screenshots: root directory blank, npm run build, output dist, build system v3, branch automation/bootstrap, automatic deploys on, Build cache enabled, Text build variable NODE_VERSION=22.23.4.
- Production Pages project smartpickhub exists with hostname https://smartpickhub.pages.dev/ but currently has No Git connection. Do not connect or deploy it until release readiness and explicit approval.
- Separate Workers app also named smartpickhub has a failed build / No active routes. This is unrelated to the successful Pages preview and is not required for static Astro Pages. Do not retry or configure routes to fix Pages.

VERIFIED QUALITY / STATUS
- GitHub Actions run #347 (44076188724) completed successfully on the checked branch head.
- Cloudflare Pages deployment for 9d06a1d succeeded; the separate Workers build failure must not be confused with Pages.
- 25 guides / 100 products currently exist as research drafts; zero approved for publication.
- Preview retains noindex,nofollow; robots.txt disallows crawling; RSS only includes approved guides and may be empty.
- PR #1 https://github.com/ralabsi95-spec/smartpickhub/pull/1 was last verified open, draft, unmerged. Do not merge without explicit approval.
- No production deployment, DNS change, WordPress migration, InfinityFree action, product import or public publication has occurred.

NEXT TASK
Continue product catalogue audit (regional US/UK models, official sources, obsolete models, accurate marketplace search phrases), fixing on automation/bootstrap only. Then prepare a production launch checklist for smartpickhub.pages.dev and seek approval before connecting the production Pages project or deploying. Read MASTER_PROJECT.md's 17 Nov authoritative continuity section before doing work. Never suggest InfinityFree again.


## 17 November 2026 – Catalogue audit continuation
- Latest working commit before this note: `a71fd5fc67284e9484d2bee77721224dc63964ac`.
- Reviewed the remaining Dash Cam, electric-toothbrush, cordless-vacuum, printer and portable-projector records against manufacturer sources.
- Updated all four Garmin Dash Cam records to Garmin's UK product documentation, replacing the US-locale generic comparison link. Source now distinguishes X310 4K, X210 1440p, X110 1080p and Mini 3 1080p; Mini 3 has no display while X110 includes a 2.4-inch display. Regional package/accessory checks remain required.
- Updated all four Oral-B iO records to the official Oral-B UK model comparison. Added model-tier details: iO3 (3 modes), iO6 (5 modes and display), iO9 (7 modes and 3D tracking) and iO10 (7 modes, 3D tracking and iO Sense live coaching). Regional charger/bundle verification remains required.
- Expanded Epson CO-FH02 note to state that Epson's regional listing identifies it as discontinued; it must be treated as a legacy candidate, not a current-buy recommendation, until current UK/US availability and support are verified.
- No direct ASINs, current prices, stock or reviews were invented. No guide was approved or published.
- Official sources consulted: Garmin UK product page https://www.garmin.com/en-GB/p/pn/010-02899-10/ ; Oral-B UK iO comparison https://www.oralb.co.uk/en-gb/oral-health/why-oral-b/electric-toothbrushes/which-oral-b-io-is-right-for-me ; Epson Middle East CO-FH02 discontinued page https://www.epson-middleeast.com/en/projectors/professional/business-education/co-fh02-v11ha85040 .
- Latest GitHub Actions run #351 on the preceding docs head was in progress; this catalogue update triggers a newer run. Verify the latest head's CI and Pages preview before claiming full validation.
- Next: continue lifecycle/source audit for projectors and vacuum cleaners, then inspect current CI, latest preview and update PR summary. Production project `smartpickhub.pages.dev` remains untouched; InfinityFree remains excluded.
