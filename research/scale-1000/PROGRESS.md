# SmartPickHub — Buyer Keyword Intelligence & Product Discovery

**Updated:** 22 November 2026 14:40 UTC  
**Primary market:** UK; US is a separately verified secondary market.  
**Production catalogue:** 25 guides / 100 existing products. These are preserved and must never be re-imported.  
**Primary KPI:** 1,000+ distinct buyer-intent keyword candidates, with real monthly search metrics prioritised where available. Product candidates are a separate evidence-gated research queue, not a 1,000-product publishing target.

## Current execution checkpoint

| Measure | Count | Meaning |
|---|---:|---|
| Existing live catalogue | 100 | Already present; excluded from new intake |
| New staged candidates | 102 | 62 UK + 40 US; research queue only, not verified/publishable |
| Verified new products | 0 | No candidate has passed all identity, regional, evidence and affiliate checks |
| Keyword candidates | 2,799 | 1,488 UK + 1,311 US after duplicate and redundant-template cleanup; candidates are not measured demand or pages |

### Batch 001 — UK candidate discovery

- Dehumidifiers: 23 candidates; supported by existing saved commercial keyword evidence for “best dehumidifier uk” (9,900 estimated monthly searches, provider estimate) and the current category research plan.
- Heated clothes airers: 7 candidates; supported by saved keyword evidence for “best heated clothes airer” (3,600 estimated monthly searches, provider estimate). Similar/related phrase volumes must not be added together.
- Air purifiers: 14 candidates mapped to the existing air-purifier guide; do not create a near-duplicate guide. Keyword volume research remains pending.

### Quality rules

1. Candidate records are separate from `src/data/products.json`; no catalogue mutation or deployment.
2. No direct Amazon ASIN or affiliate URL is fabricated. Search phrases are not direct product links.
3. Manufacturer/retailer listings are discovery evidence, not proof of current Amazon availability, price, stock, review score, or image rights.
4. Capacity/colour/revision variants require deduplication and distinct buyer value before they count as separate products.
5. Every candidate must have exact UK model identity, manufacturer claims, marketplace destination, source date, claim-level evidence and QA before becoming a verified product.
6. New guides require separate SERP-intent and cannibalisation review. Existing guide mappings are preferred where intent matches.
7. Never treat candidate count as verified products, measured demand, or approval to publish.

## Next batches

- Batch 002: home cleaning, floor care accessories, kitchen appliances and laundry products; research categories not already represented in the catalogue.
- Batch 003: garden automation, smart heating, water treatment and home energy monitoring.
- Batch 004 onward: expand only from validated keyword clusters and exact UK model evidence; add US equivalents only where model identity and power/regulatory differences are verified.

## Immediate next step

Resolve exact SKU/product pages and manufacturer specifications for Batch 001; eliminate model variants that do not offer distinct comparison value; then run marketplace-link verification separately. Only after these gates should the batch be promoted from candidate to verified intake.


### Batch 002 — additional UK candidate discovery

- Robot lawn mowers: 14 candidates across Segway Navimow and Husqvarna, based on official UK range listings. Lawn-area capacity, navigation method, slope performance, boundary requirements, exact SKU and current stock must be checked per model. Some Navimow LiDAR Pro pages explicitly identify an EU version with UK adapter; keep this regional caveat.
- Smart thermostats: 4 candidates across tado° X and Resideo evohome, based on official UK product/compatibility documentation. Compatibility with boiler type, hot-water cylinder, OpenTherm, heat pump, wiring and zone configuration is a hard verification gate.
- No keyword-volume figures were assigned to these two clusters because no current first-party or paid keyword metric was obtained in this batch.


## 22 November 2026 — Buyer-intent keyword research started

- Created a separate UK keyword-intelligence database containing 1240 unique buyer-oriented candidate phrases across 62 product topics.
- The dataset distinguishes transactional terms (buy/price/deals) from commercial investigation terms (best/reviews/comparison/buying guide/use case).
- Current OpenSEO saved cache contains 32 keywords with monthly volume/KD/CPC/intent values. Only 8 are exact matches inside the generated 1,240-phrase universe; all other generated phrases remain unmeasured.
- Search volume is estimated monthly searches, not clicks or orders. No monthly trend series was available in the saved cache; do not invent trend directions.
- No paid metric refresh was run because the last-known credit balance was 28 and a broad fresh metric run needs separate cost approval.
- This keyword dataset is research-only. It does not create pages or publish keyword variations. Existing guide mapping and SERP-overlap review remain mandatory.


## 22 November 2026 — US market parity workstream

- Created a separate US English keyword database with **1,240 initial phrases across the same 62 product topics**. Phrases are localized to US vocabulary and buying tasks (basement, yard, apartment, HVAC/C-wire, 120V ecosystem, color laser, license plate, carry-on, True HEPA, etc.).
- US intent classification: 186 transactional and 1054 commercial phrases by wording. **US measured keyword metrics: 0**. No UK metrics were copied into the US dataset. Fresh US volume/KD/CPC/trends require location code 2840 and must be collected separately.
- Created US page briefs for all 25 existing guides (refresh, not duplicate) plus 12 new-page/topic candidates; two of the candidates are explicitly refresh-only due likely overlap with existing canonical guides.
- Created a US product discovery batch with 22 manufacturer-sourced candidates across eufy, Levoit, Frigidaire, EcoFlow, ecobee and Roborock. Verified/publishable remain 0; stock and exact SKU/variant checks remain open. No Amazon ASIN or affiliate URL was invented.
- Created a UK page-brief pack: 25 existing-guide refresh briefs plus 12 new-page candidates. These are editorial plans, not pages published.
- Combined keyword candidate universe at this checkpoint: 1,488 UK + 1,383 US = **2,871 phrases**. UK cache: 32 saved metric records, 8 exact matches within generated UK phrases. US: 0 measured. No monthly trend series available for the saved UK cache.
- Product queue: 62 UK + 40 US = 102 staged candidates; verified new products 0. Existing live catalogue remains 100 products / 25 guides. No 1,000-product publishing target.
- All work remains on research branch. No public site, catalogue, Amazon links, indexability or deployment changed.


### US candidate batch expansion — 22 November 2026

- Expanded US product discovery from 14 to **22 candidates** across eufy, Levoit, Frigidaire, EcoFlow, ecobee and Roborock.
- Added ecobee Smart Thermostat Premium/Enhanced/Essential and Roborock F25 GT Gen 2/Steam/Ultra/XT/BX wet-dry floor cleaners.
- Added a US wet-dry floor cleaner page brief. This is distinct from robot vacuums and cordless stick vacuums; exact SERP intent still requires review.
- US candidate verification and Amazon marketplace link validation remain pending; verified/publishable count remains zero.




## 22 November 2026 14:16 UTC — Final keyword expansion and relevance QA
- Re-read the research branch and kept all work isolated from production. The user's 1,000+ target is buyer-intent keywords, not 1,000 products.
- Rebuilt the additional long-tail tier from the original 1,240-per-market base using topic-specific buyer modifiers after rejecting an earlier broad cluster-modifier pass that produced irrelevant combinations.
- Final unique universe: **1,488 UK + 1,383 US = 2,871 phrases** across 62 topics per market. The incremental tier adds 248 UK and 143 US phrases after exact deduplication. Duplicate count is zero in both datasets.
- UK: 186 transactional / 1,302 commercial; 32 saved metric records, 8 exact phrase matches, 1,480 unmeasured. US: 186 transactional / 1,197 commercial; 0 measured and all 1,383 unmeasured. Trend data remains unavailable; no paid credits used.
- Existing-guide mapping: UK 888 mapped / 600 unmapped; US 827 mapped / 556 unmapped. Unmapped phrases require SERP/cannibalisation review; they are not automatically new pages.
- Product discovery remains separate: 62 UK + 22 US candidates, 0 verified/publishable. Page briefs remain plans only: UK 25 refresh + 12 new candidates; US 25 refresh + 12 topics (10 new-page candidates, 2 refresh-only).
- No public page, product, catalogue, metadata, deployment or indexability change. Existing 25 guides / 100 products remain untouched.


## 22 November 2026 — SERP validation checkpoint
- Reviewed public UK and US buying-guide SERPs and recorded competition, regional differences, canonical overlap and unresolved evidence gaps in `research/keyword-intelligence/SERP-VALIDATION-2026-11-22.md`.
- Strongest distinct US candidate in this pass: wet-dry floor cleaners. UK dehumidifiers and robot lawn mowers warrant evidence development. UK heated airers and smart thermostats have clear intent but high competition. US cameras without subscription, basement dehumidifiers, wildfire-smoke purifiers, robot mowers and portable AC show distinct tasks but need differentiation and/or canonical-overlap checks.
- Smart plugs, travel and several other topics are deferred pending differentiation or stronger SERP samples. UK portable AC is seasonal with stock constraints reported into early 2027.
- This is qualitative SERP evidence only: no search volumes, trend metrics or ranking predictions were added. Page briefs now record evidence status and notes. No public page or product changes.


## 22 November 2026 — US product discovery expansion
- Expanded the manufacturer-sourced US product candidate batch from 22 to **40** by adding 18 candidates across robot lawn mowers, wet-dry floor cleaners, portable ACs, smart irrigation, smart locks and electric pressure washers.
- New additions: 3 Mammotion mower families; 3 Tineco wet-dry cleaners; 2 Whynter portable AC models; 2 Rachio irrigation products; 3 smart locks (Aqara/Schlage); 5 pressure washers (Greenworks/Kärcher).
- Sources are official US manufacturer product pages/catalogues. Exact model/variant, product family, US stock, and Amazon.com ASIN/affiliate destination still require verification. Tineco S9 Artist Pro/S9 Artist Steam/S7 Stretch Ultra were marked backordered/unavailable on official store pages; Rachio Smart Hose Timer was out of stock; Mammotion stock varies by model variant.
- Verified/publishable/ASIN-verified counts remain **0**. Candidate count is not product approval. Existing 100-product catalogue untouched; no production pages or products changed.


## 22 November 2026 — US wet-dry floor-cleaner editorial outline
- Prepared a research-only outline at `research/page-outlines/us-wet-dry-floor-cleaners-outline-2026-11-22.md` for the provisional US wet-dry hard-floor cleaner page.
- Tightened the intent boundary to upright cordless wet-dry floor washers; explicitly excludes workshop/shop vacuums, carpet extractors, robot vacuum-mops and stick-vacuum mop attachments. This reduces cannibalisation with existing cordless-vacuum and robot-vacuum guides.
- Outline maps eight staged US candidates (five Roborock F25 variants/families and three Tineco FLOOR ONE models), with official source evidence and stock caveats. Tineco's three pages were backordered/unavailable at capture and cannot be recommended until rechecked.
- Added a publish gate requiring exact US model/SKU, at least five current purchasable models, independent testing coverage, mode-specific runtime, hard-floor compatibility, warranty/consumables and exact Amazon.com destination verification. No hands-on testing is claimed.
- Outline only; no content page, product card or public URL created.


## 22 November 2026 — US wet-dry model verification refresh
- Rechecked the official US Roborock and Tineco catalogs after the initial eight-model outline. Roborock's current US store surfaces a broader F25 family, including F25 ALT, F25 ACE Pro, F25 Pro Turbo and F25 Ultra Steam Gen 2 in addition to the previously captured models.
- Created `research/product-verification/us-wet-dry-floor-cleaners-product-checkpoint-2026-11-22.md` with a dated 12-model evidence matrix and source register. This is a verification note, not a promotion of candidates into the staged product batch or live catalogue.
- Important model distinction: F25 Ultra and F25 Ultra Steam Gen 2 are separate models. Do not merge model variants or bundle listings to inflate unique product counts.
- Rechecked Tineco US pages: S9 Artist Pro, S9 Artist Steam and S7 Stretch Ultra still explicitly show unavailable/backordered. They remain excluded from purchasable recommendations until a fresh positive stock check.
- Roborock official-store Add to Cart / Buy Now signals are manufacturer-store evidence only; no Amazon.com ASIN, exact affiliate destination, independent testing, or two-retailer availability was verified in this pass.
- The staged US candidate batch remains 40; verified/publishable remains 0. The additional Roborock model variants in the checkpoint are not counted as new staged candidates until identity, duplication and regional SKU checks are completed.
- No catalogue import, guide publication, ASIN update, production change, PR creation, merge or deployment was performed.


## 22 November 2026 14:38 UTC — Quality and evidence audit
- Audited the two UK product batches (44 + 18 = 62 records) and the US product batch (40 records). No normalized duplicate candidate names or model labels were found within the UK batches or within the US batch.
- Found a schema weakness in all 62 UK product candidates: they lacked a dedicated `model` field and an explicit model-identity status. Added `model: null`, `modelIdentityStatus: "unverified"`, `sourceType` and `sourcePageSpecificity` fields rather than guessing model numbers from display names. These remain candidates, not verified products.
- Added `modelIdentityStatus: "unverified"` and `sourcePageSpecificity` to the 40 US records for consistent quality gating. US source specificity: 26 product pages and 14 category/collection pages; category/collection sources still require exact model pages.
- All 102 candidate records still have no verified Amazon ASIN/affiliate destination. All UK 62 records remain partial facts with stock not checked. Eight US records carry explicit stock-check-required status; all 40 remain unverified.
- Normalized US keyword strings for punctuation/hyphenation/case and removed 10 duplicate variants. US keyword file now contains 1,373 unique phrases (186 transactional / 1,187 commercial; 823 mapped / 550 unmapped); UK remains 1,488 unique (186 transactional / 1,302 commercial; 888 mapped / 600 unmapped). Combined normalized count: **2,861**.
- US measured metrics remain 0; UK saved cache remains 32 metric records with 8 exact phrase matches. Trend data is unavailable. No paid metric refresh was run.
- Rechecked the official Roborock US wet-dry collection: its 13 product tiles include bundles/combo SKUs and must not be counted as 13 distinct standalone cleaners. Rechecked Tineco US pages: S9 Artist Pro, S9 Artist Steam and S7 Stretch Ultra remain marked unavailable/backordered.
- Added a dated US wet-dry catalog/stock update to the product verification checkpoint and created a separate quality audit report. No product was promoted to verified/publishable; no guide, live catalogue, production site, indexability or deployment was changed.


## 22 November 2026 14:40 UTC — Second US keyword semantic cleanup
- Reviewed the US long-tail set for redundant modifier templates, not just punctuation duplicates.
- Found 62 phrases of the form `best [product] for budget models/systems/routers/cameras/kits/sets`; each had an existing canonical `best budget [product]` phrase in the same dataset. Removed the redundant phrase rather than count two phrasings as separate opportunities.
- Recalculated the US summary and 21 cluster counts: 1,311 phrases across 62 topics; 186 transactional / 1,125 commercial; 786 mapped / 525 unmapped; zero measured metrics and no trend series.
- The earlier 10 punctuation/hyphenation duplicates were already removed. The current US keyword dataset now has no exact or normalized duplicates under the QA normalization rule.
- Combined UK + US candidate phrase count is now **2,799** (1,488 UK + 1,311 US). The original 2,871 and intermediate 2,861 counts are superseded by this cleanup.
- Remaining generic modifiers are flagged for human/SERP review; they were not blindly removed because many describe valid buyer requirements such as room size, pet hair, travel, runtime, hand size, noise or installation.
- No new measured search data, pages or products were fabricated; no paid research credits were used.


## 22 November 2026 — UK dehumidifier exact-page evidence batch
- Reviewed the 23 UK dehumidifier candidates against current Meaco and EcoAir manufacturer pages. Upgraded 17 records to exact product-page sources and populated the manufacturer model name; exact SKU remains pending.
- UK Batch 001 source specificity is now 26 product pages / 18 category or landing pages. Across both UK batches: 28 product pages / 34 category or landing pages. Combined UK+US source-specificity gaps are now **48** (34 UK + 14 US), down from 63.
- Added model-level manufacturer evidence for Meaco Arete Two 10L/12L/20L/25L, Meaco DD8L Pro, and EcoAir DD1 Mini, DD1 Simple MK3, DD1 Classic MK6, DD2 Simple, DD3 Slimline, DD3 Simple, DD3 Classic MK3, DD128, DC12 MK3, DC26, Summit S and DDWH10.
- Captured availability caveats: Arete Two 10L page showed out-of-stock/pre-order; DD128 appeared only as a sold-out refurbished outlet listing. Do not count either as a current purchasable recommendation without a fresh stock check.
- Extraction-rate test conditions differ between models (for example, 20°C/60% RH vs 30°C/80% RH). Do not rank by litres/day without normalising test conditions. Desiccant and compressor models also require separate decision criteria.
- Evidence matrix: `research/product-verification/uk-dehumidifier-product-evidence-2026-11-22.md`. No ASINs, affiliate links, ratings, review counts or hands-on testing claims were added. Verified/publishable product count remains 0.


## 22 November 2026 — UK dehumidifier exact-page coverage completed
- Completed the remaining six exact manufacturer pages for Meaco Arete One 6L/10L/12L/20L/25L and EcoAir DC14 MK2. UK dehumidifier candidate coverage is now **23/23 exact manufacturer product pages** with model names populated.
- Model families remain separate: Meaco Arete One vs Arete Two must not be merged; capacities/colours are not separate product counts.
- Recorded seven manufacturer-page stock caveats: Arete One 6L/10L/12L/20L low stock; Arete Two 10L and Arete One 25L out-of-stock/pre-order; EcoAir DD128 only surfaced as a sold-out refurbished outlet listing.
- UK source specificity is now 34 product pages / 28 category or landing pages across both batches; US remains 26 product pages / 14 category or collection pages. Total remaining source-specificity gaps: **42** (28 UK + 14 US).
- UK model-name status: 23 manufacturer-page-confirmed with SKU pending; 39 other UK model names unverified. US: all 40 remain unverified. No Amazon ASIN or affiliate URL has been validated.
- The complete matrix and technical caveats are in `research/product-verification/uk-dehumidifier-product-evidence-2026-11-22.md`. Extraction rates are not comparable unless temperature/RH test conditions match.
- No products were promoted to verified/publishable, no page was published, and no production catalogue or deployment changed.


## 22 November 2026 — US exact product-page evidence batch
- Upgraded all 14 US candidates that previously relied on category/collection pages to exact product or product-family pages.
- Current US source coverage: 37 exact product pages, 3 product-family pages and zero category-only candidates. The family pages are eufyCam S4, Mammotion LUBA 3 AWD and LUBA mini 2 AWD; exact package/capacity variant SKUs remain unresolved.
- Captured exact manufacturer model/family evidence for 14 US candidates; 26 remain model-identity unverified. Levoit Vital 100S-P model code LAP-V102S-WUS captured.
- Recorded two manufacturer-source conflicts requiring resolution: SoloCam E50 page has inconsistent zoom/resolution claims; Roborock F25 BX page metadata title conflicts with URL/body model name.
- Mammotion LUBA 3 1500, LUBA mini 2 and YUKA mini 2 1000H show sold-out or variant-specific sold-out signals. Do not promote without a positive exact-variant stock check.
- Combined source/variant resolution gaps across the 102 candidates now stand at **31** (28 UK category/landing sources + 3 US family-variant SKU gaps). Amazon ASIN verified remains zero.
- Evidence report: `research/product-verification/us-product-page-evidence-2026-11-22.md`. No product import, guide publication, PR, merge or deployment.
