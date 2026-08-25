import { LazyMotion, domAnimation } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import PythonFocus from "./sections/PythonFocus";
import Projects from "./sections/Projects";
import Credentials from "./sections/Credentials";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <div className="glow-line mx-auto max-w-4xl" aria-hidden="true" />
        <About />
        <Journey />
        <Experience />
        <Skills />
        <PythonFocus />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  );
}
