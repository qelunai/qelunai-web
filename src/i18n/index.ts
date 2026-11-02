import type { Locale, PageId } from './types';

export type { Block, FeatureId, Locale, PageId } from './types';

export const defaultLocaleCode = 'vi';

export const email = 'support@qelunai.com';

const files = import.meta.glob<{ default: Locale }>('./locales/*.ts', { eager: true });

export const locales: Locale[] = Object.values(files)
  .map((f) => f.default)
  .sort((a, b) => a.order - b.order);

export const defaultLocale = locales.find((l) => l.code === defaultLocaleCode)!;

/** Path of each page below the language prefix. */
export const pageSlugs: Record<PageId, string> = {
  home: '',
  privacy: 'privacy/',
  support: 'support/',
  deleteAccount: 'delete-account/',
  terms: 'terms/',
  calendar: 'lich-am/',
  hours: 'gio-hoang-dao/',
  iching: 'kinh-dich/',
  testers: 'testers/',
  download: 'tai/',
  blog: 'blog/',
  method: 'phuong-phap/',
  glossary: 'tu-dien/',
};

export const pages = Object.keys(pageSlugs) as PageId[];

/** Pages marked `noindex` and left out of the sitemap, e.g. the store redirect behind the share-card QR code. */
export const noindexPages: PageId[] = ['download'];

export function pathFor(locale: Locale | string, page: PageId = 'home'): string {
  const code = typeof locale === 'string' ? locale : locale.code;
  return `${code === defaultLocaleCode ? '/' : `/${code}/`}${pageSlugs[page]}`;
}

export function getLocale(code: string | undefined): Locale | undefined {
  return locales.find((l) => l.code === code);
}

/** `getStaticPaths` for a `[...lang]` route: the default language at the root, the others under `/<code>/`. */
export function localePaths() {
  return locales.map((locale) => ({
    params: { lang: locale.code === defaultLocaleCode ? undefined : locale.code },
    props: { locale },
  }));
}

/** One language version of a page: hreflang tags, the language menu and the sitemap list these. */
export interface Alternate {
  code: string;
  /** hreflang code (BCP 47), the same as `<html lang>`, e.g. `zh-Hans`. */
  hreflang: string;
  htmlLang: string;
  ogLocale: string;
  nativeName: string;
  menuLabel: string;
  href: string;
}

/** Every language version of `page`. */
export function alternatesFor(page: PageId): Alternate[] {
  return locales.map(({ code, htmlLang, ogLocale, nativeName, menuLabel }) => ({
    code,
    hreflang: htmlLang,
    htmlLang,
    ogLocale,
    nativeName,
    menuLabel,
    href: pathFor(code, page),
  }));
}

/** `**bold**` to `<strong>`, the support address and bare URLs to links, after escaping. */
export function rich(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // URLs are ASCII; stopping at the first other character keeps Chinese and Korean text after a URL out of the link.
    .replace(/https?:\/\/[^\s<\u0080-\uffff]+[^\s<.,;:)\u0080-\uffff]/g, (url) => `<a href="${url}" rel="noopener">${url}</a>`)
    .replace(/support@qelunai\.com/g, `<a href="mailto:${email}">${email}</a>`);
}
