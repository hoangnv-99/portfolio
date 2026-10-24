import type { Dictionary } from "@/content/types";
import { ProjectGrid } from "./ProjectGrid";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects" className="py-20 lg:py-[100px]">
      <div className="container-page">
        <SectionHeading title={dict.projects.heading} subtitle={dict.projects.subheading} />
        <ProjectGrid labels={dict.projects} />
      </div>
    </section>
  );
}
