import { profile } from "@/content/profile";

// Figma "Logo": Heading/03 name.
export function Logo({ href, inverted = false }: { href: string; inverted?: boolean }) {
  return (
    <a href={href} className="flex items-center">
      <span className={`text-h4 font-semibold md:text-h3 ${inverted ? "text-white" : "text-fg"}`}>{profile.logoText}</span>
    </a>
  );
}
