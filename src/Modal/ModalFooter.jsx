import { ModalBtn } from "./ModalBtn";

export const ModalFooter = ({
  clearState,
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <footer className="modal__content-footer">
      <ModalBtn type="primary" size={size || null} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        Закрыть
      </ModalBtn>
    </footer>
  );
};
