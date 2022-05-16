/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";
import { ModalProps } from "../types";

export const Modal: React.FC<ModalProps> = ({
  isActive = false,
  setIsActive,
  clearState,
  active,
  setActive,
  children,
}) => {
  const dropdownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isActive && typeof setIsActive !== "undefined") {
      setIsActive(false);
    }
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={(e) => {
        clearState && clearState();
        dropdownHandler(e);
        setActive(false);
      }}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
          dropdownHandler(e);
        }}
      >
        {children}
      </div>
    </div>
  );
};
