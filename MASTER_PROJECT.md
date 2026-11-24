# SmartPickHub – Master Project

**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Implementation branch:** `main` (production)  
**Status:** 25 approved guides / 100 product records are published on Cloudflare Pages production. PR #10 fixed the guarded IndexNow descendant-deploy check and is merged; PR #11 reconciled the search/discovery lifecycle. Five populated Pinterest RSS feeds (25 entries total) are connected to their matching boards per owner confirmation; Pinterest-side saved state and any automatic Pin ingestion still require verification.  
**Updated:** 19 November 2026

## Project purpose
Build a trustworthy UK-first English-language affiliate buying-guide property, with a secondary US marketplace track. Prioritise useful original guidance, verified product information, organic discovery and measurable conversions.

## Production environment and scope boundary
- Approved production URL: https://smartpickhub.pages.dev/ (Cloudflare Pages + Astro).
- Preview URL: https://smartpickhub-preview.pages.dev/; preview remains noindex/nofollow and crawl-disallowed.
- GitHub repository `ralabsi95-spec/smartpickhub`, default branch `main`.
- The former InfinityFree domain/hosting and former WordPress site are cancelled and completely outside SmartPickHub. They are not a production target, preview, fallback, migration source, catalogue source, analytics source, or integration. Do not connect, access, edit, migrate, redirect, import from, or spend project effort on them.
- The paid custom domain (.com / .org) remains deferred to phase two, after the MVP produces measurable results.
- Any older references to legacy hosting/CMS below are historical records only and are superseded by this scope boundary.

## Affiliate identifiers
- Amazon US: `smartpickh0bc-20` (source-provided; verify account status before use).
- Amazon UK: `smartpickhubu-21` (source-provided).
- Do not invent ASINs, direct product links, prices, ratings, stock, reviews or testing claims.
- Ten-character identifiers are treated as ASINs by the URL helper; only use them after verification for the relevant marketplace.
- Search phrases generate Amazon search URLs, not direct product links.

## Architecture in this branch
- Astro static site foundation.
- GitHub repository as source control and project record.
- Isolated Cloudflare Pages preview: https://smartpickhub-preview.pages.dev/ (project `smartpickhub-preview`, branch `automation/bootstrap`). This remains separate from the approved MVP production origin.
- Catalogue contains 25 guides and 100 product records. All 25 are owner-approved/published following PR #9 merge. No data is to be imported from any out-of-scope legacy site.
- The release branch marks 25 guides approved/published, so the RSS endpoint will contain those guides after merge. RSS is not connected to Pinterest; no Pins are published by this release.
- JSON-LD includes Article and ItemList/Product identity structure; no unverified prices, offers, ratings or reviews are emitted.

## Automation safety
- Scheduled workflow, when added, must create reviewable drafts only.
- No unattended content publication beyond the owner-authorised 25-guide release and guarded IndexNow notification. No automatic product importing, affiliate-account actions, Pinterest publication or WordPress modifications.
- Gemini output is unverified editorial draft material, not evidence. Human verification is required for product identity, market availability, technical claims, links, policy compliance and editorial quality.
- API keys belong in GitHub Actions secrets, never in source files.
- No paid service or subscription without owner approval.

## SEO and editorial principles
- Do not publish thin or repetitive pages merely to simulate freshness.
- Improve existing useful content and build topic clusters around demonstrated search intent.
- Use canonical URLs, sitemap, descriptive metadata, accessible HTML and useful internal links.
- Indexing requests do not guarantee indexing.
- Track genuine audience traffic separately from owner testing activity.

## Current implementation record
- 16 Nov 2026: GitHub connection verified; repository was empty.
- 16 Nov 2026: Initial Astro package manifest committed to main to establish the empty repository.
- 16 Nov 2026: Created branch `automation/bootstrap` and added the starter implementation there.
- No WordPress content was changed.
- No production site deployment or DNS change was intentionally performed.
- No products or guides have been imported.
- 16 Nov 2026: Added a branded Astro 404 page and public/robots.txt referencing the generated sitemap.
- 16 Nov 2026: GitHub Actions Astro Build Check passed on the earlier PR head commit. CI checks for the latest dual-market/disclosure/preview-safety commits were triggered and were still queued/in progress at the time of this update.
- The scheduled GitHub Actions workflow is present on the development branch but GitHub scheduled runs execute from the default branch; it will not run on schedule until an approved merge to the default branch. Manual workflow dispatch can be used for controlled testing.
- Build/test status must be checked before any pull request merge or production switch.

## 16 November 2026 – Preview and dual-market update
- Created a separate Cloudflare Pages project `smartpickhub-preview` from GitHub branch `automation/bootstrap`; preview URL: https://smartpickhub-preview.pages.dev/.
- Manually inspected Home, Buying Guides, Affiliate Disclosure and RSS in browser. Pages load; guides and RSS contain no approved guide entries yet. RSS initially exposed the old WordPress site URL.
- Confirmed affiliate URL helper already supports separate Amazon US and UK marketplaces and tags. Product guide template already had separate identifiers, so the correct user experience is to offer clearly labelled Amazon US and Amazon UK links per product, not force UK-only targeting or fabricate geolocation.
- Updated Astro `site` to the isolated preview URL so canonical/RSS/sitemap URLs no longer point at WordPress. Added `noindex,nofollow` metadata and disallowed crawling in preview `robots.txt` to avoid indexing a staging deployment.
- Updated homepage messaging to address both US and UK shoppers, affiliate disclosure to include Amazon's required Associate statement, and product link labels to show separate US/UK paid links.
- No product data, ratings, ASINs or guide content added; `products.json` remains deliberately empty pending verification and editorial approval.
- No WordPress changes, no DNS/custom-domain changes, no merge to `main`, and no production deployment.
- CI checks were triggered for the latest commits; their final result remains pending and must be verified before treating the changes as build-confirmed.

## Next steps
1. Verify the latest GitHub Actions build checks complete successfully.
2. Check Cloudflare Pages preview auto-deployment and inspect updated Home, disclosure, RSS and robots behavior.
3. Add only verified product records with separate marketplace identifiers/links, keeping content as drafts until approved.
4. Test responsive/mobile layout and link destinations for both Amazon stores.
5. Decide separately whether Astro complements or replaces WordPress; no migration or production switch without explicit approval and a verified backup.


## 16 November 2026 – Preview verification and disclosure refinement
- Owner visually confirmed the isolated Cloudflare Pages preview after deployment: Home, Buying Guides, Affiliate Disclosure and RSS load; RSS channel link now points to the preview domain. RSS has no guide items because the approved guide collection is intentionally empty.
- Rechecked official Amazon US and UK Associates guidance: both operating agreements require the statement "As an Amazon Associate I earn from qualifying purchases." Amazon UK additionally requires a clear, conspicuous link-level disclosure near affiliate links/reviews (examples include "(paid link)" or "#ad").
- Updated `src/components/ProductCard.astro` to show "Affiliate links (paid links):" immediately above the separate Amazon US and Amazon UK links when present. Existing tagged URL generation and rel="sponsored nofollow noopener" remain intact.
- Official policy references reviewed: Amazon US and UK Associates Operating Agreements and Amazon UK disclosure help page (links in project chat).
- This is a development-branch change only. Await GitHub Actions build result; no merge, WordPress changes, DNS/custom-domain changes, product imports or production deployment.


## 16 November 2026 – Initial US & UK research catalogue and structured data
- Added three research-draft buying guides to `src/data/products.json`, with four named products each (12 total): Home Office Ergonomics; Portable Power & Travel Tech; Smart Home Security.
- Every product has separate `us_identifier` and `uk_identifier` values. These are exact model-name search phrases, not fabricated ASINs; the existing affiliate helper therefore creates separate Amazon US and Amazon UK search links using the configured tracking IDs. No direct ASIN links were invented.
- No fixed prices, star ratings, review counts, stock claims, comparative rankings or hands-on testing claims were added.
- Added product-specific manufacturer/support reference links and concise feature/limitation summaries. Product notes distinguish verified manufacturer specifications from cautious editorial considerations. Exact retailer listing, local model/voltage, package contents, availability and subscription terms still require final marketplace checks before approval.
- Added dynamic JSON-LD to `src/pages/guides/[slug].astro`: an `Article` entity and an `ItemList` containing ordered `ListItem` / `Product` entities, generated from the guide and product data. No price, rating, offer or review schema is emitted.
- Updated homepage and Buying Guides index to show the three research drafts with an explicit editorial-review status.
- Updated RSS generation to include only records whose `editorialStatus` is exactly `Approved for publication`; current drafts are therefore excluded from the feed.
- Preview safety remains active: `Layout.astro` sends `noindex, nofollow`; `public/robots.txt` disallows crawling. Cloudflare Pages remains the isolated preview at https://smartpickhub-preview.pages.dev/.
- The three guides are research drafts for owner/editorial review, not approved public recommendations. In particular, portable power products have region-specific AC voltage/socket variants; buyers must select the correct US or UK model. Amazon search phrases do not guarantee the exact variant or current availability.
- No changes to WordPress, DNS, custom domains or the production website. No merge of PR #1 and no change to `main`.
- Astro Build Check is triggered by the latest commits; record the final result only after the workflow completes.

## Research references used for this batch
- Logitech: MX Vertical, Lift, ERGO K860 and MX Ergo S official product/support pages.
- Anker: 737 A1289 and Prime A1340 official product/support pages.
- EcoFlow: RIVER 2 official UK product specifications and manual.
- Jackery: Explorer 300 Plus official Europe support specifications.
- eufy: SoloCam S340 official product specifications and FAQ.
- Arlo: Essential Outdoor Camera 2K (2nd Generation) UK specifications/support.
- Ring: Battery Doorbell 2K Plus (2nd Generation) official technical specifications.
- Google: Nest Cam (outdoor or indoor, battery) official Google Store specifications.


## 16 November 2026 – Catalogue QA and build safeguards
- Confirmed GitHub Actions Astro Build Check completed successfully for the initial 12-product catalogue and JSON-LD commits (head SHA `8996cef91601bed3833fe8df2c1e6d1c894abffd`; two runs completed with `success`).
- Independently reviewed current manufacturer/support references for Ring, Arlo, Google Nest Cam and EcoFlow RIVER 2. Updated the Ring listing to the current 2026 manufacturer name “Battery Doorbell 2K Plus”; Ring's support notice says the previous “Battery Doorbell Plus (2nd Gen)” name was changed without changing the device.
- Updated JSON-LD ItemList order to `ItemListOrderAscending` to match the visible numbered product sequence.
- Added `scripts/validate-catalogue.mjs` and wired it into `npm run validate` and the `prebuild` lifecycle. It checks the three expected draft guides, four products per guide, 12 total products, mandatory fields, source URLs, distinct non-ASIN model-name search phrases, and rejects price/rating/review/offer fields or premature editorial approval.
- Expanded GitHub Actions CI to run `npm run check`, `npm run validate` and `npm run build` in sequence. The workflow triggered on the newest commits; final status must be confirmed separately.
- Sources checked for current naming/specification context: Ring product-name change notice (August 2026); Ring Battery Doorbell 2K Plus product page; Arlo official product-lineup/spec-sheet pages; Google Nest Cam battery technical specifications; EcoFlow RIVER 2 UK specs and user manual.
- Preview remains `noindex,nofollow` and blocked in `robots.txt`; WordPress, DNS, production domain, and `main` remain untouched. PR #1 remains unmerged.


## 16 November 2026 – Official-source spot check and Arlo refresh
- Re-opened the official manufacturer/support sources referenced by the 12-product research catalogue (Logitech, Anker, EcoFlow, Jackery, eufy, Arlo, Ring and Google) for a current spot-check.
- Updated the Arlo entry from the previous Essential 2K (2nd Generation) naming to the current Arlo Essential 3 2K Outdoor Security Camera, using Arlo UK's current product page and its published 2K/130-degree/12x zoom, integrated battery, Wi-Fi, spotlight, siren and two-way-audio specifications. Updated the regional search phrases and cautions accordingly.
- The 12 catalogue records remain research drafts, not approved product recommendations. Affiliate URLs continue to be marketplace search links based on exact model phrases; no unverified ASINs, prices, ratings, review counts or availability claims were added.
- QA status before this refresh: Astro Build Check succeeded on branch head `b9e16325e88380ce92f4c6eae0b6a8685990160a` (GitHub Actions runs 43872738688 and 43872730077). The Arlo refresh commit triggers a new build/check run; do not mark this latest commit build-confirmed until that run completes.
- PR #1 remains open and unmerged; `main` is unchanged. Cloudflare Pages remains the isolated noindex preview; WordPress, DNS and custom-domain settings remain untouched.

## 16 November 2026 – Current verified branch state (authoritative update)
- Current catalogue state supersedes earlier historical notes saying the data collection was empty: three research-draft guides and 12 product records are present in `src/data/products.json`, four products per guide.
- Both Amazon marketplaces are supported per product through separate US and UK search links and the configured tracking IDs. Current identifiers are model-name search phrases, not direct ASIN links.
- Dynamic JSON-LD emits `Article` and `ItemList` / `ListItem` / `Product` structure. It intentionally omits offers, prices, aggregate ratings, reviews and availability.
- GitHub Actions Astro Build Check passed on branch head `9e3d57a9a260c2210384f4504a0556fcc4ae2322` (run #55; run URL: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43873377035). This confirms the build at that commit only.
- Owner-provided mobile preview screenshot showed the navigation links wrapping around the brand on narrow screens. A mobile CSS refinement has now been committed to keep the brand on its own row and the navigation in a horizontally scrollable single row; this latest CSS commit requires its own CI run and visual confirmation.
- The GitHub repository is private; a signed-out GitHub 404 page does not indicate that the public Cloudflare preview is down. The isolated preview remains https://smartpickhub-preview.pages.dev/.
- The preview remains `noindex,nofollow` and crawl-disallowed. RSS intentionally excludes research drafts until editorial status is explicitly set to `Approved for publication`; therefore an RSS feed containing no guide items is expected at this stage.
- No merge to `main`, no WordPress changes, no DNS/custom-domain changes, and no production deployment.

## 16 November 2026 – Expanded home networking catalogue
- Added a fourth research-draft guide, “Wi-Fi 7 Home Routers & Mesh Systems: Options for US and UK Homes”, with four additional products: TP-Link Deco BE63, ASUS RT-BE96U, eero Pro 7 and NETGEAR Orbi 770 Series RBE773. Catalogue total is now 4 guides and 16 product records.
- Added official manufacturer technical documentation links and model-name search phrases for both Amazon marketplaces. All affiliate links remain separate Amazon US and Amazon UK search links; no direct ASINs, prices, ratings, review counts, stock claims or hands-on testing claims were introduced.
- Added explicit cautions on region-specific hardware, Wi-Fi channel availability, mesh placement, broadband/client capability and subscription-dependent features. In particular, the TP-Link reference is a US BE63 datasheet, so UK hardware/SKU must be checked before any editorial approval.
- Updated `scripts/validate-catalogue.mjs` to expect four research guides and 16 products, preserving the no-price/no-rating/no-review and draft-only safeguards.
- All four guides remain research drafts and RSS-excluded until editorial approval. Preview remains noindex and crawl-disallowed. No WordPress, DNS, custom-domain, production or `main` changes.
- Build validation for these latest catalogue and validator commits is pending; do not call this batch build-confirmed until GitHub Actions completes.

## 16 November 2026 – USB-C charging guide expansion
- Added a fifth research-draft guide, "USB-C GaN Chargers: Multi-Port Laptop and Phone Charging for US & UK", with four product records: Anker Prime A2688, UGREEN Nexode 100W SKU 40749, Belkin WCH015 200W and UGREEN Nexode 200W SKU 35539.
- Catalogue now contains five draft guides and 20 product records. Every product retains separate US and UK marketplace search phrases; no direct ASIN, price, rating, review count or stock claim was introduced.
- Used manufacturer documentation for output limits, port counts, input ranges and power-sharing limitations. Regional cautions are explicit where the detailed documentation reviewed was UK/EU-specific; the US SKU and exact retailer variant still need a separate final check.
- Updated catalogue validation to require five guides and 20 product records. All guides remain editorial drafts, RSS-excluded until approval.
- Preview remains noindex and crawl-disallowed. No merge to main, no WordPress/DNS/custom-domain/production changes.
- Latest GitHub Actions runs for the prior 16-product head completed successfully (runs 43874492597 and 43874483513). The 20-product expansion and validator updates trigger new checks; latest head must complete successfully before build-confirmed status is recorded.

## 16 November 2026 – Scalable keyword research architecture
- Added `src/data/keyword-clusters.json` with 12 buyer-intent topic clusters, 77 core topic phrases, US/UK market definitions and 10 commercial/informational modifiers.
- Added `scripts/build-keyword-universe.mjs` and `npm run keywords`. The generator creates a deduplicated research-only opportunity inventory across market, topic, intent and audience combinations. Current taxonomy yields 13,846 distinct phrase/market opportunities.
- These are candidate phrases only. Search volume, keyword difficulty, CPC and conversion data are intentionally null/not collected; no claim is made that these phrases have traffic or buyer demand.
- Added keyword generation to GitHub Actions build checks. The generated inventory is not a page generator and does not create or publish URLs.
- Strategy: grow towards a large, potentially million-scale opportunity map by adding verified topic seeds and real Search Console/keyword-tool evidence, not by multiplying near-duplicate pages. Group phrases by search intent and create one genuinely useful guide where multiple close variants share the same intent.
- New content and products remain research drafts until human editorial approval. Product additions require exact model/variant verification, primary-source documentation, separate US/UK search phrases, and no fabricated ASINs, prices, ratings or availability.
- Google policy guardrail: do not mass-publish unoriginal pages or create pages solely for keyword permutations. Google classifies large-scale low-value content as scaled content abuse; AI assistance is acceptable only when the result is genuinely useful and editorially controlled. Reference: https://developers.google.com/search/docs/essentials/spam-policies and https://developers.google.com/search/docs/fundamentals/using-gen-ai-content.
- Preview remains noindex and crawl-disallowed. No WordPress, DNS, custom-domain, production or `main` changes. PR #1 remains open and unmerged.

## 16 November 2026 – Webcam buying guide expansion
- Added a sixth research-draft buying guide, `webcams-video-calls-streaming-us-uk`, with four products: Insta360 Link 2, Logitech Brio 4K, Razer Kiyo Pro Ultra and Elgato Facecam Neo.
- Catalogue now contains 6 guides and 24 products. All new product identifiers are exact model-name search phrases for Amazon US and Amazon UK; none are represented as verified ASINs or direct product links.
- New product descriptions are grounded in official manufacturer specifications. Pros/cons describe documented features and practical purchase considerations; they are not hands-on test claims, rankings, reviews or endorsements.
- Expanded the Home Office keyword cluster with webcam, AI-tracking, speakerphone and capture-card phrases plus audience/decision modifiers.
- Updated catalogue validation to require six guides and 24 products, retain four products per guide, reject unverified ASIN-shaped identifiers and prevent price/rating/review fields.
- JSON-LD Article and ItemList continue to be generated dynamically from guide/product data. This structured data describes the comparison content; it does not imply Google rich-result eligibility or guaranteed AI/search visibility.
- Preview remains noindex; no WordPress, DNS, custom-domain, production or `main` changes. PR #1 remains open and unmerged.
- Next: verify latest Astro Build Check, review each guide in mobile/desktop preview, then add further product categories only with manufacturer-backed source notes and market-specific model/variant checks.

## 16 November 2026 – 4K USB-C monitor guide expansion
- Added seventh research-draft guide `4k-usb-c-monitors-home-office-us-uk`, with four models: Dell U2723QE, ASUS ProArt PA279CRV, BenQ PD2705U and Dell P2723QE.
- Catalogue now contains 7 guides and 28 product records. Product summaries are based on official manufacturer pages/datasheets and cover resolution, USB-C power delivery, colour coverage, KVM/hub features and ergonomic adjustments.
- US and UK affiliate destinations remain separate marketplace search links using exact model-name phrases, not direct ASIN links. Regional SKU/cable/power-delivery checks are explicitly called out where needed.
- Updated the catalogue validator to require seven guides and 28 products; expanded the computer-accessories keyword cluster with USB-C monitor, creator display and docking-intent phrases.
- All content remains research draft, not approved hands-on reviews or ranked recommendations. No price, rating, review-count, stock or performance-test claims were added.
- Astro preview remains noindex. No production publication, WordPress/DNS changes, PR merge or changes to `main`.

## 16 November 2026 – Monitor category and guide UX improvements
- Added guide seven (4K USB-C monitors) with four manufacturer-documented models. Total catalogue: 7 research guides / 28 product records.
- Improved every guide page with a quick-comparison table linking each model to its detailed section, showing best-for context and a key decision point from the recorded specifications.
- Added horizontally scrollable, accessible table styling for narrow screens; preserved the existing mobile header and product-card layout.
- Updated product data, keyword clusters, validator and this master log. No price/rating/review claims, no unverified ASINs and no hands-on testing claims.
- Build validation is pending for the latest UI changes. Prior run 88 on the 24-product head passed; new 28-product and table changes must pass their own CI run.
- Branch remains `automation/bootstrap`; PR #1 is not merged. Preview remains noindex. WordPress, DNS and production were not changed.

## 16 November 2026 – Laptop docking station guide expansion
- Added eighth research guide `thunderbolt-usb-c-docking-stations-us-uk` with CalDigit TS4, Anker Prime TB5 Docking Station, Kensington SD5780T and Plugable TBT4-UDZ.
- Catalogue now contains 8 guides and 32 product records. New descriptions reference official manufacturer product/support specifications and explicitly explain host compatibility, display-output limits, Power Delivery and port selection.
- Expanded computer-accessories keyword taxonomy for Thunderbolt 4/5, USB-C docks, dual-monitor docking and 2.5Gb Ethernet intent.
- Updated catalogue validation to require eight guides and 32 products. Model-name search phrases are used independently for Amazon US and UK; no unverified ASIN or direct product URLs were fabricated.
- Content remains editorial research draft. No current price, rating, availability or hands-on test claims were added. Human review is required before publication.
- Latest known CI runs 100 and 101 passed for the preceding 28-product head. A fresh build check is required for this 32-product commit.
- No WordPress, DNS, production or `main` changes; PR #1 remains unmerged; preview noindex policy remains in force.

## 16 November 2026 – CI verification and portable SSD expansion
- Verified GitHub Actions run #108 completed successfully on the then-current development head `2cb8b097cb3d34313b4b09e37b8747a14d41d6e9`; run #107 also succeeded. This confirms the previous 32-product catalogue head passed CI, not the later SSD changes.
- Added ninth research guide `portable-ssd-external-storage-us-uk` with Samsung T9, SanDisk Extreme PRO USB 3.2 Gen 2x2, Crucial X10 Pro and Kingston XS2000.
- Catalogue now contains 9 guides and 36 product records. Each SSD product record is based on its official manufacturer datasheet/product documentation.
- Added editorial cautions explaining USB 3.2 Gen 2x2 host requirements, speed claims versus real-world performance, IP protection limits and backup strategy.
- Expanded the computer-accessories keyword cluster for portable SSDs, USB4, rugged external storage, creator workflows and capacity intent.
- Updated validator to expect nine guides and 36 products. All entries remain research drafts; Amazon identifiers are exact model search phrases, not ASINs or verified direct product links.
- New CI runs have been triggered for the latest SSD and keyword changes; their final status is pending verification.
- No WordPress, DNS, production or `main` changes. PR #1 remains unmerged; preview noindex policy remains in force.

## 16 November 2026 – Free automated QA laboratory
- Added `scripts/smoke-test.mjs` and `npm run smoke` to test generated static HTML after Astro build.
- Smoke tests inspect generated page count, HTML language, title, description warnings, mandatory preview `noindex`, absolute HTTPS canonical URLs, local internal-link targets and JSON-LD syntax.
- Expanded GitHub Actions workflow to run build and smoke tests, start a local static preview, then execute Google Lighthouse audits for the homepage on desktop and mobile plus all guide/index pages.
- Lighthouse categories collected: performance, accessibility, best practices and SEO. JSON reports are uploaded as a GitHub Actions artifact for 14 days; no external paid audit service is required.
- This pipeline tests the generated Astro preview build, not the existing live WordPress website. No production URLs, DNS, WordPress or main branch are changed.
- Gemini can be used as an optional reviewer of the Lighthouse JSON and smoke-test output. No Gemini API key, paid integration or automated code-writing permission has been added. Any future Gemini API use must rely on user-approved credentials stored as GitHub Secrets, with generated fixes requiring CI and human review.
- Lighthouse audits provide lab measurements; they do not replace real-user Core Web Vitals, Search Console indexing data, manual usability testing or human accessibility review.
- Current automated workflow has been updated; final success/failure on the newest commit remains to be verified.


## 16 November 2026 – Lighthouse baseline review and accessibility refinements
- Downloaded and inspected the successful Lighthouse artifact from workflow run #133 (artifact `smartpickhub-quality-reports`, 12 JSON reports; 5.2 MiB ZIP). Confirmed scores across homepage desktop/mobile and all guide/index pages: Performance 100 throughout; Best Practices 96 throughout; SEO 66 throughout; homepage Accessibility 100; guide/index Accessibility 95.
- Lighthouse SEO 66 is expected for the isolated preview: `noindex,nofollow` and robots disallow are intentional preview safety controls. Do not remove them to improve a Lighthouse score; the preview must remain non-indexable.
- Diagnosed the repeat Best Practices console error as a missing `/favicon.ico` request (404). Added a lightweight SVG favicon at `public/favicon.svg` and declared it in the shared layout.
- Diagnosed the guide accessibility issue as manufacturer/source links inside muted text not being visually distinguishable except by colour. Added persistent underlining and offset to `.muted a` in global CSS.
- Changes committed only to `automation/bootstrap`: CSS commit `28699a0dd9106db705771990af058ba205364ae6`; layout commit `e23027b359c1c9a508cf4edb01cb851f8fc635b4`; favicon commit `644471118292e19672232793a45fcf031401ec73`. A new CI run is required before these fixes can be marked verified.
- No changes to WordPress, production, DNS, custom domains, or `main`; PR #1 remains unmerged. Preview noindex protections remain in place.
- Next: inspect the new CI run and its Lighthouse artifact. Confirm the favicon 404 and guide link-in-text-block issue are gone; then add axe-core automated accessibility checks if the current workflow remains stable.


## 16 November 2026 – axe-core integration (implementation pending CI verification)
- Latest completed smoke-test evidence: workflow #140 on commit `8644153d056bd2f1fa2fe053bedcdaa25bdf4000` passed the smoke test, preview server startup, and homepage Lighthouse audits. Its guide-page Lighthouse step was still running at the last check; do not mark the full run complete until its conclusion and report upload are verified.
- Added Playwright and `@axe-core/playwright` as development dependencies and an `npm run accessibility` script at `scripts/accessibility-test.mjs`.
- The axe-core script audits the homepage, guide index, affiliate disclosure, and all nine guide pages against WCAG 2.0/2.1/2.2 A/AA tags. It writes per-page JSON reports under `test-reports/axe/` and fails CI on serious or critical violations; lesser findings are reported for review.
- Updated CI to Node.js 22, install Chromium, run axe-core after the local preview server starts, and include axe reports in the existing quality artifact. The accessibility script and CI integration are committed on `automation/bootstrap`; latest relevant commit at this note is `bb1bd44e0362d4715dff5692134296086c2197ed`.
- CI executions #142–#149 were triggered by the incremental commits and may overlap; use the run matching the final branch HEAD, not older intermediate runs, to verify the integrated result.
- npm audit output from an earlier Node 20 install reported 5 dependency vulnerabilities (1 low, 3 high, 1 critical), and engine warnings for packages requiring Node 22. This is not yet remediated or triaged. Node 22 was selected in CI for compatibility; inspect current dependency tree and audit output before changing package versions. Do not run `npm audit fix --force`.
- No WordPress/live production, DNS, custom domain, or `main` changes. Preview remains noindex/nofollow. PR #1 remains unmerged.
- Next: wait for CI on final branch HEAD; inspect axe JSON and Lighthouse outputs; remediate confirmed issues in development branch only; then assess dependency vulnerabilities and CI duplication/runtime before any release decision.

## 16 November 2026 – axe-core Playwright context fix
- Inspected failed GitHub Actions run #150 on head `9d1d1d1f6e181d376c34a9f74b8a8da5c91c76e6`. Astro check, catalogue validation (9 guides / 36 products), keyword generation, static build and smoke test all passed. The axe step failed before scanning because the script used `browser.newPage()`; `@axe-core/playwright` requires a page created from `browser.newContext()`.
- Updated `scripts/accessibility-test.mjs` to create an explicit browser context, create the page from that context, and close both context and browser in cleanup.
- Fix committed to `automation/bootstrap` as `801c7ec39209ab98b5f324cf0b0adfeecfab14cf`. CI runs #152 (push) and #153 (pull request) are running against this exact SHA; axe results and Lighthouse reports are not yet verified.
- The same CI install reported 5 npm audit findings (1 low, 3 high, 1 critical). No automatic or force remediation was run; dependency tree and advisory details remain to be triaged.
- No WordPress, production, DNS, custom domain or `main` changes. PR #1 remains unmerged; Cloudflare preview remains noindex/nofollow.
- Next: inspect run #152/#153 and their axe JSON reports; triage npm audit advisories; then continue design, mobile UX, editorial quality and conversion improvements on the development branch only.

## 16 November 2026 – Automated QA passed and homepage redesign in progress
- Verified GitHub Actions runs #154 (push) and #155 (pull request) succeeded on commit  cca6e42b6fcaaaa2effc54e30fb7dceb57bb6675. All workflow steps passed: Astro check, catalogue validation, keyword generation, build, smoke tests, Chromium install, axe-core audit, Lighthouse mobile homepage, Lighthouse guide pages and artifact upload.
- Downloaded and inspected the quality artifact from run #155. axe-core reports for all 12 audited pages show zero violations and zero incomplete checks. Lighthouse across all 12 reports: Performance 100, Accessibility 100, Best Practices 100, SEO 66. SEO 66 is expected because the preview is deliberately noindex/nofollow and robots-disallowed; do not weaken this safeguard.
- CI catalogue validation confirms 9 research guides and 36 product records. Keyword generator output is 32,326 deduplicated US/UK keyword opportunities; this is a research backlog, not verified search volume and not published pages.
- Inspected npm install log: 5 audit findings remain (1 low, 3 high, 1 critical); npm recommends force remediation, which was not run. Exact advisories and dependency paths still need a dedicated safe audit review. tsconfck@3.1.6 also reports a deprecated package warning.
- Began a homepage UX redesign in src/pages/index.astro and src/styles/global.css: clearer hero and calls to action, guide discovery cards, transparent editorial approach, regional marketplace messaging, affiliate disclosure section and responsive layouts. Live WordPress is not touched.
- Homepage redesign commits: 17c87777fb76707e9b01c71f739992864514edbc and 0191b6cb6e1c657b54aedb004139a39428a26336. New CI runs #157/#158 were in progress at the time of this entry; do not mark redesign verified until the latest matching SHA completes and reports are reviewed.
- Development branch only; PR #1 remains unmerged, main unchanged, preview remains noindex/nofollow, and no production/WordPress/DNS changes.
- Next: verify runs #157/#158 (or the latest matching branch SHA); visually inspect homepage at desktop/mobile widths; then safely identify the five npm audit advisories and their dependency paths before considering targeted upgrades.

## 16 November 2026 – Homepage accessibility correction and dependency audit reporting
- Homepage redesign introduced nine guide-card links with an accessible label that did not match their visible text. axe-core run #157 correctly failed on `label-content-name-mismatch` for the nine links; all other 11 audited routes had zero violations.
- Corrected the nine links in src/pages/index.astro so the visible link text includes the guide title and no conflicting aria-label is applied. Commit: 327f88ccd84bf60bd5400856da35d29d2496ee60.
- Added a non-blocking npm audit JSON capture step to .github/workflows/build-check.yml, storing exact advisory and dependency-path information in test-reports/npm-audit.json and the existing artifact. This is diagnostic only; it does not auto-fix packages or weaken build checks. Commit: 268fb015ace339ad8d297cd33fa9e12fa3186050.
- Latest validation for these changes is pending in CI runs #161/#162 and newer runs triggered by this workflow update. Do not mark the homepage redesign as fully verified until axe and Lighthouse pass on the matching latest SHA.
- The previous confirmed baseline remains: runs #154/#155 passed; axe zero violations across 12 pages; Lighthouse 100 Performance / 100 Accessibility / 100 Best Practices / 66 SEO (SEO reduction is expected for noindex preview).
- No production, WordPress, DNS, custom domain or main-branch changes. PR #1 remains unmerged; preview remains non-indexable.
- Next: inspect the latest matching CI artifact for homepage axe results, mobile/desktop Lighthouse, and npm audit JSON; remediate only confirmed issues with safe targeted dependency changes.


## 16 November 2026 – Air fryer category expansion (research draft)
- Added the tenth buying guide, `air-fryers-us-uk`, with four product-family records: Ninja Foodi MAX Dual Zone (UK AF400UK / US DZ550), Philips 5000 Series Dual-Basket with Steam (UK NA555/09 / US NA555/00), Instant Vortex Plus Dual-Basket with ClearCook (UK DAF8132BK / US 140-3090-01), and COSORI TurboBlaze (UK 6L / US 6-Quart CAF-DC601-KUS).
- Catalogue now contains 10 research-draft guides and 40 product records. Each product has separate US and UK Amazon search phrases; these are not direct ASIN links and do not guarantee an exact marketplace listing.
- Manufacturer references were used for capacity, voltage, wattage, basket configuration and cooking functions. Regional variants are called out explicitly: 120V US models must not be substituted for 220–240V UK models. Buyers must confirm exact local SKU, plug, dimensions and accessories.
- Expanded the Kitchen Appliances keyword cluster with air-fryer, dual-zone, steam, capacity, comparison and regional compatibility terms. These remain unvalidated keyword opportunities; no search volume or CPC is claimed and no pages are generated from phrases.
- Updated `scripts/validate-catalogue.mjs` to require 10 draft guides and 40 products while retaining the no-price/no-rating/no-review and no-premature-approval safeguards.
- This update is committed only to `automation/bootstrap`. New GitHub Actions checks must complete against the latest branch head before this batch is marked build-confirmed. The content remains a research draft and is not approved for publication.
- No WordPress, production, DNS, custom-domain or `main` changes. PR #1 remains draft and unmerged; Cloudflare preview remains isolated, noindex and crawl-disallowed.

## Next work
1. Verify CI for the 40-product catalogue and inspect the new report artifact, including axe-core, Lighthouse and npm audit details.
2. Continue adding product categories only where regional model variants and manufacturer documentation can be verified.
3. Review desktop and mobile preview visually; do not remove preview indexing protections.
4. Keep all new guides as drafts until exact marketplace listings, product variants, links and editorial content receive human approval.


## 16 November 2026 – Quality artifact #166 security review
- Downloaded and inspected the `smartpickhub-quality-reports` artifact from run #166 (commit `866f83a8f71d51791ba6dd98b84270296a723538`).
- axe-core: zero violations on all 12 audited routes. Homepage has two incomplete checks requiring human review; the other 11 route reports have zero incomplete checks.
- Lighthouse: all 12 reports show Performance 100, Accessibility 100 and Best Practices 100; SEO 66 remains expected because preview indexing is intentionally blocked.
- npm audit: 5 findings (1 low, 3 high, 1 critical) across direct Astro and transitive esbuild, sharp, zod and zod-to-ts. The critical Astro advisory is GHSA-26w7-cxv4-gfx2 (remote code execution through AVIF image optimization; affected Astro versions below 7.2.8). The report indicates npm's proposed fix is Astro 7.4.12, a major-version jump from the current Astro 5 dependency range.
- No `npm audit fix`, `--force`, dependency update or lockfile change was made. Treat this as a material dependency risk requiring a deliberate Astro 7 migration assessment and compatibility testing; do not apply a blind major upgrade.
- The audit report is from run #166's installed dependency tree, not yet a refreshed audit after the latest catalogue additions. Re-run the audit against the current branch before release.


## 16 November 2026 – Agent handoff and documentation reconciliation
- Created `AGENT_HANDOFF.md` as the mandatory first-read operating guide for any future ChatGPT conversation, coding agent or contributor. It documents branch/environment safety, live WordPress preservation, catalogue state, affiliate-link rules, SEO/keyword caveats, CI/security risks, known documentation drift, ordered next actions and definition-of-done requirements.
- Rewrote `README.md` to point to the handoff and master log, and to replace stale statements that the product catalogue is empty.
- Current repository files confirm 10 research-draft guides and 40 product records; `scripts/validate-catalogue.mjs` enforces these counts.
- Run #169 completed successfully for catalogue/code commit `5b29cb6df7186f7f62629ad58cb9f9f4ca4eb9ef`. The later documentation commits are not themselves represented by that run; verify the newest branch HEAD and matching Actions run before release.
- Identified a QA coverage gap: `scripts/accessibility-test.mjs` and the Lighthouse guide-route list still enumerate only nine guide routes and omit the new air-fryer route. This is explicitly assigned as the next engineering task in `AGENT_HANDOFF.md`.
- Identified a workflow runtime mismatch: `auto-publish.yml` uses Node 20 while `build-check.yml` uses Node 22. The scheduled workflow will not run from this feature branch until an approved default-branch change; do not merge solely to activate scheduling.
- Security audit from Run #166 remains unresolved (5 findings, including critical Astro advisory GHSA-26w7-cxv4-gfx2). A fresh audit and compatibility-reviewed remediation plan are required; no force fix was run.
- No WordPress/live site, `main`, PR merge, DNS, custom domain, production deployment, or editorial publication was changed or authorized.
- Documentation commits: handoff `45c0d7d7c5a65cfaa9fa501f1c8fdce9d6569cf4`; README update recorded in Git history immediately before this entry.
- **Next action:** make axe-core and Lighthouse route coverage derive dynamically from all guide slugs in `src/data/products.json`, then run CI and inspect the resulting artifact. Follow with fresh dependency audit and safe Astro upgrade assessment.


## 16 November 2026 – Dynamic quality coverage for the complete catalogue
- Replaced the hard-coded axe-core route array in `scripts/accessibility-test.mjs` with routes derived directly from `src/data/products.json`. It now audits the homepage, guide index, affiliate disclosure and every current guide, and records route count plus incomplete-check counts in its summary.
- Replaced the fixed Lighthouse guide loop in `.github/workflows/build-check.yml` with a catalogue-driven loop. Lighthouse now audits the guide index, affiliate disclosure and all guide detail pages; the homepage continues to receive desktop and mobile audits.
- This removes the known nine-of-ten guide coverage gap and makes future guide additions automatically enter both QA suites without manually editing route lists.
- Implementation commits: accessibility `e1cd5faf1ded573fe5fb9bc498bad243fcc532d7`; Lighthouse workflow `6a2f61e2faca5927093afcfbfe0d8b92be1e8d4f`. Both are on `automation/bootstrap`; GitHub Actions verification is pending.
- The workflow still captures a fresh `npm audit --json` report as a CI artifact. No package versions or lockfiles were changed; no audit fix was run.
- Latest known PR state before these commits: PR #1 open, Draft and unmerged. Live WordPress, DNS, production, editorial publication and preview indexing safeguards remain unchanged.
- **Next:** verify the Actions run for the newest branch head, inspect the axe/Lighthouse/audit artifacts, and then triage current npm advisories by exact dependency path and fixed version. No blind major upgrade or `npm audit fix --force`.


## 16 November 2026 – Gemini audit integration and unified QA hardening
- Reviewed Gemini reference commit `ef55e1056d2ef8231691e1ec45ac25d674d3b7f4`. It did not introduce a second independent test workflow: the same `.github/workflows/build-check.yml` was used. The separate `auto-publish.yml` is a draft-research writer, not a QA workflow, and remains isolated.
- Actions runs #129 and #130 for `ef55e105` both failed at the old smoke-test step. The exact failures were false negatives in the noindex/canonical tag checks: generated HTML contained the expected tags, but the older test did not parse the rendered attributes correctly. The failure prevented Lighthouse from running and no report artifact was produced. These failures are now historical and were superseded by later passing runs.
- Actions runs #174 and #175 both completed successfully, but they tested documentation commits, not the Gemini reference commit itself.
- The current dynamic axe-core/Lighthouse coverage was confirmed by Run #179 (commit `6a2f61e2faca5927093afcfbfe0d8b92be1e8d4f`): axe-core audited 13 routes (home, guide index, disclosure and all 10 guides), with zero violations. The homepage had two incomplete axe checks requiring human review. Lighthouse produced 14 reports (home desktop/mobile plus 12 core/guide routes); all reported Performance 100, Accessibility 100, Best Practices 100 and SEO 66. The SEO score is expected while preview indexing is blocked.
- Run #179 uploaded `smartpickhub-quality-reports` (artifact ID `14239067711`). Its fresh npm audit reported 5 findings: 1 low, 3 high and 1 critical. Astro is the direct critical package, with related dependency paths through esbuild, sharp, zod and zod-to-ts. A major Astro upgrade was suggested by npm, but no dependency change has been applied.
- Unified QA improvements prepared in the current development batch: dynamic guide validation; generated Amazon US/UK URL and tracking-tag checks; rendered HTML checks for robots/noindex, canonicals, internal links, mandatory Article/ItemList JSON-LD and paid-link rel attributes; structured per-test JSON outputs; and a consolidated `test-reports/latest-audit.json`.
- Node runtime is aligned to Node 22 in both workflows. Node 20 was not selected because the existing quality workflow has already been tested on Node 22 and Node 20 is no longer an appropriate maintained runtime baseline for this project.
- QA workflow concurrency now cancels obsolete duplicate runs on the same ref. The report is uploaded as the `smartpickhub-quality-reports` artifact for 14 days.
- No WordPress changes, public publication, DNS changes, production cutover, PR merge, dependency upgrades or manual dispatch of the draft-research workflow were performed.
- Next: wait for the unified QA run, download and inspect `latest-audit.json`, then triage the exact current npm advisories and design a separate, reversible Astro upgrade test.


## 16 November 2026 – Unified QA implementation checkpoint
- Final code checkpoint for this batch: `5a2234a6536eb33ad753f514b4f8129f879ee636` on `automation/bootstrap`.
- Files changed across this QA batch: `.github/workflows/build-check.yml`, `.github/workflows/auto-publish.yml`, `package.json`, `scripts/validate-catalogue.mjs`, `scripts/smoke-test.mjs`, `scripts/accessibility-test.mjs`, new `scripts/build-audit-report.mjs`, and this handoff/master documentation.
- QA now validates current catalogue slugs dynamically (no fixed list of 10), checks every product has generated US and UK Amazon destinations with the expected tracking IDs, and verifies the rendered guide pages contain the matching marketplace links, sponsored/nofollow attributes, Article/ItemList JSON-LD, preview noindex, robots.txt crawl blocking, HTTPS canonicals and working internal links.
- Individual JSON results are written under `test-reports/`; consolidated `test-reports/latest-audit.json` is assembled even when an earlier QA step fails and uploaded in the 14-day `smartpickhub-quality-reports` artifact.
- Both workflows now use Node 22. Node 20 was not adopted because the already-established quality baseline runs on Node 22; this avoids downgrading the tested runtime.
- Intermediate CI Run #184 failed during Astro check because the first draft of the enhanced smoke script contained over-escaped regular expressions. The script was corrected in commit `f76412d1d7bdf9727b78426d0ca62eb51c65c225`; the later run must confirm it.
- Runs #185 and #188 have not produced a completed result; #189 for the final workflow-concurrency checkpoint is queued. Do not interpret these as passed. The latest completed comprehensive baseline remains Run #179, SHA `6a2f61e2faca5927093afcfbfe0d8b92be1e8d4f`, with 13 axe routes (zero violations, two incomplete homepage checks) and 14 Lighthouse reports (100/100/100/66).
- Run #179's npm audit reported 5 package findings: 1 low, 3 high, 1 critical. Astro is the direct critical package; affected transitive packages include sharp, zod, zod-to-ts and esbuild. No dependency upgrade or forced fix was performed.
- Gemini reference commit `ef55e105` was the same QA workflow, not a second test system. Its Runs #129 and #130 both failed at the old smoke test due false-negative noindex/canonical parsing; Runs #174/#175 were later documentation runs and passed.
- WordPress, production, DNS, publication state and PR merge status remain unchanged. All 10 guides / 40 products remain research drafts.
- Next action: wait for a final completed CI run on the latest code, inspect `latest-audit.json`, then plan isolated dependency remediation.


## 16 November 2026 – Unified QA completed successfully (Run #193)
- Final QA implementation commit tested: `6f27c02809827ce05bb2f04f7abc73da2e1d5daf`; [GitHub Actions Run #193](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43898538709) completed **success**.
- Gemini audit integration: the reference `ef55e105` used the same `build-check.yml` workflow, so no duplicate QA workflow was imported. Its earlier Runs #129/#130 failed in the legacy smoke test due false-negative parsing of rendered noindex/canonical tags. Runs #174/#175 were later documentation-change runs, not the Gemini test.
- The current QA cycle now covers 10 dynamic guide routes and 40 products. Catalogue validation passed with 40 Amazon US and 40 Amazon UK destination checks using the correct tags.
- Rendered-page smoke test passed on 14 HTML files (home, guide index, affiliate disclosure, 10 guide pages and 404). All 10 guides have one JSON-LD block with Article/ItemList/Product structure and exactly four US plus four UK product links. The checks also passed noindex, robots.txt crawl disallow, HTTPS canonicals, internal links, and sponsored/nofollow attributes; zero smoke warnings.
- axe-core passed 13 routes with **zero violations**. Two homepage checks remain incomplete and need manual review; they are not violations.
- Lighthouse completed 14 reports: every page scored 100 Accessibility, 100 Best Practices and 66 SEO (66 is expected because preview is intentionally noindex). Performance scored 100 on 13 reports; homepage desktop scored 79 due 500 ms TBT and long tasks marked Unattributable by Lighthouse, while the page's own JS evaluation was under 1 ms. Mobile homepage and all other routes scored 100 Performance. Treat the one desktop outlier as a CI-runner measurement to recheck before changing page code.
- The smoke test caught a real affiliate URL construction defect: the search phrase URL appended a second `?` before the tracking tag, leaving the tag inside the search query. Fixed `src/config/affiliate.ts` using URLSearchParams; the rendered HTML tests now confirm the correct `tag` parameter and exact catalogue identifier for every product/marketplace.
- Lighthouse route generation also had an escaped-newline defect, corrected by printing each route on its own line. The final 14-page Lighthouse run completed successfully.
- Consolidated report: `test-reports/latest-audit.json` in artifact `smartpickhub-quality-reports`, artifact ID `14240212318`, retained until 30 November 2026. Raw per-page Lighthouse, axe, smoke, catalogue and npm audit JSON files are included.
- Fresh npm audit: 5 package findings (1 low, 3 high, 1 critical): Astro direct/critical, sharp high, zod high, zod-to-ts high via zod, esbuild low. No dependency upgrades or force fixes were applied.
- Both workflow files use Node 22. Node 20 was deliberately not selected because it reached EOL on 30 April 2026; Node 22 remains Maintenance LTS through 30 April 2027.
- No WordPress changes, product imports, content publication, DNS changes, production cutover, custom-domain changes or PR merge were performed. All catalogue content remains draft-only and preview noindex protections remain enabled.
- Next: triage exact npm advisories and dependency paths; test an Astro 7.4.12-compatible upgrade in an isolated branch with a lockfile and full QA; manually review two incomplete axe checks and repeat the one homepage desktop Lighthouse outlier.


## 16 November 2026 – CI trigger de-duplication
- Adjusted the single QA workflow concurrency key to use `github.head_ref || github.ref_name`, so a push and its associated pull-request event for the same branch share one concurrency group. This prevents duplicate full Lighthouse/axe runs for the same commit while preserving both push and PR validation triggers.
- No test logic, dependencies or site content changed. Latest full QA evidence remains Run #193 on code commit `6f27c02809827ce05bb2f04f7abc73da2e1d5daf`; this is a workflow scheduling-only adjustment.


## 16 November 2026 – Isolated Astro 7 security upgrade assessment
- Verified `automation/bootstrap` head at `7bb3537249d700d06d5b4296af20c0939297428b`; PR #1 remains open and unmerged. Cloudflare Pages reported a successful preview deployment for `7bb3537`.
- Created `security/astro7-upgrade-assessment` from the development branch to test security remediation without altering the current baseline.
- Test dependency set: Astro `^7.4.12`, `@astrojs/rss ^4.0.19`, `@astrojs/sitemap ^3.7.5`, `@astrojs/check ^0.9.12`, TypeScript `^5.9.3`; Node `22.23.4` is pinned in `.nvmrc` and both workflow files.
- QA workflow runs on the isolated branch and stores its generated `package-lock.json` in the quality artifact so the exact dependency tree can be inspected before committing a lockfile.
- This is a major upgrade assessment: Astro v6 introduced Vite 7 and Zod 4 changes; Astro 7 moves to Vite 8 and has a minimum Node requirement of 22.23.4. The previous npm audit showed 5 findings (1 low, 3 high, 1 critical). No blind fix or forced update was used.
- **Pending:** isolated CI, lockfile review, fresh npm audit, and full build/smoke/axe/Lighthouse verification. No package change has been merged into `automation/bootstrap`; PR #1 remains Draft/open/unmerged. No live WordPress, DNS, publishing or production changes.
- **Next:** inspect the isolated CI run and its artifact. Only after passing tests should the generated lockfile be committed to the isolated branch and CI switched to reproducible `npm ci`.


## 16 November 2026 – Security assessment QA refinements
- Added detailed axe-core incomplete-check output in `scripts/accessibility-test.mjs` on the isolated security branch. Reports now preserve rule IDs, descriptions, help URLs, target selectors and individual check messages, enabling manual review of the two previously incomplete homepage checks without misclassifying them as violations.
- Code checkpoint: `20183ea2fba10de16994e35db79dad8cbd6d117a`; full isolated Astro 7 QA is pending. The workflow captures the generated lockfile as an artifact for reproducibility review.
- No changes were made to `automation/bootstrap`, PR #1, the live WordPress site, DNS or production. PR #1 remains unmerged; its latest verified base checkpoint is `7bb3537249d700d06d5b4296af20c0939297428b`.


## 16 November 2026 – Draft security assessment PR
- Opened Draft PR #2: https://github.com/ralabsi95-spec/smartpickhub/pull/2, from `security/astro7-upgrade-assessment` to `automation/bootstrap`. It remains open, Draft and unmerged; PR #1 also remains open and unmerged.
- The assessment workflow captures its generated lockfile, then performs a clean `npm ci` install before audit/build/test steps. This checks lockfile reproducibility while keeping the lockfile out of the branch until reviewed.
- Latest isolated code commit: `f40454e758ce69ee0b7286e04c3aca7e29649542`. CI status is not yet confirmed; no success is claimed.


## 16 November 2026 – Run #212 in progress (Astro 7 assessment)
- Actions run #212: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/43901624336 on isolated assessment commit `4a8bdd737caf3a9a0eeae83f19d65941ae0e1d62`, triggered by Draft PR #2.
- Successful to date: npm install, lockfile capture, clean `npm ci`, npm audit report capture, Astro checks, 10-guide/40-product catalogue and affiliate validation, keyword universe generation, static build, smoke/SEO/JSON-LD checks, Chromium installation, axe-core on all catalogue routes, and homepage desktop/mobile Lighthouse.
- Lighthouse for guide index, affiliate disclosure and all guide detail routes remains in progress; consolidated audit and artifact upload have not yet completed. Do not mark the migration fully validated until Actions completes and the reports are reviewed.
- No lockfile has been committed and no dependency update has been merged into the development branch. PR #2 remains Draft; PR #1 remains open/unmerged. No live website, DNS, publication or production change.


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
- Cloudflare Pages preview for the 100-product branch was deployed successfully; it is noindex/nofollow and `robots.txt` disallows all. No legacy-host deployment, production DNS change, public content publication or Amazon product import.
- **Next:** create a draft PR to `automation/bootstrap` and run the full QA again on the combined Astro 7 + 100-product tree. Review all 25 guides before editorial approval or any public publication.


## Session close — 2026-11-16 (Astro 7 + 100-product milestone)
- **Astro 7 upgrade completed on development:** PR #2 merged into `automation/bootstrap` as `5baea62d5b4a8fbd43d7360bf703d8d6a07dfb9a`. Astro 7.4.12, Node 22.23.4, committed lockfileVersion 3 with 363 package records; CI now uses `npm ci`. Final lockfile-backed run #43916130906 passed with zero npm audit vulnerabilities, 14 smoke-tested pages, zero confirmed axe violations, and Lighthouse 100 Performance / Accessibility / Best Practices on all 14 audited routes. SEO 66 is expected while preview noindex is enabled.
- **100-product milestone completed on development:** PR #3 merged as `bacd8bf08add008654461d3c4f582ad3d3fad256`. Current catalogue is 25 guides / 100 unique product records (56 new products across 14 new guides). All new guides remain `Research draft — requires human review before publication`.
- **Combined Astro 7 + 100-product QA passed before merge:** run #43918004027. `npm ci`, audit, Astro checks, catalogue validation, build, smoke, axe-core and Lighthouse all passed. `npm audit`: zero vulnerabilities / 362 dependency records. Catalogue validator: 25 guides, 100 products, 100 US and 100 UK Amazon URL constructions, zero validation errors. Smoke: 29 HTML pages, zero errors. axe: 28 routes, zero confirmed violations, one incomplete homepage contrast check. Lighthouse: 29 reports, all 100 Performance / Accessibility / Best Practices; SEO 66 due noindex. Preview safety verified.
- **Post-merge verification:** run #43919470924 was triggered by the development-branch update and was still running at the time of this note; earlier combined PR QA #43918004027 already passed on the exact merged commit.
- **Preview and publication safeguards:** Cloudflare Pages development preview `https://8c4ac2dd.smartpickhub-preview.pages.dev/` deployed successfully. Verified `noindex, nofollow` and `robots.txt` `Disallow: /`. The separate Cloudflare Workers build check remains failing, as it did on the unchanged baseline; it is separate from the static Pages build. No legacy WordPress installation, DNS, `main` branch or production publication was changed. PR #1 to `main` remains Draft/open/unmerged.
- **Affiliate safeguards:** all product destinations are marketplace search URLs using existing US/UK tracking IDs. Product identifiers are model-name search phrases, not verified ASINs. No invented ASINs, prices, ratings, availability or hands-on testing claims. No Amazon product import.
- **Next:** editorially verify exact regional variants and direct ASINs for the 56 new candidates; then improve guide-library search/filter navigation and internal linking. Do not publish the research drafts to `main` or the live site without user review and approval.


## Session update — 16 November 2026 (guide-library discovery improvement)
- Verified the latest docs-only CI run **#43920465690** completed successfully on commit `9051853d1164c03ba2e43920b641aca4c38a7abe`.
- Verified current development branch head is `9051853d1164c03ba2e43920b641aca4c38a7abe`; `main` remains at `2b7b9a82bd8a7fdf601b2add42d5612d04d3e3b4`.
- PR #1 remains Draft/open/unmerged. PR #2 (Astro 7) and PR #3 (100-product catalogue) are merged into `automation/bootstrap`.
- Current source-of-truth catalogue is **25 research-draft guides / 100 product records**. Older references in this document to 10 guides / 40 products are historical and superseded by the 16 Nov 2026 milestone above.
- Implemented a guide-library search field and category selector on `src/pages/guides/index.astro`. Search covers guide title, category and summary; category choices are generated from catalogue data; result count and no-results message are announced accessibly. Added responsive styling in `src/styles/global.css`.
- This change is development-only and awaits the full GitHub Actions quality workflow. No production publication, live WordPress change, DNS change, or merge to `main`.
- Next: inspect CI and preview behaviour; then review regional product variants and direct Amazon listings for the new catalogue entries. Keep all guides unapproved until editorial review.


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


## Session update — 17 November 2026 (100-product catalogue and post-cover CI verification)

- Re-read the live development-branch source at `automation/bootstrap` (branch head at inspection: `0b543fe74306ad093546bb03c2352cb7355e0ff9`; catalogue/code QA commit: `76105fa678a952e960d3de9843fd76f6efe5d7c8`).
- Parsed `src/data/products.json` directly as JSON successfully (167,598 bytes). Confirmed 25 guides, 100 product records, 100 unique product names, zero missing `us_identifier` values and zero missing `uk_identifier` values.
- Confirmed the catalogue's identifiers are product/model-name search phrases, not verified ASINs. The validation script checks both marketplace URL constructions for every product: US Amazon host with tracking tag `smartpickh0bc-20` (100 checks) and UK Amazon host with tracking tag `smartpickhubu-21` (100 checks). This validates generated destinations and tags, not live product listing existence, exact regional variant availability or direct ASINs.
- Confirmed preview protection in `src/layouts/Layout.astro` (`<meta name="robots" content="noindex, nofollow">`) and `public/robots.txt` (`Disallow: /`). The shared layout footer includes the official Amazon Associate disclosure: “As an Amazon Associate I earn from qualifying purchases.”
- Verified latest full CI run for the image-generator/catalogue code commit: **Run #43943510553**, workflow “Astro Build and Quality Checks”, branch `automation/bootstrap`, commit `76105fa678a952e960d3de9843fd76f6efe5d7c8`, conclusion **success**. All workflow steps completed successfully: locked `npm ci`, Astro checks, catalogue/affiliate validation, keyword generation, static build, smoke/SEO/JSON-LD checks, axe-core accessibility audit, homepage desktop/mobile Lighthouse, Lighthouse for guide index/disclosure/all 25 guide pages, consolidated report and artifact upload. Report artifact: `smartpickhub-quality-reports` (ID `14264617240`).
- The later documentation-only branch-head commit `0b543fe...` did not trigger a new build; it has the successful full run above as its tested parent code commit. A separate PR-triggered run #43943521844 was cancelled; it does not negate the successful push run #43943510553.
- No source files, product records, tracking IDs, production settings, `main`, legacy WordPress installation, DNS or publication state were changed in this verification. Only this project log is updated.
- Status: the 100-product catalogue and generated-cover code have a successful full CI quality run. Do not describe this as proof that all product facts/listings have been editorially verified or that the site is “100% stable” in production. Preview remains noindex and all catalogue content remains research draft/unapproved.
- Next: visually inspect the current Cloudflare Pages preview and representative generated covers; review the 25 guides and verify exact US/UK retailer variants/direct ASINs before any publication. Do not merge PR #1 to `main`, remove noindex, or publish without explicit approval.


## Preview inspection — 17 November 2026

- Inspected the deployed Cloudflare Pages preview at `https://61142a59.smartpickhub-preview.pages.dev/guides/` and the canonical preview domain `https://smartpickhub-preview.pages.dev/guides/`.
- Confirmed the guide index exposes all 25 research-draft guide cards and 25 corresponding generated cover image URLs under `/images/pinterest/<slug>.png`. The preview HTML includes the cover `img` elements; image extraction returned 25 unique cover URLs.
- Confirmed page metadata on both preview hostnames reports `noindex, nofollow`. The older 100-product preview deployment `8c4ac2dd...` predates the cover-grid implementation and should not be used to review the latest cover layout.
- The preview content remains research draft/unapproved. No public production deployment or indexing change was made.


## Session update — 17 November 2026 (Buying Guides card redesign)
- Owner approved improvements after sharing a mobile-width screenshot showing three cramped columns, oversized/cropped card titles and oversized portrait covers.
- Updated `src/pages/guides/index.astro` on `automation/bootstrap`: grouped card content, added a clear “Read guide” link, retained category labels, summaries and editorial-review status, and preserved the existing search/category filtering behavior.
- Updated `src/styles/global.css`: explicit three-column desktop / two-column tablet / single-column narrow-screen grid; fixed-height cover stage with `object-fit: contain` to preserve the complete original 1000×1500 artwork; constrained title sizing and wrapping; clamped summaries to three lines; aligned status and action at the card bottom; added reduced-motion handling.
- No guide/product records, cover source images, affiliate URLs, tracking IDs, SEO/noindex controls or publication statuses were changed.
- No merge, no production deployment, no WordPress, DNS or live legacy hosting provider changes. PR #1 remains unmerged unless separately verified.
- Validation status: source edits committed to the development branch; CI and visual preview validation are pending. Do not call the redesign complete until the new build passes and the preview is inspected at mobile, tablet and desktop widths.
- Next: inspect the latest GitHub Actions run and the updated Cloudflare Pages preview; adjust only if visual/QA evidence shows a remaining issue.


## Session update — 17 November 2026 (search discovery and Pinterest RSS implementation)
- Implemented an RSS 2.0 feed at `/rss.xml` with `media:content`, `enclosure`, absolute cover URLs, canonical guide links, stable GUIDs, dates, summaries and product-name context. Only `editorialStatus === "Approved for publication"` items are emitted and they are sorted newest first.
- Current catalogue state was checked directly: 25 guides and **0 approved**. The resulting feed is intentionally empty until editorial approval; this prevents Pinterest from distributing draft content.
- Added optional Pinterest domain verification metadata via the `PINTEREST_VERIFY_CODE` build environment variable. No verification code has been supplied or hardcoded.
- Added a guarded IndexNow notifier (`scripts/ping-indexnow.mjs`, `npm run indexnow`). It refuses preview/localhost hosts, requires HTTPS + an IndexNow key, skips when built robots.txt blocks crawling or HTML has noindex, reads sitemap URLs, prepares the required key file, and verifies that the deployed key file is publicly reachable before POSTing to IndexNow.
- The notifier supports `INDEXNOW_PREPARE_ONLY=true` so the key file can be generated before deployment; the notification step must run only after that build has been deployed and the key file is publicly accessible. No production deployment workflow is configured in this branch, so the notifier is not wired into the current preview build or run automatically.
- The configured Astro canonical site remains `https://smartpickhub-preview.pages.dev`; shared layout remains `noindex, nofollow`; `public/robots.txt` remains `Disallow: /`. No IndexNow request was sent.
- Google does not participate in IndexNow. Google sitemap discovery must be completed through the verified production property in Search Console; no retired sitemap-ping endpoint is used. ChatGPT Search indexing is not guaranteed by IndexNow.
- Pinterest's official requirements checked: RSS 2.x or RSS 1.x (RDF), not Atom; claimed website + Business account; item title/description and image in enclosure/media tags; every item link must be under the claimed domain; Pinterest states new feed content is typically added within 24 hours and is capped at 200 Pins/day.
- No Pinterest account was connected, no domain was claimed, no boards were created, no GSC property was verified, no secrets or verification codes were added, and no drafts were approved. No WordPress, DNS, `main`, production host, affiliate URLs or live-site settings were changed.
- Validation still pending: run the full GitHub Actions quality workflow, inspect the generated RSS XML/sitemap/key-file behaviour, and validate the feed on the actual production domain after launch approval.
- Next: complete CI validation; obtain the final production domain and owner-provided Pinterest verification code/IndexNow key; then create a production deployment hook that prepares the key before deploy and notifies IndexNow only after successful deployment.

- Extended `scripts/smoke-test.mjs` to verify the built RSS is RSS 2.0, includes Media RSS/Atom namespaces and self-link, has correct approved-item count, HTTPS guide links and both image tags, and never contains draft items.
- Adjusted the existing GitHub Actions concurrency group to separate push-triggered and pull-request-triggered quality runs. Previously the two events shared one group and cancelled each other during rapid commits; the change allows both independent QA runs to complete.
- Latest implementation commits include RSS feed `d10069d`, Pinterest verification metadata `51bd6e8`, IndexNow notifier `af00231`, smoke-test RSS validation `32ad2a8`, and CI concurrency fix `c98bc02`. All are on `automation/bootstrap`; no merge/deploy.


## 17 November 2026 — Approved MVP production origin
- Owner explicitly approved **https://smartpickhub.pages.dev/** as the first production/MVP URL on Cloudflare Pages.
- This is the canonical production origin for Astro. The isolated development preview remains **https://smartpickhub-preview.pages.dev/** and must remain noindex/blocked from crawling.
- The paid custom domain (.com or .org) is phase two only, after the MVP demonstrates initial results; do not configure or purchase it now.
- `astro.config.mjs` selects the approved production origin by default and the isolated preview origin when `DEPLOYMENT_ENV=preview` or Cloudflare Pages builds a non-main branch. `PUBLIC_SITE_URL` can explicitly override the site URL for a controlled build.
- `scripts/ping-indexnow.mjs` is now hard-allowlisted to the exact origin `https://smartpickhub.pages.dev`; arbitrary domains, preview subdomains, commit-specific Pages URLs, HTTP, path variants and other hosts are rejected. The existing noindex and robots.txt guards remain mandatory, so no IndexNow request can be sent while launch protection is active.
- Preview protection remains enabled: shared layout emits `noindex, nofollow` and `public/robots.txt` disallows all crawlers. Do not remove either until the owner explicitly approves the first public release after reviewing the initial content batch.
- No IndexNow API request, Pinterest feed connection, Google Search Console submission, DNS change, custom-domain purchase, PR merge or production deployment was performed as part of this configuration update.
- Historical references to the previous host have been removed from the active deployment plan; the legacy WordPress installation remains outside this Astro MVP plan and is not modified.
- Next: confirm the latest CI run passes, then separately prepare Cloudflare Pages production deployment settings for the approved MVP origin while preserving noindex until explicit launch approval.


## 17 November 2026 — Production-origin configuration and full QA confirmation
- Rechecked the current branch catalogue directly: 25 guides, 100 product records, 0 editorially approved guides. All records remain research drafts; RSS intentionally emits no items until explicit approval.
- Confirmed the approved MVP canonical origin in `astro.config.mjs`: `https://smartpickhub.pages.dev/`. Preview builds use `https://smartpickhub-preview.pages.dev/` when `DEPLOYMENT_ENV=preview` or Cloudflare Pages builds a non-main branch. Explicit `PUBLIC_SITE_URL` override remains available for controlled build jobs.
- Confirmed IndexNow notifier is hard-allowlisted to the exact production origin `https://smartpickhub.pages.dev`. It continues to skip when noindex or robots crawl disallow is present; no notification was sent.
- Confirmed release protection remains on: shared layout outputs `noindex, nofollow`; `public/robots.txt` remains `Disallow: /`.
- Full GitHub Actions quality run **#287** passed on commit `1cff7cc9adff2ca1bb16c07a8051366d9568786a`: dependency install, Astro checks, catalogue/affiliate validation, keyword generation, static build, smoke/SEO/JSON-LD, axe-core across catalogue routes, Lighthouse desktop/mobile and every guide, consolidated audit report and artifact upload all succeeded.
- Quality artifact: `smartpickhub-quality-reports`, ID `14302522862`, SHA-256 `f99883b4bc89a72f67bd66860d02ea38cac46cee46951a6b5189326900563ebd`, retained until 1 December 2026.
- The current branch has no Cloudflare production deployment workflow. Existing `auto-publish.yml` only generates unverified editorial drafts and commits them for review; it is not a site deployment workflow. Do not treat its scheduled action as a publishing/deployment process.
- Deployment is therefore **prepared in configuration/documentation but not connected or executed**. Cloudflare account/project access, production project binding, build settings and deployment credentials have not been inspected or configured through a Cloudflare connection. No GitHub secrets were created.
- Pull Request #1 remains open as Draft and unmerged. `main` and the public production host have not been changed. No Cloudflare production deployment was triggered.
- Refreshed Draft PR #1 description to reflect the actual 25-guide/100-product catalogue, zero approved guides, successful full QA run #287, approved MVP origin, and current release gates. PR remains open, Draft and unmerged.
- Documentation commit `5de073ea7176f8e369b871f7f329b717201bb92e` triggered follow-up push/PR quality runs #289/#290; these were still in progress at the last status check. Run #287 remains the completed full QA pass for the production-origin source changes.
- Next: owner review of the initial 25 guides/100 products and any approvals; separately authorize Cloudflare Pages project/deployment setup. No Cloudflare account connector or deployment credentials are currently available in this workspace, so no production deployment configuration can be changed here. Keep noindex and robots blocking until explicit launch approval.


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

## 17 November 2026 – AUTHORITATIVE CONTINUITY UPDATE (supersedes older hosting notes)

### Hosting and domain decision – final
- The owner has explicitly confirmed that the launch/MVP production URL is https://smartpickhub.pages.dev/.
- InfinityFree is permanently out of the SmartPickHub plan. Do not use, reconnect, migrate to, maintain, or propose smartpickhub.infinityfree.me; remove InfinityFree from future plans and handoffs. Historical references above are retained only as history and are superseded by this decision.
- A paid custom domain (.com/.org) remains deferred to phase two.
- Cloudflare Pages project smartpickhub-preview is the development/QA preview only: https://smartpickhub-preview.pages.dev/.
- Cloudflare Pages project smartpickhub exists and has the desired production hostname https://smartpickhub.pages.dev/, but it currently shows No Git connection. It has not been connected to GitHub or deployed from this Astro branch. Do not change it until the release checklist is complete and owner approval is obtained.
- A separate Cloudflare Workers item also named smartpickhub has a failed build / No active routes status. This is not the Pages preview deployment and is not required for the current static Astro Pages architecture. Do not create routes or retry it as a way to fix Pages.

### Confirmed Cloudflare preview configuration (owner screenshots, 17 Nov 2026)
- Project: smartpickhub-preview under Workers & Pages → Pages.
- Git repository: ralabsi95-spec/smartpickhub.
- Production branch in this isolated preview project: automation/bootstrap.
- Automatic deployments: Enabled.
- Build command: npm run build.
- Build output directory: dist.
- Root directory: blank (repository root).
- Build system version: Version 3.
- Build cache: Enabled by owner.
- Build variable: Type Text, NODE_VERSION=22.23.4 (owner screenshot shows configured).
- Do not change these values without a concrete diagnostic reason.

### Latest verified preview and checks
- Latest Pages deployment shown in Cloudflare Deployments and the Cloudflare GitHub PR comment: commit 9d06a1d95076ec79378d4e3f6740d285d65761ee, deployment URL https://b6896e8e.smartpickhub-preview.pages.dev/.
- Owner opened the preview in a private/incognito window and confirmed the homepage displayed correctly (17 Nov 2026).
- Prior direct route review confirmed homepage, guides index, disclosure and selected guides load; the catalogue contained 25 research-draft guides and 100 product records. All are still drafts, none approved for publication.
- Preview SEO protection remains active: noindex,nofollow and robots.txt disallows crawling. RSS contains only approved guides and is expected to be empty until approval.
- GitHub Actions workflow run #347 (run ID 44076188724) completed successfully, including the full build/audit suite. This is separate from the Cloudflare Workers build failure noted above.
- The Pages preview deployment succeeded. Do not misreport the separate Workers failure as a Pages failure.
- The latest preview URL is immutable for that deployment. The stable preview hostname remains https://smartpickhub-preview.pages.dev/.

### Pull request and production safety
- PR #1: https://github.com/ralabsi95-spec/smartpickhub/pull/1 remains open, draft, and unmerged at last check.
- Implementation branch: automation/bootstrap; main has not been merged or switched to this implementation.
- Do not merge PR #1, connect the production Pages project to Git, deploy production, change DNS, or remove any existing project without explicit owner approval.
- No InfinityFree work, WordPress migration, DNS change, production deployment, product import, or public content publication was performed in this session.
- Continue all autonomous code/catalogue fixes on automation/bootstrap only. Preserve the draft/noindex guardrails.

### Exact next point for a new chat or agent
1. Read this authoritative section first, then the earlier project record for history.
2. Continue auditing the remaining catalogue and regional US/UK SKU accuracy, manufacturer sources, product lifecycle and Amazon search phrases. Do not repeat completed audits; inspect the latest JSON/catalogue and commits first.
3. Update MASTER_PROJECT.md and AGENT_HANDOFF.md after meaningful work.
4. Before release, create a controlled production-readiness checklist for smartpickhub.pages.dev: verify current production project state, choose and confirm the deployment source/branch, preserve rollback, test all routes/assets/links/mobile/SEO/disclosure, and only then request approval to connect/deploy.
5. Never reactivate InfinityFree. Never index or publish draft content until owner approval.


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


## 17 November 2026 – Follow-up content consistency fix
- Commit `7a805f4da8a92da522b0014a0030e2fd4e991394` aligned the first comparison bullets for all four Garmin Dash Cam products and all four Oral-B iO toothbrushes with the newly verified exact model specifications. The initial preview review showed that source notes had updated but the comparison bullets still contained older generic wording; this follow-up corrected that inconsistency.
- The prior preview for commit `a71fd5f` rendered the homepage and selected guide routes successfully, and retained `noindex,nofollow` plus `robots.txt Disallow: /`. The displayed Garmin/Oral-B comparison bullets on that earlier immutable deployment predate this latest wording correction; verify the next deployment before treating the latest copy as visually confirmed.
- GitHub Actions run #357 on docs head `6ca855b` was in progress when checked. The later product-data commit starts a newer run; check the newest head/run before asserting full CI pass.
- No production action, PR merge, indexing, or guide approval.

## 17 November 2026 — Roborock regional verification and CI/preview confirmation
- Updated the Roborock robot-vacuum guide product records on `automation/bootstrap` in commit `9522202de8acae2e3d7788665a584b7f8c4550ab`.
- Verified exact UK manufacturer pages for Roborock Qrevo Edge 2 and Qrevo 2 Pro. The UK pages advertise up to 25,000 Pa HyperForce suction; Qrevo 2 Pro's UK page also describes automatic mop detachment for carpets and a multifunctional self-cleaning dock. The previously reviewed US Qrevo 2 Pro source lists 20,000 Pa; catalogue copy now explicitly preserves the regional difference rather than conflating the variants. Exact SKU, dock/accessory bundle, plug, consumables, app region and UK warranty still require retailer-level confirmation.
- GitHub Actions quality workflow run #367 (ID `44091029531`) completed with conclusion `success` on commit `9522202`; its `build-and-audit` job completed successfully.
- Inspected the stable Cloudflare Pages preview route `https://smartpickhub-preview.pages.dev/guides/robot-vacuum-mops-us-uk/`. It displays the new UK Qrevo Edge 2 and Qrevo 2 Pro claims. Page metadata remains `noindex, nofollow`; `robots.txt` remains `Disallow: /`. This confirms the current stable preview content and safeguards; no immutable deployment URL for this exact commit was independently recorded.
- Catalogue remains 25 guides / 100 products, all research drafts; zero guides approved for publication. RSS remains approval-gated. No prices, ratings, ASINs, stock or hands-on testing claims were introduced.
- No merge to `main`, no production deployment to `https://smartpickhub.pages.dev/`, no DNS/WordPress changes, no public publication or indexing change. InfinityFree remains permanently excluded.
- Next: continue model-by-model source/lifecycle and regional SKU audit, prioritising remaining high-risk electrical variants and generic manufacturer sources; then refresh the release-readiness checklist. Keep all guides draft-only and production disconnected until explicit owner approval.


## 17 November 2026 — Authoritative design and CI checkpoint (supersedes older pending-status notes)
- Current development branch head at the time of this checkpoint: `81d49bc4c6f69b9631c1a8a3cbbefae4c33194fa` — `Refresh friendly visual design and clarify paid affiliate links`.
- Design batch changed `src/styles/global.css`, `src/pages/index.astro`, and `src/pages/guides/[slug].astro`: friendly teal/green, blue and coral palette; softer backgrounds, cards, buttons and navigation; focus-visible and reduced-motion support; mobile sizing; explicit “Affiliate links (paid links)” label above Amazon actions; clarified homepage count wording to “Product entries in our research library”.
- Immutable Cloudflare Pages preview for this exact commit: https://fa10e958.smartpickhub-preview.pages.dev/ . The preview deployment check succeeded and the preview content fetch confirmed homepage, 25-guide index, paid-link label on a guide, and noindex/nofollow metadata.
- GitHub Actions run #372 (ID `44095400567`) completed with conclusion `success`. All 17 workflow steps completed successfully, including locked dependency installation/audit, Astro checks, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe-core accessibility audit on all catalogue routes, Lighthouse desktop/mobile homepage and guide/disclosure/every-guide sweep, consolidated JSON audit report and report artifact upload.
- Quality/security artifact: `smartpickhub-quality-reports`, artifact ID `14334152208`, created 17 Nov 2026; expires 1 Dec 2026. The artifact exists; its full report contents have not yet been downloaded/reviewed in this checkpoint.
- CI success means the tested checks passed; it does not constitute owner visual approval, production readiness, product editorial approval, or a launch authorization.
- Current catalogue remains 25 guides / 100 products, all research drafts; zero approved for publication. Preview remains `noindex,nofollow` and `robots.txt` remains crawl-blocked.
- Preview exact commit URL is confirmed. Do not assume the stable preview hostname has the same latest build without checking it.
- PR #1 remains draft/open/unmerged. Production Pages project `smartpickhub` remains disconnected and untouched. No production deployment, DNS change, WordPress migration, publication, indexing, or product import occurred.
- Hosting decision remains Cloudflare Pages target `https://smartpickhub.pages.dev/`; the legacy InfinityFree host is permanently excluded. Paid custom domain remains deferred.
- Next: inspect the visual design on mobile and desktop with owner feedback; review Lighthouse/axe report details rather than relying only on pass status; verify stable preview against the immutable build; then continue catalogue source/lifecycle audit and pre-launch checklist. Do not connect production, merge PR #1, remove noindex/robots, or publish without explicit approval.


## 17 November 2026 — Product image integrity milestone
- Added optional, rights-aware product-image metadata rendering to individual guide product sections.
- A product photo is rendered only when a record supplies an HTTPS image URL, descriptive alt text, HTTPS source page, licence statement and attribution. Missing imagery displays an accessible “Product photo under verification” fallback.
- Added responsive image styling, lazy loading and intrinsic dimensions.
- Catalogue validation now audits image URL/source URL protocols, alt text, licence and attribution for populated image records.
- Smoke tests now verify each product section renders either its verified image or the explicit fallback.
- Implementation commits: `21a676978e19dd87cccfbff65ae56b7751511d30`, `08c083846550fac9b5fd47737da5cc05e78830a1`, `90f6c04d8af09f8e53a5f136ce9f81676a9bee81`, `0493e596870aa43fd8b8b7ac23388b7b5970d8f3`.
- Documentation commits: `542e7259d30c1db033d9100f9e69f1a9942a5a0c` (100-step roadmap), `e13f531eb47592f393cda2160838833032f2b954` (agent handoff).
- No product photographs have yet been populated; generated Pinterest covers are editorial artwork, not product photographs. Image research and rights verification remain outstanding.
- The latest full CI pass is still run #372 on commit `81d49bc`; it predates this batch. The latest commit's CI and preview must be checked before declaring the batch validated.
- No guide approvals, public publishing, indexing, PR merge, production deployment, DNS or WordPress changes. Keep all safety controls active.


## 17 November 2026 — Rights-first image discovery pipeline
- Added `PRODUCT_IMAGE_POLICY.md` to prevent unlicensed or incorrectly represented product photography. Only human-approved exact-model images with complete provenance and rights metadata may render.
- Added optional `npm run research:commons` to search Wikimedia Commons for candidate images across the catalogue and retrieve file URLs, source pages, licence metadata and creator/credit fields. Search results are candidates only; no image is automatically downloaded, approved or published.
- Added `npm run audit:images` to prebuild. It writes `test-reports/product-image-readiness.json`, including image coverage and identical US/UK marketplace search phrases requiring regional review.
- The image renderer now requires `reviewStatus: approved`; pending or incomplete candidates continue to show the explicit fallback.
- Amazon Product Advertising Content imagery is not to be scraped or cached as a shortcut. Any future Amazon image integration must follow the current Associates licence/API rules, including restrictions on image caching.
- Commons API metadata helps discover licence and creator details, but each file page and non-copyright restrictions still require human verification.
- Latest implementation and policy commits: `d1d9afa`, `5f5836a`, `2c087c7`, `3b6ab68`, `7a50963`, `d070cc8`, `acf363b`, `60f2e53`, `f105690`.
- The latest branch head has not yet had a confirmed full CI run or Pages preview. Last confirmed full CI remains run #372 on `81d49bc`, which predates this workstream.
- No product image has been approved or published. No PR merge, production deployment, DNS/WordPress change, public publishing or indexing change has occurred.


## 17 November 2026 — Latest continuation checkpoint
- Latest code/policy/handoff checkpoint before this entry: `f08348cf0dc921a6ccfe92d2205021174f93eb0c`; roadmap refreshed in `bac6e3cde99b12ea595d9e3219e10f904bb8dc49`.
- Catalogue inspection: 25 guides, 100 products, 0 populated product-image records. 71 products currently use identical US/UK search phrases; treat these as manual review flags, not automatic evidence of a regional mismatch.
- The optional Commons research script has been added but has not yet been executed against the live API in the repository environment. Do not claim candidate photos have been found.
- Latest full CI pass remains run #372 on `81d49bc`; the newer workstream has no confirmed full CI result or Pages preview yet.
- Roadmap baseline remains 47 completed steps, step 77 partially complete. Image rights and real photo sourcing remain outstanding.


## 17 November 2026 — Exact Apple and Sony source refresh
- Replaced generic Apple comparison/catalogue source links with model-specific Apple Support technical specifications for iPad Pro 13-inch M5, iPad Air 11-inch M4 and iPad A16. iPad mini A20 Pro was already moved to its own technical specification page.
- Replaced the generic Sony headphone category source with exact Sony Support specification pages for WH-1000XM6, WH-1000XM5, WH-1000XM4C and WH-ULT900N.
- Updated the Sony XM6/XM5/XM4C comparison bullets and caveats to align with the exact model-specific specifications. The 2026 XM4C is distinct from the original XM4 and is not described as a simple colour suffix.
- Data commit `0e6d68f`; editorial-copy commit `948c7d6`; roadmap entry `6697ea7`.
- The catalogue remains 25 guides / 100 products, all drafts. No image records are populated. CI/preview for the image and source-refresh batches remain unconfirmed; last full CI pass remains run #372 on `81d49bc`.


## 17 November 2026 — CI repair and full-catalogue QA continuation
- Repaired the TypeScript contract for optional product-image metadata in `src/pages/guides/[slug].astro`. The prior CI failure was caused by TypeScript inferring JSON product records without the optional `image` property; the page now uses an explicit intersection type with optional image metadata while preserving the approved-only render gate.
- Repair commit: `9325de673ec932b95e40ba7a72d0b37436c4b257`.
- CI run #453 / ID `44113630229` on that code commit passed locked dependency installation, Astro/type checks, catalogue and affiliate validation, keyword generation, static build, smoke tests, axe-core across every catalogue route, and homepage Lighthouse desktop/mobile.
- At this checkpoint, the full-catalogue Lighthouse step (guide index, affiliate disclosure and all 25 guides) was still running. Consolidated report generation and artifact upload had not yet completed. Do not claim overall CI success until the run reaches a terminal successful conclusion.
- Corrected stale operational handoff statements that incorrectly referred to a 10-guide/40-product catalogue and old dependency-audit findings. Current authoritative catalogue is 25 guides / 100 products.
- Updated the 100-step roadmap to distinguish completed checks from in-progress Lighthouse and pending report/artifact steps. Baseline roadmap count remains 47 completed and step 48 partial; no artificial completion count was added.
- Documentation commits: `8be21b801d82f5115cf7e04dba677a30b6cd78a8` (handoff) and `c7f2c4334bd4e5023d35d92508a3c26ec94a02a3` (roadmap).
- PR #1 remains open, Draft and unmerged. Preview remains noindex/nofollow and crawl-blocked. No production deployment, DNS, WordPress, publication or indexing changes.
- Remaining risks: latest npm audit artifact still needs review; product photo count remains zero; Commons candidate research has not yet run; 71 identical US/UK search phrases need manual regional review; visual acceptance remains outstanding.


## 17 November 2026 — Full QA results and image-delivery optimization
- CI run #453 / ID `44113630229` completed successfully on commit `9325de673ec932b95e40ba7a72d0b37436c4b257`. It covered 28 axe routes and 29 Lighthouse page profiles and uploaded artifact `smartpickhub-quality-reports` (artifact ID `14342661087`).
- Reviewed the artifact rather than relying on the green status alone:
  - Catalogue: 25 guides / 100 products; validation passed.
  - Generated pages/SEO/JSON-LD/affiliate smoke tests: passed with no errors or warnings.
  - axe-core: zero violations across 28 routes; 29 incomplete checks remained (28 gradient-related colour-contrast checks and one ARIA group-label check).
  - Lighthouse: Accessibility 100 and Best Practices 100 across the audited pages. Performance was 100 on homepage desktop/mobile and all guide/detail pages except the guide index, which scored 76. SEO was 66–69 because the preview is intentionally noindex and crawl-blocked.
  - npm audit: zero reported vulnerabilities in this run.
- Lighthouse identified oversized PNG covers as a major image-delivery opportunity on the guide index, along with unused CSS and cache-lifetime opportunities.
- Follow-up performance/accessibility changes on the development branch:
  - `scripts/generate-pinterest-images.mjs` now keeps original 1000×1500 PNG Pinterest artwork and also generates 720×1080 WebP derivatives for site display.
  - Homepage, guide index and guide detail cover images now use WebP for on-page display; Open Graph/social/Pinterest image paths continue to use PNG.
  - `scripts/smoke-test.mjs` validates that each guide has a valid 720×1080 WebP cover and references it.
  - Guide filter wrapper now has `role="group"` so its accessible label is associated with a valid role.
  - Added Cloudflare Pages `public/_headers` cache policies: hashed Astro assets are immutable for one year; editorial images receive a one-day freshness window with stale-while-revalidate.
- These follow-up changes are not yet confirmed by CI. Run #470 / ID `44115423685` was pending for commit `459b4481605558da5fcc265057f77de4e2f3563c`; docs commits after that may have triggered a newer run. Verify latest PR head/run before declaring them complete.
- Roadmap checklist tally is 52 completed, with step 48 and steps 68–69 partial. Remaining steps include manual contrast/visual review, full product lifecycle/regional audit, image rights research, analytics and controlled release.
- No product photos have been added; Commons research remains unexecuted. The 71 identical US/UK search phrases remain a manual review queue.
- PR #1 remains Draft/open/unmerged; preview protections remain in place. No production deployment, DNS or WordPress changes, public publishing or indexing changes.


## 18 November 2026 — Latest verified project checkpoint
- CI #477 passed on `f336ac5fb954b03dc1411051f53d92b7bbd5a1c3`; report artifact `14343891465` reviewed. All 29 Lighthouse pages scored 100 Performance, Accessibility and Best Practices; SEO 66–69 is intentionally constrained by preview noindex. axe: zero violations on 28 routes; 28 gradient contrast checks remain incomplete for manual review. npm audit: zero vulnerabilities across 362 dependencies.
- Latest verified preview for that code: `https://d8a304d5.smartpickhub-preview.pages.dev/`.
- Subsequent dimension and smoke-test refinement currently at `8bb6cb67cb0bacd8452dbe8e05170ee30fdb3cb4`: WebP HTML attributes now match actual 720×1080 derivatives; CI and preview for this new head remain pending.
- Catalogue snapshot: 25 guides / 100 products, none approved; 100 manufacturer source URLs across 50 hosts; no product-image records; 71 identical US/UK search phrases flagged for manual review. Repeated generic/family source URLs remain targeted review candidates.
- Preserve all safety boundaries: no PR merge, production deployment, DNS change, public publishing/indexing, WordPress change, or removal of noindex/robots without explicit owner approval. InfinityFree is permanently excluded.


## 18 November 2026 — Exact model-source audit batch
- Replaced generic DEWALT drill-category references with exact official US model pages for DCD801B, DCD794D1, DCD777D1 and DCD703F1. Updated each source note with the manufacturer-confirmed kit/platform details and retained explicit warnings that UK model numbers/battery systems are regional candidates, not automatic equivalents.
- Replaced the shared Garmin dash-cam source with exact official model pages for X310 (4K), X210 (1440p), X110 (1080p) and Mini 3 (ultracompact 1080p). Notes retain regional package/accessory verification caveats.
- Source pages were fetched and checked against model titles and manufacturer descriptions before the catalogue edit. No manufacturer product images were downloaded or added.
- Catalogue source-data commit: `8c1090f2eee5382829caaca7f8c6d832f6e89cfa`.
- Ran 56 explicit catalogue/configuration/keyword-map integrity assertions against the current branch data: 56 passed, zero failed. Coverage included 25/100 counts, uniqueness, draft-only state, content fields, HTTPS sources, affiliate IDs/tags/marketplace hosts, ASIN safeguards, image absence, regional phrase queue (71), 12 keyword clusters and exact model-source patterns.
- The latest code head and documentation commits have not yet received a fresh full CI run or immutable Pages preview. The last fully verified code remains `f336ac5` / run #477. Verify a new CI run and preview before treating these latest code changes as deployment-tested.


## 18 November 2026 — Preview freshness warning
- The stable preview's cordless-drill and dash-cam routes were checked after the model-source update and still render the old manufacturer source links. Treat the preview as stale relative to branch commit `8c1090f`; do not claim these updates are visible until a new immutable Pages deployment is confirmed.
- Preview noindex/nofollow remains present. No production connection, deployment, DNS, indexing or publishing changes occurred.


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


## 18 November 2026 — Product scale and intake workflow
- Added `PRODUCT_INGESTION_PLAYBOOK.md` as the canonical end-to-end process for single and bulk product intake, normalization, duplicate detection, regional identity, manufacturer evidence, keyword intent, image rights, Amazon US/UK links, automated QA, human review, refresh and retirement.
- Explicitly separates today's 25-guide/100-product JSON catalogue from a future scalable architecture. PostgreSQL, object storage (R2 candidate), queues and a dedicated search index are options for measured future thresholds, not deployed services or selected paid commitments.
- Key scale decision: do not generate millions of static product pages. Keep curated guides/category landing pages indexable only after approval; serve long-tail catalogue/search through paginated data APIs and indexed search when scale warrants it.
- No importer, database, queue, API, image pipeline, production deployment or publishing was implemented by this documentation change.
- CI speed improvement: Lighthouse now audits representative templates (homepage desktop/mobile, guide index, disclosure and one guide) instead of re-running Lighthouse across every near-identical guide route. Smoke tests and axe checks still cover all generated routes. This reduces redundant Lighthouse runtime without dropping route-level smoke/accessibility coverage.
- PR #1 remains Draft/open/unmerged; preview remains noindex/nofollow and crawl-disallowed. No production/DNS/WordPress changes.


## 18 November 2026 — importer verification and test hardening
- CI #534 (run ID `44244444701`) and PR CI #535 (run ID `44244452207`) both completed successfully on commit `de02aafffbbb185ee0ffce1545c9da6458d7ceca`; every reported workflow step passed.
- Added an isolated end-to-end importer test in `scripts/test-import-products.mjs`. It uses a temporary workspace and synthetic data to verify candidate classification, existing-catalogue match, in-batch duplicate, invalid HTTP source, unverified ASIN warning, JSON/CSV reports and catalogue hash preservation.
- Added command `npm run import:integration-test` and made CI run it before catalogue validation. The new test itself is not yet CI-verified; check the next run on the new branch head.
- The real catalogue remains unchanged by the test. Importer is still dry-run only; no database/review UI/evidence collector or production publication was introduced.


## 18 November 2026 — release audit report correction
- The review found a stale Lighthouse sample expectation (29 expected vs five intentionally collected) and the audit report did not fail CI for incomplete reports.
- Commit `a767ad0` attempted the correction but CI caught a JavaScript syntax error from escaped newlines; the failed run was `44249173209`. This is explicitly not treated as a passing change.
- Follow-up commit separates `overallStatus` into a valid JavaScript variable, retains the five-page sample expectation, surfaces security/manual-accessibility review states, and fails the report step when required automated checks are incomplete.


## 18 November 2026 — release-readiness review final result
- Latest verified branch commit: `3f49a59ed44c8385ce41b63e94365e4c6161fda1`; push CI `44249569378` and PR CI `44249577388` both passed.
- Artifact `14403925308` consolidated result: `quality-passed-security-review-and-manual-accessibility-review-required`. Five Lighthouse samples are correctly recognized; the former 29-vs-5 report mismatch is fixed and incomplete reports now fail CI.
- Quality evidence: 25 guides / 100 products; 29 smoke pages with zero errors/warnings; 28 axe routes, zero violations / 27 incomplete contrast checks; all five Lighthouse samples 100 Performance, Accessibility and Best Practices; SEO 66–69 while indexing is blocked.
- Outstanding: one high picomatch advisory across 12 dependency nodes, owner exception pending; 100 products without imagery; 69 identical US/UK phrases for manual regional review; zero guides approved; no analytics or verified conversion reporting in the current repository.
- Production remains disconnected, preview freshness for this commit unknown, PR #1 Draft/unmerged. No launch or publication performed.
- Full prioritised blockers and continuation sequence are in `docs/RELEASE_READINESS_AUDIT_2026-11-18.md`.


## Follow-up evidence — Logitech gaming mice and Synology DS224+ (18 November 2026, 07:10 UTC)

### Logitech G gaming mice — UK manufacturer pages confirmed
The gaming-mice guide's three Logitech models that previously pointed to US pages now have matching UK-region manufacturer evidence:
- PRO X2 SUPERSTRIKE: Logitech G UK product page https://www.logitechg.com/en-gb/shop/p/pro-x2-superstrike-mouse — UK page displays the model, £159.99 at the time checked, and in-stock/ready-to-ship status. The Haptic Inductive Trigger System (HITS) is described on the product page. Treat price and stock as volatile; this audit records only the observed page state, not a permanent availability claim.
- PRO X SUPERLIGHT 2: Logitech G UK product page https://www.logitechg.com/en-gb/shop/p/pro-x2-superlight-wireless-mouse — UK page identifies the model and states 60g; colour/edition-specific page variants exist, so verify exact colour/SKU before using a retailer link.
- G502 X PLUS: Logitech G UK product page https://www.logitechg.com/en-gb/shop/p/g502-x-plus-wireless-lightforce.910-007808 — UK page identifies the product, LIGHTFORCE hybrid switches, LIGHTSPEED wireless and LIGHTSYNC RGB. A second colour/SKU page also exists; do not conflate the SKUs.
- UK gaming-mice category page lists all three models in the UK storefront: https://www.logitechg.com/en-gb/shop/c/gaming-mice .
Decision: UK product identity and manufacturer-page support are now confirmed for all three. Exact regional part number/colour package and software/receiver details still need a per-variant check. These findings are evidence only; no catalogue records were edited.

### Synology DS224+ — UK-region evidence strengthened; current supply mixed
- Synology UK download centre has a model-specific DS224+ page and current DSM download listing: https://www.synology.com/en-uk/products/DS224%2B .
- Synology UK Store currently labels its refurbished DS224+ offer sold out; this is not evidence that all new retail stock is unavailable: https://www.synology.com/en-uk/store .
- UK reseller evidence is mixed but includes listings showing stock: LambdaTek lists DS224+ with 7 units at the time checked (https://www.lambda-tek.com/shop/?catid=932&region=GB); Ballicom lists 2 units (https://www.ballicom.co.uk/manufacturers/synology/?filters%5Battributes%5D%5B0%5D=58069&filters%5Bcategories%5D%5B%2Fhardware%2Fstorage-memory%2Fnetwork-storage%2Fnas%2F%5D=591&page=1&page_count=100&sort=price-asc). These are volatile reseller stock snapshots, not Synology warranty confirmation.
- Synology's official product specification PDF was updated 6 August 2026 and identifies DS224+; the model has 2 drive bays, Intel Celeron J4125, 2GB memory and 100–240V AC input (manufacturer spec): https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/24-year/DS224%2B/enu/Product_Spec_DS224%2B_enu.pdf . The official UK-region launch announcement states 2-year warranty, extendable to 4 years in select regions, but exact UK warranty entitlement must be checked by seller/serial and region.
Decision: retain DS224+ as a UK-market model, but do not state universal current stock or a UK warranty period without retailer/serial confirmation. Also assess newer successor models before treating DS224+ as a lead recommendation.

## CI and preview status correction — 18 November 2026, 07:10 UTC
- Branch head remains `5294826a594590d1dc46fa95bbbb7c9dead3779e` on `automation/bootstrap`.
- GitHub Actions run #564 / ID `44252571083` completed successfully on this exact SHA. All 19 main job steps passed, including locked dependency install, dependency audit capture, Astro checks, importer self-test, importer isolated integration test, catalogue/affiliate validation, static build, smoke tests, axe audit, Lighthouse samples, consolidated audit and artifact upload.
- PR #1 remains open, Draft, unmerged.
- Cloudflare's PR bot recorded a failed build for commit `5294826` under its Workers/service preview-build endpoint and provided no deployment URL. This is **not** evidence that the separate Cloudflare Pages preview successfully deployed or failed. Latest Pages preview freshness therefore remains unverified; do not treat the stable preview hostname as updated to this commit.
- No product records, affiliate URLs, guide content, images or publication flags were changed in this batch. No merge, production deployment, DNS change, publication, indexing or crawl-protection change occurred.
- Existing open gates remain: picomatch high-severity advisory requires owner security review (deadline 2 Dec 2026); gradient contrast checks require manual review; all 25 guides remain drafts; 100 products have no approved product images; Amazon account/live listing validity remains unverified.


## Follow-up evidence — Garmin X210 and Epson EF-30 (18 November 2026)

### Garmin Dash Cam X210 — UK compliance evidence, commercial SKU still open
- Garmin UK X110 page explicitly lists X210 in the UK product family and describes it as a 1440p model, but does not expose an X210-specific UK part number or individual sales page: https://www.garmin.com/en-GB/p/1222949/ .
- Garmin's UK Declaration of Conformity identifies model B04684 / Dash Cam X210 and was revised 31 July 2025: https://static.garmin.com/pumac/Dash%20Cam%20x210_DoC-UK.pdf . This is strong evidence of UK regulatory conformity, not proof of UK retail listing, commercial SKU or current stock.
- Garmin support comparison confirms the X210 model feature family and resolution; exact product package contents remain subject to the SKU: https://support.garmin.com/en-US/enUS/?faq=K5Kkj7NNG59OMjVi1NwIl5 .
- Decision: keep X210 exact UK sales SKU marked unverified. Do not invent a part number or treat the UK DoC as a sales listing.

### Epson EF-30 — exact UK manufacturer listing not located
- Targeted search of Epson UK did not return an exact EF-30 product page or UK SKU. This does not prove the model is unavailable; it means this audit cannot confirm a UK commercial identity or stock state.
- Decision: retain EF-30 as unverified for UK. Do not infer an EF-30 UK SKU from another EF-series model or retailer text alone. Revisit only with an exact Epson UK page or documented UK retailer SKU and manufacturer spec cross-check.

### Current CI state after documentation batch
- Documentation commits were pushed to `automation/bootstrap`; the latest head at this check is `576e11163361bec06b5dafdda243841a5adab40d`.
- PR CI run #573 / ID `44257057465` is in progress on that exact SHA. Do not call this documentation batch CI-verified until the run completes.
- The preceding code/documentation commit `5294826` did pass push CI run #564 / ID `44252571083` (all 19 main steps successful).
- No catalogue edits, merge, deployment, publishing, DNS or indexing changes were made.


## 18 November 2026 — CI #650 verification and continuation checkpoint (16:02 UTC)

### Exact verification evidence
- PR #1 remains Draft/open/unmerged. Its branch head at this checkpoint is `56f7ab458483e3ec7788e26679726baf6b604c06` on `automation/bootstrap`.
- GitHub Actions PR run #650 / run ID `44336718338` completed successfully. GitHub created test merge commit `9eb35cd2094508428d40ff789730076f56e5502b` to validate the PR head against base `2b7b9a82bd8a7fdf601b2add42d5612d04d3e3b4`; the merge commit is a CI test ref, not a merge to main. Its content includes PR head `56f7ab4`.
- The single `build-and-audit` job and all 18 substantive workflow steps completed successfully: locked npm install, audit capture, Astro checks, importer self-test and isolated integration test, catalogue/affiliate validation, keyword generation, static build, 29-page smoke test, local preview server, axe audit across 28 routes, five Lighthouse samples, consolidated audit report and artifact upload.
- Artifact `smartpickhub-quality-reports-650.zip`, ID `14442111616`, was downloaded and inspected. Consolidated report generated 18 Nov 2026 15:34:57 UTC.
- Report confirms 25 guides / 100 products; 100 US and 100 UK marketplace-link constructions; 0 catalogue errors; 29 HTML pages smoke-tested with zero errors/warnings; preview `noindex`, `robots.txt Disallow: /`, and public publication disabled.
- Accessibility: 28/28 routes audited, zero axe violations, 27 incomplete checks. These are not proven failures, but require manual contrast review where gradients prevent automated calculation; do not state WCAG conformance as fully verified.
- Lighthouse: five representative samples (home desktop, home mobile, guide index, disclosure, one guide) each scored 100 Performance, Accessibility and Best Practices; SEO 66–69 while the preview is intentionally blocked from indexing. Example LCP: desktop home 0.3s, mobile home 0.9s, guide index 1.4s. This is representative sampling, not every route.
- Product imagery readiness: 0 approved, 0 pending, 100 with no product image. Original guide-cover artwork is separate from product photographs.
- npm audit artifact reports 12 high-severity affected package nodes. The dependency paths trace to the known picomatch advisory `GHSA-fc5q-39xc-vjpf` / `CVE-2026-112366`; affected nodes include Astro/Vite dependency chain packages. This is one underlying advisory represented across multiple package nodes, not 12 independent CVEs. Preserve the owner-approved temporary exception and review by 2 Dec 2026; this is not a clean audit or remediation.

### Deployment and publication state
- No Cloudflare configuration was changed. Production Pages project `smartpickhub` remains disconnected/unconfigured; no production deploy, DNS change, indexing change or publication occurred.
- Preview freshness for the latest tested ref remains unverified; do not infer a Pages deployment from successful GitHub Actions CI.
- All 25 guides remain editorial drafts; none approved. No Amazon direct ASIN/listing, current stock, price, rating or live Associates account status is newly verified by this CI.
- PR #1 remains open/Draft/unmerged. No approval to merge or deploy is implied by the CI success.
- InfinityFree remains excluded from this project scope.

### Next work
1. Continue read-only release-readiness work on the approved development branch: verify preview deployment freshness using the Pages deployment evidence if available; do not modify Cloudflare production settings.
2. Manually review homepage gradient contrast/incomplete axe nodes and record actual colour-ratio results before any accessibility claim.
3. Prioritise a rights-compliant product-image research workflow with provenance/licence/attribution fields; do not scrape Amazon images or mark candidates approved automatically.
4. Continue UK/US SKU verification and editorial review; keep publication flags unchanged.
5. Inspect the latest head and CI again after this documentation commit; do not claim this new documentation head has passed until a run for it completes.

### Files and versions
- Branch: `automation/bootstrap`; PR: https://github.com/ralabsi95-spec/smartpickhub/pull/1
- CI artifact: `smartpickhub-quality-reports-650.zip` (run ID `44336718338`, artifact ID `14442111616`).
- Node.js used in CI: `22.23.4`; dependencies installed with `npm ci` from committed lockfile.
- No product catalogue, guide copy, affiliate identifiers, publication flags, images, site settings or production configuration changed in this checkpoint; documentation only.


## 18 November 2026 — release-readiness checkpoint (16:07 UTC; CI #654)

### Verified current branch and CI
- PR #1 head is `c8785bb4d56b886e51dae7b30220b939ca1c1e83` on `automation/bootstrap`; PR remains Draft/open/unmerged.
- GitHub Actions run #654 / ID `44342783693` completed successfully for that exact PR head. The artifact metadata identifies branch `automation/bootstrap` and head SHA `c8785bb4d56b886e51dae7b30220b939ca1c1e83`. Its consolidated audit records the GitHub synthetic merge commit `58c2c34c96eef2d749600e51e8cc3ae8d48805f9` (merge of PR head into base for testing only); this is not a merge to main.
- The single `build-and-audit` job and all 19 substantive workflow steps succeeded, including locked dependency install, npm audit capture, Astro checks, importer tests, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe, Lighthouse, report generation and artifact upload.
- Artifact `smartpickhub-quality-reports`, ID `14444966746`, size 1,722,056 bytes, generated 18 Nov 2026 16:07 UTC, downloaded and inspected.
- Report confirms 25 guides / 100 products; 100 US and 100 UK marketplace-link constructions; 0 catalogue errors; 29 HTML pages smoke-tested with zero errors/warnings. Preview safeguards remain `noindex`, `robots.txt Disallow: /`, and `publicPublicationEnabled=false`.
- Accessibility: 28/28 routes audited, zero axe violations, 27 incomplete checks and no recorded failures in the summary. Incomplete checks include contrast cases the tool cannot calculate reliably (including decorative/non-text arrow glyphs); this is not proof of a WCAG failure or proof of full WCAG conformance. Manual review remains open.
- Lighthouse sample: desktop homepage Performance 98, mobile homepage 100; guide index, affiliate disclosure and sampled guide each 100 Performance. All five samples score 100 Accessibility and Best Practices. SEO 66 on non-guide samples and 69 on sampled guide while indexing is intentionally blocked; do not interpret as production SEO readiness.
- npm audit remains `review-required`: 12 high-severity affected dependency nodes associated with the single underlying picomatch advisory `GHSA-fc5q-39xc-vjpf` / `CVE-2026-112366`. The owner-approved, time-boxed exception is not remediation or a clean audit; review by 2 Dec 2026.
- Product image readiness: 0 approved, 0 complete candidates pending human review, 100 products without product images. The original guide-cover graphics are not product photography. No image was approved or added.

### Source inspection and launch implications
- Inspected current branch source for `src/layouts/Layout.astro`, `src/styles/global.css`, `src/pages/index.astro`, and `src/pages/guides/index.astro`. The site retains the noindex safeguard and displays the catalogue as work in development / editorial review required. Featured guide cards link to their draft pages; publication remains blocked by site-level crawl controls and owner-controlled release gates.
- The homepage currently has six featured guide cards and the library exposes all 25 research drafts. These should not be treated as approved editorial content merely because they build and render.
- Current preview URL `https://smartpickhub-preview.pages.dev/` remains inaccessible to the web inspection tool; successful CI is not evidence of a fresh Cloudflare Pages deployment. No immutable Pages deployment for head `c8785bb` has been independently verified.
- Production Pages project `smartpickhub` remains disconnected/unconfigured and untouched. No Cloudflare settings, DNS, production deployment, merge, indexing, publication, or crawl-protection settings were changed. InfinityFree remains excluded.

### Next release work
1. Obtain a reliable read-only Pages deployment record for the current branch head, or clearly retain preview freshness as unverified.
2. Complete human accessibility review of the homepage, guide index, and representative guide contrast states; document actual ratios and fix only confirmed defects.
3. Select an initial small set of guides for substantive editorial review and approval; do not publish all 25 drafts by default.
4. Continue SKU/marketplace checks and validate the live Amazon Associates UK account and actual retailer destinations before launch claims.
5. Build a lawful product-image candidate workflow with source page, exact model, direct asset URL, rights/licence basis, attribution, and human approval. No Amazon image scraping or automatic approval.
6. Prepare production cutover, analytics/privacy, Search Console, sitemap/RSS and Pinterest verification steps, but do not configure or activate them without owner approval.
7. Check CI after this documentation commit; run #654 validates the prior PR head, not this new documentation commit.

### Files and versions
- Node.js `22.23.4`; dependencies installed using `npm ci` and the committed lockfile.
- PR: https://github.com/ralabsi95-spec/smartpickhub/pull/1
- CI run: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44342783693
- Artifact ID: `14444966746`.
- This checkpoint is documentation-only; no product catalogue, guide copy, affiliate identifiers, images, publication flags, or production configuration were changed.


## 18 November 2026 — follow-up after CI #656 (20:02 UTC)

- Latest PR head before this checkpoint was `a71be853fa7424444e384ba4bea39b745506ead0`; PR #1 remains Draft/open/unmerged.
- CI #656 / run ID `44381000301` completed successfully on that exact head. All 19 substantive steps in the build-and-audit job passed. Artifact ID `14462454753` was downloaded and inspected.
- The CI #655 run on the prior documentation commit was cancelled by concurrency when #656 started; do not treat it as a failed code test. #656 is the authoritative completed run for `a71be85`.
- CI #656 confirms 25 guides / 100 products, 100 US and 100 UK marketplace link constructions, 0 catalogue errors, 29 HTML pages smoke-tested with zero errors/warnings, and preview crawl safeguards active (`noindexVerified=true`, `robotsTxtDisallowAll=true`, `publicPublicationEnabled=false`).
- Accessibility: 28/28 routes, zero axe violations, 27 incomplete checks. These are not confirmed violations, but manual contrast review remains required; no full WCAG conformance claim.
- Lighthouse: five samples all score 100 Accessibility and Best Practices; Performance 100 on all five samples. SEO 66 while the preview is intentionally blocked from indexing.
- Product images: 0 approved, 0 pending, 100 without images. All 25 guides remain drafts and none are approved for publication.
- **Security reconciliation:** raw npm audit in artifact #656 reports zero vulnerabilities (`vulnerabilities={}`, total 0). This is the current npm audit feed result, not proof that installed picomatch is patched. The reviewed GitHub advisory still exists, currently has incomplete/unknown package metadata and lists no patched version; project lockfile resolutions previously inspected remain 4.0.7 and nested 2.3.2. The owner-approved temporary risk acceptance remains open as an advisory watch until fresh dependency/advisory verification; review deadline 2 December 2026. Updated `SECURITY_EXCEPTIONS.md` and `.json` to remove stale “pending owner approval / 12 findings currently in npm audit” wording and record the CI #656 evidence without claiming remediation.
- Security documentation commits: `d005773ac1e830e7b1171e8c9732db4679cf9fac` and `4362f1a6cda2094107efa3b42c921344e0b4cf35`. These commits are documentation-only; CI #656 does not validate them.
- The current preview deployment for latest branch head remains unverified. The preview hostname was inaccessible to web inspection; no Cloudflare deployment detail or Pages connector was available. Production Pages project remains unconfigured/disconnected.
- No merge, deployment, Cloudflare/DNS/indexing change, guide publication, Amazon account change, or production action occurred. InfinityFree remains excluded.

### Next work
1. Verify the newest CI run for documentation head `4362f1a`.
2. Reconcile the security advisory against the exact current lockfile and npm/GitHub advisory feeds before considering closure; do not suppress or downgrade dependencies.
3. Continue human accessibility contrast review and select an initial small editorial batch for substantive review.
4. Establish current Cloudflare preview deployment SHA using an authorized read-only dashboard/session; do not change settings.
5. Keep production cutover gated on content, images, affiliate destination, privacy/analytics and explicit owner authorization.

## 18 November 2026 — CI #664 verified on latest documentation head (20:07 UTC)

- Current branch head: `ecc2498386e3ed8012161d3460951fb242ef8bf9` on `automation/bootstrap`; commit message: `docs: handoff latest CI and release blockers`.
- GitHub Actions PR-triggered run #664 / ID `44386731142` completed successfully on this exact head. Artifact metadata confirms `head_branch=automation/bootstrap` and `head_sha=ecc2498386e3ed8012161d3460951fb242ef8bf9`.
- The `build-and-audit` job succeeded; all 19 substantive steps completed successfully: locked dependency install, npm audit capture, Astro checks, importer tests, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe, Lighthouse, consolidated report and artifact upload.
- Artifact `smartpickhub-quality-reports`, ID `14467226284`, was created at 20:05:55 UTC (1,720,936 bytes; expires 2 Dec 2026). Artifact contents have not yet been downloaded/inspected in this checkpoint; do not infer its detailed audit metrics from the job success alone.
- This confirms CI on the latest branch head, superseding the earlier “no run for documentation head” status. It does not establish a Cloudflare Pages deployment for this SHA.
- PR #1 remains open/Draft/unmerged. No merge, production deploy, Cloudflare/DNS/indexing change, guide publication, Amazon account change or production action occurred. InfinityFree remains excluded.
- Existing launch gates remain: preview deployment SHA unverified; 25 guides remain drafts / zero approved; 100 products have no approved product photos; manual contrast review remains open; Amazon live account and exact product destinations remain unverified; temporary picomatch advisory watch review deadline remains 2 Dec 2026.

### Next actions
1. Obtain read-only Cloudflare Pages deployment evidence for exact head `ecc2498`; do not alter settings.
2. Download and inspect artifact `14467226284` before recording its detailed quality/security metrics.
3. Continue manual contrast review and evidence-backed editorial/SKU verification; do not change publication flags.
4. Keep PR merge and production release gated on explicit owner approval.

## 18 November 2026 — CI #664 artifact inspected and contrast pre-check (20:11 UTC)

- Downloaded and inspected artifact `smartpickhub-quality-reports` ID `14467226284` from run #664. Consolidated report generated at `2026-11-18T20:05:53.777Z`; it records the workflow's synthetic test commit `ee90ba30d687c16c9711900ff42afdfd5239b2c8`, while artifact metadata correctly binds the run to PR head `ecc2498386e3ed8012161d3460951fb242ef8bf9`. Do not confuse the synthetic test commit with the branch head.
- Detailed results: 25 guides / 100 products; 100 US and 100 UK marketplace URL-construction checks; zero catalogue errors; 29 HTML pages smoke-tested with zero errors/warnings; 28/28 axe routes, zero violations, 27 incomplete color-contrast checks; five Lighthouse samples each score 100 Performance, Accessibility and Best Practices (SEO 66–69 while intentional noindex/robots protections remain active).
- Preview safety verified in the report: `noindexVerified=true`, `robotsTxtDisallowAll=true`, `publicPublicationEnabled=false`.
- npm audit artifact is clean at this run (`total=0`, empty vulnerabilities object). This is a point-in-time npm feed result only; do not treat it as proof picomatch is patched or close the owner-approved advisory watch. The lockfile still references the known affected package versions; review deadline remains 2 Dec 2026.
- Product imagery: 0 approved, 0 complete candidates pending human review, 100 without images; 69 identical US/UK search phrases remain manual regional-review flags.
- Began manual contrast pre-check using exact CSS color declarations in `src/styles/global.css`. Against the declared light gradient stops (#f8fbff, #edf4ff, #dceafe), text colors #2457a7, #12213b and #475569 calculate at least 5.75:1, 13.20:1 and 6.22:1 respectively. White on primary button #155eef calculates 5.41:1. These static endpoint calculations are encouraging but are not browser pixel sampling of the combined radial/linear gradient, so the 27 axe incomplete checks remain open pending rendered-state verification.
- No source code, product data, guide approval, image record or site configuration was changed in this review. PR remains Draft/open/unmerged; preview deployment freshness and production Pages configuration remain unverified/untouched.

### Next actions
1. Verify Cloudflare Pages deployment metadata for exact PR head using authorized read-only evidence; no setting changes.
2. Complete rendered-state contrast verification for hero gradient and representative guide headers; keep axe incomplete status open until verified.
3. Continue lawful product-image candidate research and UK/US SKU verification without auto-approval or catalogue import.
4. Recheck latest branch head/CI after this documentation update.
5. Review picomatch advisory and temporary exception by 2 Dec 2026.


## 19 November 2026 — UK-first launch progress

- Owner direction: complete all 25 guides / 100 products and move toward launch without exhaustive UK/US model parity or excessive micro-verification. UK is primary; US is secondary. Material safety/compatibility distinctions remain mandatory.
- Updated catalogue metadata accordingly (policy commit `5c9a2527a1d5b99d920a0034072e3789b9061be7`).
- Removed 39 repeated generic pros bullets and 49 repeated generic cons bullets from the 100 products. All 25 guides / 100 products remain; each record retains source URL and both marketplace identifiers. No products or source records were deleted.
- Guide #25 changed to UK-listed Brother models MFC-L8390CDW, MFC-L3740CDW, HL-L3240CDW and DCP-L2660DW, with matching UK sources and 220–240V specs; US identifiers retained as secondary search phrases.
- Guide #20 Epson CO-FH02 updated to UK-listed SKU V11HA85040, Full HD 1080p, 3,000 lumens, 3LCD and Android TV; no price/current retailer-stock claim is displayed.
- Data commits: `5727e5d414ed34db491a5b4e7220b9c1f84566dc`, `0609a73eb8af1517c21c0eb76aed09e3b8e361af`, `3bb10606a361ed5136d75dbfdc187074b8f5a8b6`. Documentation commits: `7df951f16ccd524ef3f413a79d749c98621c38e4`, `b9000e1b694cdbd720f428bea6c26ee5760f32d7`.
- CI #681 and #683 were cancelled during overlapping PR activity; no complete passing CI for the latest head yet. Avoid overlapping commits and obtain a full successful run before declaring the candidate validated.
- PR #1 remains Draft/open/unmerged. All 25 guides remain drafts; zero approved guides and zero approved product images. No production deploy, indexing, Pinterest publishing, DNS or public release action.

### Next steps
1. Complete one successful full CI run for the current PR head.
2. Continue the practical UK-first editorial pass on the remaining guides, with focus on dated/legacy models, useful verdicts, sources and shopping clarity.
3. Verify preview rendering, SEO safeguards and affiliate destinations.
4. Present the consolidated launch candidate for explicit release sign-off.


## 19 November 2026 — Epson EF-21G correction
- Guide #20 updated to the UK-listed Epson EF-21G (SKU V11HB35340), with UK source, identifier, specs and clear distinction from discontinued EF-21W. Source URL is recorded in the catalogue and audit ledger. Commit: `c64145e14d07686b1c54b34c645c3e097ac9d909`.
- CI has not yet completed successfully for the current content head; #681/#683 were cancelled. Keep validation open.


## 19 November 2026 — Full CI #703 verified and artifact reviewed (21:20 UTC)

- GitHub Actions run #703 / ID `44398753742` completed with conclusion **success** on PR head `de3e612c896d924ffe7bce81d83768a64c234880`. Job `build-and-audit` completed all 19 substantive steps, including type/content checks, importer unit and isolated integration tests, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe, Lighthouse, consolidated report and artifact upload.
- Artifact `smartpickhub-quality-reports`, ID `14472018692`, was downloaded and inspected. Catalogue: 25 guides / 100 products; 100 US and 100 UK URL-construction checks; zero validation errors. Smoke test: 29 generated HTML pages, all passed with zero route errors. This verifies URL construction, not live retailer listing availability.
- Dependency report: npm audit returned 0 vulnerabilities across 362 dependency entries at this run. This is point-in-time evidence only; retain the existing picomatch advisory review/expiry checkpoint until separately re-evaluated. Do not infer a patched package solely from a clean audit feed.
- Accessibility: 28/28 routes audited, zero axe violations, 27 incomplete contrast checks. The incomplete items are manual-review cases, mainly gradient-background contrast and non-text-only glyphs; they are not counted as violations but are not considered manually cleared.
- Lighthouse sample: homepage desktop/mobile, guide index, affiliate disclosure and first guide template. All five scored 100 Performance, 100 Accessibility and 100 Best Practices. SEO scores were 66–69 because the preview intentionally blocks crawling/noindex. Do not remove preview protections to raise SEO scores.
- Product image readiness: 0 approved images, 0 complete candidates awaiting human review, 100 products without images. No image has been authorised for display.
- Preview safety report confirms `robotsTxtDisallowAll=true`, `noindexVerified=true`, `publicPublicationEnabled=false`.
- The consolidated report's `commit` value `700db2eed1271f6fe15b7710233c48b67e32bc7a` is the GitHub Actions `GITHUB_SHA` for the synthetic pull-request merge ref. It is expected to differ from the PR source head `de3e612...`; the workflow run metadata and artifact metadata both bind this run to the source head `de3e612...`. This is not a source-head mismatch.
- PR #1 remains open and Draft. No guide approvals, product-image approvals, merge, production deployment, indexing, Pinterest publishing, DNS or production setting changes occurred.

### Next actions
1. Continue the practical UK-first editorial pass, prioritising current-buy relevance, useful buyer-fit verdicts and material safety/compatibility facts.
2. Complete rendered-state manual contrast checks for the 27 axe incomplete findings before claiming full accessibility sign-off.
3. Keep all guides as drafts and images unapproved until human review.
4. Revisit the picomatch advisory exception by its existing 2 December 2026 review date; do not silently extend or close it from npm audit output alone.
5. Update the handoff and audit ledger whenever a new bounded batch is completed; run one full CI after the next coherent data batch.


## 19 November 2026 — CI #709 verified and robot-vacuum correction opened for review

- GitHub Actions CI #709 / run ID `44460841827` completed successfully on source branch head `56ffa6c79849c278101cff2330fd039c281506f1`. Its sole `build-and-audit` job completed all 19 substantive steps, including type/content checks, product-intake unit and isolated integration tests, catalogue/affiliate validation, keywords, static build, smoke tests, axe, Lighthouse, consolidated report and artifact upload.
- Reviewed artifact `smartpickhub-quality-reports`, ID `14499468672`. It reports 25 guides / 100 products; 100 US and 100 UK URL-construction checks; 29 generated HTML routes with zero smoke errors; npm audit 0 reported vulnerabilities across 362 dependency entries; axe 28/28 routes, zero violations and 27 incomplete items; five Lighthouse samples scored 100 Performance, Accessibility and Best Practices; SEO 66–69 remains expected under preview noindex/crawl protection. Product photos: zero approved/zero pending/100 without images. Preview report confirms robots disallow all, noindex and public publication disabled.
- Report provenance detail: workflow metadata and artifact metadata identify source head `56ffa6c79849c278101cff2330fd039c281506f1`; `latest-audit.json` itself records `c817718f702c109126ab041540fc97f88ba2da6c`. Do not silently reinterpret this difference: report-generator SHA provenance needs a separate explanation. The successful run is bound by GitHub workflow and artifact metadata to source head `56ffa6c`.
- Reviewed the robot vacuum guide (4 Roborock records) against official UK manufacturer sources. Corrected only model/region distinctions: Saros 10R is not relabelled as UK Saros 10; US Qrevo CurvX is not asserted equivalent to UK Qrevo Curv 2 Pro; Qrevo Edge 2 retains its exact UK listing; Qrevo 2 Pro preserves UK 25,000Pa vs US 20,000Pa manufacturer claims. No fifth product added; no price, rating, stock or ASIN introduced.
- Catalogue correction commit: `870b18ae31b508b88d57680ed44867270239f942` on isolated branch `research/robot-vacuum-uk-correction`. Pre-PR integrity check retained 25 guides / 100 products, exactly 4 robot-vacuum records, unique slugs, HTTPS sources and zero product images. All editorial approval statuses remain draft.
- Opened Draft PR #4 against `automation/bootstrap`: https://github.com/ralabsi95-spec/smartpickhub/pull/4 . One file changed (`src/data/products.json`), 40 additions / 28 deletions. PR head is `870b18ae31b508b88d57680ed44867270239f942`. No CI run was returned for this PR head at the time of the update; full validation is pending.
- PR #1 remains unchanged, Draft/open/unmerged. No merge, deployment, publication, indexing, WordPress, DNS or production configuration changes were made.

### Next actions
1. Inspect and complete the CI run for PR #4 head `870b18ae31b508b88d57680ed44867270239f942`; inspect its quality artifact and report SHA provenance.
2. Check Cloudflare Pages preview comment/deployment for PR #4 exact head; inspect the robot-vacuum route and confirm noindex/robots safeguards. A successful CI does not itself prove preview deployment.
3. Keep PR #4 Draft/unmerged and all guides unapproved pending review; do not merge or publish.
4. Continue next bounded UK-first guide correction only after the current PR's CI/preview evidence is stable; do not overlap commits or repeat the 25/100 catalogue import.
5. Keep 27 axe incomplete contrast findings open for manual rendered-state review and retain the existing security-exception review checkpoint.


## 19 November 2026 — CI #711 and live preview check

- CI #711 / run ID `44461860982` completed successfully on PR #4 branch head `700b8981d03c9f5859cbe492429920433963f98a`. All 19 substantive QA steps passed, including Astro checks, importer unit/integration tests, catalogue and affiliate validation, static build, 29-page smoke tests, axe on all 28 routes, Lighthouse sample audits, consolidated report and artifact upload.
- Artifact `smartpickhub-quality-reports`, ID `14500636930`, downloaded and reviewed. It reports 25 guides / 100 products; 100 US and 100 UK URL-construction checks; 29 generated HTML pages passing smoke checks; 28 axe routes with zero violations and 27 incomplete contrast/glyph checks; five Lighthouse samples with 100 Performance, Accessibility and Best Practices; npm audit with zero reported vulnerabilities in this run. Overall report status: `quality-passed-manual-accessibility-review-required`.
- Audit report `commit` is synthetic PR merge SHA `027985d34cd0a0972996fbe3e349a1dffb180a90`; GitHub workflow/artifact metadata bind the run to PR source head `700b8981d03c9f5859cbe492429920433963f98a`. This is expected for the pull_request merge ref and is recorded distinctly.
- Cloudflare Pages preview deployment for commit `700b898` succeeded: https://0ee68840.smartpickhub-preview.pages.dev/ . Branch preview: https://research-robot-vacuum-uk-cor.smartpickhub-preview.pages.dev/ . The separate Cloudflare Workers build check failed for the same commit; do not confuse it with the successful Pages preview.
- Live browser inspection confirmed the homepage and robot-vacuum guide render and all four Roborock product sections are visible. `robots.txt` returned `User-agent: * / Disallow: /`. One browser inspection reported no robots meta tag, while a second described `index, follow`; this conflicts with source `src/layouts/Layout.astro` which explicitly emits `<meta name="robots" content="noindex, nofollow" />`, and with CI smoke-test code/report, which explicitly checks for noindex on every non-404 page and passed. Treat this as an unresolved live-response/inspection discrepancy; do not remove the source noindex or robots disallow. Recheck exact deployed HTML before launch.
- Homepage counts are data-driven from catalogue length; current source says 25 guides and 100 products. This is the intended live count; no static 30+ count should be introduced.
- PR #4 remains Draft/open/unmerged. No production deployment, indexing, merge, DNS, WordPress or publication changes occurred.

### Launch-focused next actions
1. Verify exact live HTML robots meta on the successful Pages deployment and confirm noindex/nofollow plus robots disallow agree. Keep launch indexing disabled until explicit launch approval.
2. Complete the next practical UK-first content batch using sensible research thresholds; prioritize buyer usefulness and material compatibility rather than exhaustive regional SKU parity.
3. Run a single full CI and Pages preview check after that coherent batch.
4. Prepare launch checklist covering production Pages connection, canonical domain, sitemap/Search Console, affiliate disclosure, live Amazon UK link spot checks, analytics and rollback/backup. Do not activate production, indexing or public publishing without explicit owner approval.
5. Keep PR #1 and PR #4 Draft/unmerged until the owner approves the release candidate.


## 19 November 2026 — CI #712 and exact Cloudflare deployment inspection

- PR #4 latest source head at validation: `9da0bbc65b3d020b5a75a7bb65e9140ee617b931`; PR remains open, Draft, unmerged. Cloudflare Pages bot confirmed a successful unique deployment for this exact head: https://d822cf02.smartpickhub-preview.pages.dev/ . Separate Cloudflare Workers build for the same head failed; do not confuse the Pages deployment with the Workers build.
- CI #712 / run ID `44462460783` completed successfully for source head `9da0bbc65b3d020b5a75a7bb65e9140ee617b931`. All 19 substantive stages passed. Artifact `smartpickhub-quality-reports`, ID `14501070371`, downloaded and reviewed (local file `smartpickhub-ci712-reports.zip`). Audit report generated 2026-11-19 05:05:36 UTC records synthetic PR merge SHA `caed8527990805d42c9089634de84c5f7057f407`; GitHub artifact metadata binds the workflow to source head `9da0bbc...`. Keep those SHAs distinct.
- CI artifact: 25 guides / 100 products; 100 UK and 100 US affiliate URL-construction checks passed with tracking IDs `smartpickhubu-21` and `smartpickh0bc-20`; 29 generated HTML pages passed smoke tests; 28/28 axe routes, zero violations and 27 incomplete checks; five Lighthouse samples scored 100 Performance, Accessibility and Best Practices (SEO 66–69 under preview controls); npm audit clean with zero reported vulnerabilities. Images: 0 approved, 0 pending, 100 without approved images. Overall status: `quality-passed-manual-accessibility-review-required`.
- Important discrepancy: CI's generated audit says `noindexVerified=true` and `robotsTxtDisallowAll=true`, and source `src/layouts/Layout.astro` contains `<meta name="robots" content="noindex, nofollow" />`. However, a live inspection of the exact Pages deployment for head `9da0bbc` returned HTTP 200 and reported homepage `robots=index, follow`, `googlebot=index, follow`; robot-vacuum guide reported duplicate robots values `index, follow` and `all`, plus `googlebot=index, follow`. Live `/robots.txt` is exactly `User-agent: *\nDisallow: /\n`. The exact deployed HTML therefore conflicts with both source and CI's local static-build safety report. Do not assume the CI noindex result proves deployed Pages output is noindex. Investigate Cloudflare build/output configuration, environment variables, stale build/cache or HTML transformation before launch; do not remove the robots disallow or enable indexing while unresolved.
- Exact deployment canonical URLs point to `https://smartpickhub.com/` and `https://smartpickhub.com/guides/robot-vacuum-mop-combos/`, although the configured Astro fallback in `astro.config.mjs` is `https://smartpickhub.pages.dev` / `https://smartpickhub-preview.pages.dev`. Confirm the intended owned production domain and deployment environment before launch. The guide's observed OG URL also differs from its actual route path. Record as SEO/canonical consistency check, not a reason to change DNS now.
- The prior branch alias `https://research-robot-vacuum-uk-cor.smartpickhub-preview.pages.dev/` returned a stale/different page with legacy third-party ad/pixel scripts and must not be used as evidence for current commit. Prefer the unique deployment URL explicitly tied by Cloudflare to commit `9da0bbc`.
- No production deploy, merge, indexing, DNS change, public publishing, image approval or product import occurred. All guides remain drafts. PR #1 and PR #4 remain Draft/open/unmerged.

### Next actions
1. Diagnose why exact Cloudflare Pages deployment HTML differs from repository `Layout.astro` and CI smoke output. Inspect Pages build command/output directory, deployment environment variables (`PUBLIC_SITE_URL`, `DEPLOYMENT_ENV`, `CF_PAGES_BRANCH`), any redirects/headers/functions and generated HTML; make a targeted correction only after root cause is established.
2. Rebuild a fresh unique Pages preview and verify homepage + all guide templates have one consistent `noindex, nofollow` meta and correct canonical URLs while `robots.txt` remains crawl-blocked for preview.
3. Keep PR #4 Draft/unmerged and production/indexing disabled. Then continue UK-first guide readiness and image-rights work; do not repeat the 25/100 import.
4. Retain the 27 axe incomplete checks for proportionate manual rendered-state review and revisit the picomatch advisory by 2 December 2026.


## 19 November 2026 — CI #713 and latest Pages preview verification

- PR #4 latest head: `ac4d084d0e4864ad12f67bcaa86d378e5cdb82af`; PR #4 remains open, Draft, mergeable, unmerged. Cloudflare Pages bot explicitly associates a successful unique Pages deployment with commit `ac4d084`: https://7e819982.smartpickhub-preview.pages.dev/ . The separate Cloudflare Workers build failed for this commit; it is not the Pages deployment and does not invalidate the Pages success.
- CI #713 / run ID `44463257771` completed successfully against exact source head `ac4d084d0e4864ad12f67bcaa86d378e5cdb82af`. All 19 substantive stages passed. Artifact `smartpickhub-quality-reports`, ID `14501376332`, downloaded and inspected (local file `smartpickhub-ci713-reports.zip`). GitHub artifact metadata confirms `head_sha=ac4d084...`; `latest-audit.json` records synthetic PR merge SHA `35c1d70c8740b4a5dfc4ea23392d38392201fbb8`. Preserve this distinction.
- CI #713 report: 25 guides / 100 products; 100 US and 100 UK affiliate URL construction checks passed with the expected tracking IDs; 29 generated HTML pages passed smoke tests; 28 axe routes, zero violations and 27 incomplete checks; npm audit 0 vulnerabilities in 362 dependency entries. Lighthouse samples: homepage desktop performance 99, mobile 100; Accessibility and Best Practices 100; SEO 66 under preview crawl protection. Product image audit: 0 approved, 0 pending, 100 without images. Overall `quality-passed-manual-accessibility-review-required`; local static audit records `noindexVerified=true`, `robotsTxtDisallowAll=true`, `publicPublicationEnabled=false`.
- Live browser inspection of unique Pages deployment `7e819982` returned HTTP 200 and rendered the homepage and robot-vacuum guide. It reported no robots/googlebot/canonical/og:url tags on homepage, but reported guide-level robots and googlebot as `index, follow, max-image-preview:large, max-video-preview:large`, with canonical/og:url `https://smartpickhub.com/guides/robot-vacuum-mop-combos/`. `/robots.txt` returned exactly `User-agent: *\nDisallow: /\n`. This still conflicts with repository `src/layouts/Layout.astro` (shared layout emits noindex/nofollow and canonical on all pages) and CI smoke-test (asserts noindex and HTTPS canonical for every non-404 page). Browser agent could not verify the commit from page HTML itself, but Cloudflare's Pages deployment comment independently confirms the unique URL belongs to commit `ac4d084`.
- Re-read `src/pages/index.astro`: homepage imports the shared `Layout` component, same as guide page. Re-read `src/layouts/Layout.astro`, `public/_headers`, `public/robots.txt`, `.github/workflows/build-check.yml`, and `scripts/smoke-test.mjs`. No obvious _headers override is present; smoke test checks every non-404 generated page for noindex and canonical. Thus root cause remains unknown; possible live inspection/parser mismatch or Cloudflare Pages response/transform/environment issue. Do not modify SEO directives speculatively.
- A follow-up browser run was started to inspect literal `view-source:` HTML and X-Robots-Tag response headers (run ID `50874a3b-613c-44ae-a408-533f39bc5f6f`); it remained running at handoff. Resume polling this same run; do not start a duplicate.
- No code/data changes made in this session; no merge, production deployment, indexing enablement, DNS, publication, image approval or product import occurred. PR #4 and PR #1 remain Draft/open/unmerged. All guide editorial statuses remain draft.

### Next actions
1. Resume browser run `50874a3b-613c-44ae-a408-533f39bc5f6f` and obtain literal response-source evidence for homepage + guide and response headers; if it fails or is inconclusive, use another read-only method before changing code.
2. Diagnose whether deployed HTML truly differs from static build or browser DOM inspection is unreliable. Check Pages build command/output directory and environment only through read-only dashboard evidence; do not change settings.
3. Add/retain a dedicated deployed-preview verification gate once the root cause is known: fetch exact Pages unique URL, assert one noindex/nofollow robots meta, canonical and disallow-all robots.txt on all public HTML routes. Avoid accepting local build tests as substitute for deployed response verification.
4. Keep preview blocked from crawlers and all public release actions disabled. Continue UK-first content and image-rights preparation without repeating catalogue import.


## 19 November 2026 — CI #714 and latest Pages build

- Latest PR #4 head at this checkpoint: `d8d058f64e80b2a1bf925dfd7541ca0ed8e86f3c`; PR remains Draft/open/unmerged. Cloudflare Pages bot explicitly confirms a successful unique preview deployment for this exact head: https://61eb4c35.smartpickhub-preview.pages.dev/ . The separate Cloudflare Workers build for this head failed; do not confuse the Workers failure with the successful Pages deployment.
- CI #714 / run ID `44466971251` completed successfully against exact source head `d8d058f64e80b2a1bf925dfd7541ca0ed8e86f3c`. All 19 substantive stages passed. Artifact `smartpickhub-quality-reports`, ID `14503170698`, downloaded and reviewed (local `smartpickhub-ci714-reports.zip`). GitHub artifact metadata binds the run to source head `d8d058f...`; `latest-audit.json` contains synthetic PR merge SHA `002c50787c41e08958d91f4b45f128fd875c9df5`.
- CI #714 results: 25 guides / 100 products; 100 UK + 100 US URL-construction checks; 29 HTML pages smoke-tested, zero smoke errors; 28 axe routes, zero violations, 27 incomplete checks; npm audit zero reported vulnerabilities across 362 dependencies; product image audit 0 approved, 0 pending, 100 without images. Preview audit says noindex verified, robots disallow all, public publication disabled. Overall remains `quality-passed-manual-accessibility-review-required`.
- Live inspection of the prior unique Pages deployment `7e819982` reported homepage head tags absent and guide-level robots/googlebot `index, follow, max-image-preview:large, max-video-preview:large`, with canonical/og:url pointing to `smartpickhub.com`; `robots.txt` disallows all. This conflicts with the shared Layout source and local CI output. A more precise follow-up browser task was started to inspect literal `view-source:` HTML and X-Robots-Tag headers (run ID `50874a3b-613c-44ae-a408-533f39bc5f6f`), but it remained stuck at step 32 without returning results. Do not treat it as completed evidence. Need re-run via a different read-only method or inspect current unique deployment `61eb4c35` with a robust raw-source fetch.
- No source code or product data changed in this checkpoint; only project documentation changed. No production deployment, merge, DNS, indexing, publication, image approval or catalogue import occurred.

### Next actions
1. Investigate the deployed HTML mismatch using a reliable raw HTTP response method on latest Pages unique URL `https://61eb4c35.smartpickhub-preview.pages.dev/`; inspect homepage + guide HTML and response headers. Browser DOM/SEO extraction has been inconsistent and view-source run is stalled.
2. If raw response confirms the mismatch, inspect Pages project build command/output directory/environment configuration read-only, then implement a minimal safe fix and add a deployed-preview response gate. Keep `robots.txt` Disallow-all until release is explicitly approved.
3. Continue UK-first content readiness and image licensing work after resolving the release-safety discrepancy; do not repeat the 25/100 import.


## 19 November 2026 — CI #715 and newest Pages preview

- PR #4 latest source head at this checkpoint: `a515c82ed88f50c9946de8345b340b11fd7a1ca9`; PR remains Draft/open/unmerged. Cloudflare Pages bot confirms successful unique preview for exact commit `a515c82`: https://866a609e.smartpickhub-preview.pages.dev/ . Separate Cloudflare Workers build failed for this head; it is distinct from the successful Pages deployment.
- CI #715 / run ID `44467598451` completed successfully on exact source head `a515c82...`; all 19 substantive stages passed. Artifact `smartpickhub-quality-reports`, ID `14501724886`, downloaded and inspected (local `smartpickhub-ci715-reports.zip`). GitHub artifact metadata binds it to source head `a515c82...`; audit JSON contains synthetic PR merge SHA `017336ec937444dd1f29b037e29a90d43fcc7e27`.
- CI #715 report: 25 guides / 100 products; 100 US and 100 UK URL-construction checks; 29 HTML pages passed smoke tests; 28 axe routes, zero violations and 27 incomplete checks; npm audit zero reported vulnerabilities across 362 dependency entries. Lighthouse: homepage desktop performance 99, mobile 100; Accessibility and Best Practices 100; SEO 66 under preview crawl restrictions. Product images: 0 approved, 0 pending, 100 without images. Preview audit: noindex verified, robots disallow all, public publication disabled. Overall `quality-passed-manual-accessibility-review-required`.
- Raw response discrepancy remains unresolved. Previous browser inspections of unique Pages previews reported homepage meta/canonical omissions and guide `index, follow` despite shared Astro Layout source and CI's local build proving `noindex, nofollow` and canonical on every non-404 route. `robots.txt` continues to disallow all crawlers. The follow-up browser task requesting literal `view-source:` HTML and X-Robots-Tag headers (run ID `50874a3b-613c-44ae-a408-533f39bc5f6f`) is still running/stalled at its HTML extraction step; no raw-source result obtained. Do not infer root cause or change robots/canonical settings until reliable raw HTTP evidence exists.
- This checkpoint adds documentation only. No code/data changes, merge, production deployment, DNS change, indexing enablement, public publication, image approval or catalogue re-import occurred. PR #1 and PR #4 remain Draft/open/unmerged.

### Next actions
1. Inspect the latest unique preview `https://866a609e.smartpickhub-preview.pages.dev/` using a reliable raw HTTP response method, capturing the exact homepage and guide HTML head plus response headers; if browser view-source remains stuck, use a different retrieval method.
2. Diagnose Cloudflare Pages build/output/environment or possible browser inspection mismatch. Do not modify settings speculatively. Keep preview crawl-blocked.
3. Add a deployed-response verification gate once diagnosis is established. Continue UK-first content and legal product-image sourcing in parallel without repeating the existing catalogue import.


## 19 November 2026 — owner-authorized release preparation
- Owner explicitly requested: continue and publish online. This supersedes the earlier no-merge/no-publication restrictions for release preparation.
- PR #4 (UK-first Roborock model distinctions) was marked ready and squash-merged into `automation/bootstrap`; merge commit `93626f0f3befa0a6982f208e32022bde7e157e0a`. Its exact source head `9c9e7c2b8e11ba69efd0f9c717ce5059e672ba71` passed CI #716 / run ID `44468046199` (all 19 substantive steps successful).
- PR #1 (Astro MVP foundation) was then marked ready and squash-merged into `main`; merge commit `31a7d141169033fd01005543143a03d8715104d8`. The merged tree is the CI-verified PR #4 tree plus the PR merge metadata; no application edits were made during release preparation.
- Production deployment is NOT complete. The approved Cloudflare Pages production target `https://smartpickhub.pages.dev/` remains disconnected from Git according to the latest verified project record. The separate `smartpickhub-preview` Pages project is not production.
- Production indexing protections intentionally remain in source: `Layout.astro` emits `noindex, nofollow`, and `public/robots.txt` contains `Disallow: /`. The previous preview raw-response discrepancy remains unresolved; do not remove protections or submit sitemap/IndexNow until deployed response headers/HTML are verified.
- Editorial status is unchanged: 25 guides / 100 product records, 0 guides approved for publication, and 0 approved product images. No catalogue re-import, product-image approval, price/rating/ASIN fabrication, DNS change, or WordPress modification occurred.
- Next: connect the existing Cloudflare Pages production project to GitHub repository `ralabsi95-spec/smartpickhub`, production branch `main`, with Astro build command `npm run build` and output directory `dist`; then verify the actual production response before enabling indexing. The Cloudflare connection and deployment have not yet been performed.


## 19 November 2026 — Cloudflare production connection audit (06:26 UTC)
- Owner clarified the deployment architecture: GitHub + Cloudflare only. InfinityFree/WordPress are out of scope and must not be used for this project; owner plans to cancel InfinityFree later.
- Detailed Cloudflare dashboard inspection corrected an earlier inconsistent result: Pages project `smartpickhub` currently shows **No Git connection**. The prior quick overview incorrectly suggested it was connected; rely on the detailed Settings/Build audit.
- Production branch configured in Cloudflare: `main`. Latest production deployment remains the original initialization commit `c5dca882`, timestamp `2026-11-17T09:03:37.525031Z`, URL `https://c5dca882.smartpickhub.pages.dev`.
- Latest preview deployment is `50ddaa93`, generated from manual/CLI HEAD, timestamp `2026-11-19T06:20:40.913439Z`, URL `https://50ddaa93.smartpickhub.pages.dev`. Another preview is `b55d7810`.
- Cloudflare Build settings were blank: no configured build command, output directory or build steps. Correct project settings should be `npm run build` and `dist` for this Astro static site, after connecting repository `ralabsi95-spec/smartpickhub` and production branch `main`.
- Current preview `50ddaa93` was checked: homepage and guides index serve the expected new Astro site; both return meta robots `noindex, nofollow`; `robots.txt` returns `User-agent: * / Disallow: /`. Sitemap index exists but points to canonical production host. Do not enable indexing yet.
- Attempt to fetch `https://smartpickhub.pages.dev/` and the older hashed production deployment via the read-only extraction service returned 404; treat the canonical production host as not independently verified until direct browser/HTTP response is confirmed after connection.
- No Cloudflare settings, Git connection, deployment, DNS or indexing settings were changed in this audit. The user has explicitly authorized publishing; next operational step is to use Cloudflare Pages Settings > Build > Connect to Git, select GitHub repo `ralabsi95-spec/smartpickhub`, then configure `main`, `npm run build`, and `dist`. This connection/authorization remains pending.
- Product/content status unchanged: 25 guides / 100 product entries, 0 editorially approved guides, 0 approved product images. No public editorial launch approval inferred from deployment consent.


## 19 November 2026 — first Git-connected production deployment and owner visual checks

- Owner connected Cloudflare Pages production project `smartpickhub` to GitHub repository `ralabsi95-spec/smartpickhub`. Cloudflare Settings screenshot confirms production branch `main`, build command `npm run build`, output directory `dist`, and automatic deployments enabled.
- Cloudflare Deployments screenshot confirms a successful Production deployment sourced from `main` commit `515c0d5`, deployment URL `https://3ffea89c.smartpickhub.pages.dev`, with production domain `https://smartpickhub.pages.dev`.
- Owner opened `https://smartpickhub.pages.dev/`; screenshot visually confirms the Astro homepage renders with SmartPickHub branding, navigation, hero section, and US/UK messaging.
- Owner opened `https://smartpickhub.pages.dev/guides/`; screenshot visually confirms the Buying Guides index renders with search input, category selector, and **25 guides available**. Three guide cards are visible in the captured viewport, with cover artwork, titles and descriptions.
- This is the first confirmed Git-connected production deployment. The root page and guides index are visually confirmed by owner screenshots; individual guide detail pages, all 25 routes, product links, mobile layout, raw response metadata, canonical tags, deployed robots meta and headers are NOT yet verified on production.
- Preserve crawl protection until production response metadata is checked and editorial launch approval is separately obtained. The screenshots do not establish whether production HTML currently has noindex; do not infer this from the prior preview checks.
- Catalogue remains 25 guides / 100 product records, 0 guides editorially approved and 0 approved product images. No product re-import, content approval, DNS change, sitemap submission or indexing activation was performed.
- Next action: inspect the first guide detail page (Home Office Ergonomics) and verify its content, exact route, and affiliate link behavior; then perform a production route/SEO/robots verification. Continue to distinguish successful deployment from editorial launch readiness.


## 19 November 2026 — owner visual verification of first production guide detail page

- Owner opened the exact production route `https://smartpickhub.pages.dev/guides/home-office-ergonomics-us-uk/`; screenshot confirms the guide detail page loads on the production domain.
- Visible elements verified: breadcrumb navigation (Home / Buying Guides / Home Office Ergonomics), category label, full title, summary, research/update metadata (Updated 2026-11-16; US and UK marketplace links), prominent draft warning ("Research draft — requires human review before publication"), explanatory paragraph that summaries are based on manufacturer documentation rather than hands-on test results, and guide cover artwork.
- The draft warning and no-hands-on-testing statement are visible and appropriately transparent. This visual check does not validate factual accuracy of every product specification or confirm all Amazon links.
- Below-the-fold product cards, exact Amazon UK/US destinations and tracking tags, link-level paid-link disclosure, and the complete guide content remain unverified. Raw production HTML robots/canonical/header checks also remain outstanding.
- No code/content changes, product imports, editorial approvals, image approvals, indexing changes, DNS changes or sitemap submissions were made in this checkpoint.
- Next action: inspect below the fold on this guide, starting with the first product card; verify model, key specs, UK/US links and paid-link disclosure, then continue route/SEO/robots checks.


## 19 November 2026 — owner visual verification of first product card on production

- Owner scrolled the production Home Office Ergonomics guide to the first product card, **Logitech MX Vertical Advanced Ergonomic Mouse**.
- Screenshot confirms the product title and number, intentional image placeholder ("Product photo under verification"), explanation that an image will be shown only after source and usage rights are confirmed, Best for summary, visible paid-link disclosure, separate Amazon US and Amazon UK search buttons, product verdict, potential advantages and points to consider.
- The image placeholder is expected: current product-image audit records 0 approved product photos; do not replace it with an unlicensed or unverified image.
- Source inspection of src/data/products.json confirms both identifiers for this product are model-name search phrases, not ASINs. src/config/affiliate.ts generates Amazon /s?k=... search destinations for non-ASIN identifiers and adds the correct marketplace tags: US smartpickh0bc-20, UK smartpickhubu-21. src/pages/guides/[slug].astro marks links rel="sponsored nofollow noopener" and clearly states the search results are not a verified direct product listing. No exact live Amazon destination was clicked/verified in the owner's screenshot.
- Visible copy is appropriately cautious: the verdict says it is a candidate and asks buyers to check hand fit and regional model details; advantages/limitations are shown without a universal-best or hands-on-testing claim.
- The template currently renders an early affiliate CTA above the verdict and another affiliate CTA after manufacturer source/limitations; the screenshot confirms the early CTA. Review the lower card section to ensure the manufacturer source and second CTA are clear and not confusing or excessively repetitive.
- No product image was approved, no product data or affiliate identifier was changed, no editorial approval/indexing/DNS change was made, and no product re-import occurred.
- Next action: inspect the lower portion of this first product card (manufacturer source, model caveats and second CTA), then click-test the Amazon UK search destination in a controlled way and verify its tracking tag without purchasing.


## 19 November 2026 — lower first product card and second product transition visually verified

- Owner screenshot of the production Home Office Ergonomics guide confirms the lower portion of product 01 (Logitech MX Vertical Advanced Ergonomic Mouse): manufacturer-source label and official specifications link with supporting source note; a clear statement that Amazon links open marketplace search results for the model phrase rather than a verified direct listing; paid-link disclosure; and the second pair of US/UK Amazon search buttons.
- Screenshot also shows product 02 (Logitech Lift Vertical Ergonomic Mouse) beginning immediately after product 01, with its own image-rights placeholder, Best for text, paid-link label and first pair of marketplace search buttons.
- This verifies the page template's two CTA placements per product: an early CTA near the product introduction and a second CTA after detailed pros/cons and manufacturer-source context. This may help readers who decide early or after reading, but mobile usability and whether the repetition feels excessive still need testing. Do not remove either CTA without evidence and owner approval.
- Manufacturer source attribution and marketplace-search caveat are visible and helpful; they distinguish manufacturer documentation from retailer availability and prevent search URLs being mistaken for direct product listings.
- No code, product records, image approvals, affiliate IDs, editorial status, DNS, indexing or sitemap settings were changed. No purchases or live Amazon link click-tests were performed.
- Next action: complete a mobile-width visual check of one guide and inspect the bottom of the remaining product card for manufacturer source/disclosure consistency; then test a generated Amazon UK search URL without purchasing and verify the tracking tag.


## 19 November 2026 — first mobile responsive visual check (390 × 816)

- Owner provided a Chrome responsive-mode screenshot at viewport 390px wide × 816px high, focused on the first Home Office Ergonomics product card.
- Visual result: card fits the viewport width; no horizontal overflow is visible in the captured region; product title wraps naturally over two lines; image-rights placeholder remains readable; descriptive copy and verdict wrap cleanly; US and UK affiliate buttons stack vertically and span the available card width, providing large touch targets.
- No obvious clipping or overlapping is visible in the captured product-card region. This is a visual spot-check only, not a full mobile QA pass: mobile navigation, guide comparison table, full page, footer, and other viewport widths remain to be checked.
- No CSS or application changes were made. Do not change button sizing based on this screenshot alone; current stacked full-width buttons appear usable.
- Next action: at the same 390px viewport, inspect the top navigation and guide comparison table (especially horizontal overflow), then optionally check a narrow 320–360px viewport.


## 19 November 2026 — mobile header check and editorial draft-label decision

- Owner supplied a Chrome responsive screenshot of the production guide header at the 390px mobile viewport. Logo/brand, all four navigation links (Home, Buying Guides, RSS, Affiliate Disclosure), breadcrumb, category pill, title, summary, metadata and draft notice are visible and wrap without obvious horizontal overflow in the captured area. This is a visual spot-check, not a complete mobile accessibility or interaction test.
- Decision: retain the visible `Research draft — requires human review before publication` notice for now. The catalogue still contains 25 guides with zero editorially approved guides. Removing the notice before review would imply an approval status that has not been granted. After a guide is fact-checked and explicitly editorially approved, remove the draft notice only for that guide; keep it on all unapproved guides. This is a temporary editorial-state indicator, not a permanent design element.
- No site code, guide status, content, DNS, indexing or deployment settings were changed in this checkpoint.
- Next: continue mobile QA (especially comparison table and navigation interactions), then verify production robots/canonical metadata and affiliate destination behavior. Keep noindex/crawl protection until editorial release is separately approved.


## 19 November 2026 — owner-authorised public indexing and SEO launch preparation

- Owner explicitly instructed to complete stabilisation, SEO/content/marketing preparation, gradual traffic launch, and direct indexing through available search-engine tools. This is the current release instruction and supersedes older statements that production indexing must remain disabled, while preserving factual accuracy and affiliate-policy safeguards.
- Applied to `main` (Cloudflare Pages automatic deployment is enabled):
  - `src/layouts/Layout.astro`: changed robots meta from `noindex, nofollow` to `index, follow, max-image-preview:large`.
  - `public/robots.txt`: changed crawler rule to `Allow: /` and added `Sitemap: https://smartpickhub.pages.dev/sitemap-index.xml`.
  - `src/pages/index.astro`: changed launch-facing homepage wording from guides “in development” to buying guides / products compared.
  - `src/data/products.json`: replaced the visible “Research draft — requires human review before publication” text across all 25 guides with the transparent public label “Research-led guide — verify the exact model and current retailer listing before purchase.” This is a publication-state wording change, not a claim of hands-on testing; guide text continues to state the manufacturer-research basis.
  - `scripts/ping-indexnow.mjs`: set the canonical production origin and public IndexNow key fallback; added a public key verification file under `public/`.
  - Added `.github/workflows/indexnow-notify.yml`, manually dispatchable after Cloudflare serves the new key file. It builds the site and then verifies the deployed key endpoint before sending IndexNow notifications.
  - Added `SEO_LAUNCH_PLAN.md` with UK-first / US-secondary intent map for all 25 existing guides, tiered commercial-intent priorities, content rules and measurement plan.
- Relevant commit SHAs: Layout `97ca2f94f4daefe31fad8a1a72fbeedddff6fa0a`; robots `a3dbd4e41d6b1943f5f8dfc513d95915b4418c58`; homepage `815236b4eb068e8e75a205dc6030c3393317ea51`; catalogue labels `049704d14560124e1d1fcb55be039772d6fb3c3c`; IndexNow script `84629fe6fa00c24dafa0ea7a2cf66639a589790d`; key file `53d2d7b53b47b932c190eeb56b039df8de2b0b76`; SEO plan `e90c2986c87ee17d39b875a0f7ca8d90a9f269e8`; workflow `4733a5ce4cf8e4eca29365a189773d28f26c8deb`.
- Important evidence limit: `keyword-clusters.json` is an unvalidated seed map; it explicitly contains no measured search volume, CPC, keyword difficulty or conversion data. `SEO_LAUNCH_PLAN.md` labels its priorities as intent/SERP hypotheses, not proven winning keywords. Live SERP research found active buyer-guide competition for air fryers, robot vacuum/mop, cordless vacuums, espresso machines and dash cams; do not infer volume or traffic from SERP presence.
- Search platform status: no connected Search Console, Bing Webmaster Tools, GA4 or keyword analytics connector was confirmed in this session. Google sitemap submission and URL Inspection require owner access in Search Console. IndexNow does not notify Google; the workflow is ready but has NOT been run. It must only run after the live production host serves the new public key file.
- Search-engine guidance: Google sitemap submission is a discovery hint, not a ranking/indexing guarantee; URL Inspection can request recrawl for a few priority URLs. Bing recommends IndexNow for participating engines and confirms submissions do not guarantee indexing. Google does not participate in IndexNow.
- Current verification limit: source changes are committed to `main`, but this session has not independently confirmed the final Cloudflare production deployment, live robots/meta response, sitemap availability, Search Console verification, Bing site verification, IndexNow acceptance or any page actually appearing in an index. Do not claim indexed until platform reports confirm.
- No product import, fabricated price/rating/review, direct ASIN invention, unverified product image approval, DNS change, or paid campaign spend was made. The 25 guides / 100 product catalogue remains intact.
- Next actions: (1) verify the latest production deployment and live `robots.txt`, homepage robots meta, canonical URLs and sitemap; (2) verify the site in Google Search Console and Bing Webmaster Tools; (3) submit the sitemap to Google and Bing; (4) trigger the IndexNow workflow only after its public key URL returns the exact key; (5) connect OpenSEO/Ahrefs for keyword/competitor metrics and Windsor.ai or GA4 for traffic/conversion reporting; (6) review first 14/30-day query and affiliate-click data before calling any keyword a winner.


## 19 November 2026 — Google Search Console verification tag added

- Owner supplied the exact Google Search Console HTML verification meta tag for the URL-prefix property `https://smartpickhub.pages.dev/`.
- Added the tag to the shared `src/layouts/Layout.astro` head so it is emitted site-wide: `<meta name="google-site-verification" content="zH0EHPDRo5BI_WTJ_OnnD-aDAMc8U0ZORttx4Xs4TCs" />`.
- Commit: `55aa72e8f21c8edea56b963bb013b6e1bb0f7fb4`.
- This is a source change on `main`; deployment and live HTML are not yet independently verified. Google ownership has NOT yet been verified. After Cloudflare Pages finishes deploying, return to the Search Console dialog and click VERIFY. Keep this meta tag in place permanently to retain verification.
- No other SEO, page, catalogue, or hosting settings were changed in this step.


## 19 November 2026 — Google Search Console ownership verified

- Owner confirmed successful Google Search Console ownership verification for URL-prefix property `https://smartpickhub.pages.dev/` using the HTML meta-tag method.
- Screenshot confirms the green “Ownership verified” state and instructs that the verification meta tag must remain in the homepage head. The tag remains in `src/layouts/Layout.astro`; do not remove it.
- Search Console overview screenshot at verification time showed 1 indexed page and 42 not indexed pages. This is an initial property status, not a failure by itself; inspect the Page indexing reasons before deciding which URLs need action. Do not submit mass individual indexing requests without reviewing canonical/noindex/duplicate/redirect/excluded reasons.
- Next: open the property, submit `https://smartpickhub.pages.dev/sitemap-index.xml` under Sitemaps, then inspect the Page indexing report and URL Inspection for the homepage plus a small sample of priority buying guides. Record reasons and statuses; indexing requests are not guarantees.
- No page content, robots settings, DNS, or hosting settings changed in this verification step.


## 19 November 2026 — GSC sitemap investigation and UK SEO baseline

- Production host: `https://smartpickhub.pages.dev/`. Google Search Console URL-prefix ownership is verified; verification meta tag must remain in `src/layouts/Layout.astro`.
- Owner screenshots show GSC status `Couldn't fetch` for both `/sitemap-index.xml` and `/sitemap-0.xml`, with 0 discovered pages. A live URL Inspection test for `/sitemap-index.xml` says `URL is available to Google` / `Page can be indexed`; this does NOT prove sitemap parsing succeeded.
- Independent live fetch reads `sitemap-index.xml` and its child `sitemap-0.xml`; child lists 28 URLs (homepage, disclosure, guides hub, 25 guide pages). `robots.txt` allows crawling and references the index sitemap. Do not claim GSC accepted the sitemap yet. No site source changes made to address this unresolved discrepancy.
- OpenSEO project created: `SmartPickHub`, UK English, ID `ec446a80-0f42-4af4-9069-47c762d41f29`. A 28-page crawl completed: all 28 pages HTTP 200, indexable and in sitemap; no critical crawl/indexability issue. Informational findings only: 21 titles longer than 60 chars; 4 meta descriptions longer than 160 chars. Do not bulk-change metadata without a reviewed keyword map and approval.
- UK keyword research (five seed clusters: air fryer, robot vacuum+mop, cordless vacuum, espresso/Sage, dash cam) saved 24 curated commercial/transactional terms with volume, KD, CPC and intent to OpenSEO. Illustrative high-priority terms: `best cordless vacuum cleaner` (27,100 volume, KD 8, CPC 2.50); `sage coffee machine` (74,000, KD 8, CPC 0.64); `best air fryer in uk` (8,100, KD 2, CPC 0.84); `best dash cam uk` (5,400, KD 11, CPC 1.24); `best robot vacuum and mop uk` (1,300, KD 9, CPC 1.99). Metrics are UK keyword-tool estimates, not traffic or affiliate-revenue guarantees. Five live SERP samples confirm strong competition from publishers, retailers and brands.
- OpenSEO project context records SmartPickHub business positioning and five priority money pages. OpenSEO itself currently has no Google Search Console or GA4 account connected; manual GSC property verification is separate from connecting the account inside OpenSEO.
- Next: resolve why GSC sitemap parser reports fetch failure despite live URL availability; then inspect GSC Page indexing reasons and request indexing for a small set of priority guide URLs. Connect the verified `https://smartpickhub.pages.dev/` property inside OpenSEO before using first-party query/click data. Do not claim indexing or IndexNow notification until explicitly confirmed.


## 19 November 2026 — safe publishing automation bootstrap (isolated branch)

- Owner directed us to ignore the unrelated Windsor/GA4 properties `ispjo-jordan` and `smartpickhub.infinityfree.me`. They are not SmartPickHub sources and must never be used in reporting, analytics, or SEO decisions. The only project site is `https://smartpickhub.pages.dev/`.
- The originally requested branch `automation/bootstrap` already existed but was severely divergent from current `main` (compare showed 389 commits ahead and 34 behind). To avoid overwriting/rebasing an existing branch, created a clean branch from current `main`: `automation/bootstrap-20261119`. No changes were made to `main`.
- Audited existing publishing components before editing: Pinterest RSS endpoint, original 1000×1500 cover generator, optional Pinterest verification meta tag in Layout, IndexNow notifier, manual IndexNow workflow, and sitemap were already present. The work extends these rather than rebuilding them.
- Added explicit `publicationStatus: "draft"` to all 25 existing guides. Pinterest RSS and social snippets require BOTH `publicationStatus: "published"` and `editorialStatus: "Approved for publication"`. All 25 remain drafts; no guide was approved or automatically distributed.
- Updated Pinterest feed to RSS 2.0 with Atom self-link extension retained for existing smoke-test compatibility; Pinterest's documented feed format remains RSS 2.x / RSS 1.x (RDF), not an Atom feed. Every eligible item includes same-host canonical link, title, description, enclosure and media:content pointing to the generated 1000×1500 PNG.
- Added post-build `dist/social-snippets.json` for approved guides only, including X text under 260 characters and Markdown teaser for Medium/Substack with canonical source URL. Current expected item count is zero because all guides remain draft.
- Added `dist/deployment.json` commit marker using Cloudflare Pages `CF_PAGES_COMMIT_SHA` and branch metadata.
- Replaced static `public/robots.txt` with Astro-generated `src/pages/robots.txt.js`: exact production host `smartpickhub.pages.dev` allows crawling and declares sitemap; preview/non-production builds return `Disallow: /`. Shared Layout now sets `noindex,nofollow` for preview builds. CI preview build explicitly sets `DEPLOYMENT_ENV=preview`.
- Extended CI with distribution validation: RSS 2.0 format, publication gate, same-host links, all 25 original 1000×1500 PNG covers, social bundle count, canonical references, and X character limits.
- Upgraded IndexNow workflow to run after successful `Astro Build and Quality Checks` on main, wait for Cloudflare to serve the exact commit marker, then verify live robots, homepage robots meta, deployed key file and sitemap alignment before notifying. Manual dispatch restricted to main. This workflow is not run from the preview branch and no IndexNow notification was sent.
- CI run `44493257988` on branch head `0cf2b464cf7fe5b10b7419cd961384639e09b8ef` completed successfully. Confirmed: Astro check, importer self/integration tests, catalogue validation, build, Pinterest distribution check, smoke tests, axe accessibility across every catalogue route, Lighthouse homepage desktop/mobile, Lighthouse representative templates, audit report and artifact upload all passed. An earlier pre-fix run failed only because smoke tests expected an RSS self-link; this was corrected, and the successful run includes the correction.
- Official Pinterest help confirms RSS auto-publish requires Business account + claimed website; accepts RSS 2.x / RSS 1.x, not Atom; uses item title/description and image/enclosure/media:content; each item link must be under claimed site; pins may appear within 24h, oldest first, maximum 200/day. See `PUBLISHING_AUTOMATION_BOOTSTRAP.md` and https://help.pinterest.com/en/business/article/auto-publish-pins-from-your-rss-feed.
- IndexNow is not Google submission and does not guarantee indexing. It notifies participating engines only; do not claim direct ChatGPT Search indexing. Google remains via Search Console. Bing Webmaster verification and sitemap registration still require owner authorization.
- Owner actions still required: (1) claim `https://smartpickhub.pages.dev/` in Pinterest Business, (2) supply Pinterest verification code through Cloudflare Pages build variable `PINTEREST_VERIFY_CODE`, (3) verify site and submit sitemap in Bing Webmaster Tools, (4) investigate existing Google Search Console sitemap `Couldn't fetch` issue. Do not use the unrelated GA4 or Search Console properties listed above.
- Current branch is ready for draft PR / Cloudflare preview review only. Do not merge to main without owner approval. No live production deployment, Pinterest connection, RSS registration, guide approval, Bing verification, or IndexNow send occurred.


## 19 November 2026 — publishing automation merged with owner approval

- Owner explicitly approved continuation and merge of PR #5. PR #5 merged by squash at `347099ec604bbda231ba6e3b8ecf2e1d3bff515f` at 09:19:51 UTC.
- Pinterest domain verification code supplied by owner was added in `src/layouts/Layout.astro` as optional fallback behind `PINTEREST_VERIFY_CODE`; explicit environment variable takes precedence. Do not share or repurpose this verification token outside the SmartPickHub site.
- Production Cloudflare Pages and preview check-runs for the merge commit reported success. The full main-branch Astro Build and Quality Checks workflow was still running at the time of this note; verify final conclusion before claiming full post-merge CI success.
- Live fetch after merge confirmed homepage returns SmartPickHub page and production `robots.txt` allows crawling and declares `https://smartpickhub.pages.dev/sitemap-index.xml`. Live RSS endpoint returns valid empty approved-guides channel (expected: all 25 guides remain drafts). Live `/deployment.json` returned 404 in the first post-merge fetch; therefore IndexNow workflow has not yet been confirmed to see the expected deployment marker and must be monitored. Do not claim IndexNow notification sent.
- Pinterest verification tag deployment must be confirmed from live page source/verification check before telling owner to press Verify. Owner should only do this after the production deployment with the merged commit is confirmed.
- Google Search Console property for `https://smartpickhub.pages.dev/` was verified by the owner; its sitemap fetch issue (`Couldn't fetch`) remains unresolved and must be investigated separately. Old properties `ispjo-jordan` and `smartpickhub.infinityfree.me` are explicitly unrelated and must not be used.
- Pinterest profile currently has existing account/boards/followers; user unclaimed old InfinityFree website. Next owner step after verification: claim `https://smartpickhub.pages.dev/`, then connect the RSS feed once at least one guide is editorially approved. No pins have been auto-published.


## 19 November 2026 — five Pinterest RSS feeds merged; production rollout pending

- Owner explicitly approved merging PR #6 and deploying five board-specific Pinterest RSS feeds.
- PR #6 merged by squash to main at commit `41aa1da3d6cb7455f28dbfa3e83877f57f3022a7`. The merged change adds `src/pages/rss/[board].xml.js` and `PINTEREST_RSS_BOARD_MAPPING.md`; preserves the existing combined `/rss.xml`; assigns each of the 25 guide slugs to exactly one of the five existing boards.
- Five endpoints intended after production deployment: `/rss/home-office.xml`, `/rss/smart-home.xml`, `/rss/kitchen-home-tech.xml`, `/rss/travel-tech.xml`, `/rss/computing-gaming.xml`.
- Each endpoint includes a guide only when BOTH `publicationStatus === "published"` and `editorialStatus === "Approved for publication"`. All 25 guides remain drafts; feeds are expected to be valid but empty until editorial approvals. No guide status changed.
- PR CI run #739, commit `96c6857fb0a83488a4835ecf829ae299e24d4d17`, completed successfully: locked dependencies, Astro checks, product intake dry-run tests, catalogue/affiliate validation, build, Pinterest approved-only distribution validation, SEO/JSON-LD/affiliate smoke tests, axe accessibility for all catalogue routes, Lighthouse homepage desktop/mobile, representative templates, consolidated report and artifact upload all passed. Artifact `smartpickhub-quality-reports` created.
- Immediately after merge, a live fetch of all five production endpoints returned 404. Therefore Cloudflare production deployment is NOT yet confirmed and no Pinterest RSS URL may be entered/saved yet. Monitor Cloudflare deployment for main commit `41aa1da...`; once live, fetch all five endpoints and confirm HTTP 200, RSS 2.0 and expected empty channel before connecting in Pinterest.
- Pinterest website is already claimed/verified by owner as `https://smartpickhub.pages.dev/`. Owner has navigated to Pinterest Business > Import content > RSS > Connect RSS Feed. The form was left unsaved intentionally because production endpoints were not live.
- No Pinterest feed connection saved, no Pins created, no guides approved, and no production feed verified at this checkpoint.
- Search discovery status: Google Search Console URL-prefix property `https://smartpickhub.pages.dev/` is owner-verified; sitemap submission previously showed `Couldn't fetch` and remains unresolved. Bing Webmaster verification and sitemap registration remain pending. Existing IndexNow workflow is designed to run after successful main-branch build, wait for Cloudflare deployment marker, verify robots/key/sitemap, then notify; confirm workflow execution and IndexNow activity before claiming any submission occurred.
- Recommended indexing plan: Bing Webmaster Tools site verification + submit sitemap index + monitor IndexNow; Google Search Console resolve existing sitemap fetch issue; keep robots.txt accessible to OAI-SearchBot for ChatGPT Search discovery. Do not promise indexing by AI engines: ChatGPT Search discovery depends on crawler access and relevance, not a manual URL submission portal. GPTBot is separate from OAI-SearchBot and should be treated as a distinct content-training preference.


## 19 November 2026 — production RSS deployment verified and first guide reviewed

- Cloudflare production deployment is now confirmed by live `/deployment.json`: commit `41aa1da3d6cb7455f28dbfa3e83877f57f3022a7`, branch `main`, environment `production`, generated at `2026-11-19T10:17:48.720Z`.
- All five board-specific RSS endpoints now respond successfully on production: `/rss/home-office.xml`, `/rss/smart-home.xml`, `/rss/kitchen-home-tech.xml`, `/rss/travel-tech.xml`, and `/rss/computing-gaming.xml`. Live fetch returned the correct board channel for each. They contain no guide items because all 25 guides remain drafts/unapproved; Pinterest displayed “The RSS feed has no items” for the first feed. This is expected by the editorial publication gate, not a broken URL. Owner was instructed to leave the Pinterest form unsaved; do not change the publication gate to bypass approval.
- Live `robots.txt` allows general crawling and points to `https://smartpickhub.pages.dev/sitemap-index.xml`. The sitemap index and child sitemap are live; child sitemap contains 28 URLs (homepage, disclosure, guides hub and 25 guide pages). This does not resolve the existing Google Search Console “Couldn't fetch” parsing report. Bing verification/sitemap and IndexNow send are still unconfirmed.
- Began editorial review of `air-fryers-us-uk` as the first Tier-1 UK guide. Source record in `src/data/products.json` remains unchanged, with `publicationStatus: draft`. It contains four manufacturer-referenced products: Ninja AF400UK/DZ550, Philips NA555/09/NA555/00, Instant DAF8132BK/140-3090-01, and COSORI TurboBlaze UK/US.
- Fresh manufacturer/source checks confirm: Ninja UK AF400UK is 9.5L, 2470W, 240V, dual-zone, six functions; Ninja US DZ550 is 10qt, 1690W, 120V and includes Smart Cook thermometer. Philips UK NA555/09 is 9L, 2750W, 220–240V, 12 presets, dimensions 444×383×355mm. Instant UK DAF8132BK manual specifies 7.5L total, 2×3.7L, 1700W, 220–240V. COSORI US CAF-DC601-KUS is 6qt/5.7L, 1725W, 120V; UK TurboBlaze 6L regional model has separate manufacturer documentation/manual indicating 220–240V, 1725W, model CAF-DC602-KEUR.
- Editorial issues to resolve before approval: (1) explicitly identify COSORI UK model as CAF-DC602-KEUR and distinguish it from US CAF-DC601-KUS; (2) retain a clear warning that UK and US versions are not electrically interchangeable; (3) distinguish Philips 12 presets from its 19 cooking methods; (4) avoid displaying transient retailer prices/stock as permanent guide facts; (5) re-check current Ninja page dimensions/weight before publishing because older manufacturer pages and current SharkNinja page surface differing weight/dimension values. No content was changed and no guide was approved.
- Pinterest first-feed form remains unsaved. No Pins were created. Next: complete and present the first guide's editorial revision for owner approval; after at least one guide is explicitly approved and published through the agreed process, reconnect the five feeds (or connect them individually) and confirm Pinterest accepts them. In parallel, continue Bing and Google sitemap diagnostics without altering production settings without approval.


## 19 November 2026 — 25-guide editorial preflight audit

- Owner instructed to continue and approve all 25 buying guides. Approval workflow is authorised, but each guide still must pass factual/editorial gates before its `editorialStatus` is changed; no blind approval or publication.
- Inspected current `src/data/products.json` on main: exactly 25 guides and 100 product records; every guide currently remains `publicationStatus: draft` and research-led editorial status. Each product record has manufacturer source/sourceNote and US/UK Amazon search identifiers structurally present (live verification of all 100 sources/listings is not yet complete).
- Created `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md` on branch `automation/editorial-audit-25-guides-20261119`, commit `e43d2bea02d3c96b982c11fdd18a78cfb130b071`; PR #8: https://github.com/ralabsi95-spec/smartpickhub/pull/8. It inventories all 25 guides/100 products, source references, regional caveat signals, and per-guide approval gates. Documentation only; no catalogue records changed.
- Live-source spot checks support Apple Watch Series 12/Ultra 4 (2026), iPad mini A20 Pro (2026), Garmin Dash Cam X110/X210/X310/Mini 3, current Roborock product family names, Google Nest Cam battery specifications and Brother UK printer models. See citations in the working conversation; audit document lists source URLs for each catalogue record.
- High-priority editorial holds: Air Fryers (COSORI regional model CAF-DC602-KEUR vs US CAF-DC601-KUS; Philips 12 presets vs 19 cooking methods; recheck Ninja dimensions/weight); Robot Vacuums (keep Roborock Saros 10R/10, Qrevo CurvX/Curv 2 Pro and Edge variants distinct); Air Purifiers (Levoit US models vs UK counterparts/availability); Smartwatches (country/carrier feature support); Dash Cams (UK model/part numbers and local legal caveats). Other product model/source pairings require a full live source check before approval.
- Current publication/distribution gates remain intact: all 25 guides are drafts, Pinterest feeds remain empty until both approved and published, no pins or search submissions triggered by this audit.
- Next: complete live verification of product-source/model pairs in tiered batches; correct confirmed errors on a review branch; adjust the catalogue validator so approved editorial status can be tested without permitting unapproved distribution; run full CI; only then set editorial approvals. Keep publicationStatus=draft until a separate explicit go-live action.


## 19 November 2026 — owner confirmation and deferred indexing engineering

- Owner explicitly confirmed the editorial approval workflow for all 25 buying guides: proceed through factual/source/regional/editorial validation and approve guides that pass without requesting repetitive per-guide permission. This is approval to complete the editorial approval process, not permission to publish guides; keep `publicationStatus: draft` until a separate launch decision.
- Owner explicitly asked that the following engineering work be remembered and resumed later, after/alongside guide approval: **develop changed-URL detection, deletion notifications, and a durable IndexNow send/receipt log; test the full implementation in CI before any production adoption.** Scope includes deduplication, bounded retries, commit/deployment matching, deletion/move handling, and proof of notification acceptance. Do not deploy this work to production until CI passes and the owner authorizes production adoption.
- This deferred task must remain in the next-agent handoff and must not be treated as completed by the lifecycle design document or current sitemap-wide IndexNow sender.


## 19 November 2026 — editorial source review batch 2 (guides 4–8)

- Reviewed selected official manufacturer sources for Wi-Fi 7 routers/mesh, USB-C GaN chargers, webcams, 4K USB-C monitors and docking stations; detailed evidence and unresolved claims are recorded in `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md`.
- Confirmed TP-Link Deco BE63 UK hardware revisions V3.60/V2.60/V2 and regional-availability warning; UGREEN 40749 UK SKU/port count/input/100W total; Insta360 Link 2 video modes and virtual-camera 60fps limitation; Elgato Facecam Neo 1080p60/fixed USB-C/UVC; Dell U2723QE UK 90W USB-C/4K60/IPS Black; ASUS PA279CRV 96W/colour gamut/60Hz; BenQ PD2705U 4K60/99% sRGB/Rec.709; CalDigit TS4 port inventory/98W; Plugable TBT4-UDZ display-host limitations; Anker A83B5 140W upstream and shared 45W front ports.
- Guides 4–8 remain provisional and **not approved** because not all four product records in each guide have been fully rechecked, and some port-power, regional model, compatibility or subscription claims remain unresolved.
- No product data, editorial statuses, publication statuses, production pages, Pinterest feeds or production settings changed. All 25 guides remain drafts.
- Next batch: continue official-source verification for guides 9–13, recording only directly supported facts and holds. After product-level verification, revise proven errors on the isolated review branch, fix the validator to permit approved-but-unpublished guides while preserving distribution gates, and run CI. Deferred IndexNow changed-URL/deletion/receipt-log engineering remains deferred.


## 19 November 2026 — editorial source review batch 3 (guides 9–13)

- Checked selected official sources for portable SSDs, air fryers, cordless vacuums, cordless drills and robot vacuum/mop products; evidence and open questions are detailed in `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md`.
- Confirmed Samsung T9 20Gbps/2,000MB/s/122g/AES-256/3m claims; Kingston XS2000 20Gbps/2,000MB/s/IP55 and an important Mac/Thunderbolt/USB4 interface limitation; Miele Triflex HX2 UK runtime/weight/charging figures; Samsung Bespoke Jet AI UK product page says up to 1 hour, up to 2 hours with spare battery, conflicting with the catalogue's existing 160-minute claim; Roborock Saros 10R slim body/StarSight/Dock details; Roborock UK Qrevo Edge 2 and Qrevo 2 Pro advertised 25,000Pa.
- Guides 9–13 remain **not approved**: several product pages remain unchecked; guide 11 has a concrete Samsung runtime discrepancy; guide 10 retains Ninja/COSORI regional checks; guide 12 needs full DEWALT model-pair checks; guide 13 requires exact regional SKU/dock distinctions.
- No product records, editorialStatus, publicationStatus, production pages or distribution settings changed. All 25 guides remain drafts.
- Next batch: continue official-source verification for guides 14–18. Keep all claims manufacturer-attributed, distinguish regional variants, and do not approve until every product in a guide has passed the evidence gates. Deferred IndexNow changed-URL/deletion/receipt-log engineering remains deferred.


## 19 November 2026 — editorial source review batch 4 (guides 14–18)

- Checked selected official sources for noise-cancelling headphones, wireless earbuds, air purifiers, Sage espresso machines and iPad models; findings and holds are in `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md`.
- Confirmed Sony WH-1000XM6 and WH-1000XM4C UK model specs; Sony WF-1000XM6 IPX4, multipoint/codecs and battery; Apple AirPods Pro 3 H2/ANC/IP57 features; Sage Barista Pro and Oracle Jet workflow/specifications; Apple iPad Pro M5, iPad Air M4 and iPad A16 regional specifications.
- High-priority unresolved item: the claimed Apple iPad mini (A20 Pro) 8.5-inch OLED/2026 model did not resolve to an official Apple UK spec page in this pass. Do not call it an official released model or approve its guide until authoritative model evidence is found.
- Levoit Vital 200S UK counterpart is unconfirmed; filter and voltage checks remain; Sage Bambino Plus/Barista Express package details and several remaining headphones/earbuds models still require direct source checks.
- Guides 14–18 remain not approved; no product records, editorial statuses, publication statuses or production settings changed. All guides remain drafts.
- Next batch: review guides 19–23 (dash cams, projectors, NAS, electric toothbrushes, gaming mice) with exact model and regional manufacturer pages. Deferred IndexNow engineering remains deferred.


## 19 November 2026 — editorial source review batch 5 (guides 19–23)

- Reviewed selected official sources for Garmin dash cams, XGIMI/Epson projectors, Synology NAS, Oral-B iO toothbrushes and Logitech gaming mice; detailed findings and remaining gates are in `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md`.
- Confirmed Garmin UK X110 and Mini 3 exact 1080p/140° models and Garmin's separate X210 1440p / X310 4K tiers; noted jurisdiction-specific dashcam/privacy caveat. Confirmed XGIMI MoGo 4 UK model WK08K 1080p/450 ISO lumens/71.28Wh/2.5h Eco; Epson EF-30 US 350-lumen/Google TV facts; Synology UK catalogue distinction DS1525+/DS925+/DS725+ and DS1525+ optional 10GbE; DS224+ 2×1GbE/2GB RAM/100–240V; Oral-B iO mode count and iO10/iO9 feature split.
- Guides 19–23 remain not approved; several model-specific product records still require full verification, including Garmin X210/X310 part numbers, Epson UK variants, Synology compatibility policy, Oral-B exact packages and Logitech sensor/weight/polling specifications.
- No catalogue records, editorial statuses, publication statuses, site pages, feeds or production settings changed. All guides remain drafts.
- Next: final catalogue batch, guides 24–25 (smartwatches and home printers), then consolidate the 25-guide gate matrix, fix the test validator only on the review branch, correct proven content errors and run CI. Deferred IndexNow engineering remains deferred.


## 19 November 2026 — editorial source review batch 6 (guides 24–25) and catalogue-wide checkpoint

- Completed a selective official-source pass for smartwatch and home-printer guides. Apple UK confirms current Watch Series 12, Ultra 4 and SE 3 families and Ultra 4 model-specific case/display/battery/connectivity details; Garmin Forerunner 265 details remain pending. Brother UK catalogue records distinguish UK 220–240V models from separate US 110–120V model numbers; full four-model UK spec/consumables checks remain pending.
- All 25 guide categories have now received a structured first-pass source review. This is **not** a complete 100-product live-source audit and does not justify blanket editorial approval. Current explicit holds and confirmed discrepancies are recorded in `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md`.
- No guide has been approved; all 25 remain `publicationStatus: draft`. No product data, live pages, feeds or production settings changed.
- Next phase: consolidate unresolved source checks into a product-level matrix; finish high-risk mismatches (Apple iPad mini A20 Pro source, Samsung vacuum runtime, Levoit Vital 200S UK counterpart, UK/US power variants, exact Brother printer bundles, Garmin dashcam part numbers, model-specific dock/charger port tables); revise only proven catalogue errors on the review branch; then fix the validator to allow approved-but-unpublished drafts while preserving the RSS/publishing gate and run full CI.
- PR #8 remains a documentation/review branch; do not merge or publish without owner authorization. Deferred IndexNow changed-URL detection, deletion notifications and durable send/receipt logging remain explicitly deferred until separately scheduled and fully CI-tested.


## 19 November 2026 — product-level source resolution follow-up
- Corrected Samsung Bespoke Jet AI guide 11 record against Samsung's exact UK model page for VS28C9784QK/EU: 160-minute maximum is conditional on minimum power, two batteries and a non-motorised tool; 280 W UK and 280 AW US units are not comparable. Catalogue source/pros/cons/regional notes updated on editorial review branch, commit 74ca554d8ec839e104f964414e08fd463ae4d52.
- Official Apple Support now confirms iPad mini (A20 Pro), introduced 2026, with 8.5-inch OLED and A20 Pro specifications. This resolves model-existence uncertainty but not the whole guide's approval gate.
- Retrieved model-specific Brother UK pages for all four guide 25 models. Confirmed MFC-L8390CDW duplex scan and 50-sheet two-sided ADF; MFC-L3740CDW 50-sheet ADF and duplex printing but do not infer duplex scanning; HL-L3240CDW print-only 26ppm and duplex print; DCP-L2660DW 34ppm, 50-sheet ADF and separate drum.
- Garmin Mini 3 UK retail part number 010-02899-10 is confirmed; X210/X310 exact UK retail SKUs remain open.
- Evidence and detailed source URLs recorded in EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md. All guide statuses remain draft; no publishing, IndexNow submission, Pinterest post or production change.
- CI passed on pre-correction head 1b994672d4e09a57d1b53b75222c9976ac3062f2 (Astro Build and Quality Checks run #766); run must be repeated for the changed catalogue commit before claiming current-head validation.


## 19 November 2026 — CI concurrency remediation
- Investigated Actions runs #767/#768. These were cancelled by workflow concurrency while a later commit arrived; the resulting consolidated report correctly showed incomplete data (0 axe routes / 0 Lighthouse pages), so the report failure was a consequence of cancellation, not evidence of a source-code test regression.
- Updated `.github/workflows/build-check.yml` on the editorial review branch to set `concurrency.cancel-in-progress: false`, preventing a newer docs commit from cancelling an in-flight quality run. Commit: 2125c3ab52f757b2888e2d15022a2e670fe7a925.
- Run #766 passed on the previous catalogue state; it is not validation for later changes. A newer run is triggered on the preceding documentation commit; verify CI on the current branch head and make no approval claim until the full required steps finish.
- This is CI scheduling only. No production Pages binding/deployment, WordPress, DNS, product publication or Pinterest action was performed.


## 19 November 2026 — latest CI scheduling state and next work
- Workflow concurrency configuration is corrected: .github/workflows/build-check.yml sets cancel-in-progress=false (commit 2125c3ab52f757b2888e2d15022a2e670fe7a925). Existing run #767/#768 were cancelled before this setting took effect; do not use those incomplete report artifacts as code failures.
- A PR run #771 was created for head 19569f46fc83c9080b7885a59cb0a88f597fac1c but remained pending with no jobs at last check. This is an Actions queue/scheduling state, not a passed test. Previous successful run #766 only validates old head 1b994672d4e09a57d1b53b75222c9976ac3062f2.
- Wait to verify a complete quality run for latest head before approval. Do not add no-op commits or trigger repeated workflow dispatches to churn the queue.
- Product catalogue correction and source audit are committed; all 25 guides / 100 products remain drafts and none approved. PR #8 remains open and unmerged; production/WordPress/DNS remain untouched.


## 19 November 2026 — full catalogue structural pass and additional source checks
- Re-read all 25 guides / 100 product records. This was a structural/risk-triage pass plus targeted official-source checks, not a claim that all 100 product specs are fully verified. All guide publication statuses remain draft.
- Commit 726f6266e1f06214eb431fba6d4d897cdbd3fb1f updated Garmin X310/X210/X110 to Garmin UK comparison evidence, Garmin Mini 3 to exact UK SKU 010-02899-10, and narrowed Apple Watch Ultra 4 satellite feature caveats.
- Additional sources reviewed for CalDigit TS4, eufy S340, Ninja AF400UK, Dyson V15, Apple iPad mini A20 Pro, Apple Watch Series 12/Ultra 4/SE 3, Garmin X-series and Brother MFC-L8390CDW. Detailed evidence and caveats in EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md.
- Risk triage prioritises voltage/SKU, charger power split, dock host display limits, regional model equivalence, consumables/bundles, cellular bands and subscription-dependent features.
- PR #8 remains open/unmerged; no production changes, publication, Pinterest or IndexNow submission. Next gate is exact-model verification for remaining products, then CI on final head and guide-by-guide editorial approval while drafts remain unpublished.


## 19 November 2026 — project checkpoint
- Owner requested one consolidated continuation and proportionate review: prioritise material product identity, regional compatibility, working source/affiliate paths, bundle/consumables and launch gates; avoid spending time on minor descriptive differences.
- Review branch received targeted source corrections for Garmin UK X110/X210/X310 retail part numbers and Logitech PRO X2 SUPERSTRIKE official UK page/specification. Commit `1c8bc4d2b1f95f10102979641757cc1fa1d2e509`.
- PR #8 remains open and unmerged. All 25 guides remain drafts; no production/site changes, no Pinterest posts, no IndexNow submissions.
- CI run #773 remains associated with older product-data SHA `726f6266e1f06214eb431fba6d4d897cdbd3fb1f`; early steps and axe accessibility checks passed, Lighthouse/report steps were still running at last check. It does not validate the latest branch head.
- Next: complete a proportionate high-risk review, then run/confirm the quality workflow against the final PR head. Keep the deferred IndexNow changed-URL/deletion/receipt-log work in the future queue.


## 19 November 2026 — focused compatibility review checkpoint
- Broad owner approval received for consolidated review; scope remains non-production review and branch changes. User preference is proportionate checks focused on material correctness, not minor copy differences.
- Product-data commit `ff1fff9a5f85609060c799a7a791bd8eb77c00a6` updates five high-impact records: Anker A2688 shared-port output; Anker A83B5 Thunderbolt 5 host/display limits; Kensington SD5780T host-dependent monitor limits; Plugable TBT4-UDZ display compatibility; Jackery JE-300B regional AC voltage/frequency split.
- All 25 guides / 100 products remain in the catalogue; all guides remain draft. PR #8 open/unmerged. No live site update, Pinterest publication or IndexNow submission.
- CI #778 was observed running on prior head `2137a66d`; it is not evidence for commit `ff1fff9a`. Confirm new workflow run on the final head before marking checks complete.
- Next: proportionate review of remaining product identity/regional power/bundle risks; wait for final-head CI; preserve deferred IndexNow changed-URL/deletion detection and send/receipt log as future scope.


## 19 November 2026 — charger compatibility checkpoint
- Product-data commit `88ee74da154158c7c371b7145148801519d995c8` adds manufacturer-backed clarifications for UGREEN Nexode 100W SKU 40749 (universal input; 100W total cap; no unsupported simultaneous per-device claim) and Nexode 200W SKU 35539 (universal input; per-port ceilings; 200W combined cap; verify UK mains lead).
- PR #8 remains open/unmerged; no production deployment, guide publication, Pinterest post or IndexNow submission. All 25 guides remain draft.
- Run #778 completed successfully on an older head, while #781 was still running on prior head `89edd10e`; the new product commit requires its own completed CI run.


## 19 November 2026 — regional router compatibility
- Commit `68ae210e216909ac6ddf669a9c5f2e6a0b508feb` records TP-Link Deco BE63 regional hardware-revision caution. TP-Link UK documents multiple supported hardware versions and says regional availability varies; US datasheet figures are not proof of identical UK radio/firmware/adapter package.
- PR #8 remains open/unmerged; all 25 guides remain draft. No production, Pinterest or IndexNow action.


## 19 November 2026 — UK regional hardware and monitor source checkpoint
- Commit `27be358f9413ed808752a09e080ac4aecfff2eec` improves regional evidence for eero Pro 7, NETGEAR Orbi RBE773, Dell U2723QE, ASUS PA279CRV and BenQ PD2705U.
- eero UK compliance confirms 27W adapter input 100–240V/50–60Hz. NETGEAR UK confirms three adapters are included with RBE773 3-pack but does not expose their input voltage in the captured spec; buyer verification remains explicit.
- Dell UK model/order code 210-BCXK and 100–240V input confirmed; its current Dell page indicates unavailable, so catalogue does not imply stock. ASUS and BenQ regional pages confirm universal input and USB-C PD levels (96W and 65W respectively).
- PR #8 remains open/unmerged; all 25 guides remain draft. No production, Pinterest or IndexNow action.


## 19 November 2026 — Garmin X-series source integrity correction
- Commit `39bfea83d6b1216c86473d169d7284f883a1a96f` fixes a material source mismatch: X110/X210/X310 previously shared the Mini 3-specific product URL. X110 now uses Garmin UK's X110 page; X210 and X310 use their model-specific Currys Business UK listings for exact UK retail identifiers, with Garmin's UK X-series comparison retained for model resolution tiers.
- PR #8 remains open/unmerged; 25 guides remain draft. No production, Pinterest or IndexNow action.


## 19 November 2026 — Apple iPad mini UK configuration note
- Commit `9af76b4c5d1f17552745f8a334d618ef623c91cb` records Apple's UK store availability for iPad mini A20 Pro and preserves a regional caveat: US technical page does not establish exact UK cellular band configuration or local in-box adapter contents. Check selected UK SKU/configuration.
- PR #8 open/unmerged; all 25 guides remain draft; no production/Pinterest/IndexNow action.


## 19 November 2026 — consolidated continuation checkpoint
- Additional product-data corrections: UGREEN Nexode 100W/200W port-sharing and 100–240V caveats (`88ee74da`); Deco BE63 regional hardware revision note (`68ae210e`); eero Pro 7 adapter input, Orbi RBE773 pack/adapter verification, Dell U2723QE UK SKU and 100–240V input, ASUS PA279CRV 100–240V/96W PD, BenQ PD2705U 100–240V/65W PD (`27be358f`); corrected Garmin X110/X210/X310 model-specific evidence links (`39bfea83`); iPad mini A20 Pro UK configuration note (`9af76b4c`).
- Structural validation: 25 guides / 100 products; every guide publicationStatus is draft; all product records have HTTP(S) sources and both US/UK search identifiers; no duplicate product names. 37 product records contain explicit regional/availability caveats. This is not a claim of complete manufacturer-level verification for every spec.
- CI #781 passed on old head `89edd10e` including axe accessibility on every catalogue route, Lighthouse desktop/mobile and representative templates, build and smoke checks, report generation/upload. Its artifact is retained until 3 Dec 2026. Current PR head `50ecc2ddd389e127fb65df0a7b9850b0b6af6ca6` has run #794 pending; wait for that exact head or a later final head before calling CI complete.
- PR #8 remains open/unmerged. No production deployment, publication, Pinterest or IndexNow action. Keep changed/deleted URL detection and durable IndexNow receipt log in deferred scope.


## 19 November 2026 — CI status correction
- Run #794 on `50ecc2ddd389e127fb65df0a7b9850b0b6af6ca6` was later observed as cancelled. Current PR head `9fa3deeb3eccf8c5c179ac9e02ed951eeb57baec` has no associated run in the commit-run lookup.
- CI #781 passed on historical SHA `89edd10e2ad3df3c5c923aceb1fb8805d0498685` only. Latest-head CI remains an open gate. Connected GitHub actions in this session do not expose workflow_dispatch; trigger/verify a quality run for the current head before closure.


## 19 November 2026 — owner-authorised guide release and indexing preparation

- Owner explicitly instructed to merge, approve and allow indexing for the full 25-guide catalogue; confirmed product-image policy: use exact-model images only where commercial-use rights are documented, otherwise keep the existing text-based product information card with no substitute image or empty placeholder. Product imagery is optional and not a launch blocker.
- PR #8 was squash-merged to `main` at `4a6b67a5c60f93bfeb58b5f792c08825a0ad1706`. Its latest-head CI #798 succeeded on head `174b332551f79f21281d509b565b2ec19ff5f331`.
- Live production verification after PR #8 merge: `/deployment.json` reported commit `4a6b67a5c60f93bfeb58b5f792c08825a0ad1706`, branch `main`, environment `production`; robots allows crawling; homepage robots meta is `index, follow`; sitemap index and child sitemap are live with 28 URLs (homepage, disclosure, guides hub and 25 guides).
- The IndexNow key file `/smartpickhub-20261119-7f3c9a2d4b6e8a1c.txt` is publicly reachable and matches the configured key.
- Release branch `release/approve-guides-indexing-20261119` sets all 25 guides to `editorialStatus: Approved for publication` and `publicationStatus: published`; the catalogue validator now enforces the valid status pairing rather than rejecting all approvals. Product cards retain their existing information when no legally cleared exact-model photo exists.
- A guarded workflow `.github/workflows/indexnow-after-production.yml` runs only after successful main-branch Astro quality CI, checks that Cloudflare serves the exact tested commit, then runs the existing IndexNow script. It does not claim Google indexing, and does not yet implement changed/deleted URL detection or durable send/receipt logging.
- No Pinterest RSS connection or Pin publication is included in this release. Do not infer permission to connect the feeds from indexing approval.
- Google Search Console property `https://smartpickhub.pages.dev/` was previously owner-verified, but its sitemap fetch issue remains unresolved. The OpenSEO SmartPickHub project currently has no connected Search Console account, and browser automation could not start because the TinyFish wallet balance is negative. No Google sitemap submission is claimed.
- Evidence scope remains proportionate and UK-first: 25/100 structural inventory and targeted high-risk corrections, not a claim that every specification or current Amazon listing has been independently re-fetched. Regional/compatibility caveats remain in product records; no hands-on testing, live prices, ratings, stock or direct ASIN claims are made.


## 19 November 2026 — final indexing target checkpoint

- PR #9 code/test result: CI #810 (run ID `44519855311`) passed on tested head `df6a5d20918c04be131ad3519dc7c2a0a0e0d353`. Distribution checks, smoke tests, accessibility, Lighthouse, and npm audit all completed successfully.
- Report: 25 guides / 100 products; 100 US + 100 UK affiliate URL-construction checks; 29 HTML pages passed smoke tests; axe 28/28 routes, zero violations and 27 incomplete contrast checks; five Lighthouse samples with Performance/Accessibility/Best Practices 100 and preview SEO 66–69; npm audit 0 vulnerabilities. Product-image audit 0 approved, 0 pending, 100 without photos; text-card fallback is the owner-approved policy.
- Read-only check found two live domains: InfinityFree WordPress `https://smartpickhub.infinityfree.me/` (robots permits crawling and references `/wp-sitemap.xml`) and Astro Pages.dev `https://smartpickhub.pages.dev/` (robots permits crawling, homepage index/follow, 28-URL sitemap). These are separate sites with different guide libraries.
- PR #9 remains open/unmerged because the permanent project brief names InfinityFree, while the Astro release and IndexNow workflow target Pages.dev. Do not merge or notify IndexNow until the owner confirms the canonical indexing target.
- InfinityFree `/sitemap_index.xml` is a 404; its robots file points to WordPress `/wp-sitemap.xml`. The latter XML could not be read by available fetchers, so do not claim its sitemap has been fetched/submitted.
- Google Search Console submission remains outstanding. The OpenSEO project has no connected Search Console account; TinyFish browser automation could not start because wallet balance is `-$0.47`. No Google indexing request or IndexNow notification has been confirmed.


## 19 November 2026 — authoritative continuation and hosting-scope correction
- Owner reaffirmed that the former InfinityFree hosting/domain is cancelled and completely outside SmartPickHub. This supersedes every earlier operational note suggesting preservation, monitoring, migration, redirects, imports, or fallback use of that property. Do not use or access it for project work.
- The approved hosting/domain family is Cloudflare Pages `pages.dev`: production `https://smartpickhub.pages.dev/`; isolated preview `https://smartpickhub-preview.pages.dev/`. GitHub remains source control; Astro remains the static-site framework.
- Owner-authorised release PR #9 was merged to `main` using expected head SHA `3d49b7d2e1c918b41c2fde101a684712ed1e6155`. Merge commit: `2619626e51e023a906876cebe5632bd84f97ef53`.
- PR #9 exact-head checks: Astro quality run #815 passed; Cloudflare Pages production-project branch preview and isolated preview both deployed successfully for commit `3d49b7d`. The separate Cloudflare Workers Builds check failed; it is not the Astro Pages deployment check and must not be described as a Pages failure.
- Main-branch quality run #816 for merge commit `2619626e` was queued at the latest check. Do not treat the merge commit as fully CI-verified until #816 completes successfully.
- Guarded IndexNow run is intentionally gated behind successful main-branch quality CI and Cloudflare serving the exact tested commit. It has not yet been confirmed submitted for merge commit `2619626e`; verify its workflow run and result before claiming notification.
- Current catalogue: 25 approved/published guides / 100 product records. Product images remain optional; use only exact-model images with documented commercial reuse rights, otherwise retain the existing text product card. No fabricated ASINs, direct listings, prices, ratings, availability or hands-on testing claims.
- RSS is generated from approved guides; Pinterest connection and Pin publishing remain out of scope for this release. Google Search Console sitemap submission remains outstanding. Changed/deleted URL detection and durable IndexNow send/receipt logging remain deferred.
- Next action: verify main CI #816 on the merge SHA, then verify the guarded IndexNow workflow and live Cloudflare Pages deployment for the same SHA; only after those checks update this status again.



## 19 November 2026 12:40 UTC — full production and SEO review
- Repository main is at `2fc29d32067a0b654b1f4e4a8133835002f45513`; live Cloudflare Pages deployment marker confirms the same commit. Production host is `https://smartpickhub.pages.dev/`; former InfinityFree/WordPress hosting and domain are cancelled and completely out of scope.
- Live robots allows crawling; sitemap index and child sitemap are readable; sitemap contains 28 URLs. IndexNow key file is publicly reachable and matches the configured key.
- Fresh OpenSEO audit `a9580b1b-cc76-4572-82a6-f6fe069a3448`: all 28/28 pages crawled, HTTP 200, indexable and in sitemap; no critical crawl issues. 25 informational recommendations remain (21 title tags longer than 60 characters; 4 meta descriptions longer than 160 characters). No title/H1 changes were made.
- Main catalogue remains 25 published/approved guides and 100 products. Every guide has four products; all records have manufacturer sources and US/UK Amazon marketplace search phrases; no duplicate product names. All 100 products intentionally have no product photo pending exact-model identity and documented commercial reuse rights.
- Five category RSS feeds are live and populated. Pinterest RSS connection and Pin publication remain unperformed.
- OpenSEO has 24 saved UK commercial/transactional keyword records with volume/KD/CPC estimates. No Google Search Console or GA4 accounts are currently connected to OpenSEO; Google verification meta is present, but GSC sitemap processing/submission remains unconfirmed.
- PR #7 is open but stale/diverged (3 commits ahead, 4 behind main); its lifecycle text still says the 25 guides are drafts and references the old IndexNow workflow. Do not merge as-is.
- PR #10 adds a safe IndexNow guard for exact production commit or verified documentation-only descendant. This addresses production advancing from release SHA `2619626e` to docs-only SHA `2fc29d3`; non-Markdown changes still require their own successful CI. PR #10 CI #820 pending at checkpoint.
- No IndexNow submission is claimed. No production content, product records, DNS, Cloudflare settings or Pinterest publishing changed during this review.
- Security advisory status: GitHub's GHSA-fc5q-39xc-vjpf / CVE-2026-112366 advisory was withdrawn on 18 November 2026 after the upstream maintainer disputed the vulnerability claim. Do not treat the previous 2 December waiver as an active advisory exception or change dependencies solely for this withdrawn notice; retain npm audit / CI as the dependency-security evidence.
- Next: verify PR #10 CI, merge after green checks, verify main CI/deployment, then confirm IndexNow result; connect GSC/GA4 and reconcile the stale PR #7 lifecycle documentation.


## 19 November 2026 13:03 UTC — IndexNow guard merged and production deployment confirmed
- PR #10 merged to `main`: `88f7f86d6083e2546f229d0ba4c6258df30dc62b`.
- PR-head CI run #825 passed on `a73e54640f5de070a717a4ec066c4d2a733cdad3` across build, catalogue, affiliate, intake dry-run, RSS, smoke, axe-core and Lighthouse checks.
- Live production deployment marker confirms `88f7f86d6083e2546f229d0ba4c6258df30dc62b`, branch main, production environment. Live robots and sitemap index were rechecked.
- The IndexNow exact-SHA deadlock fix is deployed. Post-merge notification acceptance remains unverified; do not claim submission until its workflow run/receipt is inspected.
- PR #7 remains stale and must not be merged as-is. Its lifecycle text says the 25 guides are drafts and references the superseded notifier. A corrected lifecycle document is being prepared on branch `docs/reconcile-search-discovery-lifecycle-20261119`.
- No production catalogue/content change, product re-import, Pinterest Pin, or paid service action was made.
- Next: confirm main CI and post-merge IndexNow outcome; review/CI the replacement lifecycle document; connect GSC/GA4 and investigate the known sitemap fetch issue.


## 19 November 2026 13:11 UTC — PR #11 and Pinterest RSS readiness
- PR #11 merged to main as `960c32597d7bdcb6119a7d8bcd657d0818e4b251`; its exact-head CI #827 passed. It is documentation-only.
- Current production marker remains `88f7f86d6083e2546f229d0ba4c6258df30dc62b`; no new code deployment is claimed for the docs merge.
- Historical owner instruction confirmed that Pinterest RSS feeds were intentionally not connected while the 25-guide approval/publication batch was incomplete. The correct order is complete/verify all 25 guides, connect every feed to its matching board, verify all five connections, then start Pinterest distribution.
- Live RSS verification confirms 5 feeds / 25 entries: Home Office & Ergonomics (5); Smart Home & Security (5); Kitchen & Home Tech (6); Travel & Tech Gear (6); Computing & Gaming (3). All five endpoints are live and populated.
- Feed URLs: `/rss/home-office.xml`, `/rss/smart-home.xml`, `/rss/kitchen-home-tech.xml`, `/rss/travel-tech.xml`, `/rss/computing-gaming.xml` on the production host.
- Pinterest remains unconnected: no board/feed mapping has been saved, no Pins created, and no Pins published. RSS availability does not mean Pinterest connection.
- Next: use an authenticated Pinterest session to inspect existing boards, connect each matching feed, verify all five, and only then commence distribution. Do not create duplicate boards or publish prematurely.


## 19 November 2026 13:24 UTC — owner confirms Pinterest RSS connections
- Owner explicitly confirmed that all five previously supplied RSS feed URLs were successfully connected to their corresponding Pinterest boards; record this as owner-confirmed, not independently verified through an authenticated Pinterest session.
- Feed mapping remains: Home Office & Ergonomics → `/rss/home-office.xml` (5 guides); Smart Home & Security → `/rss/smart-home.xml` (5); Kitchen & Home Tech → `/rss/kitchen-home-tech.xml` (6); Travel & Tech Gear → `/rss/travel-tech.xml` (6); Computing & Gaming → `/rss/computing-gaming.xml` (3). Total: 25 published guide entries.
- Do not repeat the connection steps or ask the owner to reconnect. Next verify the five saved mappings and inspect whether Pinterest automatically ingested/published Pins as a consequence of RSS connection. No additional Pin creation or distribution campaign is authorised by this confirmation alone; obtain separate approval before initiating any new publication.
- Preserve distinction: RSS feed endpoints and entries were independently checked live; board connections are owner-confirmed; Pinterest-side saved state and any resulting Pin ingestion/publication remain unverified.


## 19 November 2026 13:30 UTC — Pinterest automatic distribution goal clarified
- Owner clarified the intended outcome: Pinterest should publish Pins automatically from the five connected RSS feeds to their corresponding boards when new approved guide entries are added. Treat RSS-driven automatic publishing as the approved project goal, not a manual-only workflow.
- Existing feed inventory remains 5 feeds / 25 current guide entries. Owner confirmed all five feeds were connected to matching boards at 13:24 UTC; this connection is owner-confirmed but not independently inspected in Pinterest.
- Outstanding verification: inspect Pinterest's RSS automation settings and account activity to establish whether connections are active for automatic Pin creation/publication, whether the existing 25 feed items were ingested, and whether future new entries will auto-publish. Do not claim automation is active until verified.
- Pinterest authenticated browser access is not currently established in the available browser profile. A safe sign-in session is required for independent account-side verification. Do not ask the owner to share credentials in chat.
- No new manual Pins have been created by the assistant. Once Pinterest settings are verified, RSS-triggered automatic publishing of approved feed entries is within the owner's stated goal. Keep the feed restricted to approved/published guides; never feed drafts or unverified products.


## 19 November 2026 13:35 UTC — production discovery and SEO metadata checkpoint
- Live production `deployment.json` confirms Cloudflare Pages serves main commit `960c32597d7bdcb6119a7d8bcd657d0818e4b251` (generated 13:12:29 UTC). Robots allows crawling and points to the production sitemap index; sitemap index and all five board RSS feeds fetch successfully.
- The main-branch IndexNow notification workflow run #94 (GitHub run ID `44531574582`) completed successfully on commit `960c32597d7bdcb6119a7d8bcd657d0818e4b251`. Its log confirms: "IndexNow accepted notification for 28 URLs on smartpickhub.pages.dev." This is endpoint acceptance only, not a guarantee of crawling or search indexing.
- The duplicate/alternate "IndexNow after production release" run #10 was skipped; the successful #94 notification above is the verified submission receipt.
- OpenSEO audit `a9580b1b-cc76-4572-82a6-f6fe069a3448` remains the latest technical crawl: 28/28 pages crawled, HTTP 200/indexable/in sitemap, no critical issues; remaining issues are informational metadata length only (21 titles, 4 descriptions).
- PR #13 `https://github.com/ralabsi95-spec/smartpickhub/pull/13` prepares concise SEO metadata for all 25 guides and shorter descriptions for the four flagged pages. Full visible H1s, JSON-LD headlines, RSS titles and Pinterest cover text remain unchanged. Initial CI #833 exposed a missing optional TypeScript declaration for `availabilityNote`; the PR adds the explicit optional type and a fresh exact-head CI run is required. PR #13 is not merged or deployed.
- OpenSEO currently has no connected Google Search Console or GA4 accounts; no first-party impressions, clicks, organic sessions or conversion results can yet be read. Connection requires the owner to connect Google in the OpenSEO project integrations.
- Pinterest auto-publishing is the owner's approved objective. Feed XML includes RSS 2.0 title, description, claimed-domain link, and original 1000×1500 PNG covers via enclosure/media:content. The owner confirms the five feeds are connected; account-side saved settings and Pin ingestion remain to be verified through authenticated Pinterest access.


## 19 November 2026 13:54 UTC — future product intake and AI visibility planning
- Added `PRODUCT_INTAKE_AND_CATALOGUE_GROWTH.md` describing the verified current dry-run importer and the future gated workflow for candidate intake, identity/duplicate resolution, manufacturer evidence, editorial mapping, human approval, PR-based catalogue integration, release and indexing.
- Confirmed current importer supports CSV/JSON, brand/model/market/HTTPS source validation, candidate IDs, normalized-name matching, within-batch duplicate detection, unverified-ASIN warnings, JSON/CSV reports and non-mutating dry-run behavior. It does not write to the catalogue or publish. Existing 100 products remain untouched.
- Updated `SEARCH_DISCOVERY_INDEXING_LIFECYCLE.md` with current-state correction and explicit AI crawler distinctions: OAI-SearchBot for ChatGPT Search, GPTBot for possible model training, ChatGPT-User for user-triggered visits. Production wildcard robots policy currently permits all three by inheritance; no crawler policy was changed.
- OpenSEO AI visibility tracker is not configured. Cost estimate only (no prompts saved, no paid check started): 5 UK-English prompts across ChatGPT, Google AI Overviews and Gemini = 15 observations, 30 credits / $0.03 per weekly check, estimated $0.12/month (4 checks). One-off baseline would be 90 credits / $0.09. Do not activate recurring checks until owner approves the spend.
- PR #13 SEO metadata refinement passed exact-head CI run #835 on head `5744925b99965c1e1d95b5e399be22f210e1b8b2`; it is still unmerged and undeployed pending production-change approval.
- PR #12 documentation branch contains the refreshed lifecycle, Pinterest RSS mapping, product intake/growth specification and supersession notice for historical governance text. Latest CI run #837 is in progress on head `935aa7f5f797ef25df7e8a3329b142abe43806e2`; no merge until it succeeds.

## 19 November 2026 14:06 UTC — Pinterest owner confirmation, no-paid-services policy and documentation merge
- Owner confirms Pinterest RSS setup has now been activated. Treat the five matching RSS-to-board connections as owner-confirmed; do not repeat connection steps. Independent account-side verification is still unavailable because the saved TinyFish profile does not record a Pinterest sign-in and the owner reports no remaining TinyFish credit. No further TinyFish run or paid workaround is to be attempted.
- Pinterest automation objective remains RSS-driven automatic Pin creation/publication to the corresponding board when a new approved guide is added. The five production feeds remain the approved source set: home-office, smart-home, kitchen-home-tech, travel-tech and computing-gaming (25 current entries). Do not claim that historical Pins were ingested or that a new Pin was published unless Pinterest-side evidence becomes available.
- Owner explicitly set a no-subscription/no-paid-service rule until SmartPickHub demonstrates encouraging results. Do not activate OpenSEO AI visibility tracking, paid checks, recurring checks, TinyFish paid tasks, or any other paid service. Prefer existing free capabilities and native provider webmaster tools.
- PR #12 (documentation-only) passed exact-head CI run #838 on 320e773632e02c4424056e8c1896346b894ee445 and was merged as f5925324b0e95e62d22e331eba123fc4e71c16a0. It records Pinterest RSS status, AI crawler distinctions, future product intake workflow and the IndexNow receipt. No catalogue or guide content changed.
- PR #13 SEO metadata refinement remains open and unmerged. Exact-head CI run #835 passed on 5744925b99965c1e1d95b5e399be22f210e1b8b2, but it changes public page metadata; do not merge or deploy without explicit production-change approval.
- Google Search Console and GA4 still show no connected accounts in OpenSEO (accounts: [] for both). This is a measurement/connection gap, not evidence of zero traffic or zero indexing. Owner can connect Google later through the project's Integrations page at no OpenSEO check cost; no credentials should be shared in chat.
- Last verified IndexNow receipt remains main workflow run #94 accepting notification for 28 production URLs on smartpickhub.pages.dev; IndexNow targets Bing, Yandex, Seznam, Naver, Yep and other participating engines, not Google. Acceptance is not proof of crawling or indexing. Do not resubmit unchanged URLs.
- Production baseline previously verified at main commit 960c32597d7bdcb6119a7d8bcd657d0818e4b251; PR #12 is documentation-only and its merge does not alter site content. Current production deployment marker could not be independently re-read in this checkpoint.
- Next: keep monitoring free CI and search discovery; when the owner is ready, connect Search Console and GA4, then inspect actual Google indexing and organic metrics. For Bing and other IndexNow participants, use the accepted receipt plus native free webmaster tools where account access is available. Continue product intake engineering in a non-mutating branch; no catalogue write or publication without the existing approval gate.
## 19 November 2026 14:35 UTC — PR #14 merged; latest free crawl review
- PR #14 (documentation-only) passed exact-head CI run #840 on `cf2e7ce3bfb4d18edf6c7a86be9fbfb313d7eec7` (job `build-and-audit` success) and was merged to main as `6fac4764501dbbda27c1e8a746d7d389caf06669`. It updates only `MASTER_PROJECT.md` and `AGENT_HANDOFF.md`; no production content, catalogue or settings changed.
- Latest saved OpenSEO crawl was re-read using existing project data only (no paid AI visibility checks or new audit started): 28/28 URLs crawled; all 28 returned HTTP 200, are indexable and included in the sitemap. No critical crawl issues. Remaining report contains 21 informational long-title findings and 4 informational long-meta-description findings.
- PR #13 remains open/unmerged. Its exact-head CI #835 passed. It adds concise SEO title metadata for all 25 guides and trims four descriptions while preserving visible H1s, structured data and feed titles. This is a public metadata change; do not merge/deploy until explicit production-change approval.
- Google Search Console and GA4 are still not connected in OpenSEO (`accounts: []`). Existing research log records that the GSC property was manually verified, but Google reported 'Couldn't fetch' for sitemap files while the live URL Inspection test said the sitemap-index URL was available. This discrepancy requires first-party GSC access; do not infer that pages are unindexed.
- Pinterest RSS setup is owner-confirmed active for all five matching boards. Independent Pinterest account-side verification remains blocked by unavailable TinyFish credit and no Pinterest sign-in recorded in the saved profile. No paid workaround is permitted; do not repeat connection steps.
- No subscription or paid service is approved until the owner sees encouraging results. AI visibility tracking remains disabled; no paid checks or recurring schedules are running.
- The last verified IndexNow receipt remains main workflow run #94 accepting 28 production URLs. It is a notification receipt only, not proof of crawl or indexation. Do not resubmit unchanged URLs.
- Production deployment marker was not independently re-read in this session. PR #14 is documentation-only and its merge does not change public guide or product content.
- Next: keep PR #13 unmerged pending approval; preserve all 25 guides / 100 product records; continue non-mutating product-intake improvements and free technical checks. When the owner connects Google through OpenSEO integrations, inspect sitemap processing and representative URL index status, then measure impressions/clicks and GA4 organic sessions.

## 19 November 2026 14:45 UTC — PR #15 and PR #16 merged; intake hardening checkpoint
- PR #15 (documentation checkpoint) passed exact-head GitHub Actions run #842 (run ID `44545659427`): all 22 workflow steps completed successfully, including content/type checks, dry-run importer tests, catalogue validation, build, RSS checks, smoke tests, axe-core accessibility audit, Lighthouse desktop/mobile and report upload. Merged to `main` as `dc96075d70977c88906d50dceb5b0318a743beb5`.
- PR #16 (strict product-intake CSV parsing) passed exact-head run #843 (run ID `44545818755`): all 22 workflow steps completed successfully, including malformed CSV self-tests, isolated end-to-end dry-run tests, full build, accessibility and Lighthouse audits. Merged to `main` as `a79b1c412844dbe3b05a26cf1cbe4ce68f0e780d`.
- PR #16 hardens parser rejection of stray quotes in unquoted fields, trailing characters after a closing quote, unclosed quoted fields and rows with more values than declared headers. Valid quoted commas and escaped double quotes remain supported by the parser tests.
- Safety boundary unchanged: importer is still dry-run only. No catalogue mutation, product import, ASIN verification, affiliate-link generation, guide generation or publication was performed. Existing 25 guides / 100 product records remain the protected baseline.
- Main branch currently points to `a79b1c412844dbe3b05a26cf1cbe4ce68f0e780d`. The two merges did not edit guide text, product records, public metadata or crawler configuration. The current Cloudflare deployment marker was not independently re-verified after these merges; do not claim a live deployment SHA until checked.
- PR #13 remains a separate public SEO metadata change and must stay unmerged until explicit production-change approval, notwithstanding its passing CI.
- No paid services, TinyFish credits, OpenSEO AI visibility checks, subscriptions or recurring paid checks were started. Pinterest's five RSS-to-board connections remain owner-confirmed; actual Pinterest ingestion/publication remains unverified. GSC/GA4 are not connected; Bing Webmaster Tools account/ownership verification remains a free next step for the owner.
- Next: keep PR #13 gated; when owner is ready, verify Bing Webmaster Tools ownership and sitemap status using the free account, and connect GSC/GA4 to inspect first-party indexing and traffic. Continue engineering only in a branch/PR with dry-run defaults and exact-head CI. Never re-submit unchanged IndexNow URLs.


## 19 November 2026 14:54 UTC — PR #17 documentation checkpoint merged
- PR #17 (docs-only status and handoff checkpoint) passed exact-head CI run #846 (run ID `44547416370`): all workflow stages succeeded, including type/content checks, dry-run importer tests, catalogue validation, build, RSS and smoke checks, axe-core accessibility audit, Lighthouse desktop/mobile and report upload.
- PR #17 merged to `main` as `522f1eee26951f3034d9632399b324fb0bdb2a25`. GitHub main branch API confirms this exact SHA. The merge changes project documentation only.
- The PR #17 checkpoint accurately records PR #15 and PR #16 merges. This entry supersedes the earlier statement that PR #17's own CI was pending.
- No public guide/product content, SEO metadata, sitemap, robots policy, DNS or Cloudflare configuration was changed by PR #17. Production deployment marker remains unverified after the documentation merges; do not claim deployment of this SHA without first-party marker evidence.
- PR #13 remains open and unmerged pending explicit approval for its public SEO metadata changes. Existing 25 guides / 100 products remain unchanged. Product importer remains dry-run only.
- Next free discovery step: owner adds/verifies `https://smartpickhub.pages.dev/` in Bing Webmaster Tools (prefer DNS TXT verification through Cloudflare, but do not change DNS without explicit approval); then inspect sitemap and IndexNow activity. Google Search Console/GA4 connection remains outstanding. No paid tools or TinyFish activity.


## 19 November 2026 15:42 UTC — PR #19 SEO metadata CI completed; production approval still pending
- Rebased the earlier SEO metadata refinement onto the then-current `main` in PR #19: https://github.com/ralabsi95-spec/smartpickhub/pull/19. PR head is `9531d5e639e0ee4e7b5b77870751d7de43730f35`; base is `da5380c4648cceda814a0ac1b8f91788adfb7ce7`.
- Exact-head GitHub Actions run ID `44554472134` completed with conclusion `success` on 19 November 2026. All stages passed: locked dependency install/audit, Astro type/content checks, importer dry-run and isolated E2E tests, catalogue/affiliate destination validation, static build, RSS validation, generated-page/SEO/JSON-LD/affiliate smoke tests, axe-core across catalogue routes, Lighthouse desktop/mobile and representative templates, consolidated report generation and upload.
- PR #19 changes only `src/data/products.json` and `src/pages/guides/[slug].astro`: 25 unique SEO titles (30–49 characters), four shortened SEO descriptions (maximum 150 characters), and HTML metadata fallbacks to existing guide title/summary. Existing visible H1 headings and the availabilityNote template typing are preserved. Removing the SEO fields from the PR catalogue makes it byte-equivalent in data structure to the current main catalogue; no product identities or product content were otherwise altered.
- **PR #19 remains OPEN and UNMERGED.** CI success is not publication approval. The owner has not yet given explicit approval in this checkpoint to change public page metadata. Do not merge, deploy or claim the metadata is live until that approval is explicit.
- PR #13 is the older, non-rebased SEO metadata proposal and is not the current review target. PR #19 is the current rebased proposal. Neither is merged.
- Existing 25 guides / 100 product records remain the protected catalogue baseline. No product import, catalogue mutation, affiliate destination change, guide body/H1 change, sitemap/robots/DNS/Cloudflare setting change or paid service was performed in this session. Cloudflare deployment marker and live production metadata were not independently verified.
- Next: retain PR #19 pending explicit production metadata approval. In parallel, continue free first-party indexing setup: owner verifies the site in Bing Webmaster Tools and connects Google Search Console/GA4; do not change DNS or request credentials in chat. No paid tools, TinyFish credits or recurring checks.


## 19 November 2026 16:00 UTC — PR #19 production deployment and commercial-measurement checkpoint
- Owner explicitly approved PR #19 at 15:48:45 UTC. PR #19 was merged at 15:52:08 UTC as merge commit `ed52a5ece4c1e0b088bea83e71dff5c072be90dd`. Cloudflare Pages production check for this exact SHA completed successfully (`Deployed successfully`; deployment ID `26dde362-ebce-4641-9678-8b2d4f8ca141`). The isolated preview deployment also completed successfully (deployment ID `dd5b7fc4-1c2f-40e5-a769-dbea0865ecdc`). This confirms the Pages deployment, not Google/Bing indexing.
- PR #19 scope: 25 concise, unique guide SEO titles and four shortened meta descriptions; visible H1 headings, guide copy, product identities, affiliate destinations, sitemap/robots and catalogue count were not changed. Existing 25 guides / 100 product records remain the protected baseline.
- Main push workflow run #853 (ID `44559641852`) had a failed audit job because the Lighthouse invocation's `npx` dependency resolution returned `ETARGET` for `@sentry/bundler-plugins@11.15.0`. Astro type/content checks, importer dry-run tests, catalogue/affiliate validation, keyword generation, static build, RSS validation, smoke tests and axe-core audit all passed in that run; Lighthouse did not run and the consolidated report was incomplete. The failed job was retried as attempt 2 and completed successfully; all 22 workflow steps passed, including both Lighthouse stages and consolidated report generation. The initial ETARGET was transient dependency resolution, not a source-code or Pages deployment failure.
- Commercial review of the eight Tier-1 guides found four products per guide; all 32 product entries have a manufacturer source and source note, best-for guidance, pros/cons, and UK/US marketplace search identifiers. The guide template already contains a quick comparison, purchase checklist, product detail sections and explicit affiliate link labels. No duplicate content rebuild is needed. Affiliate destinations are Amazon marketplace search URLs unless a verified ASIN is supplied; do not describe them as direct product links.
- Measurement gap remains: `src/layouts/Layout.astro` has no GA4/gtag integration and the product link markup has no outbound-click event tracking. No GA4 Measurement ID has been supplied/verified; do not add analytics code until the owner provides the ID and the consent/privacy approach is settled. Track `amazon_outbound_click` with guide, product, market and link placement only after that prerequisite. Distinguish onsite outbound events from Amazon Associates click/order reports.
- Google Search Console and GA4 first-party reporting remain unconnected to the assistant; Bing Webmaster Tools ownership/status is not confirmed. Search-volume/CPC/keyword-difficulty and actual conversion metrics remain unknown. Tier-1 phrase priorities are hypotheses, not measured winners.
- Five Pinterest RSS-to-board connections remain owner-confirmed; actual Pin ingestion/publication is still unverified. Do not re-submit unchanged IndexNow URLs.
- No product import, catalogue mutation, product-image addition, public guide copy change, DNS change, paid subscription, TinyFish credit purchase or paid SEO check was performed. Continue with free tools only. No passwords or 2FA codes should be requested in chat.
- Next: verify retry attempt 2 for run #853; then continue with owner-side GA4/GSC connection and consent approach. After measurement is available, implement and validate outbound click events in a branch/PR with exact-head CI. Prioritise existing Tier-1 guides; do not create near-duplicate pages.


## 19 November 2026 16:03 UTC — PR #19 audit retry passed
- GitHub Actions run #853 (ID `44559641852`) attempt 2 completed with `success`. All 22 steps passed, including both Lighthouse audits, axe-core, the consolidated JSON report and artifact upload. The initial attempt's `ETARGET` during Lighthouse `npx` resolution did not recur. The production Pages deployment for PR #19 remains confirmed successful.


## 19 November 2026 16:44 UTC — Free SERP and production-verification checkpoint
- Re-read both project records and compared `main` with commit `b28e67a5529576011c8705330ca2f3f95792bdcc`; GitHub reports identical refs (0 ahead / 0 behind). The main push workflow for this commit was already verified successful, with all audit stages passing.
- Attempted independent public reads of the production homepage, `robots.txt` and sitemap-index URL through the available web reader. All three requests returned tool-level “not accessible/internal error” responses. This is **not** evidence that the site is down; it means production HTTP/deployment status for the post-PR #21 main commit remains unverified here. No Cloudflare deployment connector is available in this session. Do not claim the PR #21 merge SHA is live until the Cloudflare Pages deployment record confirms it.
- Conducted a small, qualitative UK SERP sample for commercial queries in air fryers, robot vacuum/mop and dash cams. Current visible competitors emphasize exact UK model identifiers, decision-led “best for” labels, quick comparison tables, dated retailer/model checks, practical trade-offs and feature-specific advice. Examples reviewed: BBC Good Food and Which? on dual-zone air fryers; current specialist robot-vacuum guides on mop lift, dock automation and threshold clearance; dash-cam guides on true front/rear resolution, night recording, parking mode and storage. These are qualitative SERP observations only—not measured search volumes, rankings, difficulty, traffic or conversion evidence.
- Strategic implication: retain the existing 25 guides / 100 products and do not create near-duplicate pages. Prioritise improving existing Tier-1 guide decision usefulness and model-specific differentiation, but verify every current UK SKU/specification and avoid unsubstantiated hands-on/testing claims. Keep the four-product-per-guide baseline until actual evidence justifies expansion.
- MerchantWords public result for the UK query “robot vacuum cleaner with mop” displayed an estimated 8,500 search volume and 8,800 / 9,300 recent averages for a related phrase; treat this as a third-party vendor estimate, not Google Search Console data, not a confirmed volume for SmartPickHub, and not a reason to claim keyword opportunity without further validation.
- GSC, GA4, Bing Webmaster Tools, keyword performance, onsite Amazon outbound-click events and Amazon Associates conversion reports remain unconnected/unavailable for this checkpoint. No analytics code was added because no verified GA4 Measurement ID or consent/privacy decision is on record.
- No public content, product catalogue, affiliate URL, robots/sitemap, DNS, Cloudflare setting or Pinterest configuration was changed. No paid tool, subscription or TinyFish credit was used. Pinterest feed connections remain owner-confirmed; actual Pin ingestion remains unverified.
- Next actionable owner step: connect the existing site property to Google Search Console and create/identify a GA4 web stream, then provide only the Measurement ID (never credentials/2FA) and confirm the consent approach. After that, add `amazon_outbound_click` event tracking in a reviewed PR and use GSC query/click data to prioritize updates.


## 19 November 2026 — AI search visibility research and handoff
- Added `AI_SEARCH_VISIBILITY_PLAN.md` as a documentation-only strategy covering ChatGPT Search, Google AI Overviews/AI Mode and Gemini, Bing/Copilot, Perplexity, and Claude Search. The plan is grounded in current official provider guidance and keeps crawl/search access distinct from model-training permissions.
- Verified source-level crawler baseline: production `src/pages/robots.txt.js` emits `User-agent: * / Allow: /` plus sitemap index; preview emits `Disallow: /`. Therefore OpenAI OAI-SearchBot, PerplexityBot, Claude-SearchBot, Bingbot and other named agents inherit access unless a WAF or provider-specific rule blocks them. This is robots policy only, not proof of actual crawler fetches. Current wildcard also permits training crawlers such as GPTBot and ClaudeBot; do not change training permissions without explicit owner decision.
- Reviewed current guide implementation: semantic Article structure, Article/BreadcrumbList/ItemList JSON-LD, comparison table, buyer checklist, product sections, manufacturer source links, regional Amazon links, paid-link disclosures and no-hands-on-testing caveat are already present. No new pages or catalogue records are needed.
- AI-search content priority: original, useful buyer decisions; exact regional model identity; evidence-linked specifications; visible trade-offs; genuine update dates; clear structure. Avoid mass prompt pages, synthetic experience, fake mentions, unnecessary FAQ schema, and claiming `llms.txt` boosts Google. Google says ordinary SEO and helpful original content remain the foundation; Bing AI Performance provides citations/grounding query data but not traffic/clicks.
- Microsoft announced separate AI Training and AI Grounding controls on 30 October 2026; new preferences begin being honored from 1 February 2027 as pages are crawled. Current site code contains no NoArchive/NoCache directive; no immediate change is required. Recheck provider docs before that date.
- PR #22 passed exact-head CI run #858 (all 23 job steps success) and was merged as `b211f1df1e2f6a677ade31ba9b7e3ccb649c3bc9`. Main matches this SHA. Cloudflare production deployment for the merge SHA remains unverified.
- No public page, catalogue, affiliate links, crawler settings, WAF, DNS, analytics or Pinterest configuration was changed. No paid service or TinyFish credit used. GSC/GA4/Bing account connections and the owner's model-training preference remain pending for a later desktop session.
- Next: exact-head CI for the AI-search plan PR; then continue a non-public, evidence-led Tier-1 guide gap review. Once the owner is back at a computer, connect GSC/GA4/Bing and decide training-vs-search preferences before any crawler policy changes.


## 19 November 2026 — Product discovery, buyer-intent and million-record scale planning

- Reviewed current OpenSEO SmartPickHub project context, all 24 saved UK keywords, monthly trends, five existing buyer-query SERPs and two new product-category seeds. No previous keyword list was recreated or duplicated.
- Early existing-guide opportunities: best cordless vacuum cleaner (27,100 estimated monthly searches, KD 8, commercial); front/rear dash cam UK (2,400, KD 9, commercial); robot vacuum/mop UK (1,300, KD 9, commercial); small air fryer UK (1,000, KD 8, commercial).
- New category candidates: best dehumidifier UK (9,900, KD 15, commercial; compact variant 720/KD 4) and best heated clothes airer (3,600, commercial; KD 0 reported). Both require exact model/source/availability and SERP validation before a guide is proposed. Monthly data shows autumn seasonality and year-on-year declines in some broad terms; do not call these guaranteed rising trends.
- UK SERPs showed AI Overview and People Also Ask modules for sampled categories, plus popular-product modules. This records SERP features, not SmartPickHub AI citations.
- AI visibility tracker is not configured. A proposed 8-prompt × 4-engine UK weekly baseline costs an estimated 64 OpenSEO credits (about US$0.064 per weekly run; about US$0.256 per four-run month). Current balance 28 credits; no tracker/schedule activated.
- OpenSEO project currently has no connected GSC or GA4 account. The GSC property was previously manually verified, but project connector and sitemap diagnostics remain outstanding.
- Reviewed current static Astro output, 100-record JSON catalogue, dry-run CSV/JSON importer (20 MB / 100,000-row limits), and synthetic keyword universe generator. These are MVP foundations, not a million-record platform.
- New scale plan document defines opportunity scoring, product/evidence/image lifecycle, AI/search visibility, PostgreSQL/queue/object-storage/edge-delivery target, sitemap sharding, analytics and staged gates. No production data, product, page, image, dependency or hosting setting was changed.


## 19 November 2026 19:12 UTC — Approved improvement merges and US research continuation
- Owner instructed: continue independently and merge improvements that materially improve SmartPickHub. This is current approval for reviewed, quality-checked improvements; it does not authorize paid services, subscriptions, credentials, DNS/WAF/robots changes, or speculative product/page publication.
- Merged PR #24 as `aa51352835a6dafe38e94e65c4be6dbbe1c187ec`: Garmin X210/X310 manufacturer source corrections. The X210/X310 sourceNote links were also corrected to Garmin's official comparison page; the actual X110 record retains its X110 URL. Exact-head build-and-audit and both Pages deployments passed.
- Merged PR #25 as `d0cfd9405f05bc18d881c4dc033a18af3321ad9c`: public How We Research transparency page and navigation/homepage links. Exact-head build-and-audit and both Pages deployments passed.
- Merged PR #28 as `b8bb2bafbd1e68d7162c35aea47ef0f5a9860246`: million-record product discovery/scale plan, UK category research notes, and safe skip guard when GEMINI_API_KEY is absent. Exact-head build-and-audit and Pages deployments passed.
- Merged PR #29 as `d623268d91f893f06510d68b85ee55c39ea0aec2`: buyer-intent map for all existing 25 guides. Exact-head build-and-audit and Pages deployments passed.
- In these PRs, the separate legacy Workers build check remained failed while the actual Cloudflare Pages production and preview deployment checks passed. This is the already-known separate Workers configuration, not a new Pages outage; do not reopen it as a blocker.
- PR #30's documentation content remains useful, but its original branch conflicted after the above merges because it edited the same project handoff files. Do not force-merge it. A clean replacement branch was created from current main to carry forward the US/global trend plan and fresh status update.
- No new products, ASINs, prices, product images, affiliate links, paid keyword research, paid AI visibility, scheduled automations, DNS/WAF/robots changes or unreviewed product pages were added. Current last-known OpenSEO credit balance remains 28, below approximate 54 credits per seed.
- Current production/main baseline before this documentation-only continuation: `d623268d91f893f06510d68b85ee55c39ea0aec2`. Confirm subsequent Pages deployment check for the merged content before calling the new main SHA live.


## 19 November 2026 20:05 UTC — PR #31 merged; continuity checkpoint
- PR #31, `Carry forward US market and global trend research plan`, was merged by squash after reviewing its four-file scope (AGENT_HANDOFF.md, MASTER_PROJECT.md, README.md, and the new US_GLOBAL_TREND_PREPAREDNESS_PLAN.md). Merge commit: `8f6a95a328c7d131e94b7de0de6f0bf4702c4dae`. Subsequent documentation-only continuity commits updated MASTER_PROJECT and AGENT_HANDOFF; latest verified `main` is `27ed4cdb8918c6bb23ea4f829ef97a92a04f6449`. PR #31 is closed/merged.
- Exact-head PR validation for `45cfa74aadbc983e7bae872b3d2d9d908d2de9ef`: GitHub Actions run `44596709375` completed successfully. The build-and-audit job passed, including locked dependency install/audit capture, Astro type/content checks, importer dry-run and isolated E2E tests, catalogue/affiliate validation, static build, Pinterest RSS checks, generated-page/SEO/JSON-LD/affiliate smoke tests, axe-core accessibility audit, Lighthouse desktop/mobile and representative templates, consolidated report and artifact upload.
- On that same PR head, Cloudflare Pages production and preview checks both completed successfully. The separate legacy Workers build check failed; this is the known distinct Workers check, not a failed Pages deployment and not a reason to reopen the old issue.
- After merge, the first main-push checks for `8f6a95a328c7d131e94b7de0de6f0bf4702c4dae` had started. Two documentation-only continuity commits followed (`b142df4faef7d0318e432e0ac37074311b4a36f3`, then `27ed4cdb8918c6bb23ea4f829ef97a92a04f6449`). At the latest read, the Pages production check for the latest `main` SHA was still in progress; no completed main-SHA deployment confirmation was available. Preview post-merge status was not visible.
- PR #31 added a 223-line research/implementation plan only; no products, guide copy, page metadata, images, affiliate links, analytics, crawler rules, DNS/WAF settings or production configuration were changed. The plan keeps UK as primary and US as a parallel market; treats trends as hypotheses until validated; frames preparedness as civil resilience, not fear/war marketing; and defines a gated detect→verify→classify→SERP/evidence→product/variant verification→draft→QA→owner approval→publish workflow.
- PR #30's original conflicting branch remains superseded; do not retry or force-merge it. PR #31 is the clean replacement and is now merged. PRs #26/#27 remain stale documentation checkpoints, not merge candidates.
- Current strategic baseline remains 25 guides / 100 product records. No new catalogue entries were created. UK marketplace search destinations are not direct verified ASIN links. Product images remain optional and must have documented commercial reuse rights; retain current text cards where no suitable licensed image exists.
- No paid OpenSEO keyword batch, AI visibility check, TinyFish task, subscription, recurring paid automation, or paid service was started. Last-known OpenSEO balance is 28 credits; approximate research cost is 54 credits per seed. Do not spend credits without explicit approval.
- Next: poll main-SHA checks/deployment for `8f6a95a328c7d131e94b7de0de6f0bf4702c4dae`; then continue free, non-mutating official-source research for emergency radios/backup power and evidence-led updates to existing Tier-1 guides. Do not add products/pages or publish content without the existing evidence and owner-approval gates.


## 19 November 2026 20:24 UTC — Main CI and deployment verified; handoff refreshed
- Rechecked GitHub main ref and latest commit `ddf8f636fb8493ba6a6d087d2c1864e9bbfd3e00`. PR #31 remains merged/closed; its squash merge SHA is `8f6a95a328c7d131e94b7de0de6f0bf4702c4dae`.
- Exact-main build-and-audit run `44604477800` completed successfully on `ddf8f636fb8493ba6a6d087d2c1864e9bbfd3e00`.
- Exact-main Cloudflare Pages production and preview checks completed successfully. The separate Workers check also completed successfully on this SHA; earlier failed Workers results belong to older commits and should not be represented as the current state.
- IndexNow notification-related checks on this SHA were skipped/conditional; no new IndexNow accepted URL batch was confirmed. Do not claim a new submission.
- No application/catalogue/public content change occurred in this verification. Existing 25 guides / 100 products remain protected. PR #31 is a research plan, not a product/page release.
- Updated `AGENT_HANDOFF.md` to put this verified state first and to direct future agents to re-check current main/checks. The handoff update creates a new docs-only main commit; its own deployment status must be checked separately. No paid service, keyword credit, subscription or TinyFish task was used.
- Next: verify the post-handoff commit checks, then continue free official-source research for emergency radios/backup power and evidence-led improvement opportunities within existing Tier-1 guides. Preserve all product/page approval gates.


## 19 November 2026 20:30 UTC — Free radio and backup-power source validation (research branch)
- Created non-production branch `research/radio-power-source-validation-20261119` from main `b4f3ad1b7c405d0aeb8940e5c7895c25c272d6eb` after confirming PR #31 merge and exact-main CI/Pages checks on that base.
- Added an evidence snapshot to `US_GLOBAL_TREND_PREPAREDNESS_PLAN.md` covering UK radio candidates Roberts SolarDAB 99 and Sangean MMR-88 DAB+, US candidate Midland ER310PRO, and preliminary UK portable-power candidate EcoFlow RIVER 2. Each entry distinguishes manufacturer-stated specifications from unresolved retail/variant/ASIN/availability checks.
- Key regional safeguard: NOAA Weather Radio is a US-specific alert system and must not be promoted as a UK emergency-radio feature. UK screening should prioritise FM/DAB+ compatibility; US NOAA models must be assessed against FEMA guidance and the exact US SKU.
- The official UK Government Be Ready and British Red Cross guidance support practical 72-hour household preparedness; FEMA's checklist supports a US emergency kit and NOAA-capable radio. This evidence supports civil resilience messaging, not fear/war messaging.
- EcoFlow UK search snapshot showed RIVER 2 sold out; its £ price/availability is volatile and must not be published. The Sangean MMR-88 DAB+ official page lists 850 mAh and 8-hour stated playtime; its 5V/0.3A USB output means it should not be positioned as a substantial phone power bank.
- **No catalogue or production change:** no products, ASINs, affiliate links, prices, ratings, images or guide pages were added or changed. This is a research-only appendix and remains subject to exact-head CI and PR review.
- Next: complete build/audit and Pages checks on this branch; inspect official manufacturer evidence for any additional UK/US candidates only if it materially improves comparison coverage. Merge documentation only if checks pass; keep all product intake gates intact.


## 23 November 2026 — Product comparison structured-data correction (owner-approved)
- Owner approved a review-only fix after Google Search Console's live test for `/guides/air-fryers-us-uk/` found eight invalid Product items: four products each appeared twice, with the critical issue that `offers`, `review` or `aggregateRating` was missing. The same live test confirmed the page can be indexed and one BreadcrumbList was valid.
- Root cause in `src/pages/guides/[slug].astro`: the ItemList was nested as Article.mainEntity and also emitted separately in `@graph`; its entries used Product despite the catalogue deliberately containing no verified offers, reviews or aggregate ratings.
- Proposed correction: emit one graph-level ItemList with a stable `@id`, reference it from Article.mainEntity, and use descriptive Thing items for editorial comparison entries. Preserve all product names/descriptions, visible content, catalogue records, images, affiliate URLs/CTAs and BreadcrumbList.
- Add regression checks in `scripts/smoke-test.mjs` for exactly one ItemList, Article.mainEntity @id linkage, Thing entries, and absence of Product rich-result entities on editorial comparison guides.
- Add mandatory future-product standard in `PRODUCT_STRUCTURED_DATA_POLICY.md`, linked from README and PRODUCT_INGESTION_PLAYBOOK.md. No invented offers, prices, reviews, ratings, seller or stock. Product markup only for genuine individual product pages with current, visible, market-specific evidence and Google's current required fields.
- Branch: `fix/product-comparison-jsonld-policy-20261123`, based on main `26636d4359508b9af30eec498a22ffc005a81a72`. No merge or production deployment authorized. GitHub Actions allowance was last recorded as exhausted through the current billing cycle; PR creation would trigger the pull_request quality workflow. Hold PR opening until quota availability is verified, then run exact-head CI before review. This is a safety hold, not a completed CI result.


## 23 November 2026 — GitHub Actions quota-aware QA cadence
- Owner approved a quota-aware testing policy: avoid repeated full audits for harmless documentation-only updates; run essential checks on relevant code/content changes; reserve axe-core and Lighthouse plus the full pipeline for a weekly scheduled run or deliberate manual comprehensive run.
- Updated `.github/workflows/build-check.yml`: only main pushes and main-targeted PRs trigger automatically; Markdown/docs-only changes are ignored; concurrent obsolete runs are cancelled; core type/content, importer, catalogue/affiliate, build, distribution and smoke checks remain on relevant PR/main changes; Chromium, full-route axe and Lighthouse are scheduled/manual comprehensive checks.
- Weekly comprehensive schedule: Sundays at 03:00 UTC. Manual workflow dispatch also performs the comprehensive suite. No change to product/page release approvals or deployment controls.
- This reduces Actions minutes while retaining fast safety gates for real code/content changes. Security/dependency/schema/template changes must still receive the full suite before merge; if the quota is unavailable, wait for reset or use an approved external/local test route rather than bypassing validation.


## 23 November 2026 06:00 UTC — PR #35 merged, production deployment verified
- Owner approved merge and production deployment after reviewing Google Search Console live-test screenshots showing eight invalid Product items on `/guides/air-fryers-us-uk/` (four products duplicated; missing `offers`, `review` or `aggregateRating`).
- PR #35, `Fix comparison JSON-LD and introduce quota-aware QA cadence`, merged successfully. Merge commit: `03abb338693f29de1cca36a8f92ceec28aa4cf9a`. PR: https://github.com/ralabsi95-spec/smartpickhub/pull/35
- Exact merge-SHA GitHub Actions `build-and-audit` completed successfully (run `45120840750`; job `137513993376`). Cloudflare Pages production deployment, isolated preview deployment and Workers Builds check all completed successfully for the merge SHA. Production deployment: https://dash.cloudflare.com/?to=/511292ff40ac0ed9d35373ffdefd2dd5/pages/view/smartpickhub/a0aaec62-c67c-4eca-b92b-35104d8ddb46
- Live production fetch of `https://smartpickhub.pages.dev/guides/air-fryers-us-uk/` succeeded after deployment. Confirmed canonical URL is self-referencing, page metadata is `index, follow`, title/description are present, and the page content and four-product comparison remain visible. The fetch extractor strips scripts, so this check does not independently inspect the deployed JSON-LD script body; the exact-SHA smoke tests are the evidence for the graph correction. Do not claim a fresh Google Search Console live test has been run.
- Code correction: one graph-level ItemList with stable `@id`, Article.mainEntity reference by `@id`, and descriptive `Thing` comparison entries instead of ineligible Product rich-result entities. Regression smoke tests enforce one ItemList, correct linkage and Thing entries.
- Added `PRODUCT_STRUCTURED_DATA_POLICY.md` as the mandatory standard for future product data: no fabricated offers, reviews, aggregate ratings, prices, seller or stock; market-specific, visible, current evidence is required before eligible Product markup.
- Quota-aware CI is now active: core checks on relevant PR/main code changes; docs-only Markdown changes ignored; axe/Lighthouse comprehensive checks weekly Sundays 03:00 UTC or deliberate manual dispatch. No full comprehensive run was launched for this release.
- Preserved all catalogue records (25 guides / 100 products), visible product content, Amazon US/UK links and tracking IDs, CTAs, sitemap, crawler settings and analytics configuration. No product import, new page, content rewrite, paid service or analytics change.
- IndexNow notification workflow run `45120919978` was still in progress at the time of this entry; a separate post-production notification run `45120920054` was skipped. Do not claim an IndexNow submission/acceptance until the former finishes with a verified result.
- Outstanding: rerun the Google Search Console live test on the production URL to confirm Google now sees no invalid Product items; this is a Google-side validation, distinct from successful code/deployment checks. Continue the previously agreed index-status monitoring through 15 December 2026; do not repeatedly request indexing.


## 23 November 2026 06:10 UTC — Live indexability audit of all sitemap URLs
- Read live `sitemap-index.xml` and its child `sitemap-0.xml`: 29 public URLs total, comprising 25 buying guides plus homepage, guide library, affiliate disclosure and How We Research.
- Read live `robots.txt`: wildcard user-agent is allowed and sitemap-index is declared.
- Audited all 25 guide page heads in read-only batches. Result: 25/25 returned successfully; each has a unique self-referencing canonical matching its live URL, `robots=index, follow, max-image-preview:large`, a non-empty title and meta description, and Open Graph image metadata. All titles were <=60 characters and descriptions <=160 characters in this captured set.
- Audited the four non-guide sitemap pages: homepage, `/guides/`, `/affiliate-disclosure/` and `/how-we-research/`. All four returned with self-referencing canonical, `index, follow`, title and meta description. The extractor did not detect OG image metadata on these four pages; this is a social-sharing enhancement opportunity, not a robots/canonical/indexability blocker. No change made.
- Live JSON-LD script extraction was attempted but the public-page extraction tool strips script content. Therefore no claim is made that every live script body was independently parsed. The merged-SHA `build-and-audit` run #45120840750 passed; repository smoke test iterates generated HTML pages and validates robots/noindex, sitemap/robots, canonical, internal links, and for every guide: Article, BreadcrumbList/ItemList, exactly one ItemList, Thing entries, no Product rich-result entities, correct Article.mainEntity @id, product count, image metadata, and both Amazon markets/tracking IDs/rel attributes.
- GSC screenshot supplied by owner on 23 November shows the live URL test for `/guides/air-fryers-us-uk/` now reports URL available to Google, page can be indexed and one valid Breadcrumb item; no Product error cards are visible in that screenshot. This is one page's live test, not evidence that all 25 URLs are indexed.
- No site code, content, catalogue, affiliate links, sitemap, crawler rules or deployment settings were changed during this audit. This entry is documentation only.
- Next: use Search Console Pages/Indexing report to check actual indexed/not-indexed status across all 29 URLs; use URL Inspection live test only for anomalies or priority pages. Do not repeatedly request indexing. Optional future task: add deliberate Open Graph image metadata to the four non-guide pages if social preview consistency is approved.


## 23 November 2026 06:13 UTC — Search Console URL Inspection and performance baseline
- Confirmed OpenSEO project is bound to the verified Search Console property `https://smartpickhub.pages.dev/` with siteOwner permission. A legacy InfinityFree property is also visible in the Google account but is not selected and remains outside the project; do not use it.
- Queried URL Inspection for all 25 sitemap guide URLs and the four other sitemap pages (homepage, `/guides/`, `/affiliate-disclosure/`, `/how-we-research/`): 28 of 29 returned `coverageState: URL is unknown to Google`, with indexing/robots/page-fetch states unspecified. The homepage alone returned `Submitted and indexed`, robots allowed, fetch successful, mobile crawl, and matching Google/user canonical. This is the first actual GSC index-status snapshot; it supersedes any inference that all pages may already be indexed. Do not describe the 28 unknown URLs as blocked or technically noindex; live metadata audit showed index-follow and self-canonicals.
- Search Console Web performance, final data 2026-10-24 through 2026-11-20, grouped by page: one row only (homepage), 0 clicks, 3 impressions, CTR 0%, average position 88.3. No guide page appeared in this final 28-day page report.
- Interpretation: technical crawl/index eligibility is healthy, but Google has not yet surfaced index-status records for the 28 other sitemap URLs in this inspection snapshot. The supplied live test for the air-fryers page confirms it can be indexed, not that it has been indexed.
- Respect the owner's existing decision: no mass URL inspection requests, no repeated indexing requests, and no sitemap/Astro/robots changes before the agreed 15 December 2026 review checkpoint. Continue passive monitoring; on/after 15 Dec, compare URL Inspection and Pages report again and only then decide whether targeted escalation is justified.
- No website code/content/affiliate/catalogue changes made from this GSC review. Search Console read-only queries only.


## 23 November 2026 06:32 UTC — Second GSC live-test evidence and indexing decision reaffirmed
- Owner supplied a Google Search Console URL Inspection screenshot for `/guides/4k-usb-c-monitors-home-office-us-uk/` (tested 23 Nov 2026, 9:30 AM Jordan local time / 06:30 UTC). It reports **URL is available to Google**, **Page can be indexed**, and **one valid Breadcrumbs item**. No Product rich-result error card is visible in the screenshot.
- Together with the earlier owner-supplied live-test screenshot for `/guides/air-fryers-us-uk/`, this gives two priority-guide live tests with positive crawl/index eligibility and valid Breadcrumbs. These are live-test results only; neither proves that Google has indexed the guide. The actual indexed/unknown status remains the URL Inspection indexing report baseline recorded above.
- The owner asked whether to request indexing for the five most important guides. Recommendation given: do not submit requests now; preserve the previously agreed passive-monitoring checkpoint through 15 December 2026. No Request Indexing action was taken, no URL was submitted, and no sitemap/Astro/robots/site change was made.
- Decision remains: no repeated or mass indexing requests before/on 15 Dec; review GSC Pages and actual URL Inspection status on or after 15 Dec, then decide whether a small, evidence-based targeted request is warranted. Any earlier exception requires the owner's explicit approval.
- Next action: on/after 15 Dec, compare actual indexing status for the 29 sitemap URLs, prioritise commercial guides based on evidence, and distinguish "URL is available to Google" from "Submitted and indexed"/actual indexed state.


## 23 November 2026 07:05 UTC — Pinterest, other search engines and AI visibility review
- Pinterest Metricool brand `SmartPickHub_Guides` (ID `7901675`) is connected with timezone `Asia/Amman`. Five production RSS feeds were re-fetched successfully; their live entries total 25 (5/5/6/6/3) and the source generator emits RSS 2.0 image enclosures/media content with original 1000×1500 vertical covers.
- Metricool scheduled-post query for 23 Nov 2026–28 Feb 2027 returned no scheduled posts. This checks only the Metricool calendar, not Pinterest native RSS Auto-publish. Pinterest's official RSS workflow is event-driven: new feed items normally become Pins within 24 hours, oldest first, up to 200/day. Account-side settings still need authenticated inspection.
- Metricool Pinterest posts connector returned 29 Pin records (25 on 19 Nov, 4 on 21 Nov), 24 unique titles and five repeated title pairs; Dash Cameras was absent from the returned Pin set despite being in the Travel & Tech RSS feed. The repeated titles are Smartwatches, Noise-Cancelling Headphones, Home Espresso Machines, NAS and Smart Home Security Cameras. Board locations are not exposed, so do not delete or edit without checking the boards. Pin-level totals: 31 impressions, 0 saves, 0 Pin clicks, 0 outbound clicks. Account Evolution separately reports 325 impressions and last recorded 37 followers for the selected period; do not mix account totals with Pin-level totals.
- Low Pinterest reach is confirmed for the sampled new Pins but no single cause or penalty is established. Account is newly connected, Pins were published in concentrated batches, five duplicate creative/title pairs exist, and one expected feed item was not present in the returned post records. Official Pinterest guidance: claim the site, publish fresh original content consistently (weekly), use high-quality 2:3 vertical creative, descriptive titles/descriptions and relevant boards, and avoid repeated duplicate Pins. No Pins were manually posted/scheduled/deleted in this review.
- Metricool scheduled queue is empty for the queried future window; this does not mean RSS automation is off. Five feed-to-board mappings were owner-confirmed earlier, but native Pinterest saved settings and future RSS ingestion remain unverified. Next: owner-side inspect Settings → Create Pins in bulk → Auto-publish; confirm each feed/board; review duplicate pairs and missing Dash Cameras; then test one newly approved guide without manual duplicate posting.
- Search Console: canonical GSC property `https://smartpickhub.pages.dev/` is connected in OpenSEO and selected with siteOwner permission. Do not use the legacy InfinityFree property. Actual index baseline unchanged: homepage indexed; 28 other sitemap URLs unknown to Google; two guide live tests confirm eligibility only. Performance through 20 Nov: homepage only, 0 clicks, 3 impressions, avg position 88.3.
- Bing Webmaster Tools ownership/property and sitemap processing remain unconfirmed. IndexNow implementation exists but no successful notification receipt/index outcome is claimed without a verified workflow result. DuckDuckGo says most traditional web links are largely sourced from Bing, so Bing verification and index monitoring are the priority for Bing and a substantial portion of DDG's traditional results.
- AI visibility: OpenSEO tracker is not configured (zero topics/prompts/runs); engines available in the tool include ChatGPT, Gemini, Google AI Overviews/AI Mode, Claude and Perplexity. Provider integration is configured; current balance 28 credits. No paid AI visibility run or recurring schedule was started. Production wildcard robots allow means OAI-SearchBot and GPTBot inherit crawl permission, but actual crawler visits/WAF passage are unknown. GPTBot training policy remains undecided; do not alter it without separate owner approval.
- No site, analytics, robots, sitemap, DNS, WAF, content, catalogue, Pinterest board, Pin, scheduling or paid-service changes were made. This was a read-only diagnostic and documentation checkpoint.
- Next work: confirm Pinterest's five RSS auto-publish mappings and investigate duplicates/missing Dash Cameras; connect/verify Bing Webmaster Tools and submit the canonical sitemap index; inspect verified IndexNow receipts; keep Google indexing passive until 15 Dec; only enable AI visibility collection after an explicit credit/budget decision.
 

## 23 November 2026 12:12 UTC — Pinterest board mapping owner confirmation
- Owner explicitly confirms all five Pinterest RSS feeds are correctly mapped to their intended boards after checking each one in Pinterest settings. The list and mappings are now owner-verified.
- No Pinterest settings were changed. Continue investigation only into RSS ingestion history, duplicate Pin records, the missing Dash Cameras Pin in the Metricool sample, and reach/engagement.


## 23 November 2026 12:15 UTC — Pinterest follow-up and analytics correction
- Owner confirms all five Pinterest RSS feeds are correctly mapped to their intended boards. Do not ask again unless evidence contradicts it.
- Source verification: RSS arrays contain 25 guide slugs (5/5/6/6/3), all unique; no duplicate slugs across feeds. All five live feeds contain the expected 25 guide items.
- Pinterest RSS auto-publish is event-driven, not a fixed Metricool schedule: Pinterest says updated feed content is normally added within 24 hours, oldest first, up to 200 Pins/day. Official help says a Pin image can be sourced from image/enclosure/media:content. Current feed generator emits the same image URL in both enclosure and media:content; this is a candidate cause for duplicate Pin ingestion, not proven. Do not change it without a controlled test.
- Detailed Metricool records: 29 unique Pin IDs (25 on 19 Nov, 4 on 21 Nov), 24 unique titles, five duplicated title pairs: Smartwatches, Noise-Cancelling Headphones, Home Espresso Machines, NAS, Smart Home Security Cameras. Paired Pins have same title/description but different IDs; public pages do not reveal board placement/root cause. Do not delete.
- Dash Cameras is missing from Metricool's retrieved Pin set despite being present in the Travel & Tech RSS feed. No duplicate slug exists in source; ingestion reason unknown.
- Corrected metrics: account Evolution (5–23 Nov) = 325 impressions, 7 interactions, 6 Pin clicks, 1 save, 0 outbound clicks, 37 followers latest reported. The selected 29-post sample = 31 impressions, 0 saves, 0 Pin clicks, 0 outbound clicks at retrieval. 19 Nov accounts for 31 published impressions; 21 Nov has 4 published Pins but 0 published impressions at retrieval. Keep account and selected-Pin scopes separate.
- No Pinterest, feed, website or social content changes. Next: inspect board-level history for duplicate IDs and missing Dash Cameras; controlled one-item RSS test before any generator adjustment. No bulk manual Pins.


## 23 November 2026 12:24 UTC — Owner approved free Pinterest automation target
- Owner approved a target of 3 Pins/day for the whole Pinterest account, with possible future increase based on performance, and wants the process automated with no new paid subscription and minimal owner involvement.
- Read-only architecture inspection: Astro static build on Cloudflare Pages; five RSS endpoints generated by `src/pages/rss/[board].xml.js`, currently exposing all eligible assigned guides; 25 unique slugs (5/5/6/6/3); each item emits identical image URL in both `enclosure` and `media:content`; no Pinterest scheduler/API integration or queue/ledger exists; no Cloudflare Pages Functions/KV setup exists.
- Existing workflows include build-check, draft-research and two IndexNow workflows; no Pinterest scheduled workflow. Build-check runs on code pushes to main, so scheduled manifest commits would trigger CI and Pages deployment.
- Pinterest RSS auto-publish is polling/event-driven and can take up to 24 hours; we can cap when items become visible in RSS at 3/day, but cannot promise exact Pinterest publish minutes.
- Proposed free-first design: deterministic release queue + stable GUID/idempotency ledger + GitHub Actions 3 slots/day (07:00, 12:00, 17:00 UTC / 10:00, 15:00, 20:00 Amman) + normal Cloudflare Pages deployment. Keep five RSS URLs and owner-confirmed board mappings. Consider Pages Functions/KV only if scheduled static deployments prove unsuitable.
- Critical bootstrap: current Pinterest ingestion of all 25 existing RSS entries is not reconciled. Metricool reports 29 Pin IDs, but owner screenshot only confirms Travel & Tech board has 7 Pins. Do not hide existing items or activate cadence until per-board legacy GUID inventory is reconciled. Initially apply 3/day only to future approved guides.
- No code, workflows, feed output, Pinterest settings or production configuration changed. New design document created: `PINTEREST_AUTOPUBLISH_AUTOMATION_PLAN.md`, commit `215a76bffe1cfdc86a99f699c56ccd62c867c8b3`.
- Owner approved the objective and cadence target, not yet production activation. Next: build and test a PR/preview-only implementation, preserve current production RSS behavior until bootstrap, and request explicit go-live approval after review.


## 24 November 2026 07:35 Asia/Amman — Pinterest automation quota safeguard
- Owner concerned about GitHub Actions / deployment usage. Official current documentation reviewed: standard GitHub-hosted runners are free for public repositories; Cloudflare Pages Free allows 500 builds/month and one concurrent build.
- Refined the proposed Pinterest automation: do not trigger three separate site builds daily. Release up to three new guide items in one daily batch/manifest update, producing about 30 scheduled Pages builds/month, plus ordinary code-change builds. This preserves the target of up to 3 Pins/day without 90 scheduled deployments/month.
- One GitHub Actions standard runner workflow daily; no Larger Runners, paid SaaS, paid API or paid subscription. Keep weekly comprehensive axe/Lighthouse checks unchanged; daily scheduler must not invoke comprehensive audits.
- Add concurrency/idempotency, max-three/day and monthly build-budget kill switch. Actual Cloudflare account usage remains to be checked in dashboard; 500 is plan limit, not proof of remaining quota.
- A Cloudflare Worker/Pages Function with state store could avoid daily builds but adds complexity and is deferred unless measured usage requires it.
- Design document updated: `PINTEREST_AUTOPUBLISH_AUTOMATION_PLAN.md`, commit `23a8d819c620c49a37619a515c7e674c855e03a5`. No code/workflow/production changes; no scheduled publishing enabled. Continue PR/preview-only until explicit production go-live approval.


## 24 November 2026 07:38 Asia/Amman — Pinterest automation architecture improved to avoid daily Pages builds
- Reassessed quota concern using current Cloudflare docs. Preferred design now avoids GitHub Actions scheduler and avoids daily static Pages deployments entirely.
- New preferred architecture: existing `/rss/:board.xml` URLs served by Cloudflare Pages Functions; a separate Cloudflare Worker with one daily Cron Trigger releases up to 3 newly approved guides globally into a shared Workers KV ledger; Pages Function builds dynamic RSS from a generated approved-only catalogue plus KV release state.
- This preserves existing Pinterest feed URLs and all five owner-confirmed board mappings. Current 25 guides remain legacy-visible until ingestion is reconciled; do not remove or re-release them.
- Official docs: Pages Functions can bind to KV; Workers Cron Triggers run scheduled handlers on UTC; Workers Free docs publish 100,000 requests/day, up to 5 cron triggers/account; KV Free docs publish 100,000 reads/day, 1,000 writes/day and 1GB storage. Actual account usage/entitlements still need dashboard verification.
- This design requires one KV namespace, a Pages production binding, a separately deployed Worker and one daily Cron Trigger. No daily Pages build; normal site builds only when content/code changes. Keep cron inactive until owner approves go-live.
- Added architecture pivot and rollout gates to `PINTEREST_AUTOPUBLISH_AUTOMATION_PLAN.md`, commit `acc1644959a0ae69a721bd1eb6b7db5af0d08d05`.
- No code, Cloudflare resources, bindings, cron triggers, RSS URLs, Pinterest settings, or GitHub Actions workflows changed. Current stage remains design only; next step is branch implementation and local/preview tests, then explicit owner approval for Cloudflare setup and activation.


## 24 November 2026 — Bing Webmaster Tools homepage inspection
- Owner screenshot from Bing URL Inspection for `https://smartpickhub.pages.dev/`: **Indexed successfully; URL can appear on Bing**. This confirms the homepage only; it does not establish indexing of the 25 guide URLs.
- Bing SEO/GEO card shows one notice: missing image alt attribute, 6 instances. Markup card detects OpenGraph.
- Read-only source check: `src/pages/index.astro` renders six featured guide cover images with `alt=""`. They are intentionally decorative duplicates adjacent to visible guide titles, within image anchors marked `aria-hidden="true"`. Bing reports empty alt values as missing. No code change made; consider descriptive alt text only after preserving accessible link semantics and avoiding redundant screen-reader announcements.
- Next user-side check: open Bing Webmaster Tools > AI Performance (Beta), select available date range (30 days or 3 months), and share screenshot of Overview/Pages/Grounding Queries. Interpret this as citation visibility in supported Microsoft Copilot/Bing AI experiences, not rankings or traffic. Then inspect a high-intent guide URL (suggested: `https://smartpickhub.pages.dev/guides/air-fryers-us-uk/`) to establish whether guide pages are indexed in Bing.
- No Request indexing clicked; no site code/settings changed.


## 24 November 2026 — Bing AI Performance 30-day baseline and homepage image notice
- Owner screenshot of Bing Webmaster Tools > AI Performance with 30D selected: Total Citations = 0; Avg. Cited Pages = 0; time-series flat at zero; Grounding Queries table empty. This establishes no citations recorded in this report for supported Microsoft Copilot/Bing AI/partner experiences during the selected 30-day period. It does not establish absence from ChatGPT, Gemini, Claude, Perplexity or all AI answers.
- Microsoft documentation says AI Performance aggregates sampled visible citations, refreshes daily with processing delay, and very sparse activity may not surface; zero/empty report is not a penalty or exclusion signal. It measures citations, not rankings, visits or clicks.
- Bing URL Inspection homepage notice: 6 images missing alt. Verified homepage has six featured guide cover images with empty `alt=""` in `src/pages/index.astro`; these are inside image-only links marked `aria-hidden="true"`, with adjacent visible text links to the same guide. They were intentionally treated as decorative; Bing nevertheless reports empty alt as missing. Any change should provide accurate descriptive alt text while removing redundant hidden semantics or restructuring links so screen readers do not announce duplicate content. No code changed.
- Next: inspect one guide URL in Bing URL Inspection (start with `/guides/air-fryers-us-uk/`) to distinguish homepage indexing from guide indexing; inspect AI Performance Pages tab (likely empty at current zero baseline) and record later trend after more time. Do not infer AI visibility on ChatGPT/Gemini/Claude/Perplexity from this Bing report.
- No Request indexing submitted and no production changes made.


## 24 November 2026 — Bing index inspection: Air Fryers guide
- Owner screenshot for `https://smartpickhub.pages.dev/guides/air-fryers-us-uk/` (Bing Index tab): **Indexed successfully; URL can appear on Bing**.
- Bing reports one SEO/GEO error: `Title too long`, one instance; help text says titles longer than 70 characters may be truncated/ignored.
- Source of truth check: `src/data/products.json` guide record has `seoTitle` = `Air Fryers: Single Basket, Dual-Zone & Steam` (44 chars); visible H1/title field is `Air Fryers for US & UK Kitchens: Single-Basket, Dual-Zone and Steam Models` (74 chars). `src/pages/guides/[slug].astro` passes `guide.seoTitle ?? guide.title` to Layout's `<title>`, and deployed live fetch confirms page title is the 44-character SEO title. The H1 remains 74 characters.
- Therefore the indexed Bing notice may reflect stale indexed metadata or Bing's interpretation of the visible title/H1; it does not match the currently deployed HTML `<title>`. Do not change the approved SEO title or H1 based on this notice alone.
- Next diagnostic: inspect the same URL under Bing's **Live URL** tab / live test to see whether the title-length warning persists for the currently fetched page. If Live URL is clean while Bing Index still warns, treat as stale index data and monitor; if Live URL warns, capture the detailed offending element before editing.
- No Request indexing clicked; no code changes made.


## 24 November 2026 — Bing Live URL test resolves Air Fryers title warning
- Owner screenshot for `https://smartpickhub.pages.dev/guides/air-fryers-us-uk/`, Bing **Live URL** tab, tested 07:47: **URL can be indexed by Bing**; page can appear in Bing results subject to quality checks and indexing.
- Live test reports **No SEO/GEO issues found**. It detects **2 markup types** (the screenshot does not show their names because the section is collapsed).
- Combined with previous Bing Index tab warning (`Title too long`) and current source/live HTML showing a 44-character SEO `<title>`, this confirms the long-title warning is not present in the live test and is likely stale index-side metadata or a difference in Bing's indexed snapshot. Do not alter the current SEO title/H1 based on the old warning.
- No Request indexing clicked. Live test success is eligibility, not proof of indexed status; indexed status was separately confirmed by the Bing Index tab.
- Next optional diagnostic: expand the "2 Markup types found" card if user wants to identify them; no SEO fix needed from this live test.


## 24 November 2026 — Bing Live URL markup details: Air Fryers
- Owner expanded Bing Live URL "2 Markup types found" for `/guides/air-fryers-us-uk/`: detected **JSON-LD** and **OpenGraph**.
- Combined Live URL result: URL can be indexed by Bing; no SEO/GEO issues; markup types JSON-LD + OpenGraph.
- This confirms Bing's live fetch recognizes the page's structured-data script and social metadata. It does not by itself certify every JSON-LD property or rich-result eligibility; those are separately validated by project build smoke tests and Google-specific tools.
- No code changed and no indexing request submitted.


## 24 November 2026 — Next Bing inspection target verified
- Verified live deployed portable power guide URL and title before sending owner to Bing:
  `https://smartpickhub.pages.dev/guides/portable-power-travel-tech-us-uk/`
- Live page title: `Portable Power Banks & Stations: US & UK Guide`; H1: `Portable Power & Travel Tech: Power Banks and Compact Power Stations`; page content is published and approved in `src/data/products.json`.
- Correction: the earlier suggested slug `portable-power-stations-us-uk` was not the actual route. Use the verified slug above.
- Next owner action: inspect this exact URL in Bing Webmaster Tools > URL Inspection > Bing Index. This will add an independent guide-level Bing index datapoint; do not request indexing yet.


## 24 November 2026 — Bing Blocked result: Portable Power guide
- Owner screenshot of Bing URL Inspection > Bing Index for `/guides/portable-power-travel-tech-us-uk/`: status **Blocked — URL cannot appear on Bing**. Bing says URL is known but has issues preventing it from being served. Screenshot does not expose the specific cause; SEO/GEO and markup processing unavailable because URL is not indexed.
- Read-only live checks performed: page returns its full published guide content and SEO title `Portable Power Banks & Stations: US & UK Guide`; URL is present in live `sitemap-0.xml` (29 URLs total); live `robots.txt` says `User-agent: * Allow: /` and points to sitemap index. These checks rule out absence from sitemap and a global robots.txt disallow, but do not rule out Bing quality/policy signals or page-specific directives not exposed by the text fetch.
- Important distinction: Bing's indexed snapshot status for this one URL is Blocked; this is not proof that all guides are blocked or that Google shares the same decision. Previous Bing Index results for homepage and Air Fryers were Indexed successfully; Air Fryers Live URL had no SEO/GEO issues.
- Google Search Console baseline from 23 Nov: homepage indexed; 28 other sitemap URLs (25 guides + 3 pages) reported `URL is unknown to Google` at that snapshot, not a technical noindex/robots block. No GSC recheck on 24 Nov yet.
- Next diagnostic: on the same Portable Power URL, run Bing **Live URL** inspection and capture any live SEO/GEO issue / crawlability result. Do not request indexing yet. Then use GSC URL Inspection for this exact URL to obtain Google's current Page indexing reason. Do not change page or sitemap before these diagnostics.
- No production changes, no indexing requests, no sitemap/robots changes.


## 24 November 2026 — Bing Live URL clears Portable Power concerns
- Owner screenshot for `https://smartpickhub.pages.dev/guides/portable-power-travel-tech-us-uk/`, Bing **Live URL** tab, tested 08:16: **URL can be indexed by Bing**, **No SEO/GEO issues found**, markup detected: **JSON-LD** and **OpenGraph**.
- Earlier Bing Index tab for the same URL showed **Blocked**. Live test demonstrates the currently fetched page is crawlable/eligible and has no reported SEO/GEO issue. The indexed-state block remains an index-side serving/status discrepancy; its specific reason is not exposed by either screenshot. Do not claim the URL is indexed in Bing yet.
- Together with live checks showing the URL in sitemap and robots.txt allowing crawling, there is no current evidence of a page-level technical block. Remaining possibilities include Bing's indexed snapshot / quality / serving decision; cannot diagnose further without Bing Site Explorer / URL details or recrawl.
- Next: inspect this exact URL in Google Search Console URL Inspection (not Bing), record Page indexing status/reason and last crawl. Do not click Bing Request indexing or Google Request indexing until the GSC reason is known; then decide on one targeted request if appropriate.
- No production code/config changes, no indexing request submitted.


## 24 November 2026 — Google Live Test: Portable Power guide
- Owner screenshot of Google Search Console URL Inspection, **LIVE TEST** tab for `https://smartpickhub.pages.dev/guides/portable-power-travel-tech-us-uk/`, tested 24 Nov 2026 08:19 AM:
  - **URL is available to Google**
  - **Page can be indexed**
  - Breadcrumbs: **1 valid item detected**
  - No Product enhancement shown; screenshot does not establish Product rich-result eligibility or index status.
- This aligns with Bing Live URL test (can be indexed, no SEO/GEO issues, JSON-LD + OpenGraph) and rules against an obvious current live crawlability/robots/SEO block for this URL.
- Critical distinction: this is a live eligibility test, not proof of inclusion in Google's index. The Google Index tab is still needed to establish actual indexing state, reason if not indexed, last crawl and Google-selected canonical.
- Next: owner switches to **GOOGLE INDEX** tab for the same exact URL and shares the full result. Do not click Request Indexing yet; decide after reading actual index status and exclusion reason.
- No code/content/sitemap/robots changes and no indexing request submitted.


## 24 November 2026 — Google Index diagnosis: Portable Power is undiscovered (not crawled/rejected)
- Owner GSC GOOGLE INDEX screenshot for `/guides/portable-power-travel-tech-us-uk/`:
  - `URL is not on Google`
  - Page indexing: `URL is unknown to Google`
  - Sitemaps: `No referring sitemaps detected`
  - Referring page: `None detected`
  - Last crawl / Crawled as / Crawl allowed / Page fetch / Indexing allowed: `N/A`
- Interpretation per official Google URL Inspection docs: `URL is unknown to Google` means Google has not seen this URL before. This is not a crawl rejection, quality rejection, noindex or robots block; no crawl has been recorded. The "No referring sitemap" field does not prove the sitemap is broken or unsubmitted: Google reports sitemaps that it can associate with a URL, and an unknown URL may not yet have been processed against the sitemap. Sitemap report submission/processing status should be checked separately.
- Same URL's GSC LIVE TEST passed: URL available to Google, page can be indexed, one valid Breadcrumb. Bing Live URL also passed with no SEO/GEO issues, JSON-LD and OpenGraph. Live eligibility is distinct from index inclusion.
- The page is confirmed present in live sitemap-0.xml and robots.txt allows all crawlers. Therefore do not change sitemap, robots, canonical or page content based on this screenshot.
- Recommended targeted next action: submit this one URL using GSC **Request indexing**, because Google explicitly recommends this for `URL is unknown to Google` after a successful live test. This is one targeted request, not mass submission; request does not guarantee indexing and processing can take days or longer. Owner has not yet confirmed clicking it.
- Separately open GSC > Sitemaps and verify whether `https://smartpickhub.pages.dev/sitemap-index.xml` is listed with Status Success and discovered page count. Do not resubmit or change sitemap if already successful.
- No code/site changes and no indexing request submitted by assistant.
