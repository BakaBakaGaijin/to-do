import { Text } from "../types";

export const ModalText: React.FC<Text> = ({ text }) => {
  return <p className="modal__content-text">{text}</p>;
};
