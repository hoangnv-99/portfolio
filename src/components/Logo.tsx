import { profile } from "@/content/profile";

// Figma "Logo": 56px primary circle with an initial + Heading/03 name.
export function Logo({ href, inverted = false }: { href: string; inverted?: boolean }) {
  return (
    <a href={href} className="flex items-center gap-3">
      <span className="grid size-12 place-items-center rounded-full bg-primary-500 text-[24px] font-medium text-white md:size-14">
        {profile.logoInitial}
      </span>
      <span className={`text-h4 font-semibold md:text-h3 ${inverted ? "text-white" : "text-fg"}`}>{profile.logoText}</span>
    </a>
  );
}
