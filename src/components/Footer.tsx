import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.tsx";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`w-full py-8 px-6 border-t ${
        isDark ? "bg-black border-white/10" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p
          className={`text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}
        >
          © {new Date().getFullYear()} Nikita Ovramenko. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/NikitaaOvramenko"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              isDark
                ? "text-white/60 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/nikitaovramenko"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              isDark
                ? "text-white/60 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:nikita.ovramenko@torontomu.ca"
            className={`transition-colors duration-200 ${
              isDark
                ? "text-white/60 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className={`text-sm transition-colors duration-200 flex items-center gap-1 ${
            isDark
              ? "text-white/60 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
