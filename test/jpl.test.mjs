// Checks src/lib/vn-calendar.mjs against NASA JPL DE440s (test/fixtures/README.md),
// independent of any lunar-calendar program. Same method and tolerances as
// qelunai-lunar/test/jpl_test.dart: the truncated Meeus series are accurate to well under
// a minute for New Moons and about 0.01° (≈15 minutes) for the Sun, so a disagreement is
// accepted only when the JPL instant is that close to local midnight.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { solarToLunar, solarTermIndex, jdn } from '../src/lib/vn-calendar.mjs';

const NEW_MOON_TOLERANCE_MS = 2 * 60 * 1000;
const SOLAR_TERM_TOLERANCE_MS = 10 * 60 * 1000;
const DAY_MS = 86400 * 1000;

const readRows = (name) =>
  readFileSync(new URL(`./fixtures/${name}`, import.meta.url), 'utf8').trim().split('\n').slice(1);

/** Local UTC+7 wall-clock string parsed as if UTC, so date parts read back unchanged. */
const parseLocal = (s) => new Date(`${s}Z`);

function toNearestMidnightMs(t) {
  const midnight = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
  const a = t.getTime() - midnight;
  return Math.min(a, DAY_MS - a);
}

test('every New Moon falls on the JPL day, except within 2 minutes of midnight', () => {
  const outside = [];
  const tolerated = [];
  for (const line of readRows('jpl_new_moons.csv')) {
    const t = parseLocal(line);
    const y = t.getUTCFullYear();
    if (y < 1900 || y > 2100) continue;
    const lunar = solarToLunar(y, t.getUTCMonth() + 1, t.getUTCDate());
    if (lunar.day === 1) continue;
    if (toNearestMidnightMs(t) <= NEW_MOON_TOLERANCE_MS) tolerated.push(line);
    else outside.push(`${line}: got ${JSON.stringify(lunar)}`);
  }
  assert.deepEqual(outside, []);
  // 1944-06-20 23:59:17 and 1967-07-07 23:59:59.
  assert.ok(tolerated.length <= 2, tolerated.join(', '));
});

test('solar-term index at every local midnight matches JPL, except within 10 minutes of a crossing', () => {
  const rows = readRows('jpl_solar_terms.csv').map((l) => {
    const [index, start] = l.split(',');
    return { index: Number(index), start: parseLocal(start).getTime() };
  });
  const outside = [];
  let tolerated = 0;
  let i = 0;
  for (let d = Date.UTC(1900, 0, 1); new Date(d).getUTCFullYear() <= 2100; d += DAY_MS) {
    while (i + 1 < rows.length && rows[i + 1].start <= d) i++;
    const expected = rows[i].index;
    const date = new Date(d);
    const got = solarTermIndex(jdn(date.getUTCDate(), date.getUTCMonth() + 1, date.getUTCFullYear()));
    if (got === expected) continue;
    const nearest = Math.min(Math.abs(rows[i].start - d), Math.abs(rows[i + 1].start - d));
    if (nearest <= SOLAR_TERM_TOLERANCE_MS) tolerated++;
    else outside.push(`${date.toISOString().slice(0, 10)}: got ${got}, JPL ${expected}`);
  }
  assert.deepEqual(outside, []);
  assert.ok(tolerated <= 11, `tolerated ${tolerated}`);
});
