import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { profile } from "@/content/profile";
import { ButtonLink } from "./ui/ButtonLink";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden">
      {/* Figma "BG" ellipses (purple #DA4DF1 / mint #C4F5E9 / peach #FFEAC6), as gradients instead of blurred SVG */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-100 dark:opacity-40">
        <div className="absolute -top-64 -right-48 size-[870px] rounded-full bg-[radial-gradient(circle,rgb(218_77_241/0.4),transparent_65%)]" />
        <div className="absolute top-80 -right-96 size-[1044px] rounded-full bg-[radial-gradient(circle,rgb(196_245_233/0.7),transparent_65%)]" />
        <div className="absolute top-[420px] -left-40 h-[226px] w-[540px] -rotate-[30deg] rounded-full bg-[radial-gradient(ellipse,rgb(255_223_168/0.9),transparent_70%)]" />
      </div>

      <div className="container-page grid items-center gap-12 pt-10 pb-20 lg:grid-cols-[minmax(0,648px)_minmax(0,536px)] lg:justify-between lg:pt-[126px] lg:pb-[100px]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-tint px-4 py-1.5 text-small font-medium text-primary-500">
            <span className="size-2 rounded-full bg-primary-500" />
            {dict.hero.openToWork}
          </span>
          <h1 className="text-[40px] leading-[48px] font-semibold text-fg md:text-[56px] md:leading-[64px] xl:text-display xl:leading-[84px]">
            {dict.hero.greeting}
            <br />
            {profile.name}
          </h1>
          <p className="text-h5 font-semibold text-primary-500">{dict.hero.title}</p>
          <p className="text-body-lg text-muted">{dict.hero.summary}</p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#projects">{dict.hero.viewProjects}</ButtonLink>
            <ButtonLink href={profile.cvPath} download variant="outline">
              {dict.hero.downloadCv}
            </ButtonLink>
          </div>

          <dl className="mt-6 flex items-stretch rounded-[6px] border border-white bg-tint py-[17px] dark:border-line lg:mt-[118px] lg:max-w-[648px]">
            {dict.stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-1 flex-col-reverse gap-2 px-2 text-center ${i > 0 ? "border-l border-white dark:border-line" : ""}`}>
                <dt className="text-small text-subtle md:text-body">{stat.label}</dt>
                <dd className="text-[24px] leading-8 font-semibold text-fg-soft md:text-h3">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[536/636] w-full max-w-[536px] overflow-hidden rounded-[25px] bg-surface shadow-photo lg:-mt-[30px] lg:self-start">
          <Image src={profile.avatar} alt={dict.hero.photoAlt} fill priority sizes="(min-width: 1024px) 536px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
