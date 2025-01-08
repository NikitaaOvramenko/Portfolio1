import { useState } from "react";

interface ModalProps {
  name: string;
  text: string;
  pics: string[];
}

export default function Modal(props: ModalProps) {
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div className="modal ">
      <div>{props.name}</div>
      <div>{props.text}</div>
      <div>{props.pics}</div>
    </div>
  );
}
