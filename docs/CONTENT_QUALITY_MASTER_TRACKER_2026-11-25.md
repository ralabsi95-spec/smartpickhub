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
| Initial findings | Continued audit has closed Shark IA1241UK official manual/safety gate; fresh UK SERP evidence strengthens Dyson V15 and Bosch BCS1051GB as editorial benchmarks/candidates. Bosch exact official offer is £629.99/In stock with 4.8/5 from 788, but weight remains conflicted (2.9 vs 3.8kg). Dyson V15 stock UI remains contradictory; Miele 11819170 has Expert-channel purchase route but direct stock unconfirmed. Which? provides exact IZ400UKT Amazon ASIN lead B0B42QJL5B, but Amazon fetch returned 503 and offer/seller/condition are unverified; B0B42KZTH2 remains rejected. Samsung independent test evidence is family-level only pending exact SKU/bundle match. Amazon exact selected offers remain unapproved. |
| Next action | Resolve Bosch weight scope; inspect Amazon ASIN lead B0B42QJL5B when accessible; exact-match Samsung test SKU/bundle; verify remaining UK exact Amazon offers; continue US IZ862H official manual and exact-offer work separately; then final UK/US scorecards and disposition. No production edits. |
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


## 25 November 2026 — 11:55 Asia/Amman / 08:55 UTC — Bosch official manual extracted and runtime conditions verified (documentation-only)

### Bosch BCS1051GB — manual content now reviewed; runtime claim gate closed with scope
- The exact Bosch GB service page for E-Nr BCS1051GB/01 lists multiple User Manual entries. The exact product-specific manual landing URL was resolved as https://www.bosch-home.co.uk/manual/8001293734?productCode=BCS1051GB . Bosch's official BSH-hosted PDF is https://media3.bsh-group.com/Documents/8001293733_B.pdf (160-page multilingual Information for Use, cover identifies BBS10 / BCS10 / BKS10 / BSS10 / BXS10 family; English instructions pages 21–27). The product-specific Bosch manual page is the association evidence for BCS1051GB; the manual's family scope is recorded transparently.
- English manual pp.23–24 / extracted lines 924–942 states maximum runtime applies in Eco mode with non-electric accessories; other suction modes and accessories reduce runtime. Runtime table: 3.0Ah 60 min; 4.0Ah Power+ 80 min; 5.0Ah 100 min. The official BCS1051GB support specification confirms one 5.0Ah battery pack and maximum runtime 100 min, so the safe claim is “up to 100 minutes in Eco mode with a non-electric accessory on the supplied 5.0Ah battery”; do not state 100 min with the powered MicroClean floor nozzle.
- The manual's English section also says actual displayed remaining runtime may vary and battery capacity/runtime naturally decline with Li-ion battery ageing (lines 969–979). It instructs not to let filters contact liquids (lines 1057–1064). This is an additional care note; do not confuse with other product families' washable-filter claims.
- Gate status: official manual discovery and content review SATISFIED for BCS10-family operation, runtime conditions, charging/battery handling and maintenance instructions, linked through exact BCS1051GB product-specific Bosch manual page. This does NOT resolve weight. Weight still remains withheld: Bosch support says 2.9 kg ready for use with tube/floor nozzle and 5.3 kg net; Bosch product page says 3.8 kg measured weight ready for operation. Manual does not give a comparable weight measurement or reconcile these labels. Keep weight claim out of editorial copy pending Bosch clarification.
- Sources: https://www.bosch-home.co.uk/en/productservice/BCS1051GB-01 ; https://www.bosch-home.co.uk/manual/8001293734?productCode=BCS1051GB ; https://media3.bsh-group.com/Documents/8001293733_B.pdf ; https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01 ; https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB

### Shark IZ862H — official-source status unchanged
- No SharkNinja/Sharkclean-hosted exact IZ862H/IZ800-series owner guide surfaced in this search. The third-party-hosted copy remains secondary corroboration only. Official parts support pages verify compatible parts but not full product specifications/manual instructions. Keep the primary manual gate OPEN.

### Page state / next action
- One new evidence gate closed: Bosch BCS1051GB manual/runtime/care content (with exact family-scope caveat). Bosch weight remains a hard publication hold for weight only; it does not invalidate other independently supported specs.
- Shark US official manual gate remains open. Exact retailer/Amazon offer checks and UK/US buyer-intent/product disposition remain open. Cordless Vacuum Cleaners page remains IN_PROGRESS and unscored. Do not start guide #2 or repeat completed checks.
- No catalogue/product/page content, affiliate destination, source code, Cloudflare setting, sitemap, robots, PR merge, production deployment or publication changed.


## 25 November 2026 — 12:05 Asia/Amman / 09:05 UTC — exact retailer availability and price snapshots (non-Amazon; documentation-only)

### UK Samsung VS28C9784QK/EU — exact non-Amazon retailer offer observed
- Harvey Norman UK exact SKU page identifies VS28C9784QK/EU and displays £709 (was £1,099) with an Add to cart control on 25 Nov 2026. Product page: https://www.harveynorman.co.uk/products/samsung-bespoke-jet-ai-bagless-cordless-vacuum-cleaner-vs28c9784qk-eu-black
- The same exact-SKU page lists the bundle: Active Dual Brush, Slim LED Brush+, Pet Tool+, accessory cradle, combination/long-reach crevice tool, flex tool, 100min/60min battery, charging kit, 3 dust bags and All-in-one Clean Station. Its product description states up to 100 min with a 3970mAh large battery at minimum power with a non-motorised tool; powered accessories reduce runtime. This aligns with Samsung manual evidence already closed.
- Availability is not fully resolved because delivery/collection is postcode/store dependent; Add to cart is visible but no universal stock promise is made. Record as exact model + retailer + observed price + add-to-cart snapshot, not confirmed nationwide stock. This is NOT an Amazon listing and must not be used as an Amazon Associates destination.

### US Samsung VS28C9762UK/AA — retailer availability warning
- Best Buy exact model page identifies VS28C9762UK/AA, SKU 6544286, and shows clearance $200.99 but explicitly “Unavailable”; another Best Buy page states item no longer available in new condition. This is a single retailer signal only, not proof of market-wide discontinuation or absence of Amazon stock.
- Official Samsung US model spec PDF confirms exact SKU identity and 280AW / up to 100-min headline, but does not establish current sellable stock. Keep US commercial status as LIMITED/UNCONFIRMED and do not transfer UK VS28C9784QK/EU offer or specs to it.
- Sources: https://www.bestbuy.com/product/samsung-bespoke-jet-ai-cordless-stick-vacuum-with-all-in-one-clean-station-satin-black/J3ZYG26WWK/sku/6544286 ; https://image-us.samsung.com/SamsungUS/home/home-appliances/vacuums/jet-stick/vs28c9762ukaa/pdf/13314.5_VS28C9762UK_Bespoke_JetAI_National_V10.pdf

### Miele Triflex HX2 — UK and US official/retailer channels
- UK exact material 11819170 / EAN 4002516449959: Miele UK exact product page says “Permanently out of stock”. Miele UK category/brand page simultaneously lists this SKU at £649 and says “Available to purchase with Miele Experts” (call 0330 160 6600). Treat as manufacturer direct web stock unavailable, with expert-channel purchase route advertised but stock not independently confirmed. Do not mark simply in stock or discontinued.
- US exact material 11827000 / EAN 4002516453017: Miele USA product page displays $849 sale price and exact model/specification data; no primary page cart/stock status was exposed in retrieved content. Red Vacuums lists the exact model in stock at $849 and describes itself as an authorised Miele dealer; this is a retailer stock signal, not an Amazon offer. Abt also lists exact model at $849 with shipping details, but its availability remains retailer-specific.
- Sources: https://www.miele.co.uk/product/11819170/cordless-stick-vacuum-cleaners-triflex-hx2-lotus-white ; https://www.miele.co.uk/c/triflex-hx2-cordless-vacuum-10294.htm ; https://www.mieleusa.com/product/11827000/cordless-stick-vacuum-cleaner-triflex-hx2-lotus-white ; https://www.redvacuums.com/products/miele-triflex-hx2-cordless-stick-vac-11827000 ; https://www.abt.com/Miele-Triflex-HX2-Lotus-White-Cordless-Stick-Vacuum-Cleaner-11827000/p/188992.html

### Dyson V15 Detect — manufacturer channel snapshots
- Dyson UK exact V15 Detect Absolute page currently has contradictory rendered states: one section says out of stock while another shows £479.99, in-stock/add-to-basket messaging. Do not treat as verified stock until the contradiction is resolved on a fresh live session.
- Dyson US exact V15 Detect page displays $599.99, marked “In stock in 10–14 days”, with official specs (240 AW, up to 60 min, 0.77 L, 6.83 lb). This is a Dyson direct-channel offer snapshot, not Amazon stock or price.
- Sources: https://www.dyson.co.uk/vacuum-cleaners/cordless/v15/detect-yellow-nickel ; https://www.dyson.com/vacuum-cleaners/cordless/v15/detect-yellow

### Amazon direct-link approval and commercial disposition
- Amazon US direct product pages were not accessible in this retrieval session; no exact selected ASIN / featured offer / seller / condition was independently confirmed. Amazon UK exact direct listings likewise not confirmed in this pass.
- Approved Amazon direct-ASIN count remains 0/4 UK and 0/4 US. Do not replace this with third-party tracker observations or retailer offers. Non-Amazon retailer snapshots are recorded only as market/price/availability context.
- No final retain/replace decision is made yet. Product-market records remain separate. Active page remains IN_PROGRESS and unscored; no guide #2.
- No catalogue, page copy, affiliate URL, code, Cloudflare configuration, sitemap, robots, PR merge, production deployment or publication changed.


## 25 November 2026 — 11:58 Asia/Amman / 08:58 UTC — targeted source retry and evidence reconciliation
- Shark IZ862H: exact-model searches limited to SharkNinja.com/Sharkclean.com did not surface an official-hosted manual/specification. Official IP1251 comparator page is not an IZ862H spec source. Third-party IZ800 guide remains secondary-hosted only; primary manual gate OPEN.
- Miele UK Triflex HX2 material 11819170: added exact Miele-hosted product sheet (EAN 4002516449959). Verified runtime distinctions: LOW 60 min PowerUnit solo / 30 min with electrical accessories; HIGH 14 min with electrical accessories; 0.5 L, 3.6 kg, 25.2 V, 2500 mAh, 77 dB, 240 min charge. Use only exact listed bundle.
- Dyson V15 UK: fresh exact page extraction still contains conflicting out-of-stock and in-stock/Add to basket blocks. Availability remains UNCONFIRMED; do not cite £479.99 as a verified offer.
- Amazon: no exact selected buyable Amazon offer with matching model, seller and condition verified in this pass. Direct-ASIN approvals remain 0/4 UK and 0/4 US. Irrelevant third-party deal/tracker results are not ASIN evidence.
- Page remains IN_PROGRESS and unscored; no final product disposition, page #2, content/code/catalogue/affiliate changes, merge or deployment.
- Sources: https://www.sharkninja.com/shark-powerdetect-cordless-stick-vacuum/IP1251.html ; https://qcg-media.s3.amazonaws.com/media/uploads/118513/2022/06/20220630_202169_IZ800SeriesIBMPMv5LR3.pdf ; https://media.miele.com/downloads/n-/gb/FS_11819170_GBE_GB-en-GB.pdf ; https://www.dyson.co.uk/vacuum-cleaners/cordless/v15/detect-yellow-nickel


## 25 November 2026 — 12:07 Asia/Amman / 09:07 UTC — market demand and exact offer comparison (documentation-only)
- Directional Brandwave October 2026 data: UK tracked set (13 brands) Henry 43%, Shark 15.8%, Dyson 10.5%, Miele 5.8%, Hoover 4.7%; US tracked set (15 brands) Shark 30.7%, Dyson 25.1%, Roborock 11.2%, BISSELL 6.2%, Miele 6.2%. These are shares within Brandwave's tracked brand sample, not total search volume or cordless-specific keyword volume. Do not extrapolate.
- Buyer-intent SERPs support distinct clusters: pet hair, carpet deep clean, hard floors, filtration/allergies, battery runtime, emptying, weight/handling and attachments. Use these as separate page sections/decision criteria; existing intent map remains the hypothesis baseline.
- UK exact offers: Bosch BCS1051GB official page shows £629.99, In stock, Add to cart, 4.8/5 from 788 ratings and a 5-year warranty offer; Bosch weight conflict remains unresolved and withheld. Shark IP1251UK official page £489.99 but also back-in-stock notification; stock unconfirmed. Dyson V16 UK price and ratings snapshots vary by renderer and page also has out-of-stock notification; availability unconfirmed. New candidate lead IA1241UK: John Lewis £229.99, 4.4/5 from 514 reviews; exact manufacturer documentation and Amazon variant validation pending. This is distinct from IP1251UK/IP1251UKT.
- US exact offers: Shark IZ862H Best Buy SKU 6514613 $499.99, 4.4/5 from 739 reviews, Add to cart (retailer offer verified; official manual still open). Samsung VS28C9762UK/AA Best Buy says no longer available new; 4.2/5 from 81 reviews, clearance marked unavailable. Miele 11827000 Miele US $849, 4.6/5 from 19 reviews; other retailer offers are seller/location-specific. Dyson V15 direct page contradictory; Best Buy V15 bundles are not assumed identical.
- Independent intent/performance references: RTINGS Oct 15 2026 pet-hair review, Vacuum Wars Nov 24 2026 cordless ranking, Which? 2026 buying guide. These are editorial/lab evidence, not proof of Amazon availability.
- Amazon direct-ASIN approvals remain 0/4 UK and 0/4 US. No final product disposition. Page remains IN_PROGRESS and unscored. No catalogue/content/affiliate/code/Cloudflare/robots/sitemap/merge/deploy/publication changes.
- Sources: https://gobrandwave.com/demand/uk/categories/uk-vacuum-brands ; https://gobrandwave.com/demand/us/categories/us-vacuum-brands ; https://www.bosch-home.co.uk/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited-10/BCS1051GB ; https://www.sharkninja.co.uk/shark-powerdetect-cordless-vacuum-cleaner/IP1251UK.html ; https://www.johnlewis.com/browse/electricals/vacuum-cleaners/vacuum-cleaners/cordless/_/N-aifZlmug?sortBy=popularity ; https://www.bestbuy.com/product/shark-stratos-multiflex-cordless-stick-vacuum-with-clean-sense-iq-and-odor-neutralizer-up-to-40-min-runtime-ash-purple/JXJVXG4HC6 ; https://www.bestbuy.com/product/samsung-bespoke-jet-ai-cordless-stick-vacuum-with-all-in-one-clean-station-satin-black/J3ZYG26WWK/sku/6544286 ; https://www.mieleusa.com/product/11827000/cordless-stick-vacuum-cleaner-triflex-hx2-lotus-white ; https://www.rtings.com/vacuum/reviews/best/cordless-pet-hair ; https://vacuumwars.com/vacuum-wars-best-cordless-vacuums/


## 25 November 2026 — 12:19 Asia/Amman / 09:19 UTC — Shark PowerDetect Speed IA1241UK primary-source review (documentation-only)
- New UK discovery lead reviewed: Shark PowerDetect Speed **IA1241UK** exact SharkNinja product page, not the Pet IA1241UKT, Royal Grey IA1241UKPU, Cherry Red IA1241UKTRD or IP1251 variants.
- Primary exact-page details: £229.99 displayed, 3.22 kg, 0.47 L, one Li-ion battery, 350 W, 5-year registered guarantee / 2 years battery, base bundle = charging base + wall mount + 20 cm duster-crevice tool + battery. No pet tool in the base bundle.
- Important official-source conflict: exact product page says up to 60 min ECO with non-motorised tool and 5-hour charge; SharkNinja support article scoped to IA1241UK/IA1241UKT says up to 70 min ECO and approximately 6-hour charge. Do not settle or publish runtime/charge until reconciled.
- Official support confirms removable battery/charging sleeve, supplied-charger-only guidance and ECO/Detect/BOOST modes. Full exact owner manual, maintenance and safety content remain OPEN.
- John Lewis exact listing snapshot £249.99, Add to basket, 4.5/5 from 405 reviews. Which? exact review summary gives different test/runtime/capacity data; keep retailer/test figures distinct from manufacturer specifications.
- Manufacturer page stock UI conflicts (notification/back-in-stock message versus category page Add to cart); availability UNCONFIRMED.
- Amazon search did not verify exact IA1241UK ASIN/featured offer. IA1241UKPU Amazon-labelled listing is a different variant and rejected for this model. No ASIN approval.
- Candidate state = RESEARCH LEAD, not shortlist-approved or replacement-approved. Page remains IN_PROGRESS/unscored. No production/catalogue/affiliate changes, no merge/deploy.


## 25 November 2026 — 12:41 Asia/Amman / 09:41 UTC — IA1000UK official owner guide recovered; runtime, charging, care and safety reconciled (documentation-only)
- **Major evidence gate closed:** full Shark-hosted IA1000UK Series Owner's Guide found at https://support.sharkclean.co.uk/hc/en-gb/article_attachments/25906345085212 . Shark's official support article explicitly maps the series to IA1241UK and IA1241UKT. This is primary manufacturer-hosted manual evidence; do not transfer bundle contents across suffix variants.
- Manual confirms 18 V, 350 W body motor, 115 W nozzle; battery XIABTR540EU 18 V / 3750 mAh / 67.5 Wh; charger DK25A-220100H-B or GQ30B-225100-AB.
- Runtime: manual says up to 60 min ECO; exact IA1241UK product page says up to 60 min ECO with non-motorised tool. Support battery FAQ says up to 70 min, a conflicting outlier. Safe copy ceiling = up to 60 min ECO with non-motorised tool; don't state 70.
- Charge: manual and support battery FAQ say approx. 6h; exact product page metadata says 5h. Prefer owner-guide instruction (approx. 6h) for editorial claim and preserve the product-page conflict.
- Maintenance/care: monthly filter cleaning, cold water only, full air-dry before reinstall; other vacuum components must not be exposed to liquids (except filters/dust cup); power off and remove battery before service; check/clear brushroll/nozzle/airway blockages.
- Safety: no wet/damp surfaces/liquid pickup; specified battery and charger only; storage 3–40°C, charging 5–40°C; avoid damaged/modified batteries, metal-terminal shorting and hazardous debris. No IP rating/water-resistance claim.
- Exact IA1241UK bundle/specs stay from the exact model page: 0.47L, 3.22kg, one battery, charging base, wall mount and 20cm Duster-Crevice tool; no Pet Tool in base bundle.
- Exact retailer signal: John Lewis £249.99 / 4.5 from 405 / Add to basket; Currys Business IA1241UK product code N682145W shows 10+ in stock at £229.98 inc VAT. Shark direct product page has mixed notify-me/cart UI, so direct stock remains unconfirmed.
- Amazon direct IA1241UK ASIN/featured offer still unverified; IA1241UKPU is a different variant and rejected for this record.
- IA1241UK manual/maintenance/safety gate = SATISFIED at series scope with exact support mapping. Candidate remains research lead, not shortlist/replacement approved. Page IN_PROGRESS/unscored; no catalogue/content/affiliate/code/Cloudflare/merge/deploy/publication changes.


### 25 November 2026 — 13:35 Asia/Amman
- Fresh UK competitor/intent evidence added from Which? (20 Aug 2026), Expert Reviews (2026), The Independent (9 Oct 2026) and Good Housekeeping (12 Nov 2026).
- Bosch BCS1051GB strengthened as a candidate by official £629.99/In-stock/4.8-from-788 snapshot and Independent editorial recognition; weight conflict remains a hard content blocker.
- Dyson V15 official stock messaging still conflicted; Miele 11819170 has Expert-channel route but no confirmed direct online stock.
- Shark IZ400UKT ASIN B0B42QJL5B is quarantined/not approved: Amazon page inaccessible and third-party MPN mapping conflicts with IZ420UKT; Shark official pages distinguish single-battery IZ400UKT from double-battery IZ420UKT. B0B42KZTH2 remains rejected.
- Good Housekeeping Samsung Bespoke Jet AI evidence remains family-level until exact SKU and package are matched. Shark Clean & Empty must not be conflated with IA1241UK base bundle.
- No final product disposition; no production/catalogue/affiliate/Cloudflare changes.


### 25 November 2026 — 13:50 Asia/Amman
- Closed Samsung UK independent-review exact-SKU match: Good Housekeeping 90/100 test links to Argos item 326/9381, exact VS28C9784QK/EU. Samsung official model page corroborates two-battery runtime conditions, Pet Tool+ and 0.5L bin.
- Bosch BCS1051GB 2.9kg vs 3.8kg discrepancy remains unresolved across exact-model official pages; do not publish weight.
- Shark IZ400UKT ASIN B0B42QJL5B quarantined/not approved due conflicting variant mapping (IZ400UKT vs IZ420UKT) and inaccessible Amazon page. B0B42KZTH2 remains rejected.
- No production/catalogue/affiliate changes or final product dispositions.


## 25 November 2026 — 14:30 Asia/Amman — Amazon recheck / manual-source delta
- GitHub documentation branch now 89 ahead / 0 behind main; no merge/deploy.
- Amazon.com blocked by robots and no first-party UK Amazon detail page confirmed the selected offer, seller, condition and exact model for the remaining vacuum records. Third-party Dyson ASIN leads B0GXX8KQY7 and B0C2J8KJH9 are not approved; a third-party Samsung listing is also not Amazon-offer proof. ASIN approvals remain 0/4 UK and 0/4 US.
- Samsung exact UK model support page lists manual v0.7, modified 11 Aug 2025; added as documentation lead only, no contents extracted and no changes to closed SKU/review match.
- Shark IZ862H official parts pages and IP1251 comparison do not constitute an IZ862H manual. Manual gate remains open; do not transfer comparator specs.
- Bosch 2.9kg vs 3.8kg conflict remains open. Shark B0B42QJL5B stays quarantined and B0B42KZTH2 rejected.
- Page remains IN_PROGRESS/unscored, no final market matrix, no production/catalogue/affiliate/code/Cloudflare/merge/deploy/publication changes.


## 25 November 2026 — 14:45 Asia/Amman — Bosch weight corroboration / Shark IZ862H evidence leads
- Bosch exact official PDF repeats 2.9kg ready for use with tube/floor nozzle, matching Bosch support page, but Bosch product page still states 3.8kg measured ready for operation. Conflict stays open; no weight claim/handling score.
- Shark IZ862H IZ800 Series Owner's Guide found on secondary manual sites; model scope includes IZ862H, but Shark-hosted official PDF not yet retrieved/validated. Treat contents as provisional; next locate Shark Canadian support copy and verify exact scope. Do not transfer specs from IA1241/IP3251.
- US Amazon ASIN lead B0B5JMNGNQ matches IZ862H in third-party catalogues and has Amazon-linked offers, but Amazon direct page is blocked and selected seller/condition/Featured Offer not verified. Not approved. B0BW51TNGC is Renewed and excluded.
- Shark UK B0B42QJL5B remains quarantined; third-party MPN mapping again conflicts IZ400UKT/IZ420UKT. Amazon approval remains 0/4 UK and 0/4 US. No final disposition or production changes.


## 25 November 2026 — 15:20 Asia/Amman — Shark IZ862H Canadian manufacturer-page / owner-guide follow-up (documentation-only)

### Shark IZ862H / IZ862HC — exact regional relationship and manual status
- Located the official SharkNinja Canada product page for **IZ862HC**: https://www.sharkninja.ca/shark-stratos-cordless-with-clean-sense-iq-duoclean-powerfins-hairpro/IZ862HC.html . The page identifies its Canadian sellable model as IZ862HC, while its product-detail copy explicitly describes the Shark Stratos Cordless **IZ862H**. It lists Canadian-market price/warranty/bundle fields (including 5-year limited warranty, 1 battery, Duster Crevice Tool and Anti-Allergen Brush); these are Canada-specific and must not be copied into the US IZ862H record without exact US confirmation.
- The same official page's support link resolves to Shark Canada's IZ800 Series support section, https://support.sharkclean.ca/hc/en-us/sections/5257532247580-IZ800-Series, but the support endpoint returned HTTP 403 in this retrieval session. No official downloadable attachment was retrieved from that section.
- Recovered a readable 24-page IZ800 Series Owner's Guide PDF at https://qcg-media.s3.amazonaws.com/media/uploads/118513/2022/06/20220630_202169_IZ800SeriesIBMPMv5LR3.pdf . Its cover identifies Shark STRATOS / IZ800 Series Owner's Guide, and its safety text explicitly names IZ862H in the XBAT725SL battery compatibility list. It contains operating, charging, maintenance, filter-drying and troubleshooting instructions. However, the S3 host is not a verified Shark-owned support domain; treat it as a manufacturer-document copy on a third-party/mediated file host, not as proof that the official Shark-hosted manual gate is closed.
- The manual's US/Canada-specific electrical and warranty language must remain separate from any UK content. Do not transfer Canadian warranty, product bundle, dimensions, or charging fields to the US record. The US IZ862H official manual-hosting gate remains OPEN until the same guide or an exact support attachment is retrievable from SharkNinja/Shark support directly.
- A secondary source's claim that the PDF is also on Shark Canada support is not independently verified; the linked support section returned 403. Keep runtime/specification claims sourced to the US exact model or verified primary manual, not this hosting lead alone.

### Bosch BCS1051GB — current official pages still disagree
- Fresh official Bosch GB product-page result continues to state “Measured weight, ready for op.” **3.8kg**: https://www.bosch-home.com/gb/en/product/vacuum-cleaners/cordless-vacuum-cleaners/unlimited/unlimited10/BCS1051GB
- Bosch GB exact-model support page states “Weight (ready for use with tube and floor nozzle): **2.9kg**”: https://www.bosch-home.co.uk/supportdetail/product/BCS1051GB/01
- The exact-model official spec sheet's net/gross packed-product values (5.3kg/6.8kg) are not operating weight and do not resolve the conflict. No written Bosch clarification was obtained. Keep both operating-weight claims withheld and handling/weight score blocked.

### Disposition
- Shark IZ862H manual source-hosting gate: OPEN; model scope in the recovered guide is exact, but official Shark hosting is not validated.
- Shark Canada official product page for IZ862HC is a regional-variant corroboration only; do not treat it as US bundle/warranty evidence.
- Bosch BCS1051GB weight conflict remains OPEN.
- Amazon direct ASIN approval remains 0/4 UK and 0/4 US; no first-party seller/condition/Featured Offer confirmation in this pass. Shark B0B5JMNGNQ remains a lead only; no direct approval.
- No final retain/replace/hold matrix; active page remains IN_PROGRESS/unscored. No production/catalogue/affiliate/code/Cloudflare/sitemap/robots/PR merge/deployment/publication changes.


## 26 November 2026 — 11:40 Asia/Amman — Google Search Console sitemap status / read-only production fetch (no changes)

### Owner-provided GSC screenshots
- On 26 Nov the Sitemaps table still shows both submitted entries as **Couldn't fetch**, Type **Unknown**, and **0 discovered pages / 0 discovered videos**: `/sitemap-index.xml` (submitted 22 Nov 2026) and `/sitemap-0.xml` (submitted 19 Nov 2026).
- Opening the index entry shows **Last read 11/22/26**, **0 discovered pages**, and **“Sitemap could not be read.”** This confirms the Search Console processing error is still present in the owner's UI; it does not, by itself, identify the underlying cause or prove that the live sitemap is absent.

### Fresh read-only check of production URLs on 26 Nov
- Retrieved `https://smartpickhub.pages.dev/robots.txt`; extracted content is `User-agent: * Allow: / Sitemap: https://smartpickhub.pages.dev/sitemap-index.xml`.
- Retrieved `https://smartpickhub.pages.dev/sitemap-index.xml`; it exposes one child sitemap: `https://smartpickhub.pages.dev/sitemap-0.xml`.
- Retrieved `https://smartpickhub.pages.dev/sitemap-0.xml`; it exposes **29 URL entries**, including homepage, /guides/, and the existing guide routes, including cordless-vacuum-cleaners.
- All three production URL fetches returned extracted content without per-URL fetch errors in the read-only retrieval tool. This confirms the URLs are currently retrievable by that retrieval path, but that tool did not expose raw HTTP status, response headers/content-type, or a Googlebot-specific request. Do not overstate this as proof that Googlebot receives identical responses.

### Diagnosis and next action
- The sitemap documents are currently present and linked correctly from robots.txt → sitemap index → child sitemap, with 29 URLs exposed. This is consistent with the earlier 22/24 Nov checks and argues against a missing-file or obviously broken-reference explanation.
- GSC still reports an earlier failed processing result; the index's displayed Last read is 22 Nov, not 26 Nov. A current successful third-party retrieval does not prove Google has retried or successfully parsed the files. The underlying Google fetch/parse cause therefore remains **UNRESOLVED** (possible transient Google fetch/processing issue or response/header difference not captured by current retrieval).
- Do not delete/re-submit either sitemap, rename files, edit Astro sitemap generation, robots.txt, Cloudflare settings, headers, or production pages based solely on these screenshots. No indexing requests or production changes performed.
- Next diagnostic should be narrowly read-only: obtain raw response status + headers (especially Content-Type, redirects and any challenge/cache headers) and, if available, Cloudflare request/security events for Google's sitemap fetch window; then compare with a Google URL Inspection/live fetch or a later GSC Last read update. Only propose a minimal change if a specific reproducible defect is identified and the owner approves.

### Project state
- Existing guide/product structural counts and historical completion are unchanged; do not interpret sitemap's 0 discovered pages as 0 project pages or a reset of the completed catalogue.
- No change to active Cordless Vacuum audit state, Amazon ASIN approvals, content/catalogue, affiliate URLs, production code, Cloudflare Pages, sitemap/robots, merge, deployment or publication.


## 26 November 2026 — 12:58 Asia/Amman — Search Console sitemap diagnosis / live index-status evidence (read-only)

### Search Console property and sitemap status
- Confirmed through the connected Search Console property `https://smartpickhub.pages.dev/` (site owner) that the correct Pages property is selected in the OpenSEO project. The old `https://smartpickhub.infinityfree.me/` property remains visible but is not selected and is legacy only.
- User screenshots dated 26 Nov show `sitemap-index.xml` and `sitemap-0.xml` with `Couldn't fetch`; the index details say `Sitemap could not be read`, last read 2026-11-22, discovered pages 0. The child row shows Type `Unknown`, which Google documents can mean either an unrecognized file or that the sitemap has not yet been processed. Do not infer that the sitemap XML is malformed from this alone.
- Google Search Central's current Sitemaps report documentation says a submitted sitemap should be tested with URL Inspection Live Test and Page availability; expected values are `Crawl allowed? Yes` and `Page fetch Successful`. It also says click the sitemap row/error to see details; the report's `Last read` is present only when Google fetched it. Google may retry fetch/parse failures for a few days, then stop; if the issue is fixed after repeated failures, resubmit the sitemap. Sources: https://support.google.com/webmasters/answer/7451001
- Current web retrieval tool could not open the production robots.txt or sitemap URLs, and container-side raw HTTP/header requests failed at DNS resolution from this execution environment. Therefore raw HTTP status, Content-Type, redirect chain, Cloudflare headers, and Googlebot-specific response remain **NOT VERIFIED** in this pass. Do not reuse the previous generic extracted-content result as proof of HTTP 200 or Googlebot accessibility.

### Live Google index inspection (Search Console API, 26 Nov 2026)
- `https://smartpickhub.pages.dev/`: `Submitted and indexed`; verdict PASS; robots allowed; indexing allowed; page fetch SUCCESSFUL; Google-selected canonical equals declared canonical; crawled as MOBILE; last crawl 2026-11-19T10:26:28Z.
- `https://smartpickhub.pages.dev/guides/`: `URL is unknown to Google`; crawl/index fields unspecified.
- `https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners/`: `URL is unknown to Google`; crawl/index fields unspecified.
- These are URL index-state results, not Live Tests. The homepage result proves Google successfully crawled and indexed the homepage, not that Google fetched the sitemap or crawled the guide URLs. Guide URLs remain undiscovered/unknown in the inspected property; no inference that they are blocked or technically invalid.

### Diagnostic interpretation / next required evidence
- This is not a total domain access failure: homepage is indexed and its last crawl succeeded. Sitemap processing and guide discovery remain separate unresolved states.
- Do not change sitemap generation, robots.txt, Cloudflare, page content, canonical, or deployment settings based on current evidence. Do not delete/resubmit the sitemap yet.
- Next user-side step: in Search Console URL Inspection, inspect the exact sitemap URL `https://smartpickhub.pages.dev/sitemap-index.xml`, choose **Test Live URL**, then expand **Page availability** and capture `Crawl allowed?` and `Page fetch`. Repeat for `https://smartpickhub.pages.dev/sitemap-0.xml` only after recording the index result. Separately inspect the exact guide URL with Live Test to distinguish crawl accessibility from index state.
- If Live Test reports fetch success, preserve the screenshot and allow the Sitemaps report to refresh; if it reports blocked/failed, capture the exact reason and then investigate the corresponding robots/HTTP/Cloudflare cause. No speculative production fix.

### Change boundary
- Read-only checks only. No sitemap resubmission, URL indexing request, production code/configuration change, catalogue/content/affiliate change, Cloudflare change, PR merge, deployment, or publication.


## 26 November 2026 — 13:00 Asia/Amman — Google URL Inspection Live Test: sitemap index (user screenshot)

- User ran the Google Search Console **Live Test** for `https://smartpickhub.pages.dev/sitemap-index.xml` and provided the result screenshot (26 Nov 2026, 12:58:56 PM local).
- Live Test result: **Page can be indexed**; **Crawl allowed? Yes**; **Page fetch: Successful**; **Indexing allowed? Yes**. Crawled as Google Inspection Tool smartphone.
- Discovery says **Not checked in live tests**. This is not a failed discovery result; the live test reports fetch/crawl availability, not sitemap discovery/processing.
- No user-declared canonical is present; Google-selected canonical is only determined after indexing. This is not a sitemap parsing verdict.
- This is direct evidence that Google's Live Test tool can fetch the sitemap index URL successfully at the test time. It does NOT prove that the Sitemaps report's asynchronous sitemap processor has successfully parsed the index or fetched its child sitemap. Thus the historical Sitemaps report error remains unresolved.
- Do not click Request Indexing for the XML sitemap. Do not delete/resubmit either sitemap or change production settings based on this one result.
- Next diagnostic: run the same Live Test for `https://smartpickhub.pages.dev/sitemap-0.xml` and capture Page availability, Crawl allowed, and Page fetch. Then compare both Live Test results with the Sitemaps report. If both succeed, continue with Google-reported sitemap error details / wait for Last read update; if the child fails, investigate only the specific failure.
- No production, code, robots, sitemap, Cloudflare, content, catalogue, affiliate, merge, deploy or publication changes.


## 26 November 2026 — 13:02 Asia/Amman — Google URL Inspection Live Test: child sitemap (user screenshot)

- User ran the Google Search Console **Live Test** for `https://smartpickhub.pages.dev/sitemap-0.xml` and supplied screenshot (26 Nov 2026, 1:00:48 PM local).
- Live Test result: **Page can be indexed**; **Crawl allowed? Yes**; **Page fetch: Successful**; **Indexing allowed? Yes**. Crawled as Google Inspection Tool smartphone.
- Discovery says **Not checked in live tests**; this is not a failed discovery result. No user-declared canonical is present; Google-selected canonical is only determined after indexing. Neither field diagnoses sitemap parser success.
- Together with the preceding 12:58:56 PM Live Test for `sitemap-index.xml` (same successful availability, crawl, fetch and indexing-allowed verdicts), this establishes that Google Inspection Tool could fetch both sitemap URLs at their respective test times. It does not establish that the Sitemaps report's asynchronous processor parsed the XML, followed the index reference, or discovered the 29 child URLs.
- The Sitemaps report's earlier `Couldn't fetch` / `Sitemap could not be read` remains unresolved. Current evidence does not justify changing the sitemap files, robots.txt, headers, Cloudflare, or production code.
- Next step: return to Search Console → Sitemaps, open the submitted `/sitemap-0.xml` row and capture any detailed error / last-read information available from its details page; then inspect `/sitemap-index.xml` row details. Do not click Request Indexing for either XML URL, do not delete or resubmit the sitemaps yet. If no more specific error is shown, preserve the successful live-test evidence and wait for the Sitemaps report's next processing/Last read update.
- No production, sitemap, robots, Cloudflare, content, catalogue, affiliate, code, merge, deploy or publication changes.


## 26 November 2026 — 13:05 Asia/Amman — Guide 404 traced to inspected URL slug mismatch (read-only)

### User-provided URL Inspection Live Test
- User tested `https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners/` at 1:03:17 PM local. Google reports **URL is not available to Google**; Page availability: **Page cannot be indexed: Not found (404)**; Crawl allowed: Yes; Page fetch: Failed: Not found (404); Indexing allowed: N/A. This is a confirmed 404 for that exact path at test time. No indexing request was submitted.

### Repository source-of-truth check on main
- Read `src/data/products.json` on GitHub `main` (blob SHA `075ce71d57b2ee21fdecd4f1c82036819ba55937`). It contains 25 guides and the matching cordless vacuum guide record has slug **`cordless-vacuum-cleaners-us-uk`**, title **“Cordless Vacuum Cleaners: Comparing Stick Vacuums for US & UK Homes”**, editorialStatus **“Approved for publication”**.
- Read `src/pages/guides/[slug].astro` on `main` (blob SHA `5ef0270d28b6b1fcb4249585d81356665e967e91`). Its `getStaticPaths()` maps every `data.guides` entry to `params: { slug: guide.slug }`; canonical path is constructed as `/guides/${guide.slug}/`. Therefore the route generated from the current `main` data is **`https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/`**, not the shorter path tested by the user.
- Read `src/pages/guides/index.astro` on `main` (blob SHA `bb7d77a3a0c9424199f2808a5373f6e3c77783ec`); guide cards link to `/guides/${guide.slug}/`, consistent with the generated route.
- Search Console index inspection for the slug-correct URL `https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/` returned **URL is unknown to Google** with crawl/index fields unspecified. This is stored index status, NOT a Live Test and NOT proof of 404 or 200.
- Direct external fetch of the slug-correct production URL could not be completed by the web retrieval tool in this session. Thus current deployed HTTP response for the correct route remains **NOT YET VERIFIED**. Repository `main` establishes the expected generated route, but does not alone prove what is currently deployed.

### Diagnosis / next step
- The confirmed 404 belongs to the wrong/shortened slug URL that was entered. The project source on `main` uses the `-us-uk` suffix. Do not modify slug data, redirects, sitemap, production code or Cloudflare based on this mismatch.
- Next: run Search Console **TEST LIVE URL** for `https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/`. If fetch is Successful, request indexing for this correct content URL (not the 404 URL and not XML sitemaps), provided the user chooses to do so. If it returns 404, stop and inspect the actual deployed build/Cloudflare Pages deployment against `main` before any fix.
- No production, catalogue, affiliate, sitemap, robots, Cloudflare, code, merge, deployment or publication changes. No Request Indexing action was taken by the assistant.


## 26 November 2026 — 13:10 Asia/Amman — Bing Webmaster Tools added as supplemental diagnostic (user-approved change of direction)

- User reviewed Google Search Console Page indexing screenshot showing **“Processing data, please check again in a day or so”** and asked to check Bing instead while Google processes.
- Previous project preference had excluded Bing Webmaster Tools. The user's explicit current instruction supersedes that preference for this limited diagnostic purpose: Bing Webmaster Tools may now be used as a supplemental search-engine discovery/indexing check. This does not change the primary Google SEO strategy or imply any paid service.
- Microsoft documentation confirms verified sites can be imported directly from Google Search Console into Bing Webmaster Tools; after successful import, the site is automatically verified, and associated sitemap information may be imported. Bing states analytics can take up to 48 hours to appear after adding a site. Sources: https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b and https://www.bing.com/webmasters/help/refreshed-webmaster-tools-7c7d2533
- Bing's URL Inspection can show index status, discovery/crawl/index details, HTTP response and HTML, with a Live URL tab showing what Bingbot sees. Source: https://www.bing.com/webmasters/help/url-inspection-55a30305
- Bing supports manual URL submission and recommends IndexNow for ongoing/automated URL updates. Do not enable IndexNow, modify code, add DNS records, publish verification files, or change production configuration during this diagnostic unless separately reviewed and explicitly approved. Source: https://www.bing.com/webmasters/help/URL-Submission-62f2860b
- Recommended low-risk next action for the user: open https://www.bing.com/webmasters/about, sign in using the Google account that owns the verified Search Console property, choose **Import from Google Search Console**, grant the requested permission, and select only `https://smartpickhub.pages.dev/`. Do not import or select the legacy InfinityFree property. This is an account-side ownership/import action requiring the user's own approval.
- Once import completes, inspect Bing **Sitemaps** and **URL Inspection** for the exact canonical guide URL `https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/`; record Bing's actual response before submitting anything. Do not submit the shortened wrong-slug URL `/guides/cordless-vacuum-cleaners/`.
- Current confirmed Google evidence remains: Live Test successful for both sitemap index and child sitemap; Live Test successful for the correct guide URL; wrong shortened guide URL returned 404; Google Page indexing report is still processing. No Bing property has yet been imported or inspected, and no Bing index status is known.
- No production code, catalogue, affiliate links, sitemap, robots, Cloudflare, DNS, IndexNow, merge, deployment, or publication changes. Bing is now planned as a supplemental diagnostic only.


## 26 November 2026 — 13:12 Asia/Amman — Correction: Bing Webmaster Tools already added (user screenshot)

- User clarified that Bing Webmaster Tools had already been added previously; do NOT ask the user to import/add/verify the property again.
- User screenshot confirms the existing Bing Webmaster Tools dashboard is open with the site selector showing `smartpickhub.pages...` (the SmartPickHub Pages property), and the left navigation includes Search Performance, URL Inspection, Site Explorer, Sitemaps, and IndexNow. This is sufficient evidence that the site is already present and accessible in Bing Webmaster Tools.
- The Home dashboard currently shows Total Clicks 0 and Total Impressions 0 on the visible graph for 22–24 Nov. Treat only as the displayed reporting snapshot; do not infer no crawl/indexing from zero performance data.
- Bing property addition/import is **already completed** (confirmed by user and screenshot), not merely planned. Next action is to inspect the existing property's **Sitemaps** section, then use **URL Inspection** for the exact canonical guide URL `https://smartpickhub.pages.dev/guides/cordless-vacuum-cleaners-us-uk/`. Capture actual Bing status before any submission or configuration change.
- Do not repeat onboarding or import instructions. Do not activate IndexNow or change site settings without separate review and explicit approval.
- No production code, content, catalogue, affiliate, sitemap, robots, Cloudflare, DNS, merge, deployment, or publication changes.


## 26 November 2026 — Ahrefs Site Audit crawl received (email snapshot)

- User supplied the actual Ahrefs notification for project `Smartpickhub.pages`, crawl timestamp `2026-11-26T08:19:37Z` (email dated 26 Nov 2026).
- Crawl analyzed **33 internal URLs**. Health Score **97**. Reported issue counts: **2 Errors, 31 Warnings (+1), 31 Notices (+1)**.
- Newly surfaced issue summaries:
  - **Open Graph tags incomplete** — 29 URLs (+1).
  - **Changed pages not submitted to IndexNow** — 29 URLs (+29), classified as Notice.
  - **Title tag changed** — 25 URLs (+25), classified as Notice.
  - **Meta description changed** — 4 URLs (+4), classified as Notice.
  - **X (Twitter) card missing** — 4 URLs (+1).
- This is an email summary only. The two Errors and remaining 31 Warnings / 31 Notices are not itemized in the supplied message. Exact affected URLs, issue descriptions, severity, and recommended fixes remain **unverified** until the Ahrefs issue list is inspected.
- Interpretations: title/meta “changed” notices indicate differences from a prior crawl, not necessarily invalid metadata. IndexNow-not-submitted is a submission notice, not proof of Google/Bing indexing failure. Do not enable IndexNow or submit the 29 URLs automatically: project policy keeps IndexNow activation gated to the approved production/indexability state; verify current noindex/release status first.
- Open Graph incomplete and missing X cards are candidates for metadata/template review. Do not edit code until exact affected URL list and current metadata are inspected. The previous project notes mention a possible missing social image tag, but this Ahrefs snapshot does not identify which OG properties are missing.
- No site, source, metadata, robots, sitemap, IndexNow, Cloudflare, affiliate, catalogue, merge, deployment, or publication changes were made from this report.
- Next diagnostic: open the crawl's **View all issues** page, filter **Errors**, and capture both Error rows including issue name, affected URL count, and example URLs. Then inspect Warnings and the Open Graph issue details. Prioritize the two Errors before cosmetic/social metadata notices.


## 26 November 2026 — Ahrefs full Overview PDF reviewed (2 pages)

- User uploaded `Overview - Smartpickhub.pages.pdf`, the full Ahrefs Site Audit Overview for crawl `26 Nov 2026`, compared with `19 Nov`. The PDF is the fuller overview snapshot and supersedes the abbreviated email for its displayed aggregate counts.
- Page 1:
  - SEO Health Score **97 (Excellent)**.
  - AI Discoverability Score **100 (Excellent)**, but the component breakdown shows **Bot access 100** only; **Machine readability = N/A**, **Freshness signals = Coming soon**, and **AI search performance = Coming soon**. Do not interpret 100 as a complete AI-content/schema audit.
  - Issue distribution: **3 Errors, 31 Warnings, 83 Notices** (117 issue instances/categories in Ahrefs' distribution).
  - Error distribution chart reports **61 URLs without errors** and **2 URLs with errors**. This is distinct from the count of 3 Error issue types/entries.
  - What's new: Open Graph tags incomplete (29 crawled, +1 change, 1 new); Changed pages not submitted to IndexNow (29, +29, Notice); Title tag changed (25, +25, Notice); Meta description changed (4, +4, Notice); X (Twitter) card missing (4, +1, 1 new).
- Page 2:
  - Crawled URLs distribution: **59 total = 33 internal + 26 resources**.
  - Content types: **29 HTML, 25 images, 1 CSS, 1 Other** (counts shown by Ahrefs).
  - HTTP status distribution: **60 Success (2xx), 2 Redirect (3xx), 1 Client error (4xx)**. The exact 4xx URL and cause are not exposed in this Overview; must inspect the Errors list before diagnosing.
  - Link crawl status: **471 links found; 172 crawled; 299 uncrawled**. These are link crawl statuses, not counts of indexed pages.
  - TTFB distribution across 29 HTML URLs: **5 fast (<200ms), 3 medium (200–300ms), 12 slow (300–500ms), 9 too slow (>500ms)**. Thus 21/29 exceeded 300ms in this Ahrefs crawl; this is a triage signal, not by itself a Core Web Vitals failure or proof of Google ranking impact.
- Reconcile email vs PDF: the email summary stated 2 Errors and 31 Warnings / 31 Notices; the full Overview PDF displays 3 Errors, 31 Warnings and 83 Notices. Use the PDF's aggregate overview as the current full snapshot; note that 3 issue entries can affect 2 URLs. Investigate exact issue list for authoritative itemization.
- The displayed 100 AI score is limited by the component state: only bot access is scored; machine readability and freshness/AI performance are not yet scored. Avoid marketing the site as fully AI-optimized based on this number.
- Priority for next read-only review:
  1. Open Ahrefs `View all issues`, filter **Errors**, capture all three Error entries and their affected URLs; identify the 4xx URL and determine if internal, external, or resource before considering a fix.
  2. Inspect TTFB details for the 9 URLs >500ms and 12 URLs 300–500ms; separate HTML document response time from asset loading and avoid changes until exact pages/causes are known.
  3. Inspect Open Graph issue details for the exact missing properties and affected URLs; then X card issue. Do not alter templates until we know if the problem is site-wide or page-specific.
  4. Treat IndexNow-not-submitted and title/meta changed as notices, not indexing errors. Do not activate IndexNow or bulk-submit URLs without a separate decision and checking current noindex/release gates.
- No code, page metadata, sitemap, robots, IndexNow, DNS, Cloudflare, affiliate, catalogue, production, merge, deployment, or publication changes were made from this PDF.


## 26 November 2026 — Ahrefs Errors filter screenshot inspected

- User supplied screenshot of Ahrefs Site Audit → All issues, filtered by `Importance: Error`, for crawl `26-11-2026T081937`.
- UI counters: **Actual 3**, **New 0**, **All tracked 52**, **Turned off 0**.
- Exact issue entries shown:
  1. **Internal pages → 404 page** — Crawled: 1.
  2. **Internal pages → 4XX page** — Crawled: 1.
  3. **Redirects → Broken redirect** — Crawled: 1.
- These are three issue entries/categories, each with one crawled occurrence. The screenshot does not expose affected URL(s), exact HTTP status for the generic 4XX row, redirect source/destination, or root cause. Do not assume 404 and 4XX are the same URL or different URLs until details are opened.
- No issue is marked New in this view; that does not establish that the issues are harmless or resolved.
- Next diagnostic sequence, read-only:
  1. Open **404 page** row and capture affected URL + details.
  2. Open **4XX page** row and capture affected URL + exact status.
  3. Open **Broken redirect** row and capture source URL, target URL, redirect chain/status, and failure reason.
- Compare each reported URL with current repo routes and sitemap only after exact URLs are known. The prior Google Live Test 404 was for the incorrect shortened path `/guides/cordless-vacuum-cleaners/`; the canonical slug-correct guide `/guides/cordless-vacuum-cleaners-us-uk/` passed Google's Live Test. Do not conflate these without matching Ahrefs' actual affected URL.
- No source code, content, redirects, sitemap, robots, IndexNow, DNS, Cloudflare, affiliate, catalogue, production, merge, deployment, or publication changes.


## 26 November 2026 — Ahrefs 404 detail screenshot: www host variant

- User supplied Ahrefs issue detail screenshot for **404 pages**. The sole affected URL shown is exactly `https://www.smartpickhub.pages.dev/` (www-prefixed hostname), with HTTP status **404 Not found**. Ahrefs shows one result.
- This is distinct from the approved canonical production origin `https://smartpickhub.pages.dev/` (without www). Do not conflate it with the earlier Google Live Test on the guide URL or the wrong shortened guide slug.
- Current evidence confirms the www-prefixed hostname returns 404 to Ahrefs' crawler; it does not yet show which page/link on the site references this host, nor whether the www variant is intentionally unsupported.
- No redirect, DNS, Cloudflare custom-domain, canonical, internal-link, sitemap, or source-code changes are approved or made. Do not add a redirect simply to suppress the Ahrefs issue.
- Next diagnostic: in the same Ahrefs issue view, click the **Links to 404 pages** tab and capture the referring page(s) and anchor/target link. Then inspect that exact source in repository and determine whether an obsolete www URL is embedded. Only after source confirmation decide whether the correct fix is to update an internal link (preferred if it is a project-authored link) or leave the www host unsupported. Avoid configuring redirects/DNS for a pages.dev hostname without a separate technical justification.
