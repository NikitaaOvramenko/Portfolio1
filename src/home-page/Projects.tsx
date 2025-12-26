import { data } from "../data/projectsData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../cssComp/f.css";
import "../cssComp/scroll.css";
import Modal, { type MediaItem } from "../components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [modal, setModal] = useState(false);
  const [name, SetName] = useState("");
  const [text, SetText] = useState<JSX.Element | null>(null);

  const [pic, SetPic] = useState<MediaItem[]>([]);

  const [data, setData] = useState([]);
  const SPREADSHEET_ID = "1Daj905cL8JVyYoS7aedW1K0YXrKjXyVtn-EF5cxW7zg";
  const RANGE = "Sheet1!A2:Z100";
  const API_KEY = "your_api_key";

  useEffect(() => {
    const url = `sheets.googleapis.com${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data.values);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggle = (name: string, text: JSX.Element | null, pics: string[]) => {
    setModal(!modal);
    SetName(name);
    SetText(text);
    SetPic(
      pics.map((pic) => ({ type: "image" as const, src: pic, alt: name }))
    );
  };

  const closeM = () => {
    setModal(!modal);
  };

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <>
      <div
        id="Projects"
        className="h-[700px] flex flex-col justify-center text-white relative bg-black bg-opacity-50 w-[85%] overflow-hidden"
      >
        <Modal
          name={name}
          text={text}
          bool={modal}
          pics={pic}
          closeM={closeM}
        ></Modal>
        <div className="projects flex items-center w-full h-full">
          <MdChevronLeft
            size={40}
            className="hover:scale-105 text-white/50 ease-in-out active:scale-50 duration-300 relative z-10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer bg-none h-full flex items-center justify-center"
            onClick={slideLeft}
          />

          <div className="absolute text-3xl sm:text-4xl md:text-6xl z-10 w-full flex justify-center items-center font-heading font-bold text-white neon-glow animate-fade-in-up">
            Projects
          </div>
          <div
            id="slider"
            className="flex items-center w-full h-full overflow-x-scroll relative z-10 scroll whitespace-nowrap scroll-smooth bg-none"
          >
            {data
              .slice()
              .reverse()
              .map(
                (item: {
                  id: number;
                  name: string;
                  img: string;
                  text: JSX.Element;
                  img2: string[];
                  status: string;
                }) => (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.name, item.text, item.img2)}
                    id={String(item.id)}
                    className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] 2xl:w-[300px] 2xl:h-[300px] inline-flex flex-col text-center font-bold p-2 cursor-pointer hover:scale-105 text-sm sm:text-xl ease-in-out duration-300 text-wrap justify-center items-center shrink-0 bg-none rounded-lg transition-all text-white font-heading hover:text-shadow-neon-sm"
                  >
                    <div>{item.name}</div>

                    <img
                      className="w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] 2xl:w-[160px] 2xl:h-[160px] pt-3 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                      src={item.img}
                      alt={item.name}
                    />
                  </button>
                )
              )}
          </div>
          <MdChevronRight
            className="hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-0 text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer opacity-100 h-full flex items-center justify-center"
            size={40}
            onClick={sliderRight}
          />
        </div>
      </div>
    </>
  );
}
