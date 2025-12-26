import Face from "../iconsProj/me.jpg";

export default function About() {
  return (
    <div className="flex z-10 flex-col sm:flex-row h-[700px] w-[85%] px-8 pt-8 pb-8 bg-black bg-opacity-50  items-center relative overflow-hidden">
      {/* left */}
      <div className="boxx left w-full sm:w-1/2 flex justify-center items-center">
        <div className="relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-purple-500/20 p-1">
            <img
              className="w-full h-full object-cover rounded-full"
              src={Face}
              alt="Nikita Ovramenko"
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-white/10"></div>
        </div>
      </div>

      {/* right */}
      <div className="boxx right text-pretty w-full sm:w-1/2 text-white text-lg sm:text-[1.4vw] md:text-[1.5vw] font-body">
        <p className="pt-5">
          <span className="font-heading text-3xl leading-[4rem] sm:text-[4vw] md:text-[4vw] 2xl:text-7xl font-bold text-white neon-glow animate-fade-in-up">
            Nikita Ovramenko
          </span>
        </p>
        <p className="mt-4 leading-relaxed text-white/90 hover:text-white transition-colors duration-300">
          I'm a software developer experienced in full-stack web development,
          cloud deployments, and embedded systems. Skilled in Java, Python,
          C/C++, and TypeScript, I build responsive apps with React and scalable
          backends using Node.js/Express and ASP.NET with Semantic Kernel. I
          also work with Dockerized services, Supabase/PostgreSQL, and Raspberry
          Pi automation, focusing on delivering efficient, production-ready
          solutions.
        </p>
      </div>
    </div>
  );
}
