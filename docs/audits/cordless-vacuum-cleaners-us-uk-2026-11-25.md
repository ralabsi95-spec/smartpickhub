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

## 25 November 2026 — Additional manufacturer and retailer evidence checkpoint

### Shark Stratos UK — identity narrowed, capacity conflict remains a hard blocker
- SharkNinja UK's current product page explicitly identifies the single-battery product as model IZ400UK, not IZ400UKT. It states 60 minutes only in ECO with a non-motorised tool, 4.1 kg, 0.19 L dust cup, 3.5-hour charge, one included battery, 240 V, 309 W, and a 5-year guarantee after registration (2 years for battery, UK/ROI). Source: https://www.sharkninja.co.uk/shark-stratos-anti-hair-wrap-plus-cordless-vacuum-single-battery-iz400uk/IZ400UK.html
- Amazon UK result for ASIN B0B42KZTH2 has title/model number IZ400UK but its model-name field says IZ400UKT; it lists 0.7 L capacity, while the manufacturer's current page says 0.19 L. Amazon result currently shows no featured offer. Source: https://www.amazon.co.uk/Shark-Anti-Odour-Technology-Attachments-IZ400UK/dp/B0B42KZTH2
- Decision: do NOT approve B0B42KZTH2 as the affiliate destination yet. The model/packaging and 0.19 L vs 0.7 L conflict is material. Retain the official 0.19 L as the manufacturer-stated specification in research notes, but the product record remains HOLD until Shark confirms the correct variant/capacity and a buyable exact listing is verified. Do not silently copy the Amazon 0.7 L value.

### Shark Stratos US — exact model identified; primary-source gap still open
- Exact US variant IZ862H is confirmed by retailer product records: 120 V / 60 Hz and 309 W are shown in the IZ800-series owner's guide mirror; runtime up to 60 minutes is explicitly ECO measured at the handheld vacuum in Kohl's product details; weight 8.9 lb and dust cup approximately 0.72 qt are shown by Kohl's. Sources: https://www.kohls.com/product/prd-5884781/shark-stratos-cordless-vacuum-with-clean-sense-iq-and-odor-neutralizer-duoclean-powerfins-hairpro-includes-duster-crevice-tool-antiallergen-brush-up-to-60-minute-runtime-deepcleaning-vacuum-hepa-filter-ash-purple-iz862h.jsp and https://manualzz.com/doc/68296941/shark-iz862h-stratos%E2%84%A2-cordless-user-manual
- The retrieved manual is an IZ800 Series owner guide reproduced by a third-party manual host, not a verified official Shark-hosted source in this check. It lists 120 V~, 60 Hz and 309 W, and includes battery care/indoor storage and filter drying guidance. Do not treat the mirror as primary evidence. Official Shark-hosted IZ862H manual/source remains unresolved.
- Important market distinction: US IZ862H is a 120 V/60 Hz product; do not merge its electrical, package, runtime or warranty details with UK IZ400UK (240 V).

### Additional commercial listing evidence
- Samsung UK exact model VS28C9784QK/EU appears on Harvey Norman UK with the exact model string. The retrieved page displayed a promotional price but was crawled two months before this audit; price is stale/unusable and not copied. Source: https://www.harveynorman.co.uk/products/samsung-bespoke-jet-ai-bagless-cordless-vacuum-cleaner-vs28c9784qk-eu-black
- Miele UK official range page lists material number 11819170 / Triflex HX2 and states purchase via Miele Experts, while the direct product page still reports permanently out of stock. This confirms an official sales route exists but does not verify live stock or an online checkout offer. Sources: https://www.miele.co.uk/c/triflex-hx2-cordless-vacuum-10294.htm and https://www.miele.co.uk/product/11819170/cordless-stick-vacuum-cleaners-triflex-hx2-lotus-white
- No exact, currently buyable Amazon direct listing was approved for Dyson V15, Samsung Bespoke Jet AI or Miele Triflex HX2 in this checkpoint. Amazon exact direct-listing verification remains 0/4 UK and 0/4 US. Shark ASIN B0B42KZTH2 remains a rejected/unapproved candidate pending resolution; count remains zero.

### Environmental/maintenance relevance discovered
- Shark IZ862H manual guidance surfaced in the third-party manual mirror: store indoors; filters rinsed with water must air-dry completely for up to 48 hours before reinstalling. This supports a relevant maintenance/moisture caution, not a claim that the vacuum is water-resistant. Verify against an official manufacturer manual before using it as a cited product claim.
- For this vacuum guide, electricity running cost is low-value unless comparable measured kWh or defensible charging energy is available. Do not estimate annual cost from 309 W motor input; that is not measured battery charging consumption. Moisture/humidity check should focus on dry-use-only limitations, filter drying, and battery/electrical safety, using primary sources.

### Status after this checkpoint
- UK Shark manufacturer identity/model: PARTIALLY RESOLVED (IZ400UK); capacity/package conflict unresolved; Amazon listing not approved.
- US Shark model identity: retailer/manual evidence supports IZ862H; official Shark primary source remains unresolved.
- Exact Amazon direct listing approval: 0/4 UK and 0/4 US.
- Page remains IN_PROGRESS, unscored, with no production edits, affiliate-link changes, owner approval, merge or deployment.
- Next exact action: locate official Shark-hosted IZ862H manual/specification; ask manufacturer documentation to reconcile UK 0.19 L vs retailer/Amazon 0.7 L and the IZ400UK/IZ400UKT package naming; then complete exact offer checks for the other three models.
## 25 November 2026 — Continued verification: exact catalogue identity, official manuals and replacement candidates

### Important correction — Shark UK product identity in the live catalogue
- The current `main` catalogue record was re-read at commit `c2fb4419e8a40e010f4307e901e11b4112e5f09c`, `src/data/products.json` blob `075ce71d57b2ee21fdecd4f1c82036819ba55937`. Its UK identifier is explicitly `Shark Stratos Anti Hair Wrap Plus Pet Pro Cordless Vacuum IZ400UKT`; its US identifier is `IZ862H`. Therefore the catalogue's intended UK variant is IZ400UKT, not IZ400UK.
- Official SharkNinja product page for IZ400UKT now confirms the exact UK model and package: single battery, Pet Hair Removal Tool, Odour Puck, 20 cm crevice tool, multi-surface tool, accessory bag, 240 V, 309 W, 4.1 kg, 3.5-hour charge, up to 60 minutes in ECO with non-motorised tool, 5-year guarantee on registration / 2 years battery (UK & ROI). It states delivery in up to 3 days. Source: https://www.sharkninja.co.uk/shark-stratos-anti-hair-wrap-plus-pet-pro-cordless-vacuum-single-battery-iz400ukt/IZ400UKT.html
- The 0.19 L capacity belongs to the separate IZ400UK model (official SharkNinja page explicitly identifies IZ400UK and 0.19 L). It must NOT be transferred to the catalogue's IZ400UKT. The IZ400UKT page reviewed does not expose a dust-cup capacity in its technical fields; leave the value unreported until an official source/manual verifies it.
- Amazon UK ASIN B0B42KZTH2 remains ambiguous: Amazon title/model number says IZ400UK while its model-name field says IZ400UKT and capacity is 0.7 L. Since Shark's official pages distinguish IZ400UK and IZ400UKT as separate variants, do not approve this ASIN until Amazon's selected variant/model number is unambiguous and matches IZ400UKT. The previous note treating 0.19 L vs 0.7 L as a direct manufacturer conflict for the same variant is superseded: it compared two different Shark model codes. The Amazon record still has an identity-field inconsistency.
- Official Shark UK range also confirms IZ400UK and IZ400UKT are separate catalogue products. IZ400UK is out of stock in the current range snapshot; IZ400UKT appears as its own product. Sources: https://www.sharkninja.co.uk/home-cleaning/vacuum-cleaners/cordless-vacuums and https://www.sharkninja.co.uk/shark-stratos-anti-hair-wrap-plus-cordless-vacuum-single-battery-iz400uk/IZ400UK.html

### Shark US IZ862H — source status
- SharkNinja's official US Parts & Support portal accepts `SKU=IZ862H` and confirms that model-number lookup is its intended support route, but the retrieved page did not expose a model-specific manual/specification document. Source: https://www.sharkninja.com/parts-support?SKU=IZ862H
- Search results continue to surface third-party copies of the IZ800 Series Owner's Guide listing IZ862H, 120 V / 60 Hz, 309 W and filter air-drying instructions up to 48 hours. These are not accepted as primary manufacturer evidence. Keep US IZ862H on HOLD for source-level verification; never merge its 120 V electrical details with UK IZ400UKT 240 V.

### Manufacturer source and commercial status updates for current catalogue products
- Dyson V15 Detect Absolute UK official product page currently contains contradictory availability signals: an out-of-stock notice appears near the top while a product option and Add-to-basket section are shown further down. Technical fields remain 240 AW, up to 60 min, 0.77 L, 3.1 kg and 4.5 h charge. Do not claim availability until the exact Dry package is verified at checkout. Source: https://www.dyson.co.uk/vacuum-cleaners/cordless/v15/detect-yellow-nickel
- Samsung UK official support page for VS28C9784QK exposes official manuals, including EU English user manual file version 0.7 dated 11 Aug 2025 and earlier v0.6; exact model support page: https://www.samsung.com/uk/support/model.VS28C9784QK_WA/ . The direct download endpoint was not readable through this check, so manual content was not newly extracted. Keep the already sourced official product page and Samsung US specification PDF as the source baseline; do not blend 160-min two-battery headline with 100-min one-battery non-motorised-tool condition.
- Miele UK official product specification PDF for exact material number 11819170 / EAN 4002516449959 was retrieved. It confirms 0.5 L bin, 3.6 kg, 25.2 V Li-ion battery 2500 mAh, 77 dB, 240 min recharge, and runtime 60 min PowerUnit solo LOW / 30 min with electrical accessories LOW / 14 min with electrical accessories HIGH. Source: https://media.miele.com/downloads/n-/gb/FS_11819170_GBE_GB-en-GB.pdf . This strengthens technical identity evidence; retail stock remains unresolved (Miele product page says permanently out of stock while the range page offers Miele Expert purchase route).
- Miele US exact material number 11827000 has an exact retailer listing at eVacuumStore and Red Vacuums, but neither listing alone proves Amazon direct availability or current marketplace seller/condition. Keep the US commercial/Amazon direct destination unresolved. Sources: https://evacuumstore.com/collections/miele-vacuums-after-christmas/products/miele-triflex-hx2-lotus-white and https://www.redvacuums.com/collections/vacuums/products/miele-triflex-hx2-cordless-stick-vac-11827000

### UK replacement candidates — primary-source screening (not yet approved replacements)

| Candidate | Exact model / official evidence | Relevant sourced facts | Provisional disposition |
|---|---|---|---|
| Dyson V16 Piston Animal | Dyson UK official product page | 315 AW; up to 70 min; 1.3 L bin; 3.4 kg; 4.5 h charge. Page simultaneously shows in-stock/add-to-basket and an out-of-stock notice; availability is ambiguous. | SHORTLIST for premium replacement comparison; not approved yet |
| Shark PowerDetect | SharkNinja UK official model IP1251UK | 70 min only ECO without motorised tool; 3.71 kg; 0.38 L bin; 21.6 V; 380 W; 5-year guarantee (2-year battery). Current page shows £489.99 but also a notify-when-back-in-stock message; stock ambiguous. | SHORTLIST; strong current-generation candidate, commercial status needs confirmation |
| Bosch Unlimited 10 ProPower | Bosch UK exact model BCS1051GB | Up to 100 min with non-electrical accessory; up to 80 min ECO with electrical floor nozzle; 30 min Auto with floor nozzle; 13 min Turbo with floor nozzle; one exchangeable 18 V 5 Ah battery; approx. 1 h 11 min charge; 0.4 L dust container; 80 dB; weight differs between Bosch pages (3.8 kg ready-for-use in product overview vs 2.9 kg in support detail). | SHORTLIST; weight discrepancy must be resolved and runtime conditions stated |
| Hoover HF3 Pet DynamicClean | Hoover UK exact code HF310P 001 / product code 39401111 / EAN 8059019115542 | 150 AW in Turbo handheld; 60 min ECO handheld; 30 min Standard with floor nozzle; 15 min Turbo; 0.7 L; 22.2 V; 400 W; 4 h charge; 2.54 kg cleaner only / 3.391 kg net package weight; 1-year warranty. | SHORTLIST for value/pet segment; runtime must not be presented as 60 min floor-cleaning runtime |

Primary candidate sources:
- Dyson V16 UK: https://www.dyson.co.uk/vacuum-cleaners/cordless/v16-piston-animal/black-copper
- Shark PowerDetect UK: https://www.sharkninja.co.uk/shark-powerdetect-cordless-vacuum-cleaner/IP1251UK.html
- Bosch BCS1051GB: https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB
- Bosch support technical detail (weight conflict): https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01
- Hoover HF3 exact product: https://www.hoover-home.com/en_GB/products/39401111-hf310p-001

### US replacement-market evidence
- Shark PowerDetect US model IP1251 is separately listed on SharkNinja US official site. Official product page states 70 min measured at the handheld vacuum in ECO mode, 21.6 V, 380 W, 8.11 lb, 0.7 qt dust cup and 6-hour battery charge; do not transfer UK IP1251UK's 0.38 L bin or UK warranty terms. Source: https://www.sharkninja.com/shark-powerdetect-cordless-stick-vacuum/IP1251.html
- Dyson US V16 Piston Animal is listed on Dyson US official site. US specs shown include 315 AW, 70 min, 0.35 US gallon bin, 7.5 lb and 3.5 h charge; the page currently indicates out of stock. Keep US and UK specs separate. Source: https://www.dyson.com/vacuum-cleaners/cordless/v16-piston/black-copper
- Bosch BCS1051GB and Hoover HF310P 001 are UK-specific candidate records in this pass; no exact US equivalents were approved. Miele HX3 Plus did not yield a verified official manufacturer product page in this search and remains unqualified as a replacement candidate.

### Buyer-fit implications (provisional, not product rankings)
- V16 has materially higher quoted suction and larger compressed-bin design than V15, but is heavier and has a lower official Dyson rating in the page snapshot (3.9/5, 2,219 ratings vs V15 4.5/5, 22,241 ratings); ratings are manufacturer-hosted and should not be represented as independent lab tests. Availability is contradictory.
- Shark PowerDetect IP1251UK and US IP1251 are not interchangeable product records: UK bin 0.38 L vs US 0.7 qt, different model suffix and region. Runtime is specified at handheld/ECO without motorised tool.
- Bosch BCS1051GB may differentiate via exchangeable 18 V 5 Ah battery, rapid charging and long stated ECO runtime, but the 100-minute figure is only with non-electrical accessory; floor-nozzle runtime is 80 min ECO. Resolve 2.9 vs 3.8 kg before editorial use.
- Hoover HF3 is a lower-price/value candidate with useful exact product identity, but the 60-minute figure is handheld ECO; floor-nozzle standard mode is 30 min. The 1-year warranty is shorter than the 5-year claims on some premium competitors.
- These four candidates are not yet a final shortlist. Need separate US SERP and exact US candidate verification, product/market-specific buyer fit, current retailer availability and Amazon listing checks before deciding replacements.

### Current state and next action
- Catalogue product UK Shark identity corrected to IZ400UKT; official source now confirms this exact variant. 0.19 L applies only to IZ400UK and is not to be copied to IZ400UKT. Amazon candidate B0B42KZTH2 remains unapproved because Amazon's model number and model-name fields conflict.
- Shark US IZ862H remains HOLD: official support lookup found but no model-specific official manual/spec sheet extracted.
- Exact Amazon direct ASIN approvals remain 0/4 UK and 0/4 US. No ASIN or affiliate destination has been added/changed.
- Current four products now have stronger official evidence, but Dyson and Miele UK availability, Shark US primary evidence, Samsung runtime/battery-bundle reconciliation, and exact Amazon destinations remain open.
- Candidate comparison is now evidence-backed for four UK alternatives; no replacements have been committed to catalogue.
- Page remains IN_PROGRESS, unscored, no PASS, no owner approval, no production content/code/link change, no PR merge and no deployment.
- Next exact actions: (1) resolve Bosch weight discrepancy using official packaging/manual; (2) obtain Shark IZ862H official model-specific guide via Shark support or manufacturer; (3) verify Amazon selected-variant pages for all eight current market records, accepting search links if direct offers cannot be proven; (4) complete the US candidate/market comparison and UK/US intent split; (5) produce retain/replace/hold matrix and revised buyer brief, then scorecard.
## 25 November 2026 — Amazon UK exact Shark listing inspected; identity remains rejected
- Amazon UK search result for ASIN B0B42KZTH2 is now readable. It shows title `Shark Stratos Cordless Stick Vacuum Cleaner ... IZ400UK`; Item details show Model Number `IZ400UK` but Model Name `IZ400UKT`; included components list 8-inch crevice tool, multi-surface tool, accessory bag and one battery; title says two attachments. Product Information says capacity 0.7 L, weight 5.11 kg, voltage 25.2 V, runtime up to 60 min; no featured offers are available. Source: https://www.amazon.co.uk/Shark-Anti-Odour-Technology-Attachments-IZ400UK/dp/B0B42KZTH2
- This strengthens the rejection of ASIN B0B42KZTH2 as a direct affiliate destination for the catalogue's IZ400UKT: Amazon's primary model number is IZ400UK, title also says IZ400UK, while the secondary Model Name field says IZ400UKT. It also lacks a featured offer. Amazon's 0.7 L, 5.11 kg and 25.2 V data conflict with official IZ400UK page's 0.19 L, 4.1 kg and 240 V, and the Amazon included accessories resemble the IZ400UK package more than IZ400UKT. Treat Amazon attributes as inconsistent marketplace metadata, not authoritative manufacturer facts.
- Correct decision: ASIN B0B42KZTH2 is NOT approved. Do not use it for IZ400UKT. Keep the marketplace destination as a clearly labelled Shark Stratos model-name search URL unless a separate Amazon ASIN is found whose selected model number and package match IZ400UKT exactly and has a buyable offer.
- Amazon UK search found no other reliable exact direct ASIN result for Dyson V15, Samsung VS28C9784QK/EU or Miele 11819170 in this pass. This is not proof that no listing exists. Amazon US direct search is blocked by robots in this retrieval environment, so US exact listing verification remains unavailable; do not infer absence.
- Direct Amazon approved counts remain 0/4 UK and 0/4 US. The only exact ASIN surfaced for the four UK products is rejected/unapproved; no direct product link is authorised.

## 25 November 2026 — CONTROLLING CORRECTIONS AND FOLLOW-UP VERIFICATION (supersedes earlier conflicting notes)

### Shark UK: do not conflate IZ400UK with IZ400UKT
- The live catalogue target is IZ400UKT. Official Shark product evidence for the separate IZ400UK explicitly gives 0.19 L; that value is **not transferable** to IZ400UKT. Official IZ400UKT details already captured in this audit confirm the correct model/package and 240 V region, but the capacity remains unverified from an accessible primary spec source. Keep capacity blank/unknown rather than publishing 0.19 L or copying Amazon's 0.7 L.
- Amazon UK ASIN B0B42KZTH2 page was independently rechecked in current search output. It displays title/model number IZ400UK, secondary Model Name IZ400UKT, capacity 0.7 L, 5.11 kg, 25.2 V, and no featured offer. **Disposition: REJECT ASIN B0B42KZTH2** for the IZ400UKT catalogue record. Retain only a clearly labelled marketplace search destination pending a distinct, exact, buyable listing.
- This corrects older paragraphs in this file that described 0.19 L versus 0.7 L as a same-model conflict or said the intended catalogue model itself was still unresolved. Those paragraphs remain historical observations; this addendum is controlling.

### Bosch BCS1051GB: weight labels reconciled only partly
- Bosch product overview currently reports “Measured weight, ready for op.” = 3.8 kg. Bosch support detail separately reports 2.9 kg “ready for use with tube and floor nozzle”, and 5.3 kg under “Net weight”. Official pages therefore use different measurement labels/values. Do not publish a single product-weight claim until Bosch explains the measurement scope or a model manual/package specification supplies an unambiguous comparable figure. Keep 3.8 kg as product-overview value and 2.9 kg as support-page value in the evidence log, not a resolved consensus.
- Source product: https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB
- Source support: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01

### Shark US IZ862H: official support corroboration, manual gap remains
- SharkNinja US official parts pages identify IZ862H as compatible with the original Stratos battery XBATR725SL and charging cord XCHRIZ800; the official dust-cup part page also lists IZ862H compatibility. These confirm service-parts association with the model but do **not** establish full vacuum specifications, power, voltage, runtime or owner-guide instructions.
- No official, model-specific Shark US owner guide/specification PDF was retrieved in this pass. Third-party IZ800 manual mirrors and retailer specifications remain secondary evidence. Keep primary-source gate OPEN; do not use the 48-hour filter-drying instruction as a product-specific claim until confirmed in an official guide.
- Sources: https://www.sharkninja.com/removable-lithium-ion-battery/XBATR725SL.html ; https://www.sharkninja.com/charging-cord/XCHRIZ800.html ; https://www.sharkninja.com/dust-cup/296FFJ860H.html

### Amazon availability verification status (no change to approval counter)
- Re-search did not produce verifiable exact, currently buyable Amazon direct listings for the other seven product-market records. Amazon US search remains blocked to this retrieval environment. This means **unverified**, not “no listing exists”.
- Approved direct-ASIN count remains 0/4 UK and 0/4 US. No Amazon direct URL is approved; clearly labelled search links may remain where already present, subject to current link QA.

### Page-level decision and next work
- Active page remains IN_PROGRESS and unscored. Existing products: Dyson V15 Detect (UK/US), Shark Stratos (UK IZ400UKT / US IZ862H), Samsung Bespoke Jet AI (UK VS28C9784QK/EU / US VS28C9762UK/AA), Miele Triflex HX2 (UK 11819170 / US 11827000). Replacement candidates remain candidates only; none approved.
- Product decisions are not yet ready: Shark US primary evidence unresolved; Dyson UK offer/package state contradictory; Samsung battery/runtime bundle conditions require manual extraction; Miele UK availability unresolved; exact Amazon direct offers remain unverified; Bosch replacement candidate weight label remains unresolved; four-candidate market-fit comparison is incomplete.
- Next exact sequence: (1) request/locate official Shark IZ862H owner guide; (2) obtain Bosch clarification/manual for the weight definitions; (3) extract Samsung UK v0.7 manual and verify runtime/battery pack inclusions for each regional variant; (4) verify exact live seller/condition/offer for product-market records where direct marketplace link is proposed, otherwise retain search links; (5) finish UK and US buyer-intent and replacement comparison, then record four explicit retain/replace/hold decisions; (6) complete every page/product hard gate and >=90/100 scorecard. No next guide until this page is dispositioned.

### Audit governance
- Last verified: 25 November 2026. Evidence snapshot is time-sensitive for price, stock and offers.
- No production code, catalogue data, page copy, affiliate URL, Cloudflare configuration, sitemap, robots, merge, deployment or publication was changed by this research/documentation checkpoint.


## 25 November 2026 — 10:35 Asia/Amman / 07:35 UTC — Follow-up source verification (documentation-only)

### Samsung UK VS28C9784QK/EU — official v0.7 manual located, contents not yet extracted
- Samsung UK model support page for exact model VS28C9784QK lists an English/EU User Manual, version 0.7, file name `O_DJ68-00900C-07_IB_VS9700_EU_EN_250702.pdf`, modified 11 Aug 2025, file ID 10789220. The official download URL is:
  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_UK&OriginYN=N&ModelType=N&ModelName=VS28C9784QK&CttFileID=10789220&CDCttType=UM&VPath=UM%2F202508%2F20250811201509973%2FO_DJ68-00900C-07_IB_VS9700_EU_EN_250702.pdf
- The Samsung support page was readable and exposes this file metadata, but the PDF endpoint returned inaccessible through the current retrieval channel. Therefore the manual is LOCATED, not CONTENT-REVIEWED. Do not claim runtime/battery-bundle reconciliation from it yet.
- Samsung's official UK Business product page continues to state up to 160 minutes with two separate batteries. Keep the distinction from the 100-minute single-battery claim; verify conditions from the manual/product spec before publication.
- Sources: https://www.samsung.com/uk/support/model.VS28C9784QK_WA/ ; https://www.samsung.com/uk/business/vacuum-cleaners/stick/bespoke-jet-plus-210w-all-in-one-clean-station-black-vs28c9784qk-eu/

### Bosch BCS1051GB — current official service page rechecked; discrepancy remains
- Bosch UK official support page for BCS1051GB/01 lists a User Manual and Interactive User Manual among its documents, but the document contents were not extracted in this pass.
- Its official service specification states net weight 5.3 kg and separately states weight ready for use with tube and floor nozzle 2.9 kg. Bosch's product overview separately labels 3.8 kg as measured weight ready for operation. These labels are not directly comparable and do not establish one unambiguous publication weight. Keep the weight claim out of editorial copy until the measurement scope is reconciled.
- The Bosch product page currently surfaced £629.99 and In stock in the retrieved result; this is a time-sensitive snapshot only, not a durable price/availability claim.
- Sources: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01 ; https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB

### Shark US IZ862H — third-party guide located; primary-source gate still open
- A third-party mirror surfaced a 24-page IZ800 Series Owner's Guide whose cover/model listing includes IZ862H. It contains safety, cleaning and filter-drying instructions, but it is not hosted by SharkNinja and is not accepted as primary manufacturer evidence.
- Do not publish its 48-hour filter/dust-cup drying instruction, voltage, runtime or other model-specific claims as manufacturer-verified until an official SharkNinja-hosted manual or support response is obtained.
- SharkNinja's official Parts & Support route for SKU IZ862H remains the only primary support page captured; it did not expose a model-specific owner guide in the retrieved content.
- Secondary reference (not accepted for publication claims): https://manualsfile.com/product/k2zp91ivwkl.html
- Official support reference: https://www.sharkninja.com/parts-support?SKU=IZ862H

### Decisions and next actions
- Samsung: manual discovery gate SATISFIED; manual-content review and runtime/battery-pack reconciliation remain OPEN.
- Bosch: manual discovery gate PARTIALLY SATISFIED; retrieve and inspect official manual/packaging, then ask Bosch to reconcile measurement labels if needed. Weight remains withheld.
- Shark US: official manual gate OPEN; third-party copy is corroborative only.
- No product retain/replace decision is changed by this checkpoint. Amazon direct approval remains 0/4 UK and 0/4 US. No ASIN, affiliate destination, catalogue data, page content, code, Cloudflare setting, PR merge or production deployment changed.
- Page remains IN_PROGRESS and unscored. Continue with these exact gaps; do not restart completed identity, structural, metadata or CI checks.


## 25 November 2026 — 10:39 Asia/Amman / 07:39 UTC — Samsung v0.7 manual content review: runtime and battery bundle reconciled

### Exact model and document scope
- Samsung UK support page is for exact model VS28C9784QK and lists the English/EU User Manual v0.7, file `O_DJ68-00900C-07_IB_VS9700_EU_EN_250702.pdf`, modified 11 Aug 2025, file ID 10789220.
- The PDF is now directly readable. Its cover identifies the supported family as `VS90F40***/VS28C97****/VS25C97****`; therefore the specification table applies to VS28C97****, which includes the exact VS28C9784QK model family. The exact Samsung UK Business product page separately identifies VS28C9784QK/EU and confirms its supplied battery quantity and 160-minute headline.
- Official manual: https://downloadcenter.samsung.com/content/UM/202508/20250811201509973/O_DJ68-00900C-07_IB_VS9700_EU_EN_250702.pdf
- Exact model support: https://www.samsung.com/uk/support/model/VS28C9784QK/WA/
- Exact product page: https://www.samsung.com/uk/business/vacuum-cleaners/stick/bespoke-jet-plus-210w-all-in-one-clean-station-black-vs28c9784qk-eu/

### Runtime: approved wording and conditions
- Samsung's exact VS28C9784QK/EU UK Business page states up to 160 minutes, specifically at minimum power with a non-motorised tool attached using two batteries; it lists battery quantity 2 EA.
- The v0.7 manual explains the underlying battery-dependent times. With the larger VCA-SBTC97 battery, Combination Tool / Extension Crevice Tool at MIN is approx. 100 min; with the lighter VCA-SBTC97S or VCA-SBTD95 battery, the same tool/mode is approx. 60 min. The manual states its table times are based on one battery and cleaning time doubles when two batteries are used consecutively.
- With the Active Dual Brush, the larger battery is approx. 58 min at MIN and the smaller battery approx. 34 min at MIN. Slim LED Brush+ is approx. 77 min and 45 min respectively at MIN. These are accessory-specific and must not be collapsed into a single generic runtime.
- The 160-minute value is not the floor-brush runtime. The manual also contains 160 min in the Spray Spinning Sweeper row for the large battery; that is a different wet-mopping attachment. Keep the UK marketing claim tied to minimum power + non-motorised tool + two batteries.
- Safe editorial wording: “Up to 160 minutes with two batteries at minimum power using a non-motorised tool; runtime is shorter with powered floor heads and higher suction settings.” Add that the two supplied batteries are different capacity classes only if verified from the bundle/product spec; Samsung page confirms 2 batteries and different charge times, while the manual's family table gives 100-min and 60-min battery profiles.
- Battery specifications in manual: VCA-SBTC97 is Li-ion 25.2 V, 3970 mAh; VCA-SBTC97S / VCA-SBTD95 are Li-ion 25.2 V, 2200 mAh. Charge times: 5.0 h for VCA-SBTC97; 3.5 h for VCA-SBTC97S / VCA-SBTD95.
- The manual's accessories list marks several items with an asterisk meaning they may differ by model. Do not infer every optional accessory in the family diagram is included in this exact SKU; use the exact Samsung product page's model-specific list for bundle claims.
- Exact product page lists two batteries, Active Dual Brush, Slim LED Brush+, Pet Tool+, Combination Tool, Extension Crevice Tool, Flexible Tool, Accessory Cradle and Battery Charging Kit. Dust capacity 0.5 L; clean station dust bag 2.0 L.
- Source lines in PDF: product specification and runtime table pp.50–51 (PDF lines 1432–1513); accessories list p.13 (lines 283–296). Exact model product page corroborates 160-min condition and 2 batteries.

### Gate update
- Samsung UK manual discovery: CLOSED.
- Samsung UK manual content review: CLOSED for runtime, battery chemistry/voltage/capacity, charge time and accessory caveats.
- Samsung UK runtime/battery-count claim: SATISFIED with exact model product page + v0.7 family manual; no longer an open gap.
- Remaining Samsung gate: confirm live commercial offer and exact seller/condition/stock for the selected UK destination; keep US VS28C9762UK/AA evidence separate.
- No catalogue data, product page copy, affiliate URL or production file changed. This is evidence-only documentation. Product retain/replace decision remains pending with the rest of the four-product comparison.

### Other active gaps unchanged
- Bosch BCS1051GB weight remains withheld: 2.9 kg with tube/floor nozzle vs 5.3 kg net in support/spec sheet, and 3.8 kg on product overview with another label. Official manual content still not reviewed.
- Shark US IZ862H: only secondary-hosted copy of an owner guide found; no SharkNinja-hosted official model-specific manual captured. Official primary-source gate remains OPEN.
- Amazon direct ASIN approvals remain 0/4 UK and 0/4 US; no ASIN or affiliate link changed.
- Page remains IN_PROGRESS and unscored; do not start guide #2.


## 25 November 2026 — 10:46 Asia/Amman / 07:46 UTC — Samsung gate closure + Bosch/Shark source follow-up (documentation-only)

### Samsung UK VS28C9784QK/EU — runtime/manual gate closed
- Exact UK support page and official v0.7 manual were reviewed. The manual family scope includes VS28C97**** and therefore covers VS28C9784QK; the exact model's Samsung UK Business product page confirms two batteries and the 160-minute headline.
- Approved claim is limited to up to 160 minutes at minimum power with a non-motorised tool, using two batteries consecutively. This is not powered-floor-brush runtime. With the larger VCA-SBTC97 battery, manual runtime at MIN is approx. 100 min with a non-motorised tool; with the smaller VCA-SBTC97S/VCA-SBTD95 battery it is approx. 60 min. Powered brush runtimes are lower (Active Dual Brush: approx. 58/34 min at MIN for large/small battery; Slim LED Brush+: approx. 77/45 min).
- Battery details: VCA-SBTC97 Li-ion 25.2 V, 3970 mAh, 5 h charge; VCA-SBTC97S/VCA-SBTD95 Li-ion 25.2 V, 2200 mAh, 3.5 h charge. Do not infer optional family accessories as included; use exact SKU bundle list.
- Gate status: official manual discovery CLOSED; manual content review CLOSED for runtime/battery/charge/accessory caveats; runtime/battery-count evidence SATISFIED. Remaining commercial gate: exact live seller, condition and stock for UK destination. US VS28C9762UK/AA remains a separate evidence record.
- Sources: https://www.samsung.com/uk/support/model/VS28C9784QK/WA/ ; https://downloadcenter.samsung.com/content/UM/202508/20250811201509973/O_DJ68-00900C-07_IB_VS9700_EU_EN_250702.pdf ; https://www.samsung.com/uk/business/vacuum-cleaners/stick/bespoke-jet-plus-210w-all-in-one-clean-station-black-vs28c9784qk-eu/

### Bosch BCS1051GB — official weight labels compared; still withheld
- Bosch UK official product page labels 3.8 kg as “Measured weight, ready for op.”: https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB
- Bosch UK official support/specification page lists 2.9 kg as “Weight (ready for use with tube and floor nozzle)” and 5.3 kg as “Net weight”: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01
- Bosch official BSH specification PDF also reports 2.9 kg for ready-for-use with tube and floor nozzle: https://media3.bsh-group.com/Documents/specsheet/en-IE/BCS1051GB.pdf
- These are official manufacturer sources but the 2.9 kg and 3.8 kg ready/operational labels do not reconcile clearly. Net weight 5.3 kg is a separate label. Do not select one weight for editorial copy until Bosch clarifies measurement method/scope or a definitive manual/package label resolves it. Other official runtime details remain 100 min ECO non-electrical accessory, 80 min ECO powered floor nozzle, 30 min Auto powered nozzle, 13 min Turbo powered nozzle; one 5Ah 18V battery; 0.4 L; approx. 71 min charge.
- Manual listing is visible on official support pages, but actual manual contents have not yet been extracted. Manual-content gate remains OPEN.

### Shark US IZ862H — no official-hosted manual found in this pass
- Exact IZ862H/IZ800 owner-guide copies are available from third-party hosts, including https://manualsfile.com/product/k2zp91ivwkl.html and https://manuals.plus/m/22f03d9d160187fec6232a240f5b604b60b7d769be0e252e824d48533da4e4a5 . A PDF mirror at https://qcg-media.s3.amazonaws.com/media/uploads/118513/2022/06/20220630_202169_IZ800SeriesIBMPMv5LR3.pdf carries Sharkclean.com manual content, but is not hosted on an official SharkNinja domain.
- The manual mirror states 60 min ECO in hand-vac mode and 10 min Boost in hand-vac mode, with Clean Sense IQ runtime variable by debris/use; 3.5 h full charge; filter/dust-cup drying up to 48 h. These are secondary-hosted manual claims only and are NOT approved for manufacturer-verified editorial claims at this point.
- SharkNinja official parts pages corroborate IZ862H compatibility with battery XBATR725SL, charging cord XCHRIZ800 and dust-cup component, but do not establish full product specifications or manual instructions. Official support route: https://www.sharkninja.com/parts-support?SKU=IZ862H
- Primary-source/manual gate remains OPEN. Do not state voltage, weight, bin capacity, runtime, or care instructions as manufacturer-verified from these mirrors.

### Page state / release discipline
- Active page remains Cordless Vacuum Cleaners, IN_PROGRESS and unscored. Samsung UK evidence gate closed; Bosch weight/manual gates remain open; Shark US primary manual gate remains open; exact retailer/Amazon offer verification and UK/US market-fit comparison remain incomplete.
- Amazon direct-ASIN approvals remain 0/4 UK and 0/4 US. No ASIN, affiliate destination, catalogue/product/page content, source code, Cloudflare setting, sitemap, robots, PR merge or production deployment changed.
- Continue only the unresolved items above. Do not start guide #2 and do not repeat completed catalogue/SEO/CI/source checks.


## 25 November 2026 — 11:07 Asia/Amman / 08:07 UTC — Bosch manual access + Shark IZ862H guide corroboration (documentation-only)

### Shark US IZ862H — exact-series owner guide text now cross-checked; still secondary-hosted
- Search retrieved the 24-page IZ800 Series Owner's Guide explicitly associated with exact model IZ862H. The manual text identifies SharkNinja Operating LLC, Sharkclean.com and document code IZ800Series_IB_MP_Mv20; ManualsFile reports model IZ862H, series IZ800, document published 8 July 2022 and updated 15 Jan 2025. ManualsLib independently exposes the same IZ800 guide and exact IZ862H related-product association.
- Extracted claims from the guide: battery full charge approx. 3.5 hours; ECO runtime up to 60 minutes in handheld mode; Boost runtime up to 10 minutes in handheld mode; Clean Sense IQ runtime varies with use/debris; filters and dust cup should air-dry fully up to 48 hours after rinsing. The 60/10-minute claims are mode/handheld-specific, not universal floor-head runtime promises.
- This is a manual bearing manufacturer authorship and model-family association, but the copies retrieved are hosted by third-party manual libraries, not SharkNinja/Sharkclean. Therefore it is corroborative secondary-hosted evidence only; it does NOT close the official-hosted primary-source gate. Do not upgrade it to manufacturer-primary evidence or publish its claims as independently verified against the official manual until SharkNinja provides or exposes the same file on an official domain.
- References: https://manualsfile.com/product/k2zp91ivwkl.html ; https://www.manualslib.com/manual/3357248/Shark-Stratos-Clean-Sense-Iq-Multiflex-Iz862h.html ; https://www.manualslib.com/manual/2778286/shark-stratos-clean-sense-iq-multiflex-iz800-series.html
- SharkNinja Parts & Support page for SKU IZ862H was opened but the rendered content does not surface an IZ862H-specific manual or a model-specific document link. Official parts compatibility pages remain component-level corroboration only. Primary source gate remains OPEN.

### Bosch BCS1051GB — official manuals are listed, download contents not retrieved
- Bosch's exact E-Nr BCS1051GB/01 service page displays multiple User Manual and Interactive User Manual entries. The page's rendered web extraction does not expose the document download URLs, so no official user-manual content has yet been reviewed. Do not mark the manual-content gate complete.
- The official Bosch support specification page continues to list net weight 5.3 kg and ready-for-use with tube/floor nozzle 2.9 kg. Bosch product overview separately labels 3.8 kg “Measured weight, ready for op.”. Official spec sheet PDF search result also states 2.9 kg ready-for-use with tube/floor nozzle. These values use different labels and are not reconciled; keep one single weight claim out of editorial copy pending Bosch clarification.
- Bosch official support source: https://www.bosch-home.co.uk/en/productservice/BCS1051GB-01 ; support specification: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01 ; product overview: https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB ; official spec sheet: https://media3.bsh-group.com/Documents/specsheet/en-IE/BCS1051GB.pdf

### Status and next action
- No quality gate closed in this pass: Shark manual evidence is better corroborated but still third-party-hosted; Bosch official manual is listed but not extracted and weight remains unresolved.
- Active Cordless Vacuum Cleaners page remains IN_PROGRESS and unscored. Do not start guide #2. Continue with exact official manual acquisition (Bosch download endpoint / Bosch support clarification; SharkNinja official support response or official-hosted guide), exact current retail/Amazon offer verification and separate UK/US product-market comparison.
- No production, catalogue, product copy, affiliate destination, Cloudflare setting, sitemap, robots, merge, deployment or publication changes were made.


## 25 November 2026 — 11:55 Asia/Amman / 08:55 UTC — Bosch official manual extracted and runtime conditions verified (documentation-only)

### Bosch BCS1051GB — manual content now reviewed; runtime claim gate closed with scope
- The exact Bosch GB service page for E-Nr BCS1051GB/01 lists multiple User Manual entries. The exact product-specific manual landing URL was resolved as https://www.bosch-home.co.uk/manual/8001293734?productCode=BCS1051GB . Bosch's official BSH-hosted PDF is https://media3.bsh-group.com/Documents/8001293733_B.pdf (160-page multilingual Information for Use, cover identifies BBS10 / BCS10 / BKS10 / BSS10 / BXS10 family; English instructions pages 21–27). The product-specific Bosch manual page is the association evidence for BCS1051GB; the manual's family scope is recorded transparently.
- English manual pp.23–24 / extracted lines 924–942 states maximum runtime applies in Eco mode with non-electric accessories; other suction modes and accessories reduce runtime. Runtime table: 3.0Ah 60 min; 4.0Ah Power+ 80 min; 5.0Ah 100 min. The official BCS1051GB support specification confirms one 5.0Ah battery pack and maximum runtime 100 min, so the safe claim is “up to 100 minutes in Eco mode with a non-electric accessory on the supplied 5.0Ah battery”; do not state 100 min with the powered MicroClean floor nozzle.
- The manual's English section also says actual displayed remaining runtime may vary and battery capacity/runtime naturally decline with Li-ion battery ageing (lines 969–979). It instructs not to let filters contact liquids (lines 1057–1064). This is an additional care note; do not confuse with other product families' washable-filter claims.
- Gate status: official manual discovery and content review SATISFIED for BCS10-family operation, runtime conditions, charging/battery handling and maintenance instructions, linked through exact BCS1051GB product-specific Bosch manual page. This does NOT resolve weight. Weight still remains withheld: Bosch support says 2.9 kg ready for use with tube/floor nozzle and 5.3 kg net; Bosch product page says 3.8 kg measured weight ready for operation. Manual does not give a comparable weight measurement or reconcile these labels. Keep weight claim out of editorial copy pending Bosch clarification.
- Sources: https://www.bosch-home.co.uk/en/productservice/BCS1051GB-01 ; https://www.bosch-home.co.uk/manual/8001293734?productCode=BCS1051GB ; https://media3.bsh-group.com/Documents/8001293733_B.pdf ; https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01 ; https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB

### Shark IZ862H — official-source status unchanged
- No SharkNinja/Sharkclean-hosted exact IZ862H/IZ800-series owner guide surfaced in this search. The third-party-hosted copy remains secondary corroboration only. Official parts support pages verify compatible parts but not full product specifications/manual instructions. Keep the primary manual gate OPEN.

### Page state / next action
- One new evidence gate closed: Bosch BCS1051GB manual/runtime/care content (with exact family-scope caveat). Bosch weight remains a hard publication hold for weight only; it does not invalidate other independently supported specs.
- Shark US official manual gate remains open. Exact retailer/Amazon offer checks and UK/US buyer-intent/product disposition remain open. Cordless Vacuum Cleaners page remains IN_PROGRESS and unscored. Do not start guide #2 or repeat completed checks.
- No catalogue/product/page content, affiliate destination, source code, Cloudflare setting, sitemap, robots, PR merge, production deployment or publication changed.
