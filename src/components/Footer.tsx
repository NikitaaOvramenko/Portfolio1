import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Nikita Ovramenko. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
