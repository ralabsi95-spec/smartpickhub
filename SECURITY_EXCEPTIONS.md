# Dependency security exception review

**Status:** Owner-approved, temporary risk acceptance — finding remains open and review-required  
**Approved by project owner:** 18 November 2026 (explicit approval in project conversation)  
**Last reviewed:** 18 November 2026  
**Review deadline:** 2 December 2026  
**Do not treat this exception as remediation or a clean security audit.**

## Finding

- Advisory: [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
- CVE: CVE-2026-112366
- Package: `picomatch`
- Severity: High (CVSS 7.5 per the latest inspected npm audit artifact)
- Affected range: `<=4.0.7`
- Locked resolutions in this project: `4.0.7` and nested `2.3.2`
- Published patched version: **None listed by the reviewed GitHub advisory as of 18 November 2026**
- Upstream work: [picomatch PR #238](https://github.com/micromatch/picomatch/pull/238) proposes a focused guard, but it is open and is not a published upstream release.

The CI `npm audit` report currently lists 12 high-severity affected package nodes. These entries trace to the same underlying picomatch advisory through Astro, Vite, `tinyglobby`, `unstorage`, and `@astrojs/check`; they are not 12 independent CVEs. The audit remains **review-required**.

## Approved scope and limits

The project owner explicitly approved a **temporary, time-boxed exception** for the current static Astro build/development dependency chain only, through **2 December 2026**.

This approval:
- Accepts the documented residual dependency risk temporarily; it does **not** remediate picomatch or make npm audit clean.
- Applies only while SmartPickHub remains a static Astro site using repository-controlled build inputs/configuration.
- Does not authorize a Node.js request-time runtime/server, visitor-supplied or externally controlled glob patterns, or any new use that expands the attack surface.
- Does not authorize production deployment, PR merge, publication of research-draft guides, DNS/Cloudflare changes, or hosting/account changes. Those remain separate release decisions and gates.

## Exposure assessment

SmartPickHub is built as a static Astro site. The locked picomatch packages are transitive dependencies of the build/development toolchain; the project does not directly import picomatch or expose a Node.js request-time glob service. The reviewed build uses repository-controlled source and configuration, not visitor-supplied glob patterns.

This limits the likely attack surface for the published static site, but does not make the vulnerable package safe. A compromised build input, future server adapter, or new code path that processes untrusted glob patterns could change the assessment.

## Required controls while unresolved

1. Keep the site static; do not add a Node.js runtime/server or user-controlled glob matching without reassessment and fresh owner approval.
2. Never feed visitor input or external product/catalogue text into glob patterns in build tooling.
3. Preserve the lockfile and use `npm ci`.
4. Keep the raw npm audit JSON in every CI artifact and keep the consolidated report status at `review-required`.
5. Do not downgrade Astro or `@astrojs/check` merely to make npm audit green.
6. Do not install an unofficial fork or cherry-pick an unmerged patch as a silent dependency override.
7. Recheck the official advisory and upstream release at each dependency update and no later than 2 December 2026.

## Approval and exit criteria

The temporary exception is owner-approved as described above. It expires for decision purposes on **2 December 2026** and must not roll forward silently. At that date, explicitly renew or reject it based on a fresh review.

Close this record only after a published upstream patched release is available, the lockfile resolves all affected picomatch instances outside the affected range, and a fresh full CI run confirms the result. Until then, the finding remains open, high severity, and review-required.
