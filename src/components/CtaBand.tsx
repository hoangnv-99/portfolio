import type { Dictionary } from "@/content/types";
import { ButtonLink } from "./ui/ButtonLink";

// Figma "Call to action" (135:807).
export function CtaBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-band py-20 lg:py-[100px]">
      <div data-reveal className="container-page flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-175 text-[32px] leading-10 font-semibold text-white md:text-h1 md:leading-14 text-balance">
          {dict.cta.heading}
        </h2>
        <p className="max-w-[500px] text-body-lg text-gray-300">{dict.cta.body}</p>
        <ButtonLink href="#contact" arrow>
          {dict.cta.button}
        </ButtonLink>
      </div>
    </section>
  );
}
