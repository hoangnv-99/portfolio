// Personal interview notes, shown as tooltips only when NEXT_PUBLIC_APP_ENV=dev.
// Every project-specific statement is verified against the nhadat-247-web codebase.
export type TechNote = { summary: string; followUps?: { q: string; a: string }[] };

const noDoubleCredit =
  "Khoá idempotency topup:{orderId} có unique index trong DB; request thua trong race rollback và nhận lại dòng ledger của bên thắng. Đơn được đánh dấu paid bằng UPDATE … WHERE status <> 'paid'.";

export const techNotes: Record<string, TechNote> = {
  "Payload CMS": {
    summary:
      "Headless CMS mã nguồn mở viết bằng TypeScript, chạy ngay bên trong Next.js. Chỉ cần khai báo các bảng dữ liệu bằng code, Payload tự sinh ra API, trang quản trị, đăng nhập và phân quyền, nên team không phải dựng backend riêng. Ở Nhadat247, Payload làm backend, kết nối PostgreSQL; frontend, API và hệ thống quản trị nằm chung một codebase Next.js, nên phát triển nhanh, dễ deploy và type an toàn từ database tới giao diện.",
    followUps: [
      {
        q: "Sao không dùng Strapi?",
        a: "Payload cấu hình hoàn toàn bằng code, có type TypeScript đầy đủ và chạy chung với Next.js. Strapi thì chạy như một server riêng.",
      },
      {
        q: "Ngoài CRUD thì Payload còn làm được gì?",
        a: "Có sẵn hooks để chèn logic nghiệp vụ trước và sau khi lưu dữ liệu, migration database, upload ảnh lên S3 và hàng đợi job cho các tác vụ nền.",
      },
    ],
  },
  PostgreSQL: {
    summary:
      "Cơ sở dữ liệu quan hệ, mạnh về transaction. Ở Nhadat247 lưu toàn bộ dữ liệu của 63 collection qua adapter Drizzle của Payload. Ví dùng transaction và UPDATE có điều kiện để số dư không âm, pg_advisory_xact_lock theo user khi trả tiền VIP, và trigger guard_user_wallet_balance chặn ghi số dư ngoài service ví.",
    followUps: [
      {
        q: "Tối ưu truy vấn thế nào?",
        a: "Index GIN pg_trgm cho tìm kiếm ILIKE '%q%' trên khoảng 790k media ở trang quản trị, index riêng cho dashboard ledger ví; index ở prod được tạo bằng CREATE INDEX CONCURRENTLY.",
      },
    ],
  },
  Redis: {
    summary:
      "Kho dữ liệu key-value trong bộ nhớ. Ở Nhadat247 dùng cho: cache handler của Next.js (@trieb.work/nextjs-turbo-redis-cache) dùng chung giữa các pod; nền cho BullMQ; đếm lượt xem bằng HINCRBY vào hash theo ngày (TTL 7 ngày); giới hạn gửi SMS OTP theo sliding window; chọn leader pod.",
    followUps: [
      {
        q: "Xoá cache thế nào?",
        a: "Hook afterChange của Properties gọi revalidatePropertyTags, hàm này gọi revalidateTag(tag, { expire: 0 }) theo tag của tin.",
      },
    ],
  },
  BullMQ: {
    summary:
      "Thư viện hàng đợi job cho Node.js, chạy trên Redis. Ở Nhadat247 có các hàng đợi: image-scan (quét ảnh tin), view-sync (mỗi giờ: phút 05 ghi lượt xem theo ngày, phút 15 cộng tổng), notifications (gồm chốt snapshot số dư ví lúc 00:10 hằng ngày), thienkhoi-pull (kéo tin từ đối tác). Việc định kỳ khác như đối soát đơn mỗi phút, giá khu vực mỗi 15 phút chạy bằng Payload Jobs.",
    followUps: [
      {
        q: "Job lỗi thì sao?",
        a: "image-scan retry 5 lần, backoff mũ từ 30s; view-sync retry 3 lần từ 60s. Sai API key (401/403) thì dừng hẳn, không retry.",
      },
    ],
  },
  VietQR: {
    summary:
      "Chuẩn mã QR chuyển khoản liên ngân hàng tại Việt Nam. Ở Nhadat247 người dùng quét QR (tạo qua cổng SFIN) để nạp tiền vào ví; tiền chỉ được cộng khi webhook SFIN qua kiểm tra JWT và chữ ký RSA-SHA256, hoặc khi job đối soát hỏi lại SFIN thấy thành công, không dựa vào việc người dùng mở QR.",
    followUps: [{ q: "Chống cộng tiền hai lần thế nào?", a: noDoubleCredit }],
  },
};

// Keyed by project slug; each array lines up BY INDEX with that project's `responsibilities`
// (vi and en). Reorder both together.
export const responsibilityNotes: Record<string, TechNote[]> = {
  nhadat247: [
    {
      summary:
        "Ví điện tử có tài liệu requirement riêng; 38 spec thiết kế trong docs/superpowers/specs được viết trước khi làm. Code đi qua merge request trên GitLab, mỗi tính năng một cặp nhánh: X-dev → dev (môi trường dev) và X → prod. Bên vận hành là Công ty CP Sàn Giao dịch BĐS Thiên Việt; Thiên Khôi là đối tác đẩy tin qua External API có API key, và hệ thống cũng kéo tin từ Thiên Khôi bằng worker.",
    },
    {
      summary:
        "Next.js 16 App Router và Payload 3 chạy chung một app, 63 collection. 47 file frontend dùng type sinh từ Payload; khoảng 130 file gọi Local API (getPayload, payload.find…), truy vấn phức tạp dùng SQL thô qua Drizzle. Trang quản trị /private tự xây bằng shadcn/ui; /admin mặc định của Payload bị chặn 404 trong proxy.ts. RBAC: 37 resource × CRUD, khoảng 19 quyền theo trang và các action riêng (approve, publish, refund…), gán theo role; withPermissions bọc các collection, cộng thêm lên access rule sẵn có.",
      followUps: [
        {
          q: "Chạy nhiều pod thì sao?",
          a: "Chọn leader bằng SET nhadat247:startup-leader <token> NX EX 60, leader gia hạn mỗi 30s; chỉ leader chạy worker quét ảnh và reset Payload job bị kẹt. Mọi pod chạy migration lúc khởi động nhưng bọc pg_advisory_lock nên chỉ một pod chạy tại một thời điểm.",
        },
      ],
    },
    {
      summary:
        "users.balance là ví chính, users.promo_balance là ví khuyến mãi; tiền khuyến mãi lưu theo lô promo_lots có expires_at, tiêu lô cũ trước (FIFO). Nạp tiền: tạo order pending → gọi SFIN tạo VietQR; tiền chỉ cộng khi webhook SFIN hợp lệ hoặc job đối soát xác nhận. Mọi biến động đi qua một service: mở transaction → UPDATE số dư với điều kiện balance + delta >= 0 → ghi ledger wallet-transactions có before/after và idempotencyKey. Ledger chỉ thêm, không sửa/xoá được, FK ON DELETE RESTRICT.",
      followUps: [
        { q: "Callback gửi lặp có bị cộng tiền 2 lần không?", a: noDoubleCredit },
        {
          q: "Trigger DB để làm gì?",
          a: "guard_user_wallet_balance chạy BEFORE UPDATE trên users: nếu không có cờ wallet.allow_balance_write='on' (chỉ service ví bật bằng SET LOCAL) thì giữ lại số dư cũ. Nhờ vậy payload.update ghi đè cả document không làm sai số dư.",
        },
        {
          q: "Trả tiền VIP mà có race thì sao?",
          a: "Khoá pg_advisory_xact_lock theo user, trừ ví khuyến mãi trước rồi mới đến ví chính, tất cả trong một transaction.",
        },
        {
          q: "Callback không về thì sao?",
          a: "Job settlePendingOrders (Payload Jobs) chạy mỗi phút, hỏi SFIN trạng thái tối đa 20 giao dịch pending: thành công thì hoàn tất đơn, thất bại thì failed, quá hạn thì expired.",
        },
        {
          q: "Đối soát thế nào?",
          a: "Job BullMQ 00:10 hằng ngày chốt snapshot số dư từ ledger. Trang /private/wallets/doi-soat so số dư đang lưu với tổng ledger, khớp đơn nạp với ledger và xuất Excel.",
        },
      ],
    },
    {
      summary:
        "Tin Thiên Khôi chuyển sang pending khi cổng quét đang bật → hook afterChange đẩy job image-scan (trễ 10s). Worker chỉ chạy ở leader, gửi ảnh theo lô tối đa 50 tới /v1/scan/batch. Ngưỡng nằm trong code: khuôn mặt (độ tin ≥90 và ≥2,5% ảnh, hoặc ≥82 và ≥5%), bản đồ ≥50, mặt tiền ≥97. Có hit → re_review và báo chủ tin; có ảnh không quét được → giữ pending cho admin; còn lại → tự đăng. Mỗi quyết định ghi action-logs, có trang thống kê “Duyệt tự động”. URL scanner, API key, phiên bản và concurrency đọc từ System Configs (cache 60s). Giá khu vực: trigger DB ghi bucket phường/tỉnh vào bảng dirty; Payload Job mỗi 15 phút tính lại các bucket dirty (lô 500, FOR UPDATE SKIP LOCKED), 3h sáng tính lại toàn bộ.",
      followUps: [
        {
          q: "Job quét lỗi thì sao?",
          a: "Retry 5 lần, backoff mũ từ 30s. Job sweep mỗi 5 phút đưa lại vào hàng đợi các tin đã pending quá 2 phút.",
        },
        {
          q: "Giá khu vực hiển thị ra sao?",
          a: "Mục “Giá tin này so với {khu vực}” cần ít nhất 10 tin mẫu, thiếu thì lùi từ phường lên tỉnh; chênh lệch trong ±5% coi là tương đương.",
        },
      ],
    },
    {
      summary:
        "Khách đăng nhập tại /dang-nhap bằng số điện thoại + mật khẩu, Google (nếu đã cấu hình) hoặc tài khoản đối tác Thiên Khôi (OAuth). OTP SMS dùng khi đăng ký, quên mật khẩu và xác minh số điện thoại. Trang quản trị bắt buộc 2FA TOTP sau mật khẩu, có thêm đăng nhập Passkey (SimpleWebAuthn). Hợp nhất tài khoản: user Thiên Khôi xác minh OTP một số điện thoại đã thuộc tài khoản khác, đồng ý thì gộp vào tài khoản đó; admin cũng gộp tay được; log gộp không sửa/xoá được. AES-256-GCM mã hoá email, username, số điện thoại (mã hoá tất định để vẫn tra cứu được), secret TOTP, cấu hình bí mật và giấy tờ doanh nghiệp. OpenAI sinh tiêu đề và mô tả từ thông số tin; phong cách là các prompt admin quản lý; kết quả được stream; token cộng dồn theo ngày và model.",
      followUps: [
        {
          q: "Chống spam OTP thế nào?",
          a: "Sliding window trên Redis: 3 SMS/60s mỗi IP (quá 2 thì bắt reCAPTCHA), 5/giờ mỗi số, 5/ngày mỗi tài khoản, 30/phút toàn hệ thống; Redis lỗi thì chặn gửi. OTP sống 5 phút, sai 5 lần thì hỏng, gửi lại sau 60s. Sai mật khẩu 5 lần khoá 10 phút.",
        },
        {
          q: "Passkey là gì?",
          a: "Đăng nhập bằng vân tay hoặc Face ID theo chuẩn WebAuthn, dùng cho trang quản trị. Thiết bị giữ khoá bí mật, server chỉ lưu khoá công khai, nên không lộ mật khẩu và chống được phishing.",
        },
      ],
    },
    {
      summary:
        "Bộ lọc nằm trong slug URL (vd. duoi-8ty, 50-100m2). JSON-LD cho tin, danh sách, tổ chức, bài viết; sitemap động; plugin SEO cho 6 collection. Cache Next.js lưu trên Redis, xoá theo tag khi tin thay đổi. Vitest chạy trên Postgres 16 riêng trong Docker, Playwright E2E, k6 load test trang chi tiết; oxlint, gitleaks quét phần thay đổi của nhánh; Sentry theo dõi lỗi client và server.",
      followUps: [
        {
          q: "Sao test cần DB riêng?",
          a: "DB dev nằm ở máy khác: suite mất khoảng 2,5 phút, đỏ ngẫu nhiên và ghi thẳng vào DB cả team dùng; trên DB local còn khoảng 1 phút. Mỗi spec tự tạo dữ liệu của mình.",
        },
        {
          q: "Đo hiệu năng thế nào?",
          a: "Dùng k6 bắn tải trang chi tiết tin; có một đợt khảo sát Core Web Vitals (docs/CWV_REPORT.html).",
        },
      ],
    },
  ],
};
