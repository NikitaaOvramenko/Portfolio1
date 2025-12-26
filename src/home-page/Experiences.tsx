import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Modal from "../components/Modal";
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
      <div className="text-left space-y-4 font-body">
        {/* Header */}
        <div className="border-b border-white/20 pb-4">
          <div className="text-xl font-bold text-white mb-2">
            {exp.role} @ {exp.company}
          </div>
          <div className="text-white/60 text-sm">
            {exp.start} — {exp.end}
            {exp.location ? ` · ${exp.location}` : ""}
          </div>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-purple-400 hover:text-purple-300 underline transition-colors"
            >
              Visit site →
            </a>
          )}
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <div className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">
            Key Achievements
          </div>
          <ul className="space-y-2">
            {exp.bullets.map((b, i) => (
              <li key={`bullet-${i}`} className="flex items-start space-x-2">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-white/80 text-sm leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        {exp.tech?.length > 0 && (
          <div className="space-y-3">
            <div className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={`tech-${i}`}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/20 text-white/80 text-sm hover:bg-white/10 transition-colors"
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
        className="h-[700px] flex flex-col justify-center text-white relative bg-black bg-opacity-50 shadow-xl overflow-hidden"
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
            className="hover:scale-105 text-white/50 ease-in-out active:scale-50 duration-300 relative z-10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer bg-none h-full flex items-center justify-center"
            onClick={slideLeft}
            aria-label="Scroll experiences left"
          />

          <div className="absolute text-3xl sm:text-4xl md:text-6xl z-10 w-full flex justify-center items-center font-heading font-bold text-white neon-glow animate-fade-in-up">
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
                className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] 2xl:w-[300px] 2xl:h-[300px] inline-flex flex-col text-center font-bold p-2 cursor-pointer hover:scale-105 text-sm sm:text-xl ease-in-out duration-300 text-wrap justify-center items-center shrink-0 bg-none rounded-lg transition-all text-white hover:text-shadow-neon-sm"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                <div className="text-balance font-heading">
                  {exp.role}
                  <div className="font-body font-normal text-white/70 mt-1">
                    {exp.company}
                  </div>
                </div>

                <img
                  className="w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] 2xl:w-[160px] 2xl:h-[160px] pt-3 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <MdChevronRight
            size={40}
            className="hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-0 text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer opacity-100 h-full flex items-center justify-center"
            onClick={slideRight}
            aria-label="Scroll experiences right"
          />
        </div>
      </div>
    </>
  );
}
