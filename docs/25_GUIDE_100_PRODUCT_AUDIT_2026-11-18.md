# SmartPickHub — 25-guide / 100-product audit ledger

**Audit date:** 18 November 2026  
**Catalogue file reviewed:** `src/data/products.json`  
**Catalogue blob:** `257c43dbde0a66534a2a8139e5a34194f8317c34`  
**Scope:** all 25 guide records and all 100 product records; structural integrity plus targeted primary-source spot checks.  
**Decision:** retain all 25 guides as drafts. This is an audit ledger, not publication approval.

## 1. Whole-catalogue integrity

- 25 guides and 100 product records are present (4 products per guide).
- All 100 records have the required base fields: name, bestFor, US and UK search phrase, pros, cons, verdict, manufacturer source and source note.
- 100 source URL strings are unique.
- 69 products have identical US and UK marketplace search phrases. This is a review flag, not proof of regional SKU equivalence. Shared accessory/brand names may be legitimate, but exact market listings still require confirmation.
- No record is approved for publication; catalogue metadata remains research-draft/unapproved.
- Search phrases are not ASINs. Do not convert them into direct product links without exact marketplace listing, seller/condition and live destination verification.
- Product image readiness remains 0 approved, 0 pending candidate, 100 without approved product images.

Structural completeness does not establish factual accuracy, retailer availability, warranty, product equivalence, legal image reuse, or editorial quality.

## 2. Guide-by-guide audit disposition

Legend:
- **Primary-source evidence found:** a current manufacturer/support source was found for at least one important claim in this pass.
- **Regional risk:** US/UK model, voltage, radio, plug, language/layout, accessory or warranty distinctions need exact listing-level checks.
- **Open:** unresolved evidence or full editorial review remains.

| # | Guide | Audit disposition |
|---:|---|---|
| 1 | Home Office Ergonomics | Open. Four Logitech records are structurally complete. Verify UK keyboard layout, handedness/colour and exact regional product identifiers. Identical search phrases do not establish identical retail SKUs. |
| 2 | Portable Power & Travel Tech | Regional electrical gate. EcoFlow RIVER 2 UK source states 256Wh, 300W AC, 230V/50–60Hz and 220–240V AC input. Jackery Europe JE-300B source states 288Wh and 220–240V/50Hz AC input; US counterpart is a different electrical specification. Keep strict US/UK separation. |
| 3 | Smart Home Security Cameras | Primary sources found. eufy UK says SoloCam S340 has 8GB on-device storage and works standalone without a hub; HomeBase 3 adds storage/features. Ring's current support page calls it Battery Doorbell 2K Plus and documents 2K, dual-band Wi-Fi and transformer requirements; subscription-dependent features must be labelled. Google UK says Nest Cam battery is up to 1080p/30fps, requires Google Home (not Nest app), includes up to 3 hours event history; extended history/24-7 recording require paid subscription and continuous power conditions. |
| 4 | Wi-Fi 7 Routers & Mesh | Primary sources found. ASUS RT-BE96U official specification confirms Wi-Fi 7 and 10GbE ports. eero Pro 7 support lists 100–240V power supply and two 5GbE ports. NETGEAR RBE773 regional technical sheet warns Wi-Fi channels are country-specific and 6GHz is indoor-limited. Confirm UK regulatory/firmware SKU and regional channel support; do not compare theoretical PHY rates as real throughput. |
| 5 | USB-C GaN Chargers | Primary sources found. Anker A2688 lists 100–240V, 50–60Hz; UGREEN SKU 40749 lists 100–240V, 50/60Hz; Belkin WCH015 support says 200W total and up to 140W single port. Verify the fourth SKU 35539 against its exact official sheet and ensure port sharing/PD profiles are not conflated with total output. |
| 6 | Webcams | Primary source found for Insta360 Link 2: official specs list 4K up to 30fps, 1080p up to 60fps, USB-C and 5V/1A. Remaining models need exact current official specs, software/OS support and included mount/cable checks. Avoid implying 4K capture equals 4K at 60fps. |
| 7 | 4K USB-C Monitors | Primary source found for Dell U2723QE: 27-inch 4K/60Hz, USB-C hub and 90W power delivery. Check P2723QE separately (do not reuse U2723QE's 90W claim); verify ASUS/BenQ colour-gamut, USB-C PD and regional package details from exact spec sheets. |
| 8 | Thunderbolt / USB-C Docks | Open. Must distinguish Thunderbolt 4/5 from USB-C-only, host compatibility, display limits by macOS/Windows/GPU, power delivery and downstream port bandwidth. Verify exact model revision and included power supply for all four products. |
| 9 | Portable SSDs | Primary sources found. SanDisk Extreme PRO model family SDSSDE81 lists USB 3.2 Gen 2x2 and up to 2,000MB/s; Kingston XS2000 also uses USB 3.2 Gen 2x2. Kingston explicitly warns Macs without USB 3.2 Gen 2x2 do not achieve advertised speed. Guide must explain host-interface bottlenecks and not imply USB4/Thunderbolt automatically yields 20Gbps for Gen 2x2 drives. |
| 10 | Air Fryers | Strong regional gate. Philips NA555/09 UK official page specifies 9L, 2750W, 220–240V/50Hz. Ninja AF400UK official UK page specifies 240V/2470W. COSORI US CAF-DC601-KUS manual specifies 120V/60Hz/1725W; do not present it as electrically interchangeable with the UK 6L version. Verify Instant and all US counterparts by exact model suffix. |
| 11 | Cordless Vacuums | Primary source found for Miele Triflex HX2 UK material number 11819170: 25.2V battery, 3.6kg, replaceable battery, 60-minute claim only at low setting with PowerUnit solo; with electric accessories runtime differs. Shark Stratos US IZ862H and UK IZ400UK are different regional models/configurations. Verify Dyson/Samsung exact UK/US model codes, battery/runtime conditions and accessory bundles. |
| 12 | Cordless Drills | High regional battery-platform gate. US DEWALT 20V MAX/12V MAX model numbers must not be treated as equivalent to UK 18V XR/12V XR kits. Verify exact bare-tool vs kit suffix, included batteries/charger, voltage platform and chuck/torque details. DCD703F1 has no exact UK counterpart confirmed in the earlier pass. |
| 13 | Robot Vacuums & Mops | Major regional identity review required. Roborock's current UK store/category lists Saros 10, Qrevo Edge 2 and Qrevo 2 Pro; it does not establish UK identity for the catalogue's Saros 10R or Qrevo CurvX. Current UK family also includes Qrevo Curv 2 Pro, which is not proof of equivalence to CurvX. Do not substitute models or claim equivalence without a manufacturer cross-reference. |
| 14 | Noise-Cancelling Headphones | Primary sources found for Sony WH-1000XM6 and XM5 UK specs, plus ULT WEAR WH-ULT900N. Check exact WH-1000XM4C suffix: do not silently conflate with WH-1000XM4. Verify battery life conditions, codecs, multipoint and microphone/ANC feature claims. |
| 15 | Wireless Earbuds | Open. Verify WF-1000XM6 exists as the exact model on official Sony UK/US support and product pages before retaining it; confirm Sony XM5 and exact AirPods generations. Check iOS/Android feature differences, codec support, spatial audio and battery tests/conditions. |
| 16 | Air Purifiers | Regional electrical/model gate. Earlier work distinguished Levoit UK-market listings from US suffixes and did not confirm exact UK Vital 200S counterpart. Verify exact UK product identity, voltage, CADR test basis, room-size assumptions, filter SKU and app/cloud requirements. |
| 17 | Espresso Machines | Strong UK evidence already compiled in `docs/EDITORIAL_DRAFT_ESPRESSO_UK.md`: four Sage UK model families SES500/SES870/SES878/SES985 with UK manuals and electrical ratings. Keep US Breville BES identifiers separate; exact suffix, accessories, dimensions, retailer SKU and active offer remain to be checked. The draft is not approved. |
| 18 | iPads | Apple official compare page confirms iPad Pro M5, iPad Air M4, iPad A16 and iPad mini A20 Pro as current model names in the indexed comparison. Verify each guide title/storage/connectivity and regional cellular/eSIM bands; don't mix generations or Wi-Fi and cellular variants. |
| 19 | Dash Cameras | Garmin official comparison source confirms X310, X210, X110 and Mini 3 as model family members. Still verify UK sales pages/part numbers, power/parking mode requirements, memory card compatibility and exact in-box accessories. |
| 20 | Portable Projectors | XGIMI UK official MoGo 4 page identifies model WK08K, 1080p, 450 ISO lumens and other exact specs. Epson EF-30 UK exact product page/SKU was not located in earlier targeted work; keep its UK commercial identity unverified. Verify EF21 and CO-FH02 exact regional variants, brightness measurement standard, streaming licences and power input. |
| 21 | Home NAS | Official Synology model-specific source and prior UK verification exist for DS1525+, DS925+, DS725+ and DS224+. DS224+ is older platform; UK store refurbished listing sold out did not establish all new stock unavailable. Confirm PSU input, drive compatibility list, memory limits, expansion and warranty by exact regional SKU. |
| 22 | Electric Toothbrushes | Oral-B UK comparison page confirms iO3/iO6/iO9/iO10 feature tiers. Avoid treating all brush heads/chargers/cases as identical; confirm bundle, regional charger and head compatibility. Subscription/app claims should not be invented. |
| 23 | Gaming Mice | Open. Verify PRO X2 SUPERSTRIKE exact product release/specification, G309 battery/power modes and LIGHTSPEED/Bluetooth differences, G502 X PLUS sensor/weight and Superlight 2 polling/sensor claims. Confirm UK/US colour and bundle variants. |
| 24 | Smartwatches | Apple UK comparison confirms Series 12, SE 3 and Ultra 4 model families. Garmin Forerunner 265 is an older generation; editorially explain its positioning rather than implying it is the newest Garmin running watch. Verify sizes, GPS/cellular availability, region-specific health feature availability and supported phone OS. |
| 25 | Home Printers | High regional electrical and SKU gate. Earlier research confirmed some Brother UK models (MFC-L8390CDW, HL-L3240CDW, DCP-L2660DW) are not interchangeable with US MFC-L3780CDW. Current catalogue models MFC-L8395CDW, MFC-L3780CDW, HL-L3280CDW and DCP-L2640DW each require exact official UK and US model pages, voltage and toner/drum part numbers. Do not map similar model numbers as equivalents. |

## 3. Confirmed primary-source findings recorded in this pass

- EcoFlow RIVER 2 UK: https://uk.ecoflow.com/products/river-2-portable-power-station
- Jackery Explorer 300 Plus Europe: https://helpcenter.eu.jackery.com/hc/en-gb/articles/52682971950363-Explorer-300-Plus-Basic-Information
- eufy SoloCam S340 UK: https://www.eufy.com/uk/solocam-s340
- Ring Battery Doorbell 2K Plus UK support: https://ring.com/gb/en/support/products/doorbells/battery-doorbell-2k-plus
- Google Nest Cam Battery UK specs: https://store.google.com/gb/product/nest_cam_battery_specs?hl=en-GB
- ASUS RT-BE96U specs: https://www.asus.com/networking-iot-servers/wifi-routers/asus-wifi-routers/rt-be96u/techspec/
- eero Pro 7 support: https://www.eero.com/support/articles/eero-pro-7
- NETGEAR RBE773 support/specs: https://www.netgear.com/support/product/rbe773
- Anker A2688: https://www.anker.com/products/a2688-anker-prime-charger-100w-3-ports-gan
- UGREEN 40749: https://uk.ugreen.com/collections/gan-charger/products/ugreen-nexode-100w-usb-c-gan-charger-4-ports-wall-charger
- Belkin WCH015: https://www.belkin.com/uk/support-article/?articleNum=336310
- Insta360 Link 2: https://www.insta360.com/us/product/insta360-link2
- Dell U2723QE: https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bdpf/
- SanDisk Extreme PRO: https://www.sandisk.com/en-gb/products/ssd/external-ssd/portable-ssd-sandisk-extreme-pro-usb-3-2
- Kingston XS2000: https://www.kingston.com/unitedkingdom/en/support/technical/products/sxs2000
- Philips NA555/09: https://www.home-appliances.philips/gb/en/p/NA555_09
- Ninja AF400UK: https://www.sharkninja.co.uk/ninja-foodi-max-dual-zone-air-fryer-af400uk/AF400UK.html
- Miele Triflex HX2 UK technical sheet: https://media.miele.com/downloads/n-/gb/FS_11819170_GBE_GB-en-GB.pdf
- Roborock UK store/category: https://uk.roborock.com/pages/roborock-store and https://uk.roborock.com/pages/robot-vacuums
- Sony WH-1000XM6 UK: https://www.sony.co.uk/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm6/specifications
- Sony WH-1000XM5 UK: https://www.sony.co.uk/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm5/specifications
- Sony ULT WEAR UK: https://www.sony.co.uk/electronics/support/wireless-headphones-bluetooth-headphones/wh-ult900n/specifications
- Apple iPad compare: https://www.apple.com/ipad/compare/
- Garmin dash cam comparison: https://support.garmin.com/en-US/enUS/?faq=K5Kkj7NNG59OMjVi1NwIl5
- XGIMI MoGo 4 UK: https://uk.xgimi.com/products/mogo-4
- Oral-B iO UK comparison: https://www.oralb.co.uk/en-gb/oral-health/why-oral-b/electric-toothbrushes/which-oral-b-io-is-right-for-me
- Apple Watch compare: https://www.apple.com/uk/watch/compare/?modelList=watch-se-3%2Cwatch-ultra-4

## 4. What remains unresolved — do not hide these

1. This pass has not verified every individual manufacturer claim across all 100 products; it is a full catalogue structure sweep plus targeted source checks. Product-level source and listing verification must be completed before approval.
2. Live Amazon UK/US listing identity, seller, condition, stock and active offer are not verified for all 100 products. Current search phrases are not direct offers.
3. Exact UK counterparts remain unconfirmed for some product records, especially Roborock Saros 10R/Qrevo CurvX, Epson EF-30 and the DEWALT DCD703F1. Similar model names do not prove equivalence.
4. The 69 same-phrase records require a documented market-equivalence decision or a market-specific search phrase. Do not change phrases merely to make them look different.
5. No product photo has been cleared for commercial reuse. Do not use manufacturer images without permission or a licence covering this use.
6. All 25 guides need full editorial read-through, source citation placement, mobile/desktop rendering review, disclosure check and explicit human approval.
7. No guide is approved for publication. Do not change editorialStatus, RSS, sitemap, noindex, robots, IndexNow, production or Pinterest as a result of this audit.

## 5. Required completion sequence for this 25-guide batch

- Resolve product identity and regional variant for all 100 records.
- Recheck source links and extract only claims actually supported by the manufacturer documentation.
- Correct model names, electrical values, compatibility, package contents, subscription caveats and outdated claims where evidence is conclusive.
- Replace unsupported products with better-supported exact models only after documenting why; do not silently swap products.
- Verify Amazon destination identity and tracking construction for each market; keep search links when no direct offer is verified.
- Complete editorial rewrite/consistency review for all 25 guides.
- Complete image provenance and human review.
- Run the full CI suite and inspect the artifact for the final catalogue commit.
- Obtain owner/editorial approval before marking any guide approved, publishing, indexing or creating Pinterest posts.

## 6. Execution status

- Audit ledger created on the development branch only.
- No product records or editorial statuses were changed in this pass.
- No product was approved, no image was approved, no Amazon link was upgraded to a direct ASIN, and no public publication or indexing occurred.
- Continue with evidence-backed corrections in controlled commits; keep unresolved records visibly unapproved.


## 19 November 2026 — Owner-directed launch scope adjustment

- The project owner clarified that exhaustive UK/US model-by-model parity and exceptionally high-granularity verification are not launch goals; the priority is to complete the full 25-guide / 100-product batch and move toward launch.
- Adopted a practical **UK-first** catalogue policy: Amazon UK is the primary shopping destination; US fields remain secondary/optional and do not require exhaustive parity checks.
- Minor regional SKU differences no longer block a guide. Material safety and compatibility distinctions (for example voltage, plug, battery platform, radio/regulatory constraints) must still not be misrepresented.
- Updated only the catalogue metadata/policy in `src/data/products.json`; all 25 guides and 100 product records remain present. No product names, claims, affiliate destinations, image records or editorial approval states were changed in this policy update.
- CI #675 for the prior audit-ledger commit `949e9103fd2504b479810380b6c4321b13ba01f9` completed successfully (run ID `44394492800`). This result predates the current policy metadata change; a new CI run is required for the new head.
- This is a workflow-scope decision, not publication approval. Guides remain research drafts; PR #1 remains Draft/open/unmerged; no production, indexing, Pinterest or Amazon account action occurred.

### Next actions
1. Apply a practical editorial pass across all 25 guides, focusing on clarity, obvious errors, broken links and material safety/compatibility issues rather than exhaustive regional SKU parity.
2. Run CI on the updated catalogue head and inspect the result.
3. Prepare a consolidated release candidate and concise launch checklist for owner review; keep all public release actions gated on explicit approval.


## 19 November 2026 — Practical editorial cleanup batch 1

- Owner gave advance approval to continue the implementation work. This authorises ongoing development-branch content and documentation corrections within the agreed UK-first scope; it does not override the standing release safeguards for merge, public deployment, indexing, Pinterest publishing or production configuration.
- Re-read the live `src/data/products.json` on `automation/bootstrap` before editing. Confirmed 25 guides / 100 product records and all 100 records retain a source URL, UK identifier and US identifier.
- Removed 39 instances of the repeated generic positive bullet “Manufacturer documentation provides a model-family reference for checking the exact regional configuration.” and 49 instances of the repeated generic caution “Do not compare advertised figures across brands without checking the manufacturer's test method and bundle contents.” These statements added no product-specific value. No product was left with an empty pros or cons array; the minimum remaining count is one bullet per field, and many retain several.
- Updated catalogue `lastResearched` date to 2026-11-19. No product names, product claims, source URLs, marketplace identifiers, affiliate destinations, image metadata or publication flags were changed in this batch.
- Data cleanup commit: `5727e5d414ed34db491a5b4e7220b9c1f84566dc`.
- CI #683 (run ID `44398134402`) was created for that exact commit and was queued/pending at the last check. It has not yet been confirmed successful.
- Earlier CI #681 (run ID `44397730335`) was in progress for the previous documentation/policy head and does not validate this content cleanup.
- Catalogue remains 25 drafts / 100 products; zero guides approved, zero product images approved. No publication, merge, production deployment, indexing or Pinterest action occurred.

### Next actions
1. Recheck CI #683 and inspect job outcome; resolve any failures before more catalogue edits.
2. Continue practical editorial cleanup of the 25 guides, prioritising material inaccuracies, outdated/discontinued items, vague verdicts, readability and UK buying usefulness. Avoid exhaustive US/UK parity checks.
3. Where a product is clearly legacy/discontinued or unsuitable as a current-buy recommendation, replace or reframe only when the source supports the change; do not invent current stock or prices.
4. Recheck affiliate link construction and generated guide pages after data edits. Keep product imagery in the approved/licensed workflow.
5. Update handoff and launch-readiness checklist; keep PR #1 Draft/open/unmerged and production/indexing/Pinterest gated for explicit release approval.


## 19 November 2026 — UK-first corrections: printers and projector

- **Printer guide (#25):** replaced four US 110–120V product recommendations with UK-listed Brother models: MFC-L8390CDW, MFC-L3740CDW, HL-L3240CDW and DCP-L2660DW. The UK search identifiers and source URLs now point to the matching UK models; US identifiers retain the previous US model phrases as secondary marketplace searches. Updated the guide title and summary to UK-first. Manufacturer UK pages confirm 220–240V AC, 50/60Hz and the respective print/scan/network features.
- Official sources used: MFC-L8390CDW https://store.brother.co.uk/devices/laser/mfc/mfcl8390cdw ; MFC-L3740CDW https://store.brother.co.uk/devices/laser/mfc/mfcl3740cdw ; HL-L3240CDW https://store.brother.co.uk/devices/laser/hl/hll3240cdw ; DCP-L2660DW https://store.brother.co.uk/devices/laser/dcp/dcpl2660dw .
- **Projector guide (#20):** corrected Epson CO-FH02 from “discontinued” to UK-listed product. Updated its product name, UK manufacturer source, pros/cons and verdict. Epson UK lists SKU V11HA85040, Full HD 1080p, 3,000 lumens, 3LCD, Android TV and current UK listing availability. Source: https://www.epson.co.uk/en_GB/products/projector/home-cinema/co-fh02/p/35475 . Do not display live price or guarantee stock; retailer availability can change.
- Data commits: printer correction `0609a73eb8af1517c21c0eb76aed09e3b8e361af`; projector correction `3bb10606a361ed5136d75dbfdc187074b8f5a8b6`.
- Revalidated catalogue structure after these edits: 25 guides / 100 products; all 100 retain source URL and both market identifiers; no empty pros/cons arrays.
- CI #681 (run ID `44397730335`) and #683 (run ID `44398134402`) were cancelled during overlapping PR workflow activity. On #681, type/content checks, importer tests, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe and desktop/mobile Lighthouse completed successfully before cancellation during representative template Lighthouse. #683 was cancelled during Astro type/content checks. Neither is a passing full CI result for the current head. A complete successful run on the latest content head remains required.
- No guide approval, merge, production deploy, indexing, Pinterest publishing or image approval occurred.

### Next actions
1. Obtain one complete successful CI run on the current PR head; avoid overlapping commits while it runs.
2. Continue practical UK-first editorial review, particularly current-buy status and material electrical/compatibility issues.
3. Inspect rendered pages and final affiliate URLs on preview; keep noindex/robots protections in place.
4. Prepare launch candidate and approval checkpoint; public release still requires explicit release approval.


## 19 November 2026 — Projector guide UK model corrections

- Replaced the US EF21 legacy record in guide #20 with the UK-listed Epson EF-21G Mini Laser Projector, UK SKU V11HB35340. Updated UK identifier, source URL, pros, cons, verdict and source note. Epson UK lists Full HD, 1,000-lumen white/colour output, 3LCD laser, Google TV, Bluetooth speakers, up to 150-inch display, 2.3kg and 100–240V input. Epson UK lists EF-21G in stock; the EF-21W page is marked discontinued, so the variants are explicitly distinguished.
- Source: https://www.epson.co.uk/en_GB/products/projector/home-cinema/epson-ef-21g%2C-mini-laser-projector%2C-1%2C000-lumens%2C-up-to-150-inch-display%2C-google-tv%E2%84%A2-and-bluetooth-speaker%2C-portable/p/46374 .
- Data commit: `c64145e14d07686b1c54b34c645c3e097ac9d909`.
- Catalogue still contains 25 guides / 100 products; all records retain source URL and UK/US marketplace identifiers. All products retain non-empty pros and cons.
- No prices or guaranteed retailer stock are displayed; source stock labels are recorded only as point-in-time evidence.
- CI #681 and #683 remain cancelled during overlapping PR workflow activity. No complete successful CI run has been observed for the latest catalogue commits. Obtain a clean full run before declaring the release candidate validated.
- No publication approval, merge, production deployment, indexing or Pinterest publishing occurred.


## 19 November 2026 — CI #703 quality/security artifact review

- Full workflow run #703 / ID `44398753742` passed on PR source head `de3e612c896d924ffe7bce81d83768a64c234880`. Artifact ID `14472018692` (`smartpickhub-quality-reports`) was downloaded and inspected.
- Catalogue validation passed: 25 guides / 100 products; 100 UK and 100 US affiliate URL-construction checks; zero errors. Smoke test passed on 29 generated HTML pages with zero route errors. Importer dry-run unit and isolated integration tests passed.
- npm audit reported zero vulnerabilities across 362 dependency entries in this run. This is a point-in-time result; it does not alone close the separately tracked picomatch advisory review.
- axe audited all 28 routes: zero violations and 27 incomplete contrast checks. The incomplete checks remain open for manual rendered-state review; no full WCAG sign-off is claimed.
- Lighthouse five-page sample (home desktop/mobile, guide index, affiliate disclosure and one guide) scored 100 for Performance, Accessibility and Best Practices. SEO 66–69 reflects intentional noindex/crawl blocking in preview and is not a reason to remove those protections.
- Product-image readiness remains 0 approved, 0 complete candidates pending review and 100 products without approved product images.
- The consolidated report records synthetic pull-request merge SHA `700db2eed1271f6fe15b7710233c48b67e32bc7a` via GitHub Actions `GITHUB_SHA`; run/artifact metadata confirm the actual PR source head is `de3e612...`. This is expected for pull_request workflows.
- PR #1 remains Draft/open/unmerged; all guides remain research drafts. No image approvals, publication, merge, production deployment, indexing or Pinterest publishing occurred.

### Next actions
1. Continue the bounded UK-first editorial review; prioritise dated models, meaningful product-specific verdicts and material compatibility issues.
2. Keep the 27 incomplete contrast findings open until rendered-state review is documented.
3. Preserve the image-rights and human-approval gate.
4. Revisit the picomatch advisory by its existing 2 December 2026 review date.
