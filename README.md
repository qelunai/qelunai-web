# qelunai-web

Showcase and store-support site for the Qelunai app (Vietnamese lunar calendar, I Ching, Four Pillars, feng shui), live at <https://qelunai.com>. The look follows the app's "Sơn mài" (lacquer) design.

Static [Astro](https://astro.build) site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Repo: https://github.com/qelunai/qelunai-web (org `qelunai`, chuyển từ `tdduydev/qelunai-web` ngày 2026-11-02). Tên miền qelunai.com được xác minh cho GitHub Pages ở org `qelunai` (bản ghi TXT `_github-pages-challenge-qelunai.qelunai.com` trên Cloudflare); bản ghi CNAME `qelunai.com` trỏ `qelunai.github.io` (proxied).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

Node 22 or newer.

## Layout

| Path | What it holds |
| --- | --- |
| `src/i18n/locales/*.ts` | All copy, one file per language (`vi` at `/`, `en` at `/en/`, `zh` at `/zh/`, `ko` at `/ko/`) |
| `src/i18n/index.ts` | Default language, page slugs, `pathFor`, `localePaths`, `alternatesFor` |
| `src/i18n/growth.ts` | Copy for `/lich-am/`, `/gio-hoang-dao/` and `/kinh-dich/`, and the zh/ko names of stems, branches and hour spirits |
| `src/layouts/Base.astro` | `<head>`, SEO tags, hreflang, JSON-LD, header, footer |
| `src/i18n/methodology.ts`, `src/pages/[...lang]/phuong-phap.astro` | "Phương pháp & độ chính xác" page (see below) |
| `src/data/glossary.json`, `src/i18n/glossary.ts`, `src/pages/[...lang]/tu-dien.astro` | Vietnamese culture glossary page `/tu-dien/`; the JSON is copied from https://github.com/qelunai/vietnamese-culture-glossary (CC BY 4.0), tests: `test/glossary.test.mjs` |
| `src/i18n/subscribe.ts`, `src/pages/[...lang]/lich-dang-ky.astro`, `public/lich/*.ics` | Calendar subscription page and its `.ics` files (see "Cập nhật lịch .ics hằng năm") |
| `src/layouts/LegalPage.astro` | Shell for the privacy, support, delete-account and terms pages |
| `src/components/Landing.astro` | The landing page sections |
| `src/components/LandingPage.astro` | Page wrapper that adds the app and FAQ structured data |
| `src/components/StoreButtons.astro` | Store badges; links are `href="#"` placeholders marked `data-store-link` |
| `src/pages/[...lang]/*.astro` | One route per page, built for every language |
| `src/content/privacy*.md` | Privacy policy copied from the app repo (see below) |
| `src/lib/policy.ts` | Picks the policy for a language and renders it |
| `src/scripts/reveal.ts` | Fade-in on scroll; skipped under reduced motion |
| `src/styles/global.css` | Tokens and all styles |
| `src/assets/sonmai/` | Lacquer art and feature medallions from the app |
| `src/assets/shots/<lang>/` | Screenshots of the real app, optimised at build time |
| `src/pages/[...lang]/tai.astro`, `src/i18n/download.ts` | Download page behind the share-card QR code (see below) |
| `src/lib/store-pick.mjs` | Store URLs and the user-agent store chooser used by `/tai/` |
| `src/pages/sitemap.xml.ts`, `robots.txt.ts` | Generated from the page and locale lists; pages in `noindexPages` are left out |
| `public/` | `CNAME`, `app-ads.txt`, favicons, fonts, `og.png`, web manifest |
| `src/content/blog/<lang>/<slug>.md` | Blog posts (see "Viết bài"); schema in `src/content.config.ts` |
| `src/assets/blog/` | Post covers |
| `src/lib/blog.ts`, `src/lib/blog-core.mjs` | Post lists, translations, covers, the JSON feed and its HTML sanitiser |
| `src/pages/[...lang]/blog/` | `/blog/` list, post pages, `rss.xml` |
| `src/pages/feeds/blog-[lang].json.ts` | JSON feed the app reads (`docs/blog-contract.md`) |
| `scripts/notify-blog.mjs`, `.github/workflows/notify-blog.yml` | Push notification for new posts (see "Thông báo bài mới") |

## Privacy policy

The `/privacy/` and `/en/privacy/` pages are built from `src/content/privacy.md`, `/zh/privacy/` (Simplified Chinese, `lang="zh-Hans"`) from `privacy.zh.md` and `/ko/privacy/` (Korean) from `privacy.ko.md`. After the policy changes in the app repo, run

```sh
npm run sync:privacy                          # reads ../qelunai-app-ads/docs/legal/PRIVACY_POLICY.md
npm run sync:privacy -- path/to/PRIVACY_POLICY.md
```

and commit the updated files. The script also copies `PRIVACY_POLICY.zh.md` and `PRIVACY_POLICY.ko.md` from the same folder. In `privacy.md` Vietnamese comes before the `---` line, English after it; the zh and ko files hold one language each (the app's translations, which say the English version controls).

The zh and ko policy files already carry the app's line that they are translations, so the zh/ko privacy pages show no extra notice; the zh/ko terms and delete-account pages show `pages.translationNotice` (the Vietnamese or English version controls).

## Store links

When the listings are live, replace the `href="#"` of every element with `data-store-link="app-store"` or `data-store-link="google-play"` (in `StoreButtons.astro` and `Footer.astro`).

## Download page (`/tai/`)

`https://qelunai.com/tai/` (Vietnamese; also `/en/tai/`, `/zh/tai/`, `/ko/tai/`) is the single link for the QR code on the app's share card. On load, a small script calls `pickStore` and uses `location.replace` to send iPhone, iPad, iPod and iPadOS (Mac user agent with touch) to the App Store, and Android to Google Play. Desktops, unknown devices and browsers without JavaScript stay on the page, which shows plain links to both stores. No tracking. The page is `noindex` and not in the sitemap. Store URLs live in `src/lib/store-pick.mjs`; tests: `npm run test:store`.

## Add a language

1. Copy `src/i18n/locales/en.ts` to `src/i18n/locales/<code>.ts`.
2. Set `code`, `htmlLang` (also used as the hreflang code), `ogLocale`, `nativeName`, `menuLabel` and `order`, then translate every string. TypeScript (`satisfies Locale`) reports any missing key.
3. Add the language to `src/i18n/growth.ts` and `src/i18n/download.ts` (they fall back to Vietnamese and English), and to `langs` in `test/site-locales.test.mjs`.
4. Optionally add screenshots in `src/assets/shots/<code>/`; missing ones fall back to `vi`.
5. `npm run check`.

Every page at `/<code>/...`, the language switch, hreflang tags and sitemap entries are generated from the files in `locales/`. Vietnamese is the default at `/`; change `defaultLocaleCode` in `src/i18n/index.ts` to move it. A new full language also needs its own privacy text in `src/content/` and `src/lib/policy.ts`; without one it shows the English policy.

Chinese (`zh`, `lang="zh-Hans"`) and Korean (`ko`) are AI translations of the English copy, with terms taken from the app's `lib/l10n/` and `docs/release/SUBMISSION.md`; they have not been reviewed by native speakers. They have no screenshots of their own: the store images for those languages are framed composites, not raw app screens, so the pages use the Vietnamese shots. Chinese and Korean text uses system fonts (PingFang SC / Noto Sans SC, Apple SD Gothic Neo / Noto Sans KR); no extra font is downloaded.

## Viết bài

Mỗi bài là một file Markdown `src/content/blog/<ngôn ngữ>/<slug>.md`, ví dụ `src/content/blog/vi/gio-hoang-dao-la-gi.md`.

- `slug` (tên file) viết thường, không dấu, nối bằng `-`, và **giống nhau ở mọi ngôn ngữ** của cùng một bài: app và thông báo dùng nó làm mã bài. Bản dịch đặt cùng tên trong `en/`, `zh/`, `ko/`. Không bắt buộc dịch đủ; trang chỉ khai hreflang cho các bản có thật.
- Bài hiện ở `/blog/<slug>/` (tiếng Việt), `/en/blog/<slug>/`, `/zh/blog/<slug>/`, `/ko/blog/<slug>/`, trong danh sách `/…/blog/`, sitemap, RSS (`/…/blog/rss.xml`) và feed cho app `/feeds/blog-<lang>.json`.

Đầu file (frontmatter):

```yaml
---
title: Giờ hoàng đạo là gì và đọc thế nào cho đúng
summary: Tối đa 200 ký tự. Hiện ở danh sách, thẻ chia sẻ và làm nội dung thông báo.
date: 2026-10-31                 # giờ Việt Nam; hoặc 2026-10-31T07:00:00+07:00
updated: 2026-11-05              # tuỳ chọn, khi sửa nội dung đáng kể
cover: ../../../assets/blog/gio-hoang-dao-la-gi.jpg
coverAlt: Mô tả ảnh bìa cho người không xem được ảnh
tags: [giờ hoàng đạo, lịch âm]
appRoute: /xem-ngay              # tuỳ chọn: route go_router của tính năng liên quan, app hiện nút "Mở tính năng"
draft: true                      # tuỳ chọn: không đăng
notify: false                    # tuỳ chọn: đăng nhưng không gửi thông báo
sources:                         # nên có; hiện ở cuối bài
  - title: Hồ Ngọc Đức, "Vietnamese Calendar"
    url: https://honguyenviet.com/amlich/vncal_en.html
  - title: Jean Meeus, Astronomical Algorithms (sách, không cần url)
---
```

- Giá trị có dấu `: ` (hai chấm và dấu cách) phải đặt trong nháy: `title: 'Rằm và mùng một: vì sao…'`.
- `sources[].lang` (tuỳ chọn) là ngôn ngữ của tên nguồn khi khác ngôn ngữ bài; bỏ trống thì trang tự đoán.
- Bài có `date` ở tương lai chỉ hiện từ lần deploy đầu tiên sau ngày đó (site tĩnh), và **không** tự gửi thông báo; muốn báo thì gửi tay (xem dưới).
- Nội dung Markdown: dùng `##`/`###`, danh sách, **đậm**, *nghiêng*, link, trích dẫn, bảng. Feed cho app chỉ giữ các thẻ trong `docs/blog-contract.md`; bảng được đổi thành từng dòng `ô · ô`, link tương đối thành link tuyệt đối.
- Ảnh bìa: tỉ lệ khoảng 1.91:1, nên 1200×630, JPEG hoặc WebP, tối đa 200 KB, để trong `src/assets/blog/`. Trang tự tạo bản 1200×630 cho thẻ chia sẻ và feed; test báo lỗi nếu ảnh feed quá 200 KB.
- Hình trong bài: để ở `src/assets/blog/<slug>/`, chèn bằng Markdown có chú thích trong nháy: `![Mô tả đủ ý cho người không xem được ảnh](../../../assets/blog/<slug>/vong-12-gio.webp "Chú thích hiện dưới hình")`. Một đoạn chỉ chứa một hình có chú thích sẽ thành `<figure>` + `<figcaption>` (plugin `src/lib/figures.mjs`), có `width/height`, cả trên trang lẫn feed (URL tuyệt đối). Bốn ngôn ngữ dùng chung file hình, mỗi bản tự viết `alt` và chú thích bằng ngôn ngữ của bài. Hình không có chú thích thì nằm trong `<p>` như thường.
- Cuối mỗi bài (trang và feed) tự có dòng "Hình minh hoạ do AI vẽ" (`blog.aiArt` trong `src/i18n/locales/`).
- Bản `zh` và `ko` của các bài mẫu là **bản dịch máy, cần người bản ngữ duyệt**.

Xem trước: `npm run dev` rồi mở <http://localhost:4321/blog/>. Kiểm tra đầy đủ: `npm run check`.

Đăng bài: merge vào `main`. Workflow deploy build lại site, sau đó workflow thông báo chạy. Có thể viết ngay trên github.com: mở thư mục `src/content/blog/vi/` → **Add file → Create new file**, đặt tên `<slug>.md`; ảnh bìa tải lên `src/assets/blog/` bằng **Add file → Upload files**. Nên tạo nhánh và Pull Request để xem lại trước khi merge.

## Vẽ hình cho bài mới bằng Codex

Ảnh bìa và hình trong bài đều vẽ bằng Codex (ChatGPT imagegen), không tự vẽ bằng code, không lấy ảnh trên mạng.

- **Phong cách:** tranh sơn mài Việt Nam, nền sơn đen, đỏ son, vàng lá, vỏ trứng, nét vàng mảnh; cho Codex xem ảnh bìa của chính bài đó làm mẫu.
- **Không chữ trong hình:** không chữ, số, chữ Hán, nhãn, triện, chữ ký. Bốn ngôn ngữ dùng chung một hình, nên chữ và nhãn để ở chú thích hoặc văn bản bài. Sơ đồ cần nhãn mới hiểu thì vẽ không nhãn rồi giải thích bằng danh sách ngay dưới hình (ví dụ "đi theo chiều kim đồng hồ từ ô trên cùng: …").
- **Cỡ:** hình trong bài rộng 1200 px (thường 1200×800), WebP ≤ 150 KB; ảnh bìa 1200×630, ≤ 200 KB. Khi build, Astro nén lại hình trong bài (chất lượng `FIGURE_QUALITY` trong `src/lib/figures.mjs`); test báo lỗi nếu bản phát hành quá 150 KB. Hình nhiều hoạ tiết li ti (rạn, hạt, lá dày) khó nén: vẽ lại, dặn Codex dùng mảng màu sơn mài phẳng, ít chi tiết nhỏ.

Chạy trong một thư mục tạm ngoài repo, mỗi lệnh một hình:

```sh
mkdir -p /tmp/qelunai-blog-art/<slug>-1 && cd /tmp/qelunai-blog-art/<slug>-1
cat > prompt.txt <<'TXT'
Draw <mô tả hình, nói rõ số lượng và thứ tự, ví dụ "exactly 12 segments, clockwise from the top: …">.

Style: Vietnamese lacquer painting (sơn mài), matching the attached reference image: deep black lacquer
background, vermilion red, gold leaf and eggshell textures, fine gold lines. Landscape 3:2.
ABSOLUTELY NO text, letters, numbers, Chinese characters, labels, signatures, seals or watermarks.
Use image generation and save the final image as ./out.png in the current directory.
TXT
codex exec --skip-git-repo-check --sandbox workspace-write \
  -i <repo>/src/assets/blog/<slug>.jpg - < prompt.txt
# thu nhỏ và nén vào repo
sips -Z 1200 out.png --out small.png && cwebp -q 78 -m 6 small.png -o <repo>/src/assets/blog/<slug>/<tên>.webp
```

Mở từng hình ra xem trước khi đưa vào bài: không có chữ lạ, không méo, nội dung đúng (đếm số ô, số con giáp, thứ tự, chiều sáng của trăng…), không có gì nhạy cảm. Sai thì sửa prompt và vẽ lại, hoặc bỏ hình. Codex hết hạn mức thì để bài không có hình, không thay bằng hình tự vẽ.

## Thông báo bài mới

`.github/workflows/notify-blog.yml` chạy sau mỗi lần workflow "Deploy to GitHub Pages" chạy xong thành công cho một lần push vào `main`. `scripts/notify-blog.mjs` tìm các file bài **được thêm mới** trong commit vừa deploy (`git diff --diff-filter=A HEAD^ HEAD`; với merge commit là cả nhánh được merge). Sửa bài cũ không gửi lại. Bài bị bỏ qua nếu `draft: true`, `notify: false` hoặc `date` còn ở tương lai.

- Trước khi gửi, script đợi feed thật `https://qelunai.com/feeds/blog-<lang>.json` có bài (thử 10 lần, cách 30 giây), rồi lấy tiêu đề và `summary` từ feed. Nếu cả 10 lần đều bị HTTP 403 (Cloudflare chặn một số địa chỉ máy chủ GitHub, gặp ngày 31/10/2026) thì lấy tiêu đề và `summary` từ file bài trong repo rồi gửi, vì workflow chỉ chạy sau khi deploy đã thành công.
- Gửi qua FCM HTTP v1, mỗi (bài, ngôn ngữ) một lần, với condition `'blog' in topics && 'lang_<lang>' in topics`; ngôn ngữ chưa có bản dịch thì không gửi. Payload theo `docs/blog-contract.md` (kênh Android `push_news`, `thread-id` iOS `blog`).
- Mỗi lần chạy tối đa 3 bài, mới nhất trước; các bài còn lại chỉ ghi log, gửi tay nếu cần.
- Không muốn gửi thông báo cho một bài: đặt `notify: false` trước khi merge.

Gửi tay hoặc gửi lại: Actions → **Notify new blog posts** → **Run workflow**, nhập `slug`, chọn `lang` (`all` hoặc một ngôn ngữ). `dry_run` bật sẵn: chỉ in payload ra log, không gửi; bỏ chọn để gửi thật. Gửi tay bỏ qua `notify: false` nhưng vẫn không gửi bài nháp hay bài chưa tới ngày. Chạy thử trên máy: `node scripts/notify-blog.mjs --slug <slug> --dry-run`.

Xác thực bằng Workload Identity Federation, không dùng khoá JSON. Biến của repo (Settings → Secrets and variables → Actions → Variables):

| Biến | Giá trị |
| --- | --- |
| `GCP_WIF_PROVIDER` | `projects/253342915563/locations/global/workloadIdentityPools/github/providers/qelunai-web` |
| `GCP_BLOG_PUSH_SA` | `blog-push@qelunai.iam.gserviceaccount.com` (vai trò Firebase Cloud Messaging API Admin) |

Provider chỉ nhận token của repo `qelunai/qelunai-web` với ref `refs/heads/main`, nên chỉ chạy từ `main` mới gửi được. Thiếu một trong hai biến thì workflow in cảnh báo và kết thúc thành công, không gửi gì. Test của script không cần mạng: `npm run test:notify`.

## Phương pháp & độ chính xác (`/phuong-phap/`)

`/phuong-phap/` (also `/en/phuong-phap/`, `/zh/phuong-phap/`, `/ko/phuong-phap/`, the same slug in every language like the other pages) explains how the lunar calendar, leap months, solar terms, Can Chi and lucky hours are computed, what has been checked, and the limits. Copy lives in `src/i18n/methodology.ts`. Its only source is `METHODOLOGY.md` and `README.md` of the open-source library <https://github.com/qelunai/qelunai-lunar> (MIT): add nothing that is not stated there, and when those files change, update the page. Items the source marks [Chưa kiểm chứng] / [Unverified] are written as "chưa đối chiếu" / "not yet checked" or left out. The Chinese and Korean versions are AI translations of the English copy and have not been reviewed by native speakers.

## Cập nhật lịch .ics hằng năm (`/lich-dang-ky/`)

`/lich-dang-ky/` (also `/en/`, `/zh/`, `/ko/`) offers three subscribable calendars: `le-tet`, `ram-mung-mot`, `tiet-khi`. Files live in `public/lich/<calendar>.<vi|en>.ics`; the Vietnamese page links the `vi` files, the other languages the `en` files (the zh/ko pages say so). Copy is in `src/i18n/subscribe.ts` (zh and ko are AI translations of the English copy). The year range shown on the page is read from the files at build time. Keep the file names stable: subscribers' calendar apps keep fetching the same URLs.

The files are generated, not edited by hand. Source: the data repo `vietnamese-calendar-data` (`bin/ics.dart`, computed with `qelunai_lunar`, UTC+7). Each January:

```sh
cd ../vietnamese-calendar-data
dart run bin/ics.dart --year 2027      # events 2026–2032; DTSTAMP and UIDs stay stable
dart test
# commit there, then:
cp data/ics/*.ics ../qelunai-web/public/lich/
cd ../qelunai-web && npm run check     # the site test checks every .ics link on the page against dist/lich/
```

[Chưa kiểm chứng] GitHub Pages serves `.ics` files as `text/calendar`. Not checked against the live site; the host config was not changed for this.

## Deploy

Pages is set to build from GitHub Actions and the custom domain comes from `public/CNAME`. Pushing to `main` builds and publishes; the workflow can also be run by hand from the Actions tab.

## Organic growth / website tools

- `/lich-am/` — free Vietnam UTC+7 lunar calendar date conversion (client-side).
- `/gio-hoang-dao/` — traditional auspicious-hour chart.
- `/kinh-dich/` — sourced educational I Ching article.
- English, Chinese and Korean counterparts at `/en/...`, `/zh/...`, `/ko/...` (auto-added to sitemap and hreflang).
- The site routes Android users through the existing `/testers/` guide and iOS users to request TestFlight by email, until public store links exist.

Run `npm run check` locally (Node calendar and store-chooser tests, Astro build, then `npm run test:site` on `dist/`: every page in all four languages, hreflang and sitemap, `/tai/` noindex, no Vietnamese or untranslated English on zh/ko pages, no broken internal links). See `docs/GROWTH_CALENDAR.md` for method and limitations.
