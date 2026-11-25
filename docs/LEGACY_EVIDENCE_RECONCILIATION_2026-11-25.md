# SmartPickHub — Legacy Evidence Reconciliation (25 November 2026)

**Purpose:** Preserve and credit completed work from earlier sessions when applying the 25 Nov 2026 v1.0 quality standard. This prevents the misleading interpretation that the project has made zero progress and prevents repeated audits.

## Executive reconciliation

The v1.0 counter of **0/25 full PASS** is a narrow certification counter only. It means no guide has yet been reconciled against every mandatory v1.0 gate and assigned a complete >=90/100 score with zero hard blockers. It does **not** mean the project is at zero, that earlier checks did not happen, or that all prior work must be repeated.

### Confirmed completed historical work

| Workstream | Verified prior result | What it proves | What it does not prove | Treatment |
|---|---|---|---|---|
| Guide catalogue and release | 25 guides / 100 product records exist; all 25 current main catalogue records show editorialStatus: Approved for publication. The 19 Nov editorial approval audit records owner approval and published state for all 25 guides. | Initial 25-guide catalogue was approved for release and the published baseline exists. | Does not certify every technical claim, current retailer offer, image right or all v1.0 gates. | CLOSED for initial release/approval milestone; do not redo. |
| Structural audit | 18 Nov ledger checked all 25 guide records and 100 product records; all 100 had required base fields and 100 source URL strings were unique. | Structural completeness and catalog-level integrity at that commit. | Does not mean every source was opened or every claim verified. | CLOSED for that exact structural sweep; delta only if catalogue changes. |
| Source reference coverage | 19 Nov editorial audit inventory reports 4/4 source references for each of 25 guides (100/100 reference slots). | Each product record had a manufacturer source reference recorded in the inventory. | Does not prove every link still resolves or supports every claim. | Reuse; revisit only broken, stale, conflicting or material unsupported references. |
| SEO metadata | PR #19 merged 19 Nov (merge commit ed52a5ece4c1e0b088bea83e71dff5c072be90dd): unique concise SEO titles across 25 guides and four shortened meta descriptions; PR #21 records confirmed Cloudflare production deployment of that commit. | Exact metadata refinement and release milestone completed. | Does not prove indexing or current SERP performance. | CLOSED for that release change; no repeat metadata rewrite without regression. |
| Product and editorial fixes | PR #37 merged 24 Nov; exact PR head 16e9072b5bc2eb3416609ff78e6e2707435e3aae has workflow run 45350133248 success. Job steps confirm Astro type/content checks, product intake tests, catalogue/affiliate destination validation, static build, Pinterest RSS validation and generated-page/SEO/JSON-LD/affiliate smoke tests passed. | Those tests passed on that exact PR SHA. | Accessibility and Lighthouse steps were skipped; it does not certify every current product claim or marketplace offer. | CLOSED for that exact tested commit and scope; don't rerun unless affected files or dependencies change. |
| Buyer intent mapping | PR #29 merged 19 Nov; 25-guide intent map created. | All 25 guides have a mapped primary buyer problem/query hypothesis and conversion focus. | Intent map contains hypotheses and historical keyword metrics, not current SERP proof or ranking evidence. | Reuse; update only for material SERP/GSC/query changes. |
| Bing / IndexNow | Bing property registration and initial 29-URL IndexNow submission were previously recorded as successful. | Registration and that initial submission event. | Does not prove all URLs indexed or ongoing traffic. | Closed for registration/initial batch; indexing coverage remains a separate open diagnostic. |

## Separate counters — never collapse these into one percentage

| Counter | Verified status at this checkpoint |
|---|---:|
| Existing approved/published guides | **25/25** |
| Guide records structurally present | **25/25** |
| Product records structurally present | **100/100** |
| Required base product fields present in 18 Nov audit | **100/100** |
| Manufacturer source-reference slots inventoried in 19 Nov editorial audit | **100/100** |
| Full page certification against all v1.0 gates | **0/25 currently certified** |
| Product direct Amazon ASINs approved in active vacuum audit | **0/4 UK; 0/4 US** |
| Active full v1.0 pilot | **Cordless Vacuum Cleaners** |

The first five counters are historical completion milestones with their stated scopes. The v1.0 certification counter is new and narrower. They are not contradictory.

## How legacy evidence earns credit

1. Do not repeat a check if a prior artifact identifies the exact scope, source, date, commit/version and result, and the evidence remains applicable.
2. Mark that criterion SATISFIED — LEGACY EVIDENCE in the page scorecard and cite the exact audit/PR/commit/run.
3. Recheck only when evidence is missing, stale for a volatile claim, conflicting, affected by a code/catalogue change, or triggered by a material regression.
4. A prior structural check can satisfy structural criteria, but cannot satisfy live retailer availability, fresh SERP, current indexing state, product-claim provenance, image rights or criteria it did not test.
5. No page receives PASS solely because it was previously published. Conversely, no page is reset to zero simply because v1.0 is new.
6. For the 24 non-active guides, start with evidence mapping against existing audits, PRs, tests and deployment records. Do not perform 24 fresh audits. Only create targeted delta tasks for gaps that affect a required v1.0 gate.
7. For the active vacuum guide, reuse all manufacturer sources and previous checks already recorded. Continue only from its explicit unresolved items.

## Why the 0/25 number appeared

On 25 Nov, the v1.0 tracker was initialized with a strict new definition of PASS before a legacy-evidence crosswalk had been created. That produced a technically narrow but context-poor 0/25 headline. It was incorrectly easy to read as nothing is done. This reconciliation corrects that interpretation and makes prior work visible without falsely converting partial checks into full certification.

## Next action

Build a page-by-page legacy-evidence map for the 25 guides using the 18 Nov structural ledger, 19 Nov editorial approval audit, 19 Nov intent map, merged PR history, exact-SHA CI records, deployment records and per-guide source inventory. Identify criteria already satisfied, criteria genuinely missing, and only the delta checks needed. Continue the vacuum pilot without repeating completed source checks. No publication or production changes are authorized by this reconciliation.