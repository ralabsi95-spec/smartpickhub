# SmartPickHub Production Cutover & Rollback Runbook

**Status:** Prepared; not executed.  
**Last reviewed:** 2026-11-18  
**Target repository branch:** `automation/bootstrap`

## 1. Current verified position

- The Astro preview is served from Cloudflare Pages project `smartpickhub-preview`, connected to GitHub branch `automation/bootstrap`.
- Preview URL: https://smartpickhub-preview.pages.dev/
- Preview build settings previously observed: `npm run build`, output `dist`, Node `22.23.4`.
- Preview must remain `noindex,nofollow`; its `robots.txt` must continue to disallow crawling.
- The separate Cloudflare Pages project `smartpickhub` (intended production) was observed with Git integration disconnected and incomplete build configuration. Its `pages.dev` URL previously returned 404.
- CI is not a production deployment workflow. A successful CI run does not prove a production release.
- The preview currently contains research drafts, not approved buying guides. Product photo approval and retailer-listing verification are also incomplete.

## 2. Mandatory release gates

Do not connect, deploy, publish, or enable indexing until all gates below are explicitly reviewed:

1. **Release candidate:** Identify the exact commit SHA on `automation/bootstrap`; confirm it is the intended release candidate.
2. **Content approval:** Every page intended for public indexing has documented human editorial approval. Research drafts remain unpublished/noindex.
3. **Affiliate integrity:** Verify every outbound link is appropriate for the UK audience and uses the approved Amazon UK tracking ID `smartpickhubu-21` where applicable. Do not treat search links as verified product listings, and do not publish invented ASINs, prices, ratings, stock, or commission claims.
4. **Images and rights:** Publish only assets with documented permitted usage and attribution/rights evidence. Guide-cover artwork is not product photography.
5. **SEO and disclosure:** Confirm canonical URLs, sitemap, robots policy, affiliate disclosure, and required legal/editorial pages for the production domain.
6. **Security:** Resolve or formally accept the outstanding dependency advisory; review deployment-token scope and store credentials only as protected Cloudflare/GitHub secrets.
7. **Operational readiness:** Confirm a recoverable previous production deployment or a separately retained known-good artifact, plus access to Cloudflare rollback controls.
8. **Human acceptance:** Review key pages on desktop and mobile, navigation, outbound links, accessibility findings, and analytics/conversion measurement.
9. **Explicit authorization:** Obtain the site owner's approval for the exact production project, commit SHA, domain, indexing state, and deployment window.

## 3. Safe production configuration plan (not yet applied)

Once authorized:

1. In Cloudflare Pages, confirm the intended production project is the separate `smartpickhub` project, not the preview project or the similarly named Worker.
2. Connect the repository `ralabsi95-spec/smartpickhub` to that production Pages project.
3. Select production branch only after the owner confirms the release branch. Do not assume `main` is current; it was previously observed as a stale bootstrap branch.
4. Configure the build using the verified preview settings only if the release candidate still uses the same build system: Node `22.23.4`, build command `npm run build`, output directory `dist`, repository root.
5. Keep preview and production environments separate. Do not copy preview's noindex settings blindly to production, and do not remove preview's noindex protection.
6. Review environment variables and secrets individually. Never expose token values in source control or logs.
7. Deploy first to a non-indexed production candidate or controlled preview. Verify the exact commit and output before changing public routing or indexing.
8. Enable production indexing only after content and SEO gates pass.

## 4. Rollback plan

If a release causes errors:

1. Stop further deployments and preserve the failing deployment URL, commit SHA, timestamp, and logs.
2. Use Cloudflare Pages deployment history to promote the last known-good production deployment, if available.
3. If no known-good production deployment exists, do not improvise by pointing production to an unverified branch. Restore from the previously retained artifact/source commit after review.
4. Re-check homepage, representative guide routes, assets, redirects, affiliate disclosure, robots, and sitemap.
5. Keep preview isolated and noindex throughout.
6. Record the incident, rollback target SHA, observed impact, and corrective action in the project log.

## 5. Current blockers / next actions

| Item | State | Next action |
|---|---|---|
| Preview project | Latest deployment verified successful at commit `f9fde7a` | Keep isolated and noindex |
| Production Pages Git connection | Not configured at last inspection | Await explicit production authorization |
| Release branch / SHA | Not approved for production | Select exact candidate after content/security gates |
| Editorial approvals | 0 approved guides in last audit | Review and approve content before indexing |
| Product images | No approved product images in last audit | Gather rights evidence or use compliant alternatives |
| Affiliate listings | Search URLs, not verified exact listings | Verify retailer destination and UK relevance |
| Security advisory | Outstanding review | Map affected dependency paths and choose minimal safe remediation |
| Analytics | Not verified | Define privacy-conscious measurement before launch |

## 6. Change log

- 2026-11-18: Runbook created as documentation only. No Cloudflare settings, DNS, repository application code, content, products, deployment, or indexing settings were changed.


## 7. Dependency advisory assessment (2026-11-18)

A read-only inspection of the current `automation/bootstrap` `package-lock.json` found two installed picomatch copies:

- `picomatch@4.0.7` at `node_modules/picomatch`, reached directly through the dependency ranges of `@astrojs/internal-helpers@0.13.2`, `astro@7.4.12`, `tinyglobby@0.2.17`, and `vite@8.3.8`.
- `picomatch@2.3.2` at `node_modules/anymatch/node_modules/picomatch`, required by `anymatch@3.1.3`.

The GitHub advisory GHSA-fc5q-39xc-vjpf / CVE-2026-112366 describes a high-severity ReDoS in picomatch through 4.0.7. The advisory was updated on 2026-11-17; available public advisory records currently do not state a patched version. The issue is therefore not safely remediated by simply changing the lockfile to another currently published picomatch release.

**Decision:** Do not apply an npm override, force a package version, or run a broad dependency update at this stage. Such a change could violate upstream dependency expectations and would not establish a fixed version. Keep the finding open, restrict exposure of any feature that evaluates attacker-controlled glob patterns, and re-check the upstream advisory/maintainer fix before choosing a compatible remediation. The dependency tree inspection did not install packages, modify `package.json`, modify `package-lock.json`, or run tests.

Sources:
- GitHub Advisory: https://github.com/advisories/GHSA-fc5q-39xc-vjpf
- Upstream picomatch issue: https://github.com/micromatch/picomatch/issues/247
- NVD: https://nvd.nist.gov/vuln/detail/CVE-2026-112366


## 8. Cloudflare dashboard re-check (2026-11-18 08:24 UTC)

Read-only inspection of the currently open Cloudflare Workers & Pages account dashboard confirms three separate resources:

1. **Pages preview project `smartpickhub-preview`** — listed with the `smartpickhub-preview.pages.dev` hostname and GitHub repository `ralabsi95-spec/smartpickhub`. The dashboard showed a recent deployment description: "Replace generic family sources with exact model pages for NAS, Oral-B and Roborock" (listed as about 1 hour old at inspection). This was an overview-list observation; it did not expose the source SHA.
2. **Pages production project `smartpickhub`** — listed separately with `smartpickhub.pages.dev` and the status "No Git connection". This remains the intended production Pages project with no verified source connection.
3. **Workers service `smartpickhub`** — a different resource from the Pages project, shown with "Latest build failed" and "No active routes". Do not confuse this Worker with the Pages production project; no action is needed on it for the Pages cutover unless a separate architecture decision is made.

No Cloudflare setting, repository integration, DNS record, deployment, route, or indexing policy was changed during this inspection. This observation supersedes earlier assumptions that the Worker and Pages project are one resource; they are distinct dashboard entries.

## 9. Branch-head and preview-deployment correlation (2026-11-18 08:32 UTC)

- GitHub branch head before the new documentation update was `9dda898ff24b9c4c1b28c45f6fb6e806e5061e1e` (`docs: record latest Cloudflare resource state`).
- A follow-up documentation commit was created: `f9fde7afed583871c1dc0285ff7cb5dd44097f06` (`docs: correlate preview deployment with branch head`). It only updates this runbook.
- **Cloudflare deployment detail has now been opened and verified:** project `smartpickhub-preview`, branch `automation/bootstrap`, status `success`, deployment ID `435d8370-2d9b-4846-a385-9f99e48c9f5f`, source commit `f9fde7a`, timestamp `2026-11-18T08:29:52.704354Z`.
- The deployment's short SHA `f9fde7a` matches the full GitHub commit `f9fde7afed583871c1dc0285ff7cb5dd44097f06`. Therefore the latest preview deployment includes the runbook-only documentation update; it is not evidence of a new application-code or guide-content change.
- The earlier Cloudflare overview label about NAS, Oral-B and Roborock was not sufficient to identify the deployed SHA. The individual deployment detail resolves the current deployed version.
- No new deployment was triggered. No Cloudflare settings, Git connections, domains, DNS, environment variables, secrets, routing, or indexing policies were changed. A transient delete-confirmation dialog was dismissed without confirming any deletion.
- **Next safe action:** Review the existing preview's content/data readiness (especially exact retailer product destinations, image rights and editorial approval) before proposing a release candidate. Production remains blocked pending those gates and explicit owner approval.


## 10. Preview content and affiliate-readiness spot check (2026-11-18 08:33 UTC)

Read-only fetch of the live preview homepage, guides index, two representative guides (Wi-Fi 7 routers and home-office ergonomics), and affiliate disclosure returned successfully.

- Homepage, guides index, both sample guides, and disclosure all expose `noindex, nofollow` in page metadata. Preview indexing protection is intact.
- The guides index lists 25 guides; each displayed entry is explicitly labelled "Research draft — requires human review before publication". No guide should be treated as approved or production-ready.
- The two sampled guide pages include clear statements that the comparisons are research-based and not hands-on test rankings. The disclosure explains US and UK Amazon programmes and commission relationships.
- In both sampled guides, Amazon destinations are marketplace search URLs (not verified direct product listings). The pages explicitly warn readers to verify exact model, seller, regional variant and terms. This is transparent, but exact product-level destination verification remains a release gate; do not present these search URLs as confirmed listings.
- The sampled UK links use the configured UK tracking ID `smartpickhubu-21`. US links use `smartpickh0bc-20`. This spot check is not a complete audit of all 25 guides or every outbound link.
- The guide cover images are hosted locally under `/images/webp/` and social preview artwork under `/images/pinterest/`; this fetch alone does not establish source licensing/rights or prove these are retailer product photos.
- No content, link, image, source file, Cloudflare setting, deployment, or production page was changed.

**Decision / next action:** keep all 25 guides as drafts. Prioritize a full product-link and model/region verification for a single UK-first guide, then obtain human editorial approval before any indexing or production cutover. Do not bulk-approve or convert search links to guessed ASIN URLs.


## 11. UK-first pilot guide selection and source verification (2026-11-18)

A read-only catalogue comparison was performed against `src/data/products.json` to select one pilot guide. The air-fryer candidate was not selected: live source checks found the Philips URL redirecting to a generic kitchen page, the Instant UK URL returning 404, and the COSORI UK page currently showing the product as sold out. These findings make that guide a weaker first pilot.

**Selected pilot candidate (not approved for publication):** `espresso-coffee-machines-us-uk`.

Why this is the strongest current candidate:
- Four products have explicit UK identifiers in the catalogue.
- All four supplied Sage UK source URLs were fetched successfully on 2026-11-18 and returned model-specific UK product pages:
  - Bambino Plus: https://www.sageappliances.com/en-gb/product/bes500 — page title identifies Bambino Plus; UK description identifies SES500.
  - Barista Express: https://www.sageappliances.com/en-gb/product/bes870 — page title identifies Barista Express; UK description identifies SES870.
  - Barista Pro: https://www.sageappliances.com/en-gb/product/bes878 — page title identifies Barista Pro; UK description identifies SES878.
  - Oracle Jet: https://www.sageappliances.com/en-gb/product/BES985 — page title identifies Oracle Jet; UK description identifies SES985.
- The source pages expose useful model-specific facts and accessories. The guide already distinguishes US Breville BES identifiers from UK Sage SES identifiers and warns about regional electrical packages.

### Pilot readiness matrix

| Gate | Observed result | Status |
|---|---|---|
| Product identity | Four named model families; UK Sage pages resolve to SES500, SES870, SES878 and SES985 families | Partially verified; exact colour/package suffix still needs per-product review |
| UK market relevance | All four primary sources are Sage GB pages and identify UK model families | Verified at family/page level |
| UK electrical variant | Catalogue notes state 220–240V; source pages fetched here do not expose a complete electrical-rating line for every model | Re-check each model manual/rating plate before final copy |
| Manufacturer evidence | 4/4 supplied Sage UK product pages fetched successfully; page content includes features, dimensions/accessories and product identity | Verified source reachability and page identity; claim-by-claim audit still required |
| Amazon UK destination | Current `buildAffiliateUrl('uk', identifier)` creates an Amazon.co.uk search URL for these descriptive identifiers, not a direct ASIN listing | Search destination only; no exact listing verified |
| Tracking tag | Affiliate helper maps UK to `smartpickhubu-21` | Verified in source code |
| Product image | No product image records are present for these catalogue products; rendered page therefore shows the pending-image placeholder | No approved product photos |
| Image rights | Manufacturer page Open Graph images are visible, but no licence/permission evidence was reviewed or recorded | Unknown; do not copy or hotlink as approved assets |
| Editorial approval | Guide remains `Research draft — requires human review before publication` | Not approved |
| Prices / availability / ratings | Live manufacturer pages may display changing commercial data; the catalogue does not currently rely on those as approved claims | Do not copy into guide without a separate permitted, dated verification process |

**Decision:** use the espresso guide as the first controlled verification pilot, not as a publish-ready page. Next, perform a claim-by-claim comparison of the four guide records against the exact UK manuals/specification pages, confirm the model suffix/voltage and warranty/package differences, and separately verify Amazon UK listings if direct product links are desired. Keep the current search links labelled as search links unless verified direct listings are recorded. Image permission remains a separate human gate.

No product data, guide copy, affiliate URLs, image assets, publication status, application code, Cloudflare configuration, deployment, DNS, indexing or production resource was changed during this audit.


## 12. Pilot electrical-variant evidence follow-up (2026-11-18)

A follow-up search of Sage's official asset domain found UK instruction-booklet PDFs for all four selected model families. The indexed manual excerpts identify the following rating information:

| UK model family | Official UK manual | Rating shown in indexed manual |
|---|---|---|
| SES500 (Bambino Plus) | https://assets.sageappliances.com/BES500/SES500_UK_UG2_A25_LR.pdf | 220–240V, 50–60Hz, 1300–1600W |
| SES870 (Barista Express) | https://assets.sageappliances.com/BES870/SES870_UK_SG2_A24_LR.pdf | 220–240V, 50–60Hz, 1560–1850W |
| SES878 (Barista Pro) | https://assets.sageappliances.com/BES878/SES878_UK_UG2_A25_LR.pdf | 220–240V, 50–60Hz, 1380–1650W |
| SES985 (Oracle Jet) | https://assets.sageappliances.com/BES985/SES985_UK_UG2_E26.pdf | 220–240V, 50–60Hz, 1400–1600W |

This strengthens the UK regional/electrical evidence from partial to **official-manual corroborated at model-family level**. The manuals are hosted on Sage's official asset domain and the SES model identifiers appear in their filenames/snippets. Before final editorial approval, inspect the complete PDF for each exact model/colour package and retain the model-to-manual mapping with the guide's claim evidence. Do not generalize these UK ratings to US Breville variants.

The earlier matrix entry stating that a complete rating line had not yet been exposed by the product pages is superseded by this manual search. Product pages and manuals were inspected read-only; no guide content or product record was changed.


## 13. Espresso pilot claim and Amazon UK listing audit (2026-11-18)

Read-only claim-level review was performed against Sage GB product pages, four official UK manuals, and candidate Amazon UK product pages. This is evidence collection only; no product record, affiliate destination, guide copy, image, publication state or deployment was changed.

### Manufacturer-claim evidence and editorial corrections

| Catalogue product | Claims supported by Sage UK evidence | Editorial correction / improvement needed |
|---|---|---|
| Bambino Plus (SES500 family) | 54mm portafilter; 1.9L removable tank; automatic milk texturing; 3 milk-temperature and 3 foam settings; dual/single-wall baskets; UK manual rating 220–240V, 50–60Hz, 1300–1600W | Existing copy is generic. Add separate-grinder requirement clearly (no integrated grinder is listed in components), tank/portafilter and automatic milk workflow. Avoid saying "fast" or quoting heat-up seconds unless tied to a source and exact model version. |
| Barista Express (SES870 family) | Integrated conical burr grinder with 16 grind settings; 54mm portafilter; 18g dose reference; manual milk microfoam; PID temperature control at 93°C; UK manual rating 220–240V, 50–60Hz, 1560–1850W | Replace generic "manual workflow" wording with concrete grinder, settings and manual steaming. Clarify integrated grinder reduces the need for a separate grinder but does not remove dial-in/cleaning work. |
| Barista Pro (SES878 family) | Integrated conical burr grinder with 30 settings; ThermoJet heating system; Sage GB states 3-second heat-up; manual milk microfoam; digital interface and volumetric shot control; UK manual rating 220–240V, 50–60Hz, 1380–1650W | Current "faster, guided workflow" is vague. Use 30 settings, ThermoJet and digital interface; distinguish manual milk texturing from Oracle Jet automatic milk texturing. Keep any comparative energy-efficiency claim out unless its benchmark basis/date is included. |
| Oracle Jet (SES985 family) | Automatic grind, dose and tamp; 58mm portafilter and 22g dose; 45 grind settings; Auto MilQ hands-free milk texturing with dairy/soy/almond/oat settings; Barista Guidance; touchscreen; UK manual rating 220–240V, 50–60Hz, 1400–1600W | Current copy says only "more automated premium workflow", missing the defining features. Add the automation and 58mm/22g facts. Do not call it a dual-boiler machine: the Sage GB source page and current manual evidence reviewed here do not support that description. |

All four official UK manuals were successfully fetched and expose model-family identity and rating information. Manufacturer source pages were also fetched. These sources substantiate the factual claims above; editorial suitability/comfort claims remain analysis, not manufacturer guarantees or hands-on testing.

### Amazon UK destination verification

Candidate product pages were inspected, but **none is approved yet for insertion as a direct affiliate URL**:

| Product | Candidate ASIN/page | Exact identity evidence | Current finding |
|---|---|---|---|
| Bambino Plus | B07GB2JVD7 — https://www.amazon.co.uk/dp/B07GB2JVD7 | Amazon product details show model/part number SES500BSS4GUK1 and Sage Bambino Plus | Candidate matches UK model family; listing fetch displayed no image and a delivery-location restriction in the current session. Confirm live UK delivery/offer and exact colour/package before use. |
| Barista Express | B0FQNYG8CV — https://www.amazon.co.uk/dp/B0FQNYG8CV | Amazon product details show SES870BSS4GUK1; title and features identify Sage Barista Express, integrated 16-setting grinder and manual steam wand | Strong candidate identity match; current page showed no featured offer and a delivery-location restriction in this session. Re-check active new offer and seller before use. |
| Barista Pro | B07PY42BRC — https://www.amazon.co.uk/dp/B07PY42BRC | Page title/manufacturer content identify Sage Barista Pro SES878 | Page showed currently unavailable / no featured offers; do not use as a live buy destination until availability and exact colour/package are re-verified. |
| Oracle Jet | B0GS2K6WQC — https://www.amazon.co.uk/dp/B0GS2K6WQC | Amazon details identify SES985BSS4GUK1 | This is explicitly an Amazon Renewed listing and currently unavailable; exclude it as the standard new-product destination. Search results also surfaced other Oracle Jet references, but none has been validated as a currently buyable new UK listing. |

Amazon search results can surface accessories, replacement parts, older variants, bundles or renewed stock even when the search phrase is exact. Therefore no ASIN has been added to `products.json`. The affiliate helper correctly treats non-10-character model phrases as search terms and only constructs `/dp/{ASIN}` for a 10-character alphanumeric identifier. UK tracking tag in helper remains `smartpickhubu-21`.

### Pilot decision after this pass

- Manufacturer specification evidence: strong enough to prepare an improved factual draft after editorial review.
- Direct Amazon product links: not yet complete for all four products; do not convert all links at this stage.
- Current safe approach: retain the existing labelled Amazon UK search links until a new, exact, currently buyable UK listing is verified for each model; then consider direct ASIN insertion with the correct tracking tag.
- Product photography: still not approved. Sage Open Graph images were observed on product pages, but no reuse licence/permission was established. Do not copy these images into the site based solely on their public availability.
- The guide remains research draft / not approved for publication. Preview remains noindex.

No application source, product JSON, affiliate helper, images, Cloudflare settings, production resource, DNS, indexing state or live deployment was modified.


## 14. Existing product-image workflow review (2026-11-18)

Inspected the existing image-related scripts without running imports or modifying assets:

- `scripts/audit-product-images.mjs` checks image URL, source page, alt text, licence, attribution, rights basis, review status and verification date. It only considers an image render-approved when metadata is complete and `reviewStatus: "approved"`; it explicitly warns that metadata completeness is not legal clearance.
- `scripts/research-commons-images.mjs` queries Wikimedia Commons, records source/author/licence metadata and classifies CC0/public-domain as commercial-reuse candidates, CC BY as attribution/manual-review candidates, and CC BY-SA as share-alike/manual-review candidates. It marks every result candidate-only and requires exact model and rights review; it does not auto-publish.
- The guide renderer displays product photography only when `image.reviewStatus === "approved"` and an image URL exists. Otherwise it shows the transparent "Product photo under verification" placeholder. This is the correct fail-closed behaviour.
- Sage product-page Open Graph images were observed during this audit, but public visibility is not a licence. No evidence of permission for commercial reuse was established, so those images must not be copied into the site as approved product photographs.
- A Wikimedia Commons search hit is not automatically a photograph of the exact model or a legally cleared commercial asset. Each candidate must be checked on its original file page for exact model/variant, licence terms, attribution, share-alike obligations, and non-copyright restrictions. No candidate was imported or approved during this session.

**Image decision for the espresso pilot:** keep all four product-image slots in pending/placeholder state until an exact-model image with documented commercial-use rights is found. If no suitable lawful image exists, use an original editorial illustration that is clearly labelled as an illustration rather than presenting it as a product photograph.

No image search script was run, no image file was downloaded, no product image metadata was changed, and no assets were published.


## 15. UK espresso pilot editorial draft (2026-11-18)

A separate editorial working draft has been created at `docs/EDITORIAL_DRAFT_ESPRESSO_UK.md`.

- **Status:** Draft only; not approved for publication.
- **Scope:** UK-first comparison of Sage Bambino Plus SES500, Barista Express SES870, Barista Pro SES878 and Oracle Jet SES985.
- **Evidence:** The draft links the four Sage GB product pages and four official UK manuals. It records the documented workflow/features and model-family UK electrical ratings, and distinguishes factual manufacturer claims from editorial interpretation.
- **Editorial safeguards:** It explicitly states that the guide is research-led and not hands-on testing. It contains no live prices, ratings, stock claims or performance ranking.
- **Affiliate status:** No candidate ASIN was approved or inserted. Existing catalogue search links remain the safe fallback until exact new UK listings, active offers and sellers are re-verified.
- **Image status:** No product images were approved or copied. The current pending-image placeholder remains the required behaviour until commercial-use rights are documented.
- **Review still required:** Human claim review against full manuals and exact suffixes; confirm accessories, dimensions, warranty and retailer listing details; desktop/mobile review; explicit editorial approval.
- **Change boundary:** Only documentation files were added/updated. `src/data/products.json`, guide rendering, application source, images, affiliate helper, Cloudflare settings, DNS, production resources and indexing were not changed. No deployment was triggered.

**Next action:** obtain the owner's editorial review of the draft. Only after explicit approval may a separate change be proposed to transfer approved copy into the guide catalogue. Direct ASIN links and product images remain separate verification/rights gates.
