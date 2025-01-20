import git from "../icons/github.png";
import inst from "../icons/instagram.png";
import gmail from "../icons/gmail.png";
import resume from "../pdfs/Nikita_s_Resume_ext_.pdf";

export default function NavBar() {
  const rightItems = ["Resume", "Projects", "Skills", "Contacts"];
  const links = [
    "https://github.com/NikitaaOvramenko",
    "https://www.instagram.com/ovramenkonikita/",
    "mailto:nikita.ovramenko@torontomu.ca",
  ];

  const linksRight = [resume, "#Projects", "#Skills", "#Contacts"];
  const icons = [git, inst, gmail];
  return (
    <>
      <div className="navbox flex flex-auto w-full h-16 bg-black p-1 ">
        <div className="left flex flex-auto w-5">
          {icons.map((icon, index) => (
            <>
              <a
                className="picBox flex mx-1 w-10 justify-center items-center"
                target="_blank"
                href={links[index]}
              >
                <div>
                  <img
                    src={icon}
                    className="w-8 h-8 active:scale-50 duration-300"
                  ></img>
                </div>
              </a>
            </>
          ))}
        </div>
        <div className="right flex flex-auto w-28 text-white text-xs sm:text-base justify-between">
          {rightItems.map((item, index) => (
            <>
              <a
                className="textBox flex flex-auto w-4 justify-center items-center hover:bg-white hover:text-black scale-105 transition-colors ease-in-out duration-300"
                href={linksRight[index]}
                download
              >
                <div>
                  <div>{item}</div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
