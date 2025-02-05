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

const template1 = (
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
      className="    p-2 flex-col bg-black project "
    >
      <h1 className="project-title"></h1>

      <section className="text-end text-white">
        Status: {status}
        {bool ? "✅" : "✨"}
      </section>

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
  {
    id: 1,
    name: "Chat Application",
    img: chat,
    text: template1(
      false,
      "ongoing",
      "The Chat Application is a real-time messaging platform designed for seamless communication. It features a custom-built server using Java Sockets and a JavaFX-based client application. The application allows multiple users to join various channels and communicate efficiently. The server is optimized for scalability and maintainability using the State Design Pattern and is designed to run in a Docker container on a Raspberry Pi 4.",
      [
        "Real-Time Messaging: Enables users to send and receive messages instantly in different channels.",
        "Custom Server Implementation: Built from scratch using Java Sockets for efficient networking.",
        "State Management: Uses the State Design Pattern to handle different server states dynamically.",
        "Cross-Platform Client: Developed using JavaFX, ensuring smooth user interaction and accessibility.",
        "Containerized Deployment: Runs in a Docker container, making it scalable and portable.",
        "Secure Communication: Implements authentication and encryption techniques for data security.",
      ],
      ["Java", "JavaFX"],
      ["Docker"],
      ["Java Sockets", "State Design Pattern"],
      ["Intellij", "Git", "Linux", "Raspberry Pi 4"]
    ),
    img2: [chat1],

    status: ongoing,
  },

  {
    id: 1,
    name: "Portfolio",
    img: port,
    text: template1(
      true,
      " done",
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

    status: done,
  },
  {
    id: 2,
    name: "Small Bank App",
    img: bank,
    text: template1(
      true,
      "done",
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
    status: done,
  },

  {
    id: 3,
    name: "Simple CPU Design",
    img: cpu,
    text: template1(
      true,
      "done",
      "This project focuses on designing and implementing a simplified general-purpose processor. It integrates key components such as latches, a finite state machine (FSM), a 4:16 decoder, and an arithmetic logic unit (ALU). The processor demonstrates the coordination of these components to execute various operations, with modular and scalable architecture suitable for educational and experimental purposes.",
      [
        "Utilizes two gated D latch registers for binary inputs A and B, with reset and clock functionality for data storage.",
        "Implements a positive-edge triggered Moore finite state machine (FSM) that cycles through states based on input conditions.",
        "A 4:16 decoder translates FSM outputs into binary representations for further processing.",
        "ALU performs multiple arithmetic and logical operations, including addition, subtraction, shifting, and complementing, based on microcoded instructions.",
        "Supports state-based dynamic behavior, leveraging a modular design that includes components for rank transitions and additional functionalities.",
        "Circuit behavior verified through simulation waveforms and truth tables, ensuring accuracy across multiple configurations.",
      ],
      [
        "Verilog/VHDL (for circuit design)",
        "Assembly-like microcode for ALU operations.",
      ],
      ["None"],
      ["None"],
      ["Quartus"]
    ),
    img2: [cp1, cp2, cp3, cp4, cp5],
    status: done,
  },

  {
    id: 4,
    name: "BJT Amplifier Design",
    img: amp,
    text: template1(
      true,
      "done",
      "This project focuses on designing and analyzing a 3-stage BJT amplifier (CE-CE-CC configuration) to meet specific performance requirements. The amplifier is designed for applications requiring high gain, minimal distortion, and optimized frequency response. The circuit design ensures accurate biasing and employs components for efficient signal amplification and stability.",
      [
        "The 3-stage configuration includes two common-emitter (CE) amplifiers for gain and one common-collector (CC) amplifier for buffering and signal integrity.",
        "Designed to meet specifications such as quiescent current under 10mA, no-load voltage gain of approximately 50, and frequency response from 20 Hz to 50 kHz.",
        "Uses shunt capacitors to mitigate emitter degeneration and improve gain, while coupling capacitors act as high-pass filters to block DC components.",
        "Extensive manual calculations were performed to determine optimal biasing points, resistor, and capacitor values, ensuring compliance with design requirements.",
        "Testing through simulation verified performance metrics, with most specifications met except for output voltage swing due to potential biasing and Q-point decisions.",
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
    id: 5,
    name: "Etch-a-Sketch",
    img: sketch,
    text: (
      <div className="flex flex-col ">
        {template1(
          true,
          "done",
          "The Etch-a-Sketch(One of my first web dev projects!) is a browser-based drawing application inspired by the classic toy. It allows users to create pixel art through an interactive and intuitive grid interface. The application focuses on simplicity and functionality, providing users with customizable grid sizes and dynamic drawing features.",
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
        )}

        <h2 className="p-2 text-yellow-200">
          <strong>Demo:</strong>
        </h2>
        <iframe
          className="w-{75%} h-full shrink-0 self-center p-2 border border-white scale-75"
          src="https://nikitaaovramenko.github.io/Etch-a-Sketch/"
          name="targetframe"
          frameBorder={0}
          width={500}
          height={500}
          allowTransparency={true}
          scrolling="yes"
        ></iframe>
      </div>
    ),
    link: "",
    img2: [sk1, sk2, sk3],
    status: done,
  },

  {
    id: 6,
    name: "Calculator",
    img: calculator,
    text: (
      <div className="flex flex-col ">
        {template1(
          true,
          "done",
          "The Calculator is a simple, browser-based application designed to perform basic arithmetic operations. It provides a clean and intuitive interface, ensuring accessibility and ease of use. The calculator supports operations like addition, subtraction, multiplication, and division, along with a clear button to reset the calculations.",
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
        )}

        <h2 className="p-2 text-yellow-200">
          <strong>Demo:</strong>
        </h2>
        <iframe
          className="w-{75%} h-full shrink-0 self-center p-2 border border-white scale-75"
          src="https://nikitaaovramenko.github.io/Calculator/"
          name="targetframe"
          frameBorder={0}
          width={500}
          height={500}
          allowTransparency={true}
          scrolling="yes"
        ></iframe>
      </div>
    ),
    link: "",
    img2: [calc1, calc2],
    status: done,
  },
];
