import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./ui/SectionHeading";

// Layout and cards follow Figma "What I do?" (135:823).
export function Experience({ dict }: { dict: Dictionary }) {
  return (
    <section id="experience" className="bg-bg-alt py-20 lg:py-[150px]">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,529px)_minmax(0,648px)] lg:justify-between">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <SectionHeading title={dict.experience.heading} subtitle={dict.experience.subheading} align="left" />
        </div>

        <ol className="flex flex-col gap-6">
          {dict.experience.items.map((job) => (
            <li
              key={job.company}
              data-reveal
              className="group relative flex flex-col gap-4 overflow-hidden rounded-[6px] bg-surface p-6 transition-shadow hover:shadow-card-lg md:p-8"
            >
              <span aria-hidden className="absolute inset-y-0 left-0 w-[5px] bg-primary-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] leading-7 font-semibold text-fg md:text-h4 md:leading-8">{job.company}</h3>
                <p className="text-small font-medium text-primary-500">{job.period}</p>
              </div>
              {job.roles.map((role, i) => (
                <div key={role.title ?? i} className="flex flex-col gap-3">
                  {role.title && (
                    <p className="text-body font-semibold text-fg">
                      {role.title}
                      {role.period && <span className="font-normal text-subtle"> · {role.period}</span>}
                    </p>
                  )}
                  {role.groups.map((group, j) => (
                    <div key={group.label ?? j} className="flex flex-col gap-1">
                      {group.label && <p className="text-small font-semibold text-fg-soft">{group.label}</p>}
                      <ul className="list-disc space-y-1 pl-5 text-body text-fg-soft marker:text-primary-500">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
