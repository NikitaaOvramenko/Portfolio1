import { data } from "../data/projectsData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../cssComp/f.css";
import "../cssComp/scroll.css";
import Modal from "./Modal";

export default function Projects() {
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
        className="  h-[250px] sm:h-[300px] 2xl:h-[600px]  flex  flex-col justify-center border-b-4 border-black relative "
      >
        <div className="projects  flex items-center  w-full h-full ">
          <MdChevronLeft
            size={40}
            className="hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-10"
            onClick={slideLeft}
          />
          <div className="absolute text-black text-2xl md:text-6xl font-bold z-0 w-full flex justify-center items-center">
            {/* Projects */}
          </div>

          <div
            id="slider"
            className=" flex   items-center  w-full h-full overflow-x-scroll  relative z-10 scroll whitespace-nowrap scroll-smooth "
          >
            {data.map((item) => (
              <button className=" w-[150px] h-[150px]  sm:w-[250px] sm:h-[250px] 2xl:w-[300px] 2xl:h-[300px] inline-flex flex-col inline-block text-center font-bold p-2 cursor-pointer hover:scale-105 text-xs sm:text-xl  ease-in-out duration-300  text-wrap justify-center items-center shrink-0">
                <div>{item.name}</div>

                <img
                  className="  w-[100px] h-[100px]  sm:w-[180px] sm:h-[180px] 2xl:w-[160px] 2xl:h-[160px] pt-3 "
                  src={item.img}
                ></img>
              </button>
            ))}
          </div>
          <MdChevronRight
            className="hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-10"
            size={40}
            onClick={sliderRight}
          />
        </div>
      </div>
    </>
  );
}
