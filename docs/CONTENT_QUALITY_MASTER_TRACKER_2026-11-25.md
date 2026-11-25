# SmartPickHub — Master Content Quality Tracker

**As of:** 25 November 2026  
**Source of truth:** This tracker plus `CONTENT_QUALITY_OPERATING_STANDARD.md` and each page's individual audit file.  
**Production catalogue:** 25 published guides / 100 product records on Cloudflare Pages (confirmed project baseline).  
**Branch:** `docs/content-quality-operating-system-2026-11-25` (documentation-only; not merged).

## 1. Headline progress

| Measure | Current | Meaning |
|---|---:|---|
| Existing guides in scope | 25 | Current catalogue baseline |
| Fully passed under v1.0 standard | **0 / 25 (0%)** | No page has yet completed every new gate and earned PASS |
| Active page audits | 1 | Cordless vacuum cleaners |
| Queued pages | 24 | Not yet started under the new standard |
| Product units in existing catalogue | 100 | Four per guide |
| Fully verified product-market units under this new audit | Not yet counted | Existing 18 Nov audit is reused as partial evidence, not relabelled as full pass |

**Important:** The 18 Nov 25-guide/100-product ledger is a reusable structural and targeted-source baseline. It is not discarded and will not be repeated. Its scope did not certify every product claim, current retailer listing, exact Amazon variant or complete editorial quality for every guide. Accordingly, 0/25 means zero pages have yet received a complete v1.0 PASS; it does not mean no previous work exists.

## 2. Status definitions

- `QUEUED`: not yet started under the v1.0 page workflow.
- `IN_PROGRESS`: one active page with a named next action.
- `REVISE`: audit complete enough to identify required editorial/product fixes; not passed.
- `HOLD`: a material evidence or technical blocker prevents safe completion.
- `PASS`: >=90/100, every mandatory evidence gate passed, no hard blocker.
- `REJECT`: no distinct buyer need or evidence/commercial basis.
- `OWNER_APPROVED`: owner approved the exact change/release; separate from PASS.
- `PUBLISHED`: verified deployed state; separate from PASS and OWNER_APPROVED.

## 3. Current active unit

| Field | Value |
|---|---|
| Page | Cordless Vacuum Cleaners |
| Slug | `cordless-vacuum-cleaners-us-uk` |
| URL | https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/ |
| Catalogue baseline | `main` commit `c2fb4419e8a40e010f4307e901e11b4112e5f09c`; catalogue blob `075ce71d57b2ee21fdecd4f1c82036819ba55937` |
| Priority reason | Saved UK-market keyword snapshot: “best cordless vacuum cleaner” 27,100 volume / KD 8 / CPC 2.50 / commercial; “cordless vacuum cleaner” 22,200 / KD 18 / CPC 1.86 / transactional. Metrics are cached/undated and must not be presented as fresh. |
| SERP sample | 25 Nov 2026; current web results show strong testing-led competitors including Good Housekeeping, Which?, TechRadar, The Independent, The Guardian and Ideal Home. |
| Status | IN_PROGRESS |
| Initial findings | Continued audit found official Shark UK IZ400UKT identity and separated it from IZ400UK (0.19 L belongs to IZ400UK, not the catalogue variant); Shark US IZ862H official manual still missing. Miele UK official spec PDF and Samsung official support/manual listing added. Dyson/Miele availability and Samsung runtime bundle remain open. Four UK alternatives now have primary-source screening. Amazon direct ASIN approvals remain 0/4 UK and 0/4 US. |
| Next action | Resolve Bosch BCS1051GB weight conflict; obtain official Shark IZ862H manual; verify exact Amazon selected variants for the eight market records; complete US candidate comparison and retain/replace/hold matrix. No production edits. |
| Audit record | `docs/audits/cordless-vacuum-cleaners-us-uk-2026-11-25.md` |

## 4. Existing guide queue

The queue preserves the catalogue order as an inventory only. Work priority after the active pilot may be adjusted using validated buyer intent, commercial opportunity, freshness risk and effort. Do not silently change a guide slug or create a duplicate route.

| # | Guide | Slug | Status |
|---:|---|---|---|
| 1 | Home Office Ergonomics | `home-office-ergonomics-us-uk` | QUEUED |
| 2 | Portable Power & Travel Tech | `portable-power-travel-tech-us-uk` | QUEUED |
| 3 | Smart Home Security Cameras | `smart-home-security-cameras-us-uk` | QUEUED |
| 4 | Wi-Fi 7 Home Routers & Mesh Systems | `wifi-7-home-mesh-routers-us-uk` | QUEUED |
| 5 | USB-C GaN Chargers | `usb-c-gan-chargers-us-uk` | QUEUED |
| 6 | Webcams | `webcams-video-calls-streaming-us-uk` | QUEUED |
| 7 | 4K USB-C Monitors | `4k-usb-c-monitors-home-office-us-uk` | QUEUED |
| 8 | Thunderbolt / USB-C Docking Stations | `thunderbolt-usb-c-docking-stations-us-uk` | QUEUED |
| 9 | Portable SSDs | `portable-ssd-external-storage-us-uk` | QUEUED |
| 10 | Air Fryers | `air-fryers-us-uk` | QUEUED |
| 11 | Cordless Vacuum Cleaners | `cordless-vacuum-cleaners-us-uk` | IN_PROGRESS |
| 12 | Cordless Drills | `cordless-drills-us-uk` | QUEUED |
| 13 | Robot Vacuum & Mop Combos | `robot-vacuum-mops-us-uk` | QUEUED |
| 14 | Noise-Cancelling Headphones | `noise-cancelling-headphones-us-uk` | QUEUED |
| 15 | Wireless Earbuds | `wireless-earbuds-us-uk` | QUEUED |
| 16 | Home Air Purifiers | `home-air-purifiers-us-uk` | QUEUED |
| 17 | Espresso Coffee Machines | `espresso-coffee-machines-us-uk` | QUEUED |
| 18 | Tablets for Work & Study | `tablets-for-work-study-us-uk` | QUEUED |
| 19 | Dash Cameras | `dash-cams-us-uk` | QUEUED |
| 20 | Portable Projectors | `portable-projectors-us-uk` | QUEUED |
| 21 | Home NAS Storage | `home-nas-storage-us-uk` | QUEUED |
| 22 | Electric Toothbrushes | `electric-toothbrushes-us-uk` | QUEUED |
| 23 | Gaming Mice | `gaming-mice-us-uk` | QUEUED |
| 24 | Smartwatches | `smartwatches-us-uk` | QUEUED |
| 25 | Home Printers | `home-printers-us-uk` | QUEUED |

## 5. Reusable evidence — do not repeat without reason

- `docs/25_GUIDE_100_PRODUCT_AUDIT_2026-11-18.md`: full structural sweep of 25 guides / 100 products and targeted primary-source spot checks; retain its model, regional-risk and unresolved-issue notes.
- `EDITORIAL_APPROVAL_AUDIT_25_GUIDES.md`: 19 Nov editorial preflight and owner-approved release record for all 25 guides; explicitly states it is not full live re-verification of every manufacturer claim, Amazon listing, stock, price or image right. Reuse the guide-by-guide caveats, including the cordless-vacuum product notes.
- `EXISTING_25_GUIDES_INTENT_MAP.md`: existing canonical page intent map and provisional UK primary queries; do not recreate these clusters. Use it as the initial intent baseline and update only when fresh evidence changes the decision.
- `PRODUCT_STRUCTURED_DATA_POLICY.md`: owner-approved standard for editorial guide JSON-LD; exactly one ItemList of Thing items, Article and BreadcrumbList; no Product rich-result entities for ordinary comparison guides.
- `docs/RELEASE_INDEXING_PINTEREST_GOVERNANCE.md`: release, indexing and Pinterest approval gates; historical pre-launch sections are superseded by its dated status notes and latest master handoff.
- `MASTER_PROJECT.md`, `AGENT_HANDOFF.md`, `ROADMAP_2026-11-24.md`: operational and indexing context.
- Open PRs #38–#41 remain subject to their recorded draft/unmerged status; do not duplicate their work or assume approval.

## 6. New opportunity queue

New topics/keywords/products are research-only until:
1. overlap is checked against the 25 live guides and open PR #39/#41 datasets;
2. market-specific buyer intent and SERP are evidenced;
3. products and exact regional variants are verified;
4. an original buyer decision is demonstrated;
5. an individual page audit reaches PASS;
6. the owner approves any publication.

The one-million-product discovery ambition is a database/research pipeline objective, not a target for one million indexable URLs.

## 7. Change log

### 25 November 2026
- Established v1.0 page/product quality workflow and 100-point page scorecard.
- Reused the 18 Nov 25-guide/100-product structural audit, 19 Nov editorial approval audit and existing 25-guide intent map as baselines; no repeat audit performed.
- Started the Cordless Vacuum Cleaners page audit as the pilot because of saved UK commercial keyword signals.
- Current SERP research identified strong test-led competitors; page differentiation must be specification/source-led and must not claim physical testing.
- Four primary manufacturer source pages were located/rechecked; product and marketplace conflicts are recorded in the individual audit.
- No site code, catalogue, page content, affiliate destination, sitemap, robots, index status, PR merge or deployment was changed.

## 8. Next active unit for the next operator

**Continue:** `cordless-vacuum-cleaners-us-uk`  
**Do not start page #2 until the active page has a documented disposition and exact remaining actions.**  
**First task:** continue from the 25 Nov audit addendum. Do not repeat the Shark UK identity search: catalogue model IZ400UKT is confirmed; 0.19 L belongs to separate IZ400UK. Resolve Bosch BCS1051GB 2.9 kg vs 3.8 kg; obtain official Shark IZ862H manual; verify Amazon selected variants for all eight UK/US records; finish US candidate screening and retain/replace/hold matrix. Preserve search links unless exact direct offers are proven.

## 9. Release milestones, permanent completion lock and no-repeat rule (owner confirmed 25 Nov 2026)

The initial cohort is the 25 existing guides. Each guide's audit covers its four catalogue products; exact product-market verification is also counted separately.

| Milestone | Required full PASS pages | Release gate |
|---|---:|---|
| 40% | 10 / 25 | All 10 page audits and included product records pass; owner approval; controlled merge; production deployment and route/SEO verification |
| 60% | 15 / 25 | Same gates for cumulative cohort |
| 80% | 20 / 25 | Same gates for cumulative cohort |
| 100% | 25 / 25 | Close initial cohort; only then start expansion queue |

A milestone does not itself authorise merging or publishing. Each exact batch requires owner approval. The current counter remains 0/25 (0%) until a complete audit earns PASS. No backdating or credit for partial work.

### Locked complete pages
After PASS + owner approval + merge + verified production deployment, set status to LOCKED_COMPLETE and record:
- audit file and final score / blockers = 0;
- approved PR and merge commit;
- deployed commit and production verification date;
- public route, canonical, robots, sitemap and internal-link checks;
- product-market and affiliate destination verification;
- any follow-up monitoring trigger.

Successors must not redo a locked page. Reopen only for a recorded material trigger: recall/safety issue, model/spec/variant/warranty change, broken affiliate route or policy change, indexing/manual action, route/canonical/robots/schema regression, material buyer-intent/SERP shift, or owner request. Perform a delta audit limited to the trigger unless evidence requires wider review.

### Extended mandatory checks
Use the additional energy/environment and Google indexability checklist in CONTENT_QUALITY_OPERATING_STANDARD.md §9. Apply product-specific checks only when material; record N/A and why. Do not claim an electricity running cost without dated local tariff and explicit usage assumptions. Do not claim moisture suitability without manufacturer/IP evidence.

### Progress accounting
- Headline percentage = complete PASS guide audits / 25. A guide is not counted until its four product records have no unresolved hard blocker.
- QA, owner approval, merged, deployed, indexed and performance are separate counters.
- Products verified = exact product-market units fully evidenced / total relevant product-market units, never a percentage inferred from guide count.
- At 100%, expansion begins as a separate queue. Every new product/page passes the same gates before publish or schedule.

### 25 November 2026 — Continued vacuum evidence checkpoint
- Corrected Shark UK variant interpretation against current `main` catalogue: intended model is IZ400UKT; separate IZ400UK is 0.19 L. Do not transfer IZ400UK capacity to IZ400UKT. Amazon ASIN B0B42KZTH2 still has mismatched model fields and is not approved.
- Added official Shark IZ400UKT product source, Miele 11819170 official technical PDF, Samsung VS28C9784QK support/manual listing, and recorded Dyson V15 contradictory availability signals.
- Screened four UK alternatives from primary manufacturer sources: Dyson V16, Shark PowerDetect IP1251UK, Bosch Unlimited 10 ProPower BCS1051GB, Hoover HF3 Pet HF310P 001. Their runtime claims have different test conditions; no replacement is approved yet.
- US candidates found from primary sources for Shark PowerDetect IP1251 and Dyson V16; their specs are distinct from UK variants. Bosch/Hoover US counterparts not established; Miele HX3 Plus official source not found.
- Amazon direct ASIN approvals remain 0/4 UK and 0/4 US. No catalogue changes, affiliate edits, publication, PR merge or deployment.

### 25 November 2026 — Amazon direct listing verification checkpoint
- Amazon UK ASIN B0B42KZTH2 rejected/unapproved: model number/title IZ400UK vs Model Name IZ400UKT; conflicting specs/package and no featured offers. Do not use as direct affiliate destination for catalogue IZ400UKT.
- No reliable exact Amazon UK direct ASIN surfaced for Dyson V15, Samsung VS28C9784QK/EU or Miele 11819170. Amazon US direct search blocked by robots during this check; absence is not proven.
- Approved Amazon direct links remain 0/4 UK and 0/4 US. Use labelled search URLs unless exact buyable variant is verified.

### 25 November 2026 — Active page checkpoint correction
- Controlling correction is recorded at the end of `docs/audits/cordless-vacuum-cleaners-us-uk-2026-11-25.md`. Shark UK is IZ400UKT; 0.19 L belongs only to IZ400UK. Reject Amazon ASIN B0B42KZTH2 due to model-number/title IZ400UK vs Model Name IZ400UKT, 0.7 L / 5.11 kg / 25.2 V listing metadata and no featured offer.
- Bosch BCS1051GB weight remains unresolved because official pages display 3.8 kg measured ready-for-operation, 2.9 kg ready-for-use with tube/floor nozzle and 5.3 kg net weight. Do not choose a single published value.
- Shark US IZ862H official parts compatibility is corroborated, but official vacuum manual/spec source remains missing. Amazon direct listing approvals remain 0/4 UK and 0/4 US.
- Current full-audit count remains 0/25 PASS (0%); active page remains IN_PROGRESS. No page or product-market unit is counted from partial research.
