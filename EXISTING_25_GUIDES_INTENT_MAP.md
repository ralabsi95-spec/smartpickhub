# SmartPickHub — Existing 25-Guide Search Intent & Conversion Map

**Status:** Research planning artifact only. It does not change guide copy, metadata, product records, routes, affiliate links, sitemap or publication state.
**Prepared:** 19 November 2026
**Market priority:** UK first (en-GB); US second (en-US).
**Catalogue baseline:** 25 published guides / 100 product records, sourced from `src/data/products.json` on `main`.

## Purpose and rules

Map each existing canonical guide to one principal buyer problem, a provisional primary query, supporting sub-intents and the next evidence needed. This is a prioritisation framework, not a claim that every phrase has measured demand or that any page currently ranks.

- **All query phrases below are hypotheses** unless explicitly identified in the 19 November OpenSEO snapshot.
- Do not add pages for close variants. Improve the existing canonical guide when the intent is already served.
- Do not combine UK and US specifications, models, availability, warranties or affiliate destinations.
- Do not invent volume, CPC, difficulty, rank, clicks, conversions, prices or reviews. Store unknown metrics as null until a named source and collection date exist.
- Treat the primary query as a page-level intent target, not a requirement to repeat exact-match wording unnaturally.
- Keep product identity and claims tied to manufacturer/primary sources. Marketplace search URLs remain search destinations, not verified direct listings.
- A future GSC export should override these hypotheses where real query/impression data shows a different dominant intent.

## Existing guide map

| # | Canonical guide (slug) | Provisional UK primary query | Supporting buyer intents to satisfy | Conversion/evidence focus |
|---:|---|---|---|---|
| 1 | `home-office-ergonomics-us-uk` | ergonomic keyboard and mouse for home office | vertical vs conventional mouse; split/ergonomic keyboard; small desk; wrist comfort; OS/device compatibility | Explain shape, layout, connectivity and adjustment trade-offs; avoid medical claims |
| 2 | `portable-power-travel-tech-us-uk` | best portable power station for travel | power bank vs power station; capacity and output; camping; airline battery limits; UK/US mains and plugs | Separate portable power stations from carry-on power banks; cite airline rules and regional electrical details |
| 3 | `smart-home-security-cameras-us-uk` | best outdoor security camera | battery vs wired vs solar; local storage vs cloud; subscription-free options; Wi-Fi; doorbell vs camera | Make storage/subscription trade-offs prominent; verify exact regional model and service terms |
| 4 | `wifi-7-home-mesh-routers-us-uk` | best Wi-Fi 7 mesh system | router vs mesh; large-home coverage; wired backhaul; multi-gig ports; ISP/fibre compatibility | Clarify node count, Ethernet port speeds and client-device requirements |
| 5 | `usb-c-gan-chargers-us-uk` | best multi-port USB-C GaN charger | laptop charging; total shared wattage; USB-C PD/PPS; travel plug; cable requirements | Compare per-port and combined output, not headline wattage alone |
| 6 | `webcams-video-calls-streaming-us-uk` | best webcam for video calls | 4K vs 1080p; autofocus; field of view; low light; privacy shutter; streaming | Match resolution to bandwidth, software support and real use; distinguish native resolution from software effects |
| 7 | `4k-usb-c-monitors-home-office-us-uk` | best 27-inch 4K USB-C monitor | USB-C power delivery; colour coverage; Mac/Windows; ergonomics; hub ports | Verify exact panel, USB-C host charging and regional model; separate measured colour data from marketing claims |
| 8 | `thunderbolt-usb-c-docking-stations-us-uk` | best Thunderbolt docking station | Thunderbolt vs USB-C; dual displays; Mac/Windows limits; power delivery; Ethernet | Compatibility matrix by host OS/chip and display topology; no universal dual-display claims |
| 9 | `portable-ssd-external-storage-us-uk` | best portable SSD | 1TB/2TB/4TB capacity; USB 3.2 vs USB4; video editing; ruggedness; encryption | Distinguish interface maximum from sustained real-world speed; cite exact interface and compatibility |
| 10 | `air-fryers-us-uk` | best air fryer UK | small air fryer; family capacity; dual-zone; steam; cleaning; energy use | Existing measured UK phrases include “best small air fryer uk” and “best budget air fryer uk”; retain as sub-intents unless SERPs prove a distinct page need |
| 11 | `cordless-vacuum-cleaners-us-uk` | best cordless vacuum cleaner | pet hair; hard floors vs carpet; weight; battery/runtime; filtration; replacement costs | OpenSEO snapshot: 27,100 estimated monthly searches, KD 8, Commercial; third-party estimate, not traffic. Review exact variants and evidence |
| 12 | `cordless-drills-us-uk` | best cordless drill for DIY | 18V vs 12V; combi vs drill driver; torque; battery ecosystem; chuck; kit vs bare tool | Explain tool-only vs kit and platform battery compatibility; avoid unsupported performance rankings |
| 13 | `robot-vacuum-mops-us-uk` | best robot vacuum and mop UK | pet hair; mixed floors; obstacle avoidance; self-emptying; mop washing; mapping | OpenSEO snapshot: 1,300 estimated monthly searches, KD 9, Commercial; explain consumables, dock footprint and mop limitations |
| 14 | `noise-cancelling-headphones-us-uk` | best noise cancelling headphones | commuting; office calls; comfort; battery; multipoint; codecs | Compare ANC use cases, microphone/call limitations and comfort dimensions without claiming hands-on tests |
| 15 | `wireless-earbuds-us-uk` | best wireless earbuds | ANC; fit; battery; calls; multipoint; iPhone/Android codecs | Separate fit/water-resistance and platform features; note that fit is individual |
| 16 | `home-air-purifiers-us-uk` | best air purifier for home | room size; CADR; HEPA terminology; noise; filter costs; allergies | Avoid medical/health outcome promises; source CADR, room assumptions and replacement filter availability |
| 17 | `espresso-coffee-machines-us-uk` | best Sage espresso machine UK | beginner vs enthusiast; grinder; manual vs assisted; milk steaming; maintenance; US Breville equivalents | Preserve explicit Sage/Breville regional naming and exact SES/BES model differences |
| 18 | `tablets-for-work-study-us-uk` | best iPad for work and study | iPad vs iPad Air vs Pro; storage; keyboard; stylus; student use; cellular | Map use case to model generation and accessory compatibility; do not imply accessories are included |
| 19 | `dash-cams-us-uk` | best front and rear dash cam UK | front/rear; 4K vs 2K; parking mode; hardwire kit; cloud/app; heat/cold tolerance | OpenSEO snapshot: “best front and rear dash cam uk” 2,400 estimated monthly searches, KD 9, Commercial; verify exact camera, rear module and kit |
| 20 | `portable-projectors-us-uk` | best portable projector | brightness; native resolution; battery; throw distance; streaming apps; outdoor use | Explain ANSI/ISO brightness carefully, native vs supported resolution and DRM/app support |
| 21 | `home-nas-storage-us-uk` | best home NAS | 2-bay vs 4-bay; RAID vs backup; 2.5GbE; drive compatibility; remote access; small business | Make clear RAID is not backup; distinguish diskless units and drive compatibility lists |
| 22 | `electric-toothbrushes-us-uk` | best electric toothbrush | oscillating vs sonic; pressure sensor; brush heads; battery; app; replacement costs | Avoid clinical efficacy claims beyond cited evidence; highlight recurring head cost and charger compatibility |
| 23 | `gaming-mice-us-uk` | best wireless gaming mouse | lightweight; FPS; hand size/grip; sensor; polling rate; wired vs wireless | Explain shape/size and weight before headline sensor figures; avoid unsupported latency comparisons |
| 24 | `smartwatches-us-uk` | best smartwatch for iPhone and Android | Apple Watch vs Garmin; battery; sport tracking; GPS; health sensors; phone compatibility | Separate platform lock-in and sensor feature availability; no medical-device claims |
| 25 | `home-printers-us-uk` | best home printer UK | colour vs mono laser; multifunction; duplex; ADF; toner costs; home office | Existing guide is explicitly UK-focused; compare running costs and exact UK voltage/model suffix; do not imply US equivalence where absent |

## Measured UK keyword evidence already available

These are the only exact figures carried forward from the 19 November OpenSEO research snapshot in this map. They are third-party estimates and must retain provider/date provenance in any future structured record.

| Query | Estimated monthly volume | KD | Intent | Current mapping |
|---|---:|---:|---|---|
| best cordless vacuum cleaner | 27,100 | 8 | Commercial | Guide 11 |
| best front and rear dash cam uk | 2,400 | 9 | Commercial | Guide 19 |
| best robot vacuum and mop uk | 1,300 | 9 | Commercial | Guide 13 |
| best small air fryer uk | 1,000 | 8 | Commercial | Guide 10 |
| best budget air fryer uk | 480 | 10 | Commercial | Guide 10 |
| best dehumidifier uk | 9,900 | 15 | Commercial | New-category candidate; not yet an existing guide |
| best compact dehumidifier uk | 720 | 4 | Commercial | New-category candidate; not yet an existing guide |
| best heated clothes airer | 3,600 | 0 reported | Commercial | New-category candidate; not yet an existing guide |

CPC values from the provider were returned without a confirmed currency field. Do not prefix them with £ or treat CPC as affiliate commission. Do not add variant volumes where the provider groups similar phrases.

## Priority order for the next research cycle

1. **Improve existing high-intent pages first:** cordless vacuum, dash cam, robot vacuum/mop and air fryer. Check current page coverage, source freshness, internal links, exact product identity and SERP intent before editing.
2. **Resolve measurement before broad expansion:** connect the already-verified GSC property to OpenSEO when desktop access is available; obtain query/page/device/country data. GA4 and onsite outbound-click events remain separate implementation work.
3. **Validate two new category candidates:** dehumidifiers and heated clothes airers. Confirm UK exact models, primary sources, running-cost methodology, safe-use details, warranty, consumables and a genuine SERP gap before proposing a guide or products.
4. **Fill evidence gaps across the other 20 guides:** inspect GSC first; use free/manual SERP review only where it changes decisions. Do not spend the remaining OpenSEO credits on broad exploratory research.
5. **Prepare a page-level cannibalisation matrix:** one canonical URL per dominant intent, with supporting variants mapped to sections/FAQs. A new URL needs a distinct search-result pattern and a materially different buyer task.

## Suggested data fields for future implementation

For each keyword observation retain:
`keyword_id, normalized_query, display_query, market, language, intent, cluster_id, canonical_guide_slug, source_provider, source_dataset, collected_at, volume, volume_unit, volume_scope, difficulty, difficulty_provider, cpc, cpc_currency, trend_series, serp_features, competing_urls, confidence, notes`.

All numeric metrics are nullable. Keep raw provider response/export references where permitted. Do not overwrite older observations; append dated observations so seasonality and provider changes can be compared.

## Explicit non-actions

This map does **not** authorize or perform:
- edits to the 25 published guides or their SEO metadata;
- new guides, products, product imports or image additions;
- changes to sitemap, robots, IndexNow, Cloudflare or DNS;
- GSC/GA4 connection, paid OpenSEO research, AI visibility schedules or subscriptions;
- affiliate account changes or direct ASIN creation;
- publication, merge or production deployment.
