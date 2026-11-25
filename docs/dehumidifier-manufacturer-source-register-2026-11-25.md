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
