# SmartPickHub — Product Intake, Research & Scale Playbook

**Status:** Architecture and operating procedure — planning reference; no permission to publish or connect paid services is implied.  
**Last reconciled:** 19 November 2026  
**Current source of truth:** `src/data/products.json` on `main` (production branch).  
**Current catalogue:** 25 owner-approved/published guides / 100 product records; zero approved product photographs.  
**Scale target:** the JSON importer and static catalogue are MVP tools only. See `PRODUCT_DISCOVERY_AUTOMATION_SCALE_PLAN.md` for the current keyword, product discovery, AI visibility and million-record architecture. Historical draft-state statements below are superseded by this header and the latest project handoff.

## 1. Purpose and operating principle

This playbook defines one repeatable route for every new product, whether it arrives individually, in a spreadsheet, through a supplier/manufacturer feed, or in a future bulk import. The objective is to reduce repeated manual work without reducing factual accuracy, image-rights checks, affiliate-policy compliance, or editorial judgement.

**Automation should collect, normalize, compare, validate, and prepare. A human approves factual exceptions and publication.** No importer may silently publish a product, create a thin page, invent a direct retailer link, or turn a keyword into a page simply because it exists.

The present JSON catalogue is suitable for the current small editorial catalogue. It is not the long-term storage or search architecture for millions of products. This playbook separates the near-term workflow from the later scale architecture so that early work is reusable.

## 2. End-to-end product lifecycle

`INBOX → NORMALIZE → DEDUPLICATE → CLASSIFY → RESEARCH → KEYWORDS → IMAGES → AFFILIATE → QA → HUMAN REVIEW → APPROVED DRAFT → PUBLISH (only after release authorization) → MONITOR / REFRESH / RETIRE`

| Stage | Automated work | Required evidence / human gate | Output |
|---|---|---|---|
| 0. Intake | Accept one product or a validated CSV/JSON batch; assign import batch ID | Source of submission and intended market are known | Raw candidate |
| 1. Normalize | Trim fields, normalize brand/model, parse identifiers, standardize units | Ambiguous model/variant is flagged | Canonical candidate |
| 2. Deduplicate | Exact GTIN/EAN/UPC/MPN/verified ASIN match; normalized brand+model; fuzzy suggestions | Fuzzy matches are never auto-merged | Existing record link or new candidate |
| 3. Categorize | Suggest category, guide cluster and product type | Category/market fit reviewed when uncertain | Taxonomy assignment |
| 4. Verify identity | Find official manufacturer product page, datasheet, manual and support page | Exact model, revision and market variant confirmed | Source evidence record |
| 5. Research | Extract factual features, dimensions, compatibility, limitations, warranty and lifecycle | Every material claim has a source and checked date | Evidence-backed fact set |
| 6. Keyword research | Expand seeds, classify intent, cluster synonyms, detect cannibalization | Demand metrics only from a real named source; search intent reviewed | Keyword cluster |
| 7. Image research | Locate permitted manufacturer/licensed/CC assets or approved original artwork | Rights basis, attribution and exact-model match approved | Image candidate or explicit no-image |
| 8. Affiliate mapping | Generate marketplace search links; optionally attach verified marketplace ASINs | Exact listing/variant and Associates eligibility checked | US/UK destination pair |
| 9. Content assembly | Fill approved product-card and guide templates from structured fields | No unsupported superlatives, reviews or testing claims | Research draft |
| 10. Automated QA | Schema, duplicates, URLs, source fields, market fields, image metadata, SEO and accessibility | Hard failures block progression | QA report |
| 11. Human review | Present only flagged claims, mismatches, image rights and editorial decisions | Explicit approval per record/guide | Approved or rejected decision |
| 12. Release | Generate approved routes and sitemap entries; cache and link checks | Owner release approval and deployment gate | Published record |
| 13. Monitoring | Check source changes, discontinued status, broken links, keyword performance and click events | Refresh/replacement decisions reviewed | Refresh task or retired record |

## 3. Canonical product record — required data contract

The data model must distinguish a global product identity from regional offers/variants and from editorial content. A product is not a guide, and a marketplace listing is not the manufacturer identity.

### A. Identity
- Stable internal `product_id` (UUID/ULID; never derived from a mutable name).
- Brand, normalized brand, exact manufacturer model, model family, variant/colour/capacity where relevant.
- Manufacturer part number (MPN), GTIN/EAN/UPC only when sourced, and verified ASIN per marketplace only after checking.
- Product type, category, lifecycle state, first-seen and last-verified timestamps.
- Duplicate group / canonical record pointer where a merge is approved.

### B. Market-specific data (one record per market)
- Market code (UK, US, and future markets only when deliberately supported).
- Exact regional model/SKU, voltage, plug, frequency, language/layout, included accessories, warranty and compatibility notes where applicable.
- Marketplace domain, destination type (`search` or `direct`), search phrase or verified ASIN, tracking tag and last link-check date.
- Availability and price must not be represented as current unless sourced from a permitted, current feed and shown with an update timestamp and policy review. The current project does not collect or publish price/rating/review claims.

### C. Evidence and editorial
- One or more source records: URL, publisher, source type, exact claim supported, date checked, market/region, model/revision, notes and confidence.
- Separate manufacturer facts from editorial interpretation.
- Pros/limitations/verdict must be derived from evidence and clearly avoid implying hands-on testing.
- Editorial state and reviewer decision with reviewer, date and reason.

### D. Images
- Asset URL or controlled object-storage key, exact-model match, descriptive alt text, source page, creator/rights holder, license/permission basis, required attribution, retrieval date, review status and reviewer.
- Store original and generated derivatives separately; record dimensions, format, checksum and transformation version.
- Missing a compliant image is a valid state. Never fill a gap by scraping Amazon product images or copying retailer assets without permission.

### E. Keywords and guide relation
- Keyword cluster ID, market, intent type, source of keyword evidence, date collected and measured metrics (nullable until actually measured).
- Many-to-many relation between products and guides. A product can belong to multiple genuinely relevant guides; a guide can contain multiple products.
- Record the primary query/intent served by each guide to prevent cannibalization.

## 4. Required intake template

A single-product intake and bulk CSV import must map to the same schema. Minimum columns:

`source_batch_id, source_type, source_url, brand, model, variant, category_hint, market, manufacturer_part_number, gtin_ean_upc, amazon_asin_candidate, submitted_notes`

Optional fields may include dimensions, weight, compatibility, image candidate URL, proposed keyword, and supplier/manufacturer feed ID. Blank values remain blank; the importer must not guess.

**Import behavior**
1. Upload/submit to a staging inbox, not directly to the public catalogue.
2. Validate file type, encoding, headers, row limits and field lengths.
3. Normalize values and generate a dry-run summary: new, exact duplicate, probable duplicate, invalid, missing evidence.
4. Never overwrite a verified record just because a later row has blank or lower-quality data.
5. Make import idempotent using source batch ID plus stable source row key; rerunning the same batch must not create duplicates.
6. Commit valid rows to candidate state only after the dry-run is accepted.
7. Produce a row-level error file with reasons and source row numbers.
8. Keep an import audit log and rollback by batch ID.

## 5. Identity and duplicate rules

Priority order:
1. Exact verified GTIN/EAN/UPC within the correct product/market scope.
2. Exact manufacturer MPN plus brand.
3. Exact verified ASIN within its Amazon marketplace, linked to—not substituted for—the manufacturer identity.
4. Normalized brand + exact model + variant.
5. Fuzzy name similarity only as a review suggestion.

Do not merge different regional revisions, capacity sizes, colours when those affect the product, plug/voltage versions, bundles, generations, or similarly named products. Keep aliases and replacement/successor relations. A fuzzy score is a triage signal, not proof of identity.

## 6. Research and evidence rules

For every candidate:
- Start with the manufacturer's exact product page, technical specifications, manual, support/FAQ and regional site.
- Compare UK and US manufacturer pages independently; record differences rather than blending them.
- Verify lifecycle (current, legacy, discontinued, replaced) and date of check.
- Capture only facts that influence a buyer's decision: performance specifications, capacity, compatibility, dimensions, operating costs when sourced, subscriptions, consumables, warranty, limitations and package contents.
- Keep a claim-to-source mapping so later refreshes know exactly which source supports each statement.
- If sources conflict, record the conflict and block approval until resolved or explicitly qualified.
- Do not invent a conclusion, availability, price, review score, testing result or warranty term.

## 7. Keyword discovery and successful-content selection

The current `scripts/build-keyword-universe.mjs` generates candidate phrases from seed clusters. These phrases are **not measured search volume, difficulty, CPC, ranking potential or proof of demand**.

For each market separately:
1. Collect seed terms from product type, user problem, use case and buyer constraints.
2. Gather actual query evidence when available: Google Search Console after launch, permitted keyword research tools, search-result inspection, manufacturer terminology and compliant marketplace autocomplete research.
3. Store source, date, country, device/context where available, and metrics exactly as reported. Unknown metrics remain null.
4. Classify intent: informational, comparison, best-for/use-case, compatibility, troubleshooting, transactional or brand/model lookup.
5. Group close variants that satisfy the same intent; do not make a separate page for each wording variation.
6. Review current search results and competing page types before selecting an angle.
7. Score opportunities transparently using observed demand, intent fit, evidence strength, product availability/market relevance, content differentiation and ability to help a buyer. Do not fabricate a score from missing metrics.
8. Map one primary intent to one canonical guide; add internal links to related guides and products.
9. Recheck cannibalization against existing pages before creating a new guide.
10. Refresh pages when evidence or genuine query performance changes—not merely to simulate freshness.

**Keyword acceptance record:** primary query, supporting variants, market, intent, evidence source/date, measured metrics (or null), SERP notes, existing competing site URL, chosen page/cluster, differentiation statement and reviewer decision.

## 8. Image workflow and rights gate

1. Identify the exact product/variant in the image; generic category imagery cannot be presented as the exact model.
2. Prefer manufacturer press/media assets with explicit reuse terms, properly licensed Creative Commons assets, or original generated/editorial illustrations that do not misrepresent product details.
3. Record the source page, asset URL, rights holder, license, attribution wording, retrieval date and permission evidence.
4. Check whether commercial affiliate-site use and modifications are permitted; do not infer permission from public accessibility.
5. Human reviewer approves the rights basis and visual identity before an image enters the approved asset set.
6. Generate responsive derivatives (WebP/AVIF where supported), retain an archival original where permitted, create descriptive alt text and validate file size/dimensions.
7. Run image audit for missing provenance, invalid URLs, generic alt text, duplicates, oversized assets and broken files.
8. If rights or identity are uncertain, use no product image and retain the editorial cover artwork only.

Pinterest/editorial cover artwork is not a product photograph and must not be described as one.

## 9. Affiliate link workflow (US / UK)

- Preserve configured tags: US `smartpickh0bc-20`; UK `smartpickhubu-21`.
- Search phrase → clearly labelled Amazon search destination. It is not a direct product page and does not prove listing availability.
- Direct `/dp/ASIN` destination → allowed only after the exact ASIN, marketplace, product variant and current listing are independently verified and recorded.
- Never infer an ASIN from a product name or copy one from the other marketplace.
- Test host, path, tracking tag, locale and redirect behavior where permitted. Record checked date and result; a successful URL construction is not proof that the listing is still available.
- Keep required Amazon Associate disclosure clear and near affiliate actions. Preserve sponsored/nofollow link attributes.
- Do not scrape Amazon product data/images or expose stale prices/ratings. Review current Associates policies before implementing APIs or feeds.

## 10. Automated QA gates

Every import batch and candidate record must pass the applicable checks:

**Schema and integrity**
- Required fields, types, allowed enum values, valid stable IDs.
- Unique IDs, duplicate model/market combinations and referential integrity.
- No accidental overwrite, missing market or duplicate import.
- No unverified ASIN-shaped identifier.

**Evidence**
- HTTPS source URLs, reachable/changed-source status where technically possible.
- Claim-to-source coverage for all material specifications.
- Regional model/SKU conflicts, lifecycle and last-verified age flags.

**Images**
- Rights metadata complete; exact-model check approved; valid HTTPS/object key; alt text; dimensions/format/size; duplicate checksum.
- A missing image is reported, not fabricated or silently accepted as approved.

**Affiliate**
- Correct Amazon host and tracking tag per market.
- Search vs direct destination explicitly typed.
- Direct ASIN requires verified evidence.
- Disclosure and rel attributes present.

**Content and SEO**
- No unsupported price, rating, review, stock or hands-on-testing claims.
- Unique canonical slug; no duplicate/near-duplicate guide intent.
- Helpful original content, valid internal links, title/description, canonical and structured data limited to sourced claims.
- Noindex remains enabled in preview; sitemap/RSS include approved content only.

**Runtime and accessibility**
- Build, smoke tests and route checks.
- axe accessibility checks across all generated routes.
- Lighthouse on representative templates (homepage desktop/mobile, guide index, disclosure and one guide template), rather than repeating a full performance audit for every near-identical product page.
- Full-route smoke and axe coverage remain in place as the catalogue grows.

Hard failures block the record. Warnings create a review task. No automated score can override a missing rights basis or unresolved product identity.

## 11. Review queue and statuses

Use explicit lifecycle states:
- `candidate`: received; not researched.
- `researching`: evidence collection underway.
- `needs_review`: automated checks passed but human decisions remain.
- `approved_draft`: identity, evidence, image rights (or no-image decision), market mapping and content reviewed.
- `published`: only after owner release authorization.
- `refresh_due`: source, lifecycle or performance review required.
- `rejected`: unsuitable, duplicate, unverifiable or non-compliant.
- `retired`: no longer relevant; preserve history and redirects where appropriate.

The current Astro `editorialStatus` field is simpler. Do not silently change the live schema in this documentation task; implement a versioned migration when the structured ingestion system is built.

## 12. Architecture for thousands to millions of products

### Current stage: 100–1,000 curated records
- Keep the current Astro/JSON workflow while it remains easy to validate and maintain.
- Add a staging import format, stable IDs, explicit schema version and repeatable batch validation before increasing volume.
- Do not create a public page for every candidate product.

### Growth stage: thousands to tens of thousands
- Move canonical product and evidence records into a relational database (PostgreSQL is the preferred portable baseline; provider selection remains open).
- Keep editorial guides as curated content with product references, not duplicated product blobs.
- Store approved image originals/derivatives in object storage (Cloudflare R2 is a candidate, not yet selected).
- Add an indexed search service or database full-text search with market/category/brand filters.
- Add a background queue for imports, source checks, image processing and refresh jobs; enforce rate limits, retries, idempotency and dead-letter handling.
- Expose a small read API; cache public read results at the edge/CDN.
- Keep the static Astro front end for editorial pages and use dynamic/search-rendered product discovery where needed.

### Large scale: hundreds of thousands to millions
- Do not statically pre-render every product page. Pre-render only high-value curated guides/category/brand landing pages; serve long-tail product data through paginated search/API routes.
- Use database indexes and query plans for market, canonical product ID, brand, category, model and lifecycle; introduce partitioning only when measurements justify it.
- Use a dedicated search index (e.g. OpenSearch, Typesense or Meilisearch after a workload benchmark) for faceted search, typo tolerance and relevance; do not choose a provider before testing cost and scale.
- Separate ingestion workers from public read traffic; batch writes and refreshes, use queues, backpressure, retry limits and dead-letter queues.
- Use object storage + CDN for image delivery, immutable versioned asset keys and cache invalidation by version.
- Add database backups, point-in-time recovery, restore drills, audit logs, rate limits, abuse protection, observability and budget alerts.
- Maintain market-level product identity and availability separately; avoid cross-market model conflation.
- Use incremental sitemap shards only for approved, index-worthy URLs. Candidate products and thin duplicate pages remain private/noindex.
- Introduce load tests, query-latency SLOs, import throughput tests and cost-per-thousand-record monitoring before each scale step.

**Important:** Millions of product records do not mean millions of indexable pages. The value is a clean catalogue and useful search/filter experience. Search engines should see a smaller set of genuinely helpful pages, not mass-generated near-duplicates.

## 13. Fast operating modes

**One product:** submit model + target market → normalize/deduplicate → official-source verification → keyword/guide fit → image rights decision → affiliate mapping → QA → one concise human review card.

**Bulk batch:** upload CSV → dry-run summary → resolve duplicate/invalid rows → process valid candidates in parallel with bounded concurrency → one grouped exception report → approve batch candidates → editorial selection.

**Refresh:** scheduled source/lifecycle/link checks create tasks only. They do not silently rewrite or republish content.

Research and evidence collection may still take time for ambiguous or region-specific products. The system saves time by reusing validated identities, evidence, templates and checks—not by skipping verification.

## 14. Implementation roadmap and acceptance criteria

1. **Document and freeze the data contract** — this playbook; no schema mutation yet.
2. **Define a versioned JSON/CSV intake schema** — sample files, required fields, allowed values and validation errors.
3. **Build a dry-run importer** — single and batch input, idempotency, duplicate suggestions, row-level error report; no public writes.
4. **Build the review queue** — status, evidence, image rights, affiliate mapping and explicit approval.
5. **Add source/evidence records** — claim-level citations, region, checked date and lifecycle.
6. **Add keyword evidence workflow** — measured metrics separated from generated candidate phrases; SERP/intent and cannibalization checks.
7. **Add image provenance workflow** — rights-first approval and responsive derivative generation.
8. **Harden affiliate mapping** — explicit search/direct type and marketplace-specific verification.
9. **Run scale benchmark** — 1k, 10k and 100k synthetic records; measure build time, memory, import speed, search latency and cost.
10. **Select database/search/queue/object storage** — only after measured thresholds and owner approval.
11. **Migrate in shadow mode** — compare JSON and database output; preserve rollback and record counts.
12. **Enable controlled production reads** — only after security, backup, privacy, cost and owner release gates.

### Definition of done for the future product-add flow
A product is ready for editorial approval only when it has a stable identity, verified market variant, source-backed claims, duplicate decision, intent/guide mapping, rights decision for images (including explicit no-image), correct marketplace destination type and tag, clean automated QA, and a human-readable review card. It is publishable only after separate editorial and owner release approval.

## 15. Current guardrails and non-completed work

- This file is a process and architecture plan, not evidence that an importer, database, queue, search service or product-image pipeline has already been implemented.
- Current catalogue remains 25 guides / 100 products; all are research drafts and none is approved for publication.
- Current product-image records remain empty unless separately verified.
- Current keyword universe contains generated candidate phrases only; do not describe them as measured successful keywords.
- No paid services, external APIs, public publishing, production deployment, DNS changes, PR merge or WordPress changes are authorized by this playbook.


## 16. Implemented first intake component — 18 November 2026

**Implemented on the development branch:** `scripts/import-products.mjs`.

Commands:
- `npm run import:self-test` — parser and safety self-tests; no input file or catalogue write.
- `npm run import:dry-run -- --input ./products.csv` — accepts CSV or JSON candidate batches and creates:
  - `test-reports/product-import-dry-run.json`
  - `test-reports/product-import-errors.csv`

Safety properties:
- Dry-run only. The script never writes to `src/data/products.json`, never publishes, and never changes the approved catalogue.
- 20 MB and 100,000-row input limits; CSV quoted fields supported; JSON array or `products` array supported.
- Required brand/model/market/source URL checks; UK/US market allowlist; HTTPS source requirement.
- Deterministic candidate IDs; exact catalogue-name/model match and within-batch duplicate flags.
- ASIN-shaped candidates remain explicitly unverified and require human verification before direct-link use.
- Invalid rows are reported with row-level reasons. Fuzzy matches are not auto-merged.
- The importer does not fetch remote URLs or claim that a source/listing is live.

**Not yet implemented:** a persistent staging database, visual review UI, manufacturer source verification, keyword-volume integrations, image-rights approval workflow, bulk commit/rollback, or production publication. This is the first safe intake component, not a complete product automation platform.


## 17. Importer integration test — 18 November 2026
- Command: `npm run import:integration-test`.
- The test copies the importer into a temporary workspace, creates an isolated minimal catalogue and synthetic CSV, then executes the actual CLI process.
- Expected classification coverage: one new candidate, one exact catalogue-name match, one repeated batch identity, and one invalid HTTP source.
- Also asserts the ASIN candidate remains flagged as unverified, both JSON and CSV reports are produced, and the catalogue SHA-256 is identical before and after the dry run.
- CI runs this integration test after `npm run import:self-test`. The test does not write to the repository catalogue or publish anything.
- This raises test coverage, not importer capability: remote source reachability, fuzzy duplicates, persistence, approval, rollback and real catalogue writes remain unimplemented.
