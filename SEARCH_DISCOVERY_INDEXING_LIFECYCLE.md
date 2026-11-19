# SmartPickHub — Search Discovery & Indexing Lifecycle

**Status:** implementation blueprint + live baseline, 19 November 2026  
**Canonical production host:** https://smartpickhub.pages.dev/  
**Primary market:** United Kingdom (English); United States is secondary.  
**Owner controls:** no page may be published, deleted, or materially changed without the owner's editorial approval. Search notifications are allowed only after a page is publicly deployed and crawlable.

## 1. Objective and operating principle

This is a persistent discovery system, not a one-time sitemap submission. Every newly published or materially updated public URL should enter a predictable lifecycle:

1. Editorial approval and publication status are explicitly set.
2. A successful production build creates the page, canonical URL, internal links, structured data and sitemap entry.
3. Cloudflare Pages deploys the exact main-branch commit.
4. A post-deployment gate verifies the live deployment marker, robots.txt, canonical page response, sitemap and IndexNow key file.
5. The system notifies the relevant participating search engines (IndexNow) for changed URLs.
6. Google is handled separately through Search Console sitemap discovery and URL Inspection where appropriate; Google does not participate in IndexNow.
7. AI search discovery is handled through crawler access, clear page structure, canonical URLs, useful citations and up-to-date content. There is no universal AI-search submission API.
8. Monitoring records notification acceptance separately from crawl, index coverage, impressions and clicks.

**No guarantee:** notification means a search engine received a URL signal; it does not guarantee crawling, indexing, ranking, ChatGPT citations or sales.

## 2. Live production baseline (verified 2026-11-19)

- Cloudflare production marker reports commit `41aa1da3d6cb7455f28dbfa3e83877f57f3022a7`, branch `main`, environment `production`.
- All five board RSS routes return a valid RSS channel:
  - `/rss/home-office.xml`
  - `/rss/smart-home.xml`
  - `/rss/kitchen-home-tech.xml`
  - `/rss/travel-tech.xml`
  - `/rss/computing-gaming.xml`
- Sitemap index `/sitemap-index.xml` and child `/sitemap-0.xml` are publicly readable. Child sitemap currently contains 28 URLs: home, disclosure, guide hub and 25 guide pages.
- `robots.txt` currently allows general crawling and references the sitemap index.
- IndexNow key file is present in source at `public/smartpickhub-20261119-7f3c9a2d4b6e8a1c.txt`; live key URL must be verified before every notification workflow.
- Existing `scripts/ping-indexnow.mjs` validates production host, build robots/home/sitemap, live deployment marker, live robots/home/sitemap alignment and exact public key-file contents before POSTing to `https://api.indexnow.org/indexnow`. It reads `EXPECTED_DEPLOYMENT_SHA` and can skip safely when prerequisites fail.
- Existing `.github/workflows/indexnow-notify.yml` runs after successful `Astro Build and Quality Checks` on main (and supports manual dispatch restricted to main), waits up to 30 minutes for the matching Cloudflare deployment marker, then runs the notifier.
- **Important current behaviour:** notifier currently derives eligible URLs from the complete sitemap, so a successful main build can re-notify the whole current sitemap, rather than only changed URLs. This is acceptable for the small 28-URL baseline but must be changed before catalogue/page growth to thousands of URLs. It also does not submit deleted URLs because they are absent from the current sitemap.
- All 25 buying guides remain drafts/unapproved. RSS feeds correctly contain no items until both `publicationStatus === 'published'` and `editorialStatus === 'Approved for publication'`. Do not weaken this gate for discovery.

## 3. Destination matrix — what is and is not automated

| Destination | Discovery route | Automation status | Notes |
|---|---|---|---|
| Google Search | Google Search Console sitemap + URL Inspection | Partially configured | URL-prefix property `https://smartpickhub.pages.dev/` verified by owner. Sitemap previously showed “Couldn't fetch” despite public XML availability; unresolved. Google does not consume IndexNow. |
| Bing Search | IndexNow + Bing Webmaster Tools sitemap | Partially configured | IndexNow sender exists; verify successful workflow/notification in Bing Webmaster Tools IndexNow report. Bing site verification and sitemap submission still pending owner action. |
| Other IndexNow participants | Global IndexNow endpoint | Sender implemented, acceptance unconfirmed | Participating engines share notifications through the protocol; participant list can change. Never claim every search engine participates. |
| ChatGPT Search | OAI-SearchBot crawl access + sitemap/internal links | Crawler access configured by wildcard Allow | No public manual URL submission endpoint. OAI-SearchBot is for search discovery. |
| OpenAI model training | GPTBot access policy | Separate owner decision | GPTBot is not the ChatGPT Search crawler. Do not change its policy implicitly. |
| Microsoft Copilot | Bing index and Bing crawler discovery | Indirect | Bing Webmaster/IndexNow plus crawlable content. No separate SmartPickHub Copilot submission API established. |
| Other AI answer engines | Their documented crawlers and/or underlying search indexes | Not globally automatable | Maintain robots access where desired, strong source attribution and crawlable pages; add a dedicated integration only when the provider documents one. |

## 4. Event lifecycle for every future content change

### A. New product added to an existing guide
- Validate product record, manufacturer source, exact regional model, claims and affiliate link fields.
- Keep product image, price, stock, rating and review fields absent unless verified and legally usable.
- Update the affected guide's `updatedAt` only when content is materially updated.
- Rebuild the guide and sitemap; deploy.
- Notify the affected guide URL (and only genuinely affected supporting hub/category URLs) after live checks.
- Do not notify Pinterest unless the guide is both published and editorially approved.

### B. New standalone product or buying-guide page
- Create page and stable canonical URL; ensure it is linked from a relevant hub/category and included in XML sitemap.
- Run schema, canonical, robots, HTTP, internal-link, accessibility and content checks.
- Publish only after editorial approval.
- Deploy and verify exact live URL; notify changed URL through IndexNow.
- Google: ensure sitemap is valid in GSC; use URL Inspection for priority launches if appropriate.
- AI search: make the page crawlable and useful; do not promise immediate citation.

### C. Existing page materially updated
- Notify the canonical page URL after deployment.
- Avoid re-notifying for cosmetic changes, whitespace, dependency lockfile changes or unrelated code changes.
- If a guide's product facts change, also update relevant guide/hub references and date fields as appropriate.

### D. Page removed or moved
- Require owner approval.
- For a permanent removal, serve 404/410 or an intentional redirect; remove it from internal links and sitemap.
- Send the old URL via IndexNow as a deleted/changed URL where protocol handling supports it; if moved, also notify the new canonical URL.
- Never silently drop a live URL from sitemap while leaving it broken or orphaned.

## 5. Scale architecture — required before catalogue growth

The current whole-sitemap notification strategy must be replaced by a changed-URL queue before the site reaches hundreds/thousands of URLs.

Recommended implementation:
1. Compare the successful main deployment commit with the previous production commit (store the deployed SHA in an artifact/state file; do not rely on a shallow checkout without fetching the base).
2. Derive URL changes from route/data manifests, not generic file changes:
   - guide data changed → that guide URL;
   - product data changed → affected guide/product detail URLs only;
   - new/deleted route → new/old URL respectively;
   - shared layout/canonical/robots/template changes → controlled batch of all affected canonical pages.
3. Deduplicate and normalize canonical URLs; enforce exact production host.
4. Split into batches below the IndexNow maximum of 10,000 URLs per POST; use a much lower operational batch for this site (e.g. 100–500) to simplify retry and audit.
5. Persist a queue/receipt log containing commit SHA, URLs, change type, send time, endpoint, HTTP status and response classification. Never store API secrets in the log.
6. Retry transient 429/5xx with bounded exponential backoff; do not retry 400/403/422 blindly. Alert/fail visibly if key validation fails.
7. Add a scheduled reconciliation (weekly) that checks sitemap accessibility and compares sitemap URLs with live route responses; it must not repeatedly send every URL to IndexNow.
8. Add a quarterly full audit of robots, sitemap, canonical, schema, key-file reachability, Search Console and Bing reports.
9. At >10,000 URLs or high update frequency, use a durable queue/state store (GitHub artifact alone is not durable enough indefinitely); consider Cloudflare Queues/D1 only after evaluating free-tier limits and owner approval.

## 6. Google Search Console and Bing setup

### Google
- Keep verified URL-prefix property and verification meta tag permanently.
- Submit only the canonical sitemap index `https://smartpickhub.pages.dev/sitemap-index.xml`.
- Investigate the known “Couldn't fetch” issue before duplicate resubmission: inspect GSC details, XML content type, redirects, child sitemap fetchability and URL Inspection live test. Public fetch success is not proof Google parsed the file.
- Use URL Inspection on homepage and a small sample of priority guides; request indexing selectively after content approval.
- Monitor Page indexing reasons and Search performance; distinguish excluded/noindex/duplicate/canonical issues from temporary discovery delay.

### Bing
- Verify `https://smartpickhub.pages.dev/` in Bing Webmaster Tools.
- Submit `https://smartpickhub.pages.dev/sitemap-index.xml`.
- Check IndexNow report after a verified successful send.
- Keep the same canonical host across links, sitemap, robots, IndexNow payload and analytics.

## 7. AI search readiness
- Keep OAI-SearchBot allowed in production robots policy; verify the exact live policy after any robots change.
- Keep GPTBot policy separate and unchanged unless owner decides otherwise.
- Ensure important pages are server-rendered/static, accessible without login, have descriptive titles/H1s, canonical URLs, clear update dates, author/editorial context, sources and structured data where accurate.
- Keep internal links from hub/category pages; avoid orphan pages and thin auto-generated product pages.
- No third-party “AI indexing submission” service is required unless a named provider documents a legitimate integration. Avoid paid indexing guarantees and mass-submission services.

## 8. Monitoring and success criteria

Track separate stages:
- **Built:** page exists in build output.
- **Deployed:** exact production commit marker matches.
- **Discoverable:** URL appears in sitemap and has crawlable internal links.
- **Notified:** IndexNow accepted the URL batch (HTTP 200 or 202; 202 means key validation pending).
- **Crawled:** engine reports last crawl / URL Inspection confirms crawl.
- **Indexed:** engine explicitly reports indexed or URL appears in index coverage.
- **Performing:** impressions, clicks, query position and affiliate clicks are recorded.

Never collapse these into one “indexed” status. IndexNow acceptance does not guarantee crawling/indexing. Google is separate from IndexNow. ChatGPT Search discovery depends on OAI-SearchBot access and relevance, not a manual submit endpoint.

## 9. Current blockers / next implementation actions

1. Verify actual successful IndexNow workflow run and Bing IndexNow report; do not infer success from the workflow file alone.
2. Resolve Google Search Console sitemap “Couldn't fetch” discrepancy.
3. Complete Bing Webmaster verification and sitemap submission (owner may need to complete account UI verification).
4. Implement changed-URL detection and deletion handling before expanding the catalogue substantially.
5. Add a persistent notification receipt log and bounded retry policy.
6. Keep Pinterest RSS independent and approval-gated; do not conflate Pinterest pins with search indexing.
7. Update this document and `MASTER_PROJECT.md` / `AGENT_HANDOFF.md` after each verified milestone.

## 10. Authoritative references
- IndexNow protocol: https://www.indexnow.org/documentation
- IndexNow FAQ and participants: https://www.indexnow.org/faq
- Bing URL submission and IndexNow guidance: https://www.bing.com/webmasters/help/?topicid=62f2860b
- Bing IndexNow setup: https://www.bing.com/indexnow/getstarted
- Google Search Console Sitemaps: https://support.google.com/webmasters/answer/7451001
- OpenAI crawler documentation: https://platform.openai.com/docs/bots
- OpenAI Publishers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
