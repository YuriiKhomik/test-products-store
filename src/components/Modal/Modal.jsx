import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalBackDrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <ModalBackDrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackDrop>,
    modalRoot
  );
};
