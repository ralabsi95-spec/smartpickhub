# SmartPickHub — CI #626 Quality, Security and Preview Checkpoint

**Date:** 18 November 2026  
**Branch:** `automation/bootstrap`  
**PR:** [#1 — Draft Astro foundation](https://github.com/ralabsi95-spec/smartpickhub/pull/1)  
**Tested head:** `d40a86211cd1f78647e9ba7933593d6ced47dc03`  
**Primary CI run:** [#626](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44272747892)  
**Artifact:** `smartpickhub-quality-reports` — ID `14413392334`

## 1. Confirmed CI outcome

Run #626 completed with conclusion **success**. All 19 substantive job steps completed successfully:

- Exact locked dependency installation (`npm ci`)
- Dependency audit capture
- Astro type/content checks
- Importer self-test and isolated end-to-end integration test
- Catalogue and affiliate destination validation
- Keyword research universe generation
- Static preview build
- Smoke tests for generated pages, SEO, JSON-LD and affiliate links
- Chromium installation and axe accessibility audit
- Lighthouse homepage desktop/mobile and representative templates
- Consolidated audit report generation and artifact upload

The parallel push-triggered run #625 on the same head also completed successfully. Run #626 is the PR validation record.

## 2. Artifact findings

The uploaded artifact was downloaded and inspected. Its consolidated report was generated at 2026-11-18T09:09:03Z.

### Catalogue and smoke checks

- 25 guide records and 100 product records.
- 100 US and 100 UK marketplace-link constructions validated.
- Correct tracking IDs: US `smartpickh0bc-20`; UK `smartpickhubu-21`.
- 29 generated HTML pages smoke-tested; zero errors and zero warnings.
- 25 guides remain research drafts; none is approved for publication.
- All 100 product records still have no approved product image.
- The link validation confirms URL construction only. It does not prove live listing availability or direct ASIN correctness.

### Accessibility

- axe checked all 28 expected routes.
- Zero automated violations.
- 27 incomplete contrast checks remain for manual review. The report classifies these as checks where axe cannot determine the contrast result (including gradient/background and non-text-only elements); they are not counted as passed contrast measurements.
- Do not claim full WCAG conformance from the zero-violation result alone. Retain manual visual contrast review as a release gate.

### Lighthouse

All five intended samples completed:

| Sample | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Homepage desktop | 100 | 100 | 100 | 66 |
| Homepage mobile | 100 | 100 | 100 | 66 |
| Guides index | 100 | 100 | 100 | 66 |
| Affiliate disclosure | 100 | 100 | 100 | 66 |
| Representative guide | 100 | 100 | 100 | 69 |

The SEO score range is expected while preview indexing is intentionally blocked by `noindex` and `robots.txt: Disallow: /`. Do not remove these protections to improve a preview score.

### Security

- `npm audit`: 12 high-severity affected dependency nodes, zero critical.
- The findings include one underlying high-severity picomatch advisory: GHSA-fc5q-39xc-vjpf / CVE-2026-112366 (ReDoS; vulnerable range includes picomatch through 4.0.7).
- The 12 rows are affected dependency nodes/chains, not 12 distinct CVEs.
- CI success means the audit report was captured; it does **not** mean the advisory is fixed or accepted.
- Keep the issue **review-required**. Do not apply arbitrary overrides, downgrade Astro, suppress npm audit or claim remediation without a compatible upstream fix and fresh verification.

## 3. Preview deployment distinction

The PR's Cloudflare Pages bot comment reports a successful deployment of the **Pages preview project** `smartpickhub-preview` for commit `d40a862`, with immutable preview URL:

https://74c35c23.smartpickhub-preview.pages.dev/

The same PR discussion also shows a failed build for a separately named **Cloudflare Workers service** `smartpickhub`, with no deployment URL. This is a distinct Cloudflare resource and must not be confused with the Pages preview deployment or the separate production Pages project.

The Pages preview success is not a production deployment. Keep preview `noindex,nofollow` and crawl-disallowed. The production Pages project remains a separate, disconnected resource pending owner-authorized configuration.

## 4. Repository and release status

- PR #1 remains **open, Draft, unmerged**.
- No merge to `main`.
- No production deployment, DNS change, WordPress change, publication, indexing change, or removal of crawl protections.
- No product records, product images, affiliate identifiers, or guide approval states were changed by this verification.
- No dependency remediation was performed.
- CI tested the PR merge ref; the artifact's consolidated report identifies merge SHA `8e2f2ac0a5bafabcaf0203cd06448895e88e5a05`, corresponding to PR head `d40a862...`.

## 5. Next actions

1. Manually review the 27 incomplete axe contrast checks and document any visual corrections needed.
2. Keep the picomatch advisory open for security review; review upstream fix status before choosing a minimal compatible remediation. Existing review deadline remains 2 December 2026.
3. Inspect the immutable Pages preview on desktop and mobile, confirming the 25 guides remain clearly marked as drafts and the preview remains noindex/crawl-blocked.
4. Continue product/marketplace identity checks and image-rights research. Do not bulk-approve or import duplicates.
5. Obtain explicit owner approval before PR merge, production setup/deployment, guide publication or indexing.

**Checkpoint conclusion:** the latest PR head has a complete successful CI quality run and a successful isolated Pages preview deployment. Security review, manual accessibility review, content approval, product-image rights and production release gates remain open.
