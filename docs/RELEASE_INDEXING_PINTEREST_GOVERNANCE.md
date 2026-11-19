# SmartPickHub — Release, Indexing & Pinterest Governance

**Status:** Approved operating plan; execution is gated.  
**Recorded:** 18 November 2026  
**Branch:** `automation/bootstrap`  
**Authority:** This document records the owner's intended launch sequence. It does not authorize merge, production configuration changes, indexing activation, public publishing, or Pinterest posting.

## 1. Non-negotiable safety state before launch

Until an explicit launch decision is made:
- Keep preview pages tagged `noindex, nofollow` and keep preview `robots.txt` at `Disallow: /`.
- Keep the development branch separate from `main`; PR #1 remains Draft/open/unmerged.
- Keep every guide in research-draft state unless it has passed the full editorial and commercial approval workflow.
- Do not run IndexNow, submit public sitemaps, enable indexing, publish RSS items, or post Pins for unapproved guides.
- Do not change Cloudflare production settings, DNS, domains, or deployment configuration without explicit owner approval.
- Never treat CI success or a successful Preview deployment as editorial, commercial, or launch approval.

## 2. Release gates — required order

### Gate A — engineering and deployment readiness
- CI passes on the exact candidate commit, including locked install, checks, importer tests, catalogue/affiliate validation, static build, smoke tests, accessibility checks and audit report.
- Confirm the immutable Cloudflare Pages Preview deployment corresponds to that exact commit; inspect key routes and generated headers/robots output.
- Verify canonical URLs, sitemap generation, RSS output, redirects, 404 behavior, mobile layout, accessibility and performance.
- Resolve or explicitly document security advisories and time-boxed exceptions; no exception silently expires or extends.
- Confirm backup/rollback and production deployment ownership before any cutover.
- Confirm the production Pages project and intended origin are correctly configured through an owner-authorized process.

### Gate B — catalogue and product evidence
For every product in a guide selected for launch, verify and record:
- Exact manufacturer model, SKU/part number and package variant.
- Correct US versus UK variant, mains voltage/frequency, plug, radio/regulatory restrictions where relevant, and compatibility.
- Current manufacturer documentation and a suitable retailer/Amazon destination for the correct marketplace.
- Consumables, subscriptions, warranty/region limitations and material caveats where relevant.
- Affiliate destination uses the correct marketplace and tracking ID. Search links must remain clearly distinguished from direct product links.
- No invented ASIN, price, rating, stock, review count or hands-on claim.
- Product images have a documented source, reuse licence/permission, attribution requirements, model identity match and human approval. No Amazon image scraping or automatic image approval.

A product or guide with unresolved model, voltage, regional SKU, destination, rights or material factual uncertainty stays out of the approved launch batch.

### Gate C — editorial approval
- A human reviews the complete guide for usefulness, originality, accuracy, clarity, disclosure, commercial balance and UK-first relevance (with US comparison where applicable).
- The guide receives the exact status `Approved for publication` only after all required product and editorial checks pass.
- Maintain a dated approval record and reviewer/evidence trail.
- Publish a small, high-confidence initial batch; do not bulk-approve all 25 guides by default.
- Remaining guides stay drafts and must not appear in public RSS, sitemap or Pinterest automation.

### Gate D — explicit launch authorization and production cutover
Only after Gates A–C pass for the selected batch and the owner explicitly authorizes launch:
1. Review and approve the exact PR head and merge plan; merge to `main` only with explicit approval.
2. Deploy the approved commit to the intended Cloudflare Pages production project.
3. Verify production origin, TLS, canonical URLs, redirects, key routes and rollback readiness.
4. Switch production-only metadata to `index, follow`; preview and non-production environments must remain `noindex, nofollow`.
5. Update production `robots.txt` to allow approved public pages while keeping private, preview, temporary and non-public paths blocked.
6. Verify the production response headers/meta and robots file from the public origin before any search-engine submission.

No release step should infer permission from a prior technical approval.

## 3. Indexing and discovery after production verification

- RSS: include only guides with exact editorial status `Approved for publication`; an empty feed is correct when no guides qualify.
- Sitemap: generate only canonical public URLs for approved guides and necessary public site pages. Exclude drafts, preview URLs, temporary routes and private paths. Validate the XML and canonical host before submission.
- Google Search Console and Bing Webmaster Tools: verify domain/property ownership, submit the production sitemap, and inspect representative approved URLs. Submission is a request for discovery, not a guarantee of indexing.
- IndexNow: run only after production is live, the production origin is confirmed, the verification key is publicly reachable at its required location, and the notifier's allowlist/safety checks pass. Send only changed, approved production URLs. Never send preview or draft URLs.
- Keep the existing safety behavior that skips IndexNow while noindex/robots blocking is active.
- Record submission dates, URLs, response outcomes and follow-up checks. Do not equate successful notification with search indexing.

## 4. Pinterest governance and operating plan

### Account and destination setup
- Use a Pinterest Business account and claim/verify the production website only after the production domain/origin is final and owner-approved.
- Create relevant boards around buyer intent and guide categories; keep board titles/descriptions accurate and market-aware.
- Every Pin must link to the relevant SmartPickHub buying guide, never directly to an external retailer product page.
- Use clear affiliate disclosure on the destination guide and maintain any required disclosure in Pin copy where applicable.

### Images and creative
- Prefer original, locally designed guide-cover artwork or properly licensed assets. Product imagery must satisfy the image provenance policy and exact-model checks.
- Use a consistent, legible vertical Pin format, strong title hierarchy, useful context and accessible contrast.
- Do not imply product testing, endorsements, savings or specifications that are not supported.
- Provide descriptive alt text where the publishing interface supports it.

### Copy, keywords and market variants
- Write unique, useful Pin titles and descriptions based on the guide's actual subject and search intent.
- Use UK spelling/terms and UK product context for UK-targeted Pins; create separate US copy only where the guide and product variants support it.
- Terms such as voltage compatibility, energy efficiency or regional compatibility may be used only when the guide substantiates them.
- Avoid keyword stuffing, misleading claims, unsupported year labels and repetitive near-duplicate Pins.

### Publishing and automation controls
- Only guides marked `Approved for publication` and passing product/commercial checks may be scheduled or posted.
- RSS-to-Pinterest automation is a later optional workflow, not an assumption that an RSS feed automatically creates a Pinterest Catalog or Rich Pin. First verify Pinterest's current supported feed/merchant requirements and the account's available publishing integration.
- Buying guides are editorial content URLs; they are not automatically product-catalogue product records. Do not submit guide RSS as a product feed unless Pinterest's documented schema and account requirements explicitly support that use.
- Begin with a small manually reviewed pilot. Confirm Pin preview, destination URL, image rights, disclosure, market targeting and analytics before scheduling more.
- Automation may create drafts or queue items for human review; it must not publish unapproved guides or bypass the approval status.
- Monitor Pinterest Business analytics (impressions, saves, outbound clicks and engaged audience) and site analytics separately. Evaluate qualified guide visits and downstream affiliate performance without confusing Pin engagement with Amazon clicks or sales.

## 5. Release decision checklist

A launch batch is eligible only when all are true:
- [ ] Exact candidate commit passes CI and has a verified matching Preview deployment.
- [ ] Production origin, TLS, canonical URLs, redirects and rollback are verified.
- [ ] All products in the batch pass model/SKU/voltage/marketplace and destination checks.
- [ ] Image rights, attribution and model identity are recorded and approved.
- [ ] Editorial review is complete and each guide is explicitly approved.
- [ ] Affiliate disclosure and tracking destinations are verified.
- [ ] Sitemap, RSS, robots and metadata behavior are tested against production rules.
- [ ] Analytics/privacy setup and measurement ownership are reviewed.
- [ ] Pinterest account, claimed domain, boards, creative and destination links are reviewed.
- [ ] Owner explicitly authorizes merge, production cutover and indexing activation.

## 6. Current project position at recording

- 25 guides and 100 product records exist; 0 guides are approved for publication.
- All 25 guides remain research drafts.
- Product-image readiness at the latest inspected quality report: 0 approved, 0 pending human review, 100 without product images.
- 69 identical US/UK search phrases remain manual regional-review flags; identical phrases do not prove SKU equivalence.
- CI #664 passed on PR head `ecc2498386e3ed8012161d3460951fb242ef8bf9`; a later documentation-head CI run #671 also completed successfully on PR head `c1524f08895202ce8e80a490372c4dedacd58957`.
- Cloudflare Pages bot reported successful Preview deployment for commit `c1524f0` at https://8ed47977.smartpickhub-preview.pages.dev/. This is a Preview deployment only, not production.
- Preview noindex/robots protections remain mandatory. No merge, production launch, public indexing or Pinterest publication has been authorized or performed.
- The picomatch advisory watch remains open under the owner's temporary risk acceptance, with review due 2 December 2026.

## 7. Next work before launch planning advances

1. Verify the latest Preview deployment and rendered contrast/accessibility evidence for the current commit.
2. Continue exact regional SKU and manufacturer-source verification.
3. Build and test the image provenance/licence/approval workflow.
4. Select a small candidate guide batch for human editorial review; do not change approval flags without review.
5. Prepare analytics/privacy and Pinterest account setup as checklists only; activate after launch gates and explicit authorization.
6. Reassess architecture for large catalogue growth separately; 100-product static build success is not proof of million-item readiness.

---
This document records policy and sequencing. It is not a deployment instruction.
