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
