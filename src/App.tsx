import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import { useEffect } from "react";
import "./cssComp/f.css";

import ReactGA from "react-ga4";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-BY5E93F9B3");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
