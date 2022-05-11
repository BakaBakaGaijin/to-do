import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";
import { Row } from "../types";

export const ModalRow: React.FC<Row> = ({
  name,
  setName,
  selected,
  setSelected,
  isActive,
  setIsActive,
}) => {
  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown
        isActive={isActive}
        setIsActive={setIsActive}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
