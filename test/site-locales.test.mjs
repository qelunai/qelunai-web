// Checks the built site in dist/ for all four languages; run `npm run build` first.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { canChiDay, goodHours } from '../src/lib/vn-calendar.mjs';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');
const site = 'https://qelunai.com/';

/** URL prefix and `<html lang>` (also the hreflang code) of each language. */
const langs = { vi: ['', 'vi'], en: ['en/', 'en'], zh: ['zh/', 'zh-Hans'], ko: ['ko/', 'ko'] };
const indexable = ['', 'privacy/', 'support/', 'delete-account/', 'terms/', 'lich-am/', 'gio-hoang-dao/', 'kinh-dich/', 'testers/', 'blog/', 'phuong-phap/', 'tu-dien/', 'lich-dang-ky/'];
const noindex = ['tai/'];

/** Published posts per language, from the built JSON feeds: slug → URL path. */
const posts = Object.fromEntries(
  Object.entries(langs).map(([code, [prefix]]) => [
    code,
    new Map(JSON.parse(read(`feeds/blog-${code}.json`)).items.map((item) => [item.id, `${prefix}blog/${item.id}/`])),
  ]),
);

const htmlFiles = (dir = '') =>
  readdirSync(new URL(dir, dist), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? htmlFiles(`${dir}${e.name}/`) : e.name.endsWith('.html') ? [`${dir}${e.name}`] : [],
  );

const unescape = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/**
 * What a reader sees: text nodes plus the title, meta description and social
 * text, alt, title and aria-label. Scripts, styles and data attributes are
 * left out, and so are the language menu links, which name each language in
 * its own tongue, cited titles and other text marked with their own `lang`.
 */
function visibleText(html) {
  const meta = [...html.matchAll(/<meta (?:name|property)="(?:description|keywords|og:title|og:description|og:image:alt|twitter:title|twitter:description)" content="([^"]*)"/g)].map((m) => m[1]);
  const body = html
    .replace(/<script\b[\s\S]*?<\/script>/g, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/g, ' ')
    .replace(/<head>[\s\S]*?<\/head>/, (head) => (head.match(/<title>[\s\S]*?<\/title>/) ?? [''])[0])
    .replace(/<a [^>]*\bhreflang="[^"]*"[^>]*>[\s\S]*?<\/a>/g, ' ')
    .replace(/<cite lang="[^"]*">[\s\S]*?<\/cite>/g, ' ')
    // Text marked with its own language and no child elements, e.g. the Vietnamese and English terms on /tu-dien/.
    .replace(/<(\w+)\b[^>]*\slang="[^"]*"[^>]*>[^<]*<\/\1>/g, ' ');
  const attrs = [...body.matchAll(/\s(?:alt|title|aria-label)="([^"]*)"/g)].map((m) => m[1]);
  const text = body.replace(/<[^>]+>/g, '\n');
  return unescape([text, ...attrs, ...meta].join('\n'));
}

const vietnamese = /[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]/i;

/** Names that stay in Latin letters in every language. */
const names = [
  'Firebase Authentication', 'Firebase AI Logic', 'Firebase App Check', 'Firebase Crashlytics', 'Google Analytics for Firebase',
  'Firebase Cloud Messaging', 'Firebase Performance Monitoring', 'Google Gemini Developer API', 'Apple App Attest',
  'Apple Push Notification service',
  'Google Analytics', 'Google AdMob', 'Google Play', 'Google Cloud', 'Cloud Firestore', 'App Store', 'App Check',
  'Apple ID', 'Qelunai Plus', 'Ho Ngoc Duc', 'TestFlight', 'iPhone', 'iPad', 'Android',
];
/** Three or more Latin words in a row, once URLs, emails and the names above are gone: an untranslated phrase. */
function englishLeft(text) {
  let s = text.replace(/https?:\/\/\S+/g, ' ').replace(/[\w.+-]+@[\w.-]+/g, ' ');
  for (const n of names) s = s.split(n).join(' ');
  return s.match(/\b[A-Za-z][A-Za-z'’-]*(?:[ ,.]+[A-Za-z][A-Za-z'’-]*){2,}/g) ?? [];
}

test('every page exists in all four languages with its html lang', () => {
  for (const [code, [prefix, lang]] of Object.entries(langs)) {
    for (const page of [...indexable, ...noindex]) {
      const path = `${prefix}${page}index.html`;
      assert.ok(existsSync(new URL(path, dist)), `${code}: missing ${path}`);
      assert.match(read(path), new RegExp(`<html lang="${lang}">`), path);
    }
  }
});

test('indexable pages list all four versions in hreflang and the language menu', () => {
  for (const [prefix] of Object.values(langs)) {
    for (const page of indexable) {
      const path = `${prefix}${page}`;
      const html = read(`${path}index.html`);
      assert.match(html, /<meta name="robots" content="index,/, path);
      for (const [target, lang] of Object.values(langs)) {
        assert.ok(html.includes(`<link rel="alternate" hreflang="${lang}" href="${site}${target}${page}">`), `${path}: hreflang ${lang}`);
        assert.ok(html.includes(`<a href="/${target}${page}" hreflang="${lang}"`), `${path}: menu link ${lang}`);
      }
      assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${site}${page}">`), `${path}: x-default`);
    }
  }
});

test('/tai/ stays noindex in every language and out of the sitemap', () => {
  const xml = read('sitemap.xml');
  for (const [prefix] of Object.values(langs)) {
    for (const page of noindex) {
      const html = read(`${prefix}${page}index.html`);
      assert.match(html, /<meta name="robots" content="noindex, follow">/, `${prefix}${page}`);
      assert.doesNotMatch(html, /hreflang="[^"]*" href="https:/, `${prefix}${page}: no hreflang`);
      assert.ok(!xml.includes(`${site}${prefix}${page}`), `sitemap has ${prefix}${page}`);
    }
  }
});

/** Language versions of a post: [code, path] for each language it is published in. */
const versionsOf = (slug) => Object.entries(posts).flatMap(([code, m]) => (m.has(slug) ? [[code, m.get(slug)]] : []));

test('the sitemap has every indexable page in all four languages and every post in its languages, with alternates', () => {
  const xml = read('sitemap.xml');
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const locs = urls.map((u) => u.match(/<loc>([^<]+)<\/loc>/)[1]).sort();
  const want = [
    ...Object.values(langs).flatMap(([prefix]) => indexable.map((page) => `${site}${prefix}${page}`)),
    ...Object.values(posts).flatMap((m) => [...m.values()].map((path) => `${site}${path}`)),
  ].sort();
  assert.deepEqual(locs, want);
  for (const url of urls) {
    const loc = url.match(/<loc>([^<]+)<\/loc>/)[1];
    const links = [...url.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => `${m[1]} ${m[2]}`).sort();
    const slug = loc.match(/blog\/([^/]+)\/$/)?.[1];
    const versions = slug ? versionsOf(slug) : Object.entries(langs).map(([code, [prefix]]) => [code, `${prefix}${loc.slice(site.length).replace(/^(en|zh|ko)\//, '')}`]);
    const xDefault = (versions.find(([code]) => code === 'vi') ?? versions[0])[1];
    const expected = [...versions.map(([code, path]) => `${langs[code][1]} ${site}${path}`), `x-default ${site}${xDefault}`].sort();
    assert.deepEqual(links, expected, loc);
  }
});

test('posts link only to the languages they are written in; the menu sends the rest to their article list', () => {
  const slugs = new Set(Object.values(posts).flatMap((m) => [...m.keys()]));
  for (const slug of slugs) {
    const versions = versionsOf(slug);
    for (const [, path] of versions) {
      const html = read(`${path}index.html`);
      const links = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)].map((m) => `${m[1]} ${m[2]}`).sort();
      const xDefault = (versions.find(([code]) => code === 'vi') ?? versions[0])[1];
      assert.deepEqual(links, [...versions.map(([code, p]) => `${langs[code][1]} ${site}${p}`), `x-default ${site}${xDefault}`].sort(), path);
      assert.ok(html.includes(`<link rel="canonical" href="${site}${path}">`), `${path}: canonical`);
      assert.match(html, /<meta property="og:type" content="article">/, path);
      assert.match(html, /"@type":"BlogPosting"/, path);
      for (const [code, [prefix, lang]] of Object.entries(langs)) {
        const target = posts[code].get(slug) ?? `${prefix}blog/`;
        assert.ok(html.includes(`<a href="/${target}" hreflang="${lang}"`), `${path}: menu link ${lang}`);
      }
    }
  }
});

test('Chinese and Korean pages have no Vietnamese and no leftover English sentences', () => {
  for (const code of ['zh', 'ko']) {
    for (const file of htmlFiles(`${code}/`)) {
      const text = visibleText(read(file));
      const vi = text.split('\n').filter((line) => vietnamese.test(line));
      assert.deepEqual(vi, [], `${file}: Vietnamese text`);
      assert.deepEqual(englishLeft(text), [], `${file}: English text`);
    }
  }
});

test('the Chinese and Korean lunar tools name every stem, branch and hour spirit', () => {
  const names = new Set();
  for (let d = 1; d <= 60; d++) {
    for (const part of canChiDay(2026, 1, d).split(' ')) names.add(part);
    for (const h of goodHours(2026, 1, d)) names.add(h.branch).add(h.name);
  }
  assert.equal(names.size, 10 + 12 + 12);
  for (const code of ['zh', 'ko']) {
    for (const page of ['lich-am/', 'gio-hoang-dao/']) {
      const [, json] = read(`${code}/${page}index.html`).match(/data-i18n="([^"]*)"/);
      const { terms } = JSON.parse(unescape(json));
      for (const n of names) assert.ok(terms[n] && !vietnamese.test(terms[n]) && !/[A-Za-z]/.test(terms[n]), `${code}/${page}: ${n}`);
    }
  }
});

test('every internal link and asset points at a built file', () => {
  const exists = (path) => {
    const p = decodeURI(path.split(/[?#]/)[0]).replace(/^\//, '');
    return p === '' || existsSync(new URL(p, dist)) && (!p.endsWith('/') || existsSync(new URL(`${p}index.html`, dist)));
  };
  for (const file of htmlFiles()) {
    const html = read(file);
    const refs = [
      ...[...html.matchAll(/\s(?:href|src)="(\/(?!\/)[^"]*)"/g)].map((m) => m[1]),
      ...[...html.matchAll(/\ssrcset="([^"]*)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0])),
    ];
    for (const ref of refs.filter((r) => r.startsWith('/'))) assert.ok(exists(ref), `${file} links to ${ref}`);
  }
});

test('every .ics link on /lich-dang-ky/ points at a calendar file in dist/lich/', () => {
  const calendars = ['le-tet', 'ram-mung-mot', 'tiet-khi'];
  const forms = [
    [/^\/lich\/([^/]+\.ics)$/, 'download'],
    [/^webcal:\/\/qelunai\.com\/lich\/([^/]+\.ics)$/, 'apple'],
    [/^https:\/\/calendar\.google\.com\/calendar\/r\?cid=webcal:\/\/qelunai\.com\/lich\/([^/]+\.ics)$/, 'google'],
  ];
  for (const [code, [prefix]] of Object.entries(langs)) {
    const path = `${prefix}lich-dang-ky/index.html`;
    const hrefs = [...read(path).matchAll(/\shref="([^"]*\.ics)"/g)].map((m) => unescape(m[1]));
    const fileLang = code === 'vi' ? 'vi' : 'en';
    const want = calendars.flatMap((c) => forms.map(([, kind]) => `${kind} ${c}.${fileLang}.ics`)).sort();
    const got = hrefs
      .map((href) => {
        const form = forms.find(([re]) => re.test(href));
        assert.ok(form, `${path}: unexpected .ics link ${href}`);
        const file = href.match(form[0])[1];
        assert.ok(existsSync(new URL(`lich/${file}`, dist)), `${path}: ${href} has no dist/lich/${file}`);
        return `${form[1]} ${file}`;
      })
      .sort();
    assert.deepEqual(got, want, path);
  }
  for (const c of calendars) {
    for (const l of ['vi', 'en']) {
      const ics = read(`lich/${c}.${l}.ics`);
      assert.ok(ics.startsWith('BEGIN:VCALENDAR\r\n') && ics.endsWith('END:VCALENDAR\r\n'), `lich/${c}.${l}.ics`);
    }
  }
});
