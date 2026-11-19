# Pinterest RSS board mapping

Five separate RSS 2.0 endpoints are generated for the five existing Pinterest boards. Each guide belongs to exactly one feed to avoid duplicate Pins across boards.

| Pinterest board | RSS endpoint | Included guide topics |
|---|---|---|
| Home Office & Ergonomics | `/rss/home-office.xml` | Ergonomics, webcams, monitors, docks, printers |
| Smart Home & Security | `/rss/smart-home.xml` | Security cameras, Wi-Fi mesh, robot vacuum/mops, air purifiers, NAS |
| Kitchen & Home Tech | `/rss/kitchen-home-tech.xml` | Air fryers, cordless vacuums, drills, espresso machines, electric toothbrushes, projectors |
| Travel & Tech Gear | `/rss/travel-tech.xml` | Portable power, GaN chargers, noise-cancelling headphones, earbuds, dash cams, smartwatches |
| Computing & Gaming | `/rss/computing-gaming.xml` | Portable SSD, tablets, gaming mice |

## Publication safety

All five feeds apply the same two-part gate as the existing `/rss.xml` endpoint:

- `publicationStatus === "published"`
- `editorialStatus === "Approved for publication"`

A guide must satisfy both conditions to appear. The 25 current guides remain drafts and are not approved; therefore all five feeds are expected to be valid but empty until individual editorial approval and publication. No guide status is changed by this feature.

## Pinterest setup

After the code is reviewed, merged with owner approval, and deployed to the production host, connect each endpoint to its matching board through Pinterest Business RSS auto-publish settings. The account owner performs this step in Pinterest; no password, API token, paid scheduler or third-party automation is required.

The existing combined `/rss.xml` remains available for compatibility and general syndication.
