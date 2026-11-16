# SmartPickHub

Astro starter for a US/UK affiliate buying-guide project.

## Important status
This is an isolated development branch. It does not replace the existing WordPress site. Product data is intentionally empty; no old products are imported.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`

## Draft automation
The GitHub Actions workflow creates unverified editorial research briefs in `content-drafts/`. It does not publish pages. Configure `GEMINI_API_KEY` as a repository Actions secret before manually running the workflow.

All product identifiers, retailer links and claims require verification before editorial approval.
