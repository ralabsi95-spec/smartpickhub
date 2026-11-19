# SmartPickHub — Product Discovery, Buyer-Intent SEO, AI Visibility & Million-Record Scale Plan

**Status:** Architecture and phased delivery plan; documentation only. No product, guide, public page, paid service, connector, production setting or deployment is changed by this plan.
**Prepared:** 19 November 2026
**Primary market:** United Kingdom (en-GB); **secondary market:** United States (en-US).
**Production:** https://smartpickhub.pages.dev/ — GitHub main + Astro + Cloudflare Pages.

## 1. Executive decision

SmartPickHub should become a product and search-opportunity intelligence pipeline, not a bulk page generator. It should continuously discover categories, products, buyer questions and keyword opportunities; score and deduplicate them; collect evidence and lawful image candidates; prepare structured content; run automated quality checks; and present a small review queue for approval.

At one million product records, the catalogue must be database-backed. It must not be one million statically generated Astro pages, one giant JSON file, or one million automatically indexable URLs. Product records, editorial pages and indexable search landing pages are separate entities.

Automate discovery, collection, normalization, matching, evidence extraction, keyword clustering, draft assembly, QA, monitoring and indexing notifications. Keep factual exceptions, image rights, affiliate direct-link verification and public publication behind explicit human approval.

## 2. Verified starting point

| Area | Verified state | Consequence |
|---|---|---|
| Production | main commit 806e231665dd398e9a2935a0854c65afa3a30857; main CI #862 passed | Stable baseline; do not redo release work |
| Indexing notification | IndexNow #129 verified that exact deployment and received acceptance for 28 URLs | Acceptance is not proof of crawling, indexing or ranking |
| Catalogue | 25 approved/published guides; 100 product records, four per guide | Preserve; do not re-import |
| Product data | src/data/products.json | Appropriate for MVP, not million-record scale |
| Product intake | scripts/import-products.mjs is dry-run only; CSV/JSON, 20 MB and 100,000-row limits, candidate IDs and duplicate checks | Safe staging foundation; it does not write into catalogue or publish |
| Keyword generation | scripts/build-keyword-universe.mjs creates synthetic candidate phrases from src/data/keyword-clusters.json | Candidate generation only; no search-volume or ranking evidence |
| Rendering | Astro output is static | Move to database-backed hybrid/SSR delivery before large route counts |
| Images | No approved product photographs; text cards and editorial cover artwork remain | No photo is preferable to an unlicensed or mismatched image |
| Distribution | Five RSS feeds and 25 entries; owner confirms board connections | Do not recreate feeds/boards; ingestion remains unverified |
| Measurement | OpenSEO has no connected GSC or GA4 account; GSC property was previously manually verified but sitemap processing was reported as “Couldn't fetch” | Connect data sources and resolve sitemap diagnostics before claiming organic performance |
| AI visibility | No AI tracker configured | UK prompts and engine coverage need a costed baseline before activation |

Affiliate tracking IDs remain Amazon UK smartpickhubu-21 and US smartpickh0bc-20. Marketplace search phrases are not verified direct ASINs. Do not invent prices, stock, ratings, review counts or testing claims.

## 3. Initial opportunity intelligence — UK, 19 November 2026

Research covered the existing 24 saved keywords, two new category seeds, five existing buyer-query SERPs and two new category SERPs. Figures are third-party search estimates, not first-party clicks, sales or guaranteed traffic.

| Candidate | Monthly volume estimate | KD | Intent | CPC signal | Initial interpretation |
|---|---:|---:|---|---:|---|
| best cordless vacuum cleaner | 27,100 | 8 | Commercial | 2.50 | Strong existing-guide opportunity; check page/SERP alignment |
| best front and rear dash cam uk | 2,400 | 9 | Commercial | 1.31 | Long-tail opportunity; verify model availability |
| best robot vacuum and mop uk | 1,300 | 9 | Commercial | 1.99 | Existing guide; SERP quality appears uneven |
| best small air fryer uk | 1,000 | 8 | Commercial | 0.76 | Existing-guide sub-intent, not an automatic new page |
| best budget air fryer uk | 480 | 10 | Commercial | 0.51 | Existing-guide supporting intent |
| best dehumidifier uk | 9,900 | 15 | Commercial | 1.13 | New-category candidate; check seasonality and products |
| best compact dehumidifier uk | 720 | 4 | Commercial | 0.81 | Promising specific sub-intent |
| best heated clothes airer | 3,600 | 0 reported | Commercial | 0.94 | New-category candidate; verify difficulty and SERP |

CPC is retained as returned by the provider and is an advertiser-bid proxy, not affiliate commission or expected revenue. Do not label it GBP unless the provider explicitly supplies a GBP currency field.

**Trend caution:** monthly data shows autumn seasonality, not uniform year-on-year growth. best dehumidifier uk showed about 12,100 searches in October 2026 versus 18,100 in October 2025, while September-to-October 2026 rose from about 6,600 to 12,100. Broad heated clothes airer showed about 135,000 in October 2026 versus 165,000 in October 2025, with September-to-October rising from about 90,500 to 135,000. Similar spellings/variants may share grouped volume; never add their volumes. The exact phrase best heated clothes airer had an estimated 3,600 monthly searches.

Sampled UK SERPs showed AI Overviews, People Also Ask and popular-product modules on multiple queries. The vacuum SERP included RTINGS, The Telegraph, Which?, John Lewis and Good Housekeeping; air-fryer results included BBC Good Food, The Guardian and Tom's Guide; dash-cam results included Nextbase, Auto Express and Halfords. This is evidence of current SERP composition only, not proof that SmartPickHub is cited in AI answers.

### Immediate research queue

1. Validate dehumidifiers: exact UK models, desiccant vs compressor, room size, clothes-drying use, running-cost evidence and warranty.
2. Validate heated clothes airers: tier count, cover, power draw, safe-use information, drying-area dimensions and running-cost methodology.
3. Improve existing high-intent clusters before creating near-duplicates: cordless vacuums, dash cams, robot vacuum/mop and air fryers.
4. A new page is allowed only when its SERP intent and buyer task are materially distinct from an existing guide.

## 4. Opportunity scoring

Keep raw inputs and score components; never store only a black-box total.

### Keyword opportunity score (0–100)

- Intent fit: 25 — commercial/transactional terms aligned with a real product or guide.
- Demand: 15 — UK monthly volume, log-scaled so one huge head term does not dominate.
- Ranking reachability: 15 — KD plus actual SERP authority and content type, not KD alone.
- Trend/seasonality: 15 — 3-month momentum, 12-month comparison and multi-year seasonal pattern.
- SERP opportunity: 15 — weak/outdated results, unanswered questions, forums, product modules, AI Overview and publisher/retailer mix.
- Commercial relevance: 10 — relevant product availability and affiliate eligibility; CPC is only a proxy.
- Catalogue fit: 5 — whether existing guides and verified products genuinely satisfy the query.

### Product/category opportunity score (0–100)

- Buyer-demand evidence: 20.
- Exact UK product/model availability and manufacturer evidence: 20.
- Fit to a distinct search-intent cluster: 15.
- SERP gap and achievable differentiation: 15.
- Trend/seasonality and durability: 10.
- Evidence quality, warranty/compatibility clarity and safety: 10.
- Compliant image availability: 5 (optional; absence does not automatically reject).
- Affiliate destination eligibility and link confidence: 5.

Hard stops override scores: ambiguous identity, no trustworthy manufacturer evidence, prohibited/unsafe category, unclear image rights where an image is required, invalid affiliate destination, duplicate page intent, or missing editorial approval.

## 5. Keyword and trend research pipeline

1. Seed discovery from current guide taxonomy, user problems, use cases, manufacturer model families, retailer category terms, GSC queries, saved keywords, related searches, People Also Ask and AI answer fan-out.
2. Research UK and US independently; preserve spelling, voltage, model, warranty and availability differences.
3. Expand buyer modifiers: best, budget, compact, quiet, for pets, small homes, front and rear, no subscription, with cover and other use cases. Synthetic phrases remain unmeasured until checked.
4. Collect volume, KD, CPC, competition, intent and monthly history with source, timestamp, country and provider units.
5. Sample top 10 SERPs; record organic domains, page types, freshness, retailers, publishers, forums, video, PAA, AI Overview and product modules. Compare mobile where it changes the page plan.
6. Cluster by SERP overlap and intent, not word similarity alone. One cluster maps to one canonical page unless a distinct buyer task is evidenced.
7. Map clusters to existing canonical URLs; recommend updating an existing guide before proposing a new one.
8. Flag material trend changes against 3-month, 12-month and same-season baselines; suppress one-off spikes and grouped-volume duplicates.
9. When connected, prioritize GSC queries/pages and GA4 organic outcomes over third-party estimates.
10. Return one decision: update_existing, new_guide_candidate, product_candidate, monitor or reject, with evidence and reason.

Google Trends normalized interest, monthly search-volume estimates, GSC impressions and Amazon Associates clicks are different measures. Keep them separate.

## 6. Product discovery and evidence pipeline

DISCOVER → INTAKE → NORMALIZE → DEDUPLICATE → CLASSIFY → VERIFY IDENTITY → EXTRACT FACTS → KEYWORD MAP → IMAGE RIGHTS → AFFILIATE MAP → DRAFT → QA → HUMAN APPROVAL → RELEASE → MONITOR

- Discovery sources: manufacturer category/product feeds, official brand websites and support pages, permitted retailer/category data, GSC queries, SERP modules, trend signals and manually supplied candidates.
- Do not scrape Amazon product pages or images. Use Associates-approved APIs/content only where the account is eligible and current programme terms permit the exact use. A search link is not proof of an exact live listing.
- Verify exact model, regional SKU, MPN, GTIN/EAN/UPC, generation, accessories, voltage/plug, warranty, compatibility and lifecycle.
- Extract only facts supported by a source URL and checked date. Keep claim-to-source links so a later source change identifies affected claims.
- Maintain states: discovered, candidate, evidence_pending, verified, draft_ready, approved, published, needs_refresh, discontinued and rejected.
- A product can be stored without a public page. Guides and products have a many-to-many relationship.
- Keep the current dry-run importer as the safe front door. Its 100,000-row and 20 MB limits are batch safety limits, not proof of million-record readiness. Add paged ingestion, resumable batch IDs, checksums, idempotency keys, row-level retries and a dead-letter queue before bulk intake.

## 7. Images and content

### Image workflow

1. Search exact-model manufacturer media libraries, commercially reusable open repositories such as qualifying Wikimedia Commons files, and written-permission sources.
2. Record exact asset page, model match, creator/rights holder, licence/version, attribution, territory, modification rights, retrieval date and checksum.
3. Automated checks may detect dimensions, file type, watermark and duplicate hash; they cannot grant permission or prove regional model identity.
4. Human reviewer approves rights and exact model before public rendering. Store originals and derivatives separately where the licence permits.
5. If no suitable image exists, render the current text-based product card. Category artwork must be labelled illustration, never exact product photography.

### Content assembly

Generate drafts from verified facts: concise answer, who it suits, specification differences, limitations, compatibility, source citations, comparison table, buying checklist, FAQs based on real query evidence, disclosure and last-verified date. An LLM may draft wording but may not invent facts, prices, ratings, reviews or hands-on testing.

Every guide must provide original decision support. Do not create thousands of thin pages that merely repeat a product name and an Amazon search link.

## 8. Search and AI answer-engine readiness

### Search engines

- Google: canonical URLs, crawlable internal links, XML sitemap index, Search Console diagnostics, selected URL Inspection checks and useful content. Google does not use IndexNow as its indexing submission mechanism.
- Bing and participating IndexNow engines: submit only new, materially changed, redirected or removed URLs after production deployment is verified. Keep a durable change queue and receipt log.
- Sitemap sharding: each sitemap is limited by protocol to 50,000 URLs and 50 MB uncompressed. One million eligible URLs would require at least 20 child sitemaps, but the preferred design is to index only useful canonical pages.
- Other providers: use documented webmaster/crawler mechanisms; never claim universal submission.

### AI discovery

- Make facts easy to quote: clear headings, concise direct answers, explicit model/market, structured comparisons, dated source links and transparent methodology.
- Use Schema.org types only where page content supports them: Organization, WebSite, BreadcrumbList, Article, and Product/Offer only when exact offer data is valid and policy-compliant. Structured data must match visible content.
- Keep search crawlers and model-training crawlers separate. OAI-SearchBot access is distinct from GPTBot training preferences; apply the same separation to other providers where documented.
- There is no universal API that guarantees inclusion in ChatGPT, Gemini, Claude, Perplexity or Google AI answers. Make pages crawlable and useful, monitor citations and mentions, and do not promise indexing or recommendations.
- OpenSEO's AI prompt-research dataset is US-English only and is not logged ChatGPT prompt volume. For this UK-first site, prefer UK-targeted live prompt tracking; label each observation by engine, market, exact prompt and date.

### Proposed UK AI prompt baseline

Eight buyer prompts are ready for review: cordless vacuum for pet hair; family air fryer capacity; front/rear dash cams; robot vacuum/mop for mixed floors and pet hair; bean-to-cup coffee machine; dehumidifier for drying clothes; heated clothes airer and running cost; air purifier for allergies.

OpenSEO estimated 8 prompts × 4 engines (ChatGPT, Gemini, Google AI Overviews and Google AI Mode) = 32 observations per weekly check, 64 credits / about US$0.064 per check and about US$0.256 for four checks per month. The current balance was 28 credits. No tracker was created and no paid schedule was enabled. Obtain sufficient credits and owner approval before enabling recurring checks. Perplexity/Claude live API answers have separate provider costs and are excluded.

## 9. Million-record target architecture

### Current MVP

- Astro static site and src/data/products.json for the current 25 guides/100 products.
- GitHub source control, PR review and current CI release gate.
- Current dry-run importer and validators as reusable logic.
- Cloudflare Pages production and separate noindex preview.

### Scale target (not implemented)

| Layer | Responsibility |
|---|---|
| Ingestion API / batch inbox | CSV/JSON/feed uploads, source metadata, resumable batches and idempotency |
| Queue and workers | Normalize, dedupe, fetch sources, extract facts, research keywords, check images, retry and dead-letter |
| Relational source of truth | Managed PostgreSQL with stable IDs, constraints, indexes and market-specific records; partition only when measured needs justify it |
| Object storage | R2 or equivalent for licensed assets, original/derivative files, checksums and permitted evidence snapshots |
| Search index | Start with PostgreSQL indexes; add Typesense/OpenSearch/Meilisearch only when measured catalogue-search needs justify it |
| Delivery | Astro hybrid/SSR on Workers or equivalent edge runtime, database-backed route loaders and cache tags; do not statically build every product |
| Cache | CDN/edge cache for public guide/product data; invalidate by product/guide version and market |
| Editorial console | Candidate queues, evidence panels, duplicate resolution, image-rights review, preview and explicit approval |
| Observability | Job status, queue lag, errors, source freshness, build/runtime metrics, indexing receipts and audit history |

Core entities: products, product_variants, market_offers, identifiers, brands, categories, sources, claims, image_assets, image_rights, keyword_clusters, keywords, serp_snapshots, guides, guide_products, guide_keywords, affiliate_destinations, editorial_reviews, import_batches, jobs, publish_events, route_registry, indexing_outbox, indexing_receipts and audit_events.

Use UUID/ULID stable IDs; unique constraints for verified identifiers in the correct market/scope; normalized brand/model indexes; full-text and trigram indexes for candidate matching; explicit market/locale fields; versioned evidence. Keep evidence, editorial content and marketplace offer data separate.

### Route and index strategy

- One million database records does not mean one million indexable URLs.
- Index category hubs, useful buying guides, brand/category pages and selected product pages only when they satisfy distinct demand and have sufficient verified information.
- Product pages need unique model-specific facts, meaningful buyer utility, reliable sources and a reason to exist beyond an affiliate link.
- Generate sitemap shards from the approved route registry, not every database row. Maintain a durable outbox for add/update/delete events and idempotent receipts.
- Use canonical URLs, stable slugs, approved merge redirects, noindex for thin/duplicate/temporary pages and facet rules that prevent crawl traps.

### Scale gates

| Gate | Target | Required proof |
|---|---:|---|
| MVP | 100–1,000 records | Importer, schema, dedupe, evidence and CI remain reliable |
| Growth | 1,000–10,000 | Database-backed staging, retries, source/image audit and measured build-time limits |
| Transition | 10,000–100,000 | Hybrid/SSR delivery, route registry, workers, sitemap shards and cache invalidation |
| Large catalogue | 100,000–1,000,000 | Load tests, index/partition review, observability, backup/restore drills, queue recovery, security review and cost model |

Do not wait until one million to migrate. Benchmark at 1k, 10k and 100k; move off the single static JSON catalogue before build time, memory, deployment payload or route count becomes an operational risk.

## 10. Automation and approval model

| Cadence / trigger | Automated task | Output |
|---|---|---|
| Weekly | UK category/keyword scan; compare trends, seasonality and SERP features | Ranked candidate backlog, not published pages |
| Weekly after approval/credits | AI answer visibility checks for exact buyer prompts | Dated engine-specific citation/mention report |
| On intake | Normalize, identify, dedupe and classify candidates | Candidate record and exception queue |
| Source change / scheduled recheck | Detect manufacturer URL/status/spec changes | Affected claims and refresh tasks |
| Draft completion | Evidence, affiliate, schema, duplicate, SEO, accessibility and image checks | Pass/fail report |
| Explicit release approval | Build, deploy, smoke test and create route-level indexing events | Verified release and receipts |
| Daily/weekly after launch | Broken sources, link health, index coverage, rankings and outbound clicks | Maintenance queue |

Use GitHub Actions while workloads are small. Move long-running/high-volume work to queue-backed workers and durable job storage. Every job must be idempotent, retryable, observable and resumable. Missing secrets or insufficient credits must produce skipped/configuration_required, not misleading success or uncontrolled paid retries.

Approval states: automated candidate → evidence verified → draft ready → QA passed → owner approved → release authorized → production verified. No process may jump from discovery to public publication.

## 11. Analytics feedback loop

- Connect the already verified Google Search Console property to OpenSEO; its project connection is absent. Resolve the previously reported sitemap “Couldn't fetch” state with the live sitemap URL and URL Inspection diagnostics; do not repeat site verification unless Google reports it invalid.
- Connect GA4 only after confirming property/Measurement ID, privacy notice and consent approach. Instrument guide views, product-card impressions, outbound Amazon clicks and click IDs; never send personal data.
- Keep onsite outbound click events, Amazon Associates reports, GSC clicks/impressions, GA4 organic sessions and affiliate orders as separate measures.
- Build a page × keyword × product funnel: impressions → clicks → engaged guide visits → product-card interaction → affiliate outbound click → Amazon reported order/commission where available.
- Refresh content from actual queries and page outcomes, not only third-party volume.

## 12. Delivery roadmap

### Phase 0 — Trustworthy baselines
- Preserve the 25-guide/100-product release; no re-import.
- Resolve OpenSEO GSC connection and sitemap diagnostics; connect GA4 only after consent and measurement details are approved.
- Map all 25 guides to their query clusters and identify cannibalization/coverage gaps.
- Complete category validation briefs for dehumidifiers and heated clothes airers.

### Phase 1 — Opportunity engine
- Extend keyword universe with source, market, timestamp, metrics, trend history, SERP evidence, intent and canonical URL mapping.
- Add deterministic scoring and dedupe; separate unmeasured phrases from measured keywords.
- Add weekly opportunity reports and manual candidate approval.

### Phase 2 — Product intake v2
- Extend dry-run importer with batch IDs, resumability, idempotency, stronger identifier matching, market variants, source/claim records and row retries.
- Keep candidates separate from live catalogue; produce review reports and never mutate public data on dry run.
- Add compliant image-rights candidate workflow and explicit no-image outcome.

### Phase 3 — Controlled content automation
- Generate guide/product-card drafts from verified records and approved templates.
- Check source coverage, regional differences, affiliate link type/tag, duplicate intent, accessibility, schema and thin content.
- Open draft PRs only; owner approval and release authorization remain hard gates.

### Phase 4 — Measurement, indexing and AI visibility
- Connect GSC/GA4 and implement outbound click measurement.
- Replace whole-sitemap notification with route-aware IndexNow outbox and receipts; use GSC/URL Inspection for Google.
- After credit top-up and cost approval, start a small weekly UK AI visibility baseline.

### Phase 5 — Database and million-record readiness
- Prototype PostgreSQL + queue + object storage behind an adapter while retaining the current site unchanged.
- Benchmark 1k/10k/100k records and route delivery; migrate when thresholds require it.
- Add SSR/edge delivery, route registry, sitemap shards, caching, monitoring, backups and restore drills before large-scale intake.

## 13. Current blockers

1. OpenSEO has 28 credits remaining; proposed weekly AI baseline needs 64 credits per check. No paid schedule was enabled.
2. GSC and GA4 are not connected to the OpenSEO project, despite prior manual GSC verification.
3. Current static JSON catalogue and static Astro output are not the million-record architecture.
4. Current importer is a safe dry-run tool, not a production database ingestion service.
5. Product images remain optional; rights and exact-model match must be approved.
6. New categories need manufacturer/product and SERP validation before a guide is proposed.
7. Scheduled AI draft workflow failed when GEMINI_API_KEY was missing; future workflows must skip cleanly when secrets are absent.

## 14. Safety and non-goals

- No mass-generated thin pages, keyword stuffing, fake reviews/testing, invented ASINs, stale prices or availability claims.
- No Amazon scraping, unlicensed retailer images or unapproved caching of Amazon Program Content.
- No automatic merge, publication, deletion, DNS/Cloudflare change, paid API use or subscription.
- No assumption that IndexNow acceptance means Google indexing or crawler access guarantees AI citation.
- No model-training crawler policy change as a side effect of search visibility work.
- No replacing current product records or repeating completed guide/import/SEO work.

## 15. Definition of ready for automated scale

A product moves with minimal repeated manual effort only when the system can identify it uniquely; prove its exact regional variant; attach sourced facts; map it to one non-cannibalizing buyer-intent cluster; verify a lawful image or explicitly omit it; create the correct marketplace destination; generate a complete draft; pass deterministic QA; collect human approval; publish through a controlled route registry; and record search/analytics/indexing outcomes. The process must be resumable, auditable and reversible by batch/version.

**Success is not one million imported products. It is a large, clean, current catalogue producing useful pages for real buyer demand, with low manual handling and no loss of trust or policy compliance.**
