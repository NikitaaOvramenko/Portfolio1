import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Modal from "./Modal";
import "../cssComp/f.css";
import "../cssComp/scroll.css";
import {
  experiences,
  type Experience,
  type MediaItem,
} from "../data/experienceData";

export default function Experiences() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState<JSX.Element | null>(null);
  const [pics, setPics] = useState<MediaItem[]>([]);

  const buildModalBody = (exp: Experience) => {
    return (
      <div className="text-left space-y-4">
        {/* Header */}
        <div className="border-b border-slate-600 pb-4">
          <div className="text-xl font-bold text-white mb-2">
            {exp.role} @ {exp.company}
          </div>
          <div className="text-slate-300 text-sm">
            {exp.start} — {exp.end}
            {exp.location ? ` · ${exp.location}` : ""}
          </div>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Visit site →
            </a>
          )}
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <div className="text-lg font-semibold text-white border-l-4 border-blue-500 pl-3">
            Key Achievements
          </div>
          <ul className="space-y-2">
            {exp.bullets.map((b, i) => (
              <li key={`bullet-${i}`} className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-slate-200 text-sm leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        {exp.tech?.length > 0 && (
          <div className="space-y-3">
            <div className="text-lg font-semibold text-white border-l-4 border-blue-500 pl-3">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={`tech-${i}`}
                  className="px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600 text-slate-200 text-sm hover:bg-slate-600/50 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const toggle = (exp: Experience) => {
    setModal(!modal);
    setName(`${exp.role} — ${exp.company}`);
    setText(buildModalBody(exp));
    setPics(exp.gallery ?? []);
  };

  const closeM = () => setModal(!modal);

  const slideLeft = () => {
    const slider = document.getElementById("exp-slider");
    if (slider) slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("exp-slider");
    if (slider) slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div
        id="Experience"
        className="h-[600px] flex flex-col justify-center text-white relative bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100 shadow-xl overflow-hidden"
      >
        <Modal
          name={name}
          text={text}
          bool={modal}
          pics={pics}
          closeM={closeM}
        />

        <div className="projects flex items-center w-full h-full">
          <MdChevronLeft
            size={40}
            className="hover:scale-105 text-black ease-in-out active:scale-50 duration-300 relative z-10  hover:text-gray-300 cursor-pointer bg-none h-full flex items-center justify-center"
            onClick={slideLeft}
            aria-label="Scroll experiences left"
          />

          <div className="absolute text-2xl md:text-6xl  z-10 w-full flex justify-center items-center  text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-purple-400  to-black ">
            Experience
          </div>

          <div
            id="exp-slider"
            className="flex items-center w-full h-full overflow-x-scroll relative z-10 whitespace-nowrap scroll-smooth bg-none"
          >
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => toggle(exp)}
                className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] 2xl:w-[300px] 2xl:h-[300px] inline-flex flex-col inline-block text-center font-bold p-2 cursor-pointer hover:scale-105 text-xs sm:text-xl ease-in-out duration-300 text-wrap justify-center items-center shrink-0 bg-none rounded-lg  transition-all"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                <div className="text-balance">
                  {exp.role}
                  <div className="font-normal opacity-80 mt-1">
                    {exp.company}
                  </div>
                </div>

                <img
                  className="w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] 2xl:w-[160px] 2xl:h-[160px] pt-3"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <MdChevronRight
            size={40}
            className="hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-0 text-black hover:text-gray-300 cursor-pointer  opacity-100 h-full flex items-center justify-center"
            onClick={slideRight}
            aria-label="Scroll experiences right"
          />
        </div>
      </div>
    </>
  );
}
