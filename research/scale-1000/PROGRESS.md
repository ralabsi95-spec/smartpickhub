# SmartPickHub — 1,000 Product Programme

**Updated:** 22 November 2026 14:04 UTC  
**Primary market:** UK; US is a separately verified secondary market.  
**Production catalogue:** 25 guides / 100 existing products. These are preserved and must never be re-imported.  
**Target:** 1,000 unique, evidence-backed product records; 900 net-new records required.

## Current execution checkpoint

| Measure | Count | Meaning |
|---|---:|---|
| Existing live catalogue | 100 | Already present; excluded from new intake |
| New staged candidates | 62 | Research queue only; not verified/publishable |
| Verified new products | 0 | No candidate in this first batch has passed all identity, regional, evidence and affiliate checks |
| Remaining to target | 900 | Net-new product records still required after verification |

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
7. Never treat candidate count as progress toward the 1,000 verified-product target.

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
