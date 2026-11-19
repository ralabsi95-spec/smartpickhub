# SmartPickHub — Future Product Intake & Catalogue Growth

**Status:** Design specification aligned to the existing importer; no catalogue mutation or product import is performed by this document.  
**Recorded:** 19 November 2026  
**Production catalogue:** 25 guides / 100 products. Existing entries must not be re-imported.

## 1. Existing implementation — verified

The repository already contains a safe first-stage importer:

- Command: `npm run import:dry-run -- --input ./products.csv`
- Accepted formats: CSV and JSON.
- Required fields: `brand`, `model`, `market`, `source_url`.
- Supported markets: `uk`, `us`.
- Source URL must be valid HTTPS.
- Optional ASIN candidate is syntax-checked but explicitly treated as unverified.
- Stable candidate identifier is derived from normalized market, brand, model and variant.
- The importer compares normalized names against the current 100-product catalogue and detects duplicate identities within the same batch.
- It writes JSON and CSV reports under `test-reports/`.
- It explicitly reports `catalogueMutated: false` and `publicationTriggered: false`.
- Unit/self-test and isolated end-to-end tests exist. The E2E test verifies the catalogue file hash is unchanged.

The existing importer is a **candidate intake / dry-run tool**, not a completed production product-addition workflow. It does not append products to a guide, verify live retailer listings, create approved ASIN links, generate editorial content, publish pages, or submit indexing requests.

## 2. Recommended future workflow

### Stage A — candidate submission
Accept product candidates through a controlled CSV/JSON upload or a future admin interface. Keep the initial source schema and add optional fields only when validated:

- brand, exact model, variant, market (UK/US)
- manufacturer product page and source type
- manufacturer part number / SKU
- GTIN/EAN/UPC when available
- product category and intended guide
- candidate retailer URL and marketplace
- submitted notes and evidence date

Do not require an ASIN. Never invent one.

### Stage B — duplicate and identity resolution
- Normalize brand/model/variant/market.
- Compare exact model + region + manufacturer part number/GTIN when available.
- Detect same model already in the catalogue, duplicates within the incoming batch, regional variants, and successor/replacement models.
- Return one of: new candidate, likely existing product, regional variant of existing product, duplicate in batch, insufficient identity evidence.
- Never overwrite or re-import an existing catalogue record automatically.

### Stage C — evidence verification
A human reviewer confirms:
- exact product model and official manufacturer source;
- UK/US regional variant, plug/voltage/frequency, radio bands, battery platform and compatibility where material;
- manufacturer specifications and limitations;
- whether product is still current and suitable for the guide;
- retailer/Amazon destination matches the exact variant;
- image source, exact model identity, licence/permission and attribution if an image is proposed.

Prices, ratings, stock, review counts and seller claims remain excluded unless a future compliant data source and refresh policy are explicitly implemented. Search phrase links must remain clearly distinguished from verified direct ASIN product links.

### Stage D — editorial mapping
- Assign the candidate to an existing guide only after relevance review.
- If no guide fits, propose a new guide brief rather than forcing the product into an unrelated page.
- Preserve four products per guide as the current editorial pattern unless the owner approves a different comparison structure.
- Draft the product summary, best-for statement, evidence-based pros/cons and caveats.
- Avoid unsupported awards, rankings and hands-on testing claims.

### Stage E — approval and integration
- Generate a change report showing exactly which guide/product fields will change.
- Require explicit owner/editor approval of the proposed diff.
- Integrate via a dedicated branch and PR, never by direct write to `main`.
- Keep the candidate intake store separate from `src/data/products.json` until review is complete.
- CI must validate schema, uniqueness, sources, affiliate tracking tags, region-specific safety notes, image provenance and RSS eligibility.
- Do not let candidate submission change `publicationStatus` or `editorialStatus`.

### Stage F — release, distribution and discovery
After the PR passes CI and the owner authorizes merge/deployment:
1. Deploy the changed guide.
2. Verify its canonical URL, rendered page, affiliate links and sitemap inclusion.
3. Verify the matching Pinterest RSS feed includes the guide only after it is approved and published.
4. Verify Pinterest auto-publishing on the matching board.
5. Notify the changed canonical URL through the guarded IndexNow workflow.
6. Confirm Google Search Console sitemap/URL inspection separately.
7. Monitor Bing Webmaster Tools, search traffic, AI crawler access and referral analytics separately.

## 3. Scale and idempotency requirements

Before the catalogue grows into hundreds/thousands of products:
- Use a durable candidate database with unique constraints on normalized product identity and source IDs.
- Store source provenance, reviewer, approval timestamp, evidence version and change history.
- Make imports idempotent: rerunning the same batch must not create duplicates or overwrite reviewed records.
- Use batch IDs and row-level result states; support retry of failed rows without replaying successful rows.
- Keep audit logs and immutable approval events.
- Use pagination and bounded processing; do not load a million-record catalogue into a single synchronous request.
- Separate candidate intake, editorial approval, catalogue release, feed generation and search notification into distinct stages.
- Add queue/retry/receipt storage for changed URLs before scaling IndexNow beyond the current small sitemap.
- Measure build time, memory, feed generation time, sitemap size and CI duration at increasing catalogue sizes.

## 4. Security and operational safeguards

- Restrict intake to authenticated, authorized users; validate file size, extension, MIME/content and row count.
- Sanitize strings before display; never execute uploaded content.
- Treat uploaded URLs as untrusted; only accept HTTPS manufacturer/retailer domains after allowlist or reviewer checks, and prevent server-side request forgery if future services fetch URLs.
- Keep secrets in GitHub/Cloudflare secrets; never include tokens in CSV, logs or reports.
- Use backups and a tested rollback before production catalogue mutation.
- Do not auto-publish AI-generated product content.
- Keep a preview/diff stage before any production update.

## 5. Current status and next implementation milestone

| Capability | Status |
|---|---|
| CSV/JSON candidate parsing | Implemented |
| Required field / HTTPS validation | Implemented |
| Duplicate and existing-name screening | Implemented basic normalized-name check |
| ASIN candidate syntax warning | Implemented; manual verification remains |
| Dry-run JSON/CSV reports | Implemented |
| No catalogue mutation in dry-run | Implemented and tested |
| Authenticated submission UI | Planned |
| Durable candidate database | Planned |
| Strong model/SKU/GTIN identity resolution | Planned |
| Manufacturer/retailer evidence review workflow | Planned |
| Human-approved catalogue PR generation | Planned |
| Automated changed-route indexing queue and receipts | Planned |
| Pinterest RSS-to-board auto-publishing verification | Pending authenticated Pinterest session |

**Next engineering milestone:** improve the intake report and duplicate identity model in an isolated branch, while preserving the existing dry-run behavior. Do not connect it to production catalogue writes until a separate approval gate, audit trail and rollback strategy are tested.
