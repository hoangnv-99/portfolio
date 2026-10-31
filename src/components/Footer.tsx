import type { Dictionary } from "@/content/types";
import { homeHref, navLinks } from "./Header";
import { Logo } from "./Logo";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-footer py-8">
      <div className="container-page flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <Logo href={homeHref(dict)} inverted />
        <nav className="flex flex-wrap justify-center" aria-label="Footer">
          {[...navLinks(dict), { href: "#contact", label: dict.nav.contact }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-3 text-body text-gray-50 transition duration-300 hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-body text-white">{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
