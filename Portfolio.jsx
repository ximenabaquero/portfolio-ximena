import { styles } from "./styles.js";
import { LangProvider } from "./components/LangContext.jsx";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Languages from "./components/Languages.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function Portfolio() {
  return (
    <LangProvider>
      <style>{styles}</style>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Projects />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </LangProvider>
  );
}
