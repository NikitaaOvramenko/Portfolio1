import About from "../home-page/About";
import Skills from "../home-page/Skills";
import Projects from "../home-page/Projects";
import DataViz from "../home-page/DataViz";
import Contacts from "../home-page/Contacts";
import GapCard from "../components/GapCard";

export default function HomePage() {
  return (
    <>
      <GapCard height={55} />
      <About />
      <Skills />
      <Projects type="Fullstack" />
      <Projects type="Frontend" />
      <Projects type="Backend" />
      <DataViz />
      <Contacts />
    </>
  );
}
