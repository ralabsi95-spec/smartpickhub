# Dependency security exception review

**Status:** Closed for this advisory — GitHub withdrew GHSA-fc5q-39xc-vjpf on 18 November 2026 because it is not a security issue.  
**Approved by project owner:** 18 November 2026 (explicit approval in project conversation)  
**Last reviewed:** 19 November 2026 — advisory withdrawal verified; latest locked install in run #129 reported zero npm vulnerabilities.  
**Review deadline:** Not applicable to the withdrawn advisory; reopen only if a new advisory or credible new evidence appears.  
**Do not treat this exception as remediation or a clean security audit.**

## Current status — 19 November 2026

GitHub's reviewed advisory page now explicitly marks GHSA-fc5q-39xc-vjpf / CVE-2026-112366 as **withdrawn on 18 November 2026 because it is not a security issue**. This supersedes the temporary risk-acceptance decision below. The package versions were not changed as part of this status update; this is not a claim of a dependency patch. No downgrade, override, vendored fork or other dependency change is warranted solely to address this withdrawn advisory. Preserve normal dependency hygiene and re-open review only if a new advisory or materially new evidence is published.

The 2 December review deadline and temporary exception are historical and no longer apply to this withdrawn advisory.

## Historical finding and exception record (18 November 2026)

> The following details describe the decision as it stood on 18 November. The advisory was withdrawn on 18 November; the historical severity, affected range and temporary controls below are not the current advisory status.

- Advisory: [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
- CVE: CVE-2026-112366
- Package: `picomatch`
- Severity: High (the GitHub advisory page currently displays CVSS 8.7 / CVSS v4; other feeds report CVSS 7.5 / v3)
- Advisory description: picomatch through `4.0.7`; the GitHub advisory page currently shows package/affected-version metadata as unknown and no patched version.
- Last inspected project lockfile resolutions: `4.0.7` and nested `2.3.2`; no dependency or lockfile remediation was made in the documentation-only commits through CI #656.
- Published patched version: **None identified in the reviewed GitHub advisory or upstream issue as of 18 November 2026**.
- Upstream discussion: [picomatch issue #247](https://github.com/micromatch/picomatch/issues/247) remains open; no published fix was identified.

**CI #656 update (18 November 2026, 19:31 UTC):** the raw `npm audit --json` artifact reports zero vulnerabilities. This is a clean result from npm's current audit feed, but it does not prove the installed `picomatch` copies are patched: the GitHub advisory currently has incomplete package/version metadata and the inspected project lockfile still resolves the versions above. At that historical checkpoint the record was kept open as a temporary owner-approved risk acceptance. That decision was superseded by the advisory withdrawal on 18 November.

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

## Historical controls while the advisory was open

1. Keep the site static; do not add a Node.js runtime/server or user-controlled glob matching without reassessment and fresh owner approval.
2. Never feed visitor input or external product/catalogue text into glob patterns in build tooling.
3. Preserve the lockfile and use `npm ci`.
4. Keep the raw npm audit JSON in every CI artifact and keep the consolidated report status at `review-required`.
5. Do not downgrade Astro or `@astrojs/check` merely to make npm audit green.
6. Do not install an unofficial fork or cherry-pick an unmerged patch as a silent dependency override.
7. Recheck the official advisory and upstream release at each dependency update and no later than 2 December 2026.

## Historical approval and exit criteria (superseded by advisory withdrawal)

The temporary exception is owner-approved as described above. It expires for decision purposes on **2 December 2026** and must not roll forward silently. At that date, explicitly renew or reject it based on a fresh review.

Close this record only after a published upstream patched release is available, the lockfile resolves all affected picomatch instances outside the affected range, and a fresh full CI run confirms the result. Until then, the finding remains open, high severity, and review-required.


## CI #656 evidence

- Workflow run: https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44381000301
- Exact head: `a71be853fa7424444e384ba4bea39b745506ead0`; all build-and-audit steps completed successfully.
- Raw npm audit artifact: `14462454753`; `metadata.vulnerabilities.total = 0` and `vulnerabilities = {}`.
- Advisory remains published and no patched picomatch release was identified in the primary advisory/upstream references. Reassess the installed dependency tree and advisory before closing this exception; retain the 2 December 2026 review deadline.
