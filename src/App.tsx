import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./cssComp/f.css";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects></Projects>
      <Skills />
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
