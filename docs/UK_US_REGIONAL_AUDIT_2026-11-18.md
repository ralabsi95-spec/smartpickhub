# UK/US regional catalogue audit — 18 November 2026

## Scope and safety
- Read-only review of `src/data/products.json` on branch `automation/bootstrap`.
- No product records, affiliate URLs, guide copy, images, publication state, or site settings were changed.
- This is an evidence triage, not a complete validation of all 100 products or Amazon listings.

## Catalogue baseline
- 25 research-draft guides and 100 product records.
- 69 of 100 records currently use identical `us_identifier` and `uk_identifier` strings.
- Identical search phrases are not automatically errors: globally shared accessories and model families can legitimately use the same model name. They still need exact regional SKU/package and marketplace listing checks.
- Product identifiers remain search phrases, not verified ASINs. No live Amazon listing or account-status verification is implied.

## Findings from this audit

### 1. Garmin Dash Cam X-series: UK manufacturer evidence found
The four Garmin records (X310, X210, X110 and Mini 3) currently cite US-region Garmin pages, despite the UK identifiers being the same generic model names. UK-region evidence was found:
- Garmin UK X110 page: https://www.garmin.com/en-GB/p/1222949/ — part number 010-02900-10.
- Garmin UK Mini 3 page: https://www.garmin.com/en-GB/p/pn/010-02899-10/ — part number 010-02899-10.
- Garmin UK comparison page identifies the X110, X210, X310 and Mini 3 product family and their resolution distinctions: https://support.garmin.com/en-GB/
- UK retailer search results list all four models, including X210 and X310, but retailer evidence should not replace exact manufacturer SKU evidence.
Additional evidence check (18 Nov): Garmin UK support resolves X310 part number 010-02860-00 (https://support.garmin.com/en-GB/?partNumber=010-02860-00&tab=manuals), while the Garmin Canada product page identifies the same X310 part number (https://www.garmin.com/en-CA/p/pn/010-02860-00/). Garmin UK product page for X110 confirms the X-series model family but is not an individual X210/X310 product URL. A UK Declaration of Conformity exists for X210 (https://static.garmin.com/pumac/Dash%20Cam%20x210_DoC-UK.pdf), proving UK regulatory documentation, not current UK stock or an exact UK sales SKU. Therefore X310 part number is corroborated by UK support, but X210 exact UK sales SKU and product page remain unconfirmed. Action: retain the current catalogue data as unapproved until exact UK commercial SKU/page is established. Verify package contents (microSD, power cable, parking-mode accessories) by regional SKU; Garmin support explicitly notes microSD is not included for X110/X210/X310/Mini 3 (https://support.garmin.com/en-AU/?faq=mr26cy19u79JQgWJ0EtpM9).

### 2. Logitech ergonomic products: UK catalogue support exists
The first guide has four identical US/UK phrases and currently US-only manufacturer sources. Logitech UK catalogue pages show UK-market availability/catalogue entries for MX Vertical, Lift, MX Ergo S and ERGO K860:
- https://www.logitech.com/en-gb/discover/c/ergo-products
- https://www.logitech.com/en-gb/shop/p/k860-split-ergonomic.920-010104
Action: update sources to UK manufacturer pages and check keyboard layout/part number and handedness/colour variants. Do not infer that the US and UK package SKUs are identical.

### 3. Epson projectors: availability statements need correction/refresh
The portable-projector guide contains three Epson candidates:
- CO-FH02: the current Epson UK product page surfaced as SKU V11HA85040 and an in-stock UK listing: https://www.epson.co.uk/en_GB/products/projector/home-cinema/co-fh02/p/35475 . This conflicts with the catalogue's broad wording that the regional catalogue is discontinued. The product's status must be represented by the current UK page, not the US or Middle East page alone.
- EF21: the catalogue cites US SKU V11HB35020 as discontinued. UK EF-21 colour variants have separate SKUs and mixed status; for example EF-21W SKU V11HB35040 is marked discontinued, while EF-21G SKU V11HB35340 surfaced as in stock. These are colour/region-specific SKUs and must not be treated as one generic EF21 listing.
- EF-30: the catalogue itself says exact UK SKU and availability are unverified. Keep it unapproved until an exact UK manufacturer page or current UK listing is confirmed.
Action: separate regional colour/SKU variants; do not call the whole family discontinued or available based on one variant. Consider replacing discontinued legacy candidates only after editorial approval.

### 4. Additional source-region flags
A quick scan identified US-region manufacturer source URLs for:
- Logitech MX Vertical, Lift, ERGO K860 and MX Ergo S;
- Dell U2723QE;
- BenQ PD2705U;
- Apple iPad mini (A20 Pro);
- Garmin X310, X210, X110 and Mini 3;
- Epson EF21, EF-30 and CO-FH02;
- Synology DS224+;
- Logitech G PRO X2 SUPERSTRIKE, PRO X SUPERLIGHT 2 and G502 X PLUS.
These are source-region flags, not proof that the product is unavailable in the UK. Confirm UK SKU, warranty, accessories, keyboard/plug and regional feature differences before changing the record.

## Verified external evidence consulted
- Garmin UK model pages and support material (see URLs above).
- Garmin UK Mini 3 page: https://www.garmin.com/en-GB/p/pn/010-02899-10/
- Logitech UK Ergo product catalogue and K860 page (see URLs above).
- Epson UK CO-FH02 page (see URL above).
- Epson UK EF-21G page: https://www.epson.co.uk/en_GB/products/projector/home-cinema/epson-ef-21g%2C-mini-laser-projector%2C-1%2C000-lumens%2C-up-to-150-inch-display%2C-google-tv%E2%84%A2-and-bluetooth-speaker%2C-portable/p/46374
- Epson UK EF-21W page: https://www.epson.co.uk/en_GB/products/projector/home-cinema/epson-ef-21w%2C-mini-laser-projector%2C-1%2C000-lumens%2C-up-to-150-inch-display%2C-google-tv%E2%84%A2-and-bluetooth-speaker%2C-portable/p/46371

## Next action
Continue the 69-record queue by priority:
1. Correct source-region and SKU evidence for the 4 Garmin cameras and 4 Logitech ergonomic devices.
2. Resolve Epson EF21/EF30/CO-FH02 exact regional SKU and availability.
3. Review remaining US-only source URLs and all products with region-specific power, radio, warranty, accessory or service differences.
4. Only then consider updating catalogue data; no records are to be changed without owner approval.

## Status
- Executed: read-only audit of all 100 records; 69 identical US/UK identifier strings identified; first high-risk source clusters researched.
- Not executed: no catalogue edits, Amazon listing verification, live ASIN confirmation, product-image sourcing, guide approval, publication or deployment.


## Follow-up evidence — Garmin UK (18 November 2026)
- X110: UK product page identifies part number 010-02900-10 and confirms X110/X210/X310/Mini 3 model family.
- X310: UK Garmin support page identifies part number 010-02860-00; the same part number appears on Garmin's Canada product page. This is cross-checkable model identity, but not proof of UK retail stock.
- X210: UK Declaration of Conformity confirms a UK compliance document for model X210; exact UK sales part number and live UK product listing remain unverified.
- Package caution: Garmin support says microSD is not included for X110, X210, X310 and Mini 3. This must be reflected accurately in product comparison content.
- Decision: do not modify catalogue identifiers yet. We have reliable UK source material for X110/X310 support and X210 regulatory status, but not a complete exact UK SKU+commercial page set for all four models.


## Follow-up regional-source checks — monitors, tablet and NAS (18 November 2026)

### Dell UltraSharp U2723QE
- Dell UK has an official page for U2723QE and identifies Dell part 210-BCXK / manufacturer part X649V.
- The page currently marks the model unavailable, despite exposing its UK technical specifications and historic price information.
- Decision: do not present it as currently purchasable. Keep as a legacy/alternative comparison candidate only if editorially useful, and verify replacement model before recommending.
- Source: https://www.dell.com/en-gb/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bcxk/

### BenQ PD2705U
- BenQ UK has a current UK product page and specification sheet for PD2705U.
- Confirmed UK-relevant specs: 27-inch 4K UHD (3840×2160), IPS, 99% sRGB/Rec.709, USB-C Power Delivery 65W, built-in 100–240V power supply.
- This supports UK product identity and key specs, but does not alone prove current retailer inventory or exact box contents for every seller.
- Sources: https://www.benq.eu/en-uk/monitor/creative-pro/pd2705u.html and https://www.benq.eu/en-uk/monitor/creative-pro/pd2705u/spec.html

### Apple iPad mini
- Correction after a current 2026 check: Apple announced iPad mini (A20 Pro) in October 2026, and its UK store listing confirms UK configurations. The catalogue's “A20 Pro” model name is correct, not an error. The earlier A17 Pro result was a previous generation and must not be used as the current UK reference.
- Apple UK pre-order/product page lists 128GB, 256GB and 512GB, Wi-Fi and Wi-Fi + Cellular variants, Midnight and Starlight. Apple says UK availability began 6 November 2026. The 2026 technical specifications list 8.5-inch OLED, Wi-Fi 7, Bluetooth 6 and IP67; verify cellular bands and configuration-specific GPU/Neural Engine before comparing variants.
- Sources: https://www.apple.com/uk/shop/buy-ipad/ipad-mini/128gb-starlight-wifi-standard-glass and https://www.apple.com/uk/newsroom/2026/10/apple-gives-ipad-mini-its-biggest-update-ever/ ; current technical spec source: https://support.apple.com/en-us/149482

### Synology DS224+
- Synology has an official UK-region announcement for DS224+ and DS124, confirming UK-region product family and availability through Synology resellers at launch.
- The retrieved detailed hardware spec page was US-region; do not cite that as UK-specific stock or warranty proof. Check current UK reseller inventory and regional warranty before a recommendation.
- Source: https://www.synology.com/en-uk/company/news/article/DS224p_DS124/Synology%C2%AE%20%E6%8E%A8%E5%87%BA%20DiskStation%C2%AE%20DS224%2B%20%E5%92%8C%20DS124%20小型存储设备，协助提升生产力

## Decisions from this batch
- Confirmed UK official product/spec evidence: BenQ PD2705U; Apple iPad mini A17 Pro (not A20 Pro).
- Confirmed UK official product page but currently unavailable: Dell U2723QE (part 210-BCXK).
- Confirmed UK-region product-family launch evidence only: Synology DS224+; current stock and detailed regional warranty remain unverified.
- No catalogue record was modified. These findings are audit evidence only.


### Important correction — Apple iPad mini A20 Pro (18 November 2026)
- A previous search surfaced the 2024 A17 Pro generation, which is superseded. A fresh search of Apple's October 2026 UK launch material confirms the catalogue's A20 Pro name is correct.
- Apple UK store page confirms UK A20 Pro configurations and UK availability from 6 November 2026. The model is therefore not a US-only/invalid model; replace the older US-only source reference with current UK Apple material during a separately approved catalogue edit.
- Official UK sources: https://www.apple.com/uk/shop/buy-ipad/ipad-mini/128gb-starlight-wifi-standard-glass and https://www.apple.com/uk/newsroom/2026/10/apple-gives-ipad-mini-its-biggest-update-ever/
- This correction demonstrates why regional and model-year claims must be rechecked against current manufacturer pages before changing catalogue data.


## Follow-up evidence — Logitech gaming mice and Synology DS224+ (18 November 2026, 07:10 UTC)

### Logitech G gaming mice — UK manufacturer pages confirmed
The gaming-mice guide's three Logitech models that previously pointed to US pages now have matching UK-region manufacturer evidence:
- PRO X2 SUPERSTRIKE: Logitech G UK product page https://www.logitechg.com/en-gb/shop/p/pro-x2-superstrike-mouse — UK page displays the model, £159.99 at the time checked, and in-stock/ready-to-ship status. The Haptic Inductive Trigger System (HITS) is described on the product page. Treat price and stock as volatile; this audit records only the observed page state, not a permanent availability claim.
- PRO X SUPERLIGHT 2: Logitech G UK product page https://www.logitechg.com/en-gb/shop/p/pro-x2-superlight-wireless-mouse — UK page identifies the model and states 60g; colour/edition-specific page variants exist, so verify exact colour/SKU before using a retailer link.
- G502 X PLUS: Logitech G UK product page https://www.logitechg.com/en-gb/shop/p/g502-x-plus-wireless-lightforce.910-007808 — UK page identifies the product, LIGHTFORCE hybrid switches, LIGHTSPEED wireless and LIGHTSYNC RGB. A second colour/SKU page also exists; do not conflate the SKUs.
- UK gaming-mice category page lists all three models in the UK storefront: https://www.logitechg.com/en-gb/shop/c/gaming-mice .
Decision: UK product identity and manufacturer-page support are now confirmed for all three. Exact regional part number/colour package and software/receiver details still need a per-variant check. These findings are evidence only; no catalogue records were edited.

### Synology DS224+ — UK-region evidence strengthened; current supply mixed
- Synology UK download centre has a model-specific DS224+ page and current DSM download listing: https://www.synology.com/en-uk/products/DS224%2B .
- Synology UK Store currently labels its refurbished DS224+ offer sold out; this is not evidence that all new retail stock is unavailable: https://www.synology.com/en-uk/store .
- UK reseller evidence is mixed but includes listings showing stock: LambdaTek lists DS224+ with 7 units at the time checked (https://www.lambda-tek.com/shop/?catid=932&region=GB); Ballicom lists 2 units (https://www.ballicom.co.uk/manufacturers/synology/?filters%5Battributes%5D%5B0%5D=58069&filters%5Bcategories%5D%5B%2Fhardware%2Fstorage-memory%2Fnetwork-storage%2Fnas%2F%5D=591&page=1&page_count=100&sort=price-asc). These are volatile reseller stock snapshots, not Synology warranty confirmation.
- Synology's official product specification PDF was updated 6 August 2026 and identifies DS224+; the model has 2 drive bays, Intel Celeron J4125, 2GB memory and 100–240V AC input (manufacturer spec): https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/24-year/DS224%2B/enu/Product_Spec_DS224%2B_enu.pdf . The official UK-region launch announcement states 2-year warranty, extendable to 4 years in select regions, but exact UK warranty entitlement must be checked by seller/serial and region.
Decision: retain DS224+ as a UK-market model, but do not state universal current stock or a UK warranty period without retailer/serial confirmation. Also assess newer successor models before treating DS224+ as a lead recommendation.

## CI and preview status correction — 18 November 2026, 07:10 UTC
- Branch head remains `5294826a594590d1dc46fa95bbbb7c9dead3779e` on `automation/bootstrap`.
- GitHub Actions run #564 / ID `44252571083` completed successfully on this exact SHA. All 19 main job steps passed, including locked dependency install, dependency audit capture, Astro checks, importer self-test, importer isolated integration test, catalogue/affiliate validation, static build, smoke tests, axe audit, Lighthouse samples, consolidated audit and artifact upload.
- PR #1 remains open, Draft, unmerged.
- Cloudflare's PR bot recorded a failed build for commit `5294826` under its Workers/service preview-build endpoint and provided no deployment URL. This is **not** evidence that the separate Cloudflare Pages preview successfully deployed or failed. Latest Pages preview freshness therefore remains unverified; do not treat the stable preview hostname as updated to this commit.
- No product records, affiliate URLs, guide content, images or publication flags were changed in this batch. No merge, production deployment, DNS change, publication, indexing or crawl-protection change occurred.
- Existing open gates remain: picomatch high-severity advisory requires owner security review (deadline 2 Dec 2026); gradient contrast checks require manual review; all 25 guides remain drafts; 100 products have no approved product images; Amazon account/live listing validity remains unverified.


## Follow-up evidence — Garmin X210 and Epson EF-30 (18 November 2026)

### Garmin Dash Cam X210 — UK compliance evidence, commercial SKU still open
- Garmin UK X110 page explicitly lists X210 in the UK product family and describes it as a 1440p model, but does not expose an X210-specific UK part number or individual sales page: https://www.garmin.com/en-GB/p/1222949/ .
- Garmin's UK Declaration of Conformity identifies model B04684 / Dash Cam X210 and was revised 31 July 2025: https://static.garmin.com/pumac/Dash%20Cam%20x210_DoC-UK.pdf . This is strong evidence of UK regulatory conformity, not proof of UK retail listing, commercial SKU or current stock.
- Garmin support comparison confirms the X210 model feature family and resolution; exact product package contents remain subject to the SKU: https://support.garmin.com/en-US/enUS/?faq=K5Kkj7NNG59OMjVi1NwIl5 .
- Decision: keep X210 exact UK sales SKU marked unverified. Do not invent a part number or treat the UK DoC as a sales listing.

### Epson EF-30 — exact UK manufacturer listing not located
- Targeted search of Epson UK did not return an exact EF-30 product page or UK SKU. This does not prove the model is unavailable; it means this audit cannot confirm a UK commercial identity or stock state.
- Decision: retain EF-30 as unverified for UK. Do not infer an EF-30 UK SKU from another EF-series model or retailer text alone. Revisit only with an exact Epson UK page or documented UK retailer SKU and manufacturer spec cross-check.

### Current CI state after documentation batch
- Documentation commits were pushed to `automation/bootstrap`; the latest head at this check is `576e11163361bec06b5dafdda243841a5adab40d`.
- PR CI run #573 / ID `44257057465` is in progress on that exact SHA. Do not call this documentation batch CI-verified until the run completes.
- The preceding code/documentation commit `5294826` did pass push CI run #564 / ID `44252571083` (all 19 main steps successful).
- No catalogue edits, merge, deployment, publishing, DNS or indexing changes were made.
