interface ModalProps {
  name: string;
  text: JSX.Element | null;
  bool: boolean;
  pics: string[];
  closeM: () => void;
  //   pics: string[];
}

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
        } duration-300  flex ease-in-out overflow-scroll scroll  flex-col border border-white modal w-4/5 h-5/6 bg-black rounded left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2  `}
      >
        <div className="  w-full flex h-full items-center  overflow-x-scroll snap-x overflow-y-hidden scroll shrink-0  ">
          {props.pics.map((pic) => (
            <img
              className="  w-full h-auto scale-60 snap-center scale-[0.65]  duration-300 shrink-0"
              key={pic}
              src={pic}
              alt="Image"
            />
          ))}
        </div>

        {props.text}
      </div>
    </div>
  );
}
