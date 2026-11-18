# SmartPickHub — Release-readiness audit (18 November 2026)

**Reviewed branch:** `automation/bootstrap`  
**Verified commit:** `90df53a4edb4e5b68ae1f32bce3fd6b83207a268`  
**CI:** [Push run 44247915528](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44247915528) and [PR run 44247922103](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44247922103), both Success  
**Artifact inspected:** `smartpickhub-quality-reports`, ID `14402309129`

## Executive decision

**Technically healthy development build; NOT ready for public launch or monetisation.** The static build, route smoke tests, affiliate URL construction and automated accessibility scan pass. Publication, indexing and production deployment must remain blocked until editorial, product evidence, security, analytics, image rights and release operations are completed.

## Verified implementation

| Area | Confirmed state |
|---|---|
| Site framework | Astro static site on GitHub branch `automation/bootstrap` |
| Catalogue | 25 guides, 100 product records |
| Editorial status | 25 drafts; zero approved for publication |
| HTML smoke test | 29 generated pages; zero errors and zero warnings |
| Amazon URL generation | 100 US + 100 UK links constructed with configured tracking IDs |
| Link semantics | Current identifiers are model-name search phrases; URL construction does not verify live exact listings |
| Product imagery | 0 approved, 0 pending, 100 products with no image |
| Regional phrases | 69 identical US/UK search phrases flagged for review; identical text is not automatically incorrect |
| axe | 28 routes; zero violations; 27 incomplete checks, mostly gradient contrast that requires manual review |
| Lighthouse | Five intended representative pages; all score 100 Performance, Accessibility and Best Practices; SEO 66–69 is expected under noindex |
| Preview protection | robots disallow all; noindex verified; publication disabled |
| Deployment | Production Pages project disconnected; no production deploy; current preview freshness not verified |
| Pull request | PR #1 open, Draft, unmerged |

## Defect found and corrected in this review

The workflow was intentionally reduced from 29 repetitive Lighthouse runs to five representative samples (home desktop/mobile, guides index, disclosure, one guide). However, the consolidated report still expected `guides.length + 4` (29). Consequently it reported `incomplete-or-failed` despite all GitHub Actions steps passing.

The follow-up correction:
- Changes the expected Lighthouse sample count to exactly five.
- Makes manual accessibility review visible when axe has incomplete contrast checks.
- Keeps the dependency advisory visible as security-review-required.
- Makes the audit-report step exit non-zero if required consolidated checks are missing or incomplete, preventing a green workflow from hiding an incomplete audit.

## Remaining launch blockers — priority order

### P0 — must resolve before launch
1. **Dependency security:** one high-severity picomatch advisory (`GHSA-fc5q-39xc-vjpf`, `CVE-2026-112366`) appears across 12 dependency nodes. It is one advisory, not 12 distinct CVEs. Latest artifact reports CVSS 7.5; no patched upstream release was listed. Exception deadline 2 Dec 2026 and owner approval is still pending. Recheck the official advisory/upstream release; do not downgrade Astro or use an unmerged fork.
2. **Approve real content:** all 25 guides and 100 product records are drafts. Verify model identity, market/SKU, specs, compatibility, limitations, manufacturer sources, UK retailer match and final editorial quality. No guide should be indexed until approved.
3. **Verify Amazon monetisation:** confirm Associates UK account is active and the UK tracking ID `smartpickhubu-21` is accepted; test real destination links and confirm link disclosures. Search URLs are not exact product listings and do not prove commission eligibility. Keep US secondary and verify its ID separately.
4. **Regional identity audit:** review all 100 records for UK model/SKU/plug/voltage/package differences. The 69 identical phrases are a queue, not a presumption of error.
5. **Release controls:** confirm a current backup/release rollback plan, verify the current preview deployment visually, and obtain explicit owner approval before connecting/deploying production, merging PR #1, removing noindex/robots protections or changing DNS.

### P1 — required for a credible launch
6. **Product image rights:** source exact-model images only where commercial reuse is documented. Current count is zero. No Amazon scraping or unlicensed manufacturer image reuse. Original Pinterest covers are editorial illustrations, not product photos.
7. **Manual accessibility review:** axe found zero violations but 27 incomplete checks, largely because gradients prevent automated contrast calculation. Manually verify text/background contrast, focus, keyboard navigation, mobile menu and touch targets.
8. **Analytics and conversion measurement:** no verified GA4/Google Search Console/consent configuration or affiliate click/conversion measurement was evidenced in this repository review. Define privacy/consent and separate site outbound clicks from Amazon reports before release.
9. **SEO release configuration:** sitemap/canonical/structured data and robots must be rechecked against the final production hostname. Keep current noindex until the release checklist is approved. Do not use daily thin rewrites to simulate freshness.
10. **Mobile/real-browser QA:** inspect latest preview at common mobile/tablet/desktop widths and verify navigation, comparison tables, disclosure visibility, product cards and external links.

### P2 — scale and growth
11. Add persistent product staging/review workflow with evidence records, reviewer, timestamps, change history and rollback. Current CSV/JSON importer is dry-run only.
12. Add remote-source reachability checks, source snapshots/hashes, fuzzy duplicate detection and market-specific ASIN verification.
13. Run the Wikimedia Commons research process only as candidate discovery; manually verify exact image and licence before use.
14. Add keyword evidence from Search Console or a chosen research provider. Current 13,846 phrase universe is generated from taxonomy and has no validated volume, difficulty, CPC or conversion data.
15. Implement Pinterest scheduling/export and campaign attribution only after manual content approval; no automatic publishing.
16. Add monitoring for broken links, stale specifications, product lifecycle/availability and periodic review dates.
17. Benchmark before moving beyond the current JSON catalogue. PostgreSQL, object storage, queues, API and search index are future options, not deployed.

## Explicitly not done

- No real product batch imported; the importer remains dry-run only.
- No product images approved or published.
- No guide approved or published.
- No production Pages deployment, PR merge, DNS change, indexing request or WordPress edit.
- No database, review UI, evidence collector, analytics integration or search service implemented.
- No claim that Amazon accounts, current exact product listings, commissions or conversions have been verified.

## Next execution sequence

1. Verify the follow-up commit and both CI runs; confirm consolidated audit result is no longer `incomplete-or-failed`.
2. Inspect the current Cloudflare preview deployment for the exact branch commit and visually check mobile/desktop. Do not connect production.
3. Reconcile the 100 product records region-by-region, starting with the 69 identical search phrases and high-risk power/voltage/plug variants.
4. Build the persistent review/evidence stage after the data schema is approved; keep writes behind human approval.
5. Complete security exception decision and manual accessibility review.
6. Prepare a release checklist for owner sign-off; only then consider merge/deployment/indexing.

**Roadmap tally:** not recalculated by this audit. Keep the last reconciled tally until each numbered step is checked against evidence.


## Audit report implementation note
- The first correction commit `a767ad0` failed CI due to a syntax error in the status expression (literal escaped newlines); this was detected before merge or deployment.
- A follow-up syntax-safe implementation now uses a separate `overallStatus` variable. Verify the next CI run and inspect `latest-audit.json` before marking the report correction complete.


## Final verification after correction
- Latest verified commit: `3f49a59ed44c8385ce41b63e94365e4c6161fda1`.
- Push CI [44249569378](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44249569378) and PR CI [44249577388](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44249577388) both completed Success.
- Artifact `14403925308` was inspected. Consolidated status: `quality-passed-security-review-and-manual-accessibility-review-required`.
- Lighthouse: 5/5 expected pages, all five have 100 Performance, Accessibility and Best Practices; SEO 66–69 is expected while preview noindex is active.
- Smoke: 29 pages, zero errors/warnings. axe: 28 routes, zero violations, 27 incomplete contrast checks. Catalogue: 25/100; 0 approved images, 100 without images; 69 identical US/UK phrases flagged.
- The audit report now expects five Lighthouse pages and fails CI if required automated coverage is missing. Security and manual accessibility remain explicitly visible.
- Production remains disconnected and not deployed; preview freshness for this exact commit is still unverified. PR #1 remains Draft/open/unmerged.
