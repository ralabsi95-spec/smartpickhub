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
