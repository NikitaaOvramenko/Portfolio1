import About from "../home-page/About";
import Skills from "../home-page/Skills";
import Projects from "../home-page/Projects";
import Contacts from "../home-page/Contacts";
import GapCard from "../components/GapCard";

export default function HomePage() {
  return (
    <>
      <GapCard height={55} />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
