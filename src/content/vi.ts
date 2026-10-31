import type { Dictionary } from "./types";

export const vi = {
  locale: "vi",
  meta: {
    title: "Nguyen Vu Hoang — Fullstack Developer",
    description:
      "Fullstack Developer với hơn 4 năm kinh nghiệm và hơn 1,5 năm ở vai trò Project Manager / Product Owner. NestJS, Laravel, Swoole, ReactJS, Next.js.",
  },
  nav: {
    projects: "Dự án",
    experience: "Kinh nghiệm",
    skills: "Kỹ năng",
    contact: "Liên hệ",
    downloadCv: "Tải CV",
    switchLang: "EN",
    switchLangLabel: "View English version",
    toggleTheme: "Bật/tắt chế độ tối",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
  hero: {
    greeting: "Xin chào, tôi là",
    title: "Fullstack Developer",
    summary:
      "Fullstack Developer với hơn 4 năm kinh nghiệm và hơn 1,5 năm ở vai trò Project Manager / Product Owner theo mô hình Agile/Scrum. Kết hợp lập trình thực tế (Laravel, Swoole, ReactJS, Next.js, NestJS) với phân tích yêu cầu, quản lý scope và backlog, điều phối các sprint (planning, daily, review, retrospective) và đội ngũ. Đã dẫn dắt đội 6 người xây dựng các hệ thống cổng thông tin du lịch hiệu năng cao, các dự án bất động sản và truyền thông; làm cầu nối giữa stakeholder với đội phát triển để kiểm soát scope, bàn giao sản phẩm chất lượng, đúng tiến độ.",
    openToWork: "Đang tìm cơ hội mới",
    viewProjects: "Xem dự án",
    downloadCv: "Tải CV",
    photoAlt: "Ảnh chân dung Nguyen Vu Hoang",
  },
  stats: [
    { value: "4+", label: "Năm kinh nghiệm" },
    { value: "9", label: "Dự án" },
    { value: "1.5+", label: "Năm làm PM / PO" },
  ],
  projects: {
    heading: "Dự án",
    subheading: "",
    filters: {
      all: "Tất cả",
      tourism: "Cổng du lịch",
      ecommerce: "Thương mại điện tử",
      realestate: "Bất động sản",
    },
    categoryLabels: {
      tourism: "Cổng du lịch",
      ecommerce: "Thương mại điện tử",
      realestate: "Bất động sản",
    },
    period: "Thời gian",
    role: "Vai trò",
    teamSize: "Quy mô đội",
    responsibilities: "Phần tôi làm",
    tech: "Công nghệ",
    details: "Xem chi tiết",
    close: "Đóng",
    visit: "Mở trang web",
    items: [
      {
        slug: "nhadat247",
        name: "nhadat247.vn",
        url: "https://nhadat247.vn",
        category: "realestate",
        tagline: "Sàn bất động sản tin đăng xác thực: Người thật – Nhà thật – Giá thật – Ảnh thật",
        description:
          "Sàn thương mại điện tử bất động sản kết nối môi giới với người mua, người thuê qua tin đăng đã xác thực, với hơn 60.000 tin trên toàn quốc. Một codebase Next.js + Payload CMS gồm cả trang người dùng, công cụ cho môi giới/doanh nghiệp và hệ thống quản trị.",
        period: "03/2026 – 09/2026",
        role: "Fullstack Developer & Product Owner",
        teamSize: "6 thành viên",
        responsibilities: [
          "Phân tích nghiệp vụ, chốt scope với stakeholder, quản lý backlog và điều phối sprint theo Scrum.",
          "Thiết kế kiến trúc một codebase Next.js + Payload CMS + PostgreSQL, xây trang quản trị riêng có phân quyền RBAC.",
          "Xây ví điện tử và thanh toán VietQR: ledger có idempotency key cho mọi biến động số dư, chống âm số dư và trigger DB chặn ghi số dư ngoài luồng ví.",
          "Xử lý bất đồng bộ bằng BullMQ/Redis và Payload Jobs: kiểm duyệt ảnh tự động trước khi đăng tin, thống kê giá theo khu vực.",
          "Xác thực: đăng nhập số điện thoại, Google, SSO Thiên Khôi; 2FA TOTP và Passkey cho trang quản trị; hợp nhất tài khoản; tích hợp OpenAI viết nội dung tin đăng.",
          "Tối ưu SEO và hiệu năng (URL lọc thân thiện SEO, cache Redis); kiểm thử nhiều tầng unit/integration/E2E/load, review code và theo dõi sau phát hành.",
        ],
        tech: [
          "Next.js",
          "Payload CMS",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "TailwindCSS",
          "AWS S3",
          "OpenAI",
          "VietQR",
          "Docker",
        ],
      },
      {
        slug: "visitnghean",
        name: "visitnghean.gov.vn",
        url: "https://visitnghean.gov.vn",
        category: "tourism",
        tagline: "Hệ thống cổng thông tin du lịch hiệu năng cao, tối ưu SEO",
        description:
          "Phát triển các hệ thống cổng thông tin du lịch, cung cấp thông tin điểm đến và tối ưu SEO. Hệ thống được xây dựng chú trọng hiệu năng cao và xử lý bất đồng bộ.",
        period: "02/2025 – 02/2026",
        role: "Project manager & fullstack developer",
        teamSize: "6 thành viên",
        responsibilities: [
          "Thu thập và phân tích yêu cầu từ BA.",
          "Lập kế hoạch dự án, phân công công việc và quản lý tiến độ.",
          "Phối hợp với các nhóm liên quan để triển khai và vận hành hệ thống.",
        ],
        tech: ["Core PHP + Swoole", "ReactJS", "TailwindCSS", "AWS S3", "Docker"],
      },
      {
        slug: "chefstore",
        name: "chefstore.vn",
        url: "https://chefstore.vn",
        category: "ecommerce",
        tagline: "Website thương mại điện tử kèm trang quản trị",
        description:
          "Phát triển hệ thống website thương mại điện tử gồm cả trang bán hàng cho khách và trang quản trị, hỗ trợ quản lý sản phẩm và xử lý đơn hàng.",
        period: "04/2023 – 12/2023",
        role: "Fullstack Developer",
        teamSize: "",
        responsibilities: [
          "Xây dựng trang quản trị với các chức năng chính: quản lý người dùng, sản phẩm, đơn hàng,...",
          "Phát triển tính năng hỗ trợ quản lý nội dung SEO.",
          "Tích hợp Zalo live chat để tương tác với khách hàng theo thời gian thực.",
          "Tích hợp API ViettelPost để tự động tính phí vận chuyển.",
          "Tích hợp cổng thanh toán VNPay, MoMo.",
          "Tích hợp Google reCAPTCHA chống spam và bot.",
        ],
        tech: [
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "ViettelPost",
          "VNPay",
          "MoMo",
          "reCAPTCHA",
        ],
      },
      {
        // TODO: bổ sung tagline, thời gian, vai trò, quy mô đội, phần tôi làm, công nghệ.
        slug: "qnta",
        name: "qnta.vn",
        url: "https://qnta.vn",
        category: "tourism",
        tagline: "",
        description:
          "Website du lịch chính thức, phối hợp phát triển cùng Sở Du lịch của tỉnh và địa phương.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: bổ sung tagline, thời gian, vai trò, quy mô đội, phần tôi làm, công nghệ.
        slug: "dulichphutho",
        name: "dulichphutho.gov.vn",
        url: "https://dulichphutho.gov.vn",
        category: "tourism",
        tagline: "",
        description:
          "Website du lịch chính thức, phối hợp phát triển cùng Sở Du lịch của tỉnh và địa phương.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: bổ sung tagline, thời gian, vai trò, quy mô đội, phần tôi làm, công nghệ.
        slug: "dulichbacninh",
        name: "dulichbacninh.gov.vn",
        url: "https://dulichbacninh.gov.vn",
        category: "tourism",
        tagline: "",
        description:
          "Website du lịch chính thức, phối hợp phát triển cùng Sở Du lịch của tỉnh và địa phương.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: bổ sung tagline, thời gian, vai trò, quy mô đội, phần tôi làm, công nghệ.
        slug: "hpta",
        name: "hpta.vn",
        url: "https://hpta.vn",
        category: "tourism",
        tagline: "",
        description:
          "Website du lịch chính thức, phối hợp phát triển cùng Sở Du lịch của tỉnh và địa phương.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: bổ sung tagline, thời gian, vai trò, quy mô đội, phần tôi làm, công nghệ.
        slug: "haiphongnews",
        name: "haiphongnews.gov.vn",
        url: "https://haiphongnews.gov.vn",
        category: "tourism",
        tagline: "",
        description:
          "Website du lịch chính thức, phối hợp phát triển cùng Sở Du lịch của tỉnh và địa phương.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: bổ sung tagline, thời gian, vai trò, quy mô đội, phần tôi làm, công nghệ.
        slug: "duonglamvillage",
        name: "duonglamvillage.com",
        url: "https://duonglamvillage.com",
        category: "tourism",
        tagline: "",
        description:
          "Website du lịch chính thức, phối hợp phát triển cùng Sở Du lịch của tỉnh và địa phương.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
    ],
  },
  experience: {
    heading: "Kinh nghiệm",
    subheading:
      "Từ xây dựng module quản lý du lịch đến dẫn dắt đội 6 người ở vai trò Project Manager và Product Owner.",
    items: [
      {
        company: "Công ty Cổ phần Công nghệ & Truyền thông Digital Space",
        period: "03/2026 – 09/2026",
        roles: [
          {
            title: "Developer + Product Owner",
            groups: [
              {
                items: [
                  "Thu thập, phân tích yêu cầu nghiệp vụ, làm rõ và chốt scope với stakeholder.",
                  "Quản lý product backlog, viết user story, ưu tiên tính năng và lập kế hoạch sprint theo Scrum.",
                  "Điều phối các Scrum ceremony (sprint planning, daily, review, retrospective), ước lượng effort và theo dõi tiến độ.",
                  "Phát triển, tích hợp và tối ưu các tính năng frontend và backend.",
                  "Thiết kế cơ sở dữ liệu, xây dựng API và tích hợp dịch vụ bên thứ ba.",
                  "Kiểm thử, review code, sửa lỗi và đảm bảo chất lượng sản phẩm.",
                  "Nghiệm thu tính năng, điều phối triển khai và theo dõi hiệu năng sau phát hành.",
                  "Kiểm soát thay đổi scope, phối hợp với stakeholder, duy trì tài liệu và báo cáo tiến độ dự án.",
                ],
              },
            ],
          },
        ],
      },
      {
        company: "Công ty Cổ phần Vietiso",
        period: "04/2024 – 02/2026",
        roles: [
          {
            title: "Developer",
            period: "06/2024 – 01/2025",
            groups: [
              {
                items: [
                  "Phát triển và triển khai tính năng theo yêu cầu của Technical Manager.",
                  "Xây dựng và cải tiến các module quản lý du lịch: tour, khách sạn, du thuyền và các dịch vụ liên quan.",
                  "Bảo trì và hỗ trợ website hiện có của công ty.",
                ],
              },
            ],
          },
          {
            title: "Developer + Project Manager",
            period: "02/2025 – 02/2026",
            groups: [
              {
                label: "Quản lý dự án (40%)",
                items: [
                  "Thu thập và phân tích yêu cầu từ BA, làm rõ phạm vi dự án.",
                  "Lập kế hoạch, phân công công việc và quản lý tiến độ.",
                  "Theo dõi tiến độ của đội phát triển để đảm bảo đúng hạn.",
                  "Phối hợp với các phòng ban, đối tác liên quan để dự án bàn giao đảm bảo chất lượng.",
                ],
              },
              {
                label: "Lập trình (60%)",
                items: [
                  "Tham gia xây dựng các tính năng cốt lõi của hệ thống.",
                  "Hỗ trợ review code và đảm bảo chất lượng kỹ thuật trước khi phát hành (kiểm thử, sửa lỗi).",
                  "Phối hợp xử lý sự cố và tối ưu hiệu năng hệ thống trong quá trình vận hành.",
                ],
              },
            ],
          },
        ],
      },
      {
        company: "Công ty TNHH Vietgoing",
        period: "01/2022 – 12/2023",
        roles: [
          {
            groups: [
              {
                items: [
                  "Phát triển và cải tiến tính năng theo yêu cầu của ban quản lý.",
                  "Xây dựng module quản lý khách sạn và tour.",
                  "Tùy biến giao diện website và tích hợp Google Maps.",
                  "Hỗ trợ và bảo trì các module đã triển khai.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  skills: {
    heading: "Kỹ năng",
    subheading:
      "Công nghệ đã dùng thực tế cho sàn bất động sản, các cổng du lịch và hệ thống thương mại điện tử.",
    groups: [
      {
        name: "Backend",
        icon: "/icons/server.svg",
        items: ["PHP", "Laravel", "Swoole", "NestJS", "Payload CMS", "BullMQ"],
      },
      {
        name: "Frontend",
        icon: "/icons/monitor-smartphone.svg",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "Shadcn/ui",
          "TanStack Query",
          "Zustand",
        ],
      },
      {
        name: "Cơ sở dữ liệu & Cache",
        icon: "/icons/database.svg",
        items: ["MySQL", "PostgreSQL", "Redis"],
      },
      {
        name: "Thanh toán & Tích hợp",
        icon: "/icons/credit-card.svg",
        items: [
          "VietQR",
          "VNPay",
          "MoMo",
          "ViettelPost",
          "OpenAI",
          "Google Maps",
          "Zalo Live Chat",
          "Google reCAPTCHA",
        ],
      },
      {
        name: "Xác thực & Bảo mật",
        icon: "/icons/shield-check.svg",
        items: ["OAuth (Google)", "2FA TOTP", "Passkey (WebAuthn)", "RBAC"],
      },
      {
        name: "Kiểm thử & Giám sát",
        icon: "/icons/activity.svg",
        items: ["Vitest", "Playwright", "k6", "Sentry"],
      },
      { name: "Cloud & DevOps", icon: "/icons/cloud.svg", items: ["AWS S3", "Docker"] },
      {
        name: "Quản lý mã nguồn & Công cụ",
        icon: "/icons/git-branch.svg",
        items: ["Git", "GitHub", "GitLab", "Tin học văn phòng"],
      },
    ],
    educationHeading: "Học vấn",
    education: {
      school: "Trường Đại học Công nghệ Giao thông Vận tải",
      major: "Công nghệ thông tin",
      details: ["Xếp loại tốt nghiệp: Khá", "TOEIC 550"],
    },
  },
  cta: {
    heading: "Bạn có dự án hay vị trí đang tuyển?\nHãy cùng trao đổi!",
    body: "Tôi đang tìm cơ hội ở vị trí Fullstack Developer hoặc Project Manager / Product Owner.",
    button: "Liên hệ ngay",
  },
  contact: {
    heading: "Liên hệ",
    body: "Liên hệ với tôi qua email hoặc điện thoại, hoặc tải CV để xem đầy đủ thông tin.",
    labels: { email: "Email", phone: "Điện thoại", address: "Địa chỉ", birthday: "Năm sinh" },
    address: "Hai Bà Trưng, Hà Nội",
    emailMe: "Gửi email",
  },
  footer: { copyright: "Copyright © 2026 Nguyen Vu Hoang." },
} satisfies Dictionary;
