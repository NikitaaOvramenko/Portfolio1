import Face from "../iconsProj/me.jpg";
export default function About() {
  return (
    <div className="flex flex-col sm:flex-row h-[700px] w-full px-8 pt-8 pb-8 bg-black items-center shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 from-15% via-transparent via-40% to-transparent to-85%"></div>
      {/* left */}
      <div className="boxx left  w-full sm:w-1/2 flex justify-center items-center ">
        <div className="relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-gradient-to-br from-purple-400/20 to-yellow-400/20 p-1">
            <img
              className="w-full h-full object-cover rounded-full"
              src={Face}
              alt="Nikita Ovramenko"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-white/30 shadow-inner"></div>
        </div>
      </div>

      {/* right */}
      <div className="boxx right text-pretty   w-full sm:w-1/2 text-white text-lg sm:text-[1.4vw] font-medium md:text-[1.5vw]   hover:text-purple-400  hover:text-extrabold duration-300">
        <p className="pt-5">
          {" "}
          <span className=" text-3xl sm:text-[4vw] md:text-[4vw] 2xl:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Nikita Ovramenko
          </span>
        </p>
        <p>
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
