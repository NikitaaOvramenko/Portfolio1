import { data } from "../data/projectsData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../cssComp/f.css";
import "../cssComp/scroll.css";
import Modal, { type MediaItem } from "./Modal";
import { useState } from "react";

export default function Projects() {
  const [modal, setModal] = useState(false);
  const [name, SetName] = useState("");
  const [text, SetText] = useState<JSX.Element | null>(null);

  const [pic, SetPic] = useState<MediaItem[]>([]);

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
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <>
      <div
        id="Projects"
        className="h-[600px] flex flex-col justify-center text-white relative bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100 overflow-hidden"
      >
        <Modal
          name={name}
          text={text}
          bool={modal}
          pics={pic}
          closeM={closeM}
        ></Modal>
        <div className="projects  flex items-center  w-full h-full ">
          <MdChevronLeft
            size={40}
            className="hover:scale-105 text-black ease-in-out active:scale-50 duration-300 relative z-10  hover:text-gray-300 cursor-pointer bg-none h-full flex items-center justify-center"
            onClick={slideLeft}
          />

          <div className="absolute text-2xl md:text-6xl  z-10 w-full flex justify-center items-center  text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-purple-400  to-black ">
            Projects
          </div>
          <div
            id="slider"
            className=" flex   items-center   w-full h-full overflow-x-scroll  relative z-10 scroll whitespace-nowrap scroll-smooth bg-none"
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
                    className=" w-[150px] h-[150px]  sm:w-[250px] sm:h-[250px] 2xl:w-[300px] 2xl:h-[300px] inline-flex flex-col inline-block text-center font-bold p-2 cursor-pointer hover:scale-105 text-xs sm:text-xl  ease-in-out duration-300  text-wrap justify-center items-center shrink-0 bg-none rounded-lg  transition-all"
                  >
                    <div>{item.name}</div>
                    {/* <Modal name={item.name} text={item.text}></Modal> */}

                    <img
                      className="  w-[100px] h-[100px]  sm:w-[180px] sm:h-[180px] 2xl:w-[160px] 2xl:h-[160px] pt-3 "
                      src={item.img}
                      alt={item.name}
                    />
                    {/* <img
                  className="w-[40px] h-[50px]  sm:w-[80px] sm:h-[90px] 2xl:w-[70px] 2xl:h-[80px] pt-3 shrink-0"
                  src={item.status}
                ></img> */}
                  </button>
                )
              )}
          </div>
          <MdChevronRight
            className="hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-0 text-black hover:text-gray-300 cursor-pointer  opacity-100 h-full flex items-center justify-center"
            size={40}
            onClick={sliderRight}
          />
        </div>
      </div>
    </>
  );
}
