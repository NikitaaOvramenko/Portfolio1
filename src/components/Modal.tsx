import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface ModalProps {
  name: string;
  text: JSX.Element | null;
  bool: boolean;
  pics: string[];
  closeM: () => void;
  //   pics: string[];
}

const slideLeft = () => {
  var slider = document.getElementById("slider2");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft - 1000;
  }
};

const sliderRight = () => {
  var slider = document.getElementById("slider2");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft + 1000;
  }
};

export default function Modal(props: ModalProps) {
  return (
    <div
      onClick={props.closeM}
      className={`fixed  transition ${
        props.bool ? `bg-opacity-80 ` : `bg-opacity-0 pointer-events-none`
      } duration-300  ease-in-out left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 z-30 w-full h-full fixed bg-black`}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={` fixed  ${
          props.bool ? `opacity-100 scale-100 ` : `opacity-0 scale-50`
        } duration-300  flex ease-in-out overflow-y-scroll overflow-x-hidden scroll-y flex-col border border-white modal w-4/5 h-5/6 bg-black rounded left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2  `}
      >
        <div className="flex items-center justify-center">
          {props.pics && props.pics.length > 0 ? (
            <>
              <MdChevronLeft
                size={40}
                className="hover:scale-105 shrink-0 self-center ease-in-out active:scale-50 duration-300 relative bg-black text-white"
                onClick={slideLeft}
              />

              <div>
                <div
                  id="slider2"
                  className="w-full h-[400px] flex items-center overflow-x-scroll scroll-smooth snap-x overflow-y-hidden scroll shrink-0"
                >
                  {props.pics.map((pic) => (
                    <img
                      className="w-full h-auto scale-60 snap-center scale-[0.6] duration-300 shrink-0"
                      key={pic}
                      src={pic}
                      alt="Image"
                    />
                  ))}
                </div>
              </div>

              <MdChevronRight
                className="hover:scale-105 shrink-0 self-center ease-in-out bg-black text-white active:scale-50 duration-300 relative"
                size={40}
                onClick={sliderRight}
              />
            </>
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>

        {props.text}
      </div>
    </div>
  );
}
