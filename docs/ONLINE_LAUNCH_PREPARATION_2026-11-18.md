# SmartPickHub — Online launch preparation checkpoint

**Date:** 18 November 2026 (13:52–14:00 UTC)  
**Branch:** `automation/bootstrap`  
**Branch head reviewed:** `8006886a05e9a0712f8e095baca782ac3beea16b`  
**Latest CI on that head:** Run #638 / ID `44316574197` — completed successfully; all 19 substantive workflow steps passed.  
**Artifact:** `smartpickhub-quality-reports`, ID `14433885499`  
**PR:** #1 remains Draft, open, unmerged.

## Executive decision

**Online launch preparation has started; public cutover is not approved and must not be executed yet.**

The Astro static site is functioning in the isolated Cloudflare Pages Preview. The existing public InfinityFree site is still a separate WordPress site. The intended Cloudflare Pages production project `smartpickhub` is separate from `smartpickhub-preview` and was last observed without a Git connection and without completed build configuration. The similarly named Cloudflare Worker is a third, unrelated resource.

Do not replace the existing public site, connect the production Pages project, merge PR #1, change DNS, publish guides, or enable indexing without a separate explicit owner approval.

## 1. Current environment map

| Environment/resource | Verified state | Decision |
|---|---|---|
| Existing public site | `https://smartpickhub.infinityfree.me/` resolves to the legacy WordPress 7.0.2 site and its existing buying-guide content | Preserve it during preparation; no edits or migration performed |
| Astro Pages Preview | `smartpickhub-preview`; repository `ralabsi95-spec/smartpickhub`; branch `automation/bootstrap`; build `npm run build`; output `dist`; Node `22.23.4` | Keep isolated and noindex |
| Preview URL inspected | Immutable deployment URL `https://b9f4be72.smartpickhub-preview.pages.dev/`; homepage, guide index, sample guides and disclosure fetched successfully | Preview evidence only; not production |
| Intended Pages Production | Separate project `smartpickhub`; last dashboard inspection showed no Git connection, incomplete build/output settings and no verified custom domain | Not configured or deployed |
| Cloudflare Worker named `smartpickhub` | Separate Worker resource; prior dashboard/check showed failed build/no active routes | Not required for the static Pages architecture; do not confuse with Pages |

## 2. Latest source and automated quality

- Current `automation/bootstrap` head: `8006886a05e9a0712f8e095baca782ac3beea16b`.
- CI run #638 completed successfully on that exact head. Locked install, Astro checks, importer self-tests, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe, Lighthouse samples, consolidated report and artifact upload all completed.
- CI is quality verification, not a production deployment.
- PR #1 remains Draft/open/unmerged. `main` must not be treated as the release branch without an explicit release decision.
- Latest inspected source confirms the early Amazon US/UK action group is placed after each product's Best for summary and the original lower action group remains later in the product card. The guide template builds both groups using the existing affiliate helper.
- Representative Preview pages inspected: homepage, 25-guide index, Home Office Ergonomics, Portable Power & Travel Tech, UK-first Espresso guide, affiliate disclosure and RSS endpoint.
- The homepage and guide index display 25 guides; all guide entries remain labelled as research drafts. Product details explicitly describe the information as research-based, not hands-on testing.
- Affiliate disclosure explains the US and UK Amazon Associates relationships. Links are labelled as paid links and the product-level copy identifies Amazon destinations as marketplace search results, not verified direct product listings.
- Preview metadata reports `noindex, nofollow`; `public/robots.txt` contains `Disallow: /`. Preserve both protections in Preview.
- RSS currently has no guide items because the feed is restricted to approved guides and no guides are approved.

## 3. Release blockers (must be resolved before public launch)

### P0 — release-blocking

1. **Editorial approval:** 25/25 guides remain research drafts; 0 approved. Review each guide and product claim before publication. Do not bulk-approve.
2. **Amazon account and link readiness:** verify the Amazon Associates UK account is active and `smartpickhubu-21` is accepted; verify the US ID separately if US links remain enabled. The current links are model-phrase search URLs, not proof of exact listing, active offer, stock, commission eligibility or ASIN correctness.
3. **Regional product identity:** continue the 100-record US/UK model, SKU, voltage, plug, package, warranty and accessory review. Do not infer regional equivalence from similar names.
4. **Security advisory:** `picomatch` GHSA-fc5q-39xc-vjpf / CVE-2026-112366 remains high severity (12 affected dependency nodes from one underlying advisory). The proposed time-boxed exception is pending owner approval, with review deadline 2 December 2026. This is not a clean audit or a remediation. Recheck upstream and obtain an explicit risk decision before launch.
5. **Production configuration and release target:** confirm the intended production Pages project, exact release commit/branch, build settings, hostname/domain and rollback target. Production Pages is not currently wired to the repository.
6. **Indexing policy:** `Layout.astro` currently emits `noindex, nofollow` unconditionally and `robots.txt` blocks all crawling. This is correct for Preview, but the production release will need a deliberately reviewed environment-specific indexing policy. Do not remove protections in this preparation phase.
7. **Existing-site preservation:** prepare a migration/rollback plan for the current WordPress/InfinityFree site. No WordPress export, backup or restore point was verified in this session; verify these before any domain or content cutover.

### P1 — required for a credible launch

8. **Product images:** current catalogue has no approved product photographs. Keep placeholders unless exact-model imagery has documented commercial-use rights. Existing guide covers are original editorial illustrations, not product photos.
9. **Accessibility:** latest recorded axe run reports zero automated violations but incomplete contrast checks remain (latest audit recorded 27 incomplete checks); manually inspect text contrast, keyboard/focus, navigation, mobile layout and touch targets.
10. **Analytics and conversion measurement:** no verified GA4, Search Console, consent/privacy configuration or outbound affiliate-click measurement was evidenced. Define measurement and distinguish site outbound clicks from Amazon reports.
11. **SEO:** review canonical host, sitemap, structured data, titles/descriptions, redirects and legal/disclosure pages against the final production hostname. Keep indexing disabled until all gates pass.
12. **Mobile/browser acceptance:** CI Lighthouse includes mobile homepage sample, but this is not a complete manual device/browser acceptance test. Complete representative mobile checks before release.

## 4. Proposed safe cutover sequence (not executed)

1. Complete the P0 release gates and identify an exact candidate SHA.
2. Confirm a current backup/export of the legacy WordPress site and a documented rollback route.
3. Confirm the Cloudflare Pages production project identity and least-privilege credentials; do not expose or reuse broad tokens.
4. Obtain owner approval for the exact production project, source branch/SHA, domain, build settings and deployment window.
5. Configure production Pages in a controlled way while keeping Preview separate. Verify the static build and a non-indexed candidate deployment first.
6. Review homepage, all approved guide routes, affiliate links, disclosures, images, 404 handling, canonical metadata, sitemap and robots on the candidate.
7. Obtain explicit approval for DNS/domain routing and the actual cutover. Keep the legacy WordPress site intact until the new site is confirmed stable.
8. Only after explicit indexing approval, apply the production-only robots/noindex policy, submit sitemap/Search Console and enable any approved indexing workflow.
9. Monitor errors, outbound affiliate clicks and Amazon reporting separately; retain rollback capability.

## 5. What was actually done in this checkpoint

- Re-read `MASTER_PROJECT.md`, `AGENT_HANDOFF.md`, the latest continuation audit and release runbook.
- Confirmed branch head and successful CI #638, its 19 completed steps and uploaded report artifact.
- Read-only inspected the existing InfinityFree WordPress homepage and the Astro Preview homepage, guides index, sample guide pages, disclosure and RSS.
- Read source for the guide template, affiliate CTA placement, layout robots meta, Astro site configuration, package scripts, security exception and Pages headers.
- Confirmed Preview protections and documented the production project's disconnected/incomplete state from the latest available Cloudflare inspection.
- Added this preparation checkpoint only.

## 6. Not done

- No PR merge, branch change, application/content/catalogue change, product import, guide approval or image approval.
- No Amazon account settings or tracking IDs changed.
- No Cloudflare project settings, Git connection, environment variables, secrets, DNS, custom domain, Worker, Pages production deployment or routing changed.
- No WordPress page/content/settings change, migration, backup or deletion performed.
- No removal of `noindex` or `Disallow: /`; no indexing or sitemap submission.
- No public launch or monetisation claim.

## 7. Next action

Continue with a focused launch-gate audit: verify the exact current Preview deployment SHA, inspect the full latest CI artifact, check the production Pages project and existing-site backup/rollback readiness read-only, then prepare the minimum changes required for an owner-approved release. Do not execute cutover actions until explicit approval.
