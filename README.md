# SmartPickHub

Research-led affiliate buying guides for US and UK shoppers.

## Read this first
- **[Agent handoff and continuation rules](AGENT_HANDOFF.md)** – mandatory first read for every new ChatGPT conversation, coding agent or contributor.
- **[Master project log](MASTER_PROJECT.md)** – chronological project history, decisions and implementation notes.

## Current status (16 November 2026)
- Astro implementation is on the development branch `automation/bootstrap`.
- Catalogue contains **10 research-draft guides and 40 product records**. None is approved for publication.
- Amazon US and UK links are generated from separate model-name search phrases; these are search links, not verified direct ASIN links.
- Preview: https://smartpickhub-preview.pages.dev/ (isolated Cloudflare Pages deployment; intentionally noindex and crawl-disallowed).
- Existing live WordPress site: https://smartpickhub.infinityfree.me/ – preserve it. No migration, DNS change, production deployment or WordPress edit has been approved.
- PR #1 remains Draft and unmerged. Do not merge without explicit owner approval.

## Development commands
```bash
npm install
npm run dev
npm run check
npm run validate
npm run keywords
npm run build
npm run smoke
npm run accessibility
```

## Editorial and safety rules
All catalogue entries are research drafts. Verify exact local product variants, manufacturer claims and marketplace destinations before editorial approval. Do not invent ASINs, direct links, prices, ratings, reviews, stock or hands-on testing. Do not publish automatically. See `AGENT_HANDOFF.md` for mandatory operating rules and next actions.

## Draft research automation
The GitHub Actions draft-research workflow is not a public publishing system. It can create unverified research briefs for human review only. Do not enable or dispatch it without checking the workflow, script, branch target and configured secrets. Scheduled workflows run from the default branch; this development-branch workflow will not run on schedule until a separately approved default-branch change.
