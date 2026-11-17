# SmartPickHub — 100-step execution roadmap

**Last updated:** 17 November 2026  
**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Working branch:** `automation/bootstrap`  
**Latest implementation commits:** `21a6769`, `08c0838`, `90f6c04`, `0493e59` (image-slot batch; CI pending)  
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
65. [x] Run Lighthouse for guide index, disclosure and every guide.
66. [x] Generate consolidated JSON quality/security report.
67. [x] Upload the unified quality/security report artifact.
68. [ ] Review the numeric Lighthouse scores and detailed opportunities from the artifact.
69. [ ] Review axe findings and document any exclusions or residual issues.
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

## Current checkpoint
- Completed: 47 steps.
- Partially complete: step 48.
- Not complete: 52 steps.
- Last verified CI: run #372 / ID `44095400567`, conclusion `success`, on commit `81d49bc`.
- Latest exact preview: https://fa10e958.smartpickhub-preview.pages.dev/
- Next action: visual review on mobile and desktop, then inspect the quality-report artifact details and continue the remaining catalogue audit.
- No production launch, PR merge, indexing, public publication, DNS update or WordPress modification has been performed.


## 17 November 2026 — Product-image integrity implementation
- Added optional `product.image` metadata support to guide product detail pages. The image is rendered only when the record supplies an image URL, useful alt text, source page, licence statement and attribution.
- Added a clear, accessible “Product photo under verification” fallback when no approved image metadata exists. This intentionally avoids displaying unrelated images as if they depict the named product.
- Added responsive image sizing, intrinsic dimensions, lazy loading and source/attribution caption styling.
- Extended `scripts/validate-catalogue.mjs` to validate HTTPS image and source-page URLs, alt text, licence metadata and attribution for any populated image record. Existing products remain valid with image slots pending.
- Extended `scripts/smoke-test.mjs` to require either the verified product image or the explicit fallback for each product detail section.
- Commits: `21a6769` (guide template), `08c0838` (responsive styling), `90f6c04` (catalogue image metadata validation), `0493e59` (smoke tests).
- This is an implementation milestone, not a completed photo rollout. No actual product image was added because image rights and exact model identity must be confirmed first.
- CI and the corresponding Pages preview are pending for the final commit. Do not describe this batch as fully tested or deployed until those checks pass.
