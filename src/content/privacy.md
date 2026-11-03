# Chính sách quyền riêng tư — Qelunai

*Cập nhật lần cuối: 03/11/2026.*

## Tóm tắt

- Qelunai cần **tài khoản**. Bạn **đăng nhập** (Email, Google hoặc Apple) và đồng ý **sao lưu**,
  rồi nhập họ tên, ngày sinh và giờ sinh của bạn.
- Hồ sơ ngày sinh, lịch sử gieo quẻ, lịch sử rút bài Tarot, sổ giỗ và nhà đã lưu (Phong thủy
  nhà) được lưu vào tài khoản để có trên mọi thiết bị bạn đăng nhập.
- Mỗi mục đích dùng dữ liệu có một ô đồng ý riêng, không ô nào được đánh dấu sẵn. Bạn rút lại
  được bất cứ lúc nào.
- Mọi phép tính vẫn chạy ngay trên máy bạn.
- Thống kê sử dụng và báo lỗi chỉ được gửi khi bạn bật (mặc định tắt).
- Bản miễn phí có thể có quảng cáo của Google AdMob; Qelunai Plus không có quảng cáo. Quảng cáo
  không nhận hồ sơ ngày sinh hay lịch sử gieo quẻ của bạn.
- Chat hỗ trợ AI chỉ dùng khi đã đăng nhập và sau khi bạn đồng ý. Tin nhắn bạn gõ được gửi tới
  Google Gemini; đừng gõ thông tin cá nhân. Chat AI không có ở EEA, Vương quốc Anh và Thụy Sĩ.
- Không bán dữ liệu của bạn.

## Đồng ý của bạn

Ứng dụng hỏi riêng từng việc, mỗi việc một ô, không ô nào đánh dấu sẵn:

- Xác nhận bạn đủ 16 tuổi (bắt buộc để dùng ứng dụng).
- Dùng ngày sinh để lập lá số (bắt buộc trước khi tạo hồ sơ ngày sinh).
- Sao lưu vào tài khoản (bắt buộc trước khi đăng nhập).
- Gửi thống kê sử dụng ẩn danh và báo lỗi (không bắt buộc).

Mỗi lần bạn đồng ý hoặc rút lại, ứng dụng ghi một dòng: mục đích, đồng ý hay rút lại, thời
điểm, và phiên bản chính sách này. Các dòng này **chỉ lưu trên máy**, không gửi lên tài khoản,
và không bị sửa hay xoá. Bạn xem và đổi lựa chọn ở **Hồ sơ > Quản lý đồng ý**.

- Rút lại đồng ý dùng ngày sinh: mọi hồ sơ ngày sinh bị xoá khỏi máy và khỏi tài khoản (nếu
  có). Lịch sử gieo quẻ vẫn giữ.
- Tắt sao lưu: tức là xoá tài khoản (xem **Xoá tài khoản** bên dưới).

## Tài khoản

Ứng dụng dùng **Firebase Authentication** (Google LLC) để đăng nhập. Dữ liệu được lưu:

- Địa chỉ email (với Apple, có thể là email ẩn danh do Apple cung cấp).
- Mã định danh người dùng do Firebase tạo, nhà cung cấp đăng nhập, thời điểm tạo và đăng
  nhập gần nhất.
- Mật khẩu (nếu dùng Email) được Firebase lưu dưới dạng băm; chúng tôi không đọc được.

## Dữ liệu lưu trong tài khoản

Khi bạn đăng nhập và đồng ý sao lưu, ứng dụng lưu các mục sau vào **Cloud Firestore** (Google
LLC), đặt tại khu vực Singapore (asia-southeast1):

- **Hồ sơ ngày sinh** bạn tạo ở tab Lá số: họ tên, ngày sinh dương lịch, giờ sinh (nếu có),
  giới tính, thời điểm tạo và sửa. Hồ sơ của chính bạn có thêm **nơi ở** nếu bạn tự nhập (không
  bắt buộc), chỉ dùng để điền chỗ "ngụ tại" trong bài văn khấn; xoá trống ô này để bỏ.
- **Lịch sử gieo quẻ Kinh Dịch**: thời điểm gieo và sáu hào.
- **Sổ giỗ**: tên người đã mất, quan hệ trong gia đình, ngày mất âm lịch (và năm nếu bạn nhập),
  ghi chú, cài đặt nhắc giỗ, thời điểm tạo và sửa. Ngày giỗ bạn thêm vào một gia đình chung được
  chia sẻ với các thành viên gia đình đó; xem mục **Sổ giỗ chung gia đình** bên dưới.
- **Nhà đã lưu** (Phong thủy nhà, tối đa 10 nhà): tên bạn đặt cho nhà (ví dụ "Nhà ở", "Văn
  phòng"), hướng nhà tính bằng độ, thời điểm tạo và sửa. Ứng dụng không lưu địa chỉ hay vị trí
  của nhà.
- Thông tin kỹ thuật để đồng bộ: mã của từng mục, phiên bản dữ liệu, thời điểm cập nhật, và
  dấu "đã xoá" cho mục bạn xoá (dấu này không chứa họ tên, ngày sinh hay nội dung quẻ).

Chỉ tài khoản của bạn đọc và ghi được dữ liệu này. Dữ liệu chỉ dùng để hiển thị lại cho bạn
trên các thiết bị bạn đăng nhập. Chính sách quyền riêng tư của Google:
https://policies.google.com/privacy

## Sổ giỗ chung gia đình

Bạn có thể tạo một gia đình trong Sổ giỗ, hoặc tham gia gia đình của người khác bằng mã mời (tối
đa 30 thành viên một gia đình).

- Khi bạn tạo hoặc tham gia một gia đình, **tên hiển thị** bạn đặt trong gia đình đó và **mọi
  ngày giỗ** được thêm vào gia đình đó hiện cho **tất cả thành viên** của gia đình đó — không
  hiện cho gia đình khác bạn tham gia.
- Mỗi lần một ngày giỗ chung được thêm, sửa hay xoá, ứng dụng ghi lại **ai là người sửa lần
  cuối** và hiện tên đó cho các thành viên khác.
- Mã mời dùng được tối đa 7 ngày; chủ gia đình thu hồi được bất cứ lúc nào. Mã chỉ nên gửi cho
  người bạn muốn mời.
- **Rời một gia đình** (tự rời hoặc bị chủ mời ra): máy của bạn xoá bản sao các ngày giỗ chung
  của gia đình đó, và bạn không còn đọc được dữ liệu của gia đình đó nữa.
- **Xoá tài khoản**: ứng dụng tự đưa bạn ra khỏi mọi gia đình trước khi xoá tài khoản. Nếu bạn là
  chủ và gia đình còn người khác, quyền chủ chuyển cho một thành viên khác; nếu bạn là người cuối
  cùng của gia đình, gia đình đó và các ngày giỗ chung của nó bị xoá.
- Sổ giỗ chung chỉ chia sẻ với các thành viên trong cùng gia đình, theo lựa chọn của chính bạn
  khi tạo hoặc tham gia; Qelunai không chia sẻ dữ liệu này cho bên thứ ba nào khác.

## Dữ liệu trên thiết bị

- Cài đặt ứng dụng: ngôn ngữ, chế độ sáng/tối, trạng thái đã xem phần giới thiệu.
- Các dòng ghi đồng ý (xem **Đồng ý của bạn**).
- Một bản sao hồ sơ ngày sinh, lịch sử gieo quẻ, lịch sử rút bài Tarot, sổ giỗ và nhà đã lưu
  của tài khoản, để ứng dụng dùng được khi không có mạng. Thay đổi khi mất mạng được tải lên ở lần đồng bộ sau.
- Gói nội dung diễn giải (lời giải từng hào Kinh Dịch và từng con số Thần số học), tải từ
  Cloud Firestore khi có bản mới. Gói này giống nhau cho mọi người, không chứa dữ liệu của bạn;
  khi tải, ứng dụng chỉ gửi kèm phiên đăng nhập, không gửi hồ sơ hay lịch sử. Gói được giữ lại
  sau khi đăng xuất.

Khi bạn **đăng xuất**, bản sao này bị xoá khỏi máy; dữ liệu vẫn nằm trong tài khoản và trở lại
khi bạn đăng nhập lại. Gỡ ứng dụng (hoặc xoá dữ liệu trang web trong trình duyệt) cũng xoá bản
sao này.

## Xoá dữ liệu

- Xoá một hồ sơ: mở hồ sơ ở tab **Lá số** > **Xoá hồ sơ**.
- Xoá một lần gieo: mở lần gieo trong lịch sử > **Xoá lần gieo này**; hoặc **Xoá toàn bộ lịch
  sử** ở tab Lá số.
- Xoá một nhà đã lưu: mở **Phong thủy nhà**, chọn nhà trong danh sách > **Xoá**.
- Xoá một lần rút bài Tarot: mở **Tarot** > lịch sử, chọn lần rút > **Xoá**. Lịch sử Tarot chỉ
  ghi các lá đã rút, chiều xuôi/ngược, kiểu trải bài, ngày và hồ sơ được chọn (nếu có); không
  lưu câu hỏi.
- Xoá tất cả: **Hồ sơ > Xoá mọi hồ sơ và lịch sử**.

Các thao tác này xoá dữ liệu khỏi máy, và khỏi tài khoản (trên mọi thiết bị) ở lần đồng bộ kế
tiếp nếu bạn đã đăng nhập.

## Xoá tài khoản

Vào **Hồ sơ > Xoá tài khoản** trong ứng dụng. Ứng dụng xoá theo thứ tự: toàn bộ dữ liệu của tài
khoản trên Cloud Firestore (gồm lịch sử chat hỗ trợ), rồi bản sao trên máy, rồi tài khoản đăng
nhập. Nếu không xoá được dữ liệu trên máy chủ (ví dụ mất mạng), không có gì bị xoá và ứng dụng báo
để bạn thử lại. Nếu Firebase yêu cầu xác thực lại, dữ liệu đã được xoá; ứng dụng đưa bạn về màn
hình đăng nhập để đăng nhập lại và xoá tài khoản lần nữa.

## Mua trong ứng dụng (Qelunai Plus)

Khi bản có gói Qelunai Plus, việc mua và thanh toán do Apple (App Store) hoặc Google (Google
Play) xử lý hoàn toàn. Qelunai không thấy và không lưu số thẻ hay thông tin thanh toán của bạn.
Ứng dụng chỉ nhận từ cửa hàng kết quả "đã đăng ký hay chưa" và loại gói (tháng hoặc năm), rồi lưu
kết quả đó trên thiết bị để bật tính năng Plus. Qelunai không gửi thông tin giao dịch tới máy chủ
của mình. Việc huỷ, hoàn tiền và dùng thử do cửa hàng quản lý theo chính sách của họ.

## Thống kê sử dụng và báo lỗi

Chỉ khi bạn bật **Gửi thống kê sử dụng ẩn danh và báo lỗi** (ở **Hồ sơ > Quản lý đồng ý**, mặc
định tắt), ứng dụng gửi tới Google (Firebase):

- **Google Analytics for Firebase**: màn hình đã mở, thời lượng dùng, loại thiết bị, hệ điều
  hành, phiên bản ứng dụng, quốc gia ước lượng, và một mã cài đặt ứng dụng.
- **Firebase Crashlytics**: báo cáo khi ứng dụng gặp lỗi (vị trí lỗi trong mã, thiết bị, hệ
  điều hành, phiên bản ứng dụng).
- **Firebase Performance Monitoring**: thời gian mở ứng dụng, tốc độ hiển thị màn hình và thời
  gian các lệnh gọi mạng.

Các dữ liệu này không chứa họ tên, ngày sinh, giờ sinh, nội dung quẻ hay sổ giỗ, và không dùng để
quảng cáo. Khi tắt, ứng dụng ngừng gửi ngay; báo lỗi còn trên máy lúc đó không được gửi.

## Chat hỗ trợ (AI)

Màn **Hỗ trợ** có chat với trợ lý AI. Chat chỉ dùng được khi bạn đã đăng nhập, và bạn phải bấm
đồng ý trước lần dùng đầu tiên.

- Để tạo câu trả lời, ứng dụng gửi tin nhắn bạn gõ (đã che email và số điện thoại) cùng phiên
  bản ứng dụng, nền tảng và ngôn ngữ tới **Google Gemini Developer API** qua **Firebase AI
  Logic**. Ứng dụng không gửi họ tên, ngày giờ sinh hay hồ sơ của bạn.
- Đây là dịch vụ miễn phí của Google. Theo Điều khoản bổ sung Gemini API, Google có thể dùng nội
  dung này để cải thiện sản phẩm, và người duyệt có thể đọc nội dung sau khi đã tách khỏi tài
  khoản của bạn. **Đừng gõ thông tin cá nhân vào chat.**
- Lịch sử chat được lưu trên Cloud Firestore, gắn với tài khoản của bạn. Bạn xoá được lịch sử
  chat trong ứng dụng; lịch sử chat cũng bị xoá khi bạn xoá tài khoản.
- Chat AI không có ở Khu vực Kinh tế châu Âu (EEA), Vương quốc Anh và Thụy Sĩ (xác định theo vùng
  đặt trên máy). Ở đó chỉ có hỗ trợ qua email.

Email hỗ trợ: support@qelunai.com

Điều khoản bổ sung Gemini API: https://ai.google.dev/gemini-api/terms

## Chống lạm dụng (Firebase App Check)

Ứng dụng dùng **Firebase App Check** để chống lạm dụng API. Khi gọi API, ứng dụng gửi tín hiệu
chứng thực thiết bị của Apple App Attest/DeviceCheck (iPhone) hoặc Google Play Integrity
(Android).

## Quảng cáo

Bản miễn phí có thể hiện quảng cáo của **Google AdMob** (Google LLC): một dải quảng cáo ở cuối
trang kết quả, và đôi khi một quảng cáo toàn màn hình khi bạn chọn gieo quẻ khác (không quá một
lần trong 5 phút). Không có quảng cáo ở màn đăng nhập, khi đang gieo quẻ, ở La bàn camera hay ở
widget. Người dùng **Qelunai Plus** không thấy quảng cáo.

- Để hiển thị và đo quảng cáo, Google nhận mã quảng cáo của thiết bị (IDFA trên iPhone, Advertising
  ID trên Android), địa chỉ IP, loại thiết bị và thông tin tương tác với quảng cáo. Ứng dụng
  không gửi cho Google họ tên, ngày sinh, hồ sơ hay lịch sử gieo quẻ của bạn.
- Trên iPhone, Apple hỏi bạn có cho phép theo dõi hay không. Nếu bạn từ chối, quảng cáo vẫn hiện
  nhưng không được cá nhân hoá theo mã quảng cáo.
- Ở những nơi luật yêu cầu (ví dụ Liên minh châu Âu, Vương quốc Anh), ứng dụng hiện biểu mẫu đồng
  ý của Google trước khi tải quảng cáo; bạn đổi lựa chọn ở **Hồ sơ > Quản lý đồng ý > Tùy chọn quyền
  riêng tư cho quảng cáo**.
- Trên Android, bạn đặt lại hoặc xoá mã quảng cáo trong Cài đặt của máy.

Cách Google dùng dữ liệu từ ứng dụng: https://policies.google.com/technologies/partner-sites

## Thông báo đẩy (Firebase Cloud Messaging)

Nếu bạn bật thông báo, Qelunai dùng **Firebase Cloud Messaging** (Google LLC) để gửi nhắc ngày
rằm, mùng một, tiết khí và tin khi có bản cập nhật mới.

- Để gửi được, thiết bị nhận một **mã thông báo** (FCM token, gắn với mã thiết bị của Apple Push
  Notification service trên iPhone). Mã này không chứa họ tên, ngày sinh hay hồ sơ của bạn, và
  Qelunai không lưu mã này vào tài khoản của bạn.
- Thiết bị đăng ký vào các **chủ đề** bạn chọn (tin chung, bản cập nhật, ngày rằm/mùng một) và
  chủ đề theo ngôn ngữ của ứng dụng. Tin được gửi theo chủ đề, giống nhau cho mọi người cùng chủ
  đề, không theo hồ sơ riêng của bạn.
- Ứng dụng chỉ hỏi quyền thông báo sau khi giải thích, và chỉ khi bạn chọn **Bật**. Nếu bạn đã
  cho phép nhắc giỗ thì dùng chung quyền đó, không hỏi lại.
- Tắt từng loại ở **Hồ sơ > Thông báo** (thiết bị huỷ đăng ký chủ đề đó), hoặc tắt hẳn thông báo
  của Qelunai trong Cài đặt của máy.

## Thêm vào Lịch và xuất .ics

- **Thêm vào Lịch**: nút "Thêm vào Lịch" ở một ngày giỗ, dịp lễ hay ngày tốt mở màn hình thêm sự
  kiện có sẵn của hệ điều hành, đã điền sẵn tên, ngày và lời nhắc bạn chọn. Ứng dụng chỉ xin quyền
  **ghi** vào Lịch của máy, không đọc các sự kiện đã có sẵn trong Lịch của bạn. Sự kiện được lưu
  vào ứng dụng Lịch bạn chọn trên máy; Qelunai không giữ bản sao.
- **Xuất tệp .ics**: nút xuất trong Sổ giỗ tạo một tệp .ics chứa các ngày giỗ trong 10 năm tới,
  ngay trên máy bạn, rồi mở bảng chia sẻ của hệ điều hành để bạn tự chọn nơi lưu hay gửi tệp đó
  (ví dụ qua email, AirDrop). Qelunai không gửi tệp này lên máy chủ của mình.

## Đọc to bằng giọng máy

Nút đọc to ở văn khấn và các đoạn giải thích dùng giọng đọc của hệ điều hành trên máy bạn (iPhone:
`AVSpeechSynthesizer`; Android: `TextToSpeech` của hệ thống). Ứng dụng không gửi văn bản được đọc
lên máy chủ của mình.

## Những gì Qelunai KHÔNG làm

- Không bán dữ liệu của bạn.
- Không gửi hồ sơ ngày sinh, lịch sử gieo quẻ hay sổ giỗ cho Google Analytics hay cho quảng cáo.
- Không gửi họ tên, ngày giờ sinh hay hồ sơ cho chat hỗ trợ AI.

## Quyền truy cập thiết bị

- **Camera**: chỉ khi bạn mở La bàn trên cảnh thật, quét mã QR thẻ tuổi, hoặc quét mã mời vào gia
  đình trong Sổ giỗ. Hình ảnh chỉ hiện trên màn hình, không được chụp, lưu hay gửi đi.
- **Lịch**: chỉ khi bạn bấm **Thêm vào Lịch**; ứng dụng chỉ xin quyền ghi, không đọc các sự kiện
  có sẵn trong Lịch của bạn.
- **Theo dõi (iPhone)**: chỉ hỏi ở bản có quảng cáo, như mục **Quảng cáo** ở trên.
- **Thông báo**: cho nhắc giỗ và thông báo đẩy, chỉ hỏi khi bạn bật một trong hai.

Ứng dụng không yêu cầu quyền vị trí, danh bạ, micro hay quyền nhạy cảm nào khác.

## Thay đổi trong tương lai

Nếu Qelunai thêm tính năng gửi thêm dữ liệu đi (ví dụ Cố vấn AI qua máy chủ), chính sách này sẽ
được cập nhật **trước** khi tính năng đó được bật, nêu rõ dữ liệu nào được gửi, gửi tới đâu, và
bạn có thể từ chối ra sao.

---

# Privacy Policy — Qelunai

*Last updated: 2026-11-03.*

## Summary

- Qelunai needs an **account**. You **sign in** (Email, Google or Apple) and agree to
  **backup**, then enter your name, birth date and birth time.
- Your birth profiles, Kinh Dịch cast history, Tarot reading history, memorial days and saved
  houses (Phong thủy nhà) are saved to your account so they appear on every device you sign in on.
- Each use of your data has its own consent box, none ticked in advance. You can withdraw at
  any time.
- All calculations still run on your device.
- Usage statistics and crash reports are sent only if you turn them on (off by default).
- The free version may show ads from Google AdMob; Qelunai Plus has no ads. Ads never receive
  your birth profiles or cast history.
- The AI support chat works only when you are signed in and after you agree. The messages you
  type are sent to Google Gemini; do not type personal information. AI chat is not offered in
  the EEA, the United Kingdom or Switzerland.
- We do not sell your data.

## Your consent

The app asks for each use separately, one box each, none ticked in advance:

- Confirming you are 16 or older (required to use the app).
- Using birth dates to build charts (required before you create a birth profile).
- Backing up to your account (required before you sign in).
- Sending anonymous usage statistics and crash reports (optional).

Each time you agree or withdraw, the app writes one record: the purpose, agreed or withdrawn,
the time, and the version of this policy. These records are **stored only on the device**, are
never sent to your account, and are never edited or removed. You can see and change your
choices in **Profile > Manage consent**.

- Withdrawing consent to use birth dates deletes every birth profile from the device and from
  your account (if any). The cast history stays.
- Turning off backup means deleting your account (see **Deleting your account** below).

## Account

The app uses **Firebase Authentication** (Google LLC) for sign-in. Stored data:

- Your email address (with Apple, possibly a private relay address provided by Apple).
- A user identifier created by Firebase, the sign-in provider, and the creation and last
  sign-in times.
- Your password (Email sign-in only), stored hashed by Firebase; we cannot read it.

## Data stored in your account

When you sign in and agree to backup, the app stores the following in **Cloud Firestore**
(Google LLC), located in the Singapore region (asia-southeast1):

- **Birth profiles** you create in the Charts tab: name, solar birth date, birth time (if
  given), gender, and when the profile was created and changed. Your own profile also holds a
  **home address** if you type one in (optional), used only to fill in where you live in the
  Văn khấn prayers; clear the field to remove it.
- **Kinh Dịch cast history**: when each cast happened and its six lines.
- **Memorial days (Sổ giỗ)**: the name of the person who passed away, their family relation,
  the lunar date of death (and the year if you enter it), notes, reminder settings, and when
  each entry was created and changed. A memorial day you add to a shared family is shown to
  that family's members; see **Family memorial days** below.
- **Saved houses** (Phong thủy nhà, up to 10): the name you give the house (for example "Home"
  or "Office"), the way it faces in degrees, and when it was created and changed. The app does
  not store the house's address or location.
- Technical sync data: each item's id, data version, update time, and a "deleted" marker for
  items you delete (the marker holds no name, birth data or cast).

Only your account can read or write this data. It is used only to show it back to you on the
devices you sign in on. Google's privacy policy: https://policies.google.com/privacy

## Family memorial days

You can create a family in the memorial-day book, or join someone else's family with an invite
code (up to 30 members per family).

- When you create or join a family, the **display name** you set for that family and **every
  memorial day** added to it are shown to **all members** of that family — not to any other
  family you belong to.
- Each time a shared memorial day is added, edited or deleted, the app records **who made the
  last change** and shows that name to the other members.
- An invite code works for at most 7 days; the family's owner can revoke it at any time. Only
  share a code with the people you want to invite.
- **Leaving a family** (on your own, or being removed by the owner): your device deletes its
  local copy of that family's memorial days, and you can no longer read that family's data.
- **Deleting your account**: the app takes you out of every family first. If you own a family
  that still has other members, ownership passes to another member; if you are its last member,
  that family and its memorial days are deleted.
- Family memorial days are shared only with the members of the same family, by your own choice
  when you create or join it; Qelunai does not share this data with any other third party.

## Data stored on your device

- App settings: language, light/dark mode, whether the introduction has been completed.
- The consent records (see **Your consent**).
- A copy of the account's birth profiles, cast history, Tarot reading history, memorial days
  and saved houses, so the app works offline. Changes made offline are uploaded at the next sync.
- The readings pack (the note for each I Ching line and each numerology number), downloaded
  from Cloud Firestore when a new version is out. The pack is the same for everyone and holds
  none of your data; the download sends only your sign-in session, not your profiles or history.
  It stays on the device after you sign out.

When you **sign out**, this copy is removed from the device; the data stays in your account and
comes back when you sign in again. Uninstalling the app (or clearing the site's data in your
browser) also removes the copy.

## Deleting data

- One profile: open it in the **Charts** tab > **Delete profile**.
- One cast: open it in the history > **Delete this cast**; or **Clear all history** in the
  Charts tab.
- One saved house: open **Phong thủy nhà**, pick the house in the list > **Delete**.
- One Tarot reading: open **Tarot** > history, pick the reading > **Delete**. Tarot history keeps
  only the cards drawn, upright/reversed, the spread, the date and the chosen profile (if any);
  your question is never stored.
- Everything: **Profile > Delete all profiles and history**.

These delete the data from the device, and from your account (on every device) at the next
sync if you are signed in.

## Deleting your account

Go to **Profile > Delete account** in the app. The app deletes, in this order: all of the
account's data in Cloud Firestore (including the support chat history), then the copy on the
device, then the sign-in account. If the server data cannot be deleted (for example, offline),
nothing is deleted and the app asks you to try again. If Firebase requires a recent sign-in, the data is already deleted; the app
takes you to the sign-in screen so you can sign in again and delete the account once more.

## In-app purchases (Qelunai Plus)

When a build offers Qelunai Plus, the purchase and the payment are handled entirely by Apple (App
Store) or Google (Google Play). Qelunai does not see or store your card number or payment
details. The app only receives from the store whether you are subscribed and which plan (monthly
or yearly), and keeps that result on your device to turn the Plus features on. Qelunai does not
send transaction information to its own servers. Cancellation, refunds and free trials are
managed by the store under its own policies.

## Usage statistics and crash reports

Only if you turn on **Send anonymous usage statistics and crash reports** (in **Profile > Manage
consent**, off by default), the app sends to Google (Firebase):

- **Google Analytics for Firebase**: screens opened, time in the app, device type, operating
  system, app version, approximate country, and an app installation id.
- **Firebase Crashlytics**: a report when the app fails (where in the code, device, operating
  system, app version).
- **Firebase Performance Monitoring**: app start time, screen rendering speed, and the duration of
  network calls.

This data holds no name, birth date, birth time, cast or memorial day, and is not used for ads.
When you turn it off, sending stops at once; crash reports still on the device are not sent.

## Support chat (AI)

The **Support** screen has a chat with an AI assistant. The chat works only when you are signed
in, and you must tap to agree before using it the first time.

- To create a reply, the app sends the messages you type (with email addresses and phone numbers
  masked), along with the app version, platform and language, to the **Google Gemini Developer
  API** through **Firebase AI Logic**. The app does not send your name, birth date and time, or
  profiles.
- This is a free Google service. Under the Gemini API Additional Terms, Google may use this
  content to improve its products, and human reviewers may read it after it has been
  disconnected from your account. **Do not type personal information into the chat.**
- The chat history is stored in Cloud Firestore, linked to your account. You can delete it in
  the app, and it is deleted when you delete your account.
- AI chat is not offered in the European Economic Area (EEA), the United Kingdom or Switzerland
  (based on the region set on the device). There, support is by email only.

Support email: support@qelunai.com

Gemini API Additional Terms: https://ai.google.dev/gemini-api/terms

## Abuse protection (Firebase App Check)

The app uses **Firebase App Check** to protect its APIs from abuse. When calling them, the app
sends device attestation signals from Apple App Attest/DeviceCheck (iPhone) or Google Play
Integrity (Android).

## Ads

The free version may show ads from **Google AdMob** (Google LLC): a banner at the end of result
pages, and sometimes a full-screen ad when you choose to cast again (at most once every 5
minutes). There are no ads on the sign-in screen, while casting, in the camera compass, or in
widgets. **Qelunai Plus** subscribers see no ads.

- To show and measure ads, Google receives the device's advertising id (IDFA on iPhone,
  Advertising ID on Android), the IP address, the device type and how you interact with ads. The
  app does not send Google your name, birth date, profiles or cast history.
- On iPhone, Apple asks whether you allow tracking. If you decline, ads still show but are not
  personalised by the advertising id.
- Where the law requires it (for example the European Union and the United Kingdom), the app
  shows Google's consent form before loading ads; you can change your choice in **Profile >
  Manage consent > Ad privacy options**.
- On Android, you can reset or delete the advertising id in the device Settings.

How Google uses data from apps: https://policies.google.com/technologies/partner-sites

## Push notifications (Firebase Cloud Messaging)

If you turn notifications on, Qelunai uses **Firebase Cloud Messaging** (Google LLC) to send
reminders for full and new moon days and solar terms, and news when a new version is out.

- To deliver them, the device gets a **notification token** (FCM token, tied to the Apple Push
  Notification service device token on iPhone). It does not contain your name, birth date or
  profiles, and Qelunai does not store it in your account.
- The device subscribes to the **topics** you choose (general news, new versions, full/new moon
  days) and to a topic for the app language. Messages are sent per topic, the same for everyone on
  that topic, not based on your own profile.
- The app asks for notification permission only after explaining it, and only if you choose
  **Enable**. If you already allowed memorial day reminders, that permission is reused and you are
  not asked again.
- Turn each kind off in **Profile > Notifications** (the device unsubscribes from that topic), or
  turn Qelunai's notifications off entirely in the device Settings.

## Adding to Calendar and exporting .ics

- **Add to Calendar**: the "Add to Calendar" button on a memorial day, festival or auspicious day
  opens your device's own add-event screen, pre-filled with the title, date and the reminder you
  chose. The app only asks for **write** access to your calendar, never read access to events
  already there. The event is saved to whichever calendar app you choose on your device; Qelunai
  keeps no copy.
- **Exporting an .ics file**: the export button in the memorial-day book builds an .ics file with
  the next 10 years of memorial days, on your device, then opens your device's own share sheet so
  you choose where to save or send it (for example by email or AirDrop). Qelunai does not upload
  this file to its own servers.

## Reading aloud (on-device voice)

The read-aloud button on prayers (Văn khấn) and on explanation text uses your device's own
text-to-speech voice (iPhone: `AVSpeechSynthesizer`; Android: the system `TextToSpeech`). The app
does not send this text to its own servers.

## What Qelunai does NOT do

- We do not sell your data.
- No birth profiles, cast history or memorial days are sent to Google Analytics or to ads.
- No name, birth date and time, or profiles are sent to the AI support chat.

## Device permissions

- **Camera**: only when you open the compass over the live view, scan a zodiac-card QR code, or
  scan a family invite code in the memorial-day book. The picture is only shown on screen; it is
  never taken, saved or sent.
- **Calendar**: only when you tap **Add to Calendar**; the app only asks for write access, never
  reads the events already in your calendar.
- **Tracking (iPhone)**: asked only in versions with ads, as in **Ads** above.
- **Notifications**: for memorial day reminders and push notifications, asked only when you turn
  one of them on.

The app does not request location, contacts, microphone, or any other sensitive permission.

## Future changes

If Qelunai adds a feature that sends more data off the device (e.g. an AI Advisor through a
server), this policy will be updated **before** that feature is enabled, stating exactly what
data is sent, where, and how you can opt out.
