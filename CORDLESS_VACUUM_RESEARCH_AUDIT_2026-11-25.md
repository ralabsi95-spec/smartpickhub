# Cordless Vacuum Cleaners — Evidence Checkpoint (25 November 2026)

**Scope:** Research-only continuation of the existing guide `cordless-vacuum-cleaners-us-uk`. This checkpoint does not approve a product, replace a catalogue record, change an affiliate URL, edit a public page, or authorise publication.

## Baseline and guardrails
- The four current records in `src/data/products.json` are Dyson V15 Detect, Shark Stratos (UK IZ400UKT / US IZ862H), Samsung Bespoke Jet AI (UK VS28C9784QK/EU / US VS28C9762UK/AA), and Miele Triflex HX2 (UK material 11819170 / US material 11827000).
- The four new candidates remain candidates only: Dyson V16 Piston Animal, Shark PowerDetect IP1251UK, Bosch Unlimited 10 ProPower BCS1051GB, Hoover HF3 Pet HF310P 001.
- Preserve regional model boundaries. Do not equate W and AW. Runtime comparisons must state the tool, mode, and configuration. Do not treat retailer search pages as direct product offers.
- Amazon US direct page access was blocked in the research environment. Amazon UK direct page access also returned a 503 for the clicked Shark listing. Marketplace observations below are leads, not direct-page verification.

## New manufacturer evidence
- Dyson V16 UK: official Dyson page lists 315 AW, up to 70 min, 3.4 kg, 1.3 L bin and 4.5 h charge; Dyson UK showed £549.99 and in stock at retrieval. Source: https://www.dyson.co.uk/vacuum-cleaners/cordless/v16-piston-animal/black-copper
- Dyson V16 US: Dyson US product page exists, but the page's stock status is inconsistent across crawled variants; one current result explicitly says out of stock at $849.99. Do not assume US availability. Source: https://www.dyson.com/vacuum-cleaners/cordless/v16-piston/black-copper
- Shark PowerDetect UK IP1251UK: official SharkNinja page lists up to 70 min in ECO without a motorised tool, 3.71 kg, 0.38 L, and £299.99 at retrieval. Source: https://www.sharkninja.co.uk/shark-powerdetect-cordless-vacuum/IP1251UK.html
- Shark PowerDetect US IP1251 is a distinct US market model record (not UK IP1251UK); Shark US currently lists it at $329.99. Source: https://www.sharkninja.com/vacuums-air-care/vacuum-cleaners/cordless-vacuums
- Bosch Unlimited 10 ProPower BCS1051GB: official Bosch UK product page showed £629.99 and in stock; 100 min maximum runtime, one exchangeable battery pack, 71 min charge, 0.4 L bin and a displayed ready-for-operation weight of 3.8 kg. Sources: https://www.bosch-home.com/gb/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB and https://media3.bosch-home.com/Documents/specsheet/en-GB/BCS1051GB.pdf
- Bosch weight is unresolved: the BCS1051GB product page states 3.8 kg measured ready for operation, while its support page states 2.9 kg ready for use with tube and floor nozzle and also shows 5.3 kg net weight elsewhere. Do not select one figure until Bosch explains the measurement basis. Source: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01
- Hoover HF3 Pet HF310P 001: official Hoover page confirms 150 AW in Turbo handheld configuration; up to 60 min ECO handheld; 30 min Standard with floor nozzle; 15 min Turbo; 0.7 L bin; net weight 3.391 kg; 4 h charge. Hoover UK page showed £169.99. Sources: https://www.hoover-home.com/en_GB/products/39401111-hf310p-001 and https://www.hoover-home.com/en_GB/products/39401111-hf310p-001?_fid=085b101a3&_pos=12&_ss=c

## Marketplace verification leads — not approved links
- Existing Shark Stratos UK: reject ASIN B0B42KZTH2. Amazon's indexed page title/model number says IZ400UK while the product name field says IZ400UKT; page showed no featured offer. A separate exact IZ400UKT candidate ASIN B0B42QJL5B was exposed by the Which? retailer link; Which? showed Amazon at £269.99, but the direct Amazon click returned HTTP 503. Keep B0B42QJL5B as a verification lead only, not an approved direct link.
- Existing Shark Stratos US IZ862H: third-party price trackers identify ASIN B0B5JMNGNQ and a $439.99 Amazon observation on 19 Nov 2026; direct Amazon verification not completed. A renewed listing B0BW51TNGC is not the new product and must not be substituted.
- Existing Dyson V15 US: third-party deal records identify ASIN B0979R48CX and a $649.99 Amazon observation dated 11 Nov 2026; direct Amazon verification not completed.
- Existing Samsung US VS28C9762UK/AA: do not substitute ASIN B0CCJZDR9M; indexed product data associates that ASIN with different model VS28C9760UG/AA. Exact VS28C9762UK/AA Amazon offer remains unverified.
- Existing Miele US 11827000: a price tracker reported $619.19 at Amazon on 17 Nov; direct listing/offer and seller not verified.
- Shark PowerDetect UK: Amazon price trackers report about £299 for IP1251UK. An Amazon ASIN B0DD4H3M7N was found for IP1251UKT, a different bundle suffix, with a £279 offer checked 18 Nov that was stated to end 21 Nov; do not use it as a direct listing for base IP1251UK.
- Hoover HF3 UK: a deal tracker reported £159 on Amazon on 22 Nov for HF3 Pet [HF310P], but the exact HF310P 001 / EAN 8059019115542 match and current live offer still need confirmation.
- No exact Amazon UK offer was confirmed in this pass for Dyson V16, Bosch BCS1051GB, Samsung UK VS28C9784QK/EU, or Miele UK 11819170.
- No exact Amazon US offer was directly verified in this pass for all eight records. Search results and third-party price trackers are leads only.

## Market-parity conclusion
The four proposed alternatives are not yet a valid four-product dual-market shortlist. Dyson V16 and Shark PowerDetect have identifiable US market counterparts, but US stock/listing verification remains open. Bosch BCS1051GB and Hoover HF310P 001 are UK-specific records in this audit; no exact US counterparts were established. Do not force UK model codes into US Amazon links or claim parity without separate US model evidence.

## Decisions
- No product retained/replaced/removed yet.
- No ASIN or Amazon link approved in this checkpoint.
- No product data, public page, affiliate ID, template, sitemap, robots, production deployment or Cloudflare setting changed.
- This document is a research checkpoint only. Final decision remains blocked on exact Amazon listing verification in both markets, Bosch weight clarification, Shark IZ862H official-source closure, and US alternatives for the UK-only Bosch/Hoover candidates.
