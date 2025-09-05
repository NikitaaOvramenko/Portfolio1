import git from "../icons/github.png";
import inst from "../icons/instagram.png";
import gmail from "../icons/gmail.png";
import resume from "../pdfs/Nikita's Resume1.pdf";

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
      <div className="navbox flex flex-auto w-full h-16 bg-black p-1 shadow-lg">
        <div className="left flex flex-auto w-5">
          {icons.map((icon, index) => (
            <a
              key={`icon-${index}`}
              className="picBox flex mx-1 w-10 justify-center items-center hover:bg-purple-600/20 rounded-lg transition-all duration-300"
              target="_blank"
              rel="noreferrer"
              href={links[index]}
            >
              <div>
                <img
                  src={icon}
                  alt={`Social media icon ${index + 1}`}
                  className="w-8 h-8 active:scale-50 duration-300"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="right flex flex-auto w-28 text-white text-xs sm:text-base justify-between">
          {rightItems.map((item, index) => (
            <a
              key={`nav-${index}`}
              className="textBox flex flex-auto w-4 justify-center items-center hover:bg-purple-600 hover:text-white rounded-lg scale-105 transition-all ease-in-out duration-300 font-medium"
              href={linksRight[index]}
              download={index === 0 ? true : undefined}
            >
              <div>
                <div>{item}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
