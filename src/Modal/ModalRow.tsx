import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";
import { Row } from "../types";

export const ModalRow: React.FC<Row> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
