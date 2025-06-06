import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Testimonials from "./testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
