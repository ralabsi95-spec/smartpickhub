# SmartPickHub — 100-step execution roadmap

**Last updated:** 18 November 2026  
**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Working branch:** `automation/bootstrap`  
**Latest recorded branch checkpoint:** `57b322d` (regional product-source refinement and accessibility background fix; CI pending)  
**Last fully verified preview:** https://1702b700.smartpickhub-preview.pages.dev/ (commit `5a996eb`; newer catalogue/CSS commits still await a matching preview)  
**Overall status:** Development and verification in progress. This is a 100-step roadmap, not a claim that all 100 steps are complete.

## Status key
- [x] Completed and supported by repository/tool evidence.
- [~] Partially complete or awaiting owner visual/editorial review.
- [ ] Planned / not yet completed.

## Phase 1 — Project foundation and safe environments
1. [x] Establish the GitHub repository as the controlled source of truth.
2. [x] Create the isolated development branch `automation/bootstrap`.
3. [x] Establish the Astro static-site foundation.
4. [x] Establish a separate Cloudflare Pages preview project.
5. [x] Configure preview builds from the development branch.
6. [x] Configure build command `npm run build` and output `dist`.
7. [x] Configure Node.js build version `22.23.4`.
8. [x] Confirm preview automatic deployments are enabled.
9. [x] Keep production Pages disconnected from Git.
10. [x] Keep production deployment, DNS, WordPress and publishing behind explicit approval.

## Phase 2 — Content structure and catalogue integrity
11. [x] Establish buying-guide and product data structures.
12. [x] Build a catalogue of 25 research-draft guides.
13. [x] Add 100 product research records.
14. [x] Keep all catalogue records as drafts pending human approval.
15. [x] Add catalogue validation for required fields and expected counts.
16. [x] Validate affiliate destinations and reject unverified ASIN/price/rating claims.
17. [x] Keep US and UK Amazon marketplace identifiers distinct.
18. [x] Use model-name search phrases where exact ASINs are not verified.
19. [x] Separate product source references from retailer search destinations.
20. [x] Keep RSS limited to approved editorial content.

## Phase 3 — Product accuracy and regional research
21. [x] Review regional voltage and plug differences for portable power products.
22. [x] Review regional Brother printer model differences.
23. [x] Review US/UK DEWALT tool platform differences.
24. [x] Review UK Sage / US Breville espresso naming and model differences.
25. [x] Review Roborock UK model availability and suction claims.
26. [x] Review Levoit air purifier regional model availability.
27. [x] Replace generic Synology DS224+ source with exact manufacturer specifications.
28. [x] Review Garmin dash-cam model specifications against UK sources.
29. [x] Review Oral-B iO model tiers against UK manufacturer information.
30. [x] Mark Epson CO-FH02 as discontinued/legacy rather than imply current status.
31. [x] Clean UK marketplace search phrases of editorial caveats.
32. [ ] Re-audit remaining product records for current lifecycle and exact manufacturer sources.
33. [ ] Recheck every product's UK marketplace search phrase for correct model and variant.
34. [ ] Recheck every product's US marketplace search phrase for correct model and variant.
35. [ ] Verify warranty, accessories, voltage, plug and regional app compatibility where relevant.
36. [ ] Identify discontinued, replaced or hard-to-source products across all categories.
37. [ ] Replace or remove weak candidates only after evidence review.
38. [ ] Confirm every guide has a distinct user search intent and useful scope.
39. [ ] Check guide claims against cited manufacturer documentation.
40. [ ] Complete editorial review of all 25 guides.

## Phase 4 — Design and user experience
41. [x] Refresh the colour system with friendly teal/green, blue and coral accents.
42. [x] Improve page backgrounds, cards, buttons, comparison tables and disclosure styling.
43. [x] Add visible keyboard focus styling.
44. [x] Respect reduced-motion preferences.
45. [x] Improve small-screen navigation and control sizing.
46. [x] Clarify paid affiliate-link disclosure beside product actions.
47. [x] Clarify homepage wording so catalogue records are not mistaken for tested products.
48. [~] Inspect latest design visually on a real mobile viewport with owner feedback.
49. [ ] Inspect latest design visually on desktop with owner feedback.
50. [ ] Apply only owner-approved visual refinements.
51. [ ] Review typography, line lengths and long comparison tables.
52. [ ] Test navigation and calls to action with keyboard and touch.
53. [ ] Review empty states, 404 page and RSS presentation.
54. [ ] Confirm consistent layout across all guide templates.
55. [ ] Obtain owner acceptance of the visual design.

## Phase 5 — SEO, accessibility and performance
56. [x] Keep preview metadata set to noindex/nofollow.
57. [x] Keep preview robots.txt crawl-blocked.
58. [x] Restrict RSS entries to approved guides.
59. [x] Generate canonical, sitemap and structured metadata from the configured site origin.
60. [x] Limit structured data to claims supported by available content.
61. [x] Run Astro checks and static build in CI.
62. [x] Run smoke tests for generated pages, SEO, JSON-LD and affiliate links.
63. [x] Run axe-core accessibility checks across catalogue routes.
64. [x] Run Lighthouse for desktop and mobile homepage.
65. [x] Run Lighthouse for guide index, disclosure and every guide (verified in CI run #477).
66. [x] Generate consolidated JSON quality/security report (verified in CI run #477).
67. [x] Upload the unified quality/security report artifact (verified in CI run #477).
68. [x] Review Lighthouse scores and opportunities; after WebP delivery, all 29 audited pages scored 100 Performance in CI run #477.
69. [~] Review axe findings; zero violations across 28 routes; the ARIA group warning is resolved, while 28 gradient-related contrast checks still require manual confirmation.
70. [ ] Re-test after any performance/accessibility remediation.

## Phase 6 — Analytics and conversion readiness
71. [ ] Decide on a privacy-conscious analytics platform and required consent approach.
72. [ ] Define events for affiliate outbound clicks without confusing them with Amazon reports.
73. [ ] Verify click tracking in a non-production test environment.
74. [ ] Define a reporting view for traffic, guide engagement and outbound clicks.
75. [ ] Document the difference between website clicks and Amazon Associates orders/earnings.
76. [ ] Confirm affiliate disclosure placement and wording across every template.
77. [ ] Review product-card hierarchy and comparison-table conversion clarity.
78. [ ] Test all affiliate links without generating misleading purchase claims.
79. [ ] Verify Amazon UK Associates account/site approval status before launch.
80. [ ] Define a monthly content and conversion review routine.

## Phase 7 — Pinterest and organic distribution
81. [x] Create original SVG Pinterest cover graphics in the project assets.
82. [ ] Audit every graphic for legibility and brand consistency.
83. [ ] Create a Pinterest pin-to-guide mapping plan.
84. [ ] Prepare pin titles and descriptions aligned with real guide intent.
85. [ ] Verify destination URLs and affiliate-policy boundaries for each pin.
86. [ ] Prepare a sustainable publishing calendar.
87. [ ] Prepare reusable pin templates and export checks.
88. [ ] Review organic search query opportunities and internal-link clusters.
89. [ ] Set a non-spammy content refresh policy based on genuine value.
90. [ ] Obtain owner approval before publishing social posts or pins.

## Phase 8 — Release readiness and controlled launch
91. [ ] Verify the stable preview hostname serves the latest approved build.
92. [ ] Complete owner mobile and desktop visual acceptance.
93. [ ] Complete editorial approval for the initial launch guides.
94. [ ] Complete affiliate account and policy checks for Amazon UK.
95. [ ] Complete analytics and outbound-click test plan.
96. [ ] Confirm backup/export and rollback plan for release.
97. [ ] Review the production Pages project settings and intended target hostname.
98. [ ] Present a final release checklist and risks to the owner.
99. [ ] Obtain explicit approval before connecting/deploying production or changing DNS.
100. [ ] Deploy only after approval, then verify live pages, SEO controls, links, analytics and rollback readiness.

## Current checkpoint — 17 November 2026
- Roadmap tally from the current checklist: 52 completed steps; steps 48, 68 and 69 partially complete. Remaining work is still substantial; do not describe the 100-step roadmap as finished.
- Current catalogue: 25 research-draft guides / 100 products; 0 guides approved for publication.
- CI run #477 / ID `44115712224` completed successfully on code commit `f336ac5fb954b03dc1411051f53d92b7bbd5a1c3`. It audited 28 accessibility routes and 29 Lighthouse pages, generated the consolidated report and uploaded artifact `smartpickhub-quality-reports` (artifact ID `14343891465`).
- Run #477 results: zero axe violations; 28 incomplete checks, all gradient-related colour-contrast checks; the guide-filter ARIA role warning is gone. All 29 Lighthouse pages scored 100 Performance, 100 Accessibility and 100 Best Practices; SEO scores 66–69 because preview indexing is intentionally blocked. npm audit reported zero vulnerabilities across 362 dependencies.
- Follow-up code improvements are now on the branch: generate 720×1080 WebP derivatives for site display while retaining 1000×1500 PNGs for Pinterest/social metadata; switch homepage/guide cards and guide covers to WebP; add WebP smoke checks; add a valid group role to the guide filters; add Cloudflare Pages cache headers.
- WebP implementation and caching changes are now CI-confirmed by run #477. A subsequent small code refinement on `8bb6cb6` corrects HTML width/height attributes to match the 720×1080 WebP assets and adds a smoke assertion; this latest refinement is pending CI and preview verification.
- Image status: 0 actual product-image records; Commons research script has not yet been run. Do not claim real product images or candidates have been found.
- 71 identical US/UK search phrases are regional review flags, not automatic errors.
- Remaining product work: full 100-product lifecycle, exact-model, source and regional-marketplace audit.
- Preview remains non-indexable. No PR merge, production deployment, DNS change, public publishing, WordPress modification or removal of crawl protections has occurred.
- Next: verify run #470, inspect new WebP file sizes and Lighthouse results, manually resolve the gradient-related contrast review, then continue product-by-product source/model verification and controlled Commons candidate research.

## 17 November 2026 — Product-image integrity implementation
- Added optional `product.image` metadata support to guide product detail pages. The image is rendered only when the record supplies an image URL, useful alt text, source page, licence statement and attribution.
- Added a clear, accessible “Product photo under verification” fallback when no approved image metadata exists. This intentionally avoids displaying unrelated images as if they depict the named product.
- Added responsive image sizing, intrinsic dimensions, lazy loading and source/attribution caption styling.
- Extended `scripts/validate-catalogue.mjs` to validate HTTPS image and source-page URLs, alt text, licence metadata and attribution for any populated image record. Existing products remain valid with image slots pending.
- Extended `scripts/smoke-test.mjs` to require either the verified product image or the explicit fallback for each product detail section.
- Commits: `21a6769` (guide template), `08c0838` (responsive styling), `90f6c04` (catalogue image metadata validation), `0493e59` (smoke tests).
- This is an implementation milestone, not a completed photo rollout. No actual product image was added because image rights and exact model identity must be confirmed first.
- CI and the corresponding Pages preview are pending for the final commit. Do not describe this batch as fully tested or deployed until those checks pass.


## 17 November 2026 — Rights-first image research pipeline
- Added `PRODUCT_IMAGE_POLICY.md` defining permitted source paths, licence/attribution requirements, exact-model verification, and a strict rule that unapproved images never render.
- Added an optional Wikimedia Commons candidate-research script (`npm run research:commons`). It searches the 100 catalogue product names, requests file metadata/licence/creator information from the Commons API, and writes a candidate report. It never downloads, approves or publishes images.
- The script distinguishes public-domain/CC0 candidates, CC BY candidates, share-alike candidates and other/unclear licences; all results remain subject to human model-identity and rights review.
- Added an image-readiness report command (`npm run audit:images`) to the prebuild checks. The report flags products with no image and identical US/UK search phrases for regional manual review.
- Important policy finding: Amazon Product Advertising Content images have specific programme restrictions, including image-cache limitations. Do not scrape or locally cache Amazon product images as a shortcut; any Amazon-supplied imagery must use an explicitly permitted current integration and comply with the US/UK programme terms.
- Wikimedia Commons search/API metadata is a discovery aid, not proof of permission. Verify each individual file page, exact licence and non-copyright restrictions.
- Latest implementation commits include `d1d9afa` (Commons candidate research), `5f5836a` (optional command), `3892574` (image policy), `3b6ab68` (only approved images render), `7a50963` and `60f2e53` (rights evidence validation), `d070cc8` (smoke-test approval state), and `acf363b` (candidate report validation).
- CI and preview for the newest branch head remain unconfirmed. The last fully verified workflow is still #372 on `81d49bc`, before this entire image workstream.


## Current continuation checkpoint — 17 November 2026
- Latest recorded branch commit: `bbbb772e0885da65bbdf567fb8b160b424586f68` (handoff continuity-pointer correction).
- Product image display is gated on `reviewStatus: approved`; candidates cannot render until human verification.
- Optional Wikimedia Commons discovery is available through `npm run research:commons`; image readiness audit is available through `npm run audit:images` and is included in prebuild.
- The source catalogue audit currently shows 100 products, zero product-image records, and 71 identical US/UK search phrases. Identical phrases are review flags, not automatic errors or proof of wrong regional variants.
- The image research pipeline has not yet been run against the live Commons API from the repository environment. No candidate or real product image is claimed as found.
- Latest full CI remains run #372 on `81d49bc`; no CI result is currently visible for `f08348c`. A preview for this batch is also not confirmed.
- Roadmap completed count remains 47; step 77 is partially complete. New image-integrity sub-tasks are implementation work supporting step 77, not extra counted roadmap steps.


## 17 November 2026 — Exact manufacturer source refresh
- Replaced generic catalogue links with model-specific official sources for three Apple products: iPad Pro 13-inch (M5), iPad Air 11-inch (M4) and iPad (A16). The iPad mini (A20 Pro) source was already upgraded in the prior batch.
- Replaced the generic Sony headphone category page with exact official support specifications for WH-1000XM6, WH-1000XM5, WH-1000XM4C and WH-ULT900N.
- Updated comparison copy for WH-1000XM6, XM5 and XM4C to reflect the exact model's codec/connectivity and manufacturer battery estimates; the XM4C is explicitly distinguished from the original XM4.
- Official model evidence checked: Apple Support specifications for the iPad models; Sony Support specifications for the four headphone models. The 2026 WH-1000XM4C has its own Sony specification page and should not be treated as simply a colour name for the original XM4.
- Data commit: `0e6d68f`; Sony comparison-copy commit: `948c7d6`.
- The 71 identical US/UK marketplace phrases remain a manual review queue. No claim is made that they are all wrong; global models may legitimately share phrases.
- CI and preview for this batch remain unconfirmed. The last full successful workflow remains #372 on `81d49bc`.


## 18 November 2026 — CI #477 review and WebP dimension refinement
- Reviewed the complete `smartpickhub-quality-reports` artifact from run #477 (artifact ID `14343891465`, commit `f336ac5fb954b03dc1411051f53d92b7bbd5a1c3`).
- Confirmed 29 Lighthouse pages all scored 100 Performance, 100 Accessibility and 100 Best Practices; SEO 66–69 remains expected while noindex and robots crawl-blocking are active.
- Confirmed axe audited 28 routes with zero violations. Its 28 incomplete checks are gradient-background contrast calculations; the previous guide-filter ARIA group issue is no longer present.
- Confirmed `npm audit` has zero vulnerabilities across 362 dependencies; catalogue validation and 29-page smoke tests passed; 25 guides / 100 products remain drafts; zero product photos are approved or pending; 71 identical US/UK search phrases remain a manual regional review queue.
- Follow-up code commits `e6862a5`, `3262be4`, `73f9f0e` and `d8729bc` align all rendered WebP image dimension attributes with the generated 720×1080 assets and add a smoke assertion. The smoke matcher was corrected in `8bb6cb6` after source inspection.
- Latest code head `8bb6cb67cb0bacd8452dbe8e05170ee30fdb3cb4`; CI and immutable Pages preview for this refinement are not yet confirmed. Do not claim the new smoke assertion has passed until a fresh run completes.
- The 100-step roadmap now records 53 completed, 2 partial and 45 not yet completed; this is a checklist tally, not a claim of 50 completed steps in this session.
- No merge, production deployment, DNS change, indexing, publication, WordPress modification or removal of crawl protections occurred.


## 18 November 2026 — Exact model-source audit batch
- Replaced generic DEWALT drill-category references with exact official US model pages for DCD801B, DCD794D1, DCD777D1 and DCD703F1. Updated each source note with the manufacturer-confirmed kit/platform details and retained explicit warnings that UK model numbers/battery systems are regional candidates, not automatic equivalents.
- Replaced the shared Garmin dash-cam source with exact official model pages for X310 (4K), X210 (1440p), X110 (1080p) and Mini 3 (ultracompact 1080p). Notes retain regional package/accessory verification caveats.
- Source pages were fetched and checked against model titles and manufacturer descriptions before the catalogue edit. No manufacturer product images were downloaded or added.
- Catalogue source-data commit: `8c1090f2eee5382829caaca7f8c6d832f6e89cfa`.
- Ran 56 explicit catalogue/configuration/keyword-map integrity assertions against the current branch data: 56 passed, zero failed. Coverage included 25/100 counts, uniqueness, draft-only state, content fields, HTTPS sources, affiliate IDs/tags/marketplace hosts, ASIN safeguards, image absence, regional phrase queue (71), 12 keyword clusters and exact model-source patterns.
- The latest code head and documentation commits have not yet received a fresh full CI run or immutable Pages preview. The last fully verified code remains `f336ac5` / run #477. Verify a new CI run and preview before treating these latest code changes as deployment-tested.


## 18 November 2026 — Preview freshness check
- Fetched the stable preview guide pages `/guides/cordless-drills-us-uk/` and `/guides/dash-cams-us-uk/` after the exact-source catalogue update. Both pages still display the older shared manufacturer sources, confirming the stable preview has not yet picked up commit `8c1090f`.
- The pages still correctly show `noindex, nofollow`; noindex/robots protections remain intact.
- Do not claim the source changes are live on preview. Await a Cloudflare Pages deployment for the latest branch head and inspect its immutable deployment URL before treating the new source references as visible.
- Latest code commit: `8c1090f2eee5382829caaca7f8c6d832f6e89cfa`; latest docs commit: pending this note. CI/preview for the latest code remain unconfirmed.


## 18 November 2026 — CI #509, current Pages preview and security correction
- Current PR head at this checkpoint: `70802e5baedb919f33f1413dcfe7931d5158864f`; GitHub Actions run #509 / ID `44233397487` completed successfully. All 19 job steps succeeded, including `npm ci`, Astro checks, catalogue validation, static build, 29-route smoke tests, axe audit on 28 routes, Lighthouse on 29 pages, consolidated audit generation and artifact upload.
- Reviewed report artifact `smartpickhub-quality-reports` (artifact ID `14396188117`). The audit identifies 25 guides / 100 products, 100 US and 100 UK marketplace link constructions, 0 product images, correct tracking IDs, 0 smoke errors, and preview safeguards `robots.txt Disallow: /`, `noindex` verified, publication disabled.
- Lighthouse: homepage desktop Performance 99; homepage mobile Performance 100; guide index, disclosure and all 25 guide pages Performance 100. Accessibility and Best Practices are 100 on all 29 pages. SEO 66 for the non-guide pages and 69 for guide pages is expected while indexing is intentionally blocked.
- axe: 28 routes, zero violations, 28 incomplete contrast checks. These are automated checks unable to determine contrast because of gradient backgrounds; they still require manual visual confirmation.
- **Security correction:** the same artifact's `npm audit` section is `review-required`, with 12 high-severity affected package nodes, all tracing to picomatch GHSA-fc5q-39xc-vjpf / CVE-2026-112366. The lockfile resolves picomatch 4.0.7 and nested 2.3.2. GitHub's reviewed advisory lists no patched release. The 12 package rows are dependency-chain findings, not 12 distinct CVEs. Previous notes in this project claiming zero npm vulnerabilities for this current dependency tree were incorrect and are superseded by this finding.
- Upstream picomatch PR #238 proposes a fix but remains open/unreleased; do not use an unofficial fork or downgrade Astro to force a green audit. The dependency is currently build-time/transitive in this static Astro project, with no direct app import or request-time glob service; this reduces exposure but does not fix the vulnerability. The temporary exception is only proposed and awaits explicit owner approval.
- Added `SECURITY_EXCEPTIONS.md` and `SECURITY_EXCEPTIONS.json` with a review deadline of 2 December 2026. Updated `scripts/build-audit-report.mjs` to report unique advisory URLs and exception-review state without suppressing npm audit findings. This code change requires a fresh CI run.
- Latest verified Cloudflare Pages preview for commit `70802e5`: `https://020ddb01.smartpickhub-preview.pages.dev/`. Checked homepage, drill guide, dash-cam guide and robots.txt. Both guides now show exact model-specific DEWALT/Garmin manufacturer sources; preview metadata is `noindex, nofollow`; robots.txt still disallows all crawling.
- PR #1 remains Draft/open/unmerged. The Cloudflare Pages preview deployment succeeded. A separate Cloudflare Workers build check still reports a missing `smartpickhub` Worker; this is not the Pages deployment and must not be conflated with it.
- No production deployment, PR merge, DNS change, public publishing/indexing, WordPress modification or removal of crawl protections occurred.




## 18 November 2026 — continuation checkpoint (05:05 UTC)
- Branch: `automation/bootstrap`; latest code head `57b322d3ef3ea45d6aa429ff406aaf51e8ea40da`. The immediately preceding catalogue commit is `550d5cc9ac2e460a3ee3f3e2d3bcc0e79c7fb0ac`.
- CI #522 / run ID `44239103560` completed successfully on PR head `5a996eb6661b0d2369aebded56ecf39b86063049`; artifact `smartpickhub-quality-reports` ID `14398618860` was downloaded and inspected. All 29 Lighthouse pages scored 100 Performance, Accessibility and Best Practices; SEO 66–69 is expected because preview indexing is intentionally blocked. axe checked 28 routes: zero violations and 28 incomplete contrast checks caused by gradient backgrounds. Catalogue and smoke checks passed: 25 guides, 100 products, 100 US and 100 UK marketplace link constructions, 29 HTML pages, zero smoke errors/warnings, correct US/UK tracking IDs, zero approved images and 100 products without approved image metadata. Preview safeguards were confirmed: robots disallow all, noindex verified, publication disabled.
- npm audit remains `review-required`: 12 high-severity package nodes trace to one picomatch advisory `GHSA-fc5q-39xc-vjpf` / `CVE-2026-112366`; this is one underlying advisory, not 12 independent CVEs. The audit report now exposes one unique advisory and the pending-owner-review exception (deadline 2026-12-02). No owner risk acceptance is implied.
- Product catalogue commit `550d5cc` refined six records: TP-Link Deco BE63, NETGEAR Orbi 770 RBE773, eero Pro 7, Logitech G309, Miele Triflex HX2 regional material numbers, and Roborock Qrevo 2 Pro US/UK suction discrepancy. Miele UK material 11819170 and US 11827000 are kept distinct. Exact manufacturer URLs and notes are stored in `src/data/products.json`.
- Accessibility remediation commit `57b322d` removes the page-level body gradient and makes the site header opaque, while retaining local editorial-card/hero styling. This is a targeted attempt to let axe calculate contrast; it is **not yet verified**. CI run #525 / ID `44241601543` is running on this head. PR-triggered run #524 / ID `44241559354` for the preceding catalogue commit was superseded/cancelled after its initial build steps; do not count it as a full pass.
- Last verified immutable Pages preview remains `https://1702b700.smartpickhub-preview.pages.dev/` for commit `5a996eb`. Do not claim that the newer catalogue/CSS commits are visible in preview until a new deployment URL and affected routes are checked.
- PR #1 remains Draft/open/unmerged. Production remains disconnected. All 25 guides remain research drafts; zero approved. Product image count remains zero. Preview noindex/nofollow and robots disallow all remain required.
- Roadmap checklist tally: 52 completed, 2 partial (steps 48 and 69), 46 planned. Step 68 is completed, not partial. The roadmap is not finished.
- Next: complete CI #525 and inspect its artifact, especially axe incomplete count and npmAudit status; verify the latest Pages preview; then update the roadmap/handoff with confirmed results. Continue the remaining 100-product regional SKU/lifecycle audit. Do not merge, publish, index, deploy production, change DNS or modify WordPress without explicit owner approval.
