# Drying Cost Calculator V2 — Review Specification

**Status:** Design specification only; not production-approved  
**Created:** 25 November 2026  
**Branch:** `feature/drying-cost-calculator-v2-review-2026-11-25`  
**Source package:** Owner-uploaded nine-file drying-cost calculator bundle reviewed on 25 November 2026

## 1. Decision

Retain the uploaded calculator as a useful running-cost estimator prototype, but do not publish its current three-way comparison as an evidence-backed ranking. V2 must distinguish a simple power-based estimate from a comparable, evidence-backed cost-per-drying-job result.

No appliance measurements, model-specific energy values, or equivalent-load test results were supplied in the uploaded package. V2 must not manufacture these values or convert generic wattage assumptions into verified product performance.

## 2. Product goals

1. Help a visitor estimate the electricity cost of operating one appliance using their own inputs.
2. Compare appliances only when the underlying drying service is sufficiently comparable.
3. Make the source, geography, tariff basis, date checked, evidence type, and uncertainty visible beside every benchmark.
4. Keep UK and US tariff/data models separate; do not apply UK Ofgem rates to US users or EIA national averages as if they were household tariffs.
5. Support product-specific evidence later without requiring a redesign of the calculation model.

## 3. Two clearly separated modes

### A. Quick running-cost estimate

Inputs:
- Appliance type/name (free text or a clearly labelled generic preset).
- Input power in watts.
- Operating hours per use.
- Uses per week.
- Electricity unit rate and currency.

Formula:
- kWh per use = watts ÷ 1,000 × hours.
- Cost per use = kWh per use × unit rate.
- Weekly cost = cost per use × uses per week.
- Monthly estimate = weekly cost × 52 ÷ 12.
- Annual estimate = weekly cost × 52.

Rules:
- Label output as an estimate based on rated input power and user-entered duration, not measured consumption.
- Presets must display their basis and evidence status. Generic examples must be labelled unverified examples, never typical/verified unless a source supports that description.
- Selecting “Custom” must clear preset-derived wattage or otherwise require a fresh user-entered value.
- Reject zero, negative, non-finite, or implausible inputs with accessible validation.
- Do not include standing charge in marginal appliance running-cost results. Explain separately that standing charges are not avoided by switching an appliance off.

### B. Comparable drying-job comparison

A row may be included in a ranking only when it has enough evidence to describe the same drying job.

Required job definition:
- Dry textile mass (kg), not merely wet mass.
- Initial moisture condition or water content (where measured/reported).
- Target dryness / final moisture condition.
- Ambient temperature and relative humidity where relevant.
- Whether the appliance was tested with the same or a demonstrably equivalent load.
- Energy consumed for the job (kWh), with source and method.

Device-specific evidence:
- Tumble dryer: exact model/variant and energy per cycle (kWh/cycle) from a traceable label, manufacturer technical document, or controlled measurement; record the programme and load capacity.
- Heated airer: measured kWh for the defined load and drying interval is preferred. A watts × hours estimate may be shown only in a separate estimate lane, not ranked against measured cycle values.
- Dehumidifier: measured kWh over the defined drying job and, where available, litres of water removed and elapsed time. A generic hourly average is not a substitute for kWh per equivalent load.
- Any missing evidence must produce “insufficient comparable data”, not a guessed cost or winner.

Calculation:
- Job cost = measured/labelled kWh for the defined job × the selected unit rate.
- Cost per kg of dry textile may be shown only when the dry textile mass is known and the job conditions are comparable.
- Dehumidifier cost per litre of water removed may be shown only when both kWh and litres removed are supported by the same test or compatible traceable evidence.

## 4. Tariff and market data

### UK
- Identify the default benchmark precisely as the Ofgem GB average Direct Debit cap rate for the relevant period; it is not a universal UK household tariff.
- Preserve regional and payment-method distinctions where sourced. Northern Ireland and Economy 7/time-of-use tariffs must not silently inherit the GB single-rate default.
- Keep unit rate and standing charge separate.
- Store effective-from/effective-to dates, publication date, source URL, geography, payment method, and last-checked date.
- A future period that has not been officially published remains pending. Do not show a forecast as an official tariff.
- Use the Europe/London calendar date when selecting a UK tariff period.
- If the current period has no confirmed value, show an explicit unavailable/stale-data state and invite the user to enter their rate; never silently reuse an expired value.

### US
- Build a separate adapter with USD/kWh, state/geography, sector, month, publication date, and source.
- EIA residential average revenue per kWh is a national/state benchmark derived from revenue and retail sales; it is not the customer's marginal tariff or time-of-use price.
- Label EIA data as a benchmark, not a household bill rate. Prefer user-entered utility rate for personal cost estimates.
- Do not merge US and UK data structures by relabelling currency or unit-rate fields.

## 5. Evidence model

Every data point must carry:
- `value` and `unit`
- `evidenceType`: `measured`, `energy_label`, `manufacturer_spec`, `official_tariff`, `independent_source_estimate`, or `user_input`
- `sourceName`, `sourceUrl`, `publishedAt`, `checkedAt`
- `geography` and relevant model/variant or test conditions
- `confidenceNote` and any known limitations

The UI must distinguish:
- Measured result
- Official label/specification
- Independent published estimate
- User-entered assumption
- Missing / not comparable

Never imply SmartPickHub physically tested a product unless a documented test record exists.

## 6. Corrections required from V1

1. Fix the custom-preset state so a previous wattage cannot leak into Custom mode.
2. Display the preset source/basis and unverified status in the UI.
3. Remove the generic 2,400 W × 1.5 h tumble-dryer comparison from any ranked or equivalent-load result. It may remain only as an explicitly unverified illustrative estimate, preferably omitted until replaced by model-specific kWh/cycle evidence.
4. Replace pending-cap logic based on `pending.from <= today` with announcement/publication state and effective dates.
5. Use an explicit Europe/London date for UK tariff selection.
6. Prevent stale tariff fallback from appearing current.
7. State that the default Ofgem benchmark is GB average Direct Debit and allow manual tariff entry.
8. Remove nested page-level `<main>` elements where the shared Layout already supplies the main landmark.
9. Do not place a tool in the data-driven `/guides/` product listing as if it were a buying guide. Use contextual internal links or a dedicated tools route/index after review.
10. Keep the current package UK-only until a separate US data adapter and sourced tariff copy are implemented.

## 7. UX and accessibility acceptance criteria

- Mobile-first single-column form; no horizontal overflow at 320 CSS px.
- Clear units beside every input and output.
- Keyboard-operable controls with visible focus.
- Programmatic labels and helpful error messages.
- Results announced politely to assistive technology without excessive repeated announcements.
- Currency and decimal formatting consistent with the selected market.
- Explanations distinguish estimate, benchmark, and comparable measured result.
- No default winner badge or “cheapest” claim when evidence is incomplete.
- Sources and last-checked dates are visible and clickable.

## 8. Validation plan before any production approval

1. Unit tests for formula, rounding, monthly/annual conversion, invalid inputs, and currency formatting.
2. Date-boundary tests for UK tariff periods, including the Ofgem announcement date and effective-date transition.
3. State tests for preset → Custom → user-entered wattage.
4. Evidence-gating tests: no comparable ranking when any required load/energy evidence is missing.
5. JSON/schema validation for UK and US datasets independently.
6. Run `npm run check` and `npm run build` in the full repository environment.
7. Inspect the Cloudflare Pages preview for the exact commit; confirm the deployment is a Pages preview (not Workers).
8. Browser test at mobile and desktop widths, keyboard-only operation, screen-reader announcements, source links, and no nested main landmarks.
9. Review canonical URL, robots/noindex preview behavior, metadata, internal links, and page discoverability.
10. Obtain explicit owner approval before merging, publishing, changing navigation, or deploying to production.

## 9. Current evidence available from the uploaded package

- Ofgem Q4 2026 GB average Direct Debit electricity rate: 26.32p/kWh; standing charge 54.83p/day, as checked 25 November 2026. The uploaded source review found no official Q1 2027 rate published on the check date.
- Which? figures in the supplied scenario data are published estimates tied to 26.32p/kWh and different laundry scenarios. They are useful contextual benchmarks, not a same-load head-to-head test.
- The supplied 2,400 W × 1.5 h tumble-dryer assumption is unverified and must not be represented as an actual dryer cycle.
- The supplied generic airer wattages are unverified examples; no model-specific test records were supplied.

## 10. Non-goals for this review branch

- No merge to `main`.
- No production deployment or Cloudflare setting change.
- No product imports, affiliate links, or product claims.
- No fabricated ASINs, prices, ratings, test results, or appliance specifications.
- No claim that Astro check/build or browser testing has passed until those commands are actually run in a complete local/CI environment.
