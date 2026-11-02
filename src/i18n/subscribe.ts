/**
 * Copy for the calendar subscription page (`/lich-dang-ky/`). The `.ics` files in
 * `public/lich/` come from https://github.com/qelunai/vietnamese-calendar-data
 * (`bin/ics.dart`); see "Cập nhật lịch .ics hằng năm" in README.md. Vietnamese
 * pages use the `vi` files, every other language the `en` files. zh and ko are
 * AI translations of the English copy.
 */

export type CalendarId = 'le-tet' | 'ram-mung-mot' | 'tiet-khi';

export const calendarIds: CalendarId[] = ['le-tet', 'ram-mung-mot', 'tiet-khi'];

/** Language of the `.ics` file a page links to. */
export const icsLangFor = (code: string): 'vi' | 'en' => (code === 'vi' ? 'vi' : 'en');

/** Path below the site root, e.g. `lich/le-tet.vi.ics`. */
export const icsPath = (id: CalendarId, lang: 'vi' | 'en') => `lich/${id}.${lang}.ics`;

export const webcalUrl = (id: CalendarId, lang: 'vi' | 'en') => `webcal://qelunai.com/${icsPath(id, lang)}`;

export const googleUrl = (id: CalendarId, lang: 'vi' | 'en') =>
  `https://calendar.google.com/calendar/r?cid=${webcalUrl(id, lang)}`;

export interface SubscribeContent {
  title: string;
  description: string;
  /** Footer link text. */
  footer: string;
  lead: string;
  /** `{first}` and `{last}` are replaced by the years in the files. */
  range: string;
  /** Shown on pages whose language has no calendar of its own; empty otherwise. */
  languageNote: string;
  calendars: Record<CalendarId, { name: string; summary: string }>;
  google: string;
  apple: string;
  download: string;
  howTitle: string;
  how: string[];
  methodTitle: string;
  /** `{method}` becomes a link to /phuong-phap/ with `methodLink` as text. */
  method: string;
  methodLink: string;
  cultural: string;
}

const vi: SubscribeContent = {
  title: 'Đăng ký lịch âm vào Google, Apple Calendar',
  description:
    'Thêm lễ Tết âm lịch, ngày rằm và mùng một, 24 tiết khí vào Google Calendar hoặc Apple Calendar. Tính theo giờ Việt Nam (UTC+7).',
  footer: 'Đăng ký lịch (.ics)',
  lead: 'Ba lịch đăng ký miễn phí, tính bằng thư viện mã nguồn mở qelunai-lunar theo giờ Việt Nam (UTC+7). Đăng ký một lần, ứng dụng lịch của bạn tự tải bản mới.',
  range: 'Các lịch hiện có sự kiện từ năm {first} đến {last} và được cập nhật mỗi năm.',
  languageNote: '',
  calendars: {
    'le-tet': {
      name: 'Lễ Tết âm lịch',
      summary: 'Ông Công ông Táo, Giao thừa, Tết Nguyên đán, Tết Nguyên tiêu, Lễ Vu Lan, Tết Trung thu, Tết Hạ nguyên.',
    },
    'ram-mung-mot': {
      name: 'Rằm và mùng một',
      summary: 'Mùng một và ngày rằm mỗi tháng âm; tháng nhuận được ghi rõ.',
    },
    'tiet-khi': {
      name: '24 tiết khí',
      summary: 'Ngày giao tiết của 24 tiết khí, kèm kinh độ Mặt Trời và giờ giao tiết ước tính.',
    },
  },
  google: 'Thêm vào Google Calendar',
  apple: 'Thêm vào Apple Calendar',
  download: 'Tải tệp .ics',
  howTitle: 'Cách thêm',
  how: [
    '**Google Calendar:** bấm nút, đăng nhập tài khoản Google nếu được hỏi, rồi xác nhận thêm lịch. Trên điện thoại, nên làm việc này trong trình duyệt.',
    '**Apple Calendar:** trên iPhone, iPad hoặc Mac, bấm nút để mở ứng dụng Lịch, rồi chọn Đăng ký.',
    '**Ứng dụng lịch khác:** sao chép đường dẫn của nút Apple Calendar (bắt đầu bằng webcal://) và dán vào mục đăng ký lịch qua URL. Tệp .ics tải về chỉ là bản chụp, không tự cập nhật.',
    'Các sự kiện là sự kiện cả ngày, đánh dấu rảnh nên không chặn lịch hẹn. Muốn bỏ, xoá lịch đã đăng ký trong ứng dụng lịch.',
  ],
  methodTitle: 'Cách tính',
  method:
    'Ngày âm, tháng nhuận và tiết khí tính theo giờ Việt Nam (UTC+7); lịch tính theo múi giờ khác có thể lệch một ngày. Tiết khí ghi vào ngày giao tiết. Xem {method}.',
  methodLink: 'Phương pháp & độ chính xác',
  cultural: 'Nội dung mang tính tham khảo văn hoá, không thay tư vấn chuyên môn.',
};

const en: SubscribeContent = {
  title: 'Subscribe to the Vietnamese lunar calendar',
  description:
    'Add Vietnamese lunar festivals, new and full moon days and the 24 solar terms to Google Calendar or Apple Calendar. Computed for Vietnam time (UTC+7).',
  footer: 'Calendar subscriptions (.ics)',
  lead: 'Three free calendars, computed with the open-source qelunai-lunar library for Vietnam time (UTC+7). Subscribe once and your calendar app fetches new versions itself.',
  range: 'The calendars currently hold events from {first} to {last} and are updated every year.',
  languageNote: '',
  calendars: {
    'le-tet': {
      name: 'Vietnamese lunar festivals',
      summary: "Kitchen Gods day, New Year's Eve, Lunar New Year, Lantern Festival, Vu Lan, Mid-Autumn Festival, Hạ Nguyên Festival.",
    },
    'ram-mung-mot': {
      name: 'New and full moon days',
      summary: 'The first and fifteenth day of every lunar month; leap months are marked.',
    },
    'tiet-khi': {
      name: '24 solar terms',
      summary: 'The day each of the 24 solar terms begins, with the solar longitude and an approximate time.',
    },
  },
  google: 'Add to Google Calendar',
  apple: 'Add to Apple Calendar',
  download: 'Download .ics',
  howTitle: 'How to add',
  how: [
    '**Google Calendar:** press the button, sign in to Google if asked, then confirm adding the calendar. On a phone, do this in the browser.',
    '**Apple Calendar:** on iPhone, iPad or Mac, press the button to open Calendar, then choose Subscribe.',
    '**Other calendar apps:** copy the link of the Apple Calendar button (it starts with webcal://) and paste it where the app subscribes to a calendar by URL. A downloaded .ics file is a snapshot and does not update.',
    'Events are all-day and marked free, so they do not block appointments. To remove them, delete the subscribed calendar in your calendar app.',
  ],
  methodTitle: 'How it is computed',
  method:
    'Lunar dates, leap months and solar terms are computed for Vietnam time (UTC+7); calendars computed for another time zone can differ by a day. Solar terms are placed on the day the term begins. See {method}.',
  methodLink: 'Method and accuracy',
  cultural: 'Content is cultural reference and is not professional advice.',
};

const zh: SubscribeContent = {
  title: '订阅越南农历日历',
  description: '将越南农历节日、初一和十五以及二十四节气添加到 Google Calendar 或 Apple Calendar。按越南时间（UTC+7）计算。',
  footer: '订阅日历（.ics）',
  lead: '三份免费日历，由开源库 qelunai-lunar 按越南时间（UTC+7）计算。订阅一次，日历应用会自行获取新版本。',
  range: '日历目前包含 {first} 年至 {last} 年的事件，每年更新。',
  languageNote: '日历暂无中文版本，以下链接为英文日历。',
  calendars: {
    'le-tet': {
      name: '越南农历节日',
      summary: '送灶君、除夕、春节、元宵节、盂兰盆节、中秋节、下元节。',
    },
    'ram-mung-mot': {
      name: '初一和十五',
      summary: '每个农历月的初一和十五；闰月会注明。',
    },
    'tiet-khi': {
      name: '二十四节气',
      summary: '二十四节气各自的交节日，附太阳黄经和估算的交节时间。',
    },
  },
  google: '添加到 Google Calendar',
  apple: '添加到 Apple Calendar',
  download: '下载 .ics 文件',
  howTitle: '添加方法',
  how: [
    '**Google Calendar：**点击按钮，如有提示请登录 Google 账号，然后确认添加日历。在手机上请使用浏览器操作。',
    '**Apple Calendar：**在 iPhone、iPad 或 Mac 上点击按钮打开日历应用，然后选择订阅。',
    '**其他日历应用：**复制 Apple Calendar 按钮的链接（以 webcal:// 开头），粘贴到应用中通过网址订阅日历的位置。下载的 .ics 文件只是快照，不会自动更新。',
    '事件均为全天事件并标记为空闲，不会占用日程。如需移除，请在日历应用中删除所订阅的日历。',
  ],
  methodTitle: '计算方法',
  method: '农历日期、闰月和节气按越南时间（UTC+7）计算；按其他时区计算的日历可能相差一天。节气记在交节当天。详见{method}。',
  methodLink: '方法与准确性',
  cultural: '内容仅供文化参考，不构成专业建议。',
};

const ko: SubscribeContent = {
  title: '베트남 음력 달력 구독',
  description: '베트남 음력 명절, 초하루와 보름, 24절기를 Google Calendar 또는 Apple Calendar에 추가하세요. 베트남 시간(UTC+7) 기준으로 계산합니다.',
  footer: '달력 구독(.ics)',
  lead: '오픈 소스 라이브러리 qelunai-lunar로 베트남 시간(UTC+7) 기준으로 계산한 무료 달력 세 가지입니다. 한 번 구독하면 달력 앱이 새 버전을 직접 가져옵니다.',
  range: '현재 {first}년부터 {last}년까지의 일정이 들어 있으며 매년 업데이트됩니다.',
  languageNote: '아직 한국어 달력이 없어 아래 링크는 영어 달력입니다.',
  calendars: {
    'le-tet': {
      name: '베트남 음력 명절',
      summary: '조왕신 보내는 날, 섣달그믐, 설날, 정월대보름, 백중(우란분절), 추석, 하원절.',
    },
    'ram-mung-mot': {
      name: '초하루와 보름',
      summary: '음력 매달 초하루와 보름날이며, 윤달은 따로 표시합니다.',
    },
    'tiet-khi': {
      name: '24절기',
      summary: '24절기가 시작되는 날과 태양 황경, 추정 시각을 담았습니다.',
    },
  },
  google: 'Google Calendar에 추가',
  apple: 'Apple Calendar에 추가',
  download: '.ics 파일 다운로드',
  howTitle: '추가 방법',
  how: [
    '**Google Calendar:** 버튼을 누르고 요청 시 Google 계정에 로그인한 뒤 달력 추가를 확인하세요. 휴대전화에서는 브라우저에서 진행하세요.',
    '**Apple Calendar:** iPhone, iPad 또는 Mac에서 버튼을 눌러 캘린더 앱을 연 뒤 구독을 선택하세요.',
    '**다른 달력 앱:** Apple Calendar 버튼의 링크(webcal:// 로 시작)를 복사해 앱의 URL 구독 항목에 붙여 넣으세요. 다운로드한 .ics 파일은 스냅숏이라 자동으로 업데이트되지 않습니다.',
    '일정은 모두 종일 일정이며 한가함으로 표시되어 약속을 막지 않습니다. 없애려면 달력 앱에서 구독한 달력을 삭제하세요.',
  ],
  methodTitle: '계산 방법',
  method: '음력 날짜, 윤달, 절기는 베트남 시간(UTC+7) 기준으로 계산합니다. 다른 시간대로 계산한 달력과 하루 차이가 날 수 있습니다. 절기는 절기가 시작되는 날에 표시합니다. 자세한 내용은 {method}을 참고하세요.',
  methodLink: '방법과 정확도',
  cultural: '콘텐츠는 문화적 참고용이며 전문적인 조언이 아닙니다.',
};

const content: Record<string, SubscribeContent> = { vi, en, zh, ko };

/** Copy for a language; unknown languages get English. */
export function subscribeFor(code: string): SubscribeContent {
  return content[code] ?? en;
}
