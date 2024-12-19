import git from "../icons/github.png";
import inst from "../icons/instagram.png";
import gmail from "../icons/gmail.png";

export default function NavBar() {
  const rightItems = ["Contacts", "About", "Projects", "Skills"];
  const links = [
    "https://github.com/NikitaaOvramenko",
    "https://www.instagram.com/ovramenkonikita/",
    "mailto:nikita.ovramenko@torontomu.ca",
  ];
  const icons = [git, inst, gmail];
  return (
    <>
      <div className="navbox flex flex-auto w-full h-16 bg-black p-1 ">
        <div className="left flex flex-auto w-5">
          {icons.map((icon, index) => (
            <>
              <div className="picBox flex mx-1 w-10 justify-center items-center">
                <a target="_blank" href={links[index]}>
                  <img
                    src={icon}
                    className="w-8 h-8 active:scale-50 duration-300"
                  ></img>
                </a>
              </div>
            </>
          ))}
        </div>
        <div className="right flex flex-auto w-28 text-white justify-between">
          {rightItems.map((item) => (
            <>
              <div className="textBox flex flex-auto w-4 justify-center items-center hover:bg-white hover:text-black scale-105 transition-colors ease-in-out duration-300">
                <div>{item}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
