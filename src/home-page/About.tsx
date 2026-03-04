import Face from "../iconsProj/me2.png";
import { useTheme } from "../context/ThemeContext.tsx";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`flex z-10 flex-col sm:flex-row h-[600px] md:h-dvh w-[85%] px-8 pt-8 pb-8 bg-opacity-50 items-center relative  ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* left */}
      <div className="boxx left h-full w-full sm:w-1/2 flex justify-center items-center">
        <div className="relative">
          <div
            className={`w-[clamp(11rem,25vw,30rem)] h-[clamp(11rem,25vw,30rem)] rounded-full overflow-hidden border-2 shadow-2xl shadow-purple-500/20 p-1 ${
              isDark ? "border-white/20" : "border-gray-300"
            }`}
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src={Face}
              alt="Nikita Ovramenko"
            />
          </div>
          <div
            className={`absolute inset-0 rounded-full border ${
              isDark ? "border-white/10" : "border-gray-200"
            }`}
          ></div>
        </div>
      </div>

      {/* right */}
      <div
        className={`boxx right text-pretty w-full sm:w-1/2  font-body ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        <p className="pt-5">
          <span
            className={`font-heading  leading-[2.5rem] md:leading-[4rem] text-3xl sm:text-[4vw] md:text-[4vw] 2xl:text-7xl font-bold animate-fade-in-up ${
              isDark ? "text-white neon-glow" : "text-gray-900"
            }`}
          >
            Nikita Ovramenko
          </span>
        </p>
        <p
          className={`mt-4 leading-relaxed  text-[clamp(0.85rem,1.5vw,6rem)] transition-colors duration-300 ${
            isDark
              ? "text-white/90 hover:text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          I'm a software developer experienced in full-stack web development,
          cloud-based systems, and embedded projects. I use Java, Python, C/C++,
          and TypeScript to build responsive apps, scalable backend services,
          and automation-focused solutions. My experience includes React,
          Node.js, Express, ASP.NET, Spring Boot, PostgreSQL, Docker, Supabase,
          and Raspberry Pi projects, with a strong focus on building reliable
          software that works in real-world use.
        </p>
      </div>
    </div>
  );
}
