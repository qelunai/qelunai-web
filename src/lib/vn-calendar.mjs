/**
 * Qelunai website lunar-date engine: Gregorian ↔ Vietnamese lunar calendar (UTC+7), 1900–2100.
 *
 * The conversion part of this file is a direct JavaScript port of Qelunai's own clean-room
 * Dart core, `qelunai-lunar/lib/src/core/*.dart`
 * (https://github.com/qelunai/qelunai-lunar, see CLEANROOM.md and METHODOLOGY.md there).
 * That core was written independently from public astronomy sources only:
 *   - Jean Meeus, Astronomical Algorithms, 2nd ed. (1998): ch. 25 (Sun), ch. 49 (New Moon);
 *   - Fliegel & Van Flandern, CACM 11(10), 1968 (Julian Day Number);
 *   - Espenak & Meeus, NASA TP-2006-214141 (ΔT polynomials, 1900–2150);
 *   - the public rules of the Vietnamese calendar (month starts on the local day of the New
 *     Moon, month 11 contains the winter solstice, first month without a principal term in a
 *     13-month year is leap).
 * It does not contain code from any other lunar-calendar program.
 * Checked against NASA JPL DE440s (test/fixtures/jpl_*.csv) and day-by-day against the Dart core.
 *
 * canChiDay, canChiYear and goodHours are plain table look-ups (sexagenary cycle, hour spirits).
 * See docs/GROWTH_CALENDAR.md.
 */

/** Vietnam civil time, hours east of UTC. */
const VIETNAM_TIME_ZONE = 7.0;
const MIN_YEAR = 1900;
const MAX_YEAR = 2100;

const DEG_TO_RAD = Math.PI / 180.0;
const RAD_TO_DEG = 180.0 / Math.PI;

/** x mod 360, in [0, 360). */
function normalizeDeg(x) {
  const r = x % 360.0;
  return r < 0 ? r + 360.0 : r;
}

// ---------------------------------------------------------------------------
// julian_day.dart — Fliegel & Van Flandern (1968). All intermediates are
// non-negative for year > -4800, except (month - 14), hence Math.trunc to match
// Dart's truncating `~/`.
// ---------------------------------------------------------------------------

/** Julian Day Number of a proleptic Gregorian date. Argument order (d, m, y) is the public API. */
function jdn(day, month, year) {
  const a = Math.trunc((month - 14) / 12);
  return (
    Math.trunc((1461 * (year + 4800 + a)) / 4) +
    Math.trunc((367 * (month - 2 - 12 * a)) / 12) -
    Math.trunc((3 * Math.trunc((year + 4900 + a) / 100)) / 4) +
    day -
    32075
  );
}

/** Inverse of jdn(). */
function dateFromJdn(n) {
  let l = n + 68569;
  const q = Math.trunc((4 * l) / 146097);
  l = l - Math.trunc((146097 * q + 3) / 4);
  const i = Math.trunc((4000 * (l + 1)) / 1461001);
  l = l - Math.trunc((1461 * i) / 4) + 31;
  const j = Math.trunc((80 * l) / 2447);
  const day = l - Math.trunc((2447 * j) / 80);
  l = Math.trunc(j / 11);
  const month = j + 2 - 12 * l;
  const year = 100 * (q - 49) + i + l;
  return { day, month, year };
}

// ---------------------------------------------------------------------------
// delta_t.dart — ΔT = TT − UT in seconds, Espenak & Meeus (NASA TP-2006-214141).
// ---------------------------------------------------------------------------

function deltaTSeconds(decimalYear) {
  let y = decimalYear;
  // Before 1900: hold the 1900 value instead of extrapolating.
  if (y < 1900) y = 1900;
  if (y < 1920) {
    const t = y - 1900;
    return -2.79 + 1.494119 * t - 0.0598939 * t * t + 0.0061966 * t * t * t - 0.000197 * t * t * t * t;
  }
  if (y < 1941) {
    const t = y - 1920;
    return 21.2 + 0.84493 * t - 0.0761 * t * t + 0.0020936 * t * t * t;
  }
  if (y < 1961) {
    const t = y - 1950;
    return 29.07 + 0.407 * t - (t * t) / 233.0 + (t * t * t) / 2547.0;
  }
  if (y < 1986) {
    const t = y - 1975;
    return 45.45 + 1.067 * t - (t * t) / 260.0 - (t * t * t) / 718.0;
  }
  if (y < 2005) {
    const t = y - 2000;
    return (
      63.86 +
      0.3345 * t -
      0.060374 * t * t +
      0.0017275 * t * t * t +
      0.000651814 * t * t * t * t +
      0.00002373599 * t * t * t * t * t
    );
  }
  if (y < 2050) {
    const t = y - 2000;
    return 62.92 + 0.32217 * t + 0.005589 * t * t;
  }
  const u = (y - 1820) / 100.0;
  if (y < 2150) return -20.0 + 32.0 * u * u - 0.5628 * (2150 - y);
  return -20.0 + 32.0 * u * u;
}

// ---------------------------------------------------------------------------
// new_moon.dart — Meeus ch. 49 (mean phase + periodic terms without D).
// Lunation k = 0 is the New Moon of 1900-01-01 (UTC+7), see METHODOLOGY.md.
// ---------------------------------------------------------------------------

/** JDE (TT) of the mean New Moon for k = 0. */
const EPOCH_JDE = 2415020.75985;
/** Mean synodic month, days. */
const SYNODIC_MONTH_DAYS = 29.530588861;

/** Julian Date (TT) of the true New Moon of lunation k. */
function trueNewMoonJde(k) {
  const jdeApprox = EPOCH_JDE + SYNODIC_MONTH_DAYS * k;
  const t = (jdeApprox - 2451545.0) / 36525.0;
  const t2 = t * t;
  const t3 = t2 * t;
  const t4 = t3 * t;

  // Secular part of Meeus (49.1) not already in jdeApprox.
  const jdeMean = jdeApprox + 0.00015437 * t2 - 0.00000015 * t3 + 0.00000000073 * t4;

  // Sun's mean anomaly M, Moon's mean anomaly M', Moon's argument of latitude F (degrees).
  const sunAnomalyDeg = normalizeDeg(357.5291092 + 35999.0502909 * t - 0.0001536 * t2 + t3 / 24490000.0);
  const moonAnomalyDeg = normalizeDeg(
    134.9633964 + 477198.8675055 * t + 0.0087414 * t2 + t3 / 69699.0 - t4 / 14712000.0,
  );
  const moonLatitudeArgDeg = normalizeDeg(
    93.272095 - 0.0036539 * t2 - t3 / 3526000.0 + t4 / 863310000.0 + 483202.0175233 * t,
  );
  // Eccentricity factor of Earth's orbit.
  const e = 1.0 - 0.002516 * t - 0.0000074 * t2;

  const m = sunAnomalyDeg * DEG_TO_RAD;
  const mp = moonAnomalyDeg * DEG_TO_RAD;
  const f = moonLatitudeArgDeg * DEG_TO_RAD;

  const correctionDays =
    -0.4072 * Math.sin(mp) +
    0.17241 * e * Math.sin(m) +
    0.01608 * Math.sin(2 * mp) +
    0.01039 * Math.sin(2 * f) +
    0.00739 * e * Math.sin(mp - m) -
    0.00514 * e * Math.sin(mp + m) +
    0.00208 * e * e * Math.sin(2 * m) -
    0.00111 * Math.sin(mp - 2 * f) -
    0.00057 * Math.sin(mp + 2 * f) +
    0.00056 * e * Math.sin(2 * mp + m) -
    0.00042 * Math.sin(3 * mp) +
    0.00042 * e * Math.sin(m + 2 * f) +
    0.00038 * e * Math.sin(m - 2 * f) -
    0.00024 * e * Math.sin(2 * mp - m);

  return jdeMean + correctionDays;
}

/** Julian Date (UT) of lunation k's New Moon: TT result minus ΔT. */
function newMoonJdUt(k) {
  const jde = trueNewMoonJde(k);
  const approxYear = 1900.0 + (jde - EPOCH_JDE) / 365.25;
  return jde - deltaTSeconds(approxYear) / 86400.0;
}

/** Local JDN (time zone tz) of the day holding lunation k's New Moon. */
function newMoonDay(k, tz = VIETNAM_TIME_ZONE) {
  const localJd = newMoonJdUt(k) + tz / 24.0;
  return Math.floor(localJd + 0.5);
}

// ---------------------------------------------------------------------------
// sun_longitude.dart — Meeus ch. 25, low accuracy, with nutation and aberration.
// ---------------------------------------------------------------------------

/** Apparent geocentric solar longitude in radians, [0, 2π); jd is TT. */
function sunLongitude(jd) {
  const t = (jd - 2451545.0) / 36525.0;

  const meanLongitudeDeg = normalizeDeg(280.46646 + t * (36000.76983 + t * 0.0003032));
  const meanAnomalyDeg = 357.52911 + t * (35999.05029 - t * 0.0001537);
  const meanAnomalyRad = meanAnomalyDeg * DEG_TO_RAD;

  const centerDeg =
    (1.914602 - t * (0.004817 + t * 0.000014)) * Math.sin(meanAnomalyRad) +
    (0.019993 - 0.000101 * t) * Math.sin(2 * meanAnomalyRad) +
    0.000289 * Math.sin(3 * meanAnomalyRad);

  const trueLongitudeDeg = meanLongitudeDeg + centerDeg;

  const omegaDeg = 125.04 - 1934.136 * t;
  const apparentLongitudeDeg = trueLongitudeDeg - 0.00569 - 0.00478 * Math.sin(omegaDeg * DEG_TO_RAD);

  return normalizeDeg(apparentLongitudeDeg) * DEG_TO_RAD;
}

// ---------------------------------------------------------------------------
// solar_term.dart — solar-term sectors at local midnight, winter solstice day.
// ---------------------------------------------------------------------------

/** Apparent solar longitude (degrees) at local 00:00 of localJdn. */
function sunLongitudeDegAtLocalMidnight(localJdn, tz) {
  const jdUt = localJdn - 0.5 - tz / 24.0;
  const approxYear = 1900.0 + (localJdn - 2415021) / 365.25;
  const jdTt = jdUt + deltaTSeconds(approxYear) / 86400.0;
  return sunLongitude(jdTt) * RAD_TO_DEG;
}

/** Index 0–11 of the 30° principal-term sector at local midnight (9 = Đông chí, 270°). */
function majorSolarTermIndex(localJdn, tz = VIETNAM_TIME_ZONE) {
  const lonDeg = sunLongitudeDegAtLocalMidnight(localJdn, tz);
  return Math.floor(lonDeg / 30.0) % 12;
}

/** Index 0–23 of the 15° solar-term sector at local midnight (0 = Xuân phân, 18 = Đông chí). */
function solarTermIndex(localJdn, tz = VIETNAM_TIME_ZONE) {
  const lonDeg = sunLongitudeDegAtLocalMidnight(localJdn, tz);
  return Math.floor(lonDeg / 15.0) % 24;
}

/** Angle difference folded into [-180, 180]. */
function normalizeDegDiff(diff) {
  let d = normalizeDeg(diff);
  if (d > 180.0) d -= 360.0;
  return d;
}

/** Refine a TT Julian Date to the instant the Sun reaches targetDeg (mean rate 0.9856°/day). */
function refineLongitudeCrossing(targetDeg, guessJdTt) {
  let jd = guessJdTt;
  for (let i = 0; i < 8; i++) {
    const lonDeg = sunLongitude(jd) * RAD_TO_DEG;
    const diff = normalizeDegDiff(targetDeg - lonDeg);
    jd += diff / 0.9856;
  }
  return jd;
}

const winterSolsticeCache = new Map();

/**
 * Local JDN of the civil day that contains the instant the Sun reaches 270° in December
 * of Gregorian year `year`: day scan for the sector change, refine the instant, then take
 * the local day holding that instant (same convention as newMoonDay).
 */
function winterSolsticeJdn(year, tz = VIETNAM_TIME_ZONE) {
  const cacheKey = `${year}|${tz}`;
  const cached = winterSolsticeCache.get(cacheKey);
  if (cached !== undefined) return cached;

  let coarseJdn = jdn(1, 12, year);
  while (majorSolarTermIndex(coarseJdn, tz) !== 9) coarseJdn++;

  const approxYear = year;
  const guessJdUt = coarseJdn - 0.5 - tz / 24.0;
  const guessJdTt = guessJdUt + deltaTSeconds(approxYear) / 86400.0;
  const crossingJdTt = refineLongitudeCrossing(270.0, guessJdTt);
  const crossingJdUt = crossingJdTt - deltaTSeconds(approxYear) / 86400.0;
  const crossingLocalJd = crossingJdUt + tz / 24.0;
  const result = Math.floor(crossingLocalJd + 0.5);

  winterSolsticeCache.set(cacheKey, result);
  return result;
}

// ---------------------------------------------------------------------------
// lunar_month.dart — month-11 cycles, leap month, month numbers.
// ---------------------------------------------------------------------------

/** Coarse local JDN of lunation k = 0; only a starting point for the search below. */
const ROUGH_K0_JDN = 2415021;

/** The lunation k with newMoonDay(k) <= localJdn < newMoonDay(k + 1). */
function lunationIndexForJdn(localJdn, tz = VIETNAM_TIME_ZONE) {
  let k = Math.floor((localJdn - ROUGH_K0_JDN) / SYNODIC_MONTH_DAYS) - 1;
  while (newMoonDay(k + 1, tz) <= localJdn) k++;
  while (newMoonDay(k, tz) > localJdn) k--;
  return k;
}

/**
 * Lunation index of month 11 (the month holding the winter solstice) at or before lunation k:
 * the latest candidate among the solstices of the Gregorian years around k's start.
 */
function month11IndexForLunation(k, tz) {
  const yearGuess = dateFromJdn(newMoonDay(k, tz)).year;
  let best = -Infinity;
  for (const y of [yearGuess - 1, yearGuess, yearGuess + 1]) {
    const candidate = lunationIndexForJdn(winterSolsticeJdn(y, tz), tz);
    if (candidate <= k && candidate > best) best = candidate;
  }
  return best;
}

const cycleCache = new Map();

/**
 * Months from month 11 (lunation ka11) up to, not including, the next month 11:
 * 12 entries, or 13 with a leap month. In a 13-month cycle the first month after
 * month 11 that holds no principal term (same 30° sector at its first midnight and at
 * the next month's first midnight) is leap and repeats the previous number.
 */
function cycleMonths(ka11, tz) {
  const cacheKey = `${ka11}|${tz}`;
  const cached = cycleCache.get(cacheKey);
  if (cached !== undefined) return cached;

  const a11Jdn = newMoonDay(ka11, tz);
  const yearOfA11 = dateFromJdn(a11Jdn).year;
  const nextSolsticeJdn = winterSolsticeJdn(yearOfA11 + 1, tz);
  const kb11 = lunationIndexForJdn(nextSolsticeJdn, tz);
  const cycleLength = kb11 - ka11;

  const entries = [{ k: ka11, number: 11, isLeap: false }];
  let number = 11;
  let leapAssigned = false;
  for (let offset = 1; offset < cycleLength; offset++) {
    const k = ka11 + offset;
    const monthStart = newMoonDay(k, tz);
    const nextMonthStart = newMoonDay(k + 1, tz);
    const lacksMajorTerm = majorSolarTermIndex(monthStart, tz) === majorSolarTermIndex(nextMonthStart, tz);
    if (!leapAssigned && cycleLength === 13 && lacksMajorTerm) {
      entries.push({ k, number, isLeap: true });
      leapAssigned = true;
    } else {
      number = (number % 12) + 1;
      entries.push({ k, number, isLeap: false });
    }
  }

  cycleCache.set(cacheKey, entries);
  return entries;
}

/** Month number, leap flag and lunar year of lunation k (year changes at lunar 1/1). */
function resolveMonth(k, tz) {
  const ka11 = month11IndexForLunation(k, tz);
  const yearOfA11 = dateFromJdn(newMoonDay(ka11, tz)).year;
  const entry = cycleMonths(ka11, tz).find((e) => e.k === k);
  const lunarYear = yearOfA11 + (entry.number === 11 || entry.number === 12 ? 0 : 1);
  return { number: entry.number, isLeap: entry.isLeap, lunarYear };
}

// ---------------------------------------------------------------------------
// Public API (lunar_calendar.dart: solarToLunar).
// ---------------------------------------------------------------------------

/**
 * Vietnamese lunar date of a Gregorian date (UTC+7).
 * @returns {{day:number, month:number, year:number, isLeapMonth:boolean}}
 * @throws {RangeError} for an invalid date or a year outside 1900–2100.
 */
function solarToLunar(y, m, d) {
  if (![y, m, d].every(Number.isInteger) || y < MIN_YEAR || y > MAX_YEAR) {
    throw new RangeError(`Date out of range ${MIN_YEAR}–${MAX_YEAR}: ${y}-${m}-${d}`);
  }
  const n = jdn(d, m, y);
  const back = dateFromJdn(n);
  if (back.year !== y || back.month !== m || back.day !== d) {
    throw new RangeError(`Invalid date: ${y}-${m}-${d}`);
  }
  const k = lunationIndexForJdn(n, VIETNAM_TIME_ZONE);
  const resolved = resolveMonth(k, VIETNAM_TIME_ZONE);
  return {
    day: n - newMoonDay(k, VIETNAM_TIME_ZONE) + 1,
    month: resolved.number,
    year: resolved.lunarYear,
    isLeapMonth: resolved.isLeap,
  };
}

// ---------------------------------------------------------------------------
// Sexagenary day/year names and traditional hour spirits (table look-ups).
// ---------------------------------------------------------------------------

function canChiDay(y,m,d){const can=["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"],chi=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],n=jdn(d,m,y);return `${can[(n+9)%10]} ${chi[(n+1)%12]}`;}

function canChiYear(year){const can=["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"],chi=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],n=(year-1984+6000)%60;return `${can[n%10]} ${chi[n%12]}`;}

function goodHours(y,m,d){const chi=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],spirits=["Thanh Long","Minh Đường","Thiên Hình","Chu Tước","Kim Quỹ","Kim Đường","Bạch Hổ","Ngọc Đường","Thiên Lao","Huyền Vũ","Tư Mệnh","Câu Trận"],n=jdn(d,m,y),gov=(n+1)%12,origin=(2*((gov-2+12)%6))%12;return chi.map((branch,i)=>{const spirit=(i-origin+12)%12;return {branch,from:(2*i+23)%24,to:(2*i+1)%24,name:spirits[spirit],good:[0,1,4,5,7,10].includes(spirit)};});}

export { jdn, solarToLunar, canChiDay, canChiYear, goodHours };
// Lower-level helpers, exported for tests (test/jpl.test.mjs).
export { dateFromJdn, newMoonDay, solarTermIndex };
