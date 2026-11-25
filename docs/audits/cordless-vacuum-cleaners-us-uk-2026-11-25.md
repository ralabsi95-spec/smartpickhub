# Page Audit — Cordless Vacuum Cleaners (UK-first / US secondary)

**Audit started:** 25 November 2026  
**Page slug:** `cordless-vacuum-cleaners-us-uk`  
**Production URL:** https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/  
**Catalogue source:** `src/data/products.json`, `main` commit `c2fb4419e8a40e010f4307e901e11b4112e5f09c`, blob `075ce71d57b2ee21fdecd4f1c82036819ba55937`  
**Status:** IN_PROGRESS — not quality-certified, no production changes.

## 1. Reusable prior evidence

The 18 Nov 2026 `docs/25_GUIDE_100_PRODUCT_AUDIT_2026-11-18.md` and the 19 Nov 2026 `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md` already record:
- Guide #11 has four structurally complete product records.
- Miele Triflex HX2 UK material number 11819170 and US 11827000 are separate records/variants; UK source data includes runtime by configuration.
- Shark Stratos US IZ862H and UK IZ400UK are different regional models/configurations.
- Dyson and Samsung exact regional model codes/runtime/bundle checks remain required.
- The 19 Nov editorial preflight records owner approval for all 25 guides, while explicitly stating it did not live-verify every manufacturer claim, retailer listing, stock, price or image right. Its guide #11 product notes are reused below.
- `EXISTING_25_GUIDES_INTENT_MAP.md` already assigns this canonical page the provisional UK query “best cordless vacuum cleaner” and its supporting buyer intents. This is reused rather than regenerated.
- The previous audits are structural/editorial preflight baselines, not proof of current retailer availability or exact Amazon listings.

These findings are reused. No structural re-sweep of the 4 records was repeated.

## 2. Keyword opportunity and intent

Saved OpenSEO UK-default project keyword snapshot (retrieved 25 Nov 2026 from the saved-keyword library; underlying metric collection date is not exposed, so freshness is **UNKNOWN/CACHED**):

| Keyword | Saved volume | KD | CPC | Saved intent |
|---|---:|---:|---:|---|
| best cordless vacuum cleaner | 27,100 | 8 | 2.50 | commercial |
| best cordless vacuum | 12,100 | 3 | 1.92 | commercial |
| cordless vacuum cleaner | 22,200 | 18 | 1.86 | transactional |

Interpretation:
- Strong buyer/commercial intent is supported by the saved intent labels and “best” modifier.
- The broad head terms cover different intent nuances; do not force every term into headings.
- Use `best cordless vacuum cleaner` as the initial primary target candidate, with `best cordless vacuum` and `cordless vacuum cleaner` as secondary candidates, pending refreshed metrics and exact SERP mapping.
- No new keyword volume/KD/CPC research was purchased. Last-known OpenSEO balance in the project handoff was 28 credits; keyword-metric refresh/paid SERP calls were not made without approval.
- No keyword was added to rank tracking or saved-keyword tags.

## 3. Dated SERP / competitor observations — 25 Nov 2026

Current public search results sampled for UK queries surfaced:
- Good Housekeeping UK: a recently updated 2026 guide with 14 models, product categories (overall, pet hair, budget/value, lightweight, hard floors, bagged and AI) and stated hands-on testing across 160+ stick vacuums; update 12 Nov 2026 and Black Friday stock/price checks. Source: https://www.goodhousekeeping.com/uk/product-reviews/house-garden/g685066/the-top-5-best-stick-vacuums/
- Which?: 2026 guide dated 20 Aug 2026, expert-tested products and buyer advice; separate brand comparison with UK average-price, weight, capacity and warranty context. Sources: https://www.which.co.uk/reviews/cordless-vacuum-cleaners/article/how-to-buy-the-best-cordless-vacuum-cleaner-atupv7o0Grrx and https://www.which.co.uk/reviews/vacuum-cleaners/article/shark-vs-dyson-which-vacuum-cleaner-brand-is-best-affQL1O4hV2B
- TechRadar: current tested comparison covering carpet, hard floors, pet hair, comfort, manoeuvrability, runtime, maintenance and value. Source: https://www.techradar.com/home/vacuums/best-cordless-vacuums
- The Independent: 2026 tested guide with current models including Bosch Unlimited 10 ProPower, Hoover HF3 DynamicClean, Dyson V10 Konical and Miele Triflex HX3 Plus. Source: https://www.independent.co.uk/extras/indybest/house-garden/vacuum-cleaners/best-cordless-vacuum-cleaner-uk-b2101754.html
- The Guardian: current UK guide based on hands-on cleaning tests; includes Shark PowerDetect Clean & Empty and Vax HomePro Pet-Design. Source: https://www.theguardian.com/thefilter/2026/feb/13/best-vacuum-cleaners-uk-tested
- Ideal Home: updated 24 Nov 2026, expert-led and includes current Black Friday context. Source: https://www.idealhome.co.uk/buying-guide-reviews/best-cordless-vacuum-cleaners-195971

Competitive implication:
- This is a mature, authority-heavy, testing-led SERP. A generic four-product catalogue with manufacturer specs alone is unlikely to match the evidence depth of testing publishers.
- SmartPickHub must not imitate or imply physical testing. A viable differentiation is an explicit, source-linked comparison of exact UK/US models, battery/runtime conditions, package contents, weight, bin capacity, replaceable batteries, warranty, consumables and real total ownership considerations.
- The guide should not claim “best tested”, “top performer” or cleaning performance rankings without independent test evidence.
- The current product shortlist needs a freshness review: current competitors feature newer candidates such as Dyson V16 Piston Animal, Shark PowerDetect, Bosch Unlimited 10 ProPower, Hoover HF3 and Miele Triflex HX3 Plus. These are research candidates, not yet approved replacements.

## 4. Current page-content review

Catalogue record currently contains:
- Title: “Cordless Vacuum Cleaners: Comparing Stick Vacuums for US & UK Homes”.
- Summary discusses suction claims, battery runtime, weight, dust capacity, filtration and floor tools.
- Introduction correctly warns that maximum runtime often uses low-power/non-motorised-tool conditions and that powered heads/boost reduce runtime.
- Four products: Dyson V15 Detect Absolute; Shark Stratos; Samsung Bespoke Jet AI; Miele Triflex HX2.
- Buying checklist includes suction/runtime conditions, floorhead, anti-tangle, bin, weight, filtration, battery, regional model and accessories.
- Guide is marked `published` / `Approved for publication` in current catalogue. Do not change status or live content without owner approval.

Template/source observations:
- Guide template outputs an HTML comparison table, buyer checklist, product details, source notes and affiliate/search link disclosures.
- Shared Layout emits canonical, robots and social metadata; preview detection is source-coded.
- Structured data is Article + BreadcrumbList + one ItemList with Thing entries, consistent with the approved project policy.
- The live page URL could not be fetched by the web retrieval surface in this pass; do not claim a live visual/mobile inspection. Code-level observations do not prove rendered mobile quality.

## 5. Product-level findings

### Product 1 — Dyson V15 Detect Absolute

**Catalogue identity:** Dyson V15 Detect Absolute Cordless Vacuum; UK identifier “Dyson V15 Detect Absolute Cordless Vacuum”; US identifier “Dyson V15 Detect Cordless Vacuum”.

**Primary source checked:** https://www.dyson.co.uk/vacuum-cleaners/cordless/v15/detect-yellow-nickel  
Retrieved 25 Nov 2026. Official page identifies V15 Detect Absolute, 240 AW in Powerful mode, up to 60 minutes, 0.77L bin, 3.1kg and 4.5h charge. It describes the Fluffy Optic and Motorbar heads and a click-in battery.

**US primary source additionally checked:** https://www.dyson.com/vacuum-cleaners/cordless/v15/detect-yellow and Dyson support model index https://www.dyson.com/support/vacuum-cleaners/cordless. The US page identifies V15 Detect (SV22 in the support index), 240 AW, up to 60 minutes, 0.77L bin, 6.83lb and 4.5h charge. The US page's availability extraction also contains conflicting stock messaging. The US product is titled V15 Detect, while the UK package is V15 Detect Absolute; do not assume identical package contents or regional SKU.

**Conflict / caution:** the UK page extraction includes both an out-of-stock message and an “In stock”/Add-to-basket section for option variants. Treat live availability as ambiguous, not as a reliable stock claim. Product variants shown include Dry, Dry + Wet and Dry + Detail Cleaning Kit. The catalogue name “Absolute” must be matched to the selected package, not assumed from the family name.

**Disposition:** UK and US model-family sources found, but exact package equivalence and current retailer/Amazon listings remain unresolved. Do not add ASIN or price.

### Product 2 — Shark Stratos

**Catalogue identity:** “Shark Stratos Cordless Vacuum”; UK identifier uses IZ400UKT; US identifier IZ862H.

**Primary source checked:** https://www.sharkninja.co.uk/shark-stratos-anti-hair-wrap-plus-cordless-vacuum-single-battery-iz400uk/IZ400UK.html  
The previous source redirects to this official SharkNinja UK product page. The live page identifies model **IZ400UK** (not IZ400UKT), up to 60 minutes only in ECO mode with a non-motorised tool, 4.1kg, a 0.19L dust-cup capacity, one battery, 240V, 309W, and a five-year guarantee on registration / two years for battery (UK & ROI only). It currently shows £199.99, but no price is to be copied into the guide without a dated owner-approved price policy.

**Conflict / caution:** the catalogue uses IZ400UKT and states 0.7L; the current official IZ400UK page says 0.19L and identifies model IZ400UK. A current Amazon listing found ASIN B0B42KZTH2, but its title says IZ400UK while product information says IZ400UKT, and the page says no featured offers. This is not a safe direct-ASIN approval. Need exact variant reconciliation and current listing/seller confirmation. A primary US manufacturer page/manual for IZ862H was not located in this pass; unrelated Shark support results were not treated as evidence.

**Disposition:** HOLD exact UK variant and dust-capacity claim. Do not add ASIN. US IZ862H primary-source verification remains open.

### Product 3 — Samsung Bespoke Jet AI

**Catalogue identity:** UK VS28C9784QK/EU; US VS28C9762UK/AA.

**Primary source checked:** https://www.samsung.com/uk/business/vacuum-cleaners/stick/bespoke-jet-plus-210w-all-in-one-clean-station-black-vs28c9784qk-eu/  
Official page confirms UK model VS28C9784QK/EU and up to 280W suction power. Its headline says up to 160 minutes with two separate batteries, but detailed performance section states up to 100 minutes on one large battery with a non-motorised tool. The 160-minute aggregate must be reconciled with the precise included battery configuration before retaining the statement. Samsung's separate family page lists 280W and up to one hour with a removable battery; the official support page confirms the model code and regional support documents.

**US primary source additionally checked:** Samsung US specification PDF https://image-us.samsung.com/SamsungUS/home/home-appliances/vacuums/jet-stick/vs28c9762ukaa/pdf/13314.5_VS28C9762UK_Bespoke_JetAI_National_V10.pdf confirms exact model VS28C9762UK/AA, UPC 887276777344, 280 AW, 120V/60Hz, one 25.2V battery, 0.5L vacuum dustbin, and runtime of 100 minutes Min / 49 Mid / 16 Max / 4 Jet with a non-motorised tool at Min for the 100-minute claim. The US variant is electrically and technically separate from the UK model.

**Conflict / caution:** catalogue says 160 minutes using two batteries at minimum power; official UK detailed product copy states 100 minutes on one large battery with a non-motorised tool. Samsung's US PDF confirms 100 minutes with one battery, not the UK two-battery bundle. Do not blend the US/UK runtime or assume 160 minutes applies to every package. Need verify exact UK package battery count and the basis for 160-minute combined runtime.

**Disposition:** UK and US exact model codes verified from primary sources; hold the UK 160-minute statement pending exact bundle documentation. Retailer/Amazon exact listings unresolved. No ASIN.

### Product 4 — Miele Triflex HX2 Lotus White

**Catalogue identity:** UK material number 11819170 / EAN 4002516449959; US material number 11827000 / EAN 4002516453017.

**Primary source checked:** https://www.miele.co.uk/product/11819170/cordless-stick-vacuum-cleaners-triflex-hx2-lotus-white  
Official UK page confirms 11819170 and EAN, 3.6kg, 0.5L dustbag volume, 25.2V, 60 minutes in LOW with PowerUnit solo, 30 minutes in LOW with electrical accessories, 14 minutes in HIGH with electrical accessories, 240-minute recharge and supplied floorhead/accessories. It currently labels the product permanently out of stock on the product page; Miele range/campaign pages still list it as available through Miele Experts, so current direct/retailer purchase status is not resolved.

**US primary source additionally checked:** https://www.mieleusa.com/product/11827000/cordless-stick-vacuum-cleaner-triflex-hx2-lotus-white confirms material number 11827000 / EAN 4002516453017 and the same core 60/30/14-minute runtime conditions, 3.6kg weight, 0.5L capacity and included accessory configuration. This verifies the US product identity separately; it does not prove US Amazon availability.

**Disposition:** UK and US product identities and performance conditions are verified from separate manufacturer pages. UK current purchase path remains mixed: the product page labels permanently out of stock while Miele's range pages list purchase via Miele Experts. Amazon listings remain unresolved.

## 6. Marketplace / affiliate status

- No exact Amazon UK direct ASIN was verified for any of the four product records in this pass.
- One Shark search result exposed B0B42KZTH2, but title/model mismatch and no featured offer prevent approval.
- Existing catalogue identifiers are search phrases, not ASINs. Keep the existing search-link behavior and do not convert any phrase to a direct product link.
- Amazon US listings were not verified.
- No price, stock, rating or review data has been added to the project.


## 6A. Cross-market identity checkpoint added 25 Nov 2026

- Manufacturer identity pages/documents now located for 6 of 8 market-specific model records (Dyson UK/US, Samsung UK/US, Miele UK/US). This is a source-location count only, not a complete product PASS.
- Shark UK is unresolved because the catalogue uses IZ400UKT while the current official product page identifies IZ400UK; the catalogue's 0.7L claim conflicts with the official page's 0.19L. Shark US IZ862H still lacks an exact primary-source page/manual in this pass.
- Exact Amazon UK direct listings verified: 0/4. The one Shark ASIN candidate remains ambiguous and is not approved. Amazon US direct listings verified: 0/4; Amazon.com access is restricted in this retrieval environment, so absence of results must not be interpreted as proof of no listing.
- Samsung US official PDF resolves the exact US model and runtime ladder (100/49/16/4 minutes by Min/Mid/Max/Jet). UK runtime must remain separately sourced and its two-battery 160-minute headline reconciled to the detailed 100-minute single-large-battery statement.

## 7. Preliminary gap list — not yet a final score

1. Refresh the shortlist against the current 2026 UK SERP; at least some existing models may be dated relative to the current competitor picks.
2. Resolve Shark IZ400UK vs IZ400UKT and 0.19L vs 0.7L before any further recommendation.
3. Reconcile Samsung's 160-minute headline vs 100-minute detailed runtime and exact battery bundle.
4. Resolve Dyson package/availability ambiguity and exact Amazon variant.
5. Resolve Miele current sales channel and exact retailer/Amazon listing; maintain 60/30/14-minute condition labels.
6. Verify US variants separately for all four, or clearly scope the page as UK-first and limit US claims to verified models.
7. Build a genuinely differentiated comparison framework; do not present a test ranking.
8. Complete rendered page, mobile, accessibility and live technical checks; the web surface could not fetch the live URL.
9. Complete direct affiliate destination verification only where exact listing evidence supports it.

## 8. Scorecard and decision

**No final score assigned yet.** The active page has partial keyword/SERP and source evidence, but marketplace verification, full US product checks, final content gap assessment, rendered QA and independent final review remain incomplete. Assigning a percentage now would confuse partial research with full quality completion.

| Dimension | Max | State |
|---|---:|---|
| Keyword demand and buyer intent | 15 | PARTIAL — saved cached/undated metrics; SERP sampled |
| SERP, competitor and cannibalisation | 10 | PARTIAL — UK competitor set reviewed; full overlap matrix and US SERP pending |
| Product identity and factual evidence | 25 | PARTIAL — primary-source identity evidence located for 6/8 market records; Shark UK/US remains unresolved and material claims/listings remain open |
| Editorial usefulness and originality | 20 | PARTIAL — catalogue/template reviewed; full refresh brief/draft not done |
| Commercial and affiliate readiness | 10 | BLOCKED — no exact direct ASIN/listing verified |
| On-page SEO and structured data | 10 | PARTIAL — source template/policy reviewed; live route not inspected |
| UX, accessibility and performance | 5 | NOT DONE — page-specific rendered review not completed |
| Policy, trust and compliance | 5 | PARTIAL — source/disclosure behavior seen in template; final copy review pending |
| **Total** | **100** | **Not scored until evidence is complete** |

**Current disposition:** IN_PROGRESS. No PASS, no owner approval, no content change and no production action.

## 9. Next exact actions

1. Verify exact Amazon UK and US listings for each of the four models, without accepting model-family matches or ambiguous variants.
2. Close the remaining Shark US IZ862H manufacturer-source gap; Dyson, Samsung and Miele US manufacturer evidence is now recorded.
3. Compare the four current products against fresh current UK candidates surfaced by the SERP (Dyson V16 Piston Animal, Shark PowerDetect, Bosch Unlimited 10 ProPower, Hoover HF3 and Miele Triflex HX3 Plus); verify each from primary sources before proposing replacement.
4. Prepare a buyer-intent-led refreshed shortlist with retain/replace/hold decisions and source notes.
5. Only then prepare a revised editorial outline and complete the full page scorecard.
6. Update the master tracker and handoff. Do not start the next guide until this page has a documented disposition.

## 10. Sources consulted

- Google results: https://www.goodhousekeeping.com/uk/product-reviews/house-garden/g685066/the-top-5-best-stick-vacuums/
- Which?: https://www.which.co.uk/reviews/cordless-vacuum-cleaners/article/how-to-buy-the-best-cordless-vacuum-cleaner-atupv7o0Grrx
- Which? brand comparison: https://www.which.co.uk/reviews/vacuum-cleaners/article/shark-vs-dyson-which-vacuum-cleaner-brand-is-best-affQL1O4hV2B
- TechRadar: https://www.techradar.com/home/vacuums/best-cordless-vacuums
- The Independent: https://www.independent.co.uk/extras/indybest/house-garden/vacuum-cleaners/best-cordless-vacuum-cleaner-uk-b2101754.html
- The Guardian: https://www.theguardian.com/thefilter/2026/feb/13/best-vacuum-cleaners-uk-tested
- Ideal Home: https://www.idealhome.co.uk/buying-guide-reviews/best-cordless-vacuum-cleaners-195971
- Dyson UK: https://www.dyson.co.uk/vacuum-cleaners/cordless/v15/detect-yellow-nickel
- SharkNinja UK: https://www.sharkninja.co.uk/shark-stratos-anti-hair-wrap-plus-cordless-vacuum-single-battery-iz400uk/IZ400UK.html
- Samsung UK: https://www.samsung.com/uk/business/vacuum-cleaners/stick/bespoke-jet-plus-210w-all-in-one-clean-station-black-vs28c9784qk-eu/
- Samsung UK support: https://www.samsung.com/uk/support/model/VS28C9784QK/EU/
- Miele UK: https://www.miele.co.uk/product/11819170/cordless-stick-vacuum-cleaners-triflex-hx2-lotus-white
- Amazon UK Shark candidate (not approved as direct destination): https://www.amazon.co.uk/Shark-Anti-Odour-Technology-Attachments-IZ400UK/dp/B0B42KZTH2
- Dyson US product page: https://www.dyson.com/vacuum-cleaners/cordless/v15/detect-yellow
- Dyson US support model index (V15 Detect SV22): https://www.dyson.com/support/vacuum-cleaners/cordless
- Samsung US exact model specification PDF: https://image-us.samsung.com/SamsungUS/home/home-appliances/vacuums/jet-stick/vs28c9762ukaa/pdf/13314.5_VS28C9762UK_Bespoke_JetAI_National_V10.pdf
- Miele US exact model 11827000: https://www.mieleusa.com/product/11827000/cordless-stick-vacuum-cleaner-triflex-hx2-lotus-white
