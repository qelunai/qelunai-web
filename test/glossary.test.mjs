// Checks the built glossary page (/tu-dien/) in dist/ for all four languages; run `npm run build` first.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');
const glossary = JSON.parse(readFileSync(new URL('../src/data/glossary.json', import.meta.url), 'utf8'));
const repo = 'https://github.com/qelunai/vietnamese-culture-glossary';

const pages = { vi: 'tu-dien/', en: 'en/tu-dien/', zh: 'zh/tu-dien/', ko: 'ko/tu-dien/' };
const reviewNotice = { zh: '译文正在等待母语人士审校。', ko: '번역은 원어민 검토를 기다리고 있습니다.' };

const html = Object.fromEntries(Object.entries(pages).map(([code, path]) => [code, read(`${path}index.html`)]));
const ids = (page) => [...page.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);

test('the data file has unique kebab-case ids, known categories and related ids that exist', () => {
  const entryIds = glossary.entries.map((e) => e.id);
  assert.equal(new Set(entryIds).size, entryIds.length, 'duplicate entry id');
  const cats = new Set(glossary.categories.map((c) => c.id));
  for (const e of glossary.entries) {
    assert.match(e.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, e.id);
    assert.ok(cats.has(e.category), `${e.id}: category ${e.category}`);
    for (const r of e.related ?? []) assert.ok(entryIds.includes(r), `${e.id}: related ${r}`);
  }
});

for (const [code, path] of Object.entries(pages)) {
  test(`${path}: one entry per glossary entry, each with its anchor`, () => {
    const page = html[code];
    const entries = [...page.matchAll(/\sdata-entry="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(entries.length, glossary.entries.length);
    assert.deepEqual([...entries].sort(), glossary.entries.map((e) => e.id).sort());
    const all = ids(page);
    for (const e of glossary.entries) {
      assert.ok(all.includes(e.id), `missing id="${e.id}"`);
      assert.ok(page.includes(`href="#${e.id}"`), `missing link to #${e.id}`);
    }
  });

  test(`${path}: ids are unique and every #fragment link has a target`, () => {
    const all = ids(html[code]);
    assert.deepEqual(all.filter((id, i) => all.indexOf(id) !== i), []);
    for (const [, frag] of html[code].matchAll(/href="#([^"]+)"/g)) assert.ok(all.includes(frag), `#${frag}`);
  });

  test(`${path}: links to the data repo, names the license, has a hidden search box`, () => {
    assert.ok(html[code].includes(`href="${repo}"`), 'repo link');
    assert.ok(html[code].includes('CC BY 4.0'), 'license');
    assert.match(html[code], /<input\b[^>]*type="search"[^>]*\shidden/, 'search input hidden without JS');
    assert.ok(!html[code].includes('[Chưa kiểm chứng]'));
  });
}

test('the Chinese and Korean pages say the translation awaits native review', () => {
  for (const [code, text] of Object.entries(reviewNotice)) assert.ok(html[code].includes(text), code);
  for (const code of ['vi', 'en']) for (const text of Object.values(reviewNotice)) assert.ok(!html[code].includes(text), code);
});

test('the glossary is in the sitemap and in every footer', () => {
  const xml = read('sitemap.xml');
  for (const path of Object.values(pages)) assert.ok(xml.includes(`<loc>https://qelunai.com/${path}</loc>`), path);
  for (const [code, path] of Object.entries(pages)) {
    const home = read(`${path.replace('tu-dien/', '')}index.html`);
    assert.ok(home.includes(`href="/${path}"`), `${code} footer`);
  }
});
