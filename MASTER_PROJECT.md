# SmartPickHub – Master Project

**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Implementation branch:** `automation/bootstrap`  
**Status:** Initial Astro foundation committed for review; not merged to main and not approved for production deployment.  
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
- Cloudflare Pages is a proposed deployment target; production connection and domain mapping must be verified before deployment.
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
- Build/test status must be checked before any pull request or production switch.

## Next steps
1. Inspect Cloudflare Pages project and confirm production branch/domain before merging.
2. Run dependency installation and Astro build in CI.
3. Review generated preview visually and technically.
4. Decide whether this Astro site complements or replaces WordPress; do not assume migration.
5. Only after explicit approval, open/merge a pull request and configure production deployment.
