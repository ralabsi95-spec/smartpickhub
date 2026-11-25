# SmartPickHub — Quality Control, Closure Register & Periodic Reporting

**Snapshot date:** 25 November 2026  
**Source of truth:** `main` plus explicitly named research/documentation branches.  
**Production:** https://smartpickhub.pages.dev/  
**Repository:** https://github.com/ralabsi95-spec/smartpickhub

## 1. Purpose and non-repeat rule

This register is the operational control point for cumulative quality work. It exists to prevent completed work from being repeated by a later assistant/operator.

Every work item must have exactly one state:
- **NOT STARTED** — no verified work recorded.
- **IN PROGRESS** — active work; evidence or tests incomplete.
- **BLOCKED** — cannot progress without a specific dependency, owner action, or external system.
- **PASS — READY TO CLOSE** — all relevant evidence and tests passed, but the closure record has not yet been frozen.
- **CLOSED — DO NOT REPEAT** — closure record, tested commit/version, evidence, and scope are saved. A future operator must skip this work unless a defined re-open trigger occurs.
- **REOPENED — REGRESSION / CHANGE** — a specific new event invalidated a prior closure; reopen only the affected scope.

A suggestion, code change, green workflow unrelated to the exact final commit, or manufacturer product page alone is not a PASS.

## 2. Mandatory quality gates

### A. Product and buying-guide gate
1. Exact product identity and model suffix verified against manufacturer documentation.
2. UK and US market records kept separate; no inferred equivalence.
3. Electrical rating, bundle, battery/charger, accessories, warranty and regional limitations checked where material.
4. Performance claims include the test mode/configuration (especially runtime, suction units and powered-floorhead use).
5. Every material factual claim has an official or reliable source; unresolved conflicts are explicit.
6. Amazon marketplace search phrase or direct product URL is correctly labelled. A direct ASIN is accepted only after exact model, listing, seller, condition, price/availability and market are checked. Never invent ASIN, offer or price.
7. Editorial value: buyer intent, comparison, suitability, limitations, maintenance/consumables and clear decision support.
8. Affiliate disclosure and Amazon policy requirements remain clear and accurate.
9. Page renders correctly on mobile and desktop; links, canonical, metadata, structured data, accessibility and performance checks pass.
10. Exact commit's CI/build/validation/smoke tests pass; preview is reviewed. Production merge/deployment requires owner approval and post-deployment verification.

### B. Technical / release gate
- Correct branch and exact commit recorded.
- Dependencies and lockfile reviewed; no blind downgrade or forced upgrade.
- Backup/recovery and rollback plan checked before risky changes.
- `npm ci`, `npm run check`, `npm run validate`, relevant import tests, `npm run build`, `npm run smoke`, `npm run accessibility`, and any changed-feature tests run as applicable.
- CI must pass on the exact commit intended for release.
- Preview security (noindex/nofollow and crawl disallow) retained.
- Production deployment marker and live smoke checks confirmed after release.
- No deployment, publishing, product deletion/import, tracking, or paid action without owner approval.

### C. SEO / discovery gate
- Search intent and market/locale mapping validated.
- Title, description, canonical, indexability, robots and sitemap response verified.
- Search Console and Bing states recorded separately: live-test eligibility is not index inclusion.
- IndexNow acceptance is recorded only from an explicit accepted-URL workflow log; a green job alone is insufficient.
- Rankings, impressions, traffic and AI citations are only reported from the relevant platform and date range.

### D. Analytics / distribution gate
- GA4 property/stream, tag delivery, consent/privacy, tracker inventory and duplicate-event prevention verified.
- Live page requests and GA4 Realtime/DebugView confirm events after approved deployment.
- Pinterest feed HTTP response, feed ingestion, Pin publication and analytics are separately evidenced.
- AI visibility is platform-specific; Bing AI Performance must not be represented as all AI platforms.

## 3. Closure protocol — freeze completed work

For each PASS, create a closure record with:
- Item ID and precise scope (what is closed and what is not).
- Result: PASS, not a vague “reviewed”.
- Exact branch, commit SHA, release/version and environment.
- Test names, result, date, and links/IDs to logs or screenshots.
- Source URLs and marketplace/model identity where relevant.
- Known exclusions and residual risks.
- Reopen triggers and the minimum re-test scope.

After closure:
1. Add it to the **Closed — Do Not Repeat** table below.
2. Update `MASTER_PROJECT.md` and `AGENT_HANDOFF.md`.
3. Later reports count it as closed and do not repeat its steps.
4. A later operator must first check the closure record. If no reopen trigger exists, skip it.
5. Reopen only for a new defect/regression, materially changed source/specification, expired/changed offer, platform/policy change, dependency/security advisory, production drift, or owner-requested scope change. Record the trigger and test only the affected area.

**Important:** product prices, stock, retailer offers, affiliate listings, rankings and platform indexing are volatile. They cannot be permanently frozen as factual forever. Close the verification procedure and the captured snapshot; reopen only the volatile fields on a defined refresh cadence or when a buyer-facing claim is refreshed. Do not repeatedly re-audit immutable model facts without a trigger.

## 4. Current project-wide quality snapshot — 25 November 2026

### Product catalogue and pages
- Main README baseline: 25 buying guides / 100 product records; all four products per guide have manufacturer sources and US/UK marketplace search identifiers.
- The 25-guide publication/release milestone is complete in the repository. This is a **release milestone closure only**, not proof that every one of the 100 products, every retailer listing, every claim, or every rendered page has passed a full current audit.
- A structured read-only audit has covered all 25 guide records at least once. Multiple guides still have recorded material evidence gaps, regional model caveats, retailer-listing gaps or content-depth issues. Do not call the entire 100-product catalogue fully quality-closed.
- Current active guide: `cordless-vacuum-cleaners-us-uk`. Do not start the next guide until all four product decisions are documented and the guide passes the full gate.
- Current Cordless Vacuum audit checkpoint: branch `research/cordless-vacuum-audit-2026-11-25`; audit file `CORDLESS_VACUUM_RESEARCH_AUDIT_2026-11-25.md`. Four current products and four candidates are not yet finally decided; no Amazon ASIN/link approved; Bosch weight conflict remains unresolved; direct Amazon verification remains incomplete.

### SEO and discovery
- Production architecture is Cloudflare Pages + Astro on `main`; preview must remain non-indexable. Former InfinityFree/WordPress environment is excluded.
- OpenSEO's documented crawl baseline: 28/28 pages HTTP 200, indexable and in sitemap, no critical crawl issue. Informational metadata opportunities were recorded (21 long titles, 4 long descriptions); no bulk metadata changes without reviewed intent mapping and approval.
- Google Search Console: homepage had been indexed; /guides/ and Portable Power were reported unknown to Google with live tests passing. Sitemap processing previously reported fetch/read errors and 0 discovered URLs; Pages report was processing. Root cause unresolved. No mass URL inspection/indexing repetition.
- Bing Webmaster Tools property registration is confirmed. Prior IndexNow submission of 29 URLs was recorded as successful. Air Fryers was indexed; Portable Power showed Bing Index=Blocked while Live URL passed with JSON-LD/OpenGraph. The exact index-side reason remains unresolved.
- Bing AI Performance baseline: zero citations / zero average cited pages in the selected 3-month view. This covers Microsoft Copilots and partners, not all AI systems.
- Keyword data: README records 32 saved UK keyword records. Provider volumes/KD/CPC are estimates, not first-party traffic or revenue. US keyword/cluster research must remain separately labelled until its branch/status and market evidence are reconciled.

### Analytics and distribution
- GA4 stream exists: SmartPickHub Production, Stream ID `16395435693`, Measurement ID `G-Q7XK4V953R`, Enhanced Measurement enabled.
- GA4 data collection was inactive. Live browser Network tests showed no matching `gtag`, `collect`, or `googletagmanager` requests; shared Astro layout lacked tag code. Cloudflare Zaraz/other tracker inventory, privacy/consent readiness, final CI and production Realtime verification remain open. PR #38 was previously recorded as draft/unmerged; re-check exact current PR state before acting.
- Pinterest: source generates approved/published RSS, original 1000x1500 PNG images, 720x1080 WebP derivatives and social snippet JSON. Five RSS feeds were reported connected to matching Pinterest boards by owner confirmation. Production ingestion, Pin publication and analytics are not independently verified. Homepage social image metadata gap remains recorded.
- Do not claim live analytics, Pins, AI citations or indexing without platform-side evidence.

## 5. Closed — do not repeat

| ID | Closed scope | Evidence / boundary |
|---|---|---|
| CL-001 | Initial 25-guide / 100-product catalogue release milestone | Main README and release history confirm the catalogue baseline. This closes the initial release milestone only; it does not close the exhaustive product-quality audit or retailer verification. |
| CL-002 | Bing Webmaster Tools property registration | Owner screenshot and project log confirm the property is configured. Do not repeat registration/verification. Search visibility diagnostics remain separate and open. |
| CL-003 | Initial IndexNow notification batch of 29 URLs | Project history records successful notification. Do not resubmit the same initial batch without a changed-URL need or explicit workflow evidence. Current indexing status remains open. |
| CL-004 | Initial read-only structured coverage pass across all 25 guide records | Project audit log records all 25 guides covered at least once. Do not repeat a generic first-pass catalogue scan; continue targeted unresolved evidence gates only. This is not a full QA PASS for every guide. |

These closure entries are deliberately narrow. Do not widen their meaning.

## 6. Open / in-progress / blocked register

| ID | Workstream | State | Next evidence needed |
|---|---|---|---|
| OP-001 | Cordless Vacuum guide final four-product decisions | IN PROGRESS | Exact Amazon UK/US listing verification; Shark IZ862H official source closure; Bosch weight clarification; US equivalents/availability for UK-only candidates; final per-product decision. |
| OP-002 | Remaining guide-level product QA | IN PROGRESS | Targeted page-by-page audit from the existing audit matrix; close only when each guide passes the full guide gate. |
| OP-003 | Google sitemap and discovery | BLOCKED / DIAGNOSIS OPEN | Read-only sitemap HTTP/header/body check and updated GSC processing status; no speculative sitemap or robots edits. |
| OP-004 | Bing Portable Power indexed-state discrepancy | BLOCKED | Updated Bing Index reason / Site Explorer evidence; Live URL pass already recorded, do not repeat it without a changed page. |
| OP-005 | GA4 implementation and privacy readiness | BLOCKED | Cloudflare Zaraz + tracker inventory, consent/privacy review, approved implementation, exact-head CI and production Realtime/DebugView. |
| OP-006 | Pinterest production validation | IN PROGRESS | Verify RSS endpoints, Pinterest ingestion, actual published Pins and analytics; close each distinct layer only with platform evidence. |
| OP-007 | Cross-platform AI visibility baseline | NOT STARTED / PARTIAL | Dated prompt/engine baseline beyond Bing; record engine scope and actual citations separately. |
| OP-008 | Shared templates, disclosures, navigation, category taxonomy and UX audit | IN PROGRESS | Read-only template audit, evidence matrix, owner approval before edits. |
| OP-009 | US keyword and trend research reconciliation | IN PROGRESS | Confirm branch/commit, deduplicate, verify market-specific buyer intent and provider metrics; do not present estimates as traffic. |

## 7. Reporting cadence and report format

Provide a consolidated project report at the agreed cadence (weekly by default once scheduled) and after every material work session. Each report must include:
1. Overall project state and date.
2. Closed items since last report (IDs; do not reopen or repeat).
3. Current workstreams with PASS / IN PROGRESS / BLOCKED / NOT STARTED.
4. Quality results: exact tests, commit, CI and deployment evidence.
5. Product/guide counts, but distinguish published, audited, PASS and CLOSED counts.
6. Google, Bing, GA4, Pinterest, AI visibility and SEO metrics with source/date.
7. Risks, blockers, owner actions and approvals required.
8. Next single highest-priority action.
9. Files/branches/commits updated this session.

Do not invent percentages. Use separate measures:
- Published guides / 25
- Product records with complete evidence / 100
- Guides passing all gates / 25
- Items formally closed / total closure candidates
- CI/deployment status on exact SHA

If a count cannot be computed from evidence, report **unknown**, not an estimate.

## 8. Current operator instructions
- Read this file, `AGENT_HANDOFF.md`, `MASTER_PROJECT.md`, and the latest dated audit before work.
- Continue only unresolved items. Check the Closed register first.
- No production edits, deletion, imports, merge, deployment, affiliate URL changes, tracking changes, paid services, or publication without owner approval.
- Current next action: continue Cordless Vacuum exact listing and source verification; do not start another guide.
