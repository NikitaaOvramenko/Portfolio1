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
      } duration-300 ease-in-out left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 z-30 w-full h-full fixed bg-black`}
    >
      <div
        className={` fixed  ${
          props.bool ? `opacity-100 scale-100 ` : `opacity-0 scale-50`
        } duration-300 flex ease-in-out flex-col border border-white modal w-4/5 h-5/6 bg-black rounded left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 border-2  `}
      >
        <div className="flex justify-evenly ">
          {props.pics.map((pic) => (
            <img
              className="w-full h-auto  hover:scale-150 duration-300"
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
