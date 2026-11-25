# SmartPickHub — Content & Product Quality Operating Standard

**Version:** 1.0  
**Established:** 25 November 2026  
**Scope:** Existing and future UK/US buying guides, keyword opportunities, product records and supporting editorial tools.  
**Authority:** Operational quality standard. It does not authorise publication, code changes, imports, merges or production deployment.

## 1. Non-negotiable operating principles

1. Work from the latest `main` catalogue and current project handoff. Reuse dated evidence and previous audit findings; never repeat completed checks without a reason.
2. Work one page (or one explicitly isolated product research task) at a time. Every unit receives a durable audit record before the next unit is marked active.
3. Distinguish **research complete**, **draft complete**, **quality passed**, **owner approved**, and **published**. These are different states.
4. No unsupported search volume, CPC, trend, ranking, ASIN, price, rating, review, stock, availability, warranty, image right or hands-on testing claim.
5. UK is the primary market; US is a separately researched secondary market. Never assume SKU, voltage, bundle, warranty, search demand or retailer availability transfers between them.
6. An Amazon model-name search URL is a search destination, not a direct product offer. Only record an ASIN/direct destination after exact model/variant and destination verification.
7. Manufacturer evidence supports identity and technical claims; it does not prove retailer stock, price, seller, review score or customer satisfaction.
8. Never publish, import, edit production content, change page status, merge or deploy without the owner's explicit approval.
9. Research automation may prepare evidence and drafts only. It must not bypass editorial, product, image-rights or owner approval gates.
10. Keep project records in GitHub so a new operator can continue from the exact state without asking the owner to repeat prior facts.

## 2. Work-unit definitions

- **Page unit:** One canonical guide URL / one unique primary buyer task. Variations of the same phrase do not automatically become separate pages.
- **Product unit:** One exact product model and package variant in one market. UK and US variants are separate product-market checks.
- **Keyword unit:** One query with a recorded market, intent, metric source/date and assigned page or disposition.
- **Evidence unit:** One material factual claim linked to an authoritative source and a check date.

A guide may contain multiple product units. Product research can be completed independently, but it does not certify the guide.

## 3. Fixed workflow — execute in this order

### Stage A — Intake and deduplication

- Read `MASTER_PROJECT.md`, `AGENT_HANDOFF.md`, this standard, the master tracker and the previous audit record.
- Read current `src/data/products.json`; confirm the guide, product records, existing publication state and exact slug.
- Compare the proposed topic and keywords against all existing guides, saved keyword clusters, open research PRs and prior candidate lists.
- Assign one canonical page target. Route secondary phrases to the existing page, a section/FAQ, another genuinely distinct page, or discard.
- Record what previous evidence is reusable and what is stale or missing.

### Stage B — Keyword and buyer-intent validation

For UK and US separately where both markets are intended:

- One primary keyword and a coherent secondary cluster.
- Intent label: transactional, commercial investigation, informational, or mixed; explain the actual buyer task.
- Search volume, KD, CPC, competition and monthly trend only when the provider, country, language, retrieval date and freshness are recorded.
- Clearly label cached/undated metrics as historical signals, not current facts.
- Identify buyer modifiers (e.g. for pets, small homes, budget, carpet, hard floors, battery replacement, without subscription) only when supported by SERP evidence or a credible query dataset.
- Identify seasonality and event-driven demand separately from evergreen demand.
- Reject a page idea when demand is unsupported, intent is weak, the topic overlaps an existing page, or a distinct buyer need cannot be demonstrated.

**No metric fabrication:** CPC is an advertiser-bid proxy, not affiliate revenue. Search volume is an estimate, not guaranteed traffic.

### Stage C — Live SERP and competitor analysis

- Capture a dated Google SERP sample for the target country and query.
- Record the actual ranking domains, page types, freshness, commercial modules, PAA/related questions where visible, and the dominant intent.
- Review at least the most relevant competing pages, not just their titles.
- Identify what competitors answer well, what they omit, and what SmartPickHub can substantiate better.
- Record whether the SERP is dominated by independent testing publishers, retailers, manufacturer pages, forums, videos or mixed results.
- Do not claim a keyword is easy from KD alone. Authority, page type, SERP features and evidence burden matter.
- UK and US SERPs must be reviewed separately before creating separate market pages.

### Stage D — Product and claim verification

For every product-market record:

1. Exact manufacturer brand, model code, SKU/part number, generation and package variant.
2. Current official manufacturer product/support page and, where needed, manual/specification sheet.
3. Each material claim mapped to a source: dimensions, weight, capacity, runtime conditions, suction units, voltage/frequency, plug, compatibility, accessories, consumables, subscriptions and warranty.
4. Exact regional differences and any material safety/compatibility warnings.
5. Conflicting manufacturer sources are recorded as conflicts; do not silently choose the most convenient number.
6. Retailer/Amazon destination: marketplace, exact model/variant selected, seller/condition if visible, destination URL, check date and whether it is direct or a search URL.
7. ASIN is recorded only after exact selected-variant verification. No ASIN guessing from search snippets or similar model names.
8. Image status: exact-model match, source page, licence/permission, attribution, permitted use and human approval. No scraping or automatic approval.
9. Product disposition: retain, correct, replace candidate, hold, or reject, with reason.

A manufacturer page alone does not make a product commercially ready. A search URL alone does not make a product listing verified.

### Stage E — Editorial brief and page draft

The brief must specify:

- Target reader and purchase situation.
- Primary buyer task and keyword intent.
- What decision the page helps the reader make.
- Inclusion/exclusion criteria for products.
- Comparison dimensions and why they matter.
- Evidence-backed differentiator unavailable from a generic product list.
- Required caveats and market-specific sections.
- Internal links to relevant existing pages and relevant supporting sections.
- Affiliate disclosure and conversion path.
- Content freshness/expiry triggers.

The draft must be original, useful and decision-oriented. It must not paraphrase competitors, imitate hands-on testing, or pad word count. Include meaningful comparison tables, product-specific pros/cons, limitations, buying criteria, FAQs only when useful, and source notes close to the relevant claims.

### Stage F — On-page, technical and conversion QA

- Search intent, title, H1, description, URL and content alignment.
- One clear primary topic; no keyword stuffing or near-duplicate headings.
- Canonical, robots/indexability, sitemap inclusion and internal discoverability.
- Useful internal links and no orphan page.
- Correct Article + BreadcrumbList + exactly one ItemList/Thing structure for editorial comparison guides, following `PRODUCT_STRUCTURED_DATA_POLICY.md`. No Product rich-result entities for editorial lists.
- Amazon UK and US destinations use the correct tracking identifiers and are labelled accurately as direct or search links.
- Affiliate disclosure is conspicuous and near links; do not remove existing disclosure safeguards.
- Mobile layout, readable tables, keyboard access, headings, contrast, alt text and image dimensions.
- Performance/image weight and generated route smoke tests where code/build scope is affected.
- No index request is a substitute for fixing discovery, canonical, robots or content problems.

### Stage G — Independent final audit and decision

A page is not complete because its draft is written. Review it against the scorecard below, verify evidence links and recalculate all statuses.

Possible outcomes:
- **PASS:** score >=90/100, all mandatory evidence gates pass, no hard blocker.
- **REVISE:** score 80–89 or limited correctable gaps remain.
- **HOLD:** a material source, model, market, retailer or technical question is unresolved.
- **REJECT:** no distinct buyer need, material misinformation, unsafe recommendation, or no viable evidence/commercial basis.

A high score cannot override a hard blocker. A page only counts as fully quality-audited when it has PASS status and the audit record is complete. Owner approval and publication remain separate states.

### Stage H — Owner review and controlled release

- Present the completed page audit, exact proposed changes and any remaining decisions.
- Do not change production catalogue/page status, merge or deploy without explicit approval.
- If approved, prepare an isolated branch/PR, run exact-head CI/build and preview checks, document rollback, and await separate release approval.
- After release, record deployed commit, route checks, sitemap/robots/canonical, analytics and affiliate destination verification.
- Indexing notifications are only notifications; they do not guarantee indexing.

## 4. Page scorecard — 100 points

| Dimension | Points | Required proof |
|---|---:|---|
| Keyword demand and buyer intent | 15 | Market-specific primary/secondary queries, source/date, intent and demand qualification |
| SERP, competitor and cannibalisation analysis | 10 | Dated SERP evidence, competitor page-type review, distinct gap and overlap decision |
| Product identity and factual evidence | 25 | Exact models/variants, claim-level manufacturer evidence, market/safety checks, product disposition |
| Editorial usefulness and originality | 20 | Strong buyer task, original decision framework, useful comparisons, balanced limitations, source-linked claims |
| Commercial and affiliate readiness | 10 | Correct marketplace, verified destinations or clearly labelled search links, correct tracking and disclosure |
| On-page SEO and structured data | 10 | Title/H1/meta/canonical/robots/internal links and compliant JSON-LD |
| UX, accessibility and performance | 5 | Mobile/readability/table/keyboard/contrast/alt/performance checks with evidence |
| Policy, trust and compliance | 5 | No fabricated claims, transparent methodology, image-rights gate, affiliate policy and owner controls |
| **Total** | **100** | **PASS requires >=90 and zero hard blockers** |

### Hard blockers (any one prevents PASS)

- Wrong or ambiguous product identity/market variant for a material recommendation.
- Unsupported material factual claim, electrical/compatibility risk or unsafe advice.
- Fake or unverified ASIN, direct offer, price, stock, rating, review or testing claim.
- Duplicate/thin page without a distinct buyer task.
- Broken canonical, accidental noindex/robots block on an approved production page, or broken public route.
- Missing/incorrect affiliate disclosure or wrong marketplace/tracking destination.
- Unlicensed/unapproved product imagery.
- Structured data contradicts visible content or violates the project policy.

## 5. Product-level evidence checklist

Every product-market record must carry:
- [ ] Exact model/SKU/variant and manufacturer identity.
- [ ] Primary source(s), access date and source type.
- [ ] Every material claim mapped to evidence.
- [ ] Conditions/units attached to performance figures.
- [ ] Regional electrical, compatibility, warranty and bundle checks.
- [ ] Current commercial/listing check, or explicit unresolved status.
- [ ] Direct ASIN verified OR destination explicitly remains a model-name search URL.
- [ ] Pros/cons are specific, balanced and evidence-supported.
- [ ] Image rights and exact-model match resolved, or no product image used.
- [ ] Disposition and reviewer note recorded.

## 6. Progress counters and reporting rules

Always report these counters separately:

1. **Fully passed pages:** PASS pages / total in-scope pages. This is the headline quality-completion percentage.
2. **In progress:** number of pages with an active audit but no final decision.
3. **Held/revise/rejected:** counts by disposition.
4. **Products verified:** exact product-market units fully verified / total units in the active scope.
5. **Keywords validated:** unique query-market units with current dated metrics and SERP evidence / candidate units.
6. **Owner-approved and published:** separate counters; never infer from QA pass.

Formula: `full_audit_completion = PASS_pages / in_scope_pages * 100`.

Do not count partial research, source discovery, draft writing, CI success or indexability as a full page pass. Do not add a partially completed page to the numerator. Report the active page's checklist sections and blockers separately.

## 7. Reuse and handoff protocol

Each page audit file must contain:
- Stable guide slug and production URL.
- Current catalogue commit/blob SHA and source record snapshot reference.
- Previous audit evidence reused, with original dates.
- New work performed, source URLs, retrieval date and exact finding.
- Keyword/SERP evidence and freshness labels.
- Product-by-product market status.
- Scorecard, blockers, disposition and next exact action.
- Changes actually made (normally none until approval).
- Owner decisions/approvals and PR/commit/deployment refs if later applicable.

Update the master tracker and `MASTER_PROJECT.md` / `AGENT_HANDOFF.md` at each significant checkpoint. A successor must continue from the tracker’s **Next active unit**, not restart discovery or re-audit passed items.

## 8. Initial operating cadence

- First, complete the current 25-guide quality pass using existing evidence as baseline.
- Research and prepare new keyword/product opportunities in parallel, but keep them outside the publication queue until each passes the same gates.
- Work sequentially through one page at a time. A page that is HOLD still receives a documented disposition and exact unblock action; do not leave vague "review later" notes.
- Start with small release pilots only after the current technical discovery/indexing issues are understood and the owner approves release.
- Increase batch size only after actual page quality, crawl/discovery, user engagement and conversion evidence supports it. There is no Google-approved daily page quota.


## 9. Extended product-specific and Google indexability quality gates (25 Nov 2026)

These checks extend v1.0. Apply only where relevant to the product and buyer decision; record N/A with a reason rather than forcing irrelevant specifications into every guide.

### 9.1 Energy, operating cost and environmental suitability

For appliances and powered equipment, evaluate where material and source-supported:
- Rated input power (W), voltage/frequency and regional plug/electrical compatibility.
- Energy use in a clearly defined operating mode or test cycle (kWh per cycle, hour or year); do not convert rated watts into claimed real-world consumption without stating the calculation and assumptions.
- Running-cost estimate only when a current, market-specific electricity tariff is sourced and dated. Formula: kWh × tariff per kWh; show usage assumptions and label it an estimate, not a guaranteed bill.
- Energy labels/efficiency classes and official test methodology where legally/applicably available. Never compare ratings from incompatible schemes or markets.
- Heat output, ventilation/clearance, noise and standby consumption when relevant to safe installation, comfort or ownership cost.
- Humidity/moisture suitability: IP rating or explicit manufacturer permission for damp rooms, bathrooms, basements, outdoor use, wet cleaning or water exposure. Do not infer moisture resistance from appearance or marketing wording. Flag corrosion, mould, condensation, filter-drying and electrical shock risks where relevant.
- Consumables, filter replacement, battery replacement, charging, water use, detergent, descaling, maintenance intervals and disposal/recycling when these materially affect total cost or suitability.
- For products with batteries: chemistry/capacity where disclosed, replaceability, spare-battery availability, charging conditions, transport/safety warnings and end-of-life route.
- For vacuums/air treatment: distinguish motor input watts from suction/air-watt claims; record runtime by power mode, tool/head, battery and test condition; dust-bin capacity, filtration standard, filter availability and maintenance. Do not infer whole-room air-cleaning performance from a filter label alone.

### 9.2 Google crawl and indexability gate

Before PASS, check the actual canonical production URL and record timestamp, tool/report, result and evidence. A successful live test means eligible/accessible at test time; it does not prove Google has crawled or indexed the URL.

Required checks:
- HTTP response and redirect chain: expected public URL resolves successfully; no 4xx/5xx, redirect loop, unexpected login/challenge, soft-404 or wrong destination.
- robots.txt: no disallow rule affecting the URL or required assets; confirm the correct host/protocol and no accidental broad block.
- HTML robots meta and X-Robots-Tag: no unintended noindex/none; distinguish page directives from image/PDF directives.
- Canonical: absolute, valid, intended self-canonical (or documented canonical target); no cross-market or duplicate-page canonical mistake.
- Rendered HTML: meaningful primary content and ordinary crawlable anchor links exist without requiring a click, form submission or client-only interaction; check mobile/desktop rendering when materially different.
- Sitemap: correct sitemap index/child sitemap returns valid XML with successful HTTP response; canonical URLs only, correct host/protocol, no noindex/redirect/error URLs; lastmod truthful; robots references the intended sitemap. Confirm Search Console submission/processing separately.
- Discovery: page is linked from relevant index/category pages and other contextual pages; avoid orphan URLs. Sitemap presence and IndexNow notification do not guarantee discovery or indexing.
- Search Console URL Inspection: record Google Index state, last crawl, crawl allowed, page fetch, indexing allowed, user-declared canonical and Google-selected canonical when available. Record Live Test separately. URL unknown to Google is not itself proof of a noindex/robots block or content-quality rejection; investigate discovery/referring sitemap/links and crawl history.
- Structured data: validate syntax and policy compliance; compare JSON-LD with visible content. Structured data validity does not guarantee indexing or rich results.
- Duplicate/thin/soft-404 and quality signals: verify unique buyer task, substantial visible content, coherent title/H1, no near-duplicate market pages, no empty templates, no misleading metadata or doorway-like mass pages.
- Manual actions/security issues and Search Console Page Indexing reasons where available; distinguish property-wide reports from URL-specific evidence.
- After release, recheck the deployed URL, sitemap response, canonical/robots, internal links and GSC status on a sensible schedule. Do not repeatedly submit requests or alter technical files without a diagnosed cause.

Known failure patterns to guard against (not an assertion that each occurred on this site):
1. Accidental noindex or X-Robots-Tag: noindex on production.
2. robots.txt disallowing the guide, host, or required rendering resources.
3. Canonical pointing to the homepage, another guide, staging host, HTTP version, or wrong market variant.
4. Sitemap invalid XML, inaccessible response, wrong sitemap index/child URL, blocked fetch, redirects, stale/noncanonical URLs, or host mismatch.
5. URL omitted from sitemap and weak/no internal links; orphan pages and navigation links available only after JavaScript interaction.
6. Broken routes, redirect chains/loops, 404/5xx, soft-404, bot challenges or server instability.
7. Empty/thin/duplicated pages, near-identical UK/US pages without meaningful regional differences, or scaled pages with no distinct user value.
8. Rendering differences where important content/links are absent from Google's rendered HTML.
9. Conflicting canonical, robots, sitemap and structured-data signals.
10. Search Console processing delay or URL unknown misdiagnosed as a confirmed technical block; live-test eligibility misreported as indexed.
11. Structured-data errors or markup inconsistent with visible content (usually a rich-result/quality issue, not automatically a deindexing cause).
12. Manual action, security issue, legal/policy restriction or spam-policy violation.

Diagnosis rule: never change robots.txt, sitemap, canonical, page status or deployment configuration solely because a URL is not indexed. First capture the exact report reason and read-only HTTP/HTML/header evidence; then propose the smallest fix and obtain owner approval.

### 9.3 Release batch, lock and no-repeat protocol

The 25 existing guides are the fixed initial quality cohort. The headline denominator remains 25 guides. Each existing guide currently contains four product records; a completed page audit includes its four records, while product-market evidence is still reported separately and cannot be silently inferred from a page PASS.

- 40% milestone = 10 of 25 guides with complete PASS audits (and all product records required by those pages cleared), then owner approval, controlled merge and verified production release. 60% = 15/25; 80% = 20/25; 100% = 25/25.
- A percentage milestone is not permission to publish. Owner approval is still required for the exact batch, PR/merge and deployment.
- Do not merge a documentation-only audit branch as if it were a content release. Content/code changes must be isolated, previewed, tested and separately approved.
- After a page is PASS, owner-approved, merged and production-verified, mark it LOCKED_COMPLETE with audit ID, commit, PR, deployed commit, release date and route/SEO checks. Future operators must skip it and start at the next uncompleted page.
- Reopen a locked page only for a material trigger: manufacturer/model discontinuation or safety recall; significant spec/variant/warranty/availability change; broken retailer/affiliate destination or policy change; Google/Bing indexing/manual-action issue; route/canonical/robots/schema regression; material search-intent/SERP shift; owner request. Record trigger and delta; do not repeat the entire audit by default.
- At 100% of the 25-guide cohort, close the initial cohort. Only then begin the separate expansion queue. Each new product is prepared as a complete page/product unit, fully audited, owner-approved, then published or scheduled; no bulk thin-page generation.
- Keep QA PASS, owner approval, merged, deployed, indexed and commercially performing as distinct states. Never call a page indexed based only on successful deployment or live test.
## 10. Legacy evidence, historical completion and no-reset rule (added 25 Nov 2026)

The v1.0 standard is a certification framework, not a reset of project history. Existing completed work must be reconciled and credited by scope.

- Preserve separate counters for approved/published guides, structural catalogue completeness, product source-reference coverage, historical CI/release checks, v1.0 full page PASS, owner approval, deployment, indexing and commercial performance.
- A 0/N v1.0 PASS counter means only that N pages have not yet been fully certified against every v1.0 gate. It must never be presented as overall project progress or as evidence that previous work was not completed.
- Reuse legacy evidence when the prior record identifies the exact scope, source, date, commit/version and result and remains applicable. Mark the relevant scorecard criterion SATISFIED — LEGACY EVIDENCE; do not repeat its test.
- Recheck only volatile evidence (e.g. current stock/price), broken or stale sources, unresolved conflicts, affected code/catalogue, or a recorded material regression. Historical tests remain valid for their exact commit and scope, not automatically for later changed code.
- A structural audit can satisfy structural criteria only. A source URL recorded is not proof every claim was verified. A successful build does not prove indexing. Prior owner approval/publication does not automatically equal v1.0 PASS, but it must remain credited in its own counter.
- Before marking a page QUEUED or repeating any test, inspect legacy audit files, merged PRs, exact-SHA CI runs, release/deployment records, previous source checks and owner decisions. Pages with prior work should be marked LEGACY_EVIDENCE_AVAILABLE — RECONCILIATION_PENDING, not NOT STARTED.
- Do not reset the cohort or re-audit all 25 from scratch. Reconcile old evidence first, then run only missing delta checks. The active page remains the only full v1.0 pilot unless the owner changes priority.

The controlling evidence map is docs/LEGACY_EVIDENCE_RECONCILIATION_2026-11-25.md.