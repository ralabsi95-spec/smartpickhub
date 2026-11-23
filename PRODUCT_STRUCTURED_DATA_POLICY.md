# Product structured-data policy — SmartPickHub

**Status:** Owner-approved project standard, introduced 23 November 2026  
**Applies to:** All existing and future product records, buying guides, catalogue imports and page templates.

## 1. Default for editorial comparison guides

SmartPickHub buying guides are editorial comparisons, not retailer product-detail pages. Their marketplace buttons currently lead to Amazon search results for model phrases unless a separately verified direct ASIN destination is recorded. A product name, manufacturer source or Amazon search URL is not evidence of a live offer, current price, seller, stock, customer rating or review.

For this reason, comparison-guide JSON-LD must:
- Use `Article` for the guide and `BreadcrumbList` for navigation.
- Use exactly one `ItemList` node for the comparison list.
- Describe each listed item as `Thing` with its verified product name and an accurate short description.
- Connect `Article.mainEntity` to the single `ItemList` using its `@id`; do not embed and separately repeat the same ItemList node.
- Not emit `Product` rich-result entities merely to label editorial comparison entries.

This is the default even when a product record is added later. Adding a product to the catalogue does not automatically qualify the guide for Product snippets.

## 2. When Product structured data may be used

Use `Product` markup only on a page whose visible purpose and content genuinely describe an individual product, and only after the exact product/market variant and all emitted properties are supported by current, traceable evidence.

Before emitting Product markup, verify Google's current eligibility rules and the applicable required properties. Depending on the chosen rich-result path, this may require a genuine `offers`, `review` or `aggregateRating` property and further required fields. Never add placeholder values to silence a validator.

- `offers`: only a real, current, market-specific offer with a verified destination and the required price/currency/availability/seller details. Record source and checked time. Do not infer an offer from an Amazon search URL.
- `review`: only a genuine review actually visible on the page, with a real author and substantiated review content. SmartPickHub must not imply hands-on testing when none occurred.
- `aggregateRating`: only a legitimate aggregate rating from a permitted, identified source, accurately represented on the page and compliant with Google's review/rating policies. Never invent or estimate stars or review counts.

If evidence is missing, stale, ambiguous across UK/US variants, or not visible to readers, omit the property and keep the editorial `Thing` representation. Do not add fake offers, prices, ratings, review counts, availability or seller claims.

## 3. Regional and affiliate safeguards

- Treat UK and US variants/offers separately. Do not reuse UK prices, ratings, stock or identifiers for US products, or vice versa.
- An Amazon search URL is a search destination, not a direct product offer and not proof that the exact model is listed.
- Preserve the project's marketplace tracking IDs and existing affiliate disclosures; structured data must not alter affiliate URLs or CTA placement.
- Manufacturer specifications can support product identity and technical descriptions, but do not establish retailer offers, customer reviews or aggregate ratings.

## 4. Required QA for every new product and guide

- Validate JSON-LD syntax and ensure it matches visible page content.
- Ensure one ItemList node per editorial comparison guide; Article.mainEntity references that node by `@id`.
- Ensure comparison entries are descriptive `Thing` items, not Product rich-result entities.
- Ensure no duplicate ItemList/Product entities are emitted by both nested and graph-level markup.
- Run repository catalogue validation and generated-page smoke tests for all guide routes.
- For any future individual Product page, separately run Google's Rich Results Test and URL Inspection live test; resolve all critical issues before requesting indexing or claiming rich-result eligibility.
- Preserve the existing catalogue and content unless a separate owner-approved change explicitly authorizes edits.

## 5. Reference and change control

This policy is the authoritative reference for future product intake and structured data. Read it before adding products, creating product-detail pages, changing the guide JSON-LD template or modifying catalogue validation. Any exception requires evidence, a documented reason and owner review.

Official guidance: https://developers.google.com/search/docs/appearance/structured-data/product
