# SmartPickHub Product Image Policy

**Status:** Development policy; apply before adding any real product photograph.  
**Purpose:** Show accurate product imagery without assuming that a publicly accessible image is free to reuse.

**Launch decision (19 November 2026):** Product photography is optional and is not a publication blocker. If no exact-model image with documented commercial-use rights is available, keep the existing text-based product information card and show no substitute photo or empty placeholder. Do not delay a guide solely because a product image is unavailable.

## Allowed image-source paths

1. **Wikimedia Commons / other open repositories:** use only an individual file whose page clearly states a licence that permits commercial reuse and the intended modification/format conversion. Record the exact file page, licence version, creator and required attribution. Check for additional restrictions such as trademarks, privacy, publicity or depicted artwork.
2. **Manufacturer media libraries:** use only where the manufacturer terms, media-kit licence or written permission clearly allows use on a commercial editorial/affiliate website. A public product page or downloadable image is not, by itself, permission to republish.
3. **Direct permission:** retain the written permission and scope, including territories, duration, attribution and whether local hosting or resizing is permitted.
4. **Original illustrations:** may be used as category/editorial artwork, but must never be labelled or presented as a photograph of the exact product.

## Amazon Product Advertising Content restriction

Do not scrape Amazon product pages, extract image URLs through bots, or copy/cache Amazon Product Advertising Content as a substitute for an approved integration. Amazon's Associates IP licence places specific limits on obtaining and displaying its Program Content; it also restricts caching image content. Any future Amazon-supplied image integration must be checked against the current US and UK programme terms and the relevant API licence before implementation. Do not assume that an affiliate search link grants image rights.

Official policy references:
- Amazon US Associates policies: https://affiliate-program.amazon.com/help/operating/policies
- Amazon UK Associates tools and product-image link options: https://affiliate-program.amazon.co.uk/welcome/topic/tools
- Wikimedia Commons licensing: https://commons.wikimedia.org/wiki/Commons:Licensing

## Required metadata before a product photo can appear

Each approved `product.image` record must include:
- `url`: HTTPS URL for the image asset.
- `alt`: useful text identifying the exact model/variant shown.
- `sourcePage`: HTTPS source/file page proving provenance.
- `license`: exact licence name and version, or a clear permission basis.
- `attribution`: creator/rights-holder credit in the required form.
- `rightsBasis`: concise explanation of why commercial reuse is permitted.
- `reviewStatus`: `approved` only after a human verifies model identity and rights; otherwise keep it `pending`.
- `verifiedAt`: ISO date of the human verification.

Only `reviewStatus: approved` images may render. An image candidate or incomplete record must never appear on the public-facing preview as a verified product photograph.

## Quality checks

- Match the exact model and regional variant, not merely a similar product family.
- Do not use watermarked, low-resolution, misleading, unrelated or materially altered images.
- Preserve required attribution and licence links.
- Record the verification date and re-check if the source or licence changes.
- Prefer no photo over an image with unclear rights or uncertain product identity.
- Generated cover artwork is editorial illustration, not product photography.
