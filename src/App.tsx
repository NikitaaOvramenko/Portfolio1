import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects></Projects>
      <Skills />
      <Contacts></Contacts>
    </>
  );
}

export default App;
