import type { Dictionary, Project } from "./types";

// Shared by the six provincial tourism sites. The CV lists only their URLs,
// so role/tech/period stay empty until confirmed.
// TODO: confirm role, period and tech stack for each tourism site.
const tourismSite = (slug: string, domain: string): Project => ({
  slug,
  name: domain,
  url: `https://${domain}`,
  category: "tourism",
  description:
    "Official tourism website built in collaboration with the provincial / local Department of Tourism.",
});

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
      "Full-stack Developer with 4+ years of experience and 1.5+ years in Project Manager / Product Owner roles. Combines hands-on development (NestJS, Laravel, Swoole, ReactJS, Next.js) with requirement analysis, backlog management, sprint planning and team coordination. Led a 6-member team delivering high-performance tourism portal systems, and is comfortable bridging stakeholders and developers to ship quality products on schedule.",
    openToWork: "Open to work",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    photoAlt: "Portrait of Nguyen Vu Hoang",
  },
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "8", label: "Projects" },
    { value: "1.5+", label: "Years as PM / PO" },
  ],
  projects: {
    heading: "Projects",
    subheading:
      "Official tourism portals for provincial Departments of Tourism, plus outsourced tourism and e-commerce systems.",
    filters: { all: "All", tourism: "Tourism portals", ecommerce: "E-commerce" },
    categoryLabels: { tourism: "Tourism portal", ecommerce: "E-commerce" },
    period: "Duration",
    role: "Role",
    teamSize: "Team size",
    responsibilities: "Responsibilities",
    visit: "Visit site",
    items: [
      {
        slug: "visitnghean",
        name: "visitvietnams & visitnghean.gov.vn",
        url: "https://visitnghean.gov.vn",
        category: "tourism",
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
        description:
          "Developed an e-commerce website system, including both the customer-facing storefront and the admin panel, supporting product management, order processing.",
        period: "04/2023 – 12/2023",
        role: "Fullstack Developer",
        responsibilities: [
          "Built the Admin Panel with key features: User management, Product management, Order,...",
          "Developed features to support SEO content management.",
          "Integrated Zalo live chat for real-time customer interaction.",
          "Integrated ViettelPost API for automatic shipping fee calculation.",
          "Implemented payment gateways (VNPay, MoMo).",
          "Integrated Google reCAPTCHA to prevent spam and bot attacks.",
        ],
        tech: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "ViettelPost", "VNPay", "MoMo", "reCAPTCHA"],
      },
      tourismSite("qnta", "qnta.vn"),
      tourismSite("dulichphutho", "dulichphutho.gov.vn"),
      tourismSite("dulichbacninh", "dulichbacninh.gov.vn"),
      tourismSite("hpta", "hpta.vn"),
      tourismSite("haiphongnews", "haiphongnews.gov.vn"),
      tourismSite("duonglamvillage", "duonglamvillage.com"),
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
                  "Gather and analyze business requirements and clarify them with stakeholders.",
                  "Manage the product backlog, prioritize features, and plan development activities.",
                  "Assign tasks, estimate effort, and track development progress.",
                  "Develop, integrate, and optimize frontend and backend features.",
                  "Design databases, build APIs, and integrate third-party services.",
                  "Perform testing and code reviews, fix bugs, and ensure product quality.",
                  "Validate features, coordinate deployments, and monitor post-release performance.",
                  "Collaborate with stakeholders, maintain documentation, and report project progress.",
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
    subheading: "Backend, frontend and delivery tooling used across tourism portals and e-commerce systems.",
    groups: [
      { name: "Backend", items: ["Swoole", "PHP (Laravel)", "NestJS", "Redis", "BullMQ"] },
      {
        name: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Bootstrap", "Tailwind CSS", "NextJS", "TanStack Query", "Zustand"],
      },
      { name: "Database", items: ["MySQL", "PostgreSQL"] },
      { name: "Cloud & Storage", items: ["AWS S3"] },
      { name: "DevOps & Environment", items: ["Docker"] },
      { name: "Version Control & Tools", items: ["Git", "GitHub", "Office tools"] },
    ],
    educationHeading: "Education",
    education: {
      school: "University Of Transport Technology",
      major: "Information Technology",
      details: ["Graduation level: Good", "Toeic 550"],
    },
  },
  cta: {
    heading: "Have a project or an open role? Let’s talk!",
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
