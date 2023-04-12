import { useEffect } from "react";
import { ModalBackDrop, ModalContent } from "./Modal.styled";

export const Modal = ({ onClose, children }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    // console.log("click on backdrop");
    // console.log("currentTarget", e.currentTarget);
    // console.log("target", e.target);
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <ModalBackDrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackDrop>
  );
};
