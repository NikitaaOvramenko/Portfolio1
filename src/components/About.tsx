import Face from "../iconsProj/face.png";
export default function About() {
  return (
    <div className=" flex flex-col sm:flex-row  h-full w-full px-5 pt-3 bg-black  border-4 border-black items-center ">
      {/* left */}
      <div className="boxx left w-1/2 flex justify-center items-center ">
        <img className="max-w-full h-auto  " src={Face} alt="" />
      </div>

      {/* right */}
      <div className="boxx right w-full sm:w-1/2 text-white text-[1.5vw]  sm:text-[1.5vw] font-medium md:text-[1.5vw] xl:text-2xl 2xl:text-3xl hover:text-yellow-200  hover:text-extrabold duration-300">
        <p className="pt-5 text-center">
          {" "}
          <span className=" text-[4vw] md:text-[4vw] 2xl:text-7xl font-bold text-white ">
            Nikita Ovramenko
          </span>
        </p>
        <p>
          I'm a versatile developer with expertise in web development,
          microcontroller programming, and system design. With a strong
          foundation in HTML, CSS, JavaScript, and React, I build user-friendly
          web applications while also working on projects like configuring
          Raspberry Pi servers, programming MC9S12C32 microcontrollers, and
          creating Telegram bots with MongoDB. My curiosity drives me to explore
          new technologies, solve complex problems, and deliver innovative
          solutions. Let's connect and create something exceptional!
        </p>
      </div>
    </div>
  );
}
