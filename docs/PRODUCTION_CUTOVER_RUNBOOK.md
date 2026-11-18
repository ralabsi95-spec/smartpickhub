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
