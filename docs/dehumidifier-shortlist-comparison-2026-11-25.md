# Dehumidifier shortlist — condition-matched manufacturer data

**Date checked:** 25 November 2026  
**Status:** Research worksheet only; not an approved public ranking or catalogue import.  
**Tariff basis:** 26.32p/kWh, Ofgem GB average Direct Debit cap, 1 October–31 December 2026.  
**Calculation:** kWh/L = (W ÷ 1,000 × 24) ÷ litres/day; p/L = kWh/L × 26.32p.  
**Interpretation:** Derived from manufacturer-published paired power/extraction figures, assuming continuous operation at that test-point power for 24 hours. This is not a SmartPickHub lab test, household bill prediction, or guaranteed real-home extraction.

## 1. Condition-matched comparison at 10°C / 60% RH and 20°C / 60% RH

| Model | Technology / mode | 10°C extraction | 10°C power | 10°C derived p/L | 20°C extraction | 20°C power | 20°C derived p/L |
|---|---|---:|---:|---:|---:|---:|---:|
| MeacoDry Arete One 20L | Compressor | 3.40 L/day | 180 W | 33.4p | 8.50 L/day | 216 W | 16.1p |
| MeacoDry Arete Two 20L | Compressor | 3.35 L/day | 176 W | 33.2p | 8.50 L/day | 207 W | 15.4p |
| Meaco 20L Low Energy | Compressor | 2.52 L/day | 163 W | 40.9p | 8.48 L/day | 219 W | 16.3p |
| Meaco 12L Low Energy | Compressor | 1.62 L/day | 138 W | 53.8p | 4.92 L/day | 157 W | 20.2p |
| MeacoDry ABC 12L (high fan) | Compressor, high fan | 1.88 L/day | 125 W | 42.0p | 5.18 L/day | 149 W | 18.2p |
| Meaco DD8L Pro (fan 3) | Desiccant, fan 3 | 6.89 L/day | 630 W | 57.8p | 7.97 L/day | 623 W | 49.4p |
| Meaco DD8L Zambezi (fan 3) | Desiccant, fan 3; discontinued | 7.50 L/day | 663 W | 55.8p | 8.30 L/day | 661 W | 50.3p |

## 2. Interpretation — not a winner ranking

- The two 20L Arete generations have very similar derived p/L at the two shared conditions. Arete Two has a slightly lower derived value in this worksheet, but that is not sufficient to declare a universal winner; motor, control logic, fan modes, product generation and test setup differ.
- The 20L Low Energy model performs differently from the Arete models despite a similar nominal capacity. Preserve its exact identity and never merge its rows with Arete One/Two.
- The 12L Low Energy and ABC 12L rows show that nominal capacity labels alone do not establish efficiency. The ABC figures above are specifically the manufacturer's high-fan figures; do not silently compare with a low-fan setting.
- Desiccant fan 3 has substantially higher rated power and derived p/L at these paired conditions, but also higher extraction per day at 10°C/60% than the 20L compressor models. The result is a trade-off between extraction rate, energy per litre, technology and room temperature—not a one-dimensional verdict.
- Zambezi is discontinued. Keep it as a historical benchmark only; Meaco identifies DD8L Pro as its replacement.
- This is not an equivalent laundry-load comparison. A litre of water extracted from room air is not automatically equivalent to a kilogram of dry clothing or a defined drying cycle.

## 3. Evidence and model identity

| Model | Primary source | Data status |
|---|---|---|
| Arete One 20L | https://www.meaco.com/products/meacodry-arete-one-20l-dehumidifier-and-air-purifier | Manufacturer page; 10/20°C at 50/60/80% RH |
| Arete Two 20L | https://www.meaco.com/products/meacodry-arete-two-20l-dual-dehumidifier-hepa-air-purifier | Manufacturer page; 10/20/30°C at 60/80% RH |
| 20L Low Energy | https://www.meaco.com/products/meaco-20l-low-energy-dehumidifier-and-air-purifier | Manufacturer page; 10/20°C at 60/80% RH and 30°C/60% RH; 30°C/80% wattage absent |
| 12L Low Energy | https://www.meaco.com/products/meaco-12l-low-energy-dehumidifier-and-air-purifier | Manufacturer page; 10/20/30°C at 60/80% RH |
| ABC 12L | https://www.meaco.com/products/meacodry-abc-range-12l-dehumidifier | Manufacturer page; 10/20/30°C at 60/80% RH, high/low fan rows |
| DD8L Pro | https://www.meaco.com/products/meaco-dd8l-pro | Manufacturer page; 10/20°C at 60% RH by fan speed |
| DD8L Zambezi | https://www.meaco.com/products/meaco-dd8l-zambezi-dehumidifier | Manufacturer page; 10/20°C at 60% RH by fan speed; discontinued |

## 4. Relationship to the uploaded dataset

Existing model IDs already present in dehumidifier-dataset-v0.1.json:
- meaco-arete-one-20l
- meaco-20l-low-energy
- meaco-dd8l-zambezi
- meaco-dd8l-pro

New model families evidenced in this research but not yet added to the uploaded dataset:
- Proposed ID: meaco-arete-two-20l
- Proposed ID: meaco-12l-low-energy
- Proposed ID: meaco-abc-12l

The existing ecoair-dd1-classic-mk6 record remains retailer-only and is not part of this manufacturer-backed shortlist. Do not replace it with a guessed specification.

## 5. Required before catalogue intake

1. Confirm exact UK retail model number/EAN and selected capacity variant for every proposed product.
2. Confirm current UK sale status/availability; distinguish discontinued benchmarks from purchasable recommendations.
3. Complete missing specification fields from primary manufacturer pages/manuals, especially DD8L Pro tank/noise/drain fields if they are to be displayed.
4. Update the uploaded JSON/CSV only after explicit review of the exact proposed records and their provenance. Do not import the new rows automatically.
5. Check Amazon UK exact listing title, model/EAN, selected variation and ASIN independently. No direct affiliate links are approved by this worksheet.
6. Keep the calculator's running-cost estimator separate from this product data comparison. Do not turn these p/L values into a per-load laundry claim.
7. No production page, catalogue, navigation or affiliate change without explicit owner approval.
