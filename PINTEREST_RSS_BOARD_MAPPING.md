# Pinterest RSS board mapping

**Current state — 19 November 2026**

Five separate RSS 2.0 feeds are live on the approved production host. The owner confirmed that all five were connected to their corresponding existing Pinterest boards. This connection is owner-confirmed; the saved Pinterest-side state and resulting Pin ingestion have not yet been independently inspected through an authenticated session.

Each guide belongs to exactly one feed to avoid intentional cross-board duplication.

| Pinterest board | Production RSS endpoint | Current entries |
|---|---|---:|
| Home Office & Ergonomics | https://smartpickhub.pages.dev/rss/home-office.xml | 5 |
| Smart Home & Security | https://smartpickhub.pages.dev/rss/smart-home.xml | 5 |
| Kitchen & Home Tech | https://smartpickhub.pages.dev/rss/kitchen-home-tech.xml | 6 |
| Travel & Tech Gear | https://smartpickhub.pages.dev/rss/travel-tech.xml | 6 |
| Computing & Gaming | https://smartpickhub.pages.dev/rss/computing-gaming.xml | 3 |
| **Total** | **5 feeds** | **25** |

## Publication and eligibility gate

The feed generator includes a guide only when both conditions are true:

- `publicationStatus === "published"`
- `editorialStatus === "Approved for publication"`

This gate remains in force. Draft or unapproved guides must never enter the feeds. The 25 currently included guides are already owner-approved and published; do not re-import or duplicate them.

## RSS item format and creative assets

The production generator emits RSS 2.0 XML. Each item includes:

- `<title>` from the approved guide title
- `<link>` and permalink `<guid>` under `https://smartpickhub.pages.dev/`
- `<description>` from the guide summary plus product/topic context
- `<enclosure>` and `<media:content>` pointing to the original 1000×1500 PNG guide cover at `/images/pinterest/{slug}.png`

The covers are original programmatically generated editorial graphics, not product photographs or third-party stock images. Product-card image policy remains separate: no product image is approved unless exact-model identity and commercial reuse rights are documented.

## Intended Pinterest operation: RSS auto-publishing

The owner's approved goal is automatic creation/publication of Pins from these five feeds to their matching boards when approved guide entries are added. Pinterest's official RSS auto-publish documentation states that:

- A Pinterest Business account and claimed website are required.
- RSS 2.0 and RSS 1.x XML feeds are supported; Atom is not.
- Each feed can publish to a different board, and multiple feeds are supported for the claimed website.
- Pin image, title, description and destination are sourced from the feed item.
- New feed content is normally added within 24 hours, oldest items first, with a limit of up to 200 Pins per day.

Because the five feeds currently contain 25 items, initial backfill of those entries may occur after connection. The exact Pinterest processing state and whether the existing 25 items have already been ingested are not yet independently verified. Do not claim automatic publishing is active until account-side settings/activity confirm it.

## Verification checklist

- [x] Five production RSS endpoints are live and populated.
- [x] Total of 25 approved guide entries is independently verified.
- [x] RSS 2.0 structure and image/title/description/link fields are present in the generator.
- [x] Owner confirms all five feeds were connected to matching boards.
- [ ] Authenticated inspection confirms all five saved board mappings.
- [ ] Pinterest activity confirms initial ingestion/publication of current feed items.
- [ ] Verify that a future newly approved guide is automatically ingested by its one matching feed and board.

Do not create duplicate boards or manually recreate Pins already produced by RSS. Any future guide addition must pass the existing editorial approval and publication gate before entering a feed.

The combined `/rss.xml` remains available for general syndication; use only the five board-specific feeds for the Pinterest board mapping above.


## 23 November 2026 — Pinterest account, RSS and published-Pin baseline
- Authenticated Metricool brand lookup returned the connected brand `SmartPickHub_Guides` (brand ID `7901675`), Pinterest account name `SmartPickHub_Guides`, timezone `Asia/Amman`. This confirms a Pinterest analytics connection through Metricool; it does not expose Pinterest's saved RSS auto-publish settings.
- Re-fetched all five live board-specific RSS feeds. They return 25 approved guide items in total: Home Office 5, Smart Home 5, Kitchen & Home Tech 6, Travel & Tech Gear 6, Computing & Gaming 3. The source generator emits RSS 2.0 with guide link/GUID, description, PNG enclosure and `media:content` image at 1000×1500 (2:3). Each guide is assigned to one configured feed; the two-field publication gate remains active.
- Metricool's scheduled-post query for 23 Nov 2026 through 28 Feb 2027 returned zero scheduled items. This is only the Metricool calendar; it does not query or disable Pinterest's native RSS Auto-publish feature.
- Metricool's Pinterest posts connector returned 29 published Pin records in the selected 5–23 Nov period: 25 dated 19 Nov and 4 dated 21 Nov. They represent 24 unique titles, with five repeated title pairs (Smartwatches, Noise-Cancelling Headphones, Home Espresso Machines, NAS, Smart Home Security Cameras). The extracted record set did not include a Dash Cameras Pin, although that guide is present in the Travel & Tech RSS feed. Board placement is not exposed in this report, so repeated Pin records may be on different boards; do not delete anything without board-level review.
- Those 29 Pin records show 31 total impressions, zero saves, zero Pin clicks and zero outbound clicks at the time of retrieval. Account-level Evolution data separately reports 325 impressions over the selected period and a last recorded follower count of 37; account-level and selected-post totals are different scopes and must not be conflated.
- Interpretation: low initial reach is real in the retrieved Pin-level sample, but it is too early to infer a platform penalty or a single cause. The account is newly connected, the 29 records appeared in two concentrated publication dates, and the duplicate creative/title pairs plus the missing Dash Cameras record require investigation. The images in the feed generator are vertical 2:3 assets; Metricool's Pin image URLs are Pinterest-generated 400×300 preview URLs and are not sufficient to judge the original artwork ratio.
- Pinterest's current official RSS auto-publish help says new feed content is normally added to boards within 24 hours, oldest content first, up to 200 Pins/day. This is event-driven RSS ingestion, not a fixed daily posting calendar. If native RSS auto-publish is enabled and saved, future newly approved feed entries should be picked up after the RSS changes; the saved Pinterest-side setting and future-item behavior remain unverified.
- Pinterest's official performance guidance recommends claiming the website, publishing original Pins consistently (weekly), using high-quality vertical creative (2:3 recommended), adding relevant titles/descriptions/board context, and avoiding repeated duplicate Pins. Do not bulk-create more identical Pins. Keep the five board-specific feeds and approval gate; no manual post, schedule, deletion, or board edit was performed in this review.
- Next verification: in Pinterest Business, inspect Settings → Create Pins in bulk → Auto-publish to confirm all five exact feed URLs and board mappings are saved; inspect each board's Pin history, confirm where the five repeated creative pairs landed, and determine why Dash Cameras is absent. Then test one newly approved guide through its single assigned feed, without manual duplicate creation.
