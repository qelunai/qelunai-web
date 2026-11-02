# Qelunai website growth tools — 2026-10-29

## Scope
- Localized, indexable landing pages `/lich-am/`, `/gio-hoang-dao/`, `/kinh-dich/` plus /en/ mirrors.
- Date input is calculated client-side for 1900–2100 in Vietnam civil UTC+7. No server/API/analytics calls for date computation.
- Beta CTA links to the already-existing **/testers/** Android enrollment guide (Google Group → opt-in → Play test) and a mailto request for iOS TestFlight. Neither falsely claims public store availability.
- Canonical, hreflang, FAQ structured data and sitemap derive from existing Astro infrastructure.

## Methodology and sources
`src/lib/vn-calendar.mjs` is a JavaScript port of Qelunai's own clean-room Dart core,
[qelunai-lunar](https://github.com/qelunai/qelunai-lunar) `lib/src/core/*.dart`. Its provenance
and method are recorded in qelunai-lunar's
[CLEANROOM.md](https://github.com/qelunai/qelunai-lunar/blob/main/CLEANROOM.md) and
[METHODOLOGY.md](https://github.com/qelunai/qelunai-lunar/blob/main/METHODOLOGY.md). Each JS
section names the Dart file it ports. Sources of the method (all public astronomy):
- Jean Meeus, *Astronomical Algorithms*, 2nd ed. (1998): ch. 25 (apparent solar longitude), ch. 49 (New Moon).
- Fliegel & Van Flandern, CACM 11(10), 1968 (Julian Day Number).
- Espenak & Meeus, NASA TP-2006-214141 (ΔT polynomials, 1900–2150).
- Public Vietnamese calendar rules: a month starts on the local day (UTC+7) of the New Moon; month 11 holds the winter solstice; in a 13-month year the first month without a principal solar term is leap.

History: before 2026-11-02 this file was derived from a lunar-calendar program whose licence allows
personal, non-commercial use only. The conversion code was replaced entirely by the port above;
the replacement is a section-by-section port of the qelunai-lunar Dart core, and the old code was not used as a reference.

`canChiDay`, `canChiYear` and `goodHours` are table look-ups (sexagenary cycle, hour spirits).
The auspicious-hour interpretation is a cultural rule, not scientifically predictive.

The `.ics` files of `/lich-dang-ky/` do not use this file; they come from a separate repository (see `src/i18n/subscribe.ts`).

## Verification
`npm run test:calendar` runs:
- `test/calendar.test.mjs`: Tết 2023–2027; 29/10/2026 = 20/9/2026 Bính Tý, 6 auspicious hours; leap months 2023 and 2025; invalid and out-of-range dates.
- `test/jpl.test.mjs`: against NASA JPL DE440s (`test/fixtures/`, copied from qelunai-lunar `reference/`), same tolerances as qelunai-lunar `test/jpl_test.dart`. Every New Moon 1900–2100 starts a lunar month on the JPL day except 2 within 2 minutes of midnight (1944-06-20 23:59:17, 1967-07-07 23:59:59). The solar-term index at local midnight matches JPL on every day except 11, all within 10 minutes of a crossing.

Cross-check on 2026-11-02: `solarToLunar` for all 73,414 days 1900-01-01 to 2100-12-31 was compared with the Dart `solarToLunar` of qelunai-lunar (commit 39f1016), run with `dart run` from a temporary directory: 73,414/73,414 identical (day, month, year, leap flag), and the 24-term index identical on every day. The script is not kept in this repository.

Limit: a New Moon or solar term within a few minutes of local midnight can land on either day; this is below the accuracy of the series and of ΔT forecasts for future years.

## Next steps after review
1. Connect Google Search Console, submit the generated `/sitemap.xml`.
2. Replace testing links with real public App Store and Play Store listing links after public launch.
3. Instrument privacy-reviewed, opt-in conversion analytics rather than assuming mailto clicks are measurable conversions.
4. Add public educational content with citations and human editorial review. No fake forecasts.
