# Editorial QA follow-up — source verification (2026-11-22)

Scope: read-only review of the current `main` catalogue and publicly accessible manufacturer material. No production files, pages, product records, URLs, or deployments were changed.

## Confirmed findings

### 1. COSORI TurboBlaze regional voltage note is stale/incomplete
The catalogue record is titled "COSORI TurboBlaze Air Fryer (UK 6L / US 6-Quart)" and currently says the UK product page does not expose a voltage line. A manual for exact UK model **CAF-DC601-KUK** states **AC 220–240V, 50/60Hz, 1,725W**:
- Manual copy: https://manuals.plus/m/4f3788ebbd3e755ec93870f84b46ada10e7c16241067f0de5a79ae27f79774e5
- UK product page: https://cosori.co.uk/products/cosori-turbo-blaze-6l-air-fryer
- US product page: https://cosori.com/products/turboblaze-air-fryer

Proposed editorial correction (subject to confirming the exact SKU shown on the UK retailer listing): state that the UK CAF-DC601-KUK variant is rated 220–240V 50/60Hz, while the US CAF-DC601-KUS is a separate 120V variant. Keep the warning to verify the exact model label before purchase. Do not retain the claim that the UK voltage is absent from public documentation.

### 2. Brother MFC-L3740CDW and MFC-L3780CDW were conflated in the availability note
The product record is the UK **MFC-L3740CDW**, with UK identifier MFC-L3740CDW and source URL at Brother UK. Brother UK lists the MFC-L3740CDW at **220–240V AC, 50/60Hz**:
- Brother UK product specifications: https://store.brother.co.uk/devices/laser/mfc/mfcl3740cdw
- Brother UK Declaration of Conformity includes MFC-L3740CDW: https://download.brother.com/welcome/doc101485/cv_dcpl3515cdw_uk_doc_04.pdf

The US identifier points separately to **MFC-L3780CDW**. Brother USA lists that model at **110–120V AC, 50/60Hz**:
- https://www.brother-usa.com/p/laser-printers/MFCL3780CDW

The current availabilityNote incorrectly reads as if the MFC-L3780CDW were the product under review and says an exact UK counterpart has not been confirmed, despite the catalogue product itself being the MFC-L3740CDW. Proposed correction: explicitly distinguish the US MFC-L3780CDW (110–120V) from the UK MFC-L3740CDW (220–240V); tell buyers to select the correct regional model and confirm the model label, voltage and warranty. Do not suggest the UK MFC-L3740CDW lacks a UK counterpart.

### 3. DEWALT DCD703F1
DEWALT's official US page confirms the DCD703F1 is a 12V MAX 5-in-1 brushless kit with four dedicated attachment solutions:
- https://www.dewalt.com/en-us/product/dcd703f1/12v-max-5-1-brushless-drilldriver-kit

The UK DCD701N-XJ is a separate 12V XR drill-driver; no source reviewed establishes it as a like-for-like 5-in-1 equivalent:
- https://www.dewalt.co.uk/en-gb/product/dcd701n-xj/12v-xr-brushless-drill-driver-tool-only

Proposed buyer-facing wording: "A directly equivalent UK 5-in-1 version of the DCD703F1 has not been verified. The DCD701N-XJ is a different 12V XR drill-driver and does not establish equivalent multi-head functionality." Keep this as a qualification, not a categorical claim that no such SKU exists anywhere.

## Findings requiring further evidence

### 4. NETGEAR Orbi RBE773 power adapters
NETGEAR UK product page confirms the RBE773 regional kit and three adapters, but the sources found so far do not establish the AC input range printed on the exact UK adapter supplied in the RBE773 kit. NETGEAR's EU conformity declaration identifies RBE771/RBE770 and adapter part numbers but does not state the adapter input range:
- https://www.netgear.com/uk/home/wifi/mesh/rbe773
- https://www.downloads.netgear.com/files/DoC/204-11978-02_CE_RBE771_RBE770_EN-EP-FR-IT-GR-SP_20May25.pdf

Keep the advice to check the supplied adapter label. Do not infer a universal 100–240V range from the product's UK page or generic Orbi adapters.

### 5. Levoit Vital 200S-P regional availability
The US page identifies Vital 200S-P / LAP-V201S-WUS:
- https://levoit.com/products/vital-200s-p-smart-air-purifier
The UK collection page is:
- https://levoit.co.uk/collections/air-purifiers

No official UK source located in this pass confirms an exact UK Vital 200S-P counterpart. Keep the regional-model caveat, but phrase the absence carefully as "An exact UK counterpart was not verified from the official UK range reviewed" rather than implying a permanent absence. Adapter input and local warranty remain unverified; retain the warning not to assume plug/voltage compatibility.

## Public-facing editorial issue

The current `src/pages/guides/index.astro` renders `guide.editorialStatus` directly in every public guide card. Since all 25 records currently carry "Approved for publication", this exposes an internal workflow state without helping buyers. Proposed code change: remove only the public status span from guide cards, retain editorialStatus in JSON and internal validation. Detail pages already suppress the exact approved status.

## Proposed next patch (not implemented)
1. Remove the guide-card editorial status display only.
2. Correct COSORI voltage text using exact UK model CAF-DC601-KUK documentation.
3. Correct Brother note to distinguish UK MFC-L3740CDW (220–240V) and US MFC-L3780CDW (110–120V).
4. Replace DEWALT "confirmed in this pass" language with buyer-facing model-equivalence wording.
5. Keep NETGEAR adapter-label check; exact adapter input remains unverified.
6. Keep Levoit regional caveat with explicit evidence limitation.
7. Recheck rendered pages and run full validation when GitHub Actions capacity is confirmed.

## Change and deployment status
- This file is documentation only on `docs/handoff-2026-11-22-indexing-investigation`.
- No change has been made to `main`.
- No PR was created, no workflow was dispatched, and no production deployment occurred.


## Additional catalogue sweep — 22 Nov 2026, 06:47–06:50 UTC

A second recursive scan of all 25 guides / 100 product records checked for internal audit language, uncertain regional availability, model mismatch, and specification claims.

### Additional evidence checked

#### Roborock Saros 10R
- The catalogue's caution says a matching UK Saros 10R listing was not confirmed and warns against substituting Saros 10.
- Roborock UK public pages now describe the Saros 10R in the UK product family/navigation, including the official UK homepage and a UK page describing the Saros 10R feature set:
  - https://uk.roborock.com/
  - https://uk.roborock.com/pages/test
- The official UK store listing page inspected does not clearly show a direct Saros 10R product purchase listing in the extracted content; the official global Saros 10R product page is not proof of UK stock or UK warranty:
  - https://global.roborock.com/pages/roborock-saros-10r
- Decision: current note is cautious and not disproven; however "matching UK product listing not confirmed" needs a targeted direct product/store verification before publication. Do not replace the model with Saros 10. Do not claim UK availability from homepage marketing imagery alone.

#### Razer Kiyo Pro Ultra
- The current guide's limitation "4K capture is limited to 30 fps" is supported by Razer's official product page and technical manual. Razer describes raw 4K at 30 FPS, 1080p at 60 FPS, and uncompressed output up to 4K 24 FPS / 1440p 30 FPS / 1080p 60 FPS:
  - https://www.razer.com/streaming-cameras/razer-kiyo-pro-ultra
  - https://dl.razerzone.com/master-guides/RazerSynapse3/KIYOPROULTRA-00003592-en.pdf
- Decision: no correction required for the 4K/30fps limitation. Keep it.

#### Levoit Vital 200S-P
- Levoit's US product page identifies model LAP-V201S-WUS and lists a 24V DC / 2.5A power supply, 50W rated power, and an AC power adapter included in the box:
  - https://levoit.com/products/levoit-vital-200s-p-smart-air-purifier-black
- Levoit's US Vital series collection includes Vital 200S-P, but this does not establish a UK regional plug/adapter bundle or UK warranty:
  - https://levoit.com/collections/levoit-vital-series-air-purifiers
- Decision: preserve the UK regional availability and adapter/warranty caution. The exact adapter AC input rating still needs the adapter label/manual; do not infer it from the 24V DC output specification.

#### NETGEAR Orbi RBE773
- The official UK product page confirms RBE771 router x1, RBE770 satellites x2 and power adapters x3. It does not publish adapter AC input rating in the page content:
  - https://www.netgear.com/uk/home/wifi/mesh/rbe773
- NETGEAR's official quick-start guide states adapters vary by region and packages in some regions may include plug adapters:
  - https://www.downloads.netgear.com/files/GDC/RBE773/RBE772_RBE773_QSG_EN-EU.pdf
- The official user manual refers to EU/UK plug adapters for Singapore use, but this does not identify the universal AC input rating for the exact adapter supplied with a UK retail kit:
  - https://www.downloads.netgear.com/files/GDC/RBE773/RBE771_RBE770_UM.pdf
- Decision: retain instruction to inspect the exact adapter label. No universal input voltage claim.

### Sweep summary
- One further buyer-facing caution (Roborock Saros 10R UK matching listing) remains open for targeted confirmation.
- Razer 4K/30fps limit is verified and should remain.
- Levoit and NETGEAR regional adapter caveats remain justified; do not overstate certainty.
- No additional research-residue phrases were found beyond the six already logged in the expanded scan/source-verification note.
- No source files on `main` changed. No PR, Actions run, merge, or production deployment occurred.


## Product-specification verification — priority sample, 22 Nov 2026

This pass checked region-sensitive electrical products, networking hardware, security cameras, and model-specific Apple/Ring claims against current official manufacturer sources. It is a sample-based factual check, not a complete re-certification of all 100 records.

### Confirmed / retained

1. **EcoFlow RIVER 2 — regional electrical variants:** Official manual confirms 256Wh, 300W continuous / 600W peak, US AC input 100–120V and output 120V, EU/ZA input 220–240V and output 230V. The guide's regional warning is correct. Source: https://manuals.ecoflow.com/eu/product/river-2-portable-power-station?lang=en_US&source=desktop
2. **Jackery Explorer 300 Plus — regional electrical variants:** Jackery Europe confirms JE-300B, 288Wh, LiFePO4, 3.75kg, AC input 220–240V 50Hz and output 230V 50Hz / 300W. Jackery US separately lists 100–120V input and 100V/60Hz output. The guide's warning that the same family/model code can have materially different regional electrical variants is justified. Sources: https://helpcenter.eu.jackery.com/hc/en-gb/articles/52682971950363-Explorer-300-Plus-Basic-Information and https://faq.jackery.com/hc/en-us/articles/52303549157787-Explorer-300-Plus-Basic-Information
3. **TP-Link Deco BE63 — regional hardware caution:** TP-Link UK lists hardware revisions V3.60, V2.60 and V2, and explicitly says availability varies by region. US official manual/datasheet confirms four 2.5Gbps ports for the cited US hardware. Keep the current caution that the US datasheet is not proof of identical UK hardware/firmware. Further exact UK revision port and adapter verification remains desirable before making UK-specific claims. Sources: https://www.tp-link.com/uk/support/download/deco-be63/ and https://static.tp-link.com/upload/manual/2026/202606/20260611/1910013639_Deco%20BE63%28US%292.6_User%20Guide_REV2.6.0%20%281%29.pdf
4. **Arlo Essential 3 2K Outdoor Security Camera:** Exact UK product listing (SKU VMC3280-100EUS) confirms 2K 2560×1440, 130° diagonal field of view, 12× digital zoom, no pan/tilt, spotlight, siren, integrated battery, dual-band Wi-Fi and 4–6 month stated battery estimate. The guide's fixed-view limitation and principal listed features are consistent. Subscription caveat remains relevant for advanced AI/cloud features. Source: https://www.arlo.com/en_gb/cameras/arlo-essential-3-2k-security
5. **Ring Battery Doorbell 2K Plus:** Ring's 2026 official naming update confirms Battery Doorbell Plus (2nd Gen) was renamed Battery Doorbell 2K Plus without changing features/subscription. The product page confirms the current name and quick-release battery pack. Existing record is consistent. Sources: https://partners.ring.com/support/articles/538eg/ring-product-name-changes and https://ring.com/products/battery-doorbell-plus-2nd-gen
6. **Apple Watch Series 12 / Ultra 4:** Apple's current official technical pages support the core values recorded: Series 12 S11, 42/46mm, 2,000 nits, up to 24h normal / 38h Low Power; Ultra 4 S11, 49mm Grade 5 titanium, 3,000 nits, up to 50h normal / 84h Low Power. Keep regional feature/cellular caveats. Sources: https://www.apple.com/jo/apple-watch-series-12/specs/ and https://www.apple.com/jo/apple-watch-ultra-4/specs/
7. **Anker 737 Power Bank A1289:** Anker confirms 24,000mAh, 140W max output, two USB-C plus one USB-A, and 630g. Existing claims are supported. Note that the 140W ceiling is not available to every device/cable or simultaneous multi-port configuration; current buyer caveat is appropriate. Sources: https://www.anker.com/products/a1289 and https://service.anker.com/article-description/Introduction-to-the-Anker-737-Power-Bank-24K-A1289

### Editorial risk / no change yet
- TP-Link BE63 is the main remaining item in this sample where exact UK revision-level confirmation should be obtained before removing its existing caution. The US configuration should not be silently generalized to UK units.
- Battery runtime, wireless coverage, camera detection, and throughput are manufacturer estimates or environment-dependent; retain qualifiers and avoid presenting them as guaranteed real-world performance.
- No first-hand testing claims were found in this sample. No prices, ratings, live stock or direct ASIN claims were introduced.

### Status
- Source review only. No production files or catalogue records changed.
- No PR, CI/Actions run, merge, deployment, indexing submission, product import or paid research tool used.


## Regional model verification — continuation pass, 22 Nov 2026 (08:07 UTC)

### TP-Link Deco BE63 — retain regional/hardware-revision caution
- TP-Link UK's official support page lists UK hardware revisions V3.60, V2.60 and V2, and explicitly warns that model/hardware availability varies by region: https://www.tp-link.com/uk/support/download/deco-be63/
- TP-Link US pages list a different revision set (V3.60, V2.60, V1.60); the US V2.6 user guide describes four 2.5Gbps WAN/LAN ports: https://www.tp-link.com/us/support/download/deco-be63/v2.60/ and https://www.tp-link.com/us/document/125928/
- The four-port US claim is not enough to establish the exact port configuration for every UK hardware revision. Decision: retain the current caution and do not generalise US documentation to UK units. Verify the exact hardware version on the retailer's offered unit before stating revision-specific port details.

### Roborock Saros 10R — UK family mention is not a product-level purchase confirmation
- Roborock UK's shop page mentions Saros 10R in descriptive navigation/feature copy, but the current product/shop listings extracted show Saros 20, Saros 10 and other models; no direct Saros 10R product purchase listing was confirmed in this pass: https://uk.roborock.com/shop and https://uk.roborock.com/pages/roborock-store
- A separate official UK product listing exists for Saros 10, not Saros 10R: https://uk.roborock.com/products/roborock-saros-10-robot-vacuum-with-dual-anti-tangle-system
- Decision: keep the catalogue's caution. A family-level mention or a different Saros 10 SKU does not establish a UK Saros 10R retailer listing, price, stock or warranty. Do not substitute Saros 10.

### Levoit Vital 200S-P — DC output does not prove AC adapter input
- Levoit's US product page identifies LAP-V201S-WUS, states 24V DC / 2.5A power supply and 50W rated power, and confirms an AC adapter is included. It does not state the adapter's AC input range in the captured specification: https://levoit.com/products/levoit-vital-200s-p-smart-air-purifier-black
- Decision: retain the regional adapter/warranty warning. Do not infer 100–240V compatibility from the 24V DC output rating. Exact adapter input label and UK regional bundle remain unverified.

### NETGEAR Orbi RBE773 — adapter input remains unverified
- NETGEAR UK's product page confirms the RBE773 kit contains one RBE771 router, two RBE770 satellites and three power adapters: https://www.netgear.com/uk/home/wifi/mesh/rbe773
- NETGEAR's official support page lists separate North America and Europe-region technical specification sheets and quick-install guides: https://www.netgear.com/support/product/rbe773
- The EU/AP/CA technical sheet confirms the three-adapter package but does not specify adapter AC input voltage: https://www.downloads.netgear.com/files/GDC/RBE773/RBE773_TS-EU-AP-CA.pdf
- The official user guide references region-specific plug adapters, but does not establish the exact input rating on the UK kit's supplied adapter: https://www.downloads.netgear.com/files/GDC/RBE773/RBE771_RBE770_UM.pdf
- Decision: keep the exact-label check; no universal AC input range should be claimed.

### Summary / scope
- TP-Link, Roborock, Levoit and NETGEAR all retain their current buyer-protective caveats; no evidence justifies removing them.
- This was a targeted official-source pass, not a complete re-certification of all 100 products.
- No production source, catalogue entry, guide, URL, affiliate destination, image or Cloudflare setting was changed. No PR, CI run, merge, deployment, indexing submission, product import or paid tool was used.


## Additional regional/model checks — 22 Nov 2026, 08:15 UTC

### Epson EF-21G UK vs EF21 US — keep the regional distinction explicit
- Epson US identifies EpiqVision Mini EF21 model V11HB35320 as **Discontinued**: https://epson.com/For-Home/Projectors/Home-Cinema/Epson-EpiqVision-Mini-EF21-Portable-Smart-Laser-Projector-%E2%80%93-Opal-Green/p/V11HB35320
- Epson UK lists the separate EF-21G, UK SKU V11HB35340, as **In stock** and specifies AC 100–240V, 50/60Hz: https://www.epson.co.uk/en_GB/products/projector/home-cinema/epson-ef-21g%2C-mini-laser-projector%2C-1%2C000-lumens%2C-up-to-150-inch-display%2C-google-tv%E2%84%A2-and-bluetooth-speaker%2C-portable/p/46374
- Decision: the catalogue's US availability caution is supported, but it should remain clearly scoped to the US EF21 identifier. The UK EF-21G is not discontinued in the official UK listing reviewed. No change made.

### Samsung Bespoke Jet AI regional voltage distinction — validated
- Samsung US model VS28C9762UK/AA specification sheet states 120V / 60Hz: https://image-us.samsung.com/SamsungUS/home/05242023/VS28C9762UK_Bespoke_JetAI_National_V10.pdf
- Samsung UK identifies its Bespoke Jet AI as VS28C9784QK/EU and lists it in the UK Bespoke Jet family: https://www.samsung.com/uk/vacuum-cleaners/bespoke-jet/ and https://www.samsung.com/uk/support/model.VS28C9784QK_EU/
- Decision: the catalogue warning that US and UK identifiers are separate regional models is supported. Retain the instruction to choose the UK electrical package and check the exact kit/battery bundle.

### Evidence limitations / status
- These checks confirm the two existing regional caveats; they do not certify all products in the project.
- No production source or product record changed. No PR, CI, merge, deployment, index request, product import or paid tool use.
