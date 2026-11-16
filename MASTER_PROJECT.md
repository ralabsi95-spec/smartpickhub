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
- Product data starts empty deliberately. Existing WordPress products must not be duplicated.
- RSS endpoint is generated from approved guides.
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
