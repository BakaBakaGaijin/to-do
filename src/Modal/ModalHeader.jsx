import close from "../icons/close.svg";

export const ModalHeader = ({ clearState, title, setActive }) => {
  return (
    <header className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button
        className="modal__content-header__btn"
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
