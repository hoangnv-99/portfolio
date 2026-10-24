export type Locale = "vi" | "en";

export type ProjectCategory = "tourism" | "ecommerce";

export type Project = {
  slug: string;
  name: string;
  url: string;
  category: ProjectCategory;
  description: string;
  period?: string;
  role?: string;
  teamSize?: string;
  responsibilities?: string[];
  tech?: string[];
};

export type ExperienceRole = {
  title?: string;
  period?: string;
  groups: { label?: string; items: string[] }[];
};

export type Experience = {
  company: string;
  period: string;
  roles: ExperienceRole[];
};

export type Dictionary = {
  locale: Locale;
  meta: { title: string; description: string };
  nav: {
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    downloadCv: string;
    switchLang: string;
    switchLangLabel: string;
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    greeting: string;
    title: string;
    summary: string;
    openToWork: string;
    viewProjects: string;
    downloadCv: string;
    photoAlt: string;
  };
  stats: { value: string; label: string }[];
  projects: {
    heading: string;
    subheading: string;
    filters: Record<"all" | ProjectCategory, string>;
    categoryLabels: Record<ProjectCategory, string>;
    period: string;
    role: string;
    teamSize: string;
    responsibilities: string;
    visit: string;
    items: Project[];
  };
  experience: {
    heading: string;
    subheading: string;
    items: Experience[];
  };
  skills: {
    heading: string;
    subheading: string;
    groups: { name: string; items: string[] }[];
    educationHeading: string;
    education: { school: string; major: string; details: string[] };
  };
  cta: { heading: string; body: string; button: string };
  contact: {
    heading: string;
    body: string;
    labels: { email: string; phone: string; address: string; birthday: string };
    address: string;
    emailMe: string;
  };
  footer: { copyright: string };
};
