# SmartPickHub — 1,000-Product Evidence-Led Growth Roadmap

**Prepared:** 21 November 2026  
**Status:** Strategy and research operating specification; not a catalogue import, public-content release, or publication approval.  
**Primary market:** United Kingdom  
**Secondary market:** United States, researched independently  
**Target:** Build toward 1,000 distinct, evidence-qualified product records without manufacturing pages, keyword demand, rankings, reviews, or product availability.  
**Final consolidated validation window:** 1 December 2026

## 1. Executive decision

The 1,000-product target is a **validated catalogue target**, not a target to generate 1,000 product names, 1,000 pages, or 1,000 keyword phrases.

The current baseline is 25 published buying guides and 100 product records. The 100 products have distinct names, manufacturer-source URLs, source notes, and separate UK/US marketplace search identifiers. This is useful initial evidence, but it does not prove current retailer availability, exact Amazon ASIN identity, demand, search ranking, or conversion.

The next 900 records must be discovered and qualified independently. Do not multiply the existing four-products-per-guide pattern, copy the same template across categories, or treat generated keyword phrases and trend spikes as validated commercial opportunities.

**Non-negotiable principle:** a product earns a place because it solves a real buyer task, has defensible evidence, is relevant to the target market, and can be presented with useful original comparison—not because the catalogue needs another row.

## 2. Verified baseline and known gaps

Source files inspected on 21 November 2026:
- `src/data/products.json`
- `src/data/keyword-clusters.json`
- `scripts/build-keyword-universe.mjs`
- `src/pages/robots.txt.js`
- `src/layouts/Layout.astro`
- `src/pages/guides/[slug].astro`
- `AI_SEARCH_VISIBILITY_PLAN.md`
- `US_GLOBAL_TREND_PREPAREDNESS_PLAN.md`

### Catalogue facts
- 25 guides / 100 products.
- 12 seed clusters currently exist in the keyword map.
- All 100 products have a source URL and source note; the current schema stores these as `source` and `sourceNote`.
- All 100 have UK and US model-name search identifiers. These produce Amazon search destinations, not verified direct ASIN listings.
- Product names are unique in the current 100-record catalogue.
- There are no approved product photographs in the product data. The existing editorial cover illustrations are not product photographs.
- Every guide has a buying checklist and publication status. All 25 have an SEO title, but only 4 have a separate SEO description.
- No guide has an `updatedAt` field. The current guide template uses `publishedAt` as the Article `dateModified` value and presents it as the update date. Do not silently advance this date or imply a review that did not occur.
- Existing product fields are intentionally lean: name, best-for, UK/US identifiers, pros, cons, verdict, source and source note. More robust evidence and status fields may be proposed, but must be schema-designed and validated before any bulk migration.

### Search and measurement facts
- UK remains primary; US is a distinct parallel market with separate product variants, terminology, search intent, and keyword evidence.
- Existing keyword generator creates combinations from seed topics, intent modifiers and audience modifiers. Its output is a **candidate phrase universe**, not measured demand, keyword difficulty, CPC, SERP opportunity, or permission to publish.
- Previously recorded 32,326 generated phrases are not 32,326 validated keywords. Re-run only when needed and record the exact generator input/version and output count.
- GSC, GA4, Bing Webmaster Tools and onsite Amazon outbound-click events have not been connected/verified in the assistant workflow. Actual organic clicks, conversions and revenue by guide are therefore unknown.
- OpenSEO is a paid-credit service. No paid keyword batch, AI visibility check, tracker or subscription is authorised by this plan.
- Existing AI Search Visibility Plan covers ChatGPT Search, Google AI Search/Gemini, Bing/Copilot, Perplexity and Claude. Do not duplicate that document; use this roadmap to connect it to the 1,000-product programme.

## 3. Define what counts as one product

A product record is one distinct, purchasable product identity—not one marketplace link, colour, keyword phrase, or duplicated regional entry.

### Count as a separate record only when
- The manufacturer model or generation is materially different; or
- A technical variant changes the buying decision (capacity, dimensions, performance class, connectivity, battery platform, supported standards, voltage/plug, safety rating, compatibility, or included hardware); or
- A bundle has a materially different, explicitly documented set of included items and a distinct buyer purpose.

### Do not count separately
- UK and US search links for the same exact product.
- A colour-only variation unless colour is a meaningful purchase attribute for that category and the variant has a distinct verified listing.
- Seller, delivery, price, packaging, or listing-title variations of the same model.
- Search phrase variants, accessories that are not independently relevant to the guide, or duplicate products under different guide names.
- A product whose exact model identity cannot be distinguished from a similar family member.

Maintain a canonical identity key based on manufacturer + exact model + generation/variant + material bundle distinction. Cross-market listing identifiers attach to the same record when the physical product is genuinely equivalent. Where regional differences are material, record the difference explicitly or use separate records with a documented reason.

## 4. Product discovery funnel: candidate universe → 1,000 qualified records

Use a funnel, not an import quota.

1. **Discover:** build a broad candidate pool from manufacturer catalogues, established category taxonomies, retailer category pages, official launch announcements, seasonal demand, and genuine user questions.
2. **Deduplicate:** normalize manufacturer/model/variant identifiers and compare against all existing 100 records before any intake.
3. **Classify buyer task:** identify the actual decision the shopper is trying to make and the product's role in that task.
4. **Check market fit:** assess UK first, then US independently. Confirm regional model, power, plug, radio bands, safety/certification, warranty, app/service availability and compatibility as relevant.
5. **Validate search intent:** inspect real SERPs and query patterns. Separate transactional, commercial investigation, informational, navigational, support/problem-solving and irrelevant intent.
6. **Verify product evidence:** use official manufacturer documentation for specifications and a current retailer destination for purchase availability/identity. A manufacturer page alone is not proof of Amazon stock.
7. **Evaluate affiliate suitability:** confirm the item is eligible and the destination is correctly labelled as a verified direct listing or an Amazon search query. Do not fabricate ASINs.
8. **Create a comparison role:** establish why the product belongs beside the other products—different best-for role, meaningful trade-off, price band only if verified, form factor, capacity, compatibility or ownership cost.
9. **Editorial differentiation:** write original decision criteria and explain who should not buy it. No generic praise-only cards.
10. **Quality gate:** only records passing all hard requirements become `verified-candidate`; publication requires the separate owner approval gate.

### Candidate states
- `discovered`: name or idea only; not eligible for catalogue.
- `deduplicated`: unique identity appears likely; evidence incomplete.
- `researching`: official sources and market/SERP checks underway.
- `verified-candidate`: all mandatory evidence fields complete; eligible for editorial review.
- `approved`: owner-approved for a defined guide/release.
- `published`: present in production.
- `recheck-required`: material listing, model, policy or specification change detected.
- `rejected`: duplicate, weak evidence, poor market fit, no useful buyer intent, or non-compliant.

Never count `discovered`, `deduplicated`, or `researching` records toward the 1,000 qualified-product target.

## 5. Hard acceptance gates (no score can override these)

Reject or hold a candidate if any mandatory gate fails:

1. Exact manufacturer and model/variant are identifiable.
2. At least one official primary source supports material technical claims.
3. Source URL is recorded and source note says exactly which claims it supports.
4. UK market identity/compatibility is understood before UK inclusion; US variant is separately checked before US inclusion.
5. A usable marketplace destination exists and its type is explicit: verified direct listing or search URL. Never label a search URL as a direct product link.
6. Product is relevant to a real buyer task and has a clear comparison role.
7. No unresolved safety, regulatory, compatibility or material warranty issue is hidden.
8. No unsupported current price, rating, review count, stock, discount, hands-on test or performance claim is present.
9. No duplicate or near-duplicate record exists.
10. Amazon Associates and image/copyright rules can be followed.

If Amazon stock is unavailable but the product is otherwise useful, retain it in research only or mark the destination as requiring recheck. Do not publish a dead or misleading purchase path.

## 6. Opportunity scoring after hard gates

Score only evidence-backed candidates. Unknown values remain unknown and receive no assumed points.

| Dimension | Weight | What counts |
|---|---:|---|
| Commercial intent / purchase proximity | 20 | SERP and query evidence shows comparison, shortlist, model selection or buying intent |
| Search demand evidence | 15 | GSC query data or documented keyword-tool metrics, with market, date and source |
| SERP opportunity | 15 | Realistic gap in current results, not merely low estimated difficulty |
| Product evidence and differentiation | 15 | Exact model, primary-source depth, meaningful differences and limitations |
| UK/US market suitability | 10 | Regional fit, listing path, compatibility and support |
| Buyer usefulness / comparison role | 10 | Helps decide between alternatives or avoid a poor fit |
| Trend / seasonality persistence | 5 | Durable or repeatable signal; one-off spikes are discounted |
| Affiliate and compliance readiness | 5 | Eligible destination, disclosures, image rights and policy fit |
| Editorial authority fit | 5 | Adds depth to a coherent topic area already served by SmartPickHub |

Suggested interpretation:
- 80–100: priority research/brief candidate, subject to all hard gates.
- 70–79: hold for stronger SERP or demand evidence.
- Below 70: do not allocate production effort yet.
- Any hard-gate failure: reject/hold regardless of score.

Do not use an unvalidated vendor KD score as a substitute for SERP analysis. Record CPC currency and data provider explicitly; omit CPC when the source does not specify currency.

## 7. Keyword and search-intent research system

The keyword unit is a **topic cluster + market + dominant intent + SERP opportunity**, not an isolated phrase.

For every shortlisted cluster, capture:
- Primary query and natural close variants.
- Country/market, language and spelling convention.
- Dominant SERP intent and secondary intent.
- Search volume, if available, with provider, date, location, language and grouping rules.
- Keyword difficulty, if available, with provider and date; treat as a heuristic.
- CPC only with explicit currency and source.
- SERP composition: retailer pages, manufacturer pages, editorial comparisons, forums, video, shopping modules, AI features and other result types.
- Search features and questions that reveal the buyer's unresolved task.
- Existing SmartPickHub URL that already serves the same intent.
- Decision: improve existing guide, add a genuinely distinct guide, add a product to an existing guide, or reject.

### Intent filters
- **High priority:** best/compare/vs/review/which model/for a specific use case/compatibility/size or capacity choice, where the result set supports a product decision.
- **Conditional:** price and deals (only if current-price infrastructure exists), seasonal queries (only with timing and shelf-life), problem-solving queries that naturally lead to a product decision.
- **Low or exclude:** definitions with no commercial adjacency, free downloads, jobs, manuals/support-only queries, unrelated news, celebrity/game queries without a defensible product need, and curiosity traffic with no suitable product.
- Do not force purchase intent onto a query where the SERP is informational or navigational.

### Anti-cannibalisation
Before proposing a URL, compare it with all 25 existing guide topics, slugs, titles and intent maps. If the buyer task is already covered, improve that guide instead of creating another page. A new page needs a distinct audience/task and a distinct SERP purpose—not just a synonym or another keyword modifier.

## 8. Product portfolio architecture

Do not pre-allocate 900 products evenly across categories. Use a balanced portfolio that follows verified opportunity and site expertise.

Maintain three lanes:
- **Core evergreen:** durable UK buyer categories with multiple meaningful decision factors and product depth.
- **Adjacent expansion:** categories that complement existing guides and share real buyer needs without cannibalising current pages.
- **Event/seasonal:** time-bound opportunities with clear half-life, dated evidence and a retirement/review date.

Portfolio guardrails:
- No single brand should dominate a category simply because it has many variants.
- Do not let one category absorb the majority of records unless independent demand and useful comparison depth justify it.
- Every guide must have enough distinct products to make a useful comparison; there is no fixed four-product or ten-product quota.
- Do not create one page per product. Product records can be grouped into a guide only when the guide answers one coherent buyer task.
- Avoid categories where evidence, compliance, product safety or retailer eligibility cannot be verified reliably.
- Keep UK as the launch priority; US additions require US-specific SERP and exact regional product checks, not copy/paste localisation.

### Suggested guide architecture (not a pre-approved publication list)
- Existing 25 guides: preserve, improve, and map every new product to them first.
- New guide candidates: only after keyword/SERP evidence demonstrates a distinct buyer task.
- Supporting content: comparison methodology, compatibility explainers and buyer checklists where they improve a product decision; do not publish thin support pages just to increase URL count.

## 9. Search engines and AI discovery

### Google Search / AI Overviews / AI Mode
- Keep production crawlable and indexable; preview remains blocked and noindex.
- Focus on helpful original buying decisions, reliable manufacturer evidence, clear limitations, internal discoverability, mobile experience, canonical URLs and structured data matching visible content.
- Google states that AI Overviews and AI Mode have no special additional technical requirements or special schema; a page must be indexed and eligible for a normal search snippet. No indexing or AI citation is guaranteed.
- Do not add `llms.txt`, fake FAQs, hidden text, artificial keyword blocks or prompt-targeted pages as ranking tricks.

### Bing / Copilot
- Verify Bing Webmaster Tools ownership and sitemap/indexing status.
- Use the AI Performance report when available to review cited pages, grounding queries, citation trends and supported intent/topic signals.
- Citations are not clicks, rankings or traffic. Treat the report as sampled/aggregated visibility evidence, not a conversion metric.

### DuckDuckGo, Yahoo and other conventional search surfaces
- Treat them as separate observation surfaces, but do not assume each has an independent index or independent traffic source. Record the result source/provider where known.
- Use a fixed, small SERP sample for priority commercial queries; avoid repeatedly checking the same query without a material change.
- Do not buy broad rank tracking or scrape search results at scale.

### ChatGPT Search, Gemini, Copilot, Perplexity and Claude
- Preserve the distinction between search/retrieval crawlers and model-training crawlers.
- Existing `AI_SEARCH_VISIBILITY_PLAN.md` documents current crawler tokens and owner-choice boundaries. Do not change training permissions or WAF settings in this programme.
- Ensure product identity, claims, comparison criteria and primary citations are clear in visible page content.
- Build a small fixed manual query set around actual buyer tasks, not a large prompt farm. Record date, market, exact prompt, citation presence, cited URL, competitor sources and intent. Repeat only at a planned measurement checkpoint.
- Never promise AI inclusion, fabricate third-party mentions, or generate pages designed only to answer prompt variations.

### Search visibility scorecard
Track separately:
- Google: indexed URLs, impressions, clicks, CTR, queries, country and page from GSC.
- Bing: indexed URLs, queries, clicks and AI Performance citations/grounding queries.
- Other engines: a small fixed SERP observation sample, labelled as manual observations.
- AI assistants: citation presence and cited URL from a fixed query set, not inferred from crawler permission.
- Site analytics: organic sessions, AI referrals, engaged sessions and outbound Amazon clicks, after GA4 ID and consent/privacy decision are supplied.
- Amazon Associates: marketplace clicks, ordered items and commissions, kept separate from onsite clicks.

## 10. Editorial specification for a qualified guide

Each guide must contain original decision help, not just a repeated card layout:
1. Clear buyer task and who the guide is for / not for.
2. Concise verdict or decision framework without fabricated rankings.
3. Meaningful comparison table using category-specific criteria.
4. Exact model names and important regional variants.
5. Product-by-product best-for, evidence-backed strengths, limitations and caveats.
6. Primary manufacturer/support citations close to material claims.
7. Compatibility, safety, warranty, consumable, subscription and total-ownership considerations where relevant.
8. A useful buyer checklist and transparent methodology.
9. Clear affiliate disclosure and accurate distinction between direct retailer links and search links.
10. A genuine editorial review date only after substantive review.

AI may assist research organisation and drafting, but source claims must be verified and the final guide must provide original synthesis. Do not claim hands-on experience unless real documented testing has occurred.

## 11. Data model requirements before large-scale intake

Before importing beyond the current 100, design and test a versioned schema that can support at least 1,000 records and later growth without manual duplication.

Recommended fields (proposal only; not implemented):
- Stable internal `productId`.
- Canonical identity key: manufacturer + model + generation + material variant.
- Manufacturer, exact model, model family and variant notes.
- Category and subcategory.
- UK and US market blocks with exact variant, retailer destination, destination type, verification status and last-checked timestamp.
- Primary source URL(s), source date and claim-to-source notes.
- Evidence status and candidate lifecycle state.
- Buyer role / best-for / not-for.
- Pros, cons, comparison attributes and category-specific structured specifications.
- Affiliate eligibility and disclosure metadata.
- Image URL, source page, licence, attribution and approval status; absent image remains valid.
- Last substantive editorial review date, distinct from initial publication date.
- Guide membership and rationale; a product may be reused only where the buyer task genuinely fits and duplicate presentation is avoided.
- Change history / recheck reason.

Schema acceptance must include unique-key tests, required-source tests, regional field validation, affiliate URL tests, duplicate detection, invalid-state rejection and safe importer dry-run/idempotency. Never perform a bulk import until these tests exist and the owner approves the release.

## 12. Scale safely: technical and operational design

The static Astro site can continue to serve a 1,000-record catalogue if the data and build process remain disciplined. The main risk is not the raw record count; it is unbounded content duplication, expensive build steps, slow image generation, and manual verification drift.

Before the catalogue grows materially:
- Profile build duration, memory, output size and image processing using one representative batch.
- Keep product data normalised and validate it before page generation.
- Generate only approved/public content; research-only records must never leak into production routes, RSS, sitemap or JSON-LD.
- Keep image generation separate from product image rights; generated editorial art is not a substitute for product photography.
- Add idempotent batch import with dry-run, diff report, duplicate detection and rollback-ready commits.
- Partition research by category/market and maintain a single source of truth.
- Avoid creating a static page for every product unless a distinct useful user task and architecture justify it.
- Use stable canonical URLs and avoid thin faceted/filter URLs entering the sitemap.
- Add build-time assertions that no research-only or rejected item appears in public output.

No framework migration, database migration, new paid infrastructure or major dependency upgrade is implied by this roadmap.

## 13. 1 December consolidated validation protocol

The owner explicitly wants one final, necessary validation cycle on 1 December rather than repeated full test runs for minor changes.

### Before 1 December
- Continue read-only research and prepare candidate evidence in non-production research files/branches.
- Batch compatible changes together.
- Do not open a PR for every small documentation update.
- Do not run the full Lighthouse/axe/build suite after each wording or research note change.
- Fix known issues by grouping them into one coherent release candidate.
- Do not publish new products/pages or change crawler, analytics, DNS, affiliate or production settings without the relevant approval.
- Keep a change ledger of files, exact commits, risk and required validation.

### On 1 December — one release-candidate cycle
Run one consolidated CI workflow against the final release-candidate PR head, containing the necessary checks once:
1. Schema, catalogue, duplicate and evidence validation.
2. Affiliate URL and marketplace destination validation.
3. Astro type/content checks and production build.
4. Public route, sitemap, canonical, robots production/preview separation, RSS and JSON-LD smoke checks.
5. Importer dry-run/idempotency test if importer or schema changed.
6. Accessibility and Lighthouse desktop/mobile on representative templates and all public routes where the current suite supports it.
7. Security/dependency audit and consolidated report.
8. Cloudflare PR preview deployment and manual spot-check of key routes.

If a genuine blocking failure occurs, fix the cause and rerun only the failed or directly affected test group where technically safe. Do not rerun the entire suite for an unrelated documentation edit.

After merge, verify the automatic production deployment status for the exact merge SHA. This is deployment confirmation, not a second full QA campaign. Do not submit unchanged URLs to IndexNow.

If no release candidate is ready, do not force a release merely to meet the date. Record what is complete and defer the release without disturbing production.

## 14. Phased route to 1,000 qualified products

The following are stage gates, not artificial deadlines or guaranteed production counts:

- **Phase A — Baseline and evidence model:** preserve 100; complete the product identity schema, market evidence rules, intent taxonomy, duplicate checks and source standards.
- **Phase B — First expansion cohort:** research a small, category-diverse cohort (for example, 50–100 candidates) to test evidence capture, product roles, UK/US variant handling, importer idempotency and guide usefulness. Do not publish the whole cohort automatically.
- **Phase C — Category batches:** expand in controlled batches only after the previous batch demonstrates low duplication, complete evidence and stable build performance. Each batch must be selected by opportunity, not by a fixed quota.
- **Phase D — Portfolio review:** evaluate category concentration, brand concentration, guide coverage, commercial intent, search visibility and affiliate destination quality before proceeding.
- **Phase E — 1,000 qualified records:** count only approved records that pass all hard gates. The target is reached when the catalogue has 1,000 distinct, evidence-qualified products—not when 1,000 rows have been generated.

## 15. Immediate work queue (no public release)

1. Close and record the completed radio/backup-power research PR #33; do not import candidates without exact-market retailer verification.
2. Review the draft `research/SEO_METADATA_GAP_REGISTER_20261121.md` against all 25 rendered guides; it proposes 21 unique descriptions but changes no public metadata.
3. Design a product evidence schema and deduplication key against the existing 100 records; do not migrate data yet.
4. Extend `research/UK_CATEGORY_OPPORTUNITY_SNAPSHOT_20261121.md` with category-specific SERP evidence and buyer-task rationale before product discovery.
5. Prepare the first candidate cohort with evidence records only; keep unverified candidates out of `products.json`.
6. After owner account access is available, connect GSC and Bing Webmaster Tools and provide only a GA4 Measurement ID plus consent/privacy decision—never passwords or 2FA codes.
7. Revisit crawler training preferences only as a separate owner decision; no change is made by this plan.

## 16. Approval and scope boundaries

This roadmap does not:
- add products or guides to production;
- alter current catalogue data, public copy, SEO metadata, sitemap, robots, DNS, WAF, analytics, affiliate IDs or Pinterest settings;
- claim that 1,000 products have been researched or verified;
- purchase paid SEO/AI visibility services, credits or subscriptions;
- assume that a trend implies purchase intent;
- create one page per keyword or one guide per fixed product count;
- imply hands-on testing, current stock, price, ratings or reviews without evidence.

The owner has authorised the research and development direction. Production catalogue additions and public publication remain subject to evidence, QA and the established approval controls.

## 17. Research references

- Google AI features and website eligibility: https://developers.google.com/search/docs/appearance/ai-features
- Google people-first content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google spam policies / scaled content abuse: https://developers.google.com/search/docs/essentials/spam-policies
- Bing Webmaster Tools AI Performance: https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c
- OpenAI crawler overview: https://developers.openai.com/api/docs/bots
- Anthropic crawler and site-owner controls: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawler documentation: https://docs.perplexity.ai/docs/resources/perplexity-crawlers

**Operating conclusion:** SmartPickHub scales by increasing the number of genuinely useful, evidence-backed buying decisions it can help shoppers make—not by multiplying templates, products, keywords or URLs.
