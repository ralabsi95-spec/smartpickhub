# UK Dehumidifier Manufacturer Source Register — 25 November 2026

**Status:** Research only. Not a publication-ready comparison dataset.  
**Baseline files reviewed:** Owner uploads `dehumidifier-dataset-v0.1.json` and `dehumidifier-performance-rows.csv`.  
**Checked:** 25 November 2026.  
**Rule:** Only manufacturer-owned product pages or manufacturer-hosted manuals can establish manufacturer-sourced specifications. A manufacturer's stated maximum extraction condition is not a substitute for a full temperature/RH performance table.

## 1. Existing uploaded dataset — validation

- JSON contains 5 model records and CSV contains 25 performance rows.
- All 5 model IDs in JSON are represented in CSV.
- Recalculation of `kWh/L = (W / 1000 × 24) / L/day` and `p/L = kWh/L × 26.32p` agrees with the uploaded rounded figures. Maximum absolute difference from the displayed pence values is about 0.05p/L.
- The supplied data is explicitly marked research-only. Keep this status.
- Meaco DD8L Zambezi 10°C/60% rows are sourced from a secondary review reproducing Meaco data, not directly from a Meaco-owned page/manual in the uploaded record. Keep these rows flagged secondary until the original table/manual is obtained.
- Meaco DD8L Pro still has missing tank/noise/drain fields in the uploaded record.
- EcoAir DD1 Classic MK6 remains retailer-only/unverified in the uploaded record.

## 2. New manufacturer-source candidates

### PureMate PM-411 — 12L compressor
**Evidence found:** Manufacturer product page and manufacturer-hosted UK manual.
- Model: PM-411.
- Power consumption: 240 W (High Fan).
- Advertised moisture removal: 12 L/24h; the product page/manual text renders the test condition as “300C, RH80%” (typographic/OCR form; do not silently normalise in stored source text).
- Water tank: 2 L.
- Applicable temperature: manual text renders “50C-320C” (typographic/OCR form; confirm against page image if transcribing as 5–32°C).
- Continuous drainage outlet: manual describes a drainage outlet and hose connection.
- **Not enough evidence for a multi-temperature performance row:** no 10°C/20°C capacity-and-wattage matrix was found.
- Product page: https://puremate.co.uk/products/12l-dehumidifier
- Manufacturer manual: https://cdn.shopify.com/s/files/1/0897/7140/9673/files/PM411_12L_Dehumidifier_V8_MANUAL_UK_06-08-2025.pdf?v=1754567171

### PureMate PM-470 — 25L compressor
**Evidence found:** Manufacturer-hosted manual and manufacturer product page.
- Model: PM-470.
- Power consumption: 440 W.
- Maximum extraction: 25 L/day at 30°C/80% RH (manual).
- Water tank: 5.5 L.
- Working temperature: 5–32°C.
- Refrigerant: R290 / 65 g.
- **Not enough evidence for multi-temperature performance rows:** manual supplies only the maximum headline condition, not 10°C/20°C capacity and power.
- Product page: https://puremate.co.uk/products/25l-dehumidifier-with-5-5-litre-tank-capacity-digital-display-continuous-drainage-laundry-drying
- Manufacturer manual: https://puremate.co.uk/wp-content/uploads/2024/11/PM-470-25L-DEHUMIDIFIER-Manual-2.pdf

### Pro Breeze PB-18 / OmniDry 12L
**Evidence found:** Manufacturer product page, manufacturer manual directory and manufacturer-hosted manual.
- Manual model: PB-18.
- Power: 200 W.
- Collection capacity: 12 L/day at 30°C and 80% RH.
- Maximum tank capacity: 2 L.
- Operating range: 5–35°C.
- Manual supports high/low fan, continuous drying mode and humidity-target mode.
- **Not enough evidence for multi-temperature performance rows:** no 10°C/20°C capacity-and-wattage matrix in the manual.
- Product page: https://probreeze.com/products/omnidry-12l-quiet-dehumidifier-with-max-extraction-and-smart-app-control
- Manufacturer manual directory: https://eu.probreeze.com/blogs/news/pro-breeze-dehumidifier-instructions
- Manufacturer-hosted manual: https://cdn.shopify.com/s/files/1/0665/9073/6663/files/PB-18_Instruction_Manual__EU__FINAL_AUG_25_v7.pdf?v=1769171178

### Pro Breeze PB-08 / 20L Max Extraction
**Evidence found:** Manufacturer product page and manufacturer-hosted manual.
- Manual model: PB-08.
- Input power: 420 W.
- Collection capacity: approximately 20 L/day at 30°C/80% RH.
- Maximum tank capacity: 5.5 L.
- Operating range: 5–32°C.
- Manual describes a laundry mode that runs continuously.
- **Not enough evidence for multi-temperature performance rows:** no 10°C/20°C capacity-and-wattage matrix in the manual.
- Product page (current UK listing SKU PB-D-08W-B-UK): https://probreeze.com/products/20l-dehumidifier-with-max-extraction-and-laundry-mode
- Manufacturer manual: https://cdn.shopify.com/s/files/1/0668/4075/6504/files/PB-08_Instruction_Manual__EU__DIGITAL_FEB_23_FINAL_v5-min.pdf?v=1677257685

### Duux Bora 20L — DXDH20
**Evidence found:** Duux-hosted official online manual.
- Product/model: Bora 20 litre, DXDH20.
- Extraction capacity: 20 L/day (manual table lists 20L and 30L versions).
- Water tank: 4 L.
- Noise: up to 42 dBA.
- Operating temperature: 5–32°C (manual operating instructions).
- Compressor type and continuous drainage hose are described in the manual.
- **Critical gap:** the manual's “Input power” field gives 220–240 VAC, 50/60 Hz (supply voltage/frequency), not a wattage value. Do not enter this as W or derive cost per litre.
- **Not enough evidence for multi-temperature performance rows.**
- Official manual: https://manuals.duux.com/Bora/index.html

### De’Longhi Tasciugo AriaDry Multi DEX214RF / DEXD214RF
**Evidence found:** De’Longhi GB product page, support page and manufacturer technical product data.
- Product model: DEX214RF / DEXD214RF (manufacturer pages use both product-family and retail identifiers).
- Moisture removal: 14 L/day at 32°C/80% RH (technical data).
- Input power: 300 W (technical data).
- Compressor; R290 refrigerant.
- Noise: 40 dBA (technical data).
- Airflow: 125 m³/h maximum.
- Continuous drainage facility is listed.
- Product page: https://www.delonghi.com/en-gb/p/tasciugo-ariadry-multi-tasciugo-ariadry-multi-dehumidifier-dex214rf/DEXD214RF.html
- Support/manual page: https://www.delonghi.com/en-gb/s/DEXD214RF
- **Not enough evidence for multi-temperature performance rows:** the verified manufacturer specification is at 32°C/80% RH; no 10°C/20°C matrix was located.

## 3. Ebac — official documents found, insufficient model-level energy data

- Ebac 3000 Series official UK manual: https://ebac.com/content/manuals/ebac_dehumidifier_manual_3000_series.pdf
- Ebac 2000 Series official UK manual: https://ebac.com/content/manuals/ebac_dehumidifier_manual_2000_series.pdf
- The 3000 Series manual states a general real-home extraction range of 1–2.5 L/day once condensation is under control, and an operating temperature range of 3–35°C. It does not provide the wattage and condition-specific capacity table required for a cost-per-litre model comparison.
- The 2000 Series manual refers to 2650e/2850e fuse information and gives historical hourly-cost text, but the retrieved manual did not provide a model-specific wattage and controlled 10°C/20°C extraction matrix. Historical pence-per-hour text must not be reused as a current cost.
- **Disposition:** keep Ebac on the missing-evidence list. Ask for the exact model label and current model manual/specification sheet; do not fill performance rows from reseller listings.

## 4. Dimplex — not verified in this pass

- Searches did not locate a current Dimplex UK dehumidifier product page or a manufacturer-hosted manual with a model-specific power and extraction table.
- The current Glen Dimplex group product pages retrieved in this pass describe its Heating & Ventilation portfolio and do not establish a current domestic Dimplex dehumidifier range.
- **Disposition:** keep Dimplex unverified. Do not use third-party listings as manufacturer evidence. If an exact legacy model is selected, require its original rating plate/manual and confirm whether it is still sold in the UK.

## 5. Important market/data findings

- Pro Breeze itself now publishes a cost-per-litre column in its own running-cost article. Its article says the calculation uses rated power and advertised maximum extraction, which may be measured under different conditions. Therefore “cost per litre” alone is not a defensible uniqueness claim for SmartPickHub.
- The defensible differentiator remains transparent, source-linked performance across several explicitly stated temperature/RH conditions, with clear labels when a model has only one headline condition or no comparable data.
- A model with only a 30°C/80% headline figure can appear in a model-specification directory, but must not be inserted into a 10°C/20°C performance ranking.
- Manufacturer rated input power and advertised extraction maximum are not necessarily a paired measurement at the same test point. Do not derive a pence-per-litre ranking unless both figures are documented at the same condition/mode or are measured together.

Pro Breeze source for its published method: https://probreeze.com/blogs/news/how-much-does-a-dehumidifier-cost-to-run

## 6. Candidate inventory outcome

| Manufacturer | Candidate | Manufacturer source? | Model specs supported? | Multi-temp performance table? | Decision |
|---|---|---:|---:|---:|---|
| PureMate | PM-411 | Yes | Yes, with condition text caveat | No | Add as spec-only candidate |
| PureMate | PM-470 | Yes | Yes | No | Add as spec-only candidate |
| Pro Breeze | PB-18 | Yes | Yes | No | Add as spec-only candidate |
| Pro Breeze | PB-08 | Yes | Yes | No | Add as spec-only candidate |
| Duux | Bora DXDH20 | Yes | Partial; wattage absent | No | Do not calculate cost/L |
| De’Longhi | DEX214RF | Yes | Yes, headline 32°C/80% | No | Add as spec-only candidate |
| Ebac | 3000 / 2000 Series | Yes | Partial | No | Await exact model data |
| Dimplex | Not identified | No usable source found | No | No | Keep unverified |

## 7. Next evidence tasks

1. Obtain Meaco DD8L Zambezi 10°C rows from an original Meaco PDF/manual or official page if available.
2. Retrieve exact wattage and 10°C/20°C extraction curves from manufacturer support for Ebac models; identify exact product model before adding.
3. Search Duux support for a model-specific rating label or specification PDF that states W, then ask Duux for test-condition output if no table exists.
4. Search for any still-current Dimplex-branded domestic dehumidifier model before spending time on legacy models.
5. Only after choosing the candidate shortlist, check exact model/SKU/EAN matches on Amazon UK. Amazon availability must not determine or alter manufacturer specification values.
6. Do not modify the live site or publish this research without explicit owner approval.


## 8. Follow-up verification of the existing Meaco records

The current manufacturer-owned pages were opened and their performance tables checked directly:

- **Meaco 20L Low Energy:** the live manufacturer table confirms 10°C/60% = 2.52 L/day at 163 W; 20°C/60% = 8.48 L/day at 219 W; 30°C/60% = 13.27 L/day at 262 W; 10°C/80% = 5.86 L/day at 165 W; and 20°C/80% = 13.74 L/day at 228 W. The table opened in this check does not show a 30°C/80% row. The 20.38 L/day headline value is therefore not accompanied by a power value in the current table; keep its cost/L blank. Source: https://www.meaco.com/products/meaco-20l-low-energy-dehumidifier-and-air-purifier
- **Meaco DD8L Pro:** the manufacturer page directly confirms the complete 10°C/60% and 20°C/60% rows by fan speed, including 20°C fan 3 = 7.97 L/day at 623 W and 10°C fan 3 = 6.89 L/day at 630 W. The uploaded values are supported. Source: https://www.meaco.com/products/meaco-dd8l-pro
- **Meaco DD8L Zambezi:** the current manufacturer page confirms 20°C/60% extraction of 3.9, 8.0 and 8.3 L/day for fan speeds 1–3, but the page lists a single power-consumption figure of 351 W and does not give separate 656/661 W figures for fan speeds 2/3. It does not show a 10°C/60% performance row. Therefore, do not label the uploaded 656/661 W fan-speed values or the 10°C rows as directly manufacturer-verified on the basis of this page. Keep those figures secondary/pending original-manual confirmation. Source: https://www.meaco.com/products/meaco-dd8l-zambezi-dehumidifier


## 9. Follow-up source reconciliation — Meaco Zambezi and Ebac/Duux (25 November 2026)

### Meaco DD8L Zambezi — official-source discrepancy; retain a qualified status

A fresh search-index result for Meaco's own UK product URL surfaced a six-row extraction table, including the uploaded figures:

| Room condition | Fan speed | Extraction | Wattage |
|---|---:|---:|---:|
| 20°C / 60% RH | 1 | 3.9 L/day | 351 W |
| 20°C / 60% RH | 2 | 8.0 L/day | 656 W |
| 20°C / 60% RH | 3 | 8.3 L/day | 661 W |
| 10°C / 60% RH | 1 | 3.9 L/day | 351 W |
| 10°C / 60% RH | 2 | 6.6 L/day | 656 W |
| 10°C / 60% RH | 3 | 7.5 L/day | 663 W |

However, opening the live Meaco UK page on this check date shows only 20°C/60% extraction by fan speed (3.9 / 8.0 / 8.3 L/day) and a single 351 W power figure; the six-row table is not present in the page text currently served. The linked official 2019 Meaco instruction manual states 45 W fan-only and 350–660 W while dehumidifying, but refers readers to Meaco's website for the detailed condition table rather than reproducing the six rows.

**Decision:** the uploaded 10°C and fan-speed-specific rows have a credible Meaco-origin search-index snapshot and are consistent with the official manual's broad power range, but they are not reproducible from the currently opened live page/manual. Keep them as **manufacturer-origin evidence snapshot / pending direct archival confirmation**, not as fully re-verified live manufacturer data. Do not delete or overwrite the uploaded values; do not promote them to a public ranking until an archived Meaco table or written manufacturer confirmation is obtained. The 20°C/60% extraction values remain directly visible on the current live Meaco page. Sources:
- Current Meaco UK product page: https://www.meaco.com/products/meaco-dd8l-zambezi-dehumidifier
- Official Meaco-hosted/linked 2019 manual: https://cdn.shopify.com/s/files/1/0371/8378/3043/files/Meaco_DD8L_Zambezi_Dehumidifier_instruction_manual_2019_English.pdf?v=1679586458
- Search-indexed official-page result captured in the research record on 25 Nov 2026 (the result exposed all six rows; live page extraction did not).

### Duux Bora DXDH20 — no wattage verified

The Duux-hosted manual explicitly lists “Input power: 220–240 VAC; 50/60 Hz”. This is the mains supply voltage/frequency, not power consumption in watts. It also lists 20 L/day and a 4 L tank, but no wattage or condition-specific performance matrix. Keep the model spec-only and do not estimate W or cost/L from this manual.
Source: https://manuals.duux.com/Bora/index.html

### Ebac — do not promote reseller figures to manufacturer evidence

Searches surfaced conflicting third-party values for older Ebac 2650e/2850e models (including different wattages and extraction conditions). Ebac's own domain/manual endpoint was blocked to the research fetcher in this pass. The manuals retrieved from third-party hosts describe Smart Control, fan settings and general real-home extraction but do not establish a reliable manufacturer-origin 10°C/20°C performance-and-wattage matrix. Keep Ebac outside the evidence-backed comparison pending a directly accessible Ebac technical sheet or written manufacturer confirmation. Do not resolve conflicting seller values by choosing one.


## 10. Initial Amazon UK exact-variant screening — not approved for affiliate linking (25 November 2026)

- A search result for an Amazon UK MeacoDry Arete One listing returned ASIN **B09TBHGQXR**, but the page's actual product title and selected size identify the 10L model. Although the listing page exposes a variation selector that mentions Arete One 20L among other sizes, this parent/selected ASIN is not evidence that the ASIN itself identifies the 20L variant. **Do not use B09TBHGQXR for the 20L record.**
- Exact-model Amazon UK searches in this pass did not return sufficiently verifiable direct product pages for the other target models (Meaco 20L Low Energy, DD8L Pro, DD8L Zambezi, PureMate PM-470, Pro Breeze PB-08/PB-18, and De’Longhi DEXD214RF).
- No Amazon ASIN was added to the dataset and no affiliate link was generated. Search phrases remain discovery links only, not direct product links.
- Before any direct Amazon link is approved, capture the exact listing title, manufacturer/model number or EAN/GTIN, selected size/capacity variation, seller/marketplace, and ASIN from the exact product page. Recheck the selected variation itself rather than relying on a parent listing, title keyword match, or variation menu.


## 11. Authoritative re-check — Meaco Zambezi table is directly present on Meaco's live product page (25 November 2026)

This section supersedes the earlier qualified/pending conclusion in Section 9.

The Meaco UK product page was opened again and its full “Extraction Rate Data” table is directly visible in the page body. It confirms all six rows below, including the previously questioned mode-specific wattages:

| Room condition | Fan speed | Extraction | Wattage | Calculated cost/L at 26.32p/kWh |
|---|---:|---:|---:|---:|
| 20°C / 60% RH | 1 | 3.9 L/day | 351 W | 56.9p |
| 20°C / 60% RH | 2 | 8.0 L/day | 656 W | 51.8p |
| 20°C / 60% RH | 3 | 8.3 L/day | 661 W | 50.3p |
| 10°C / 60% RH | 1 | 3.9 L/day | 351 W | 56.9p |
| 10°C / 60% RH | 2 | 6.6 L/day | 656 W | 62.8p |
| 10°C / 60% RH | 3 | 7.5 L/day | 663 W | 55.8p |

**Evidence status correction:** all six rows are now **directly manufacturer-published on Meaco's live UK product page**, not merely a search-index snapshot or secondary review. The earlier pending-primary-confirmation flag for these rows can be cleared. The 2019 manual's general energy-use text remains contextual, not the source of the six-row table.

**Calculation note:** pence/L is calculated as (W / 1000 × 24 ÷ L/day) × 26.32p. It assumes the listed mode runs continuously at the stated wattage for 24 hours and achieves the stated extraction rate under the same published room condition. It is a derived comparison from manufacturer-rated figures, not a separate SmartPickHub laboratory measurement. Show the method and condition beside any displayed result; do not generalise it to other humidity/temperature conditions.

Primary source: https://www.meaco.com/products/meaco-dd8l-zambezi-dehumidifier (opened page, “Extraction Rate Data” table).

## 12. Duux Bora Smart 20L — corrected official UK specification

This section supersedes the earlier statement that no wattage was available.

The current Duux UK product page identifies:
- Product name: Bora Smart 20L Dehumidifier.
- Product number: **DXDH20UK**.
- EAN: **8716164987492**.
- Dehumidification capacity: 20 L/day.
- Water tank: 4 L.
- Consumption range: **20–260 W**.
- Standby consumption: 0.9 W.
- Minimum operating temperature: **15°C**.
- Noise: 36–42 dB.
- Compressor technology; 40 m² effective space.
- Duux's page states 6p/hour at its highest setting using 27p/kWh at 20°C/60% RH; this is the manufacturer's rounded running-cost claim, not a substitute for a measured extraction/wattage pair.

**Decision:** add DXDH20UK as a manufacturer-verified specification-only candidate. Do not calculate pence/L or include it in a 10°C performance ranking: no condition-specific extraction curve is supplied, and the manufacturer's stated minimum operating temperature is 15°C. Do not confuse this UK product number/EAN with the generic DXDH20/DXDH30 manual family.
Primary source: https://duux.co.uk/product/bora-smart-dehumidifier/

## 13. Ebac — expanded official manual check, still insufficient for performance ranking

Additional official Ebac-hosted documents were located:
- 2000 Series manual: https://ebac.com/content/manuals/ebac_dehumidifier_manual_2000_series.pdf
- 3000 Series manual: https://ebac.com/content/manuals/ebac_dehumidifier_manual_3000_series.pdf
- 4000 Series manual: https://ebac.com/content/manuals/ebac_dehumidifier_manual_4000_series.pdf
- Ebac 15 manual: https://ebac.com/content/manuals/ebac_dehumidifier_manual_ebac15.pdf

These establish operating instructions, broad real-home extraction guidance and some temperature/behaviour details, but the retrieved text does not provide the exact model-specific wattage plus condition-by-condition extraction table needed for a comparable pence/L result. The 2000 Series manual mentions 2650e/2850e fuse information, not rated operating watts. Keep Ebac outside the evidence-backed ranking pending an exact-model technical sheet or written manufacturer confirmation.


## 14. Expanded manufacturer-backed comparison pool — seven models with paired multi-condition data

The following seven candidates now have Meaco UK product pages with condition-specific water-removal and power data. The tables generally provide both 10°C and 20°C at 60% RH; most also provide 80% RH rows. This is a research pool, not a final recommendation/ranking, and several products may be legacy/low-stock or have distinct variants.

| Exact model family | Evidence coverage | Source / notes |
|---|---|---|
| MeacoDry Arete One 20L | 10°C and 20°C at 50%, 60%, 80% RH | Official Meaco product page; AC motor; product page also notes Arete One 20L and Two 20L are distinct variants |
| MeacoDry Arete Two 20L | 10°C, 20°C, 30°C at 60% and 80% RH | Official Meaco UK product page; DC motor; 4.8L tank |
| Meaco 20L Low Energy | 10°C/20°C at 60% and 80% RH; 30°C/60% RH | Official Meaco UK product page; no 30°C/80% wattage row on the current table |
| Meaco 12L Low Energy | 10°C, 20°C, 30°C at 60% and 80% RH | Official Meaco UK product page; 157W rated page power; 2.5L tank |
| MeacoDry ABC 12L | 10°C, 20°C, 30°C at 60% and 80% RH; high/low fan outputs | Official Meaco UK product page; retain the fan mode with each row |
| Meaco DD8L Pro | 10°C and 20°C at 60% RH, fan speeds 1–3 | Official Meaco UK product page; desiccant; 2L tank; 1–35°C operating range |
| Meaco DD8L Zambezi | 10°C and 20°C at 60% RH, fan speeds 1–3 | Official Meaco UK product page; desiccant; historical/now discontinued product—Meaco states DD8L Pro is its replacement |

Primary manufacturer pages:
- Arete One 20L: https://www.meaco.com/products/meacodry-arete-one-20l-dehumidifier-and-air-purifier
- Arete Two 20L: https://www.meaco.com/products/meacodry-arete-two-20l-dual-dehumidifier-hepa-air-purifier
- 20L Low Energy: https://www.meaco.com/products/meaco-20l-low-energy-dehumidifier-and-air-purifier
- 12L Low Energy: https://www.meaco.com/products/meaco-12l-low-energy-dehumidifier-and-air-purifier
- ABC 12L: https://www.meaco.com/products/meacodry-abc-range-12l-dehumidifier
- DD8L Pro: https://www.meaco.com/products/meaco-dd8l-pro
- DD8L Zambezi: https://www.meaco.com/products/meaco-dd8l-zambezi-dehumidifier

### Shortlist guardrails

1. The seven models can form the first manufacturer-data pool, but do not rank by nominal “12L/20L” headline capacity. Compare the exact same room condition (e.g. 10°C/60% RH) and disclose compressor/desiccant type.
2. For multi-speed desiccant models, keep each fan-speed row separate; never mix extraction at one fan speed with wattage from another.
3. Arete One and Arete Two are separate generations and must never share a product identifier or listing.
4. The Arete One 20L page is a direct Meaco source. Do not substitute a distributor-hosted PDF if the direct product page is available.
5. Keep the Zambezi as a useful legacy benchmark, not a current-buy recommendation: Meaco's own product/legacy page says it is no longer available and names DD8L Pro as its replacement.
6. The Meaco 20L Low Energy page's 30°C/80% headline value has no paired wattage in the current table; leave cost/L blank for that condition.
7. No model should enter the live product catalogue until exact UK retail model/EAN/variant and stock/listing identity are checked separately. Manufacturer evidence and Amazon listing identity are separate validation gates.


## 15. EcoAir DD1 Classic MK6 — manufacturer specifications now verified; performance pairing still incomplete

This section supersedes the original Section 1 statement that EcoAir DD1 Classic was retailer-only/unverified for all specifications.

The current EcoAir UK manufacturer product page directly identifies DD1 Classic MK6 and confirms:
- Desiccant dehumidifier; up to 7.5 L/day at 20°C / 60% RH.
- E7 control changes between full power, economy and standby based on humidity.
- Rated power consumption by operating state: 25W sampling, 300W low mode, 580W high mode.
- Operating temperature: 1–40°C.
- Water tank: 2 L; noise 34/46 dB(A); continuous drain hose included; 3-year warranty stated on the current page.
- Current manufacturer page shows the product for sale.

**Important evidence limit:** the page lists the 7.5 L/day capacity and the 300W/580W modes as separate specification bullets; it does not explicitly state which power mode was used to achieve the 7.5 L/day result. Therefore:
- Upgrade the model's basic specification evidence to manufacturer-verified.
- Do not assume 580W pairs with 7.5 L/day for a cost/L ranking.
- Do not create a multi-condition performance curve; no 10°C/20°C wattage/extraction matrix is published on the page.
- Retain the uploaded 580W “assumed high mode” note as an assumption, not a confirmed paired test value. If used in an illustrative calculation, keep it outside manufacturer-verified rankings and label the assumption conspicuously.

Primary source: https://ecoair.org/products/dd1-classic

## 16. Additional EcoAir and Pro Breeze spec-only candidates

### EcoAir DD1 Simple MK3
EcoAir's UK product page confirms 7.5 L/day at 20°C/60% RH, 300W low mode, 580W high mode, operating range 1–35°C and 2L tank. As with DD1 Classic, the manufacturer page does not explicitly pair a particular wattage mode with the 7.5 L/day figure. Do not calculate a verified cost/L.
Primary source: https://ecoair.org/products/dd1-simple

### Pro Breeze model-code mapping
The current Pro Breeze support page is useful for avoiding model/variant mix-ups. It maps:
- OmniDry 12L Quiet: PB-18 / PB-D-18.
- OmniDry 20L with app: PB-D-24-WF.
- OmniDry 20L without app: PB-D-24W-EU.
- 20L Max Extraction with Laundry Mode: PB-08.
- 20L Premium One-Click Laundry: PB-D-23.
- OmniDry 10L: PB-D-40W.
The page explicitly instructs customers to match the full rating-label code, including regional suffixes, before using a manual. It does not provide condition-specific extraction/wattage curves. Keep these as identity/specification research candidates, not cost/L ranking records.
Primary support source: https://eu.probreeze.com/en-fr/blogs/news/pro-breeze-dehumidifier-instructions

### Pro Breeze PB-D-40W / OmniDry 10L
A manufacturer-hosted manual linked by the Pro Breeze support page is required for exact regional variant confirmation. A third-party-hosted manual search result reports 160W rated input at 27°C/60% RH and 185W maximum input at 30°C/80% RH, but until the official linked manual is opened and its matching model code verified, treat these wattages as provisional manual-derived data, not yet a fully verified manufacturer-source row.
