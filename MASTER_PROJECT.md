# SmartPickHub – Master Project

**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Implementation branch:** `automation/bootstrap`  
**Status:** Astro MVP production origin approved as https://smartpickhub.pages.dev; development branch only, not merged to main and still protected by noindex pending launch approval.  
**Updated:** 17 November 2026

## Project purpose
Build a trustworthy English-language affiliate buying-guide property for US and UK shoppers. Prioritise useful original guidance, verified product information, organic discovery and measurable conversions.

## Existing live property – preserve
- Approved MVP production URL: https://smartpickhub.pages.dev/ (Cloudflare Pages + Astro).
- The paid custom domain (.com / .org) is deferred to phase two, after the MVP produces measurable results.
- The legacy WordPress installation is outside this deployment plan and has not been modified, migrated, redirected or replaced by this repository bootstrap.
- Do not change or migrate the legacy WordPress installation without a separately approved plan and verified backup.

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
- Current Astro catalogue contains 25 research-draft guides and 100 product records; none is approved for publication. Existing WordPress products were not imported and must not be duplicated.
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
