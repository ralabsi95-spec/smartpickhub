# US Product Discovery — Exact Manufacturer Page Evidence Batch
**Date:** 22 November 2026  
**Branch:** `research/scale-1000-batch-001`  
**Scope:** 14 US candidates upgraded from category/collection discovery pages to exact product or product-family pages.  
**Status:** Source specificity improved; no Amazon ASIN/affiliate URL verified; no product approved for live catalogue.

## Executive result
- 14/14 previously category-sourced US candidates now have a dedicated manufacturer product or product-family page.
- 11 records now point to exact product pages; 3 point to model-family pages where bundle/capacity variants still require SKU resolution.
- Four manufacturer-source conflicts/caveats must be resolved before editorial use: SoloCam E50's zoom/resolution conflict, F25 BX page-title metadata mismatch, eufyCam S4 kit variants, and Mammotion capacity/variant stock.
- Three Mammotion products currently show sold-out or variant-specific sold-out signals.
- Product-page presence is not Amazon ASIN verification. The verified Amazon ASIN count remains zero.

## Evidence matrix

| Candidate | Exact US manufacturer page | Evidence captured | Identity / availability gate |
|---|---|---|---|
| eufy SoloCam E50 (S340 Next-Gen) | https://us.eufy.com/products/t81801w0 | Product page identifies SoloCam E50; built-in 8GB eMMC and no monthly fee are listed. | **Hold technical claims:** page hero says 12× hybrid zoom and two 4K lenses, but technical table says 8× zoom and 3K wide-angle + 2K telephoto. Resolve before using zoom/resolution. |
| eufyCam E52 Solo | https://us.eufy.com/products/t81741w0 | Dual-lens 2K wide-angle + 4K PTZ; 5W solar; 32GB built-in storage expandable by microSD; standalone operation without HomeBase; IP65; no monthly fee. | Model page found; verify exact hardware revision, manual, bundle contents and stock. |
| eufyCam S4 | https://us.eufy.com/products/e81741w3 | Official product-family page confirms the S4 model. | Family page offers single-camera and multiple kit/bundle configurations. Keep one model-family record; verify exact package/SKU before comparison. |
| Video Doorbell S4 (Wired) with Chime 2 | https://us.eufy.com/products/e82151f2 | 3K/9MP; 180°×180° panoramic view; 24/7 recording; 4GB eMMC expandable up to 1TB; dual-band Wi-Fi; wired power. | Exact model page. Wired-only; check transformer voltage/VA and HomeBase/HomeKit feature limitations. |
| Levoit Eleva 300X | https://levoit.com/collections/air-purifiers/products/levoit-eleva-300-smart-air-purifier | CADR 161 CFM; 250 ft² at 4.8 ACH / 1,200 ft² at 1 ACH; 20–50dB; under 25.5W; 2-year warranty; separate HEPA and carbon filters. | Exact page and US manual link. Manufacturer claim of 99.97% at 0.3 microns; attribute it and do not generalize beyond stated test. |
| Levoit Vital Pet Pro | https://levoit.com/collections/air-purifiers/products/levoit-vital-pet-pro | 39W; 229 ft² at 4.8 ACH / 1,100 ft² at 1 ACH; 21–53dB; 7.1kg; 2-year warranty; auto-clean pre-filter for pet hair. | Exact page. Capture filter replacement interval/cost and manual; independent performance testing still required. |
| Levoit Vital 100S-P | https://levoit.com/collections/air-purifiers/products/vital-100s-p-smart-air-purifier | Exact model code LAP-V102S-WUS; CADR 143 CFM; 222 ft² at 4.8 ACH / 1,066 ft² at 1 ACH; 23–52dB; 35W; 8.6lb; 2-year warranty. | Model code and US manual link captured. Replacement filters and current retailer identity still need checking. |
| Roborock F25 Steam | https://us.roborock.com/products/roborock-f25-steam-wet-dry-vacuum-with-steam-and-high-temperature-cleaning | 356°F internal-heater steam claim; 25,000Pa claimed suction; up to 80-minute runtime; 180° lay-flat; steam self-cleaning and hot-air drying; manual link. | Exact model page. Verify runtime by mode and distinguish internal heater output from delivered steam temperature. |
| Roborock F25 Ultra | https://us.roborock.com/products/roborock-f25-ultra | 22,000Pa claimed suction; 356°F internal-heater steam; 187°F high-temperature cleaning; 194°F self-cleaning; 203°F hot-air drying; auto detergent; 180° lay-flat. | Exact model page; one-year manufacturer warranty shown. Do not confuse with F25 Ultra Steam Gen 2. |
| Roborock F25 XT | https://us.roborock.com/products/roborock-f25-xt-wet-and-dry-vacuum-cleaner | 20,000Pa claimed suction; JawScrapers; DirTect sensor; FlatReach 2.0; SlideTech 2.0; auto detergent; high-temperature self-washing/drying. | Exact model page; full runtime/tank/manual comparison still required. |
| Roborock F25 BX | https://us.roborock.com/products/roborock-f25-bx-wet-and-dry-vacuum-cleaner | Product body and URL identify F25 BX; one-stroke wet/dry cleaning, FlatReach and JawScrapers. | **Metadata mismatch:** browser page title says “F25 & F25LT” while URL/body say F25 BX. Confirm SKU/manual mapping before using specs. |
| Mammotion LUBA 3 AWD | https://us.mammotion.com/products/luba-3-awd-robot-lawn-mower | 360° LiDAR + NetRTK + dual-camera AI; AWD and up to 80% slope claim; up to 15Ah battery and 215-minute runtime claim. | Product-family page has 1500/3000/5000 area variants. 1500 variant showed out of stock; verify each capacity SKU. Do not count variants as separate products by default. |
| Mammotion LUBA mini 2 AWD | https://us.mammotion.com/products/luba-mini-2-awd-robot-lawn-mower?variant=51222244819242 | 360° LiDAR + dual-camera AI; AWD up to 80% slopes; 4.7-inch edge-cutting disc; 6.1Ah battery claim. | Product-family page has 1500/1500H variants and sold-out signal. Verify selected variant and SKU. |
| Mammotion YUKA mini 2 1000H | https://us.mammotion.com/products/yuka-mini-2-1000h-robot-lawn-mower | 0.25-acre claim; 360° LiDAR; dual-camera AI; 6.1Ah battery; 45% slope claim. | Exact 1000H page explicitly showed sold out; exclude from current purchasable recommendations until restocked. |

## Critical QA findings
1. **Do not treat bundles as independent models.** eufyCam S4 kits and HomeBase bundles are package options; the core camera family is one model candidate.
2. **Do not treat Mammotion capacity variants as separate products by default.** Exact variant SKUs and lawn-area capacity are options within the family unless a distinct buyer task justifies separate editorial treatment.
3. **Resolve conflicting manufacturer claims.** SoloCam E50's page contains conflicting zoom/resolution descriptions; F25 BX's page metadata title conflicts with its URL/body.
4. **Availability is regional and variant-specific.** LUBA 3 1500, LUBA mini 2 and YUKA mini 2 1000H showed sold-out signals. Other variants need independent checks.
5. **Do not turn manufacturer Add to Cart into an Amazon stock claim.** Amazon ASIN and affiliate destination remain unverified for all 14.
6. **No hands-on claims.** All performance details above are manufacturer-published specifications/claims; independent testing is still required before awards or rankings.

## Updated US source coverage
- US staged candidates: 40 total.
- Exact product pages: 37.
- Product-family pages requiring variant/SKU resolution: 3 (eufyCam S4, LUBA 3 AWD, LUBA mini 2 AWD).
- Category/collection-only sources remaining in this US batch: 0.
- Model names/families confirmed from manufacturer pages: 14; model identity still unverified for 26.
- Amazon ASIN/affiliate destinations verified: 0.

## Next actions
- Resolve the SoloCam E50 spec conflict and F25 BX metadata/model mapping.
- Capture exact manuals for all 14 candidates and normalize warranty, power, storage, runtime, filter/consumable, compatibility and service fields.
- Resolve exact variant SKUs and stock for eufyCam S4 and Mammotion model families.
- Recheck retailer availability on at least two US retailers for shortlisted models.
- Verify Amazon.com listing identity and ASIN only after exact model/package match. No guessed ASINs or search-result links.
- Keep products out of the live catalogue until identity, availability, evidence, duplicate and editorial gates pass.

**Outcome:** all 14 category-sourced US candidates now have product/family pages; no candidate has been promoted to verified or publishable.
