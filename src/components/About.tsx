import Face from "../iconsProj/face.png";
import "../cssComp/f.css";
export default function About() {
  return (
    <div className="test flex flex-wrap h-full w-full px-5 pt-4  border-4 border-black">
      <div className="boxx left flex-auto md:w-1/2 w-full ">
        <img className="w-full h-full  object-cover" src={Face} alt="" />
      </div>
      <div className="boxx right flex-auto md:w-1/2 w-full text-justify leading-relaxed  text-gray-800  font-medium md:text-xl xl:text-2xl 2xl:text-3xl hover:text-green-700  hover:text-extrabold duration-300">
        <p className="pt-5 text-center">
          {" "}
          <span className=" text-3xl md:text-5xl 2xl:text-7xl font-bold text-gray-800 ">
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
