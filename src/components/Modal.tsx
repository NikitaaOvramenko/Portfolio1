import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

interface ModalProps {
  name: string;
  text: JSX.Element | null;
  bool: boolean;
  pics: MediaItem[];
  closeM: () => void;
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && props.bool) {
        props.closeM();
      }
    };

    if (props.bool) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [props.bool, props.closeM]);

  return (
    <div
      onClick={props.closeM}
      className={`fixed transition ${
        props.bool
          ? `bg-opacity-90 backdrop-blur-sm`
          : `bg-opacity-0 pointer-events-none`
      } duration-300 ease-in-out left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full h-full bg-black`}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={`fixed ${
          props.bool ? `opacity-100 scale-100` : `opacity-0 scale-50`
        } duration-300 ease-in-out flex flex-col border border-white/20 modal w-[95vw] max-w-7xl h-[95vh] bg-black rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-2xl shadow-white/5 overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20 bg-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
          <h2 className="text-xl font-bold font-heading text-white neon-glow relative z-10">
            {props.name}
          </h2>
          <button
            onClick={props.closeM}
            className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-200 text-2xl font-bold relative z-10"
          >
            ×
          </button>
        </div>

        {/* Content Area - Scrollable with Flexible Carousel */}
        <div className="flex-1 overflow-y-auto font-body">
          {/* Media Section */}
          <div className="flex items-center justify-center p-4">
            {props.pics && props.pics.length > 0 ? (
              <>
                <MdChevronLeft
                  size={40}
                  className="hover:scale-105 shrink-0 self-center ease-in-out active:scale-50 duration-300 relative bg-black border border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] rounded-lg cursor-pointer"
                  onClick={slideLeft}
                />

                <div>
                  <div
                    id="slider2"
                    className="w-full flex items-center overflow-x-scroll scroll-smooth snap-x overflow-y-hidden scroll shrink-0"
                  >
                    {props.pics.map((media, index) => (
                      <div
                        key={`modal-media-${index}`}
                        className="w-full h-auto scale-60 snap-center scale-[0.6] duration-300 shrink-0 flex items-center justify-center"
                      >
                        {media.type === "image" ? (
                          <img
                            className="max-w-full max-h-[60vh] object-contain rounded-lg"
                            src={media.src}
                            alt={media.alt || `Project image ${index + 1}`}
                          />
                        ) : (
                          <video
                            className="max-w-full max-h-[60vh] rounded-lg"
                            src={media.src}
                            controls
                            muted
                            loop
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <MdChevronRight
                  className="hover:scale-105 shrink-0 self-center ease-in-out bg-black border border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] active:scale-50 duration-300 relative rounded-lg cursor-pointer"
                  size={40}
                  onClick={sliderRight}
                />
              </>
            ) : (
              <p className="text-white/50">No images available</p>
            )}
          </div>

          {/* Media Indicators */}
          {props.pics && props.pics.length > 1 && (
            <div className="flex justify-center space-x-2 p-4 border-t border-white/10 bg-black relative">
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
              {props.pics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const slider = document.getElementById("slider2");
                    if (slider) {
                      slider.scrollLeft = index * slider.clientWidth;
                    }
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 relative z-10 ${
                    index === currentIndex
                      ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Text Content Section */}
          {props.text && (
            <div className="border-t border-white/10 bg-black p-6 relative">
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
              <div className="text-white relative z-10">{props.text}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
