# SmartPickHub — CI #629 and Owner Mobile Preview Review

**Date:** 18 November 2026  
**Branch:** `automation/bootstrap`  
**Reviewed head before this note:** `fae1cf0b3879640e6f03d736359ee447834699e4`  
**CI run:** [#629](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44286070785) — success  
**Preview:** https://smartpickhub-preview.pages.dev/

## 1. CI #629

Run #629 completed successfully. All 19 substantive workflow steps passed, including dependency installation, Astro/content checks, importer self/integration tests, catalogue and affiliate validation, keyword generation, static build, smoke tests, axe accessibility audit, Lighthouse homepage desktop/mobile and template audits, consolidated report generation and artifact upload.

The result validates the tested branch head; it does not approve draft content or authorize production release.

## 2. Owner-supplied mobile screenshots

The site owner supplied Chrome DevTools responsive screenshots at **390 × 816 CSS pixels**.

### Homepage screenshot
- Brand mark and wordmark remain aligned.
- Four navigation links (Home, Buying Guides, RSS, Affiliate Disclosure) fit in the visible header as compact pill controls.
- Hero heading wraps naturally over multiple lines; supporting copy, primary CTA and secondary link remain within the viewport.
- No obvious horizontal overflow or clipped hero content is visible in the supplied capture.
- The top of the next section is visible below the hero content.

### Guide product-card screenshot
- Product title wraps cleanly across two lines.
- Product-image verification placeholder remains inside the card and its explanatory copy is readable.
- Best-for text, highlighted summary panel and advantages list fit the card width without visible overlap.
- No obvious horizontal overflow or clipped card content is visible in the supplied capture.
- The placeholder is visually tall relative to its content. Consider a small mobile-only height reduction in a future reviewed UI change, but preserve the explicit unverified-image disclosure and consistent card rhythm.

### Scope and limitations
- These are visual spot checks of two viewport captures, not a complete responsive QA pass.
- Only the visible regions in the screenshots were assessed. The entire page, footer, every guide template, menus, keyboard navigation, touch-target sizes, and landscape/tablet widths were not exhaustively tested.
- No source code or CSS was changed as part of this review.
- No claim of zero horizontal overflow across the entire site is made.

## 3. Outstanding work

1. Continue mobile review for guide index, remaining guide sections, tables, footer and any interactive controls.
2. Manually review the 27 incomplete axe contrast checks; zero automated violations is not a WCAG conformance claim.
3. Track the single underlying high-severity picomatch advisory (12 affected dependency nodes); do not apply arbitrary overrides or downgrade dependencies.
4. Keep product images and all 25 guides in unapproved/research-draft state until their separate verification and editorial gates are met.

## 4. Release safety

PR #1 remains Draft/open/unmerged. No production deployment, merge, DNS, Cloudflare production setting, indexing/crawl-protection, content publication or product-catalogue modification was performed. Preview remains isolated and crawl-blocked.
