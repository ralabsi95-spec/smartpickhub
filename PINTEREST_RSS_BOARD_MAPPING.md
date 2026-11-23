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
 

## 23 November 2026 — Owner confirmed all five Pinterest RSS board mappings
- Owner visually checked all five RSS feed entries and confirms that every feed is correctly mapped to its intended Pinterest board. Treat the board-to-feed mapping as owner-verified, not merely inferred from the list view.
- The five feeds remain: home-office, smart-home, kitchen-home-tech, travel-tech, computing-gaming. No edits or saves were performed during this verification.
- Remaining Pinterest questions are now narrowed to actual Pin ingestion/history, duplicate Pin records, the missing Dash Cameras record in the Metricool sample, and low early reach/engagement. Do not ask the owner to re-verify board mapping unless new contradictory evidence appears.


## 23 November 2026 — Follow-up diagnosis: ingestion, duplicates and corrected analytics
- Owner confirmed all five feeds are correctly mapped to their intended Pinterest boards. This is now owner-verified; do not ask for board-mapping confirmation again.
- Rechecked the RSS source arrays: 5 + 5 + 6 + 6 + 3 = 25 guide slugs, all 25 unique; there are no duplicate slugs across the five source feed definitions. Live feeds likewise contain 25 items.
- Pinterest official RSS documentation: feeds can target different boards; when an RSS feed is updated, content is added as Pins within 24 hours, oldest first, up to 200/day. Pinterest can create Pins for each image in a feed item; supported image sources include `<image>`, `<enclosure>`, and `<media:content>`. The current generator emits both `<enclosure>` and `<media:content>` with the same single image URL for each item. This is a plausible duplicate-ingestion factor to investigate, not a proven cause. Do not change the generator yet.
- Metricool's detailed Pinterest posts connector for 19–23 Nov shows 29 distinct Pin IDs: 25 dated 19 Nov and 4 dated 21 Nov. Five titles occur twice with different Pin IDs: Smartwatches (two IDs 21 Nov), Noise-Cancelling Headphones (two IDs 21 Nov), Home Espresso Machines (two IDs 19 Nov), NAS (two IDs 19 Nov), and Smart Home Security Cameras (two IDs 19 Nov). Public Pin pages confirm same title/description for paired IDs, but do not expose board placement or enough information to determine why each pair exists. Do not delete them based on title alone.
- The returned 29-Pin sample contains 24 unique titles and no Dash Cameras title, although the live Travel & Tech RSS feed contains Dash Cameras. The feed has 25 unique slugs and no internal overlap; therefore the absence is downstream of feed definition, but the exact Pinterest ingestion reason is not known.
- Corrected Metricool scope interpretation for 5–23 Nov: account-level Evolution totals are 325 impressions, 7 interactions, 6 Pin clicks, 1 save, and 0 outbound clicks; follower count last reported 37. Separately, the posts connector sample totals 31 impressions across the 29 selected Pin records, with 0 saves, 0 Pin clicks and 0 outbound clicks at retrieval. The 31 published impressions in Evolution were attributed to 19 Nov, and 21 Nov shows 4 published Pins but 0 published impressions at retrieval. Never mix account-level totals with selected-post totals.
- This means "Pinterest has zero engagement" was too broad: the account had 7 interactions, 6 clicks and 1 save in the account-level period; the new selected Pin records had no recorded interactions at the time of retrieval.
- No Pin, board, feed setting or website code was changed. Next diagnostic: compare the RSS image tags and Pin pairs with Pinterest's own board-level Pin history, then test one newly approved item in one feed only. Consider emitting exactly one image source tag per item only after a controlled test and owner approval; this would avoid changing all five live feeds speculatively.
- Official reference: https://help.pinterest.com/en/business/article/auto-publish-pins-from-your-rss-feed
