"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary, Project, ProjectCategory } from "@/content/types";
import { ButtonLink } from "./ui/ButtonLink";

type Filter = "all" | ProjectCategory;
type Labels = Dictionary["projects"];
const filters: Filter[] = ["all", "tourism", "ecommerce"];
const CARD_TECH_LIMIT = 4;

export function ProjectGrid({ labels }: { labels: Labels }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const items = filter === "all" ? labels.items : labels.items.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const count =
            f === "all" ? labels.items.length : labels.items.filter((p) => p.category === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`h-12 rounded-[6px] px-6 text-body font-medium transition-colors ${
                active
                  ? "bg-primary-500 text-white"
                  : "text-fg-soft hover:bg-tint hover:text-primary-500"
              }`}
            >
              {labels.filters[f]} ({count})
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card"
          >
            <button
              type="button"
              onClick={() => setSelected(project)}
              aria-label={`${labels.details}: ${project.name}`}
              className="relative block aspect-[424/248] bg-bg-alt"
            >
              <Image
                src={`/projects/${project.slug}.jpg`}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 424px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </button>
            <div className="flex flex-1 flex-col gap-5 p-8">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="flex flex-wrap justify-between gap-x-3 text-thin font-medium text-subtle uppercase">
                    <span>{labels.categoryLabels[project.category]}</span>
                    {project.period && <span className="normal-case">{project.period}</span>}
                  </p>
                  <h3 className="text-body-lg font-semibold break-words text-fg">{project.name}</h3>
                  {project.tagline && (
                    <p className="text-small font-medium text-fg-soft">{project.tagline}</p>
                  )}
                </div>
                <p className="line-clamp-3 text-small text-muted">{project.description}</p>
              </div>

              {project.tech.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {project.tech.slice(0, CARD_TECH_LIMIT).map((t) => (
                    <li
                      key={t}
                      className="rounded-[6px] bg-tint px-2 py-1 text-thin font-medium text-primary-500"
                    >
                      {t}
                    </li>
                  ))}
                  {project.tech.length > CARD_TECH_LIMIT && (
                    <li className="rounded-[6px] px-2 py-1 text-thin font-medium text-subtle">
                      +{project.tech.length - CARD_TECH_LIMIT}
                    </li>
                  )}
                </ul>
              )}

              <div className="mt-auto flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="inline-flex h-12 items-center rounded-[6px] bg-primary-500 px-6 text-body font-semibold text-white transition-colors hover:bg-primary-500/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  {labels.details}
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small font-semibold text-primary-500 hover:underline"
                >
                  {labels.visit} ↗
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ProjectDialog project={selected} labels={labels} onClose={() => setSelected(null)} />
    </>
  );
}

function ProjectDialog({
  project,
  labels,
  onClose,
}: {
  project: Project | null;
  labels: Labels;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // Clicks on the dialog element itself land on the backdrop area.
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      aria-labelledby="project-dialog-title"
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[960px] overflow-y-auto rounded-lg bg-surface text-fg shadow-card-lg backdrop:bg-gray-900/60"
    >
      {project && (
        <div className="flex flex-col">
          <div className="relative h-48 bg-bg-alt md:h-64">
            <Image
              src={`/projects/${project.slug}.jpg`}
              alt={project.name}
              fill
              loading="eager"
              sizes="(min-width: 992px) 960px, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-8 p-6 md:p-10">
            <header className="flex items-start gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <p className="flex flex-wrap items-center gap-3 text-small text-subtle">
                  {project.period && <span>{project.period}</span>}
                  <span className="rounded-full bg-tint px-3 py-1 text-thin font-semibold text-primary-500">
                    {labels.categoryLabels[project.category]}
                  </span>
                </p>
                <h3
                  id="project-dialog-title"
                  className="text-h4 leading-tight font-semibold break-words text-fg"
                >
                  {project.name}
                </h3>
                {project.tagline && <p className="text-body text-fg-soft">{project.tagline}</p>}
              </div>
              <button
                type="button"
                onClick={() => ref.current?.close()}
                aria-label={labels.close}
                className="grid size-10 shrink-0 place-items-center rounded-full bg-fg text-bg transition-opacity hover:opacity-85"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <div className="grid gap-8 md:grid-cols-[1fr_280px]">
              <div className="flex flex-col gap-6">
                <p className="text-body text-fg-soft">{project.description}</p>

                {(project.role || project.teamSize) && (
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-small">
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

                {project.responsibilities.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h4 className="text-body font-semibold text-fg">{labels.responsibilities}</h4>
                    <ul className="flex flex-col gap-2 text-body text-fg-soft">
                      {project.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary-500"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <aside className="flex flex-col gap-6 border-line max-md:border-t max-md:pt-8 md:border-l md:pl-8">
                {project.tech.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h4 className="text-body font-semibold text-fg">{labels.tech}</h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-[6px] border border-line px-2.5 py-1 text-small text-fg-soft"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <ButtonLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    arrow
                    className="w-fit"
                  >
                    {labels.visit}
                  </ButtonLink>
                  <p className="text-small break-all text-subtle">
                    {new URL(project.url).hostname}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
