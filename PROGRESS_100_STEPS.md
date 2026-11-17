# SmartPickHub — 100-step execution roadmap

**Last updated:** 17 November 2026  
**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Working branch:** `automation/bootstrap`  
**Latest recorded branch checkpoint:** `f08348c` (rights-first Commons research pipeline, image policy and handoff; CI pending)  
**Current preview:** https://fa10e958.smartpickhub-preview.pages.dev/  
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
65. [x] Run Lighthouse for guide index, disclosure and every guide (verified in CI run #453).
66. [x] Generate consolidated JSON quality/security report (verified in CI run #453).
67. [x] Upload the unified quality/security report artifact (verified in CI run #453).
68. [~] Review Lighthouse scores and opportunities; guide index scored 76 Performance, with unused CSS and large PNG covers identified.
69. [~] Review axe findings; zero violations, but 28 gradient-related contrast checks need manual confirmation and one ARIA warning was corrected in the next code batch.
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
- CI run #453 / ID `44113630229` completed successfully on code commit `9325de673ec932b95e40ba7a72d0b37436c4b257`. It audited 28 accessibility routes and 29 Lighthouse pages, generated the consolidated report and uploaded artifact `smartpickhub-quality-reports`.
- Run #453 results: zero axe violations; 29 incomplete checks (28 gradient-related colour-contrast checks and one ARIA-label/role issue on the guide filter container); Lighthouse all pages scored 100 Accessibility and 100 Best Practices; SEO scores 66–69 because preview indexing is intentionally blocked; Performance minimum 76 on the guide index, all other pages at least 90. npm audit reported zero vulnerabilities in that run.
- Follow-up code improvements are now on the branch: generate 720×1080 WebP derivatives for site display while retaining 1000×1500 PNGs for Pinterest/social metadata; switch homepage/guide cards and guide covers to WebP; add WebP smoke checks; add a valid group role to the guide filters; add Cloudflare Pages cache headers.
- These follow-up changes are **not yet CI-confirmed**. Latest known workflow is run #470 / ID `44115423685`, pending for commit `459b4481605558da5fcc265057f77de4e2f3563c`. Recheck it and any newer run before claiming the performance improvement works.
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
