"use client";

import { useState } from "react";

type MenuLink = { href: string; label: string; download?: boolean };

export function MobileMenu({ links, openLabel, closeLabel }: { links: MenuLink[]; openLabel: string; closeLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="grid size-12 place-items-center rounded-[4px] text-fg transition-colors hover:bg-tint"
      >
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-bg px-4 pb-4 shadow-card md:px-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              download={link.download}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-body font-medium text-fg-soft last:border-0 hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
