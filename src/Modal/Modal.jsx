/* APPLICATION */
import "./Modal.css";

export const Modal = ({ clearState, active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        clearState && clearState();
        setActive(false);
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
