"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary, ProjectCategory } from "@/content/types";
import { ButtonLink } from "./ui/ButtonLink";

type Filter = "all" | ProjectCategory;
const filters: Filter[] = ["all", "tourism", "ecommerce"];

export function ProjectGrid({ labels }: { labels: Dictionary["projects"] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const items = filter === "all" ? labels.items : labels.items.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const count = f === "all" ? labels.items.length : labels.items.filter((p) => p.category === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`h-12 rounded-[4px] px-6 text-body font-medium transition-colors ${
                active ? "bg-primary-500 text-white" : "text-fg-soft hover:bg-tint hover:text-primary-500"
              }`}
            >
              {labels.filters[f]} ({count})
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card"
          >
            <div className="relative aspect-[424/248] bg-bg-alt">
              <Image
                src={`/projects/${project.slug}.jpg`}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 424px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col gap-5 p-8">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-thin font-medium text-subtle uppercase">{labels.categoryLabels[project.category]}</p>
                  <h3 className="text-body-lg font-semibold break-words text-fg">{project.name}</h3>
                </div>
                <p className="text-small text-muted">{project.description}</p>
              </div>

              {(project.period || project.role || project.teamSize) && (
                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-small">
                  {project.period && (
                    <>
                      <dt className="text-subtle">{labels.period}</dt>
                      <dd className="text-fg-soft">{project.period}</dd>
                    </>
                  )}
                  {project.role && (
                    <>
                      <dt className="text-subtle">{labels.role}</dt>
                      <dd className="text-fg-soft">{project.role}</dd>
                    </>
                  )}
                  {project.teamSize && (
                    <>
                      <dt className="text-subtle">{labels.teamSize}</dt>
                      <dd className="text-fg-soft">{project.teamSize}</dd>
                    </>
                  )}
                </dl>
              )}

              {project.responsibilities && (
                <details className="group text-small text-muted">
                  <summary className="cursor-pointer font-semibold text-fg-soft marker:text-primary-500">
                    {labels.responsibilities}
                  </summary>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {project.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </details>
              )}

              {project.tech && (
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-[4px] bg-tint px-2 py-1 text-thin font-medium text-primary-500">
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <ButtonLink
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                arrow
                className="mt-auto w-fit"
              >
                {labels.visit}
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
