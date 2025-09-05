import bank from "../iconsProj/bank.png";
import cpu from "../iconsProj/cpu.png";
import amp from "../iconsProj/noise.png";
import sketch from "../iconsProj/police.png";
import calculator from "../iconsProj/calculator.png";
import port from "../iconsProj/resume.png";
import chat from "../iconsProj/comments.png";

// images

//status
import done from "../icons/accept.png";
import ongoing from "../icons/circular.png";

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

//Sketch
import sk1 from "../projectPics/Etch-Sketch/sk1.png";
import sk2 from "../projectPics/Etch-Sketch/sk2.png";
import sk3 from "../projectPics/Etch-Sketch/sk3.png";

//calc
import calc1 from "../projectPics/Calculator/calc1.png";
import calc2 from "../projectPics/Calculator/calc2.png";

//cpu
import cp1 from "../projectPics/CPU/cpu1.png";
import cp2 from "../projectPics/CPU/cpu2.png";
import cp3 from "../projectPics/CPU/cpu3.png";
import cp4 from "../projectPics/CPU/cpu4.png";
import cp5 from "../projectPics/CPU/cpu5.png";

//Amplifier
import amp1 from "../projectPics/Amplifier/amp1.png";
import amp2 from "../projectPics/Amplifier/amp2.png";
import amp3 from "../projectPics/Amplifier/amp3.png";
import amp4 from "../projectPics/Amplifier/amp4.png";
import amp5 from "../projectPics/Amplifier/amp5.png";

//Chat
import chat1 from "../projectPics/ChatApp/chatPic.png";

export const template1 = (
  bool: boolean,
  status: string,
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
      className="p-2 flex-col bg-slate-800 project "
    >
      <h1 className="project-title"></h1>

      <section className="text-end text-white">
        Status: {status}
        {bool ? "✅" : "✨"}
      </section>

      <section className="project-description">
        <h2 className="font-bold text-yellow-200">Description:</h2>
        <p className="text-white">{description}</p>
      </section>

      <section className="project-facts">
        <h2 className="font-bold text-yellow-200">Facts:</h2>
        <ul>
          {facts.map((fact, index) => (
            <li key={`fact-${index}`} className="text-white">
              <strong>*</strong> {fact}
            </li>
          ))}
        </ul>
      </section>

      <section className="project-tech-stack">
        <h2 className="font-bold text-yellow-200">
          Languages/Frameworks/Libraries/Software:
        </h2>
        <ul className="text-white">
          <li>
            <strong>Languages:</strong>{" "}
            {lang.map((l, index) => (
              <span key={`lang-${index}`}>{l},</span>
            ))}
          </li>
          <li>
            <strong>Frameworks:</strong>{" "}
            {fr.map((l, index) => (
              <span key={`fr-${index}`}>{l},</span>
            ))}
          </li>
          <li>
            <strong>Libraries:</strong>{" "}
            {lib.map((l, index) => (
              <span key={`lib-${index}`}>{l},</span>
            ))}
          </li>
          <li>
            <strong>Software:</strong>{" "}
            {soft.map((l, index) => (
              <span key={`soft-${index}`}>{l},</span>
            ))}
          </li>
        </ul>
      </section>
    </section>
  );
};

export const data = [
  {
    id: 6,
    name: "Calculator",
    img: calculator,
    text: template1(
      true,
      "done",
      "The Calculator is a simple, browser-based application designed to perform basic arithmetic operations...",
      [
        "Users can perform real-time calculations directly in the browser.",
        "The calculator features buttons for digits, basic arithmetic operators, and a clear/reset option.",
        "The result updates dynamically as users input numbers and operations.",
        "Built with responsive design principles to ensure usability across different devices and screen sizes.",
        "Implements DOM manipulation to handle user interactions and display real-time results.",
      ],
      ["JavaScript", "HTML", "CSS"],
      ["None"],
      ["None"],
      ["VS Code"]
    ),
    img2: [calc1, calc2],
    status: done,
  },
  {
    id: 5,
    name: "Etch-a-Sketch",
    img: sketch,
    text: template1(
      true,
      "done",
      "The Etch-a-Sketch (one of my first web dev projects!) is a browser-based drawing application inspired by the classic toy...",
      [
        "Users can draw by hovering over a grid, simulating the experience of an Etch-a-Sketch.",
        "The grid size is adjustable, allowing for varying levels of detail in drawings.",
        "A reset button clears the canvas, enabling users to start over easily.",
        "Designed with responsive features, making it accessible across different screen sizes.",
        "The application utilizes DOM manipulation to dynamically generate and update the grid in real time.",
      ],
      ["JavaScript", "HTML", "CSS"],
      ["None"],
      ["None"],
      ["VS Code"]
    ),
    img2: [sk1, sk2, sk3],
    status: done,
  },
  {
    id: 4,
    name: "BJT Amplifier Design",
    img: amp,
    text: template1(
      true,
      "done",
      "This project focuses on designing and analyzing a 3-stage BJT amplifier (CE-CE-CC configuration)...",
      [
        "3-stage configuration includes two CE amplifiers for gain and one CC amplifier for buffering.",
        "Designed for high gain, minimal distortion, and optimized frequency response.",
        "Uses shunt capacitors for emitter degeneration and coupling capacitors as high-pass filters.",
        "Manual calculations determined optimal biasing points and component values.",
        "Simulation verified performance metrics with minor limitations on output swing.",
      ],
      ["None"],
      ["None"],
      ["None"],
      ["Multisim"]
    ),
    img2: [amp1, amp2, amp3, amp4, amp5],
    status: done,
  },
  {
    id: 3,
    name: "Simple CPU Design",
    img: cpu,
    text: template1(
      true,
      "done",
      "This project focuses on designing and implementing a simplified general-purpose processor...",
      [
        "Uses gated D latch registers with reset and clock.",
        "Positive-edge triggered Moore FSM cycles through states.",
        "4:16 decoder translates FSM outputs.",
        "ALU performs arithmetic and logical operations.",
        "Circuit verified via simulation waveforms and truth tables.",
      ],
      ["Verilog/VHDL", "Assembly-like microcode"],
      ["None"],
      ["None"],
      ["Quartus"]
    ),
    img2: [cp1, cp2, cp3, cp4, cp5],
    status: done,
  },
  {
    id: 2,
    name: "Small Bank App",
    img: bank,
    text: template1(
      true,
      "done",
      "The BankApp is a Java-based application designed to simulate basic banking functionalities...",
      [
        "Role-based access for customers (withdraw, deposit, purchase) and managers (manage accounts).",
        "State pattern manages customer ranks: Silver, Gold, Platinum.",
        "Use case diagram outlines interactions between customers and managers.",
        "Class diagram shows abstract User class with Customer and Manager.",
        "Login system supports secure credential verification and redirects by role.",
      ],
      ["Java"],
      ["JavaFX"],
      ["Scene Builder"],
      ["NetBeans"]
    ),
    img2: [bank1, bank2, bank3, bank4, bank5],
    status: done,
  },
  {
    id: 1,
    name: "Portfolio",
    img: port,
    text: template1(
      true,
      "done",
      "This portfolio project is a dynamic and interactive platform designed to showcase personal projects...",
      [
        "Projects in a scrollable carousel with detailed modals.",
        "Responsive design optimized for all devices.",
        "Interactive hover effects and clickable project tiles.",
        "Minimal modern UI/UX.",
        "Physics integration using Matter.js for interactive visuals.",
      ],
      ["TypeScript", "HTML", "CSS"],
      ["Tailwind CSS"],
      ["React", "React Icons", "Matter.js"],
      ["VS Code", "Git", "Linux"]
    ),
    img2: [port1, port2, port3],
    status: done,
  },
  {
    id: 0,
    name: "Chat Application",
    img: chat,
    text: template1(
      false,
      "ongoing",
      "The Chat Application is a real-time messaging platform...",
      [
        "Real-time messaging in multiple channels.",
        "Custom server built using Java Sockets.",
        "State Design Pattern for server states.",
        "JavaFX client for smooth UI.",
        "Containerized in Docker for portability.",
        "Authentication and encryption for security.",
      ],
      ["Java", "JavaFX"],
      ["Docker"],
      ["Java Sockets", "State Design Pattern"],
      ["IntelliJ", "Git", "Linux", "Raspberry Pi 4"]
    ),
    img2: [chat1],
    status: ongoing,
  },
];
