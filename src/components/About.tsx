import Face from "../iconsProj/face.png";
export default function About() {
  return (
    <div className=" flex flex-col sm:flex-row  h-full w-full px-5 pt-3 bg-black  border-b-2 border-white items-center ">
      {/* left */}
      <div className="boxx left  w-full sm:w-1/2 flex justify-center items-center ">
        <img className="max-w-full h-auto  " src={Face} alt="" />
      </div>

      {/* right */}
      <div className="boxx right text-pretty   w-full sm:w-1/2 text-white text-[3vw]  sm:text-[1.4vw] font-medium md:text-[1.5vw]   hover:text-yellow-200  hover:text-extrabold duration-300">
        <p className="pt-5">
          {" "}
          <span className=" text-[4vw] md:text-[4vw] 2xl:text-7xl font-bold text-white ">
            Nikita Ovramenko
          </span>
        </p>
        <p>
          I'm a software developer with expertise in web development, embedded
          systems, and digital design. Proficient in Java, Python, and C/C++, I
          build interactive web applications using React and develop scalable
          backend solutions. My experience includes working with Raspberry Pi
          servers, designing chat applications, and creating Telegram bots with
          MongoDB. Passionate about problem-solving and system optimization, I
          strive to develop innovative and efficient solutions.
        </p>
      </div>
    </div>
  );
}
