# Espresso Pilot — Draft-to-Site Mapping Assessment

**Date:** 2026-11-18  
**Status:** Read-only implementation assessment; no application or catalogue edits  
**Target guide:** `espresso-coffee-machines-us-uk`

## 1. Current implementation shape

The guide is stored as one object in `src/data/products.json`. The current renderer in `src/pages/guides/[slug].astro` supports:

- Guide-level: `title`, `category`, `publishedAt`, `summary`, `introduction`, `editorialStatus`, `buyingChecklist`.
- Product-level: `name`, `bestFor`, `pros[]`, `cons[]`, `verdict`, `source`, `sourceNote`, `availabilityNote`, `us_identifier`, `uk_identifier`, and optional image metadata.
- The renderer already displays the product image placeholder unless an image has `reviewStatus: "approved"` and a URL.
- Amazon buttons are generated from the existing US/UK identifier fields. The guide explicitly labels Amazon destinations as marketplace search results, not verified direct listings.
- The guide renderer emits Product/ItemList structured data from the product names and descriptions.

## 2. Important content alignment issue

The existing guide is explicitly **US and UK combined**. Its displayed product names currently use Breville BES identifiers, while its UK identifier fields use Sage SES identifiers. The new approved editorial draft is UK-first and names the four Sage UK models.

Do not simply replace all existing names with Sage names: that could make the US product links and regional identity confusing. Before implementation, the owner/editor should choose one of these approaches:

1. **Keep the combined US/UK guide (recommended for this existing slug):** use a clear regional display name such as “Sage Bambino Plus (UK SES500) / Breville Bambino Plus (US BES500)”, preserve separate US and UK search identifiers, and make UK specifications the primary comparison with a visible regional-variant warning.
2. **Create a separate UK-only guide:** keep this existing US/UK page unchanged and create a new UK-only guide slug with Sage SES model names and UK-only links. This avoids mixed naming but creates a separate content/SEO task and needs explicit approval.
3. **Retain the current shared names:** keep the current Breville-facing names and incorporate Sage SES identifiers only in UK-specific notes. This is the least disruptive option but is less clearly UK-first.

## 3. Draft-to-schema mapping (if option 1 is selected)

| Draft content | Existing schema field | Notes |
|---|---|---|
| Working title | `title` | Keep combined-market framing; avoid implying the page is UK-only |
| Intro and research method | `introduction` / `summary` | Explicitly state UK-first source priority and no hands-on testing |
| Quick comparison workflow | `bestFor` and first `pros[]` | Renderer already uses these in the comparison table |
| Advantages | `pros[]` | Keep concise, evidence-based bullets |
| Points to consider | `cons[]` | No unsupported performance or reliability claims |
| Final product-fit sentence | `verdict` | Editorial fit, not test winner or ranking |
| Sage product page | `source` | Current source URLs are already model-specific Sage GB pages |
| UK manual, electrical rating and caveats | `sourceNote` | Can include a concise manual reference and SES suffix |
| Regional and delivery warnings | `availabilityNote` | Keep distinct from live stock; do not claim availability |
| Pre-purchase checks | `buyingChecklist[]` | Schema and renderer already support it |
| Exact direct listing | Not currently required | Keep search identifiers until a live exact new offer is verified |
| Product image | Optional `image` object | Do not populate until rights are approved |

## 4. Existing data vs. approved draft

- Four existing product records already correspond to the same product families and source pages; do not import or append duplicate products.
- The current product copy is generic and can be refined in place only after the implementation approach is approved.
- Current identifiers are descriptive search phrases, not ASINs. The affiliate helper's existing search-link fallback is appropriate while direct listings remain unverified.
- No current image object is approved. Keep the placeholder.
- The draft contains more editorial detail than the current schema renders as separate headings. It can be adapted to the supported fields without changing the renderer; do not add new UI sections unless separately justified and reviewed.

## 5. Current decision and next gate

**No implementation has been performed.** No JSON, Astro page, affiliate helper, images, routes, SEO metadata, Cloudflare configuration or deployment was changed.

The next implementation decision is whether to retain the combined US/UK guide with UK-first presentation (recommended) or create a distinct UK-only guide. The owner must explicitly approve that content/data change before any edit to `src/data/products.json` or guide rendering. Publication, indexing and production deployment remain separate approvals.
