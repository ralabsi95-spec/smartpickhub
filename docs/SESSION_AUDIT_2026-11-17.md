# SmartPickHub — Session audit (17 November 2026)

**Scope:** Read-only review of the existing development preview and a first rights-aware product-image candidate search. This note does not authorize production release.

## Verified repository state

- Working branch: `automation/bootstrap`.
- Catalogue source: `src/data/products.json`.
- Current catalogue read directly from the branch: 25 guides, 100 products.
- Product image metadata records: 0; approved images: 0; pending candidates stored in catalogue: 0.
- Identical US/UK marketplace search phrases: 71. This is a manual regional-review queue, not proof that all 71 are incorrect.
- All 100 product records have a manufacturer source URL.
- All guides remain research drafts; no guide is approved for publication.
- Roadmap document currently reports 52 completed steps and three partial steps (48, 68, 69). Do not claim the 100-step plan is complete.

## Live preview inspection

Checked both:
- https://smartpickhub-preview.pages.dev/
- https://b6896e8e.smartpickhub-preview.pages.dev/

Observed:
- Homepage, guide index, a representative guide, affiliate disclosure and RSS load.
- Navigation and guide search/category filtering were observed to work.
- The guide index displays 25 guide cards.
- Guide cards use generated editorial cover illustrations; these are not product photographs.
- Product detail cards currently show text/specification information and do not show product photographs.
- No broken guide-cover images or navigation links were observed during this browser pass.

### Release-blocking discrepancy to investigate

The repository's current `src/layouts/Layout.astro` contains:
- `<meta name="robots" content="noindex, nofollow" />`
- a canonical link generated from the page URL
- Open Graph title/description and optional image metadata.

However, two live DOM inspections of both preview hostnames reported:
- no `meta[name="robots"]` element;
- no `link[rel="canonical"]` element;
- no `og:url` or `og:image` element.

Both live hosts returned this `robots.txt` content:

```
User-agent: *
Disallow: /
```

The preview is therefore still crawl-blocked by robots.txt, but the served HTML does not match the current layout source as expected. Resolve the deployment/build-output discrepancy and verify the actual served HTML before any production connection, indexing change or release. Do not remove robots blocking as a workaround.

## Initial free-image candidate review

One exact-name candidate was found on Wikimedia Commons:

- File: [Logitech MX Vertical Ergonomic Mouse.jpg](https://commons.wikimedia.org/wiki/File:Logitech_MX_Vertical_Ergonomic_Mouse.jpg)
- File description identifies it as a Logitech MX Vertical advanced ergonomic mouse.
- Dimensions: 1,934 × 2,542 pixels.
- Author/uploader: TaurusEmerald; source is stated as own work.
- Licence: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).
- Commercial reuse is permitted subject to attribution, licence link and share-alike obligations. This is a candidate only, not legal or editorial approval.

Searches for Logitech Lift and Logitech ERGO K860 did not surface an exact Commons file in this initial pass. A generic Logitech TrackMan/trackball photo was rejected as a mismatch for the MX Ergo S. Do not substitute category images or visually similar models for exact product photos.

No candidate has been added to `products.json`; no image is approved or rendered. Before using the MX Vertical candidate, manually inspect the source file and model identity, confirm the licence/attribution requirements, and decide whether to hotlink or make a permitted derivative. If making a local derivative, preserve the CC BY-SA obligations and strip embedded personal location metadata before publication.

The existing project pipeline remains the preferred bulk-discovery path:
- `npm run research:commons` creates candidate-only metadata; it does not approve or download images.
- `npm run audit:images` checks image readiness.
- Read `PRODUCT_IMAGE_POLICY.md` before adding any image.
- Only records explicitly marked `reviewStatus: "approved"` may render.

## CI and release safety

- Previously documented full QA run #453 passed on code commit `9325de673ec932b95e40ba7a72d0b37436c4b257`.
- Later WebP rendering, accessibility-role and cache-header changes were documented as not yet CI-confirmed.
- Run #470 / ID `44115423685` was observed as cancelled on commit `459b4481605558da5fcc265057f77de4e2f3563c`; it is not a passing validation.
- Re-check the latest branch head, workflow run and Pages deployment before claiming the current code is validated.
- No changes were made to `main`, production Pages, DNS, the legacy WordPress site, affiliate accounts, publication state or indexing controls.

## Recommended next actions

1. Diagnose why the live preview HTML omits robots, canonical and Open Graph elements that are present in the source layout.
2. Run and review the Commons candidate research report; manually verify exact model identity and licences rather than auto-approving results.
3. Continue the 71 regional marketplace phrase checks and lifecycle/source review.
4. Re-run the complete CI suite on the latest development head and inspect the quality artifact.
5. Complete analytics/conversion, image, accessibility and mobile visual acceptance before presenting the production release checklist.

**Safety:** Continue on `automation/bootstrap` only. Keep preview crawl blocking enabled. Do not merge PRs, connect production Pages, change DNS, publish guides or modify WordPress without explicit owner approval.
