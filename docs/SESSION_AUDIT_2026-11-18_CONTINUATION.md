# SmartPickHub — Continuation audit (18 November 2026)

**Scope:** Read-only diagnosis of the production/preview deployment split, verification of the latest available GitHub Actions evidence, and continuation handoff. This record does not authorize production changes.

## Repository and branch evidence

- Repository: `ralabsi95-spec/smartpickhub` (private).
- Active implementation branch: `automation/bootstrap`.
- The current `main` branch remains the initial repository baseline; the Astro implementation is not merged to `main`.
- A comparison from commit `576e11163361bec06b5dafdda243841a5adab40d` to the current `automation/bootstrap` ref showed four commits ahead. The changed paths were documentation only: `AGENT_HANDOFF.md`, `MASTER_PROJECT.md`, `PROGRESS_100_STEPS.md`, and `docs/UK_US_REGIONAL_AUDIT_2026-11-18.md`. No application source path appeared in that comparison.
- PR #1 remains recorded as Draft/open/unmerged. Do not merge it without explicit owner approval.

## CI status — distinguish full success from cancellation

- Run #564 / ID `44252571083` completed successfully on code commit `5294826a594590d1dc46fa95bbbb7c9dead3779e`. All 19 main job steps passed, including locked dependency installation, Astro checks, importer self-test and isolated integration test, catalogue/affiliate validation, keyword generation, static build, smoke tests, axe accessibility audit, Lighthouse samples, consolidated report and artifact upload.
- Run #573 / ID `44257057465` on documentation head `576e11163361bec06b5dafdda243841a5adab40d` was **cancelled**, not successful. Its dependency install, Astro/content checks, importer tests, catalogue/affiliate validation, keyword generation, static build and smoke tests completed successfully. It was cancelled while starting the local preview server; Chromium, axe and Lighthouse steps were skipped. The consolidated report step consequently failed, while artifact upload completed.
- Therefore, the latest verified full automated quality pass is run #564 on `5294826`; run #573 is partial/cancelled. Re-check the newest branch-head run before claiming the current documentation head is fully green.

## Cloudflare diagnosis — production and preview are separate projects

The latest authoritative Cloudflare notes and dashboard inspection establish:

### Development/QA Pages project
- Project: `smartpickhub-preview`.
- URL: https://smartpickhub-preview.pages.dev/
- Connected repository: `ralabsi95-spec/smartpickhub`.
- Branch: `automation/bootstrap`.
- Automatic deployments: enabled.
- Build command: `npm run build`.
- Output directory: `dist`.
- Root directory: repository root (blank setting).
- Build variable: `NODE_VERSION=22.23.4`.
- Preview must remain protected by `noindex,nofollow` and `robots.txt: Disallow: /`.

### Intended production Pages project
- Project: `smartpickhub`.
- Approved MVP hostname: https://smartpickhub.pages.dev/
- Last inspected dashboard state: Git integration disconnected; production branch displayed as `main`; root/build/output settings not populated; no custom domain configured.
- The production hostname previously returned Cloudflare 404 while the separate preview hostname rendered successfully.
- The repository's `build-check.yml` workflow performs QA and uploads reports; it does not deploy the site. The existing draft-generation workflow is not a production deployment workflow.
- A separate Cloudflare Workers item also named `smartpickhub` has a failed build/no active routes and is unrelated to the static Pages preview.

**Diagnosis:** The 404 is consistent with the intended production Pages project being unconnected/unconfigured and not deployed from the Astro implementation, while the working site is served by the separate `smartpickhub-preview` Pages project. This is a deployment/project wiring issue, not evidence of a broken Astro homepage. Do not reconnect Git, change settings, merge, deploy, alter DNS or remove preview crawl protection without explicit owner approval.

## Cloudflare credential observation

- The user's Cloudflare profile API Tokens page showed an active token named `smartpickhub build token`, with 28 listed permissions and recent use at the time of inspection.
- The token value was not revealed, copied, stored, or used. Its full permission set has not been reviewed.
- Before relying on it for automation, inspect its permissions and reduce scope to the minimum required for the intended Pages operation. Do not put token values in repository files; use protected GitHub secrets only after approval.

## Current product/content/release gates

- Catalogue: 25 buying guides and 100 product records.
- All guides remain research drafts; zero are approved for publication.
- Product image metadata/approved product photos remain zero; original Pinterest cover illustrations are not product photographs.
- RSS intentionally includes only approved guides and is expected to remain empty until editorial approval.
- Amazon US/UK URLs are generated from model-name search phrases; this does not verify exact retailer listings, ASINs, stock, price or commission eligibility. Keep tracking IDs unchanged and verify account status and destination links before launch.
- Open release gates include the high-severity picomatch advisory `GHSA-fc5q-39xc-vjpf` / `CVE-2026-112366` (reported across 12 dependency nodes; owner security exception/review pending, deadline 2 December 2026), manual review of axe incomplete contrast checks (27 incomplete checks in the recorded audit), content and regional SKU review, image rights, analytics/conversion measurement, and mobile/real-browser acceptance.
- The exact latest Pages preview deployment corresponding to the current branch head has not been established in this audit.

## Actions performed in this session

- Re-read the project master record and handoff.
- Verified repository identity, active branches, latest known commits, relevant CI run/job outcomes, workflow configuration and preview layout/robots source.
- Read the Cloudflare browser session without changing settings.
- Confirmed the separate preview/production project configuration and the likely cause of the production 404.
- Created this documentation-only continuation record on `automation/bootstrap`.

## Actions explicitly not performed

- No application code or product data changed.
- No product imported, guide approved, image approved, RSS item published or social post scheduled.
- No PR merged; no change to `main`.
- No production Pages connection, build setting, deployment, DNS, indexing, robots/noindex, WordPress or legacy hosting change.
- No Cloudflare token value accessed or used.

## Next execution sequence

1. Check the CI run triggered by this documentation commit and identify the exact current `automation/bootstrap` head.
2. Inspect the newest `smartpickhub-preview` deployment and correlate its commit with the branch head; verify served robots, canonical and Open Graph metadata.
3. Review the Cloudflare token permission list and least-privilege requirements without exposing the token.
4. Resolve or document the picomatch security exception and complete manual accessibility contrast review.
5. Continue exact-model US/UK catalogue review and owner editorial approval; verify Amazon account/link readiness and image rights.
6. Prepare a production release checklist and rollback plan. Request explicit approval before connecting or deploying the production Pages project or removing any crawl protection.
