/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import down from "../icons/down.svg";
import { selectAllCategories } from "../features/categoriesSlice";
import { Dropdown } from "../types";

export const ModalDropdown: React.FC<Dropdown> = ({
  selected,
  setSelected,
  isActive,
  setIsActive,
}) => {
  const options = useSelector(selectAllCategories);
  console.log("selected: ", selected);
  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
      <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder"}>
        <p className="dropdown-btn__text">
          {options.find((option) => option.id === selected)?.name ||
            "Выберите категорию"}
        </p>
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className={
                selected && selected === option.id
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
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
