# SmartPickHub — Quality Assurance Checkpoint
**Date:** 22 November 2026, 14:40 UTC  
**Branch:** `research/scale-1000-batch-001`  
**Scope:** buyer-keyword datasets, staged UK/US product candidates, and US wet-dry floor-cleaner evidence.  
**Environment:** research only; no production files or live catalogue modified.

## Executive status
The research datasets have been normalized and schema gaps have been made explicit. The project currently contains **2,799 distinct normalized buyer-intent keyword candidates** and **102 staged product candidates**. None of the 102 products is verified for publication or has a verified Amazon ASIN/affiliate destination.

## 1. Keyword dataset QA

| Dataset | Unique phrases | Transactional | Commercial | Measured exact metrics | Mapped to existing guides | Unmapped |
|---|---:|---:|---:|---:|---:|---:|
| UK | 1,488 | 186 | 1,302 | 8 exact phrase matches in saved cache | 888 | 600 |
| US | 1,311 | 186 | 1,125 | 0 | 786 | 525 |
| **Combined** | **2,799** | **372** | **2,427** | **8 UK only** | **1,674** | **1,125** |

### Defect found and corrected
The US dataset initially contained 1,383 records but had 10 duplicate pairs differing only by punctuation/hyphenation or capitalization:
- pour over / pour-over
- single dose / single-dose
- multi zone / multi-zone
- multi gig / multi-gig (Wi-Fi 7 mesh and router)
- hot swappable / hot-swappable
- 2 bay / 2-bay
- 4 bay / 4-bay
- carry on / carry-on (backpack and packing cubes)

One canonical phrase was retained from each pair. The US file was updated and its summary and 21 cluster counts were recalculated. It initially contained 1,373 phrases after punctuation deduplication, then the semantic pass below removed a further 62 redundant phrases. The current US file contains 1,311 phrases and has zero remaining exact or normalized duplicates under the applied normalization rule.

### Metric and intent safeguards
- US volume, KD, CPC and trend values remain null/unmeasured. No UK metrics were copied into US records.
- UK has 32 saved metric cache records, but only 8 exact phrase matches within this keyword universe; 1,480 phrases remain unmeasured.
- No monthly trend series is available for either market in this checkpoint.
- Intent labels and buyer-intent scores are wording-based classifications, not conversion rates.
- Mapped phrases support existing canonical guides; unmapped phrases are not automatic instructions to create new URLs.
- Keyword variants' search volumes must not be summed unless the source provides distinct, non-overlapping volumes.

## 2. Product candidate QA

| Market | Batch composition | Candidate records | Normalized duplicate names/models | Verified | ASIN verified |
|---|---|---:|---:|---:|---:|
| UK | 44 + 18 across 2 batches | 62 | 0 found | 0 | 0 |
| US | 40 across 1 batch | 40 | 0 found | 0 | 0 |
| **Total** | 3 staged batches | **102** | **0 found within each market** | **0** | **0** |

### Schema corrections
- All 62 UK records lacked a dedicated `model` property. Added `model: null` and `modelIdentityStatus: "unverified"`; model numbers must be captured from exact SKU/manufacturer evidence, not inferred from display titles.
- Added `sourceType` and `sourcePageSpecificity` to UK records to distinguish manufacturer/retailer product pages from category/collection or landing pages.
- Added `modelIdentityStatus: "unverified"` and `sourcePageSpecificity` to all 40 US records.
- Every record has a source URL, but a source URL does not by itself prove exact SKU identity, current stock, retailer availability, or affiliate eligibility.
- All 102 records still have null/missing verified Amazon ASIN and affiliate URL. Do not synthesize ASINs or convert search phrases into direct product links.

### Current product verification blockers
- UK: 62 records remain research candidates. Twenty-three now have exact manufacturer product pages and model names captured (SKU still pending); 39 other UK model names remain unverified. Seven UK manufacturer-page stock caveats are recorded: Arete One 6L/10L/12L/20L low stock; Arete Two 10L and Arete One 25L out-of-stock/pre-order; DD128 only surfaced as a sold-out refurbished outlet listing. Other live stock checks remain open. Exact regional SKU, full specs, Amazon UK ASIN/destination and image rights remain open.
- US: 40 records remain candidates; 14 now have manufacturer model/family evidence (10 model names, 3 family pages and 1 model+SKU record), while 26 remain model-identity unverified. Three product-family pages still need exact variant/SKU resolution. Three Mammotion candidates show sold-out or variant-specific sold-out signals; eight other manufacturer pages show add-to-cart signals, not independent retailer or Amazon stock confirmation.
- Variants, bundles, regional adapters, plug standards, voltage, HVAC compatibility and lawn-area variants must be resolved before records count as distinct market-specific products.
- A product can be promoted only after exact identity, official specification/manual evidence, current regional availability, retailer destination, duplicate-family review, claim-level sourcing, and content/editorial QA pass.

## 3. US wet-dry floor-cleaner page — live evidence update
- Roborock's current US wet-dry collection displays 13 result tiles, but includes combo products and bundles. Do not count the 13 tiles as 13 standalone models.
- The official range surfaces distinct single-machine names including F25 Ultra, F25 ACE Pro, F25 XT, F25 BX, F25 Steam, F25 GT Gen 2, F25 Pro Turbo, F25 ALT and F25 Ultra Steam Gen 2. Exact SKU/manual and independent review checks remain open.
- Tineco US product pages currently mark S9 Artist Pro, S9 Artist Steam and S7 Stretch Ultra unavailable/backordered. Exclude them from live purchase recommendations until availability is rechecked.
- Tineco's S9 Artist Steam specification distinguishes 320°F internal heater output from minimum 210°F outlet steam; never report these as the same temperature.
- Manufacturer Add to Cart controls do not prove Amazon.com availability or ASIN identity.
- Page status remains editorial candidate only. No "best" awards, comparative ranking or publication approval yet.

### Primary evidence links
- [Roborock US wet-dry collection](https://us.roborock.com/collections/wet-dry-vacuums)
- [Roborock US wet-dry range](https://us.roborock.com/pages/wet-dry-vacuums)
- [Roborock F25 series specifications](https://us.roborock.com/pages/roborock-f25-series)
- [Tineco S9 Artist Pro](https://store.tineco.com/products/tineco-floor-one-s9-artist-pro-wet-dry-vacuum-cleaner)
- [Tineco S9 Artist Steam](https://store.tineco.com/collections/all-machine/products/tineco-floor-one-s9-artist-steam-cordless-wet-dry-vacuum-cleaner)
- [Tineco S7 Stretch Ultra](https://store.tineco.com/products/tineco-floor-one-s7-stretch-ultra-cordless-wet-dry-vacuum-cleaner)

## 4. Release and production safety
- All edits are on `research/scale-1000-batch-001`.
- No PR was opened, no merge was performed, and no deployment was triggered.
- No product was imported into `src/data/products.json`.
- No guide was published or indexed as part of this QA work.
- No paid keyword research credits or subscriptions were used.
- The existing production catalogue of 25 guides / 100 products remains untouched.

## 5. Next actions, in priority order
1. Capture exact manufacturer product pages/manuals and normalized SKU fields for UK candidates; resolve regional variants and stock.
2. For US candidates, replace category-only discovery references with exact product pages, capture manuals and recheck the eight stock-flagged products.
3. Verify Amazon UK/US listing identity and direct affiliate destinations only after exact model/market matching.
4. Build a full evidence matrix for the Roborock F25 models and add independent test coverage; defer page publication if fewer than five distinct models meet the gates.
5. Run SERP overlap and canonical mapping for unmapped keyword clusters before creating any new page.
6. Refresh search-volume/KD/CPC/trend metrics only through an approved costed batch; never present generated phrases as measured demand.

**Quality rule:** candidate volume is not verified product inventory, keyword count is not search demand, and manufacturer marketing claims are not independent test results.


## 1A. Second semantic cleanup — redundant budget templates
A second review found 62 additional US phrases that were not punctuation duplicates but were redundant buyer intents. Each phrase used `for budget models`, `for budget systems`, `for budget routers`, `for budget cameras`, `for budget kits` or `for budget sets`, while an equivalent `best budget [product]` phrase already existed in the same topic dataset. All 62 redundant rows were removed; no unique intent was lost because the canonical budget phrase remains. The US file now contains 1,311 phrases: 186 transactional, 1,125 commercial, 786 mapped and 525 unmapped. The combined UK/US universe is 2,799 phrases. Remaining generic long-tail modifiers are flagged for semantic/SERP review and are not automatically considered valid just because they are syntactically unique.


### Source specificity counts
- UK: 34 of 62 records now point to a product page; 28 of 62 still point to a category, collection or landing page.
- US: 37 of 40 records point to an exact product page; 3 of 40 point to product-family pages requiring variant/SKU resolution; no US candidate remains category-only.
- All 102 candidates have a source URL, but **31 records still need more specific source/SKU resolution** before exact SKU verification can be considered complete. This is a source-quality gap, not proof that the products do not exist.


## UK dehumidifier evidence batch — 22 November 2026
- Added exact manufacturer product-page links and model names to 17 of the 23 UK dehumidifier candidates. Seventeen records now carry `modelIdentityStatus: "manufacturer_model_name_confirmed_sku_pending"`; exact SKU and marketplace identity remain pending.
- UK Batch 001 now has 26 product-page sources and 18 category/landing sources; UK Batch 002 has 2 product-page sources and 16 category/landing sources. Combined UK source specificity is 28 product pages / 34 category or landing pages.
- Recorded two explicit availability caveats: MeacoDry Arete Two 10L showed out-of-stock/pre-order on its manufacturer page; EcoAir DD128 was surfaced only through a refurbished outlet page marked sold out. Do not recommend either as currently purchasable without a fresh positive stock check.
- Added `research/product-verification/uk-dehumidifier-product-evidence-2026-11-22.md` with manufacturer claims, technical conditions, and remaining verification gates.
- Across all 102 product candidates, 48 now still need a more specific product-page source (34 UK + 14 US). This is not the same as model verification: exact SKU, availability, independent evidence and Amazon ASIN remain unverified.


## UK dehumidifier exact-page completion — 22 November 2026
- The UK dehumidifier candidate group is now **23/23** with exact manufacturer product pages and populated model names. Exact SKU/retailer identity is still pending for all 23.
- The six final pages added are Meaco Arete One 6L/10L/12L/20L/25L and EcoAir DC14 MK2. Arete One and Arete Two remain separate model families.
- Seven manufacturer stock caveats are recorded: Arete One 6L/10L/12L/20L low stock; Arete Two 10L and Arete One 25L out-of-stock/pre-order; DD128 only surfaced as a sold-out refurbished outlet listing.
- UK source specificity is now 34 product pages / 28 category or landing pages across both UK batches. US remains 26 product pages / 14 category or collection pages. Combined source-page gaps: **42** (28 UK + 14 US).
- UK model-name status: 23 manufacturer-page-confirmed with SKU pending; 39 other UK candidates remain unverified. All 40 US model identities remain unverified.
- Updated evidence report: `research/product-verification/uk-dehumidifier-product-evidence-2026-11-22.md`.


## US exact product-page evidence batch — 22 November 2026
- All 14 US candidates that previously relied on category/collection pages now have an exact product or product-family page.
- Updated US source specificity: **37 exact product pages + 3 product-family pages + 0 category-only sources**. The three family pages are eufyCam S4, Mammotion LUBA 3 AWD and Mammotion LUBA mini 2 AWD; their exact package/capacity variant SKUs remain open.
- Manufacturer model/family identity is now confirmed for 14 US candidates; 26 remain unverified. One Levoit Vital 100S-P model code (LAP-V102S-WUS) was captured from the official page.
- Critical conflicts recorded: eufy SoloCam E50's page conflicts between marketing and technical table on zoom/resolution; Roborock F25 BX page title metadata says F25/F25LT while URL and body say F25 BX. Neither claim should be used until resolved.
- Mammotion LUBA 3 1500, LUBA mini 2 and YUKA mini 2 1000H showed sold-out or variant-specific sold-out signals. Do not recommend until a positive exact-variant stock check.
- Evidence matrix: `research/product-verification/us-product-page-evidence-2026-11-22.md`. No Amazon ASINs or affiliate destinations were inferred or accepted; verified ASIN count remains zero.
- Across the 102 staged candidates, remaining source/variant resolution gaps are **31**: 28 UK category/landing-page records and 3 US family-variant records.
