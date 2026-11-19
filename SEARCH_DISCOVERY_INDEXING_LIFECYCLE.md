# SmartPickHub — Search Discovery & Indexing Lifecycle

**Status:** operational baseline + scale-up design, verified 19 November 2026  
**Canonical production:** https://smartpickhub.pages.dev/ (Cloudflare Pages + Astro)  
**Preview:** https://smartpickhub-preview.pages.dev/ (must remain non-indexable)  
**Primary market:** United Kingdom; US is secondary.

## 1. Operating principles

This is a controlled discovery lifecycle, not an indexing guarantee.

1. Editorial approval and publication state determine whether content may appear publicly.
2. A successful build validates the catalogue, canonical URLs, metadata, structured data, affiliate links and sitemap.
3. Cloudflare Pages deploys the main-branch commit.
4. Post-deployment checks verify the live deployment marker, robots policy, sitemap, canonical page responses and IndexNow key.
5. IndexNow is notified only after its guarded CI/deployment conditions pass.
6. Google Search Console is separate: Google does not participate in IndexNow.
7. Crawl, indexation, ranking, search impressions, affiliate clicks and sales are separate outcomes and must be measured separately.

**Never equate notification acceptance with crawling or indexing.** IndexNow acceptance does not guarantee inclusion, ranking, AI citations or sales.

## 2. Verified production baseline — 19 November 2026

- Production marker confirms commit `88f7f86d6083e2546f229d0ba4c6258df30dc62b`, branch `main`, environment `production`.
- Production URL: https://smartpickhub.pages.dev/
- Preview URL: https://smartpickhub-preview.pages.dev/; keep it noindex/nofollow and crawl-disallowed.
- Sitemap index `/sitemap-index.xml` and child sitemap `/sitemap-0.xml` are publicly readable. The sitemap contains 28 URLs: homepage, disclosure, guide hub and 25 buying guides.
- Production `robots.txt` allows crawling and references the canonical sitemap index.
- The IndexNow verification key file is publicly reachable and was verified against the configured key before this checkpoint.
- Catalogue contains 25 owner-approved/published guides and 100 product records (four per guide). Do not re-import or recreate them.
- Product image records are absent by design. Use only exact-model images with documented commercial reuse rights; otherwise retain the existing text-based product card.
- Five category RSS feeds are live and populated. Pinterest has not been connected to them and no Pins have been published.
- Amazon marketplace links are search links, not verified direct ASIN listings. UK tracking ID: `smartpickhubu-21`; US secondary ID: `smartpickh0bc-20`.
- Fresh OpenSEO audit `a9580b1b-cc76-4572-82a6-f6fe069a3448`: 28/28 URLs crawled, HTTP 200, indexable and present in sitemap; no critical crawl issues. Remaining suggestions are informational: 21 long title tags and 4 long meta descriptions.
- OpenSEO has no connected Google Search Console or GA4 account. The Google verification meta tag exists, but GSC sitemap submission/processing and search performance are not confirmed.

## 3. Destination matrix

| Destination | Discovery route | Current status |
|---|---|---|
| Google Search | Search Console sitemap + URL Inspection | Verification meta exists; GSC connection and sitemap processing remain unconfirmed. Google is not an IndexNow participant. |
| Bing Search | IndexNow + Bing Webmaster Tools | Guarded sender is implemented; this checkpoint does not yet claim a successful post-merge notification receipt or Bing indexing. |
| Other IndexNow participants | IndexNow protocol endpoint | Sender exists; actual acceptance must be confirmed from the workflow result. Participants may change. |
| ChatGPT Search | OAI-SearchBot crawl access, sitemap and internal links | Crawl access is distinct from a manual submission API; no universal manual URL submission endpoint is assumed. |
| OpenAI model training | GPTBot policy | Separate from OAI-SearchBot. Do not change policy implicitly. |
| Microsoft Copilot | Bing discovery/index | Indirect via Bing; no separate SmartPickHub Copilot submission API is assumed. |
| Other AI answer engines | Provider-documented crawlers/indexes | No universal submission mechanism; add integrations only when a provider documents one. |

## 4. Current guarded IndexNow implementation

- Workflow: `.github/workflows/indexnow-after-production.yml`.
- Notifier: `scripts/ping-indexnow.mjs`.
- It validates the production host, build-time robots/home/sitemap, live deployment marker, live robots/home/sitemap and public key-file contents before submitting.
- The workflow runs after successful `Astro Build and Quality Checks` on `main`.
- The guard accepts either the exact commit that passed CI, or a verified documentation-only descendant that is itself on `main`. If any non-Markdown file changed after the tested commit, the workflow waits for CI on that newer code.
- PR #10 repaired the old exact-SHA deadlock. Its full QA run #825 passed on tested PR head `a73e54640f5de070a717a4ec066c4d2a733cdad3`; PR #10 was merged as `88f7f86d6083e2546f229d0ba4c6258df30dc62b`. Production now serves that merge commit.
- **Post-merge IndexNow outcome is not yet recorded as confirmed.** Do not claim submission or acceptance until the post-merge workflow run shows its final result and HTTP response classification.

### Current scale limitation

The notifier currently derives URLs from the complete sitemap, so a successful main build can re-notify the whole current sitemap. It does not yet maintain a route-aware changed-URL queue or notify deleted URLs. This is acceptable for the current 28-URL sitemap, but must be replaced before substantial catalogue growth.

## 5. Lifecycle for future content changes

### New guide
- Validate evidence, regional model identity, claims, sources, affiliate destination and editorial status.
- Require explicit owner approval before publication.
- Build and validate canonical URL, internal links, metadata, schema and sitemap inclusion.
- Deploy to production; verify the live route and deployment marker.
- Notify the canonical URL through the guarded process.
- Keep Pinterest publication separate and approval-gated.

### Product added or materially changed within a guide
- Validate exact model/region, manufacturer source, compatibility and any safety/electrical caveats.
- Do not invent ASINs, direct product links, prices, ratings, availability, reviews or hands-on experience.
- Update only the affected guide and genuinely affected hub/category pages.
- Deploy, verify, then notify affected canonical URLs.

### Page moved or removed
- Require owner approval.
- For a move, implement a deliberate redirect and notify the new canonical URL.
- For permanent removal, return 404/410 as appropriate, remove internal links and sitemap entry, and handle the old URL through the documented IndexNow deletion/change process when implemented.
- Never silently remove a URL from the sitemap while leaving a broken live route.

## 6. Scale architecture — required before hundreds/thousands of URLs

Replace whole-sitemap notification with a durable, route-aware change queue before major catalogue expansion.

1. Compare the new successful production commit with the last verified production commit; persist the previous deployed SHA.
2. Derive URL changes from route/data manifests, not generic file changes:
   - guide data change → affected guide URL;
   - product data change → guide/product detail URLs that actually depend on it;
   - route addition/removal → new/old canonical URL;
   - shared template/canonical/robots change → controlled batch of affected routes.
3. Normalize and deduplicate canonical URLs; reject any non-production host.
4. Classify events: new, materially updated, moved, deleted, or no-notification.
5. Batch within IndexNow protocol limits; use smaller operational batches (for example 100–500) for traceability.
6. Persist receipts: commit SHA, event type, URL batch, timestamp, endpoint, HTTP status and response classification. Never log secrets.
7. Retry transient 429/5xx with bounded exponential backoff; do not blindly retry permanent 4xx failures.
8. Add reconciliation that checks sitemap-to-live-route consistency without resending every URL.
9. Add monitoring for queue age, failed batches, duplicate notifications and deleted-route handling.
10. Evaluate Cloudflare Queues/D1 or another durable store only after cost, retention and owner approval. GitHub Actions artifacts alone are not a permanent queue database.

## 7. Google Search Console and Bing

### Google
- Keep the verified canonical URL-prefix property and verification tag.
- Submit only `https://smartpickhub.pages.dev/sitemap-index.xml`.
- Investigate the known “Couldn't fetch” discrepancy through GSC details, XML content type, redirects, child sitemap fetchability and URL Inspection live tests.
- Public fetch success does not prove Google parsed the sitemap.
- Connect GSC before claiming Search Console coverage, impressions, clicks or indexing status.

### Bing
- Verify the canonical Pages host in Bing Webmaster Tools.
- Submit the canonical sitemap index.
- After a confirmed IndexNow send, inspect Bing's IndexNow report separately.
- Do not claim Bing indexing merely because the protocol endpoint accepted a notification.

## 8. AI crawler readiness

- Keep production pages publicly crawlable and server-rendered/static.
- Keep OAI-SearchBot and GPTBot policies conceptually separate; do not change GPTBot policy without a separate owner decision.
- Maintain descriptive titles/H1s, canonical URLs, useful sources, clear editorial context, structured data where accurate, and internal links from relevant hubs.
- Do not buy “AI indexing” guarantees or use undocumented bulk-submission services.

## 9. Monitoring stages and reporting vocabulary

Track each stage independently:

- **Built:** route exists in build output.
- **Deployed:** production marker confirms the expected commit.
- **Discoverable:** canonical URL is in sitemap and has internal links.
- **Notified:** IndexNow endpoint accepted the submitted batch.
- **Crawled:** search engine reports a crawl.
- **Indexed:** search engine explicitly reports indexed/included.
- **Performing:** impressions, clicks, rankings and affiliate results are measured.

A page can be deployed and discoverable without being indexed. A notification can be accepted without a crawl. Never collapse these states into a single “indexed” status.

## 10. Deferred items / next actions

1. Verify the post-merge main quality CI and guarded IndexNow workflow result; record the exact run and acceptance response.
2. Connect Google Search Console and GA4 to the approved reporting workflow; diagnose the sitemap fetch issue.
3. Complete Bing Webmaster verification and sitemap submission.
4. Implement changed-URL/deletion detection and durable receipts before scaling beyond the current small catalogue.
5. Keep Pinterest feeds and Pins separate from search indexing; no Pin publication without approval.
6. Update this document and project handoff after each verified milestone.

## 11. Authoritative references

- IndexNow protocol: https://www.indexnow.org/documentation
- IndexNow FAQ: https://www.indexnow.org/faq
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- Google Search Console Sitemaps: https://support.google.com/webmasters/answer/7451001
- OpenAI crawler documentation: https://platform.openai.com/docs/bots
- OpenAI Publishers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
