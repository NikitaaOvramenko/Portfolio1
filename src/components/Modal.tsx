interface ModalProps {
  name: string;
  text: string;
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
        props.bool ? `bg-opacity-79 ` : `bg-opacity-0 pointer-events-none`
      } duration-300 ease-in-out left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 z-30 w-full h-full fixed bg-black`}
    >
      <div
        className={` fixed  ${
          props.bool ? `opacity-100 ` : `opacity-0`
        } duration-300 flex ease-in-out flex-col border border-black modal w-3/5 h-3/5 bg-white rounded left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 border-4 `}
      >
        <div>{props.name}</div>
        <div>{props.text}</div>

        {/* <div>{props.pics}</div> */}
      </div>
    </div>
  );
}
