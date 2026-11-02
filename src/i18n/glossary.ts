/**
 * Copy for the Vietnamese culture glossary page (`/tu-dien/`). The terms
 * themselves live in `src/data/glossary.json` (copied from
 * https://github.com/qelunai/vietnamese-culture-glossary); this file only holds
 * the page text around them. zh and ko are AI translations of the English copy.
 */
import data from '../data/glossary.json';

export interface GlossaryCategory {
  id: string;
  vi: string;
  en: string;
  zh: string;
  ko: string;
}

export interface GlossaryEntry {
  id: string;
  category: string;
  vi: string;
  han: string;
  en: string;
  zh: string;
  ko: string;
  definition_vi: string;
  definition_en: string;
  related: string[];
  sources: unknown[];
  review?: Record<string, string>;
}

export interface Glossary {
  name: string;
  version: string;
  license: string;
  repository: string;
  categories: GlossaryCategory[];
  entries: GlossaryEntry[];
}

export const glossary = data as Glossary;

export const glossaryRepo = 'https://github.com/qelunai/vietnamese-culture-glossary';

export interface GlossaryContent {
  title: string;
  description: string;
  /** Footer link text. */
  footer: string;
  lead: string[];
  /** Heading of the category list at the top. */
  contents: string;
  searchLabel: string;
  searchPlaceholder: string;
  /** Result count; `{n}` is replaced. */
  countOne: string;
  countMany: string;
  countNone: string;
  /** aria-label of the ¶ link. */
  anchorLabel: string;
  related: string;
  /** Labels in front of the Sino-Vietnamese characters and the English term. */
  han: string;
  english: string;
  /** Label of the term in the page's own language, zh and ko only. */
  native?: string;
  /** Says the zh/ko translation awaits native review; zh and ko only. */
  reviewNotice?: string;
  contributeTitle: string;
  /** URLs become links, see `rich`. */
  contribute: string[];
}

const vi: GlossaryContent = {
  title: 'Từ điển thuật ngữ văn hoá Việt Nam',
  description:
    'Thuật ngữ về lịch âm, lễ tết, tục lệ gia đình, phong thủy và tín ngưỡng dân gian Việt Nam, kèm chữ Hán, tiếng Anh, tiếng Trung, tiếng Hàn và định nghĩa ngắn.',
  footer: 'Từ điển thuật ngữ',
  lead: [
    'Bảng thuật ngữ tham khảo cho người dịch, người nước ngoài tìm hiểu văn hoá Việt Nam và lập trình viên làm ứng dụng lịch. Mỗi mục có từ tiếng Việt, chữ Hán (nếu có), từ tương ứng trong tiếng Anh, tiếng Trung, tiếng Hàn và một định nghĩa ngắn.',
    'Các định nghĩa mô tả phong tục và quan niệm dân gian như người Việt vẫn hiểu, không khẳng định các quan niệm đó là đúng.',
  ],
  contents: 'Nhóm thuật ngữ',
  searchLabel: 'Lọc thuật ngữ',
  searchPlaceholder: 'Gõ từ tiếng Việt (có hoặc không dấu), chữ Hán, tiếng Anh…',
  countOne: '{n} mục',
  countMany: '{n} mục',
  countNone: 'Không có mục nào khớp.',
  anchorLabel: 'Liên kết tới mục này',
  related: 'Xem thêm',
  han: 'Chữ Hán',
  english: 'Tiếng Anh',
  contributeTitle: 'Góp ý và sửa thuật ngữ',
  contribute: [
    'Dữ liệu của trang được lấy từ kho mã nguồn mở vietnamese-culture-glossary. Nếu thấy thuật ngữ sai, thiếu hoặc bản dịch chưa tự nhiên, hãy mở issue hoặc pull request tại https://github.com/qelunai/vietnamese-culture-glossary',
    'Dữ liệu phát hành theo giấy phép **CC BY 4.0**: được dùng lại, kể cả cho mục đích thương mại, miễn ghi nguồn.',
  ],
};

const en: GlossaryContent = {
  title: 'Vietnamese culture glossary',
  description:
    'Terms of the Vietnamese lunar calendar, festivals, family customs, feng shui and folk belief, with Sino-Vietnamese characters, English, Chinese and Korean equivalents and short definitions.',
  footer: 'Glossary',
  lead: [
    'A reference list for translators, visitors learning about Vietnamese culture and developers building calendar apps. Each entry gives the Vietnamese term, its Sino-Vietnamese characters (where there are any), the English, Chinese and Korean equivalents and a short definition.',
    'The definitions describe customs and folk beliefs as Vietnamese people understand them; they do not claim those beliefs are true.',
  ],
  contents: 'Categories',
  searchLabel: 'Filter terms',
  searchPlaceholder: 'Type Vietnamese (with or without accents), characters, English…',
  countOne: '{n} entry',
  countMany: '{n} entries',
  countNone: 'No entries match.',
  anchorLabel: 'Link to this entry',
  related: 'See also',
  han: 'Characters',
  english: 'English',
  contributeTitle: 'Suggest a fix',
  contribute: [
    'The terms come from the open-source repository vietnamese-culture-glossary. If a term is wrong or missing, or a translation reads oddly, open an issue or pull request at https://github.com/qelunai/vietnamese-culture-glossary',
    'The data is released under **CC BY 4.0**: you may reuse it, also commercially, as long as you credit the source.',
  ],
};

const zh: GlossaryContent = {
  title: '越南文化术语表',
  description: '越南农历、节日、家庭习俗、风水与民间信仰相关术语，附汉字、英文、中文、韩文对照和简短释义。',
  footer: '术语表',
  lead: [
    '供译者、想了解越南文化的外国读者以及开发历法应用的程序员参考。每个条目列出越南语词、对应汉字（如有）、英文、中文和韩文对应词，以及简短释义。',
    '释义描述越南人对习俗和民间观念的理解，并不表示这些观念属实。释义目前为英文。',
  ],
  contents: '术语分类',
  searchLabel: '筛选术语',
  searchPlaceholder: '输入越南语（可不带声调）、汉字、中文、英文…',
  countOne: '{n} 个条目',
  countMany: '{n} 个条目',
  countNone: '没有匹配的条目。',
  anchorLabel: '本条目链接',
  related: '另见',
  han: '汉字',
  english: '英文',
  native: '中文',
  reviewNotice: '译文正在等待母语人士审校。',
  contributeTitle: '提出修改建议',
  contribute: [
    '术语数据来自开源仓库。如发现术语有误、缺漏或译文不自然，欢迎在 https://github.com/qelunai/vietnamese-culture-glossary 提交问题或合并请求。',
    '数据采用 **CC BY 4.0** 许可：注明出处即可自由使用，包括商业用途。',
  ],
};

const ko: GlossaryContent = {
  title: '베트남 문화 용어집',
  description: '베트남 음력, 명절, 가정 풍습, 풍수와 민간 신앙에 관한 용어를 한자, 영어, 중국어, 한국어 대응어와 짧은 정의로 정리했습니다.',
  footer: '용어집',
  lead: [
    '번역가, 베트남 문화를 알고 싶은 외국인, 달력 앱을 만드는 개발자를 위한 참고 자료입니다. 각 항목에는 베트남어 용어, 해당 한자(있는 경우), 영어·중국어·한국어 대응어와 짧은 정의가 있습니다.',
    '정의는 베트남 사람들이 이해하는 풍습과 민간 신앙을 설명할 뿐이며, 그 믿음이 사실이라고 주장하지 않습니다. 정의는 현재 영어로만 제공됩니다.',
  ],
  contents: '용어 분류',
  searchLabel: '용어 필터',
  searchPlaceholder: '베트남어(성조 없이도 가능), 한자, 한국어, 영어 입력…',
  countOne: '{n}개 항목',
  countMany: '{n}개 항목',
  countNone: '일치하는 항목이 없습니다.',
  anchorLabel: '이 항목 링크',
  related: '관련 항목',
  han: '한자',
  english: '영어',
  native: '한국어',
  reviewNotice: '번역은 원어민 검토를 기다리고 있습니다.',
  contributeTitle: '수정 제안',
  contribute: [
    '용어 데이터는 오픈 소스 저장소에서 가져옵니다. 용어가 틀렸거나 빠졌거나 번역이 어색하면 https://github.com/qelunai/vietnamese-culture-glossary 에 이슈나 풀 리퀘스트를 남겨 주세요.',
    '데이터는 **CC BY 4.0** 라이선스로 배포됩니다. 출처를 밝히면 상업적 용도를 포함해 자유롭게 사용할 수 있습니다.',
  ],
};

const content: Record<string, GlossaryContent> = { vi, en, zh, ko };

export function glossaryFor(code: string): GlossaryContent {
  return content[code] ?? en;
}

/** Lowercase, without Vietnamese tone marks and with đ → d, for the search filter. */
export function fold(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').normalize('NFC');
}
