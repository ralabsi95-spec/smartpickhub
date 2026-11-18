# SmartPickHub — CI #627 and Live Preview Inspection

**Date:** 18 November 2026  
**Branch:** `automation/bootstrap`  
**Commit inspected:** `f171adffed0506b00eff7f566c6b0229d0c3ef01`  
**CI run:** [#627](https://github.com/ralabsi95-spec/smartpickhub/actions/runs/44277317652) — success  
**Preview inspected:** https://74c35c23.smartpickhub-preview.pages.dev/

## 1. CI result

Run #627 completed successfully. All 19 substantive workflow steps passed, including locked dependency installation, audit capture, Astro checks, importer tests, catalogue/affiliate validation, static build, smoke tests, axe accessibility audit, Lighthouse audits and report upload.

This is a second consecutive successful full run after #626. A successful CI run is not a content approval or production release.

## 2. Live preview inspection

A read-only browser inspection reviewed:
- Homepage
- Buying guides index (`/guides/`)
- Representative Home Office Ergonomics guide
- Affiliate disclosure page (`/affiliate-disclosure/`)

### Confirmed visible experience

- Consistent header navigation: Home, Buying Guides, RSS, Affiliate Disclosure.
- Homepage hero, explanation of the SmartPick approach, guide statistics, featured guides, methodology and disclosure sections are present.
- Guides index exposes 25 guide cards, a search field and a category filter with 22 options.
- Individual guide pages visibly state: **Research draft — requires human review before publication.**
- Homepage and guide cards repeat the draft status; disclosure explains that product information is research-based and not hands-on testing.
- Affiliate disclosure is accessible from the header, homepage section and footer. It explains US/UK Amazon Associates participation and commissions.
- The inspected guide showed official specification links and separate Amazon US and Amazon UK search links. These remain search destinations, not verified direct product listings.
- The inspected pages rendered without visible broken images or page error messages.

### Important interpretation / limitations

- Guide-card `.webp` thumbnails loaded in the preview. These are guide imagery, not proof that all 100 product records have approved product photographs or cleared reuse rights. The catalogue still has no approved product images.
- The inspection did not perform a controlled mobile viewport/device-emulation test. Responsive appearance looked plausible, but mobile usability is **not yet formally verified**.
- No browser-console or network diagnostic export was captured; record only that no visible page errors were observed during the inspection.
- No affiliate purchase links were clicked and no forms or site settings were changed.

## 3. Release gates and next work

1. Perform a real mobile viewport review at common phone widths and verify navigation, card wrapping, typography, tables and tap targets.
2. Manually review the 27 incomplete axe contrast checks; zero automated violations is not a WCAG conformance claim.
3. Keep the picomatch high-severity advisory open pending compatible upstream remediation and a fresh audit.
4. Continue product-image licensing and product identity checks; do not infer product-image approval from guide thumbnails.
5. Keep all 25 guides in research-draft status until editorial and factual review is complete.

## 4. No production changes

This was a read-only preview inspection. No source content, catalogue entries, images, affiliate IDs, Cloudflare settings, DNS, indexing controls or production pages were changed. PR #1 remains Draft/open/unmerged. Preview crawl blocking remains in force.

**Conclusion:** CI #627 is green and the live preview's main navigation, guide discovery, draft labels and disclosure are visibly coherent. Mobile verification, manual contrast review, security remediation and editorial/image approvals remain outstanding.
