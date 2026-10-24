import type { Dictionary } from "@/content/types";
import { Icon } from "./ui/Icon";
import { SectionHeading } from "./ui/SectionHeading";

// Layout and cards follow Figma "Work Process" (135:778).
export function Skills({ dict }: { dict: Dictionary }) {
  const { education } = dict.skills;

  return (
    <section id="skills" className="py-20 lg:py-[124px]">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,529px)_minmax(0,648px)] lg:justify-between">
        <div className="flex flex-col gap-10">
          <SectionHeading title={dict.skills.heading} subtitle={dict.skills.subheading} align="left" />
          <div data-reveal className="flex flex-col gap-2 border-l-[5px] border-primary-500 pl-6">
            <p className="text-small font-medium text-subtle uppercase">{dict.skills.educationHeading}</p>
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
              className="flex flex-col gap-8 rounded-xl bg-surface p-8 shadow-process sm:even:translate-y-6"
            >
              <span className="w-fit rounded-[6px] bg-primary-500 p-5 text-white">
                <Icon src="/figma/notes.svg" className="size-8" />
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-h5 font-semibold text-fg">{group.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-[4px] bg-bg-alt px-2.5 py-1 text-small text-muted">
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
