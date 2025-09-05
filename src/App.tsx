import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { useEffect } from "react";
import "./cssComp/f.css";

import ReactGA from "react-ga4";
import Experiences from "./components/Experiences";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-BY5E93F9B3");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <NavBar />
      <About />
      <Experiences />

      <Skills />
      <Projects></Projects>
      <Contacts></Contacts>

      <Footer></Footer>
    </>
  );
}

export default App;
