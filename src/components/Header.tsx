import type { Dictionary } from "@/content/types";
import { profile } from "@/content/profile";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "./ui/ButtonLink";

export function navLinks(dict: Dictionary) {
  return [
    { href: "#projects", label: dict.nav.projects },
    { href: "#experience", label: dict.nav.experience },
    { href: "#skills", label: dict.nav.skills },
  ];
}

export function homeHref(dict: Dictionary) {
  return dict.locale === "vi" ? "/" : "/en";
}

export function Header({ dict }: { dict: Dictionary }) {
  const otherLocaleHref = dict.locale === "vi" ? "/en" : "/";
  const linkClass =
    "px-4 py-3 text-body font-medium text-fg-soft transition-colors hover:text-primary-500 xl:px-6";

  return (
    <header className="sticky top-0 z-50 border-b border-line/0 bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <div className="container-page relative flex h-[72px] items-center justify-between lg:h-24">
        <Logo href={homeHref(dict)} />

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {navLinks(dict).map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a href={profile.cvPath} download className={linkClass}>
            {dict.nav.downloadCv}
          </a>
          <a
            href={otherLocaleHref}
            hrefLang={dict.locale === "vi" ? "en" : "vi"}
            aria-label={dict.nav.switchLangLabel}
            className={linkClass}
          >
            {dict.nav.switchLang}
          </a>
          <ThemeToggle label={dict.nav.toggleTheme} />
          <ButtonLink href="#contact" className="ml-2">
            {dict.nav.contact}
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle label={dict.nav.toggleTheme} />
          <MobileMenu
            links={[
              ...navLinks(dict),
              { href: "#contact", label: dict.nav.contact },
              { href: profile.cvPath, label: dict.nav.downloadCv, download: true },
              { href: otherLocaleHref, label: dict.nav.switchLangLabel },
            ]}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
