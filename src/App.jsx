import Intro from "./components/Intro.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ContactStrip from "./components/ContactStrip.jsx";
import CurrentRole from "./components/CurrentRole.jsx";
import SectionDivider from "./components/SectionDivider.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Publications from "./components/Publications.jsx";
import Skills from "./components/Skills.jsx";
import Expertise from "./components/Expertise.jsx";
import Media from "./components/Media.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppWidget from "./components/WhatsAppWidget.jsx";

export default function App() {
  return (
    <>
      <Intro />
      <Nav />
      <Hero />
      <ContactStrip />
      <CurrentRole />
      <Education />
      <SectionDivider />
      <Experience />
      <Publications />
      <Skills />
      <Expertise />
      <Media />
      <ContactForm />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
