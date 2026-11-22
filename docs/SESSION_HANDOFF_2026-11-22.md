# SmartPickHub — Session Handoff (22 November 2026)

**Checkpoint:** 2026-11-22 06:09 UTC  
**Repository:** https://github.com/ralabsi95-spec/smartpickhub  
**Documentation branch:** `docs/handoff-2026-11-22-indexing-investigation`  
**Base/main SHA:** `26636d4359508b9af30eec498a22ffc005a81a72`  
**Production:** https://smartpickhub.pages.dev/

> This is a documentation-only continuity checkpoint. It is not merged into main and has not been deployed. Verify current GitHub refs, checks and production marker before acting.

## 1. Non-negotiable operating rules

- The old InfinityFree/WordPress environment is permanently out of scope. Use only GitHub + Astro + Cloudflare Pages.
- Never change, publish, delete, merge or deploy production content/config without explicit approval for the concrete change.
- No paid services, subscriptions or credits without explicit approval.
- Do not re-import the existing catalogue: 25 guides / 100 product records.
- Never invent ASINs, direct product links, prices, ratings, stock, reviews or hands-on tests. Amazon search URLs are not direct product links.
- Preserve UK and US as separate marketplace tracks. UK is the default tie-breaker.
- Keep onsite outbound clicks distinct from Amazon Associates reports.
- Do not dispatch/rerun GitHub Actions until quota restoration is verified. Last recorded quota exhaustion was expected to renew 1 Dec 2026; restoration is unknown.

## 2. Environment and identifiers

| Item | Verified value |
|---|---|
| Repository | `ralabsi95-spec/smartpickhub` |
| Production branch | `main` |
| Base SHA at checkpoint | `26636d4359508b9af30eec498a22ffc005a81a72` |
| Production | `https://smartpickhub.pages.dev/` |
| Preview | `https://smartpickhub-preview.pages.dev/` |
| Platform | Cloudflare Pages + Astro |
| Build | `npm run build` |
| Output | `dist` |
| Amazon UK tag | `smartpickhubu-21` |
| Amazon US tag | `smartpickh0bc-20` |
| Catalogue | 25 guides / 100 products |

The live `deployment.json` returned commit `26636d4359508b9af30eec498a22ffc005a81a72`, branch `main`, environment `production`, generated at `2026-11-21T16:21:38.038Z`. This confirms the deployed marker matches main at that SHA; it does not prove every CI check passed.

## 3. Google Search Console — evidence and status

- Owner screenshot confirms the `https://smartpickhub.pages.dev/` property is verified and accessible under the connected Google account. Do not ask the owner to reconnect it.
- Homepage status: **Submitted and indexed**; last known crawl `2026-11-19T10:26:28Z`.
- All 25 buying guide URLs returned **URL is unknown to Google** in the latest URL Inspection batches. This is not a manual action, penalty or confirmed rejection.
- `/guides/` and `/affiliate-disclosure/` were also unknown in earlier inspection.
- Search performance, last 28 days through 19 Nov: 3 impressions, 0 clicks, CTR 0%, average position 88.3.
- Sitemap reports for `sitemap-index.xml` and `sitemap-0.xml` still show **Couldn't fetch**, with zero discovered URLs.
- A Google Live Test for sitemap-index reported URL available, crawl allowed, page fetch successful and indexing allowed. This proves live URL fetch only, not that Google's Sitemap parser successfully processed the XML.
- Manual indexing attempt showed **daily quota exceeded**. Do not repeat manual requests or mass-submit unchanged URLs.
- Manual Actions and Security Issues screens showed **No issues detected**. Links report showed **No data**; this does not prove internal links are absent.
- Page indexing report had shown **Processing data**. Do not claim this is the definitive cause of missing index records.

## 4. Crawl Stats screenshot — owner supplied

- 16 crawl requests in 90 days.
- 257 KB downloaded.
- Average response time: 53 ms.
- Host status: no problems in the last 90 days.
- Response codes: 88% HTTP 200, 13% HTTP 404 (two requests).
- Known 404 example: `/favicon.ico`.
- Robots.txt, DNS and server connectivity fail rates: acceptable.
- File mix shown: Image 50%, HTML 19%, CSS 19%, Unknown failed 13%.
- Crawl purpose: Refresh 100%.

Interpretation: no evidence of a broad host outage or slow server. The small 404 count is not proof of why guides are not indexed.

## 5. Live sitemap / robots observations

Independent live fetch on 22 Nov extracted:

- `/robots.txt`: `User-agent: * Allow: / Sitemap: https://smartpickhub.pages.dev/sitemap-index.xml`
- `/sitemap-index.xml`: one child sitemap, `/sitemap-0.xml`.
- `/sitemap-0.xml`: **29 URLs** — homepage, affiliate disclosure, guides index, 25 guides and `/how-we-research/`.

The repository tree confirms robots is generated dynamically by `src/pages/robots.txt.js`, not a static `public/robots.txt`. Its source:
- Disallows all crawling for preview builds.
- Allows all crawling on production and points to sitemap-index.
- Sets `Content-Type: text/plain; charset=utf-8` and `Cache-Control: public, max-age=300`.

The extractor did not provide raw HTTP status, response headers or exact response bytes. Raw response verification remains open. Do not infer that Google must accept the sitemap merely because an extractor parses its links.

## 6. Live editorial QA findings

Verified from public pages:

1. `/guides/` visibly displays **Approved for publication** under each guide card. This is an internal workflow label and should be reviewed for removal from visitor-facing UI, but no change has been made.
2. The Air Fryers guide contains the phrase **“in the captured data”**, which reads like research-process residue.
3. The same guide includes **UK/Jordan** wording in an electrical-safety warning despite targeting UK/US. Preserve the safety warning but review the geography wording.
4. The Air Fryers guide clearly states it is research-led and not hands-on testing. It also states Amazon links are marketplace search results, not verified direct product listings.

Only a sample was reviewed. A full scan of all 25 guides remains pending. Do not generalise these findings to every guide.

## 7. GitHub and CI status

- Main at checkpoint: `26636d4359508b9af30eec498a22ffc005a81a72`.
- Existing open PR #34 (contrast/accessibility) and PR #32 (research branch) were recorded in the prior checkpoint. Recheck current state before any action; neither is approved for merge by this handoff.
- PR #33 was previously reported merged on 21 Nov; re-verify if relevant.
- Workflow-run lookup for the current main SHA returned no PR-triggered runs in the connector response. This is not a full account usage/quota report.
- GitHub Actions quota restoration is **unknown**. Do not dispatch/rerun workflows until the repository Usage page confirms available minutes.

## 8. Measurement and social status

- GA4 is not yet confirmed for SmartPickHub. The two old Firebase properties shown in selector (`new-world-610bd`, `ispjo-jordan`) are unrelated; do not select them.
- GSC property is verified as above.
- Bing Webmaster Tools connection/setup remains pending.
- Five Pinterest RSS-to-board connections are owner-confirmed; actual ingestion and Pin publication are unverified.
- Project IndexNow key file already exists in production:
  `https://smartpickhub.pages.dev/smartpickhub-20261119-7f3c9a2d4b6e8a1c.txt`.
  Do not add a second key. IndexNow is for Bing and other participating engines, not Google. Submit only genuinely new/changed/redirected/removed URLs, not all unchanged pages.

## 9. Next work — ordered

1. Read `src/pages/robots.txt.js` and `package-lock.json`; establish exact locked Astro and `@astrojs/sitemap` versions.
2. Obtain raw HTTP responses for robots, sitemap-index and sitemap-0: status, Content-Type, Content-Encoding, Cache-Control, redirects and exact XML body.
3. Validate XML declaration, sitemap namespaces, root elements, loc values, encoding, escaping, canonical host, trailing slashes, and absence of HTML/challenge content.
4. Review Cloudflare Pages headers, WAF, bot and security settings read-only; do not change settings without evidence.
5. Scan all 25 guides for internal labels, research residue, geographic inconsistencies, missing metadata, affiliate link attributes and regional model confusion. Produce URL/evidence/context/severity/recommendation report only.
6. After root cause is established, prepare a minimal change plan, affected-file list, tests and rollback. Obtain approval before production changes.
7. Only after quota restoration, run the project's checks on a separate branch: `npm ci`, `npm run check`, `npm run validate`, `npm run build`, `npm run smoke`, `npm run accessibility`. Verify preview and exact-main CI before merge/deploy.
8. Resume free Bing Webmaster Tools setup and measurement planning after Google sitemap diagnosis.

## 10. Session activity log

**Reviewed:** GitHub main tree and key source files; live deployment marker; live robots/sitemap; guide hub and sample guides; GSC owner screenshots, URL inspections, performance and Crawl Stats.

**Actually done:** read-only inspection and creation of this documentation checkpoint on a dedicated branch.

**Not done:** no production edits, no main-branch commit, no merge, no deployment, no index request, no product import, no paid service/credit use, no Cloudflare setting changes.

**Decisions:** keep sitemap investigation evidence-led; complete full 25-guide QA; keep the internal workflow-label issue separate from indexing root-cause analysis.

**Next exact action:** verify exact locked package versions and obtain raw HTTP headers/XML for sitemap responses.


## 11. Follow-up source-code audit — 22 Nov 2026 06:10 UTC

- Exact lockfile versions confirmed from `package-lock.json` (blob SHA `49e71620d23f120332efd0ef8a5ae866237644a2`): Astro `7.4.12`; `@astrojs/sitemap` `3.7.5`. The package manifest uses caret ranges, but lockfile pins these exact versions.
- `src/pages/guides/index.astro` (SHA `7d9065c9912434887b984adc4c69ab385a253675`) explicitly renders `guide.editorialStatus` in every guide card. `src/data/products.json` has 25/25 guides set to `Approved for publication` and `publicationStatus: published`. Therefore the badge is not an extraction artefact; it is intentionally rendered by the page template. No change made.
- `src/pages/guides/[slug].astro` renders editorialStatus only when it is not exactly `Approved for publication`; thus the status is exposed on the guide index cards but suppressed on the guide detail pages for approved guides.
- The `Jordan` term is present in five guide records, not just Air Fryers: `portable-power-travel-tech-us-uk`, `air-fryers-us-uk`, `home-air-purifiers-us-uk`, `smartwatches-us-uk`, `home-printers-us-uk`. Most mentions are regional electrical/warranty warnings, but these are UK/US-targeted guides and should be reviewed for whether Jordan is intentional. The Apple Watch Jordan official source is a different case: its source URL is Apple Jordan and it may be relevant to regional source verification; review individually rather than blindly deleting.
- The exact phrase `captured data` occurs in the Air Fryers record only, in the COSORI UK product-page voltage availability note.
- GitHub workflow `.github/workflows/build-check.yml` listens to PRs targeting main and includes npm ci, Astro checks, importer self-tests, catalogue validation, build, distribution, smoke, accessibility and Lighthouse. A draft PR may trigger Actions, so avoid creating one while quota restoration remains unverified.
- TinyFish wallet was checked read-only at 06:10 UTC and showed a negative balance of USD -0.472. Do not run further TinyFish fetch/browser/research calls or top up; the owner has not approved spending. Continue only with GitHub connector and genuinely free sources/tools.

**Revised next step:** use free GitHub source reads to complete static data/content review; obtain raw HTTP response headers only through a genuinely free source or owner-provided output. Do not use TinyFish until the owner explicitly approves a top-up.


## 12. SEO metadata source review — 22 Nov 2026

- The current guide data contains 25 unique non-empty `seoTitle` values (no duplicates found).
- Only 4/25 guides have a dedicated `seoDescription` field; the other 21 intentionally fall back to `guide.summary` in `src/pages/guides/[slug].astro` via `description={guide.seoDescription ?? guide.summary}`. Therefore these 21 are **not missing meta descriptions**; they lack a separately curated SEO-specific description. Treat the proposed 21-description package as an optional metadata improvement, not a technical indexing blocker.
- Article JSON-LD also uses `guide.summary` for description and `guide.publishedAt` for both datePublished and dateModified. Do not change dateModified unless the page content is actually modified.
- Exact source file SHAs at main: `src/pages/guides/index.astro` `7d9065c9912434887b984adc4c69ab385a253675`; `src/pages/guides/[slug].astro` `6d1543bf28b2bf8b788bc4166b562c4ee48d10bb`; `src/data/products.json` `bb261aff8200a0b5a8f11966080d4ed11376e20d`.
- `package-lock.json` exact versions: Astro `7.4.12`, `@astrojs/sitemap` `3.7.5`. Current sitemap integration is the standard Astro integration; no custom filename/prefix is configured (see `astro.config.mjs`).


## 13. Existing OpenSEO site-audit evidence (read-only, audit dated 19 Nov)

Retrieved a previously completed audit rather than starting a new crawl (audit ID `a9580b1b-cc76-4572-82a6-f6fe069a3448`, completed 2026-11-19 12:38 UTC):

- 28 pages crawled out of the 29 URLs currently extracted from the sitemap. The 28 returned pages were HTTP 200, indexable, had one H1, and had no missing image alt text. The audit's page list contained homepage, affiliate disclosure, guides index and all 25 guides; `/how-we-research/` was not present in that crawl result despite being in the live sitemap. Investigate its discovery/coverage; do not assume it is blocked.
- The audit returned 25 informational metadata findings: 21 title-too-long and 4 meta-description-too-long. It did not report critical/warning issues in its summary.
- These findings are from 19 Nov, not a fresh 22 Nov crawl. Treat as historical baseline, not current production truth.
- The source-code audit confirms all 25 guides have unique `seoTitle` values; dedicated `seoDescription` exists for only 4/25, while the remaining 21 use `summary` as the page meta description fallback. This is not a missing-description error. It is a chance to write 21 separately tailored descriptions if later approved and validated.
- Four descriptions were measured by the old audit at 162–176 characters; 21 titles at 61–79 characters. The report did not include the current 22 Nov re-render, so recheck exact live title/description before modifying metadata.

OpenSEO project audit retrieval used the saved report only; no new audit crawl, keyword credits or paid service was started.


## Continuation checkpoint — 22 Nov 2026, 06:50 UTC
- Re-read `src/data/products.json` on `main`: 25 guides / 100 products. Recursive text scan found no additional internal audit residue beyond the six already documented.
- Re-read `src/pages/guides/index.astro`: public guide cards still render `guide.editorialStatus`; remove only the public status display in a future reviewed patch, retain JSON/internal validation.
- Additional source review: Roborock UK pages show Saros 10R in UK family/navigation but no directly confirmed UK store product purchase page in the extracted evidence. Keep the caution pending direct product-level confirmation; do not substitute Saros 10.
- Razer Kiyo Pro Ultra 4K/30fps limitation is supported by Razer's official product page/manual; no change needed.
- Levoit Vital 200S-P US source confirms model LAP-V201S-WUS, 24V DC / 2.5A adapter output and 50W rating, but not the AC input range or UK regional bundle. Keep adapter-label/warranty caution.
- NETGEAR RBE773 UK page confirms 1 router, 2 satellites and 3 adapters. Official quick-start guide says adapters vary by region; exact AC input for UK retail pack remains unverified. Keep label-check warning.
- Updated and re-verified `docs/EDITORIAL_QA_SOURCE_VERIFICATION_2026-11-22.md` on this documentation branch. Latest commit: `5ee275b5c3a0223f23623f8b75b74bf404299774`.
- No edits to `main`, no PR, no Actions run, no merge, no deploy, no product import, no indexing requests, no paid services/TinyFish.
- Production main remains `26636d4359508b9af30eec498a22ffc005a81a72`.
- Next: continue read-only validation of other regional model/spec claims and live guide content; then assemble minimal patch proposal. Check Actions quota before creating a PR that triggers CI.


## Product specification review checkpoint — 22 Nov 2026, 06:54 UTC
- Read-only verification sample across portable power, Wi-Fi 7, security cameras, Ring doorbell and Apple Watch product records.
- Confirmed EcoFlow RIVER 2 US vs EU/UK electrical differences (120V vs 230V AC output; 100–120V vs 220–240V AC input) from official manual. Existing warning is correct.
- Confirmed Jackery Explorer 300 Plus JE-300B US vs Europe electrical differences from official Jackery pages (US 100V/60Hz output vs EU 230V/50Hz output). Existing warning is correct.
- Confirmed TP-Link UK Deco BE63 download page lists hardware revisions V3.60, V2.60, V2 and says regional availability varies. US documentation confirms four 2.5Gbps ports, but do not assume all UK revisions are identical; retain caveat pending exact UK hardware revision verification.
- Confirmed Arlo Essential 3 2K Outdoor UK SKU VMC3280-100EUS is fixed-view/no pan-tilt, 2K, 130° FOV, 12x digital zoom, integrated battery and dual-band Wi-Fi. Existing fixed-view and core claims are supported.
- Confirmed Ring 2026 rename from Battery Doorbell Plus (2nd Gen) to Battery Doorbell 2K Plus, no feature change.
- Confirmed Apple Watch Series 12 and Ultra 4 headline specifications against current official Apple pages (S11; display brightness; case size; battery estimates). Keep country/carrier caveats.
- Confirmed Anker 737 A1289 24,000mAh, 140W max, 630g and 2 USB-C + 1 USB-A; existing caveat that max output depends on device/cable is appropriate.
- Saved and re-verified expanded evidence in `docs/EDITORIAL_QA_SOURCE_VERIFICATION_2026-11-22.md`; latest commit before handoff updates: `53e14366859d45c06bbf068a42762a7f26155e10`.
- This is a targeted sample, not a complete re-certification of all 100 product records. No production data/code changed, no PR/CI/merge/deploy/index request/import/paid service used.
- Main remains `26636d4359508b9af30eec498a22ffc005a81a72`.
- Next: continue model/SKU and technical claim validation, prioritize UK regional hardware variants and safety-critical specifications; then consolidate minimal patch proposal.


## Continuation checkpoint — 22 Nov 2026, 08:07 UTC
- Continued read-only official-source review of four region-sensitive catalogue records: TP-Link Deco BE63, Roborock Saros 10R, Levoit Vital 200S-P and NETGEAR Orbi RBE773.
- TP-Link UK support lists revisions V3.60/V2.60/V2 and warns regional hardware availability varies. US documentation describes four 2.5Gbps ports, but this does not verify every UK revision. Keep regional/revision caution.
- Roborock UK shop/navigation mentions Saros 10R, but the extracted UK product/shop listings did not confirm a direct Saros 10R purchase listing; the confirmed UK Saros 10 page is a different model. Keep caution and do not substitute Saros 10.
- Levoit US Vital 200S-P confirms model LAP-V201S-WUS, 24V DC / 2.5A output and 50W rating, but not adapter AC input range or UK bundle. Keep regional adapter/warranty caution.
- NETGEAR UK RBE773 page confirms router x1, satellites x2, adapters x3; regional technical sheet and user guide do not establish exact AC input rating for the UK supplied adapters. Keep label-check advice.
- Evidence and decisions appended to `docs/EDITORIAL_QA_SOURCE_VERIFICATION_2026-11-22.md` on this docs branch.
- No edits to `main`, no PR, no GitHub Actions, no merge/deploy, no indexing requests, no catalogue import, no paid tool use.
- Main production baseline remains recorded as `26636d4359508b9af30eec498a22ffc005a81a72`; verify live refs before any subsequent operation.
- Next: continue static QA across remaining product records, then consolidate a minimal proposed content/template patch. Do not create a PR until GitHub Actions quota status is known.


## Continuation checkpoint — 22 Nov 2026, 08:15 UTC
- Continued static catalogue review of cordless vacuum and projector regional variants.
- Epson EF21 US model V11HB35320 is officially marked discontinued, while Epson UK EF-21G SKU V11HB35340 is listed in stock with 100–240V, 50/60Hz input. Keep the note scoped to the US EF21 variant; do not imply the UK EF-21G is discontinued.
- Samsung US Bespoke Jet AI VS28C9762UK/AA is specified at 120V/60Hz; Samsung UK model VS28C9784QK/EU is a distinct regional model. Existing warning is supported.
- Evidence appended to source-verification report on docs branch.
- No main changes, PR, Actions, merge, deployment, index request, product import or paid service.
- Next: continue checking remaining high-impact product records and consolidate proposed copy/template changes only after evidence review.


## Google Search Console owner notification — 22 Nov 2026, 08:10 UTC
- Owner supplied a screenshot of a Google Search Console email notification titled “Monitor the Google Search traffic to https://smartpickhub.pages.dev/”, dated Nov 21, 2026.
- The notification states: “Google systems confirm that on November 19, 2026 we started collecting Google Search impressions for your website in Search Console. This means that pages from your website are now appearing in Google search results for some queries.”
- Interpretation: this is first-party owner-provided evidence that Google has begun collecting Search performance impressions for the property and that at least some site pages appeared in results for some queries.
- This does NOT establish that all 25 buying guides are indexed, identify which URLs appeared, provide impression/click totals, or resolve the separate sitemap processing and Page indexing report delays.
- Keep the earlier URL Inspection evidence distinct: all 25 guide URLs previously returned “URL is unknown to Google”; that result is not necessarily inconsistent with a property-level performance notification, because the email does not name the URLs and the URL Inspection checks were at a particular time.
- Next verification: in GSC > Performance > Search results, set date range to last 7 days or since Nov 19; inspect Queries and Pages tabs, then compare impressions/clicks and identify the actual landing URLs. Do not repeat manual Request indexing while the daily quota error persists.
- Evidence source: owner screenshot uploaded in project conversation on 22 Nov 2026 at 08:10 UTC.
- No site changes, sitemap resubmission, indexing request, PR, CI, merge, deployment, paid service or credentials access performed.


## Live GSC performance read — 22 Nov 2026, 08:30 UTC
- Read the connected Search Console property directly through the existing OpenSEO connection; no credits charged.
- Query window returned by GSC: 2026-11-13 through 2026-11-19 (Pacific Time; latest ~3 days may be incomplete).
- Page dimension: 1 row, homepage only — 3 impressions, 0 clicks, CTR 0%, average position 88.3.
- Query dimension: three rows, each one impression, all mapped to homepage:
  - `site:pages.dev`: position 77
  - `site:pages.dev free`: position 170
  - `site:pages.dev store`: position 18
- Date dimension: 18 Nov had 0 impressions; 19 Nov had 3 impressions.
- Country dimension for 19 Nov: USA, 3 impressions. Device: DESKTOP, 3 impressions.
- Query/page combined dimension confirms all three impressions are homepage impressions; no guide URL appeared in the returned page rows.
- Interpretation: validates the owner-provided email at property level, but this is extremely early and low-volume visibility. These are site-restricted/brand-agnostic queries, not qualified buying-intent queries. No clicks or guide impressions are recorded in this data window.
- This does not prove guide URLs are not indexed; Search Console performance rows show pages that actually received impressions in the selected period, while URL Inspection and Page indexing reports are separate.
- Next: monitor Performance > Pages and Queries over a longer window as fresh data accrues; keep URL inspection for individual guide URLs and sitemap processing as separate workstreams. No repeated manual Request indexing while quota error persists.
- No production edits, sitemap change/resubmission, PR, CI, merge, deployment, index submission, product import or paid service.
