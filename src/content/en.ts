import type { Dictionary } from "./types";

export const en = {
  locale: "en",
  meta: {
    title: "Nguyen Vu Hoang — Fullstack Developer",
    description:
      "Full-stack Developer with 4+ years of experience and 1.5+ years in Project Manager / Product Owner roles. NestJS, Laravel, Swoole, ReactJS, Next.js.",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    downloadCv: "Download CV",
    switchLang: "VI",
    switchLangLabel: "Xem bản tiếng Việt",
    toggleTheme: "Toggle dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    greeting: "Hello, I’m",
    title: "Fullstack Developer",
    summary:
      "Full-stack Developer with 4+ years of experience and 1.5+ years as a Project Manager / Product Owner in Agile/Scrum teams. Combines hands-on development (NestJS, Laravel, Swoole, ReactJS, Next.js) with requirement analysis, scope and backlog management, running Scrum ceremonies (sprint planning, daily stand-ups, reviews, retrospectives) and team coordination. Led a 6-member team delivering high-performance tourism portal systems, real estate and media projects; bridges stakeholders and developers to manage scope and ship quality products on schedule.",
    openToWork: "Open to work",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    photoAlt: "Portrait of Nguyen Vu Hoang",
  },
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "9", label: "Projects" },
    { value: "1.5+", label: "Years as PM / PO" },
  ],
  projects: {
    heading: "Projects",
    subheading:
      "A verified-listing real estate marketplace, official tourism portals for provincial Departments of Tourism, plus outsourced tourism and e-commerce systems.",
    filters: {
      all: "All",
      tourism: "Tourism portals",
      ecommerce: "E-commerce",
      realestate: "Real estate",
    },
    categoryLabels: {
      tourism: "Tourism portal",
      ecommerce: "E-commerce",
      realestate: "Real estate",
    },
    period: "Duration",
    role: "Role",
    teamSize: "Team size",
    responsibilities: "What I did",
    tech: "Tech stack",
    details: "View details",
    close: "Close",
    visit: "Open website",
    items: [
      {
        slug: "nhadat247",
        name: "nhadat247.vn",
        url: "https://nhadat247.vn",
        category: "realestate",
        tagline:
          "Verified-listing real estate marketplace: real people, real homes, real prices, real photos",
        description:
          "A real estate marketplace connecting brokers with buyers and renters through verified listings, with 60,000+ listings nationwide. A single Next.js + Payload CMS codebase covering the public site, broker/business tools and the admin system.",
        period: "03/2026 – 09/2026",
        role: "Fullstack Developer & Product Owner",
        teamSize: "7 members",
        responsibilities: [
          "Analyzed business requirements, agreed scope with stakeholders, managed the backlog and ran sprints following Scrum.",
          "Designed a single-codebase Next.js + Payload CMS + PostgreSQL architecture with a custom admin panel and RBAC.",
          "Built the e-wallet and VietQR payments: an idempotent ledger for every balance change, negative-balance protection and a DB trigger that blocks balance writes outside the wallet service.",
          "Built async processing with BullMQ/Redis and Payload Jobs: automated image moderation before listings go live and area price statistics.",
          "Authentication: phone, Google and Thiên Khôi SSO sign-in; TOTP 2FA and passkeys for the admin panel; account merging; integrated OpenAI to draft listing content.",
          "Optimized SEO and performance (SEO-friendly filter URLs, Redis caching); multi-layer testing (unit/integration/E2E/load), code reviews and post-release monitoring.",
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
        tagline: "High-performance, SEO-optimized tourism portal system",
        description:
          "Developed tourism portal systems, providing destination information, SEO optimization. The systems were built with a focus on high performance and asynchronous processing.",
        period: "02/2025 – 02/2026",
        role: "Project manager & fullstack developer",
        teamSize: "6 members",
        responsibilities: [
          "Gathered and analyzed requirements from the BA.",
          "Planned the project, assigned tasks, and managed timelines.",
          "Coordinated with cross-functional teams to deploy and operate the system.",
        ],
        tech: ["Core PHP + Swoole", "ReactJS", "TailwindCSS", "AWS S3", "Docker"],
      },
      {
        slug: "chefstore",
        name: "chefstore.vn",
        url: "https://chefstore.vn",
        category: "ecommerce",
        tagline: "E-commerce storefront with an admin panel",
        description:
          "Developed an e-commerce website system, including both the customer-facing storefront and the admin panel, supporting product management, order processing.",
        period: "04/2023 – 12/2023",
        role: "Fullstack Developer",
        teamSize: "",
        responsibilities: [
          "Built the Admin Panel with key features: User management, Product management, Order,...",
          "Developed features to support SEO content management.",
          "Integrated Zalo live chat for real-time customer interaction.",
          "Integrated ViettelPost API for automatic shipping fee calculation.",
          "Implemented payment gateways (VNPay, MoMo).",
          "Integrated Google reCAPTCHA to prevent spam and bot attacks.",
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
        // TODO: fill in tagline, period, role, team size, what I did, tech stack.
        slug: "qnta",
        name: "qnta.vn",
        url: "https://qnta.vn",
        category: "tourism",
        tagline: "",
        description:
          "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: fill in tagline, period, role, team size, what I did, tech stack.
        slug: "dulichphutho",
        name: "dulichphutho.gov.vn",
        url: "https://dulichphutho.gov.vn",
        category: "tourism",
        tagline: "",
        description:
          "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: fill in tagline, period, role, team size, what I did, tech stack.
        slug: "dulichbacninh",
        name: "dulichbacninh.gov.vn",
        url: "https://dulichbacninh.gov.vn",
        category: "tourism",
        tagline: "",
        description:
          "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: fill in tagline, period, role, team size, what I did, tech stack.
        slug: "hpta",
        name: "hpta.vn",
        url: "https://hpta.vn",
        category: "tourism",
        tagline: "",
        description:
          "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: fill in tagline, period, role, team size, what I did, tech stack.
        slug: "haiphongnews",
        name: "haiphongnews.gov.vn",
        url: "https://haiphongnews.gov.vn",
        category: "tourism",
        tagline: "",
        description:
          "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
      {
        // TODO: fill in tagline, period, role, team size, what I did, tech stack.
        slug: "duonglamvillage",
        name: "duonglamvillage.com",
        url: "https://duonglamvillage.com",
        category: "tourism",
        tagline: "",
        description:
          "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
        period: "",
        role: "",
        teamSize: "",
        responsibilities: [],
        tech: [],
      },
    ],
  },
  experience: {
    heading: "Experience",
    subheading:
      "From building travel management modules to leading a 6-member team as Project Manager and Product Owner.",
    items: [
      {
        company: "Digital Space Technology & Communications Joint Stock Company",
        period: "03/2026 – 09/2026",
        roles: [
          {
            title: "Programming Technician + Product Owner",
            groups: [
              {
                items: [
                  "Gather and analyze business requirements, clarify them and agree on scope with stakeholders.",
                  "Manage the product backlog, write user stories, prioritize features, and plan sprints following Scrum.",
                  "Facilitate Scrum ceremonies (sprint planning, daily stand-ups, reviews, retrospectives), estimate effort, and track progress.",
                  "Develop, integrate, and optimize frontend and backend features.",
                  "Design databases, build APIs, and integrate third-party services.",
                  "Perform testing and code reviews, fix bugs, and ensure product quality.",
                  "Validate features, coordinate deployments, and monitor post-release performance.",
                  "Manage scope changes, collaborate with stakeholders, maintain documentation, and report project progress.",
                ],
              },
            ],
          },
        ],
      },
      {
        company: "Vietiso Joint Stock Company",
        period: "04/2024 – 02/2026",
        roles: [
          {
            title: "Programming Technician",
            period: "06/2024 – 01/2025",
            groups: [
              {
                items: [
                  "Developed and implemented features based on requirements from the Technical Manager.",
                  "Built and enhanced travel management modules, including tours, hotels, cruises, and related services.",
                  "Maintained and supported the company’s existing website",
                ],
              },
            ],
          },
          {
            title: "Programming Technician + Project Manager",
            period: "02/2025 – 02/2026",
            groups: [
              {
                label: "Project Management (40%)",
                items: [
                  "Gathered and analyzed requirements from the BA, clarifying project scope.",
                  "Created plans, assigned tasks, and managed timelines.",
                  "Tracked the development team’s progress to ensure deadlines were met.",
                  "Coordinated with cross-functional teams to ensure smooth project delivery.",
                ],
              },
              {
                label: "Development (60%)",
                items: [
                  "Contributed to building core system features.",
                  "Supported code reviews and ensured technical quality before release (testing, bug fixing).",
                  "Collaborated on troubleshooting issues and optimizing system performance during operation.",
                ],
              },
            ],
          },
        ],
      },
      {
        company: "Vietgoing Company Limited",
        period: "01/2022 – 12/2023",
        roles: [
          {
            groups: [
              {
                items: [
                  "Developed and enhanced features based on management requirements.",
                  "Built hotel and tour management modules.",
                  "Customized the website UI and integrated Google Maps.",
                  "Provided support and maintenance for deployed modules.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  skills: {
    heading: "Skills",
    subheading:
      "Technologies used in production across a real estate marketplace, tourism portals and e-commerce systems.",
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
        name: "Database & Cache",
        icon: "/icons/database.svg",
        items: ["MySQL", "PostgreSQL", "Redis"],
      },
      {
        name: "Payments & Integrations",
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
        name: "Auth & Security",
        icon: "/icons/shield-check.svg",
        items: ["OAuth (Google)", "2FA TOTP", "Passkey (WebAuthn)", "RBAC"],
      },
      {
        name: "Testing & Monitoring",
        icon: "/icons/activity.svg",
        items: ["Vitest", "Playwright", "k6", "Sentry"],
      },
      { name: "Cloud & DevOps", icon: "/icons/cloud.svg", items: ["AWS S3", "Docker"] },
      {
        name: "Version Control & Tools",
        icon: "/icons/git-branch.svg",
        items: ["Git", "GitHub", "GitLab", "Office tools"],
      },
    ],
    educationHeading: "Education",
    education: {
      school: "University Of Transport Technology",
      major: "Information Technology",
      details: ["Graduation level: Good", "Toeic 550"],
    },
  },
  cta: {
    heading: "Have a project or an open role?\nLet’s talk!",
    body: "I’m open to Fullstack Developer and Project Manager / Product Owner opportunities.",
    button: "Get in touch",
  },
  contact: {
    heading: "Contact",
    body: "Reach me by email or phone, or download my CV for the full details.",
    labels: { email: "Email", phone: "Phone", address: "Address", birthday: "Birthday" },
    address: "Hanoi",
    emailMe: "Email me",
  },
  footer: { copyright: "Copyright © 2026 Nguyen Vu Hoang." },
} satisfies Dictionary;
