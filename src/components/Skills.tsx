import type { Dictionary } from "@/content/types";
import { Icon } from "./ui/Icon";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills({ dict }: { dict: Dictionary }) {
  const { education } = dict.skills;

  return (
    <section id="skills" className="relative overflow-clip py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-100 dark:opacity-40"
      >
        <div className="absolute -top-48 -left-64 size-[870px] rounded-full bg-[radial-gradient(circle,rgb(218_77_241/0.256),transparent_65%)]" />
        <div className="absolute top-1/3 -right-96 size-[1044px] rounded-full bg-[radial-gradient(circle,rgb(196_245_233/0.448),transparent_65%)]" />
      </div>

      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,529px)_minmax(0,648px)] lg:items-start lg:justify-between">
        <div className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
          <SectionHeading
            title={dict.skills.heading}
            subtitle={dict.skills.subheading}
            align="left"
          />
          <div data-reveal className="flex flex-col gap-2 border-l-[5px] border-primary-500 pl-6">
            <p className="text-small font-medium text-subtle uppercase">
              {dict.skills.educationHeading}
            </p>
            <p className="text-h5 font-semibold text-fg">{education.school}</p>
            <p className="text-body text-fg-soft">{education.major}</p>
            <ul className="text-body text-muted">
              {education.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {dict.skills.groups.map((group) => (
            <li
              key={group.name}
              data-reveal
              className="flex flex-col gap-8 rounded-xl bg-surface p-8 shadow-[32px_32px_62px_rgb(43_56_76/0.1),-16px_16px_40px_rgb(43_56_76/0.06)] sm:even:translate-y-6"
            >
              <span className="w-fit rounded-[6px] bg-primary-500 p-5 text-white">
                <Icon src="/figma/notes.svg" className="size-8" />
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-h5 font-semibold text-fg">{group.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-[6px] bg-bg-alt px-2.5 py-1 text-small text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
