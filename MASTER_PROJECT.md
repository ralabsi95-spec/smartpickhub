# SmartPickHub – Master Project

**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Implementation branch:** `automation/bootstrap`  
**Status:** Astro preview deployed on isolated Cloudflare Pages; development branch only, not merged to main and not approved for production deployment.  
**Updated:** 16 November 2026

## Project purpose
Build a trustworthy English-language affiliate buying-guide property for US and UK shoppers. Prioritise useful original guidance, verified product information, organic discovery and measurable conversions.

## Existing live property – preserve
- Current site: https://smartpickhub.infinityfree.me/
- Current platform: WordPress on InfinityFree, Astra theme.
- Existing SmartPickHub WordPress plugins and 25 candidate products are not migrated or re-imported by this repository bootstrap.
- Existing WordPress site remains the live reference until a separately approved migration plan and backup are confirmed.
- Do not change, delete, redirect or replace the live WordPress site without explicit approval and a verified backup.

## Affiliate identifiers
- Amazon US: `smartpickh0bc-20` (source-provided; verify account status before use).
- Amazon UK: `smartpickhubu-21` (source-provided).
- Do not invent ASINs, direct product links, prices, ratings, stock, reviews or testing claims.
- Ten-character identifiers are treated as ASINs by the URL helper; only use them after verification for the relevant marketplace.
- Search phrases generate Amazon search URLs, not direct product links.

## Architecture in this branch
- Astro static site foundation.
- GitHub repository as source control and project record.
- Isolated Cloudflare Pages preview: https://smartpickhub-preview.pages.dev/ (project `smartpickhub-preview`, branch `automation/bootstrap`). This is a preview only; no custom domain or production domain mapping.
- Current Astro catalogue contains 10 research-draft guides and 40 product records; none is approved for publication. Existing WordPress products were not imported and must not be duplicated.
- RSS endpoint is generated only from guides explicitly approved for publication; it may remain empty while all guides are drafts.
- JSON-LD is limited to Article metadata; no unverified Product/Review ratings are emitted.

## Automation safety
- Scheduled workflow, when added, must create reviewable drafts only.
- No unattended public publishing, no automatic product importing, no affiliate account actions and no automatic WordPress modifications.
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
