# SmartPickHub — Buyer Keyword Intelligence & Product Discovery

**Updated:** 22 November 2026 14:16 UTC  
**Primary market:** UK; US is a separately verified secondary market.  
**Production catalogue:** 25 guides / 100 existing products. These are preserved and must never be re-imported.  
**Primary KPI:** 1,000+ distinct buyer-intent keyword candidates, with real monthly search metrics prioritised where available. Product candidates are a separate evidence-gated research queue, not a 1,000-product publishing target.

## Current execution checkpoint

| Measure | Count | Meaning |
|---|---:|---|
| Existing live catalogue | 100 | Already present; excluded from new intake |
| New staged candidates | 84 | 62 UK + 22 US; research queue only, not verified/publishable |
| Verified new products | 0 | No candidate in this first batch has passed all identity, regional, evidence and affiliate checks |
| Keyword candidates | 2,871 | 1,488 UK + 1,383 US; candidates are not measured demand or pages |

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
- Product queue: 62 UK + 22 US = 84 staged candidates; verified new products 0. Existing live catalogue remains 100 products / 25 guides. No 1,000-product publishing target.
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
