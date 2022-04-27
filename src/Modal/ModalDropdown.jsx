/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import down from "../icons/down.svg";

export const ModalDropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false),
    options = useSelector((state) => state.categories);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
      <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {options.find((option) => option.id === selected)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {
                setSelected(option.id);
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
