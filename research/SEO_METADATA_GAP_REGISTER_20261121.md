# SmartPickHub — SEO Metadata Gap Register (Draft Only)

**Date:** 21 November 2026  
**Scope:** Existing 25 published buying guides  
**Status:** Review proposals only. No public metadata was changed.  
**Source:** Current `src/data/products.json`, `src/layouts/Layout.astro`, and `src/pages/guides/[slug].astro`.

## 1. Audit result

- 25/25 guide SEO titles are present and unique.
- Title lengths in the current catalogue range from 30 to 49 characters.
- 4/25 guides have a dedicated `seoDescription`.
- 21/25 guides currently fall back to their guide summary for the meta description.
- 0/25 guides have an `updatedAt` field.
- The guide template currently emits Article `dateModified` equal to `publishedAt` and displays that date as “Updated”. This should not be silently changed: a date should reflect a real substantive review.
- The current structured data has Article, BreadcrumbList and ItemList/Product entries, but does not invent offers, prices, ratings or reviews. Keep that boundary.

Meta descriptions are snippet copy, not a guaranteed ranking lever. Their purpose is to describe the actual page and encourage the right click without exaggeration. Google may generate a different snippet for a query.

## 2. Proposed descriptions for the 21 missing fields

These are individually drafted from the current guide title, summary, introduction and product set. They are not approved for deployment until reviewed against the rendered guide.

| Guide slug | Proposed `seoDescription` |
|---|---|
| `home-office-ergonomics-us-uk` | Compare ergonomic keyboards and mice for desk work, including split layouts, vertical grips, trackballs, connectivity and hand-fit considerations. |
| `portable-power-travel-tech-us-uk` | Compare USB-C power banks and compact power stations by capacity, output, weight, charging speed and travel or backup requirements. |
| `smart-home-security-cameras-us-uk` | Compare battery, solar and Wi-Fi security cameras by storage, subscriptions, power, installation, privacy and smart-home compatibility. |
| `wifi-7-home-mesh-routers-us-uk` | Compare Wi-Fi 7 routers and mesh systems by coverage, wired ports, backhaul, device support and UK/US regional compatibility. |
| `usb-c-gan-chargers-us-uk` | Compare multi-port USB-C GaN chargers by total output, port-level power sharing, charging standards and regional plug versions. |
| `thunderbolt-usb-c-docking-stations-us-uk` | Compare Thunderbolt and USB-C docks by display support, host compatibility, charging power, ports and Windows or Mac limitations. |
| `portable-ssd-external-storage-us-uk` | Compare portable SSDs by capacity, interface speed, host compatibility, ruggedness and security, with guidance on backup use. |
| `air-fryers-us-uk` | Compare single-basket, dual-zone and steam air fryers by usable capacity, counter space, cleaning, cooking flexibility and regional electrical specs. |
| `cordless-vacuum-cleaners-us-uk` | Compare cordless stick vacuums by runtime, weight, dust capacity, filtration, floor tools and important UK/US model differences. |
| `cordless-drills-us-uk` | Compare cordless drill-drivers by battery platform, size, chuck capacity, brushless options and the needs of common DIY projects. |
| `robot-vacuum-mops-us-uk` | Compare robot vacuum-mop systems by navigation, dock automation, obstacle handling, carpet behaviour, thresholds and maintenance. |
| `noise-cancelling-headphones-us-uk` | Compare wireless noise-cancelling headphones by fit, ANC, call quality, battery claims, connectivity and device compatibility. |
| `wireless-earbuds-us-uk` | Compare true-wireless earbuds by fit, active noise cancellation, battery, water resistance and features tied to your phone ecosystem. |
| `home-air-purifiers-us-uk` | Compare home air purifiers by room size, clean-air delivery guidance, filter costs, noise modes, sensors and replacement availability. |
| `tablets-for-work-study-us-uk` | Compare iPad models for work, study and everyday use by screen size, performance tier, storage, accessories and connectivity options. |
| `dash-cams-us-uk` | Compare dash cameras by front and rear coverage, resolution, field of view, GPS, parking mode, storage and installation requirements. |
| `portable-projectors-us-uk` | Compare portable projectors by native resolution, brightness standards, throw distance, battery, autofocus and streaming features. |
| `home-nas-storage-us-uk` | Compare home NAS systems by drive bays, network speed, expansion, drive compatibility, snapshots and backup strategy. |
| `electric-toothbrushes-us-uk` | Compare electric toothbrushes by pressure feedback, cleaning modes, brush-head costs, app features and replacement availability. |
| `gaming-mice-us-uk` | Compare wireless gaming mice by shape, weight, sensor, polling rate, battery, connectivity and hand-size or grip preferences. |
| `smartwatches-us-uk` | Compare Apple and Garmin smartwatches by phone compatibility, battery expectations, sport features, GPS, case size and regional support. |

## 3. Existing four descriptions — retain for review, do not overwrite automatically

- `webcams-video-calls-streaming-us-uk`: currently describes 4K/1080p, framing, focus, mounting and software compatibility.
- `4k-usb-c-monitors-home-office-us-uk`: currently describes 27-inch 4K, USB-C power, colour, ports and ergonomics.
- `espresso-coffee-machines-us-uk`: currently explains UK Sage and US Breville equivalents, SES/BES identifiers and electrical/regional details.
- `home-printers-us-uk`: currently describes Brother colour/mono laser, duplex, scanning, networking and toner costs.

These descriptions are grounded in the current summaries. Check them against the rendered page and exact product set before release.

## 4. SEO implementation notes for the consolidated release

1. Preserve all 25 unique SEO titles unless the rendered SERP and intent review identifies a material mismatch.
2. Add only the 21 reviewed descriptions; do not create generic formulaic snippets from category names.
3. Do not stuff every close keyword variant into one description.
4. Keep descriptions market-aware where regional variants materially affect the buying decision.
5. Do not promise “best”, lowest price, stock, testing, ratings or outcomes that the guide does not prove.
6. Ensure canonical URL, title, description, visible H1, article content and JSON-LD refer to the same guide.
7. Resolve the displayed “Updated” date / Article `dateModified` semantics by choosing one of two safe approaches: add a genuine `updatedAt` only after a substantive content review, or label the existing date as “Published” and keep `dateModified` equal to the publication date. Do not update dates solely to appear fresh.
8. Validate the generated head metadata for all 25 routes in the consolidated 1 December QA cycle.

## 5. No action taken

- No `products.json` change.
- No public SEO title or description change.
- No publication date or structured-data change.
- No sitemap, robots, canonical, analytics or crawler change.
- No build or full QA run triggered by this research-only register.

**Next:** incorporate these descriptions only as part of a single coherent SEO release after the page-by-page content check and before the 1 December consolidated validation.
