import type { Dictionary } from "@/content/types";
import { Contact } from "./Contact";
import { CtaBand } from "./CtaBand";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { RevealObserver } from "./RevealObserver";
import { Skills } from "./Skills";

export function Portfolio({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <Projects dict={dict} />
        <Experience dict={dict} />
        <Skills dict={dict} />
        <CtaBand dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
      <RevealObserver />
    </>
  );
}
