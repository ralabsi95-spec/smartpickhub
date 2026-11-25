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

