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
