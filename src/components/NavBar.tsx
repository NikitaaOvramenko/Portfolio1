import { useState } from "react";
import git from "../icons/github.png";
import inst from "../icons/instagram.png";
import gmail from "../icons/gmail.png";
import resume from "../pdfs/resume.pdf";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rightItems = ["Resume", "Projects", "Contacts"]; // Commented out: "Skills"
  const links = [
    "https://github.com/NikitaaOvramenko",
    "https://www.instagram.com/ovramenkonikita/",
    "mailto:nikita.ovramenko@torontomu.ca",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: string) => {
    // Close mobile menu when any nav item is clicked
    setIsMenuOpen(false);

    if (item === "Resume") {
      // Resume - handled by href and download attribute
      return;
    }
    // Scroll to section for Projects, Contacts
    scrollToSection(item);
  };

  const icons = [git, inst, gmail];

  return (
    <div className="flex justify-center">
      <div className="navbox fixed top-0 z-50 bg-opacity-50 backdrop-blur-sm flex w-[85%] h-16 bg-black p-1 shadow-lg border-b border-white/10 items-center justify-between">
        {/* Left: Social Icons */}
        <div className="left flex">
          {icons.map((icon, index) => (
            <a
              key={`icon-${index}`}
              className="picBox flex mx-1 w-8 h-8 sm:w-10 sm:h-10 justify-center items-center hover:bg-white/10 rounded-lg transition-all duration-300"
              target="_blank"
              rel="noreferrer"
              href={links[index]}
            >
              <img
                src={icon}
                alt={`Social media icon ${index + 1}`}
                className="w-6 h-6 sm:w-8 sm:h-8 active:scale-50 duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            </a>
          ))}
        </div>

        {/* Right: Desktop Nav (hidden on mobile) */}
        <div className="right hidden sm:flex text-white text-base justify-end gap-2 font-heading">
          {rightItems.map((item, index) => (
            <a
              key={`nav-${index}`}
              href={item === "Resume" ? resume : undefined}
              onClick={() => handleNavClick(item)}
              className="textBox flex px-4 h-11 justify-center items-center hover:text-shadow-neon-sm hover:bg-white/5 rounded-lg transition-all ease-in-out duration-300 font-medium tracking-wide cursor-pointer"
              download={item === "Resume" ? true : undefined}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Button (visible on mobile only) */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 sm:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex justify-center">
          <div className="w-[85%] bg-black/90 backdrop-blur-sm border border-white/10 rounded-b-lg shadow-lg">
            {rightItems.map((item, index) => (
              <a
                key={`mobile-nav-${index}`}
                href={item === "Resume" ? resume : undefined}
                onClick={() => handleNavClick(item)}
                className="flex px-6 py-4 text-white font-heading font-medium tracking-wide hover:bg-white/10 transition-all duration-300 cursor-pointer border-b border-white/5 last:border-b-0"
                download={item === "Resume" ? true : undefined}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
