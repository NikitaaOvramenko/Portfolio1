import Face from "../iconsProj/face.png";
import "../cssComp/f.css";
export default function About() {
  return (
    <div className="test flex h-full w-full px-5 pt-4  border-4 border-black">
      <div className="boxx left flex-auto w-1/2  h-96">
        <img
          className="w-auto h-auto max-w-full max-h-full object-cover"
          src={Face}
          alt=""
        />
      </div>
      <div className="boxx right flex-auto w-1/2  text-justify leading-relaxed  text-gray-800  font-medium text-xl hover:text-green-700  hover:text-extrabold duration-300">
        <p className="pt-5">
          {" "}
          <span className="text-5xl font-bold text-gray-800">
            Nikita Ovramenko
          </span>
          ,
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
