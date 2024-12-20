import { data } from "../data/projectsData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../cssComp/scroll.css";
import Naming from "./Naming";

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
      <div className="flex flex-col justify-between border-b-4 border-black">
        <Naming name="Projects"></Naming>
        <div className="projects relative flex items-center w-full h-96">
          <MdChevronLeft
            size={40}
            className="hover:scale-105 ease-in-out active:scale-50 duration-300"
            onClick={slideLeft}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
          >
            {data.map((item) => (
              <div className="w-[300px] h-[300px] inline-flex flex-col inline-block text-center p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 text-2xl text-wrap justify-items-center items-center">
                {item.name}
                <img className="w-[160px] h=[160px] pt-3 " src={item.img}></img>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="hover:scale-105 ease-in-out active:scale-50 duration-300"
            size={40}
            onClick={sliderRight}
          />
        </div>
      </div>
    </>
  );
}