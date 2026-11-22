# UK Amazon Product Identity Check — Initial Batch
**Date:** 22 November 2026  
**Branch:** `research/scale-1000-batch-001`  
**Scope:** Initial exact-model Amazon UK checks following manufacturer/retailer identity verification.  
**Status:** No candidate promoted to an Amazon-verified affiliate product in this pass.

## Results

| Candidate / model | Marketplace evidence | Decision |
|---|---|---|
| Lakeland Dry:Soon Deluxe 3-Tier Heated Airer (Lakeland model 24909) | Amazon UK bundle page ASIN **B0HFNS4W5G** is a two-item bundle containing the airer and cover. Its own description identifies the airer-only component as **B016Q6NOCC** and the separate cover as **B01HTGQMTA**. | **Do not assign B0HFNS4W5G as the airer-only ASIN.** B016Q6NOCC is an ASIN reference inside the bundle listing, but the direct airer-only listing was not independently fetched/confirmed in this pass. Candidate stays Amazon-unverified; no affiliate URL created. |
| MeacoDry Arete Two 20L | Official Meaco UK product page identifies model and manufacturer SKU **180-1**, with current Meaco store lead-time signal. Exact Amazon UK listing was not established by the searches in this pass. | Manufacturer SKU is not an Amazon ASIN. No affiliate link. |
| MeacoDry Arete One 20L | Official Meaco UK product page identifies manufacturer SKU **179-1-1**. Exact Amazon UK listing was not established by the searches in this pass. | No Amazon ASIN or affiliate link. |
| Meaco DD8L Pro | Official Meaco UK product page identifies SKU **DD8LPro** and showed available on back-order. Exact Amazon UK listing was not established by the searches in this pass. | Back-order is not in-stock; no Amazon ASIN or affiliate link. |
| EcoAir DD3 Slimline | No exact Amazon UK product identity result established in this pass. | Remains unverified. |
| Blueair Blue Max 3350i | No exact Amazon UK product identity result established in this pass. | Remains unverified. |

## Critical distinctions
- A manufacturer SKU, model number, Amazon ASIN and affiliate URL are four different identifiers.
- A bundle ASIN must not be reused for a bare product or another pack configuration.
- An ASIN mentioned inside a bundle's product description is a lead, not sufficient standalone listing verification until the corresponding Amazon detail page is independently checked for exact model, condition, pack contents and regional marketplace.
- Amazon price, stock, rating and review count are not recorded unless the exact Amazon listing is verified at the time of capture.
- No Amazon Associates URL has been generated in this pass. When an exact ASIN is validated, the UK affiliate destination must use the approved tracking ID `smartpickhubu-21`.

## Outcome
- Direct Amazon ASINs approved for candidate records: **0**.
- Bundle-only ASIN identified but not assigned to a single-product candidate: **B0HFNS4W5G** (Dry:Soon Deluxe + cover bundle).
- Underlying airer-only and cover ASINs mentioned by the bundle listing: **B016Q6NOCC** and **B01HTGQMTA** respectively; both remain leads pending direct listing verification.
- No product has passed the full Amazon identity, availability, editorial and compliance gates.
