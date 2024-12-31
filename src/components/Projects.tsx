import { data } from "../data/projectsData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../cssComp/f.css";
import "../cssComp/scroll.css";

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
      <div className=" main flex  flex-col justify-between border-b-4 border-black">
        <div className="projects relative flex items-center w-full h-full ">
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
              <div className=" w-[150px] h-[150px]  sm:w-[300px] sm:h-[300px] 2xl:w-[600px] 2xl:h-[600px] inline-flex flex-col inline-block text-center font-bold p-2 cursor-pointer hover:scale-105 sm:text-2xl 2xl:text-4xl ease-in-out duration-300  text-wrap justify-center items-center">
                <div>{item.name}</div>

                <img
                  className="  w-[100px] h-[100px]  sm:w-[160px] sm:h-[160px] 2xl:w-[320px] 2xl:h-[320px] pt-3 "
                  src={item.img}
                ></img>
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
