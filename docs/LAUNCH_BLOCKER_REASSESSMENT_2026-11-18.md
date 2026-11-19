# SmartPickHub — launch blocker reassessment

**Date:** 18 November 2026, 14:44–14:55 UTC  
**Reviewed branch head:** `9e61359d8e3a05b5005eab8b47fec4d68394efe3`  
**CI:** Run #640 / ID `44318599958` — Success; all 19 substantive steps completed.  
**Preview deployment:** `https://f1a12333.smartpickhub-preview.pages.dev/` (Cloudflare Pages bot confirms commit `9e61359`).  
**PR #1:** Open, Draft, unmerged.

## Outcome

The latest development build and Preview are operational, but the public release is **not yet safe to execute**. The owner asked to resolve launch blockers and proceed. This reassessment performs read-only checks and records the remaining items that cannot responsibly be self-approved or completed without account access/owner decisions.

## Newly confirmed

- CI #640 succeeded on the launch-preparation documentation commit. All workflow steps 1–19 completed, including dependency capture, Astro checks, importer tests, catalogue validation, static build, smoke tests, axe, Lighthouse, consolidated report and artifact upload.
- Cloudflare Pages Preview successfully deployed the same commit to the immutable URL above.
- The latest Preview homepage, guides index, affiliate disclosure, robots.txt, sitemap index and RSS were fetched. No fetch errors were returned.
- The guide index exposes 25 guides and visibly labels every one as a research draft requiring human review. Espresso has a more specific UK-first draft label.
- Homepage, guides index and disclosure metadata all return `noindex, nofollow`.
- Preview `robots.txt` returns `User-agent: * / Disallow: /`.
- Sitemap index exists and points to `sitemap-0.xml`; it has not been submitted to a search engine.
- RSS endpoint is valid but contains no guide items, consistent with the approval-gated feed.
- Affiliate disclosure identifies Amazon US and UK participation and states the commission relationship; it also avoids hands-on testing claims.
- Cloudflare's PR comment distinguishes a successful Pages Preview deployment from a separate failed Workers build. The Worker check is not evidence of a Pages Preview failure.

## Security advisory recheck

- GitHub Advisory Database still lists GHSA-fc5q-39xc-vjpf / CVE-2026-112366 as high severity and affected through picomatch 4.0.7; it lists no patched version.
- npm's package page still identifies 4.0.7 as latest. No safe official version upgrade can currently clear the finding.
- A third-party result mentioned 4.0.8, but the npm registry and official GitHub release listing do not corroborate it. Do not use that claim as remediation.
- The project's lockfile includes picomatch 4.0.7 and 2.3.2. The finding remains review-required. Static-site build-time-only exposure reduces the deployed attack surface but does not eliminate the dependency finding.
- No override, downgrade, unofficial fork, or risk acceptance was applied.

## Remaining owner/account gates

1. **Amazon Associates:** the repository cannot prove account activation, accepted tracking IDs, payment/tax status, site approval, or live commission eligibility. The UK ID is configured as `smartpickhubu-21`; this is not confirmation that Amazon has approved it. The user must verify this inside Associates Central or provide a connected, authorized workflow.
2. **Content approval:** 25/25 guides remain drafts and 0 are approved. No automated content build can substitute for review of 100 product records and all claims. Do not flip all approval flags to make RSS or SEO populate.
3. **Risk exception:** `SECURITY_EXCEPTIONS.md` explicitly requires project-owner approval. The user's request to resolve launch blockers is not a sufficiently specific acceptance of this unresolved high-severity dependency risk. Obtain explicit acceptance or wait for a verified upstream fix.
4. **Production destination:** intended Pages project `smartpickhub` was previously observed disconnected and incompletely configured. The working `smartpickhub-preview` project is not production. The legacy InfinityFree URL is still a separate WordPress installation. No Cloudflare production API/control tool is available in this workflow to wire Pages or safely change DNS.
5. **Backup/rollback:** no verified current WordPress export, database backup, or tested restore point is available in the project record. No migration/cutover should occur until verified.
6. **Indexing:** the shared layout unconditionally emits `noindex, nofollow`, and robots disallows all crawling. This correctly protects Preview, but production needs an environment-specific policy and a verified canonical hostname. No indexing change was made.
7. **Images and accessibility:** no approved exact-product photos exist. Latest recorded axe results still include incomplete contrast checks requiring manual review. Lighthouse and automated axe are not a substitute for full real-device/keyboard review.
8. **Analytics/privacy:** no verified analytics, outbound affiliate-click attribution, consent/privacy setup or Search Console ownership was found.

## Actions performed

- Rechecked CI #640 and the full 19-step job outcome.
- Confirmed the matching Cloudflare Pages Preview deployment via the PR's Cloudflare bot comment.
- Fetched the latest Preview homepage, guides index, disclosure, robots.txt, sitemap index and RSS read-only.
- Rechecked the official GitHub advisory and npm/GitHub release listings for picomatch.
- No source code, catalogue, publication status, Cloudflare settings, DNS, WordPress, Amazon account, or indexing settings changed.

## Launch decision

**Do not merge or cut over to production yet.** This is not a technical build failure: the Preview is built and deployed. The remaining blockers are editorial approval, Amazon account proof, explicit security-risk decision, production wiring/domain choice, and legacy-site backup/rollback. A premature launch would either publish unapproved product claims, risk losing the existing site, or falsely imply verified affiliate monetisation.

## Next execution

Proceed with a small, owner-visible release plan:
- Obtain the one-time owner decisions for the security exception and production destination.
- Verify Amazon UK Associates account status and accepted tracking ID.
- Establish a backup/export and rollback path for the legacy WordPress site.
- Perform evidence-based editorial review, approve only individually reviewed guides, and re-run full CI.
- Prepare production-specific robots/canonical configuration and only then execute the explicitly approved Pages cutover.
