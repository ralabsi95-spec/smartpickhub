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
Action: before changing records, locate exact UK Garmin product URLs/part numbers for X210 and X310, then replace the four US-only source references with the corresponding UK pages where available. Verify package contents (microSD, power cable, parking-mode accessories) by regional SKU.

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
- Epson UK EF-21G page: https://www.epson.co.uk/en_GB/products/projector/home-cinema/epson-ef-21g-mini-laser-projector/p/46374
- Epson UK EF-21W page: https://www.epson.co.uk/en_GB/products/projector/home-cinema/epson-ef-21w-mini-laser-projector/p/46371

## Next action
Continue the 69-record queue by priority:
1. Correct source-region and SKU evidence for the 4 Garmin cameras and 4 Logitech ergonomic devices.
2. Resolve Epson EF21/EF30/CO-FH02 exact regional SKU and availability.
3. Review remaining US-only source URLs and all products with region-specific power, radio, warranty, accessory or service differences.
4. Only then consider updating catalogue data; no records are to be changed without owner approval.

## Status
- Executed: read-only audit of all 100 records; 69 identical US/UK identifier strings identified; first high-risk source clusters researched.
- Not executed: no catalogue edits, Amazon listing verification, live ASIN confirmation, product-image sourcing, guide approval, publication or deployment.
