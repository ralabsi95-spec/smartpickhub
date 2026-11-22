# SmartPickHub — Expanded editorial scan of all 25 guides (22 November 2026)

**Branch scanned:** `main`  
**Data source:** `src/data/products.json`, blob `bb261aff8200a0b5a8f11966080d4ed11376e20d`  
**Scope:** All 25 guide records and 100 product records; recursive phrase scan plus manual classification of flagged passages.  
**Status:** Read-only audit. This is a language/consistency scan, not a complete external fact-check of every product specification. No production files changed.

## Executive findings

- 25/25 guide records carry `editorialStatus: "Approved for publication"`. The guide index template renders this value to visitors; remove the display element from the index template, not the editorial field from the data.
- Research-process residue / internal audit language was found in at least six product notes or source notes across six guides.
- Five guide records mention Jordan. Four are electrical/region cautions; one is an Apple Jordan source attribution. Review individually, do not blanket-remove.
- The scan did not find an explicit claim that SmartPickHub physically tested products. Multiple guides explicitly disclaim hands-on testing. The phrase “hands-on” in espresso-machine feature descriptions means manual operation (e.g. milk texturing/workflow), not product testing; retain unless context review shows ambiguity.
- Several uncertainty statements are buyer-protective and should remain, but be rewritten in direct consumer language where they currently narrate the research process.

## A. Visitor-facing workflow label

**Affected template:** `src/pages/guides/index.astro`, `guide-card-status` span.  
**Affected records:** all 25 guides.  
**Finding:** all 25 show “Approved for publication” beneath their card summaries.  
**Recommendation:** remove the status span from the public index. Keep `editorialStatus` and `publicationStatus` in the internal data model; do not erase workflow state.

## B. Confirmed research-process wording

| Guide | Field / product | Current wording or issue | Proposed buyer-facing treatment |
|---|---|---|---|
| Wi-Fi 7 Home Mesh Routers | Product 4, NETGEAR RBE773, availabilityNote | “in the captured specifications” | “The published UK specification does not state the adapters’ AC input range. Check the rating label supplied with the exact UK pack before connecting it to mains power.” |
| Air Fryers | Product 4, COSORI Turbo Blaze, availabilityNote | “in the captured data” | “The UK product page does not clearly state the voltage. Check the rating plate or manual for the exact UK model before purchase. The US 120V version is not suitable for UK mains.” |
| Cordless Drills | Product 4, DEWALT DCD703F1, availabilityNote | “was confirmed in this pass” | “A directly equivalent UK version of the DCD703F1 has not been verified. The DCD701N-XJ is a different 12V XR drill-driver, not a confirmed equivalent.” |
| Home Air Purifiers | Product 4, Levoit Vital 200S-P, sourceNote | “in this review” | “Levoit’s UK air-purifier range does not currently show a confirmed direct equivalent to the US Vital 200S-P. Do not treat the Vital 100S or another model as identical.” Recheck current range before publication. |
| Home Air Purifiers | Product 4, availabilityNote | “in the UK store collection reviewed” | “A direct UK counterpart has not been verified. The US package’s adapter and warranty may differ; check the adapter’s input rating and local warranty before purchase.” |
| Home Printers | Product 2, Brother MFC-L3780CDW, availabilityNote | “This audit has not yet confirmed” | “The US MFC-L3780CDW is rated for 110–120V AC. A directly equivalent UK model has not been verified. Choose a Brother UK model rated for 220–240V and compare duplex scanning, ADF and networking.” |

The above language changes preserve uncertainty and safety rather than converting unknowns into unsupported positive claims.

## C. Regional references to Jordan

| Guide | Context | Recommendation |
|---|---|---|
| Portable Power & Travel Tech | RIVER 2 US 120V vs UK/EU 230V warning | Keep the electrical warning. Consider changing “UK/Jordan mains” to “UK 230V mains” only if the intended audience is strictly UK buyers; do not weaken the US-vs-UK voltage distinction. |
| Air Fryers | COSORI US 120V warning | Keep the warning; “UK mains” is sufficient for the UK-focused guide if the exact model distinction remains clear. |
| Home Air Purifiers | Levoit US adapter and warranty warning | Keep the adapter/voltage caution. Replace “UK/Jordan mains” with “UK mains” for audience consistency if no Jordan-specific advice is intended. |
| Home Printers | Brother US 110–120V warning | Keep the warning; use “UK mains” rather than adding Jordan as a target market. |
| Smartwatches | Apple Jordan product page used as source for Ultra 4 specifications | Not a visitor-facing Jordan targeting claim. Keep source attribution if it remains the actual source supporting the model-specific claims; separately verify the source and country-specific cellular/satellite statements. |

## D. Other uncertainty wording — not automatically a defect

These statements are not all internal leakage. They can be important safeguards but should be phrased for buyers:
- Wi-Fi 7 / NETGEAR: exact adapter AC input range is not stated in the linked product page; check the physical rating label.
- USB-C GaN / UGREEN: the page does not publish a complete simultaneous multi-port allocation table; do not imply every port can supply the maximum independently.
- Robot vacuum / Roborock: matching UK Saros 10R listing not confirmed; do not substitute the differently named Saros 10.
- Home Printers / Brother: distinguish the US MFC-L3780CDW from the UK models; never imply identical electrical versions.
- Levoit: distinguish the US Vital 200S-P from other UK range models.
- DEWALT: DCD701N-XJ is not an equivalent to the DCD703F1.

Retain clear, evidence-based caveats. Remove only language that describes the author’s research process rather than the buyer’s decision.

## E. Testing-claim and disclosure scan

- The scan found repeated explicit disclaimers such as “not hands-on test results” and “not hands-on testing”. These are appropriate and should remain.
- No explicit first-person statement that SmartPickHub physically tested a product was found in this phrase scan.
- “Hands-on espresso workflow” and “hands-on milk texturing” describe the user's manual operating experience, not testing by the publisher. They are not evidence of fabricated testing.
- Continue checking page copy and structured data for any ranking or test claims that imply practical testing.

## F. Recommended change package — proposal only

1. In `src/pages/guides/index.astro`, remove the visitor-facing `guide-card-status` span while retaining editorial status in JSON.
2. Rewrite the six research-process passages in section B, after rechecking the linked manufacturer pages and preserving exact model/voltage cautions.
3. Standardise the four regional safety notes to UK-focused wording where appropriate; retain the Apple Jordan source as attribution if verified.
4. Run build, catalogue validation, smoke, accessibility and rendered-page checks on a separate branch once GitHub Actions quota is confirmed. Preview and inspect all 25 guides before considering merge.
5. Do not update `publishedAt` or JSON-LD `dateModified` unless substantive page content is changed and the date is genuinely updated.

## G. Change-control status

No change was made to `main`, product data, templates, affiliate links, page metadata, Sitemap, robots, Cloudflare settings or production. No deployment, index request, product import, paid service or paid credit use occurred. This document is a review record and proposal, not publication approval.
