import bank from "../iconsProj/bank.png";
import cpu from "../iconsProj/cpu.png";
import eyeS from "../iconsProj/eye-sensor.png";
import amp from "../iconsProj/noise.png";
import sketch from "../iconsProj/police.png";
import calculator from "../iconsProj/calculator.png";
import rock from "../iconsProj/fist.png";

// images

//portf

import port1 from "../projectPics/Portfolio/image.png";
import port2 from "../projectPics/Portfolio/port2.png";
import port3 from "../projectPics/Portfolio/port3.png";

//bank

import bank1 from "../projectPics/BankApp/Bank1.png";
import bank2 from "../projectPics/BankApp/Bank2.png";
import bank3 from "../projectPics/BankApp/Bank3.png";
import bank4 from "../projectPics/BankApp/Bank4.png";
import bank5 from "../projectPics/BankApp/Bank5.png";

const template1 = (
  description: string,
  facts: string[],
  lang: string[],
  fr: string[],
  lib: string[],
  soft: string[]
) => {
  return (
    <section
      id="project-template"
      className=" flex p-2 flex-col bg-black project overflow-scroll"
    >
      <h1 className="project-title"></h1>

      {/* <!-- Description Section --> */}
      <section className="project-description">
        <h2 className="font-bold text-yellow-200">Description:</h2>
        <p className="text-white">{description}</p>
      </section>

      {/* <!-- Facts Section --> */}
      <section className="project-facts">
        <h2 className="font-bold text-yellow-200">Facts:</h2>
        <ul>
          {facts.map((fact) => (
            <li className="text-white">
              <strong>*</strong> {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* <!-- Languages/Frameworks/Libraries/Software Section --> */}
      <section className="project-tech-stack">
        <h2 className="font-bold text-yellow-200">
          Languages/Frameworks/Libraries/Software:
        </h2>
        <ul className="text-white">
          <li>
            <strong>Languages:</strong>{" "}
            {lang.map((l) => (
              <span>{l},</span>
            ))}
          </li>
          <li>
            <strong>Frameworks:</strong>{" "}
            {fr.map((l) => (
              <span>{l},</span>
            ))}
          </li>
          <li>
            <strong>Libraries:</strong>{" "}
            {lib.map((l) => (
              <span>{l},</span>
            ))}
          </li>
          <li>
            <strong>Software:</strong>{" "}
            {soft.map((l) => (
              <span>{l},</span>
            ))}
          </li>
        </ul>
      </section>
    </section>
  );
};

export const data = [
  // {
  //   id: 1,
  //   name: "Home Server",
  //   img: eyeS,
  //   text: "1",
  //   img2: [""],
  // },

  {
    id: 1,
    name: "Portfolio",
    img: eyeS,
    text: template1(
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects, skills, and achievements. It features a visually appealing and responsive layout, providing an engaging user experience. The portfolio highlights key projects with detailed descriptions and images in an interactive carousel format, while also offering contact functionality through a form and integrated map. The portfolio is built using modern web technologies, demonstrating advanced React and TypeScript capabilities, with Tailwind CSS for styling and responsiveness.",
      [
        "Dynamic Project Display: Projects are showcased in a smooth, scrollable carousel with modals for detailed views.",
        "Responsive Design: Optimized for all devices, ensuring accessibility and usability on desktop, tablet, and mobile screens.",
        "Interactive Features: Hover effects, clickable project tiles, and a seamless modal system for project details.",
        "Modern UI/UX: Built with a clean and minimal design to prioritize content and usability.",
        "Physics Integration: Utilizes Matter.js to add physics-based interactions for enhanced visuals and animations.",
      ],
      ["TypeScript", "HTML", "CSS"],
      ["Tailwind CSS"],
      ["React", "React Icons", "Matter.js"],
      ["VS Code", "Git", "Linux"]
    ),
    img2: [port1, port2, port3],
  },
  {
    id: 2,
    name: "Small Bank App",
    img: bank,
    text: template1(
      "The BankApp is a Java-based application designed to simulate basic banking functionalities for both customers and managers. It provides a user-friendly interface built with JavaFX and Scene Builder, offering a visually appealing and intuitive experience. The app implements robust features for user management, account handling, and state-based actions, ensuring flexibility and scalability.",
      [
        "Role-based access allows customers to perform actions such as checking balance, withdrawing money, depositing money, and making purchases, while managers can add or remove customer accounts.",
        "State pattern implementation enables dynamic behavior based on customer rank, including Silver, Gold, and Platinum states.",
        "The use case diagram outlines interactions between customers and managers, including shared login/logout actions and role-specific operations.",
        "The class diagram showcases an abstract User class inherited by Customer and Manager, with the FXMLController acting as the link between login, customer, and manager pages.",
        "The login system supports secure credential verification and role-based redirection to the appropriate dashboard or page.",
        "The scalable design uses modular architecture to support future feature expansion and applies design patterns like State for customer rank transitions.",
      ],
      ["Java"],
      ["JavaFX"],
      ["Scene Builder"],
      ["NetBeans"]
    ),
    img2: [bank1, bank2, bank3, bank4, bank5],
  },

  {
    id: 3,
    name: "CPU Design",
    img: cpu,
    text: template1(
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects, skills, and achievements. It features a visually appealing and responsive layout, providing an engaging user experience. The portfolio highlights key projects with detailed descriptions and images in an interactive carousel format, while also offering contact functionality through a form and integrated map.",
      ["gay", "gay2"],
      ["JavaScript", "HTML", "CSS"],
      [],
      [],
      []
    ),
    img2: [""],
  },

  {
    id: 4,
    name: "BJT Amplifier Design",
    img: amp,
    text: template1(
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects, skills, and achievements. It features a visually appealing and responsive layout, providing an engaging user experience. The portfolio highlights key projects with detailed descriptions and images in an interactive carousel format, while also offering contact functionality through a form and integrated map.",
      ["gay", "gay2"],
      ["JavaScript", "HTML", "CSS"],
      [],
      [],
      []
    ),
    img2: [""],
  },

  {
    id: 5,
    name: "Etch-a-Sketch",
    img: sketch,
    text: template1(
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects, skills, and achievements. It features a visually appealing and responsive layout, providing an engaging user experience. The portfolio highlights key projects with detailed descriptions and images in an interactive carousel format, while also offering contact functionality through a form and integrated map.",
      ["gay", "gay2"],
      ["JavaScript", "HTML", "CSS"],
      [],
      [],
      []
    ),
    link: "",
    img2: [""],
  },

  {
    id: 6,
    name: "Calculator",
    img: calculator,
    text: template1(
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects, skills, and achievements. It features a visually appealing and responsive layout, providing an engaging user experience. The portfolio highlights key projects with detailed descriptions and images in an interactive carousel format, while also offering contact functionality through a form and integrated map.",
      ["gay", "gay2"],
      ["JavaScript", "HTML", "CSS"],
      [],
      [],
      []
    ),
    link: "",
    img2: [""],
  },

  {
    id: 7,
    name: "Paper-Rock-Scissors",
    img: rock,
    text: template1(
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects, skills, and achievements. It features a visually appealing and responsive layout, providing an engaging user experience. The portfolio highlights key projects with detailed descriptions and images in an interactive carousel format, while also offering contact functionality through a form and integrated map.",
      ["gay", "gay2"],
      ["JavaScript", "HTML", "CSS"],
      [],
      [],
      []
    ),
    link: "",
    img2: [""],
  },
];
