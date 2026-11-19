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
