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
| Legacy evidence awaiting page-by-page reconciliation | 24 | Prior audits, approvals, source references and release evidence exist; map them before any new checks |
| Product units in existing catalogue | 100 | Four per guide |
| Fully verified product-market units under this new audit | Not yet counted | Existing 18 Nov audit is reused as partial evidence, not relabelled as full pass |

**Important:** The 18 Nov 25-guide/100-product ledger is a reusable structural and targeted-source baseline. It is not discarded and will not be repeated. Its scope did not certify every product claim, current retailer listing, exact Amazon variant or complete editorial quality for every guide. Accordingly, 0/25 means zero pages have yet received a complete v1.0 PASS; it does not mean no previous work exists.

## 2. Status definitions

- `LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING`: prior audit, approval, source, CI or release evidence exists; map it first and perform only missing delta checks. Do not call the page not started.
- `QUEUED`: use only when no relevant prior work or evidence exists after checking the legacy records.
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
| 1 | Home Office Ergonomics | `home-office-ergonomics-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 2 | Portable Power & Travel Tech | `portable-power-travel-tech-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 3 | Smart Home Security Cameras | `smart-home-security-cameras-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 4 | Wi-Fi 7 Home Routers & Mesh Systems | `wifi-7-home-mesh-routers-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 5 | USB-C GaN Chargers | `usb-c-gan-chargers-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 6 | Webcams | `webcams-video-calls-streaming-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 7 | 4K USB-C Monitors | `4k-usb-c-monitors-home-office-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 8 | Thunderbolt / USB-C Docking Stations | `thunderbolt-usb-c-docking-stations-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 9 | Portable SSDs | `portable-ssd-external-storage-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 10 | Air Fryers | `air-fryers-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 11 | Cordless Vacuum Cleaners | `cordless-vacuum-cleaners-us-uk` | IN_PROGRESS |
| 12 | Cordless Drills | `cordless-drills-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 13 | Robot Vacuum & Mop Combos | `robot-vacuum-mops-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 14 | Noise-Cancelling Headphones | `noise-cancelling-headphones-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 15 | Wireless Earbuds | `wireless-earbuds-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 16 | Home Air Purifiers | `home-air-purifiers-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 17 | Espresso Coffee Machines | `espresso-coffee-machines-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 18 | Tablets for Work & Study | `tablets-for-work-study-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 19 | Dash Cameras | `dash-cams-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 20 | Portable Projectors | `portable-projectors-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 21 | Home NAS Storage | `home-nas-storage-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 22 | Electric Toothbrushes | `electric-toothbrushes-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 23 | Gaming Mice | `gaming-mice-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 24 | Smartwatches | `smartwatches-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |
| 25 | Home Printers | `home-printers-us-uk` | LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING |

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

## 10. Historical progress reconciliation — do not read 0/25 as overall progress

The initial catalogue and release work is not zero. The separate, scope-specific historical counters are:

| Historical milestone | Verified result | Scope boundary |
|---|---:|---|
| Owner-approved / published guides | **25/25** | Confirmed by 19 Nov editorial approval audit and current main catalogue editorialStatus. Not equivalent to v1.0 full PASS. |
| Guide records present | **25/25** | Current catalogue baseline. |
| Product records present | **100/100** | Four records per guide. |
| Required base product fields present | **100/100** | 18 Nov structural audit; not claim-level fact verification. |
| Manufacturer source-reference slots inventoried | **100/100** | 19 Nov editorial audit shows 4/4 references per guide; not live-link or claim-by-claim certification. |
| SEO metadata release | **25/25 guide titles** | PR #19 merged and production deployment recorded by PR #21. Four descriptions shortened. |
| Exact-SHA CI | **PASS on PR #37 SHA** | Run 45350133248 passed build-and-audit; accessibility/Lighthouse steps were skipped in this run. |
| Full v1.0 page certification | **0/25 currently certified** | New, narrower standard; legacy evidence has not yet been cross-mapped page by page. Not an overall progress score. |

The 0/25 v1.0 figure was created before a complete legacy evidence crosswalk existed. It is retained only as the count of fully certified pages under the new standard. It must not erase or conceal the historical completed milestones above.

### Mandatory no-repeat handling
- Read docs/LEGACY_EVIDENCE_RECONCILIATION_2026-11-25.md before setting a guide to QUEUED or repeating any test.
- For the 24 non-active pages, map existing evidence first. Use LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING until the evidence map is complete; do not imply no work has started.
- Credit exact prior evidence as SATISFIED — LEGACY EVIDENCE when its scope, date, source, commit and result match the criterion.
- Only perform missing delta checks. Never rerun the 18 Nov structural audit, 19 Nov approval inventory, PR #19 metadata release or PR #37 exact-SHA test without a material trigger.
- The 25/25 prior publication milestone remains completed. v1.0 certification, current indexing, retailer offers and current commercial performance remain separate measures.

## 25 November 2026 — 10:35 Asia/Amman / 07:35 UTC — Active page evidence delta
- Samsung VS28C9784QK v0.7 official manual is now located (file ID 10789220; 11 Aug 2025) but not content-reviewed; runtime/battery bundle check remains open.
- Bosch BCS1051GB manual links are listed on the official support page but manual contents are not extracted. Weight remains withheld due differently labelled 2.9 kg, 3.8 kg and 5.3 kg figures.
- Shark IZ862H third-party owner-guide mirror is not accepted as primary evidence; official manual remains open.
- Page remains IN_PROGRESS, unscored; Amazon direct ASIN approval 0/4 UK and 0/4 US; no catalogue/affiliate/production changes. Continue the active page only.


## 25 November 2026 — 10:39 Asia/Amman / 07:39 UTC — Samsung product-market evidence status updated
- UK VS28C9784QK/EU official manual v0.7 content reviewed. Runtime and battery claims are now supported: up to 160 min only at MIN with non-motorised tool and two batteries; manual details large/light battery times and lower powered-head runtimes. SKU-specific product page confirms quantity 2 and bundle accessories. Mark this evidence SATISFIED; do not repeat.
- Remaining Samsung UK open item: current exact retailer offer/seller/condition/stock. US VS28C9762UK/AA remains a separate record.
- Bosch official manual content/weight scope and Shark US official IZ862H manual remain open. Cordless Vacuum page remains IN_PROGRESS and unscored; no catalogue/affiliate/production change.


## 25 November 2026 — 10:46 Asia/Amman / 07:46 UTC — Samsung gate closure + Bosch/Shark source follow-up (documentation-only)

### Samsung UK VS28C9784QK/EU — runtime/manual gate closed
- Exact UK support page and official v0.7 manual were reviewed. The manual family scope includes VS28C97**** and therefore covers VS28C9784QK; the exact model's Samsung UK Business product page confirms two batteries and the 160-minute headline.
- Approved claim is limited to up to 160 minutes at minimum power with a non-motorised tool, using two batteries consecutively. This is not powered-floor-brush runtime. With the larger VCA-SBTC97 battery, manual runtime at MIN is approx. 100 min with a non-motorised tool; with the smaller VCA-SBTC97S/VCA-SBTD95 battery it is approx. 60 min. Powered brush runtimes are lower (Active Dual Brush: approx. 58/34 min at MIN for large/small battery; Slim LED Brush+: approx. 77/45 min).
- Battery details: VCA-SBTC97 Li-ion 25.2 V, 3970 mAh, 5 h charge; VCA-SBTC97S/VCA-SBTD95 Li-ion 25.2 V, 2200 mAh, 3.5 h charge. Do not infer optional family accessories as included; use exact SKU bundle list.
- Gate status: official manual discovery CLOSED; manual content review CLOSED for runtime/battery/charge/accessory caveats; runtime/battery-count evidence SATISFIED. Remaining commercial gate: exact live seller, condition and stock for UK destination. US VS28C9762UK/AA remains a separate evidence record.
- Sources: https://www.samsung.com/uk/support/model/VS28C9784QK/WA/ ; https://downloadcenter.samsung.com/content/UM/202508/20250811201509973/O_DJ68-00900C-07_IB_VS9700_EU_EN_250702.pdf ; https://www.samsung.com/uk/business/vacuum-cleaners/stick/bespoke-jet-plus-210w-all-in-one-clean-station-black-vs28c9784qk-eu/

### Bosch BCS1051GB — official weight labels compared; still withheld
- Bosch UK official product page labels 3.8 kg as “Measured weight, ready for op.”: https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB
- Bosch UK official support/specification page lists 2.9 kg as “Weight (ready for use with tube and floor nozzle)” and 5.3 kg as “Net weight”: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01
- Bosch official BSH specification PDF also reports 2.9 kg for ready-for-use with tube and floor nozzle: https://media3.bsh-group.com/Documents/specsheet/en-IE/BCS1051GB.pdf
- These are official manufacturer sources but the 2.9 kg and 3.8 kg ready/operational labels do not reconcile clearly. Net weight 5.3 kg is a separate label. Do not select one weight for editorial copy until Bosch clarifies measurement method/scope or a definitive manual/package label resolves it. Other official runtime details remain 100 min ECO non-electrical accessory, 80 min ECO powered floor nozzle, 30 min Auto powered nozzle, 13 min Turbo powered nozzle; one 5Ah 18V battery; 0.4 L; approx. 71 min charge.
- Manual listing is visible on official support pages, but actual manual contents have not yet been extracted. Manual-content gate remains OPEN.

### Shark US IZ862H — no official-hosted manual found in this pass
- Exact IZ862H/IZ800 owner-guide copies are available from third-party hosts, including https://manualsfile.com/product/k2zp91ivwkl.html and https://manuals.plus/m/22f03d9d160187fec6232a240f5b604b60b7d769be0e252e824d48533da4e4a5 . A PDF mirror at https://qcg-media.s3.amazonaws.com/media/uploads/118513/2022/06/20220630_202169_IZ800SeriesIBMPMv5LR3.pdf carries Sharkclean.com manual content, but is not hosted on an official SharkNinja domain.
- The manual mirror states 60 min ECO in hand-vac mode and 10 min Boost in hand-vac mode, with Clean Sense IQ runtime variable by debris/use; 3.5 h full charge; filter/dust-cup drying up to 48 h. These are secondary-hosted manual claims only and are NOT approved for manufacturer-verified editorial claims at this point.
- SharkNinja official parts pages corroborate IZ862H compatibility with battery XBATR725SL, charging cord XCHRIZ800 and dust-cup component, but do not establish full product specifications or manual instructions. Official support route: https://www.sharkninja.com/parts-support?SKU=IZ862H
- Primary-source/manual gate remains OPEN. Do not state voltage, weight, bin capacity, runtime, or care instructions as manufacturer-verified from these mirrors.

### Page state / release discipline
- Active page remains Cordless Vacuum Cleaners, IN_PROGRESS and unscored. Samsung UK evidence gate closed; Bosch weight/manual gates remain open; Shark US primary manual gate remains open; exact retailer/Amazon offer verification and UK/US market-fit comparison remain incomplete.
- Amazon direct-ASIN approvals remain 0/4 UK and 0/4 US. No ASIN, affiliate destination, catalogue/product/page content, source code, Cloudflare setting, sitemap, robots, PR merge or production deployment changed.
- Continue only the unresolved items above. Do not start guide #2 and do not repeat completed catalogue/SEO/CI/source checks.


## 25 November 2026 — 11:07 Asia/Amman / 08:07 UTC — Bosch manual access + Shark IZ862H guide corroboration (documentation-only)

### Shark US IZ862H — exact-series owner guide text now cross-checked; still secondary-hosted
- Search retrieved the 24-page IZ800 Series Owner's Guide explicitly associated with exact model IZ862H. The manual text identifies SharkNinja Operating LLC, Sharkclean.com and document code IZ800Series_IB_MP_Mv20; ManualsFile reports model IZ862H, series IZ800, document published 8 July 2022 and updated 15 Jan 2025. ManualsLib independently exposes the same IZ800 guide and exact IZ862H related-product association.
- Extracted claims from the guide: battery full charge approx. 3.5 hours; ECO runtime up to 60 minutes in handheld mode; Boost runtime up to 10 minutes in handheld mode; Clean Sense IQ runtime varies with use/debris; filters and dust cup should air-dry fully up to 48 hours after rinsing. The 60/10-minute claims are mode/handheld-specific, not universal floor-head runtime promises.
- This is a manual bearing manufacturer authorship and model-family association, but the copies retrieved are hosted by third-party manual libraries, not SharkNinja/Sharkclean. Therefore it is corroborative secondary-hosted evidence only; it does NOT close the official-hosted primary-source gate. Do not upgrade it to manufacturer-primary evidence or publish its claims as independently verified against the official manual until SharkNinja provides or exposes the same file on an official domain.
- References: https://manualsfile.com/product/k2zp91ivwkl.html ; https://www.manualslib.com/manual/3357248/Shark-Stratos-Clean-Sense-Iq-Multiflex-Iz862h.html ; https://www.manualslib.com/manual/2778286/shark-stratos-clean-sense-iq-multiflex-iz800-series.html
- SharkNinja Parts & Support page for SKU IZ862H was opened but the rendered content does not surface an IZ862H-specific manual or a model-specific document link. Official parts compatibility pages remain component-level corroboration only. Primary source gate remains OPEN.

### Bosch BCS1051GB — official manuals are listed, download contents not retrieved
- Bosch's exact E-Nr BCS1051GB/01 service page displays multiple User Manual and Interactive User Manual entries. The page's rendered web extraction does not expose the document download URLs, so no official user-manual content has yet been reviewed. Do not mark the manual-content gate complete.
- The official Bosch support specification page continues to list net weight 5.3 kg and ready-for-use with tube/floor nozzle 2.9 kg. Bosch product overview separately labels 3.8 kg “Measured weight, ready for op.”. Official spec sheet PDF search result also states 2.9 kg ready-for-use with tube/floor nozzle. These values use different labels and are not reconciled; keep one single weight claim out of editorial copy pending Bosch clarification.
- Bosch official support source: https://www.bosch-home.co.uk/en/productservice/BCS1051GB-01 ; support specification: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01 ; product overview: https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB ; official spec sheet: https://media3.bsh-group.com/Documents/specsheet/en-IE/BCS1051GB.pdf

### Status and next action
- No quality gate closed in this pass: Shark manual evidence is better corroborated but still third-party-hosted; Bosch official manual is listed but not extracted and weight remains unresolved.
- Active Cordless Vacuum Cleaners page remains IN_PROGRESS and unscored. Do not start guide #2. Continue with exact official manual acquisition (Bosch download endpoint / Bosch support clarification; SharkNinja official support response or official-hosted guide), exact current retail/Amazon offer verification and separate UK/US product-market comparison.
- No production, catalogue, product copy, affiliate destination, Cloudflare setting, sitemap, robots, merge, deployment or publication changes were made.
