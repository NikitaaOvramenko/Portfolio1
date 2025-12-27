import { useState } from "react";
import git from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import gmail from "../icons/gmail.png";
import resume from "../pdfs/resume.pdf";
import { useTheme } from "../context/ThemeContext.tsx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const rightItems = ["Resume", "Projects", "Contacts"];
  const links = [
    "https://github.com/NikitaaOvramenko",
    "https://www.linkedin.com/in/nikitaovramenko/",
    "mailto:nikita.ovramenko@torontomu.ca",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    if (item === "Resume") return;
    scrollToSection(item);
  };

  const icons = [git, linkedin, gmail];

  return (
    <div className="flex justify-center">
      <div
        className={`navbox fixed top-0 z-50 bg-opacity-50 backdrop-blur-sm flex w-[85%] h-16 p-1 items-center justify-between border-b ${
          isDark ? "bg-black border-white/10" : "bg-white border-gray-200"
        }`}
      >
        {/* Left: Social Icons */}
        <div className="left flex items-center justify-between">
          {icons.map((icon, index) => (
            <a
              key={`icon-${index}`}
              className={`picBox flex mx-1 w-8 h-8 sm:w-10 sm:h-10 justify-center items-center rounded-lg transition-all duration-300 ${
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
              }`}
              target="_blank"
              rel="noreferrer"
              href={links[index]}
            >
              <img
                src={icon}
                alt={`Social media icon ${index + 1}`}
                className={`w-6 h-6 sm:w-8 sm:h-8 active:scale-50 duration-300 ${
                  isDark
                    ? "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    : "hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
                }`}
              />
            </a>
          ))}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`w-10 h-10 text-2xl sm:text-3xl text-center rounded transition ease-in ${
              isDark
                ? "text-white hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-100"
            }`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Right: Desktop Nav */}
        <div
          className={`right hidden sm:flex text-base justify-end gap-2 font-heading ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {rightItems.map((item, index) => (
            <a
              key={`nav-${index}`}
              href={item === "Resume" ? resume : undefined}
              onClick={() => handleNavClick(item)}
              className={`textBox flex px-4 h-11 justify-center items-center rounded-lg transition-all ease-in-out duration-300 font-medium tracking-wide cursor-pointer ${
                isDark
                  ? "hover:text-shadow-neon-sm hover:bg-white/5"
                  : "hover:bg-gray-100"
              }`}
              download={item === "Resume" ? true : undefined}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className={`sm:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg transition-all duration-300 ${
            isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              isDark ? "bg-white" : "bg-gray-900"
            } ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 my-1 transition-all duration-300 ${
              isDark ? "bg-white" : "bg-gray-900"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              isDark ? "bg-white" : "bg-gray-900"
            } ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
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
          <div
            className={`w-[85%] backdrop-blur-sm rounded-b-lg shadow-lg border ${
              isDark
                ? "bg-black/90 border-white/10"
                : "bg-white/90 border-gray-200"
            }`}
          >
            {rightItems.map((item, index) => (
              <a
                key={`mobile-nav-${index}`}
                href={item === "Resume" ? resume : undefined}
                onClick={() => handleNavClick(item)}
                className={`flex px-6 py-4 font-heading font-medium tracking-wide transition-all duration-300 cursor-pointer border-b last:border-b-0 ${
                  isDark
                    ? "text-white hover:bg-white/10 border-white/5"
                    : "text-gray-900 hover:bg-gray-100 border-gray-100"
                }`}
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
