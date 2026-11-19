# Espresso Pilot — Image Rights and Amazon UK Destination Audit

**Date:** 2026-11-18  
**Status:** Research record only — no image or affiliate destination approved  
**Guide:** `espresso-coffee-machines-us-uk`

## 1. Wikimedia Commons image search

Model-specific searches were performed for:
- Sage Bambino Plus SES500
- Sage Barista Express SES870
- Sage Barista Pro SES878
- Sage Oracle Jet SES985

The returned Commons results were generic coffee-machine scenes, café/barista photographs, or internal machine-component photographs. No result was shown to depict one of the four exact Sage models or UK variants.

Representative result pages returned by search:
- https://commons.wikimedia.org/wiki/File:Coffee_machine_and_tables.jpg
- https://commons.wikimedia.org/wiki/File:Inside_of_coffee_machine_03.jpg
- https://commons.wikimedia.org/wiki/File:Making_coffee_with_a_coffee_machine_in_a_kitchen.jpg
- https://commons.wikimedia.org/wiki/File:Close-up_of_espresso_machine_with_two_brown_coffee_cups.jpg
- https://commons.wikimedia.org/wiki/File:Espresso_coffee_machine_in_a_cafe_closeup.jpg

**Decision:** none of these results is approved as a product photograph for the four Sage models. Since exact-model matches were not found, file-level licence inspection was not treated as sufficient to make them suitable. A generic café photograph could only be considered separately as an editorial/context image, never as the image of a named product, and would still require its own licence and attribution review.

No Commons image was downloaded, imported, or approved. Do not copy Sage product-page images or Open Graph images without documented reuse permission. Keep all four product image slots in the existing pending/placeholder state. If desired later, commission/create original illustrations and label them clearly as illustrations, not product photos.

## 2. Amazon UK destination re-check

Amazon UK pages and search results were re-checked on 2026-11-18. A page fetch is a point-in-time observation and may vary by postcode, seller and offer status.

| Guide product | Candidate | Exact identity evidence observed | Offer / delivery observation | Decision |
|---|---|---|---|---|
| Bambino Plus SES500 | B07GB2JVD7 | Amazon title identifies Bambino Plus; canonical URL identifies SES500BSS | No featured offers; page said item cannot be dispatched to selected delivery location | Not approved |
| Bambino Plus SES500 (Black Truffle) | B07Q2LS4XK | Canonical URL identifies SES500BTR4GUK1 | No featured offers; page said item cannot be dispatched to selected delivery location | Not approved |
| Barista Express SES870 | B0FQNYG8CV | Amazon title identifies Barista Express and integrated grinder | No featured offers; page said item cannot be dispatched to selected delivery location | Not approved |
| Barista Express SES870 | B00CI32S9I | Canonical URL identifies BES870UK | Currently unavailable; no featured offers; delivery restriction shown | Not approved |
| Barista Pro SES878 | B07PY42BRC | Amazon title and page content identify SES878 | Currently unavailable; no featured offers | Not approved |
| Barista Pro SES878 | B07NPDSPKV | Canonical URL identifies SES878BSS; title identifies Barista Pro | No featured offers; page said item cannot be dispatched to selected delivery location | Not approved |
| Barista Pro SES878 (Matte Black) | B07PWXN3RG | Title identifies SES878 and Matte Black | Currently unavailable; no featured offers | Not approved |
| Oracle Jet SES985 | B0GS2K6WQC | Canonical/title identify Oracle Jet SES985 | Amazon Renewed; currently unavailable; no featured offers | Exclude as a new-product destination |

Search did not surface a verifiable currently buyable new UK Oracle Jet listing. Results for Oracle Jet also included replacement parts and accessories; these are not product destinations.

### Affiliate decision

- **No direct ASIN is approved for insertion** into `src/data/products.json`.
- Keep the existing Amazon UK marketplace search links, clearly understood as search destinations rather than verified listings.
- Do not publish prices, ratings, stock, seller claims or delivery promises from this research pass.
- Re-check exact model, colour/package, condition = new, active offer, seller and UK delivery at the time of any future link approval.
- UK tracking ID remains `smartpickhubu-21`; no affiliate helper or product data was changed.

## 3. Release/readiness status

| Gate | Status |
|---|---|
| Exact-model product photos | Not found in this Commons search |
| Commercial image rights | No image approved |
| Amazon direct listings | No candidate approved |
| Amazon search destinations | Existing search-link approach retained |
| Guide copy | Draft approved for editorial direction; not transferred to site |
| Publication / indexing | Not authorised; not changed |

**Next step:** keep image placeholders and search links. Continue with another guide-readiness task only after the owner confirms the intended next priority. No production, catalogue, page, image, Cloudflare, DNS, or indexing changes are authorised by this audit.
