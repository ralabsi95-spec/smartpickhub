# SmartPickHub — Editorial QA: First-pass findings (22 November 2026)

**Scope:** Read-only source scan of `src/data/products.json` and the guide index/detail templates on `main`.
**Source baseline:** `src/data/products.json` blob SHA `bb261aff8200a0b5a8f11966080d4ed11376e20d`; `src/pages/guides/index.astro` SHA `7d9065c9912434887b984adc4c69ab385a253675`; `src/pages/guides/[slug].astro` SHA `6d1543bf28b2bf8b788bc4166b562c4ee48d10bb`.
**Status:** Preliminary static scan, not a full fact-check of every product claim or external manufacturer page. No production edits made.

## Confirmed findings

1. The guide index template explicitly renders `guide.editorialStatus` in every guide card. All 25 records currently contain `Approved for publication`. This is a workflow state, not useful buyer-facing content. Proposed fix: remove the status line from visitor-facing guide cards; preserve the data field for editorial workflow unless a separate approved schema change is made.
2. Research-process residue appears in at least three product notes:
   - `wifi-7-home-mesh-routers-us-uk`, product 4 (NETGEAR RBE773): “in the captured specifications”.
   - `air-fryers-us-uk`, product 4 (COSORI Turbo Blaze): “in the captured data”.
   - `home-printers-us-uk`, product 2 (Brother MFC-L3780CDW): “This audit has not yet confirmed”.
3. Regional Jordan references occur in five guide records:
   - `portable-power-travel-tech-us-uk`: RIVER 2 mains-voltage warning.
   - `air-fryers-us-uk`: COSORI US 120V warning.
   - `home-air-purifiers-us-uk`: Levoit US adapter / regional warranty warning.
   - `home-printers-us-uk`: Brother US 110–120V warning.
   - `smartwatches-us-uk`: Apple Jordan is cited as a manufacturer source for model-specific specifications; this is not the same issue as a Jordan-targeted warning.
   These must be handled individually. Do not remove safety warnings or the Apple source merely because “Jordan” appears.
4. The guide-detail template suppresses the exact approved status string on detail pages; the visible workflow badge is specifically rendered by the guide index template.
5. The broad scan also found other buyer-relevant uncertainty statements that are not necessarily leaks and should not be automatically removed. For example, NETGEAR adapter-input uncertainty, UGREEN multi-port power allocation, and regional SKU/voltage cautions can protect buyers when phrased clearly and grounded.

## Recommended editorial treatment (proposal only)

- Remove the `guide-card-status` element from `src/pages/guides/index.astro` rather than altering all 25 data records.
- Rewrite the three research-residue notes in plain buyer-facing language while preserving the actual uncertainty and safety instruction. Suggested direction:
  - NETGEAR: “The published UK specification does not state the adapters’ AC input range. Check the rating label supplied with the exact UK pack before connecting it to mains power.”
  - COSORI: “The UK product page does not clearly state the voltage. Check the rating plate or manual for the exact UK model before purchase; the US 120V version is not suitable for UK mains.”
  - Brother: “The US MFC-L3780CDW is rated for 110–120V AC. A directly equivalent UK model has not been verified; choose a Brother UK model rated for 220–240V and compare duplex scanning, ADF and networking.”
- Keep Jordan in a warning only if the wording is explicitly useful to UK/US shoppers who may be travelling or considering cross-region purchases. Otherwise replace with “UK mains” / “220–240V mains” only after confirming the exact context. Keep Apple Jordan as a source attribution if that remains the source actually used and the source supports the stated specifications.

## Not yet completed

- Full human editorial review of all 25 guides, all 100 product records, source freshness and factual support.
- Review of every visible page in rendered production, including the complete list of internal labels or awkward phrasing.
- External manufacturer-source revalidation and model/variant comparison.
- Proposed text edits and approval.

## Safety / change control

No changes were made to `main`, product data, page templates, affiliate URLs, metadata, Sitemap, robots, Cloudflare, or production. This report is documentation-only and must not be interpreted as approval to publish proposed edits.
