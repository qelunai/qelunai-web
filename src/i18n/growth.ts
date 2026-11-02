/** New SEO tools and explanatory guides. User-facing copy is localized here. */
export type GrowthPageId = 'calendar' | 'hours' | 'iching';
type Content = {title:string;description:string;eyebrow:string;intro:string;toolHeading?:string;guide:{heading:string;paragraphs:string[]}[];faq:{q:string;a:string}[];short:string;cta:string;method:string;dateLabel:string;submit:string;result:string;dayLabel:string;monthLabel:string;yearLabel:string;leap:string;canChi:string;goodHours:string;error:string;today:string;ctaNote:string;
 /** Vietnamese stem, branch and spirit names to this language's; `gap` joins a stem and branch, `list` joins the good hours. */
 terms?:Record<string,string>;gap?:string;list?:string};
const vi:Record<GrowthPageId,Content>={
 calendar:{
  title:'Lịch âm hôm nay và đổi ngày dương sang âm | Qelunai',
  description:'Tra lịch âm Việt Nam theo UTC+7 miễn phí. Xem ngày âm, tháng nhuận, Can Chi và giờ hoàng đạo, không cần đăng nhập.',
  eyebrow:'Công cụ miễn phí · Lịch Việt',short:'Lịch âm',intro:'Tra ngày âm theo múi giờ Việt Nam (UTC+7), hiển thị Can Chi và tháng nhuận. Phép tính thực hiện ngay trên trình duyệt, không gửi ngày bạn chọn lên máy chủ.',
  toolHeading:'Đổi ngày dương sang âm',guide:[
   {heading:'Âm lịch Việt Nam là gì?',paragraphs:['Đây là lịch âm dương: tháng được xác định theo chu kỳ Mặt Trăng, còn tháng nhuận dựa trên vị trí Mặt Trời. Khác biệt múi giờ UTC+7 có thể tạo chênh lệch với lịch Trung Quốc ở một số ngày.','Công cụ dùng công thức thiên văn xấp xỉ của Meeus, đã đối chiếu với lịch thiên văn NASA JPL (DE440s) cho mọi điểm Sóc và tiết khí 1900–2100. Với ngày có Sóc cách nửa đêm vài phút, nên đối chiếu thêm lịch chính thức.']},
   {heading:'Vì sao nên tải Qelunai?',paragraphs:['Ứng dụng có lịch tháng, lịch âm theo ngày, nhắc mùng một/rằm, Sổ giỗ gia đình và widget; các phép tính cốt lõi chạy trên thiết bị. Bản thử nghiệm hiện dành cho người được mời.']}
  ],faq:[{q:'Ngày âm được tính theo múi giờ nào?',a:'Giờ Việt Nam UTC+7, không lấy lịch Trung Quốc UTC+8.'},{q:'Công cụ có cần đăng nhập không?',a:'Không. Kết quả tính trong trình duyệt và không lưu ngày đã nhập trên máy chủ.'}],
  cta:'Đăng ký trải nghiệm app',method:'Phương pháp: xấp xỉ Meeus và quy tắc tháng 11/nhuận. Chỉ hỗ trợ năm 1900–2100; cần đối chiếu với lịch chính thức trong trường hợp biên.',dateLabel:'Ngày dương lịch',submit:'Tra ngày',result:'Kết quả',dayLabel:'Ngày âm',monthLabel:'Tháng âm',yearLabel:'Năm âm',leap:'Tháng nhuận',canChi:'Can Chi ngày',goodHours:'Giờ hoàng đạo',error:'Ngày không hợp lệ hoặc ngoài khoảng 1900–2100.',today:'Hôm nay (giờ Việt Nam)',ctaNote:'Ứng dụng đang trong giai đoạn thử nghiệm; yêu cầu tham gia được gửi qua email.'
 },
 hours:{
  title:'Giờ hoàng đạo hôm nay theo lịch Việt | Qelunai',
  description:'Tra 12 giờ theo địa chi, sáu giờ hoàng đạo theo ngày. Bảng quy tắc truyền thống, miễn phí và không cần tài khoản.',
  eyebrow:'Công cụ miễn phí · Giờ trong ngày',short:'Giờ hoàng đạo',intro:'Xem 12 khung giờ (mỗi khung khoảng hai giờ) theo địa chi và hệ trực thần truyền thống. Đây là cách phân loại mang tính văn hóa, không dự báo kết quả thực tế.',
  toolHeading:'Tra giờ hoàng đạo theo ngày',guide:[
   {heading:'Giờ Tý bắt đầu lúc mấy giờ?',paragraphs:['Theo hệ giờ địa chi thông dụng, giờ Tý là 23:00–01:00, Sửu là 01:00–03:00, ... Hợi là 21:00–23:00. Có trường phái khác nhau về cách chuyển ngày sau 23:00.']},
   {heading:'Dùng kết quả này thế nào?',paragraphs:['Các nhãn hoàng đạo/hắc đạo là quy ước lịch truyền thống, không có bằng chứng khoa học rằng chúng quyết định thành bại. Hãy ưu tiên điều kiện an toàn, sức khỏe, pháp lý và thực tế khi chọn thời điểm.']}
  ],faq:[{q:'Một ngày có mấy giờ hoàng đạo?',a:'Theo bảng trực thần áp dụng, mỗi ngày có sáu khung giờ được gọi là hoàng đạo.'},{q:'Giờ hoàng đạo có bảo đảm may mắn không?',a:'Không. Đây là hệ thống diễn giải văn hóa truyền thống để tham khảo.'}],
  cta:'Thử Qelunai trên điện thoại',method:'Phân loại dựa trên 12 trực thần Thanh Long → Câu Trận, chuyển theo địa chi của ngày. Không phải dự báo khoa học.',dateLabel:'Ngày dương lịch',submit:'Tra giờ',result:'Các khung giờ',dayLabel:'Ngày âm',monthLabel:'Tháng âm',yearLabel:'Năm âm',leap:'Tháng nhuận',canChi:'Can Chi ngày',goodHours:'Giờ hoàng đạo',error:'Ngày không hợp lệ hoặc ngoài khoảng 1900–2100.',today:'Hôm nay (giờ Việt Nam)',ctaNote:'Đăng ký beta qua email, không yêu cầu dữ liệu sinh cá nhân.'
 },
 iching:{
  title:'Kinh Dịch là gì? 64 quẻ và cách gieo quẻ | Qelunai',
  description:'Tìm hiểu Bát quái, 64 quẻ Kinh Dịch, hào âm dương và cách gieo ba đồng xu. Phương pháp, nguồn và giới hạn.',
  eyebrow:'Thư viện tri thức · Kinh Dịch',short:'Kinh Dịch',intro:'Tìm hiểu cấu trúc 64 quẻ, sáu hào và một phương pháp gieo quẻ thông dụng. Qelunai trình bày Kinh Dịch như một truyền thống tư tưởng để chiêm nghiệm, không phải lời tiên tri.',
  guide:[
   {heading:'Từ Bát quái đến 64 quẻ',paragraphs:['Một quái có ba hào âm hoặc dương; hai quái chồng nhau tạo thành sáu hào, tức 64 tổ hợp. Hào được đếm từ dưới lên trên.','Mỗi quẻ có văn bản và truyền thống diễn giải phong phú. Những bản dịch hiện đại có thể còn bản quyền, vì vậy Qelunai dùng nội dung tự biên soạn và tài liệu được phép tham khảo.']},
   {heading:'Gieo quẻ bằng ba đồng xu',paragraphs:['Người dùng gieo ba đồng xu sáu lần và ghi kết quả từ hào dưới lên. Tổng điểm hoặc mặt đồng xu được ánh xạ sang hào âm/dương, tĩnh/động theo hệ đã chọn. Hào động có thể tạo quẻ biến.','Ứng dụng Qelunai đã có module gieo quẻ, lịch sử quẻ và lời giải thích tham khảo. Website này chỉ giới thiệu phương pháp, không giả lập kết quả gieo quẻ.']},
   {heading:'Tự suy ngẫm, không phán quyết',paragraphs:['Kinh Dịch có giá trị văn hóa, triết học và lịch sử. Không nên dùng quẻ thay thế chẩn đoán y tế, tư vấn tài chính, pháp lý hay quyết định quan trọng khác.']}
  ],faq:[{q:'Kinh Dịch có bao nhiêu quẻ?',a:'64 quẻ, mỗi quẻ gồm sáu hào.'},{q:'Tại sao gieo sáu lần?',a:'Mỗi lần tạo một hào; sáu hào ghép thành một quẻ, đếm từ dưới lên.'}],
  cta:'Trải nghiệm gieo quẻ trong Qelunai',method:'Thông tin diễn giải mang tính giáo dục và tham khảo văn hóa.',dateLabel:'',submit:'',result:'',dayLabel:'',monthLabel:'',yearLabel:'',leap:'',canChi:'',goodHours:'',error:'',today:'',ctaNote:'Module gieo quẻ nằm trong ứng dụng; hiện đang thử nghiệm nội bộ.'
 }
};
const en:Record<GrowthPageId,Content>={
 calendar:{
  title:'Vietnamese lunar calendar today and solar-to-lunar conversion | Qelunai',description:'Free Vietnamese lunar date converter using UTC+7. View lunar months, leap months, Can Chi and auspicious hours without signing in.',eyebrow:'Free tool · Vietnamese lunar calendar',short:'Lunar calendar',intro:'Convert a Gregorian date to the Vietnamese lunisolar calendar (UTC+7). Results are calculated in your browser without sending the selected date to a server.',toolHeading:'Convert a Gregorian date',guide:[
   {heading:'How does the Vietnamese lunar calendar work?',paragraphs:['The start of each lunar month follows the new moon. Leap months follow solar longitude rules. Different civil time zones can sometimes cause Vietnamese and Chinese lunar dates to differ.','This tool uses Meeus’s approximate astronomical formulas, checked against NASA JPL’s DE440s ephemeris for every new moon and solar term from 1900 to 2100. Dates with a new moon within a few minutes of midnight should be confirmed with an official calendar.']},
   {heading:'What does the mobile app add?',paragraphs:['Qelunai provides a month calendar, new/full moon reminders, family memorial dates and home-screen widgets. The app is currently available to invited testers.']}
 ],faq:[{q:'Which time zone is used?',a:'Vietnam civil time, UTC+7, rather than the Chinese UTC+8 calendar.'},{q:'Is sign-in required?',a:'No. Your selected date stays in the browser.'}],
 cta:'Request beta access',method:'Method: approximate Meeus astronomy and lunar-month/leap-month rules. Years 1900–2100; verify edge dates independently.',dateLabel:'Gregorian date',submit:'Convert',result:'Result',dayLabel:'Lunar day',monthLabel:'Lunar month',yearLabel:'Lunar year',leap:'Leap month',canChi:'Day Can Chi',goodHours:'Auspicious hours',error:'Invalid date or year outside 1900–2100.',today:'Today (Vietnam time)',ctaNote:'Qelunai is in private testing. Beta requests are sent by email.'
 },
 hours:{
 title:'Vietnamese auspicious hours today | Qelunai',description:'See the twelve traditional two-hour periods and six auspicious periods for a selected date. Free and no account.',eyebrow:'Free tool · Traditional hours',short:'Auspicious hours',intro:'Explore the twelve two-hour Earthly Branch periods and traditional labels. These cultural classifications are not scientifically established predictions.',toolHeading:'Find traditional auspicious hours',guide:[
 {heading:'When does the Tý hour start?',paragraphs:['The Tý period runs from 23:00 to 01:00, Sửu from 01:00 to 03:00, and so on. Schools differ on how a day changes at 23:00.']},
 {heading:'How should these results be used?',paragraphs:['Auspicious hours are part of cultural calendar traditions, not a guarantee of successful outcomes. Prioritize practical safety and evidence-based decisions.']}
 ],faq:[{q:'How many auspicious periods are there?',a:'Six of the twelve periods in the traditional scheme used here.'},{q:'Are these predictions?',a:'No. They are descriptions of traditional calendar conventions.'}],
 cta:'Try Qelunai on mobile',method:'Rule: twelve traditional spirits ordered from Thanh Long to Câu Trận, indexed by the date branch. Not a scientific forecast.',dateLabel:'Gregorian date',submit:'Show hours',result:'Hour periods',dayLabel:'Lunar day',monthLabel:'Lunar month',yearLabel:'Lunar year',leap:'Leap month',canChi:'Day Can Chi',goodHours:'Auspicious hours',error:'Invalid date or year outside 1900–2100.',today:'Today (Vietnam time)',ctaNote:'Request beta access by email. No birth data is required.'
 },
 iching:{
 title:'What is the I Ching? 64 hexagrams and coin casting | Qelunai',description:'An accessible guide to the I Ching: eight trigrams, 64 hexagrams, yin/yang lines and three-coin casting.',eyebrow:'Learning library · I Ching',short:'I Ching',intro:'Learn how the 64 hexagrams are formed and how a common coin-casting method works. Qelunai treats the I Ching as a cultural and philosophical tradition, not prophecy.',guide:[
 {heading:'Eight trigrams, 64 hexagrams',paragraphs:['A trigram has three yin or yang lines. Combining two trigrams makes a hexagram with six lines, yielding 64 possibilities. Lines are counted from the bottom.','Modern translations and interpretations may still be copyrighted. Qelunai uses original explanations and licensed references.']},
 {heading:'The three-coin method',paragraphs:['Cast three coins six times and record each resulting line, starting from the bottom. Depending on the convention, changing lines yield a transformed hexagram.','The Qelunai app provides casting, history and explanations. This website introduces the method without fabricating reading results.']},
 {heading:'Reflection, not a verdict',paragraphs:['The I Ching is valuable as cultural and philosophical heritage. It does not replace professional medical, financial or legal advice.']}
 ],faq:[{q:'How many hexagrams are there?',a:'64, each consisting of six lines.'},{q:'Why are coins cast six times?',a:'Each cast forms one of the six lines of a hexagram, bottom to top.'}],
 cta:'Explore I Ching in Qelunai',method:'Educational cultural reference only.',dateLabel:'',submit:'',result:'',dayLabel:'',monthLabel:'',yearLabel:'',leap:'',canChi:'',goodHours:'',error:'',today:'',ctaNote:'The app is currently in private testing.'
 }
};
const viStems=['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
const viBranches=['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
const viSpirits=['Thanh Long','Minh Đường','Thiên Hình','Chu Tước','Kim Quỹ','Kim Đường','Bạch Hổ','Ngọc Đường','Thiên Lao','Huyền Vũ','Tư Mệnh','Câu Trận'];
/** Pairs the Vietnamese names with this language's, in the same order; the Han and Hangul forms follow the app's `lib/l10n/terms.dart`. */
const termsFrom=(stems:string,branches:string,spirits:string[])=>Object.fromEntries([...viStems.map((v,i)=>[v,[...stems][i]]),...viBranches.map((v,i)=>[v,[...branches][i]]),...viSpirits.map((v,i)=>[v,spirits[i]])]);
const zhTerms=termsFrom('甲乙丙丁戊己庚辛壬癸','子丑寅卯辰巳午未申酉戌亥',['青龙','明堂','天刑','朱雀','金匮','宝光','白虎','玉堂','天牢','玄武','司命','勾陈']);
const koTerms=termsFrom('갑을병정무기경신임계','자축인묘진사오미신유술해',['청룡','명당','천형','주작','금궤','보광','백호','옥당','천뢰','현무','사명','구진']);
const zhTool={dayLabel:'农历日',monthLabel:'农历月',yearLabel:'农历年',leap:'闰月',canChi:'日干支',error:'日期无效，或年份不在 1900–2100 之间。',today:'今天（越南时间）',terms:zhTerms,gap:'',list:'、'};
const zh:Record<GrowthPageId,Content>={
 calendar:{
  title:'今日越南农历与公历转农历 | Qelunai',description:'免费按 UTC+7 查询越南农历。查看农历日期、闰月、干支和黄道时辰，无需登录。',eyebrow:'免费工具 · 越南农历',short:'农历',intro:'把公历日期换算成越南阴阳历（UTC+7）。结果在你的浏览器中计算，所选日期不会发送到服务器。',toolHeading:'换算公历日期',guide:[
   {heading:'越南农历如何运作？',paragraphs:['每个农历月从朔日（新月）开始。闰月按太阳黄经的规则安排。由于民用时区不同，越南农历和中国农历的日期有时会相差一天。','本工具采用 Meeus 的天文近似公式，并已用 NASA JPL 的 DE440s 星历核对 1900–2100 年的每个朔日和节气。朔日离午夜只有几分钟的日期，请再用官方历书核实。']},
   {heading:'手机应用还有什么？',paragraphs:['Qelunai 提供月历、初一和十五提醒、家庭忌日和主屏幕小组件。目前应用仅对受邀测试者开放。']}
  ],faq:[{q:'使用哪个时区？',a:'越南民用时间 UTC+7，而不是中国农历所用的 UTC+8。'},{q:'需要登录吗？',a:'不需要。你选择的日期只留在浏览器中。'}],
  cta:'申请参加测试',method:'方法：近似的 Meeus 天文算法，加上农历月和闰月规则。适用年份 1900–2100；边界日期请另行核实。',dateLabel:'公历日期',submit:'换算',result:'结果',goodHours:'黄道时辰',ctaNote:'Qelunai 正在封闭测试。测试申请通过邮件发送。',...zhTool
 },
 hours:{
  title:'今日越南黄道时辰 | Qelunai',description:'查看所选日期的十二个传统时辰和六个黄道时辰。免费，无需账户。',eyebrow:'免费工具 · 传统时辰',short:'黄道时辰',intro:'了解按地支划分的十二个时辰（每个两小时）及其传统名称。这些是文化上的分类，并非有科学依据的预测。',toolHeading:'查找传统黄道时辰',guide:[
   {heading:'子时从几点开始？',paragraphs:['子时从 23:00 到 01:00，丑时从 01:00 到 03:00，依此类推。对于一天是否在 23:00 交替，各派说法不一。']},
   {heading:'应该如何看待这些结果？',paragraphs:['黄道时辰是传统历法文化的一部分，并不保证事情成功。请优先考虑实际安全和有依据的决定。']}
  ],faq:[{q:'黄道时辰有几个？',a:'按这里采用的传统体系，十二个时辰中有六个。'},{q:'这些是预测吗？',a:'不是。它们只是对传统历法惯例的说明。'}],
  cta:'在手机上试用 Qelunai',method:'规则：按日支排列的十二位传统值神，从青龙到勾陈。并非科学预测。',dateLabel:'公历日期',submit:'查看时辰',result:'时辰',goodHours:'黄道时辰',ctaNote:'通过邮件申请参加测试。无需提供出生资料。',...zhTool
 },
 iching:{
  title:'什么是易经？六十四卦与掷钱起卦 | Qelunai',description:'通俗介绍易经：八卦、六十四卦、阴爻与阳爻，以及三枚硬币起卦。',eyebrow:'学习资料 · 易经',short:'易经',intro:'了解六十四卦如何构成，以及一种常见的掷钱起卦方法。Qelunai 把易经视为文化和哲学传统，而不是预言。',guide:[
   {heading:'八卦与六十四卦',paragraphs:['一个经卦由三条阴爻或阳爻组成。两个经卦相叠成为一个六爻的别卦，共有六十四种组合。爻从下往上数。','现代的译本和解读可能仍受版权保护。Qelunai 使用原创的讲解和获得授权的参考资料。']},
   {heading:'三枚硬币起卦法',paragraphs:['把三枚硬币掷六次，从下往上记录每次得到的爻。根据所用的惯例，动爻会变出一个之卦。','Qelunai 应用提供起卦、记录和讲解。本网站只介绍方法，不会编造解卦结果。']},
   {heading:'用来反思，而非定论',paragraphs:['易经作为文化和哲学遗产很有价值。它不能代替医疗、财务或法律方面的专业建议。']}
  ],faq:[{q:'一共有多少卦？',a:'六十四卦，每卦六爻。'},{q:'为什么要掷六次硬币？',a:'每掷一次得到一爻，从下往上组成一卦的六爻。'}],
  cta:'在 Qelunai 中了解易经',method:'仅作文化教育参考。',dateLabel:'',submit:'',result:'',dayLabel:'',monthLabel:'',yearLabel:'',leap:'',canChi:'',goodHours:'',error:'',today:'',ctaNote:'应用目前处于封闭测试阶段。'
 }
};
const koTool={dayLabel:'음력 일',monthLabel:'음력 월',yearLabel:'음력 연도',leap:'윤달',canChi:'일진',error:'날짜가 잘못되었거나 연도가 1900–2100 범위를 벗어났습니다.',today:'오늘(베트남 시간)',terms:koTerms,gap:'',list:', '};
const ko:Record<GrowthPageId,Content>={
 calendar:{
  title:'오늘의 베트남 음력과 양력→음력 변환 | Qelunai',description:'UTC+7 기준 베트남 음력을 무료로 조회하세요. 음력 날짜, 윤달, 간지, 황도시를 로그인 없이 볼 수 있습니다.',eyebrow:'무료 도구 · 베트남 음력',short:'음력',intro:'양력 날짜를 베트남 음력(UTC+7)으로 바꿉니다. 계산은 브라우저에서 이루어지며 고른 날짜는 서버로 보내지 않습니다.',toolHeading:'양력 날짜 변환',guide:[
   {heading:'베트남 음력은 어떻게 정해지나요?',paragraphs:['음력 한 달은 삭(새달)에서 시작합니다. 윤달은 태양 황경 규칙에 따라 둡니다. 사용하는 표준시가 달라서 베트남 음력과 중국 음력의 날짜가 하루 차이 날 때가 있습니다.','이 도구는 Meeus의 천문 근사 공식을 쓰며, 1900–2100년의 모든 삭과 절기를 NASA JPL DE440s 천체력과 대조했습니다. 삭이 자정에서 몇 분 이내인 날짜는 공식 역서로 다시 확인하세요.']},
   {heading:'모바일 앱에는 무엇이 더 있나요?',paragraphs:['Qelunai는 월 달력, 초하루와 보름 알림, 가족 기일, 홈 화면 위젯을 제공합니다. 앱은 현재 초대받은 테스터만 쓸 수 있습니다.']}
  ],faq:[{q:'어느 시간대를 쓰나요?',a:'중국 음력의 UTC+8이 아니라 베트남 표준시 UTC+7을 씁니다.'},{q:'로그인이 필요한가요?',a:'아니요. 고른 날짜는 브라우저 안에만 남습니다.'}],
  cta:'베타 참여 신청',method:'방법: Meeus 천문 근사 계산과 음력 월·윤달 규칙. 1900–2100년 대상이며, 경계에 있는 날짜는 따로 확인하세요.',dateLabel:'양력 날짜',submit:'변환',result:'결과',goodHours:'황도시',ctaNote:'Qelunai는 비공개 테스트 중입니다. 베타 신청은 이메일로 보냅니다.',...koTool
 },
 hours:{
  title:'오늘의 베트남 황도시 | Qelunai',description:'고른 날짜의 전통 12시진과 황도시 6개를 확인하세요. 무료이며 계정이 필요 없습니다.',eyebrow:'무료 도구 · 전통 시진',short:'황도시',intro:'지지에 따라 두 시간씩 나눈 12시진과 그 전통 이름을 알아보세요. 이는 문화적 분류이며 과학적으로 입증된 예측이 아닙니다.',toolHeading:'전통 황도시 찾기',guide:[
   {heading:'자시는 몇 시에 시작하나요?',paragraphs:['자시는 23:00부터 01:00까지, 축시는 01:00부터 03:00까지이며, 이런 식으로 이어집니다. 하루가 23:00에 바뀌는지에 대해서는 학파마다 견해가 다릅니다.']},
   {heading:'결과는 어떻게 받아들여야 하나요?',paragraphs:['황도시는 전통 역법 문화의 일부일 뿐, 일이 잘된다는 보장이 아닙니다. 실제 안전과 근거 있는 판단을 먼저 생각하세요.']}
  ],faq:[{q:'황도시는 몇 개인가요?',a:'여기서 쓰는 전통 체계에서는 12시진 가운데 6개입니다.'},{q:'예언인가요?',a:'아니요. 전통 역법의 관습을 설명한 것입니다.'}],
  cta:'모바일에서 Qelunai 써 보기',method:'규칙: 일지에 따라 배열한 전통 12신, 청룡에서 구진까지. 과학적 예측이 아닙니다.',dateLabel:'양력 날짜',submit:'시진 보기',result:'시진',goodHours:'황도시',ctaNote:'이메일로 베타 참여를 신청하세요. 출생 정보는 필요 없습니다.',...koTool
 },
 iching:{
  title:'주역이란? 64괘와 동전 괘 뽑기 | Qelunai',description:'주역을 쉽게 소개합니다: 팔괘, 64괘, 음효와 양효, 동전 세 개로 괘 뽑기.',eyebrow:'배움터 · 주역',short:'주역',intro:'64괘가 어떻게 이루어지는지, 흔히 쓰는 동전 괘 뽑기 방법은 어떤지 알아보세요. Qelunai는 주역을 예언이 아닌 문화와 철학의 전통으로 다룹니다.',guide:[
   {heading:'팔괘와 64괘',paragraphs:['소성괘 하나는 음효 또는 양효 세 개로 이루어집니다. 소성괘 두 개를 겹치면 효가 여섯인 대성괘가 되며, 모두 64가지입니다. 효는 아래에서부터 셉니다.','현대의 번역과 풀이는 아직 저작권이 있을 수 있습니다. Qelunai는 직접 쓴 설명과 사용 허가를 받은 참고 자료를 씁니다.']},
   {heading:'동전 세 개로 괘 뽑기',paragraphs:['동전 세 개를 여섯 번 던지고, 나온 효를 아래에서부터 기록합니다. 따르는 관습에 따라 동효는 변괘를 만듭니다.','Qelunai 앱은 괘 뽑기, 기록, 풀이를 제공합니다. 이 웹사이트는 방법만 소개하며 풀이 결과를 지어내지 않습니다.']},
   {heading:'판정이 아니라 돌아보기',paragraphs:['주역은 문화와 철학의 유산으로서 가치가 있습니다. 의료, 재무, 법률에 관한 전문적인 조언을 대신하지 않습니다.']}
  ],faq:[{q:'괘는 모두 몇 개인가요?',a:'64괘이며, 괘마다 효가 여섯 개입니다.'},{q:'왜 동전을 여섯 번 던지나요?',a:'한 번 던질 때마다 괘의 여섯 효 가운데 하나가 아래에서 위로 정해집니다.'}],
  cta:'Qelunai에서 주역 알아보기',method:'문화 교육용 참고 자료입니다.',dateLabel:'',submit:'',result:'',dayLabel:'',monthLabel:'',yearLabel:'',leap:'',canChi:'',goodHours:'',error:'',today:'',ctaNote:'앱은 현재 비공개 테스트 중입니다.'
 }
};
const byCode:Record<string,Record<GrowthPageId,Content>>={vi,en,zh,ko};
export function growthFor(code:string,id:GrowthPageId):Content { return (byCode[code]??vi)[id]; }
export const growthIds:GrowthPageId[]=['calendar','hours','iching'];
