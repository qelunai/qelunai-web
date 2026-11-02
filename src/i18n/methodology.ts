/**
 * Copy for the "method and accuracy" page (`/phuong-phap/`). The only sources are
 * `METHODOLOGY.md`, `CLEANROOM.md` and `README.md` of https://github.com/qelunai/qelunai-lunar;
 * add nothing that is not stated there. Items marked [Unverified] in the source
 * are written as "not yet checked" or left out. zh and ko are AI translations of
 * the English copy.
 */

export interface MethodTable {
  head: string[];
  rows: string[][];
}

export interface MethodSection {
  title: string;
  body?: string[];
  list?: string[];
  ordered?: boolean;
  table?: MethodTable;
  /** Paragraphs after the list or table. */
  after?: string[];
}

export interface MethodContent {
  title: string;
  description: string;
  /** Footer link text. */
  footer: string;
  lead: string;
  sections: MethodSection[];
}

export const libraryUrl = 'https://github.com/qelunai/qelunai-lunar';

const vi: MethodContent = {
  title: 'Phương pháp & độ chính xác',
  description:
    'Cách Qelunai tính lịch âm Việt Nam, tháng nhuận, tiết khí, can chi và giờ hoàng đạo; những gì đã đối chiếu với lịch đã công bố và các giới hạn.',
  footer: 'Phương pháp & độ chính xác',
  lead: 'Phần tính lịch âm của Qelunai được tách thành thư viện mã nguồn mở qelunai-lunar. Trang này tóm tắt cách thư viện tính, những gì đã đối chiếu với lịch Việt Nam đã công bố và những gì chưa.',
  sections: [
    {
      title: 'Lịch âm tính thế nào',
      body: [
        'Lịch âm Việt Nam là lịch âm dương. Mỗi tháng âm bắt đầu vào **ngày sóc** (trăng non) theo giờ địa phương; ngày âm là số ngày kể từ ngày sóc gần nhất không sau ngày cần đổi, cộng 1.',
      ],
      list: [
        'Ngày dương lịch được đổi sang số ngày Julius (JDN) theo công thức Fliegel & Van Flandern (1968); xem Meeus, Astronomical Algorithms (ấn bản 2, 1998), chương 7.',
        '**Sóc:** theo Meeus chương 49 (Phases of the Moon): thời điểm sóc trung bình cộng chuỗi số hạng tuần hoàn rút gọn theo dị thường trung bình của Mặt Trời, của Mặt Trăng và đối số vĩ độ của Mặt Trăng. Kết quả ở giờ TT, trừ ΔT để ra giờ UT.',
        '**Kinh độ Mặt Trời:** theo Meeus chương 25, phương pháp độ chính xác thấp: kinh độ và dị thường trung bình, ba số hạng của phương trình tâm, có hiệu chỉnh chương động và quang sai.',
        '**ΔT = TT − UT:** đa thức của F. Espenak và J. Meeus (Five Millennium Canon of Solar Eclipses, NASA TP-2006-214141), các đoạn 1900–2150. Trước 1900 giữ giá trị năm 1900.',
        'Lõi thiên văn của thư viện được viết độc lập (clean-room) từ các nguồn thiên văn công khai; quy trình và nguồn ghi tại https://github.com/qelunai/qelunai-lunar/blob/main/CLEANROOM.md',
        'Múi giờ mặc định là **UTC+7** (giờ Việt Nam), không phụ thuộc múi giờ của máy. Lịch Trung Quốc (UTC+8) hoặc Hàn Quốc (UTC+9) có thể lệch một ngày, kéo theo lệch tháng hoặc năm, khi sóc hoặc trung khí rơi gần nửa đêm.',
        'Chỉ dùng lịch Gregory: ngày trước 15/10/1582 được tính theo lịch Gregory ngoại suy.',
      ],
    },
    {
      title: 'Tháng nhuận',
      list: [
        '**Tháng 11** là tháng âm chứa ngày Đông chí: thư viện tìm thời điểm Mặt Trời qua kinh độ 270°, lấy ngày địa phương chứa thời điểm đó; tháng 11 là tháng âm chứa ngày này.',
        'Nếu từ đầu tháng 11 năm này đến đầu tháng 11 năm sau có 13 tháng âm, năm đó có tháng nhuận.',
        'Tháng nhuận là tháng đầu tiên sau tháng 11 không chứa trung khí: cung trung khí (30°) tại nửa đêm ngày đầu tháng đó bằng cung tại nửa đêm ngày đầu tháng kế tiếp. Tháng nhuận mang số của tháng liền trước; ví dụ năm âm 2025 có tháng 6 nhuận.',
        'Năm âm đổi vào mùng 1 tháng Giêng.',
      ],
      ordered: true,
      after: ['Đổi âm sang dương với một tháng nhuận mà năm đó không có (ví dụ tháng 6 nhuận năm 2026), thư viện báo không có ngày đó.'],
    },
    {
      title: 'Tiết khí',
      list: [
        '24 tiết khí chia kinh độ hoàng đạo của Mặt Trời thành 24 phần, mỗi phần 15°: Xuân phân ở 0°, Đông chí ở 270°.',
        'Một ngày mang tiết khí có hiệu lực lúc nửa đêm đầu ngày (giờ địa phương), nên ngày giao tiết là ngày cuối của tiết trước. Trong danh sách sự kiện, tên tiết mới được ghi vào đúng ngày giao, như lịch in.',
      ],
    },
    {
      title: 'Can chi',
      list: [
        '**Ngày:** can = (JDN + 9) mod 10, chi = (JDN + 1) mod 12. Mốc: 10/02/2024 là ngày Giáp Thìn.',
        '**Năm âm:** 1984 là năm Giáp Tý; can và chi tính theo số năm cách 1984.',
        '**Tháng âm:** theo quy tắc ngũ hổ độn, can tháng Giêng suy từ can năm, mỗi tháng tăng một can; chi cố định, tháng Giêng là Dần … tháng Chạp là Sửu. Tháng nhuận dùng can chi của tháng cùng số.',
      ],
    },
    {
      title: 'Ngày và giờ hoàng đạo',
      list: [
        '12 thần theo thứ tự: Thanh Long, Minh Đường, Thiên Hình, Chu Tước, Kim Quỹ, Kim Đường (Bảo Quang), Bạch Hổ, Ngọc Đường, Thiên Lao, Huyền Vũ (Nguyên Vũ), Tư Mệnh, Câu Trận. Sáu thần hoàng đạo: Thanh Long, Minh Đường, Kim Quỹ, Kim Đường, Ngọc Đường, Tư Mệnh.',
        'Bảng hoàng đạo hắc đạo như lịch vạn niên tiếng Việt in theo ngày: chi Dần/Thân → Thanh Long ở Tý; Mão/Dậu → Dần; Thìn/Tuất → Thìn; Tỵ/Hợi → Ngọ; Ngọ/Tý → Thân; Mùi/Sửu → Tuất; các thần còn lại theo thứ tự chi.',
        '**Ngày hoàng đạo** theo chi của **tháng âm**; tháng nhuận dùng chi của tháng cùng số. Trên 9 ngày mà tháng âm và tháng tiết khí cho kết quả khác nhau, mọi lịch vạn niên tiếng Việt đã kiểm đều theo tháng âm.',
        '**Giờ hoàng đạo** theo chi của ngày; 12 giờ là giờ đồng hồ: Tý 23–1 giờ, Sửu 1–3 giờ, …, Hợi 21–23 giờ. Giờ 23:00–24:00 thuộc giờ Tý của ngày hôm đó hay hôm sau tuỳ trường phái; thư viện tính cho ngày hôm đó.',
        '**Thập nhị trực** (Kiến, Trừ, Mãn, Bình, Định, Chấp, Phá, Nguy, Thành, Thu, Khai, Bế) theo **tháng tiết khí**: đổi tại mỗi tiết (Lập xuân → Dần, Kinh trập → Mão, …), không đổi tại ngày sóc.',
      ],
    },
    {
      title: 'Kiểm chứng: đổi lịch và can chi',
      body: ['Bộ test của thư viện (75 ca) đối chiếu các giá trị dưới đây. Cột nguồn ghi đúng những gì mã test ghi lại.'],
      table: {
        head: ['Nội dung', 'Giá trị đối chiếu', 'Nguồn ghi trong test'],
        rows: [
          ['Mùng 1 Tết', '22/01/2023, 10/02/2024, 29/01/2025, 17/02/2026, 06/02/2027', 'Nhiều nguồn tin Việt Nam độc lập (không ghi URL)'],
          ['Giỗ Tổ Hùng Vương (10/3 âm)', '18/04/2024, 07/04/2025', 'Không ghi URL'],
          ['Có tháng nhuận', 'Năm âm 2023 có tháng 2 nhuận; 2025 có tháng 6 nhuận (chỉ kiểm có tồn tại, chưa kiểm ngày bắt đầu)', 'Được công bố công khai (không ghi URL)'],
          ['Can chi năm', '2023 Quý Mão, 2024 Giáp Thìn, 2025 Ất Tỵ, 2026 Bính Ngọ, 2027 Đinh Mùi', 'Tên năm của các Tết trên'],
          ['Can chi ngày', '10/02/2024 là Giáp Thìn', 'Nhiều lịch vạn niên tiếng Việt (không ghi URL)'],
          ['Can chi tháng', 'Tháng Giêng 2024 là Bính Dần', 'Không ghi nguồn riêng'],
          ['Nhất quán nội bộ', 'Đổi dương → âm → dương trả lại đúng ngày cho mọi ngày 1900–2100', 'Không có nguồn ngoài'],
        ],
      },
    },
    {
      title: 'Kiểm chứng: hoàng đạo, trực, tiết khí',
      body: ['Thần ngày đối chiếu với các trang lịch, truy cập 28/10/2026. Cả 9 ngày đều là ngày mà tháng âm và tháng tiết khí cho kết quả khác nhau.'],
      table: {
        head: ['Ngày', 'Can chi', 'Thần ngày', 'Nguồn'],
        rows: [
          ['01/02/2025', 'Tân Sửu', 'Minh Đường', 'baoquocte.vn'],
          ['01/05/2025', 'Canh Ngọ', 'Thanh Long', 'vtcnews.vn'],
          ['14/08/2025 (âm 21/6 nhuận)', 'Ất Mão', 'Kim Đường', 'ngaydep.com'],
          ['10/02/2026', 'Ất Mão', 'Kim Đường', 'ngaydep.com'],
          ['10/06/2026', 'Ất Mão', 'Huyền Vũ (in là Nguyên Vũ)', 'ngaydep.com'],
          ['09/08/2026', 'Ất Mão', 'Kim Đường', 'ngaydep.com'],
          ['09/10/2026', 'Bính Thìn', 'Thiên Hình', 'ngaydep.com, xemlicham.com'],
          ['08/11/2026', 'Bính Tuất', 'Bạch Hổ', 'ngaydep.com, xemlicham.com'],
          ['08/12/2026', 'Bính Thìn', 'Tư Mệnh', 'ngaydep.com'],
        ],
      },
      after: [
        '**Giờ hoàng đạo** đã đối chiếu cho 01/02/2025 (đủ 12 giờ, baoquocte.vn), 01/05/2025 (vtcnews.vn, baolamdong.vn), 10/02/2026 (xemlicham.com, baohatinh.vn, ngaydep.com), 09/10/2026 (xemlicham.com, ngaydep.com) và 28/10/2026 (xemlicham.com). Với mọi ngày 2025–2026, test kiểm mỗi ngày có đúng 6 giờ hoàng đạo.',
        '**Thập nhị trực:** 28/10/2026 và 10/02/2026 là trực Trừ (xemlicham.com, ngaydep.com). Ngày 10/02/2026 là 23 tháng Chạp âm nhưng đã qua Lập xuân: theo tháng tiết khí ra Trừ, theo tháng âm sẽ ra Mãn.',
        '**Tiết khí:** với mọi ngày 2026–2027, khoảng tiết khí dài 14–16 ngày và ranh giới đúng chỗ đổi tiết; đây là kiểm nhất quán nội bộ. Chỉ số tiết khí của mọi ngày 1900–2100 được đối chiếu với NASA JPL DE440s (mục kế tiếp). Ứng dụng Qelunai có kiểm hàm kinh độ Mặt Trời với thời điểm xuân phân, hạ chí, thu phân, đông chí 2024 của Đài thiên văn Hải quân Hoa Kỳ.',
        'Các ngày mẫu khác trong test (mùng một, rằm, ngày giỗ mẫu, ngày bắt đầu tháng 6 nhuận 2025) là giá trị do thuật toán tính, chưa đối chiếu với nguồn ngoài.',
      ],
    },
    {
      title: 'Kiểm chứng thiên văn: NASA JPL DE440s, 1900–2100',
      body: ['Thời điểm sóc và thời điểm Mặt Trời qua mỗi bội số 15° (giờ UTC+7) được sinh từ lịch thiên văn DE440s của NASA JPL bằng thư viện Skyfield, độc lập với mọi mã lịch âm, rồi so với kết quả của thư viện cho mọi ngày từ 01/01/1900 đến 31/12/2100 (73.414 ngày).'],
      table: {
        head: ['Kiểm tra', 'Kết quả'],
        rows: [
          ['Sóc rơi sai ngày địa phương', '2 ca: 20/06/1944 lúc 23:59:17 và 07/07/1967 lúc 23:59:59, cả hai cách nửa đêm không quá 43 giây'],
          ['Chỉ số tiết khí tại nửa đêm khác JPL', '11 ngày, đều cách thời điểm giao tiết không quá 8 phút'],
        ],
      },
      after: ['Test chỉ chấp nhận sai lệch khi thời điểm JPL cách nửa đêm không quá 2 phút (sóc) hoặc 10 phút (tiết khí), và giới hạn số ca chấp nhận ở 2 (sóc) và 11 (tiết khí).'],
    },
    {
      title: 'Giới hạn',
      list: [
        'Đã đối chiếu với lịch công bố: các ngày nêu trên, trong **2023–2027**. Ngoài khoảng này kết quả tính cùng phương pháp nhưng chưa được đối chiếu.',
        'Đã đối chiếu thiên văn với NASA JPL DE440s cho **1900–2100**. Ngoài khoảng này chưa kiểm.',
        'Sóc hoặc tiết khí rơi trong vòng vài phút quanh nửa đêm địa phương có thể bị xếp sang ngày bên cạnh; sai số này nằm dưới độ chính xác của các chuỗi rút gọn và của ΔT dự báo cho các năm tương lai.',
        'ΔT trước 1900 giữ giá trị năm 1900: ngày trước 1900 vẫn đổi được nhưng ít được kiểm hơn.',
        'Chưa có ca test so sánh lịch Việt Nam với lịch Trung Quốc hoặc Hàn Quốc.',
        'Không dùng cho thiên văn chính xác cao.',
      ],
    },
    {
      title: 'Nội dung văn hoá chỉ để tham khảo',
      body: [
        'Ngày, giờ hoàng đạo, thập nhị trực và ngày giỗ là quy ước truyền thống. Thư viện theo các lịch Việt Nam đã kiểm trong test; truyền thống khác có thể khác.',
        'Quy ước ngày giỗ do thư viện chọn, chưa đối chiếu với nguồn ngoài: người mất trong tháng nhuận thì giỗ vào tháng thường cùng số; mất ngày 30 thì giỗ ngày 30 nếu tháng đủ, ngày 29 nếu tháng thiếu.',
        'Các nội dung này mang tính tham khảo văn hoá, không thay tư vấn chuyên môn.',
      ],
    },
    {
      title: 'Thư viện mã nguồn mở',
      body: [
        'Thư viện **qelunai-lunar** viết bằng Dart thuần, tách từ ứng dụng Qelunai, phát hành theo giấy phép MIT. Mã nguồn, bộ test và tài liệu phương pháp đầy đủ: https://github.com/qelunai/qelunai-lunar',
      ],
    },
  ],
};

const en: MethodContent = {
  title: 'Method & accuracy',
  description:
    'How Qelunai computes the Vietnamese lunar calendar, leap months, solar terms, Can Chi and lucky hours; what has been checked against published calendars, and the limits.',
  footer: 'Method & accuracy',
  lead: 'The lunar calendar code of Qelunai has been extracted into the open-source library qelunai-lunar. This page sums up how the library computes, what has been checked against published Vietnamese calendars, and what has not.',
  sections: [
    {
      title: 'How the lunar calendar is computed',
      body: [
        'The Vietnamese calendar is lunisolar. Each lunar month starts on the local date of a **new moon**; the lunar day is the number of days since the latest new moon not after the date, plus 1.',
      ],
      list: [
        'Gregorian dates are converted to a Julian Day Number (JDN) with the Fliegel & Van Flandern (1968) formula; see Meeus, Astronomical Algorithms (2nd ed., 1998), ch. 7.',
        '**New moons:** Meeus ch. 49 (Phases of the Moon): the mean New Moon time plus a truncated periodic series in the mean anomalies of the Sun and the Moon and the Moon\'s argument of latitude. The result is in TT; ΔT is subtracted to get UT.',
        '**Solar longitude:** Meeus ch. 25, low-accuracy method: mean longitude and mean anomaly, three terms of the equation of centre, with a nutation and aberration correction.',
        '**ΔT = TT − UT:** the polynomials of F. Espenak and J. Meeus (Five Millennium Canon of Solar Eclipses, NASA TP-2006-214141), segments 1900–2150. Before 1900 the 1900 value is held.',
        'The library\'s astronomical core is written independently (clean-room) from public astronomy sources; the process and sources are recorded at https://github.com/qelunai/qelunai-lunar/blob/main/CLEANROOM.md',
        'The default time zone is **UTC+7** (Vietnam), whatever the device time zone. Chinese (UTC+8) and Korean (UTC+9) lunar calendars can differ by a day, and so by a month or a year, when a new moon or principal term falls near midnight.',
        'Gregorian only: dates before 1582-10-15 are proleptic Gregorian.',
      ],
    },
    {
      title: 'Leap months',
      list: [
        '**Month 11** is the lunar month containing the day of the winter solstice: the library finds the instant the Sun crosses longitude 270° and takes the local day containing it; month 11 is the lunar month containing that day.',
        'If month 11 to the next month 11 holds 13 lunar months, the year has a leap month.',
        'The leap month is the first month after month 11 with no principal term: the 30° sector index at local midnight of its first day equals the index at the first day of the following month. It takes the number of the month before it; for example, lunar 2025 has a leap 6th month.',
        'The lunar year changes on the first day of month 1.',
      ],
      ordered: true,
      after: ['Converting a leap month the year does not have (for example a leap 6th month in 2026) returns no date.'],
    },
    {
      title: 'Solar terms',
      list: [
        'The 24 solar terms divide the Sun’s ecliptic longitude into 15° sectors: the spring equinox at 0°, the winter solstice at 270°.',
        'A day carries the term in effect at its local midnight, so the crossing day is the last day of the previous term. The list of calendar events puts the new term on the crossing day, as printed calendars do.',
      ],
    },
    {
      title: 'Can Chi (stems and branches)',
      list: [
        '**Day:** stem = (JDN + 9) mod 10, branch = (JDN + 1) mod 12. Anchor: 2024-02-10 is a Giáp Thìn day.',
        '**Lunar year:** 1984 is Giáp Tý; stem and branch follow from the number of years since 1984.',
        '**Lunar month:** by the ngũ hổ độn rule, the stem of month 1 follows from the year stem, one stem per month; branches are fixed, month 1 = Dần … month 12 = Sửu. A leap month uses the Can Chi of the month with the same number.',
      ],
    },
    {
      title: 'Lucky days and hours (hoàng đạo)',
      list: [
        '12 spirits in fixed order: Thanh Long, Minh Đường, Thiên Hình, Chu Tước, Kim Quỹ, Kim Đường (Bảo Quang), Bạch Hổ, Ngọc Đường, Thiên Lao, Huyền Vũ (Nguyên Vũ), Tư Mệnh, Câu Trận. Six are lucky: Thanh Long, Minh Đường, Kim Quỹ, Kim Đường, Ngọc Đường, Tư Mệnh.',
        'The table as printed day by day in Vietnamese almanacs: branch Dần/Thân → Thanh Long on Tý; Mão/Dậu → Dần; Thìn/Tuất → Thìn; Tỵ/Hợi → Ngọ; Ngọ/Tý → Thân; Mùi/Sửu → Tuất; the rest follow in branch order.',
        '**Lucky days** follow the branch of the **lunar month**; a leap month uses the branch of the month with the same number. On 9 days where the lunar month and the solar-term month give different results, every Vietnamese almanac checked used the lunar month.',
        '**Lucky hours** follow the day’s branch; the 12 hours are clock hours: Tý 23–1, Sửu 1–3, …, Hợi 21–23. Whether 23:00–24:00 belongs to that date’s Tý hour or the next day’s depends on the school; the library treats it as that date’s.',
        'The **twelve day officers** (thập nhị trực: Kiến, Trừ, Mãn, Bình, Định, Chấp, Phá, Nguy, Thành, Thu, Khai, Bế) follow the **solar-term month**, which changes at each term (Lập xuân → Dần, Kinh trập → Mão, …), not at the new moon.',
      ],
    },
    {
      title: 'Verification: conversion and Can Chi',
      body: ['The library’s test suite (75 tests) checks the values below. The source column says exactly what the test code records.'],
      table: {
        head: ['What', 'Values checked', 'Source recorded in the test'],
        rows: [
          ['Tết (lunar 1/1)', '2023-01-22, 2024-02-10, 2025-01-29, 2026-02-17, 2027-02-06', 'Multiple independent Vietnamese news sources (no URL)'],
          ['Hùng Kings’ Day (lunar 10/3)', '2024-04-18, 2025-04-07', 'No URL'],
          ['Leap month exists', 'Lunar 2023 has a leap 2nd month; 2025 a leap 6th month (existence only; start date not checked)', 'Publicly documented (no URL)'],
          ['Year Can Chi', '2023 Quý Mão, 2024 Giáp Thìn, 2025 Ất Tỵ, 2026 Bính Ngọ, 2027 Đinh Mùi', 'Names of the Tết years above'],
          ['Day Can Chi', '2024-02-10 = Giáp Thìn', 'Multiple Vietnamese almanacs (no URL)'],
          ['Month Can Chi', 'Month 1 of 2024 = Bính Dần', 'No separate source'],
          ['Internal consistency', 'Solar → lunar → solar returns the same date for every day of 1900–2100', 'No external source'],
        ],
      },
    },
    {
      title: 'Verification: lucky days, day officers, solar terms',
      body: ['Day spirits checked against calendar websites, fetched 2026-10-28. All 9 are days where the lunar month and the solar-term month give different results.'],
      table: {
        head: ['Date', 'Can Chi', 'Day spirit', 'Source'],
        rows: [
          ['2025-02-01', 'Tân Sửu', 'Minh Đường', 'baoquocte.vn'],
          ['2025-05-01', 'Canh Ngọ', 'Thanh Long', 'vtcnews.vn'],
          ['2025-08-14 (lunar 21/6 leap)', 'Ất Mão', 'Kim Đường', 'ngaydep.com'],
          ['2026-02-10', 'Ất Mão', 'Kim Đường', 'ngaydep.com'],
          ['2026-06-10', 'Ất Mão', 'Huyền Vũ (printed Nguyên Vũ)', 'ngaydep.com'],
          ['2026-08-09', 'Ất Mão', 'Kim Đường', 'ngaydep.com'],
          ['2026-10-09', 'Bính Thìn', 'Thiên Hình', 'ngaydep.com, xemlicham.com'],
          ['2026-11-08', 'Bính Tuất', 'Bạch Hổ', 'ngaydep.com, xemlicham.com'],
          ['2026-12-08', 'Bính Thìn', 'Tư Mệnh', 'ngaydep.com'],
        ],
      },
      after: [
        '**Lucky hours** checked for 2025-02-01 (all 12 hours, baoquocte.vn), 2025-05-01 (vtcnews.vn, baolamdong.vn), 2026-02-10 (xemlicham.com, baohatinh.vn, ngaydep.com), 2026-10-09 (xemlicham.com, ngaydep.com) and 2026-10-28 (xemlicham.com). For every day of 2025–2026 the tests check exactly 6 lucky hours.',
        '**Day officers:** 2026-10-28 and 2026-02-10 are Trừ (xemlicham.com, ngaydep.com). 2026-02-10 is lunar 23/12 but after Lập xuân: the solar-term month gives Trừ, the lunar month would give Mãn.',
        '**Solar terms:** for every day of 2026–2027, term spans are 14–16 days long and their bounds are real term changes; this is an internal consistency check. The solar-term index of every day of 1900–2100 is checked against NASA JPL DE440s (next section). The Qelunai app checks the solar longitude function against the U.S. Naval Observatory 2024 equinox and solstice times.',
        'The other sample dates in the tests (first and fifteenth days, sample death anniversaries, the start of leap month 6 of 2025) are values computed by the algorithm, not yet checked against an external source.',
      ],
    },
    {
      title: 'Astronomy check: NASA JPL DE440s, 1900–2100',
      body: ['New-moon times and the times the Sun crosses each multiple of 15° (UTC+7) are generated from NASA JPL\'s DE440s ephemeris with the Skyfield library, independently of any lunar calendar code, and compared with the library for every day from 1900-01-01 to 2100-12-31 (73,414 days).'],
      table: {
        head: ['Check', 'Result'],
        rows: [
          ['New moon on the wrong local day', '2 cases: 1944-06-20 23:59:17 and 1967-07-07 23:59:59, both within 43 seconds of midnight'],
          ['Solar-term index at local midnight differs from JPL', '11 days, all within 8 minutes of a term crossing'],
        ],
      },
      after: ['The test accepts a difference only when the JPL time is within 2 minutes (new moon) or 10 minutes (solar term) of midnight, and caps the accepted cases at 2 and 11.'],
    },
    {
      title: 'Limitations',
      list: [
        'Checked against published calendars: the dates above, within **2023–2027**. Outside that range results use the same method but are not checked.',
        'Astronomy checked against NASA JPL DE440s for **1900–2100**. Outside that range it is not checked.',
        'A new moon or solar term within a few minutes of local midnight can land on the neighbouring day; this is below the accuracy of the truncated series and of the predicted ΔT for future years.',
        'Before 1900, ΔT is held at its 1900 value: earlier dates still convert but are less checked.',
        'No test compares Vietnamese dates with Chinese or Korean ones.',
        'Not suitable for high-precision astronomy.',
      ],
    },
    {
      title: 'Cultural content is for reference',
      body: [
        'Lucky days and hours, the twelve day officers and death anniversaries are traditional conventions. The library follows the Vietnamese calendars checked in its tests; other traditions may differ.',
        'The death-anniversary rules are chosen by the library and not checked against an external source: a death in a leap month is remembered in the regular month with the same number; a death on day 30 is remembered on day 30 in a 30-day month and on day 29 in a 29-day month.',
        'This content is cultural reference, not professional advice.',
      ],
    },
    {
      title: 'Open-source library',
      body: [
        '**qelunai-lunar** is written in pure Dart, extracted from the Qelunai app and released under the MIT license. Source code, tests and the full methodology: https://github.com/qelunai/qelunai-lunar',
      ],
    },
  ],
};

const zh: MethodContent = {
  title: '方法与准确性',
  description: 'Qelunai 如何计算越南农历、闰月、节气、干支和黄道时辰；哪些已与公开历书核对，以及局限。',
  footer: '方法与准确性',
  lead: 'Qelunai 的农历计算代码已拆分为开源库 qelunai-lunar。本页概述该库的计算方法、哪些结果已与公开的越南历书核对、哪些尚未核对。',
  sections: [
    {
      title: '农历如何计算',
      body: ['越南历是阴阳历。每个农历月从当地时间的**朔日**（新月）开始；农历日 = 自不晚于该日的最近朔日起的天数，加 1。'],
      list: [
        '公历日期按 Fliegel 与 Van Flandern（1968）的公式换算为儒略日数（JDN），见 Meeus《Astronomical Algorithms》（第 2 版，1998）第 7 章。',
        '**朔：**依 Meeus 第 49 章（月相）：平朔时刻加上简化的周期项，周期项以太阳平近点角、月球平近点角和月球纬度参数为自变量。结果为 TT 时间，减去 ΔT 得到 UT。',
        '**太阳黄经：**依 Meeus 第 25 章的低精度方法：平黄经和平近点角、中心差的三项，并做章动和光行差改正。',
        '**ΔT = TT − UT：**采用 F. Espenak 与 J. Meeus 的多项式（NASA TP-2006-214141）中 1900–2150 年各段。1900 年以前沿用 1900 年的值。',
        '本库的天文核心依据公开天文资料独立编写（clean-room），流程和来源记录在 https://github.com/qelunai/qelunai-lunar/blob/main/CLEANROOM.md',
        '默认时区为 **UTC+7**（越南时间），与设备时区无关。当朔或中气临近午夜时，中国（UTC+8）或韩国（UTC+9）的农历可能相差一天，进而相差一个月或一年。',
        '只使用公历：1582-10-15 之前的日期按外推公历计算。',
      ],
    },
    {
      title: '闰月',
      list: [
        '**十一月**是包含冬至日的农历月：本库求出太阳经过黄经 270° 的时刻，取包含该时刻的当地日期；包含这一天的农历月就是十一月。',
        '若从本年十一月初到次年十一月初共有 13 个农历月，该年有闰月。',
        '闰月是十一月之后第一个不含中气的月：该月初一当地午夜所在的 30° 中气区间，与下个月初一午夜所在的区间相同。闰月沿用前一个月的月份数；例如农历 2025 年有闰六月。',
        '农历年在正月初一更替。',
      ],
      ordered: true,
      after: ['如果查询该年并不存在的闰月（例如 2026 年闰六月），库会返回无此日期。'],
    },
    {
      title: '节气',
      list: [
        '二十四节气把太阳黄经分为 24 段，每段 15°：春分在 0°，冬至在 270°。',
        '某一天所属的节气，以当地时间当天零点时生效的节气为准，因此交节当天是前一个节气的最后一天。在历法事件列表中，新节气的名称写在交节当天，与印刷历书一致。',
      ],
    },
    {
      title: '干支',
      list: [
        '**日：**天干 = (JDN + 9) mod 10，地支 = (JDN + 1) mod 12。基准：2024-02-10 为甲辰日。',
        '**农历年：**1984 年为甲子年；天干地支按距 1984 年的年数推算。',
        '**农历月：**按五虎遁规则，正月天干由年干推出，每月递进一干；地支固定，正月为寅……腊月为丑。闰月沿用同号月份的干支。',
      ],
    },
    {
      title: '黄道日与黄道时辰',
      list: [
        '十二值神的固定顺序：青龙、明堂、天刑、朱雀、金匮、宝光、白虎、玉堂、天牢、玄武、司命、勾陈。六个黄道神：青龙、明堂、金匮、宝光、玉堂、司命。',
        '采用越南万年历逐日刊印的黄道黑道表：寅/申 → 青龙在子；卯/酉 → 寅；辰/戌 → 辰；巳/亥 → 午；午/子 → 申；未/丑 → 戌；其余值神按地支顺序排列。',
        '**黄道日**按**农历月**的地支；闰月使用同号月份的地支。在农历月与节气月结果不同的 9 天里，所核对的越南万年历全部按农历月。',
        '**黄道时辰**按日支；十二时辰为民用钟点：子时 23–1 点，丑时 1–3 点……亥时 21–23 点。23:00–24:00 属于当天还是次日的子时，各派说法不一；本库算作当天。',
        '**十二建除**（建、除、满、平、定、执、破、危、成、收、开、闭）按**节气月**：在每个节交替（立春 → 寅，惊蛰 → 卯……），而不是在朔日交替。',
      ],
    },
    {
      title: '核对：换算与干支',
      body: ['本库的测试（75 项）核对以下数值。“来源”一栏如实照录测试代码中的记录。'],
      table: {
        head: ['内容', '核对数值', '测试中记录的来源'],
        rows: [
          ['越南春节（正月初一）', '2023-01-22、2024-02-10、2025-01-29、2026-02-17、2027-02-06', '多家独立的越南新闻来源（未注明网址）'],
          ['雄王祭祖日（三月初十）', '2024-04-18、2025-04-07', '未注明网址'],
          ['存在闰月', '农历 2023 年有闰二月；2025 年有闰六月（只核对是否存在，未核对起始日）', '公开资料（未注明网址）'],
          ['年干支', '2023 癸卯、2024 甲辰、2025 乙巳、2026 丙午、2027 丁未', '上述春节的年份名称'],
          ['日干支', '2024-02-10 为甲辰', '多种越南万年历（未注明网址）'],
          ['月干支', '2024 年正月为丙寅', '未单独注明来源'],
          ['内部一致性', '1900–2100 年间每一天做公历 → 农历 → 公历换算都回到原日期', '无外部来源'],
        ],
      },
    },
    {
      title: '核对：黄道日、建除、节气',
      body: ['值日神与历法网站核对，访问日期 2026-10-28。这 9 天都是农历月与节气月结果不同的日子。'],
      table: {
        head: ['日期', '干支', '值日神', '来源'],
        rows: [
          ['2025-02-01', '辛丑', '明堂', 'baoquocte.vn'],
          ['2025-05-01', '庚午', '青龙', 'vtcnews.vn'],
          ['2025-08-14（农历闰六月廿一）', '乙卯', '宝光', 'ngaydep.com'],
          ['2026-02-10', '乙卯', '宝光', 'ngaydep.com'],
          ['2026-06-10', '乙卯', '玄武', 'ngaydep.com'],
          ['2026-08-09', '乙卯', '宝光', 'ngaydep.com'],
          ['2026-10-09', '丙辰', '天刑', 'ngaydep.com、xemlicham.com'],
          ['2026-11-08', '丙戌', '白虎', 'ngaydep.com、xemlicham.com'],
          ['2026-12-08', '丙辰', '司命', 'ngaydep.com'],
        ],
      },
      after: [
        '**黄道时辰**已核对：2025-02-01（全部 12 个时辰，baoquocte.vn）、2025-05-01（vtcnews.vn、baolamdong.vn）、2026-02-10（xemlicham.com、baohatinh.vn、ngaydep.com）、2026-10-09（xemlicham.com、ngaydep.com）和 2026-10-28（xemlicham.com）。对 2025–2026 年的每一天，测试都检查恰好有 6 个黄道时辰。',
        '**建除：**2026-10-28 和 2026-02-10 为“除”（xemlicham.com、ngaydep.com）。2026-02-10 是农历腊月廿三，但已过立春：按节气月为“除”，按农历月则为“满”。',
        '**节气：**对 2026–2027 年的每一天，节气区间长 14–16 天，边界正是节气交替处；这是内部一致性检查。1900–2100 年每一天的节气序号都已与 NASA JPL DE440s 核对（见下一节）。Qelunai 应用曾用美国海军天文台公布的 2024 年春分、夏至、秋分、冬至时刻检查太阳黄经函数。',
        '测试中的其他样例日期（初一、十五、忌日样例、2025 年闰六月的起始日）是算法计算出的值，尚未与外部来源核对。',
      ],
    },
    {
      title: '天文核对：NASA JPL DE440s，1900–2100 年',
      body: ['朔的时刻和太阳经过每个 15° 整数倍的时刻（UTC+7）由 NASA JPL 的 DE440s 星历表借助 Skyfield 库生成，与任何农历代码无关，再与本库在 1900-01-01 至 2100-12-31 的每一天（共 73,414 天）的结果对比。'],
      table: {
        head: ['检查项', '结果'],
        rows: [
          ['朔落在错误的当地日期', '2 例：1944-06-20 23:59:17 和 1967-07-07 23:59:59，均距午夜不超过 43 秒'],
          ['午夜时的节气序号与 JPL 不同', '11 天，均距交节时刻不超过 8 分钟'],
        ],
      },
      after: ['只有当 JPL 时刻距午夜不超过 2 分钟（朔）或 10 分钟（节气）时，测试才接受差异，且接受的例数上限分别为 2 和 11。'],
    },
    {
      title: '局限',
      list: [
        '已与公开历书核对的：上述日期，范围在 **2023–2027** 年。此范围以外的结果用相同方法计算，但未经核对。',
        '天文部分已与 NASA JPL DE440s 核对的范围为 **1900–2100** 年，此范围以外尚未核对。',
        '朔或节气若落在当地午夜前后几分钟内，可能被归到相邻的一天；这一误差小于简化级数以及未来年份 ΔT 预测值的精度。',
        '1900 年以前 ΔT 沿用 1900 年的值：更早的日期仍可换算，但核对较少。',
        '尚无将越南农历与中国或韩国农历对比的测试。',
        '不适用于高精度天文计算。',
      ],
    },
    {
      title: '文化内容仅供参考',
      body: [
        '黄道日、黄道时辰、十二建除和忌日都是传统惯例。本库遵循测试中核对过的越南历书；其他传统可能不同。',
        '忌日规则由本库自行选定，未与外部来源核对：闰月去世者在同号的正常月份做忌；三十日去世者，大月在三十日、小月在二十九日做忌。',
        '这些内容仅供文化参考，不构成专业建议。',
      ],
    },
    {
      title: '开源库',
      body: ['**qelunai-lunar** 以纯 Dart 编写，从 Qelunai 应用中拆分出来，采用 MIT 许可证发布。源代码、测试和完整的方法说明：https://github.com/qelunai/qelunai-lunar'],
    },
  ],
};

const ko: MethodContent = {
  title: '계산 방법과 정확도',
  description: 'Qelunai가 베트남 음력, 윤달, 절기, 간지, 황도시를 계산하는 방법과 공개된 달력과 대조한 항목, 그리고 한계.',
  footer: '계산 방법과 정확도',
  lead: 'Qelunai의 음력 계산 코드는 오픈 소스 라이브러리 qelunai-lunar로 분리되었습니다. 이 페이지는 라이브러리의 계산 방법과 공개된 베트남 달력과 대조한 항목, 아직 대조하지 않은 항목을 정리합니다.',
  sections: [
    {
      title: '음력은 어떻게 계산하나요',
      body: ['베트남 달력은 태음태양력입니다. 음력 한 달은 현지 시간 기준 **삭일**(새달)에 시작하며, 음력 날짜는 해당 날짜보다 늦지 않은 가장 최근 삭일부터 센 일수에 1을 더한 값입니다.'],
      list: [
        '양력 날짜는 Fliegel과 Van Flandern(1968)의 공식으로 율리우스일(JDN)로 바꿉니다. Meeus의 《Astronomical Algorithms》(제2판, 1998) 7장을 참고하세요.',
        '**삭:** Meeus 49장(달의 위상)을 따릅니다. 평균 삭 시각에 태양 평균근점이각, 달 평균근점이각, 달의 위도 인수로 이루어진 간략화한 주기항을 더합니다. 결과는 TT 기준이며 ΔT를 빼서 UT로 바꿉니다.',
        '**태양 황경:** Meeus 25장의 저정밀 방법을 따릅니다. 평균 황경과 평균근점이각, 중심차 3항을 쓰고 장동과 광행차를 보정합니다.',
        '**ΔT = TT − UT:** F. Espenak과 J. Meeus의 다항식(NASA TP-2006-214141) 중 1900–2150년 구간을 씁니다. 1900년 이전에는 1900년 값을 그대로 씁니다.',
        '라이브러리의 천문 핵심 코드는 공개된 천문 자료만으로 독립적으로(클린룸 방식) 작성했으며, 과정과 출처는 https://github.com/qelunai/qelunai-lunar/blob/main/CLEANROOM.md 에 기록되어 있습니다.',
        '기본 시간대는 **UTC+7**(베트남 시간)이며 기기의 시간대와 상관없습니다. 삭이나 중기가 자정 무렵이면 중국(UTC+8)이나 한국(UTC+9) 음력과 하루, 나아가 한 달이나 한 해가 차이 날 수 있습니다.',
        '그레고리력만 씁니다. 1582-10-15 이전 날짜는 그레고리력을 거슬러 적용해 계산합니다.',
      ],
    },
    {
      title: '윤달',
      list: [
        '**11월**은 동짓날이 든 음력 달입니다. 라이브러리는 태양이 황경 270°를 지나는 시각을 구하고 그 시각이 속한 현지 날짜를 잡은 뒤, 그날이 든 음력 달을 11월로 정합니다.',
        '올해 11월 초부터 다음 해 11월 초까지 음력 달이 13개이면 그해에는 윤달이 있습니다.',
        '윤달은 11월 뒤에 오는 첫 번째, 중기가 없는 달입니다. 그 달 초하루 현지 자정의 30° 중기 구간이 다음 달 초하루 자정의 구간과 같으면 중기가 없는 달입니다. 윤달은 바로 앞 달의 숫자를 씁니다. 예를 들어 음력 2025년에는 윤6월이 있습니다.',
        '음력 해는 정월 초하루에 바뀝니다.',
      ],
      ordered: true,
      after: ['그해에 없는 윤달(예: 2026년 윤6월)을 양력으로 바꾸려 하면 라이브러리는 해당 날짜가 없다고 알려 줍니다.'],
    },
    {
      title: '절기',
      list: [
        '24절기는 태양 황경을 15°씩 24구간으로 나눕니다. 춘분이 0°, 동지가 270°입니다.',
        '하루의 절기는 현지 시간 자정에 유효한 절기로 정하므로, 절기가 바뀌는 날은 앞 절기의 마지막 날이 됩니다. 달력 행사 목록에는 인쇄된 달력처럼 새 절기 이름을 바뀌는 당일에 적습니다.',
      ],
    },
    {
      title: '간지',
      list: [
        '**일:** 천간 = (JDN + 9) mod 10, 지지 = (JDN + 1) mod 12. 기준: 2024-02-10은 갑진일입니다.',
        '**음력 연도:** 1984년이 갑자년이며, 천간과 지지는 1984년부터의 햇수로 정합니다.',
        '**음력 월:** 오호둔 규칙에 따라 정월의 천간은 연간에서 정해지고 달마다 천간이 하나씩 나아갑니다. 지지는 고정되어 정월이 인, 섣달이 축입니다. 윤달은 같은 숫자 달의 간지를 씁니다.',
      ],
    },
    {
      title: '황도일과 황도시',
      list: [
        '12신의 고정 순서: 청룡, 명당, 천형, 주작, 금궤, 보광, 백호, 옥당, 천뢰, 현무, 사명, 구진. 황도신 여섯: 청룡, 명당, 금궤, 보광, 옥당, 사명.',
        '베트남 만세력이 날마다 싣는 황도·흑도 표를 따릅니다: 인/신 → 청룡이 자에; 묘/유 → 인; 진/술 → 진; 사/해 → 오; 오/자 → 신; 미/축 → 술; 나머지 신은 지지 순서대로 이어집니다.',
        '**황도일**은 **음력 월**의 지지를 따르며, 윤달은 같은 숫자 달의 지지를 씁니다. 음력 월과 절기 월의 결과가 다른 9일 동안, 확인한 베트남 만세력은 모두 음력 월을 따랐습니다.',
        '**황도시**는 일지를 따르며 12시진은 시계 시각입니다: 자시 23–1시, 축시 1–3시, …, 해시 21–23시. 23:00–24:00이 그날의 자시인지 다음 날의 자시인지는 학파마다 다르며, 라이브러리는 그날의 자시로 봅니다.',
        '**십이직**(건, 제, 만, 평, 정, 집, 파, 위, 성, 수, 개, 폐)은 **절기 월**을 따릅니다. 삭일이 아니라 절기마다 바뀝니다(입춘 → 인, 경칩 → 묘, …).',
      ],
    },
    {
      title: '검증: 변환과 간지',
      body: ['라이브러리의 테스트(75개)는 아래 값을 대조합니다. 출처 열은 테스트 코드에 적힌 내용 그대로입니다.'],
      table: {
        head: ['항목', '대조한 값', '테스트에 적힌 출처'],
        rows: [
          ['뗏(음력 1월 1일)', '2023-01-22, 2024-02-10, 2025-01-29, 2026-02-17, 2027-02-06', '독립된 여러 베트남 언론(주소 없음)'],
          ['훙왕 기일(음력 3월 10일)', '2024-04-18, 2025-04-07', '주소 없음'],
          ['윤달 유무', '음력 2023년 윤2월, 2025년 윤6월(존재 여부만 확인, 시작일은 미확인)', '공개 자료(주소 없음)'],
          ['연간지', '2023 계묘, 2024 갑진, 2025 을사, 2026 병오, 2027 정미', '위 뗏의 해 이름'],
          ['일간지', '2024-02-10 = 갑진', '여러 베트남 만세력(주소 없음)'],
          ['월간지', '2024년 정월 = 병인', '별도 출처 없음'],
          ['내부 일관성', '1900–2100년의 모든 날짜에서 양력 → 음력 → 양력 변환 결과가 원래 날짜와 같음', '외부 출처 없음'],
        ],
      },
    },
    {
      title: '검증: 황도일, 십이직, 절기',
      body: ['일신은 달력 웹사이트와 대조했으며 접속일은 2026-10-28입니다. 9일 모두 음력 월과 절기 월의 결과가 다른 날입니다.'],
      table: {
        head: ['날짜', '간지', '일신', '출처'],
        rows: [
          ['2025-02-01', '신축', '명당', 'baoquocte.vn'],
          ['2025-05-01', '경오', '청룡', 'vtcnews.vn'],
          ['2025-08-14(음력 윤6월 21일)', '을묘', '보광', 'ngaydep.com'],
          ['2026-02-10', '을묘', '보광', 'ngaydep.com'],
          ['2026-06-10', '을묘', '현무', 'ngaydep.com'],
          ['2026-08-09', '을묘', '보광', 'ngaydep.com'],
          ['2026-10-09', '병진', '천형', 'ngaydep.com · xemlicham.com'],
          ['2026-11-08', '병술', '백호', 'ngaydep.com · xemlicham.com'],
          ['2026-12-08', '병진', '사명', 'ngaydep.com'],
        ],
      },
      after: [
        '**황도시** 대조: 2025-02-01(12시진 전부, baoquocte.vn), 2025-05-01(vtcnews.vn · baolamdong.vn), 2026-02-10(xemlicham.com · baohatinh.vn · ngaydep.com), 2026-10-09(xemlicham.com · ngaydep.com), 2026-10-28(xemlicham.com). 2025–2026년의 모든 날짜에 대해 황도시가 정확히 6개인지 테스트합니다.',
        '**십이직:** 2026-10-28과 2026-02-10은 제(除)입니다(xemlicham.com · ngaydep.com). 2026-02-10은 음력 섣달 23일이지만 입춘이 지났으므로 절기 월로는 제, 음력 월로는 만이 됩니다.',
        '**절기:** 2026–2027년의 모든 날짜에서 절기 구간은 14–16일이고 경계는 실제로 절기가 바뀌는 곳입니다. 이는 내부 일관성 검사입니다. 1900–2100년 모든 날짜의 절기 번호는 NASA JPL DE440s와 대조했습니다(다음 절 참조). Qelunai 앱은 미국 해군 천문대의 2024년 춘분·하지·추분·동지 시각으로 태양 황경 함수를 검사합니다.',
        '테스트의 다른 예시 날짜(초하루, 보름, 기일 예시, 2025년 윤6월 시작일)는 알고리즘이 계산한 값이며 외부 출처와 아직 대조하지 않았습니다.',
      ],
    },
    {
      title: '천문 대조: NASA JPL DE440s, 1900–2100년',
      body: ['삭 시각과 태양이 15°의 배수를 지나는 시각(UTC+7)을 NASA JPL의 DE440s 천체력에서 Skyfield 라이브러리로 생성했습니다. 이 값은 어떤 음력 코드와도 독립적이며, 1900-01-01부터 2100-12-31까지 모든 날짜(73,414일)에 대해 라이브러리 결과와 비교했습니다.'],
      table: {
        head: ['검사', '결과'],
        rows: [
          ['삭이 잘못된 현지 날짜에 놓임', '2건: 1944-06-20 23:59:17, 1967-07-07 23:59:59. 둘 다 자정에서 43초 이내'],
          ['자정 기준 절기 번호가 JPL과 다름', '11일. 모두 절기가 바뀌는 시각에서 8분 이내'],
        ],
      },
      after: ['테스트는 JPL 시각이 자정에서 2분(삭) 또는 10분(절기) 이내일 때만 차이를 허용하며, 허용 건수 상한은 각각 2건과 11건입니다.'],
    },
    {
      title: '한계',
      list: [
        '공개된 달력과 대조한 범위: 위의 날짜들, **2023–2027년** 안. 이 범위 밖의 결과는 같은 방법으로 계산하지만 대조하지 않았습니다.',
        '천문 계산은 NASA JPL DE440s와 **1900–2100년** 범위에서 대조했습니다. 이 범위 밖은 대조하지 않았습니다.',
        '삭이나 절기가 현지 자정 전후 몇 분 안에 들면 이웃한 날짜로 분류될 수 있습니다. 이 오차는 간략화한 급수와 미래 연도 ΔT 예측값의 정밀도보다 작습니다.',
        '1900년 이전에는 ΔT를 1900년 값으로 고정합니다. 그 이전 날짜도 변환은 되지만 검증이 적습니다.',
        '베트남 음력과 중국·한국 음력을 비교하는 테스트는 아직 없습니다.',
        '고정밀 천문 계산에는 적합하지 않습니다.',
      ],
    },
    {
      title: '문화 콘텐츠는 참고용입니다',
      body: [
        '황도일, 황도시, 십이직, 기일은 전통 관습입니다. 라이브러리는 테스트에서 확인한 베트남 달력을 따르며, 다른 전통은 다를 수 있습니다.',
        '기일 규칙은 라이브러리가 정한 것으로 외부 출처와 대조하지 않았습니다: 윤달에 돌아가신 분은 같은 숫자의 평달에 기일을 지내고, 30일에 돌아가신 분은 큰달이면 30일, 작은달이면 29일에 지냅니다.',
        '이 내용은 문화적 참고 자료이며 전문적인 조언이 아닙니다.',
      ],
    },
    {
      title: '오픈 소스 라이브러리',
      body: ['**qelunai-lunar**는 순수 Dart로 작성되었고 Qelunai 앱에서 분리되었으며 MIT 라이선스로 공개됩니다. 소스 코드, 테스트, 전체 방법 문서: https://github.com/qelunai/qelunai-lunar'],
    },
  ],
};

const content: Record<string, MethodContent> = { vi, en, zh, ko };

/** Copy for a language; unknown languages get English. */
export function methodFor(code: string): MethodContent {
  return content[code] ?? en;
}
