import { useState } from "react";
import { ProductsList } from "components/ProductsList";
import { StyledButton } from "components/Buttons";
import { Modal } from "components/Modal";
import { AddProductForm } from "components/AddProductForm";
import { Box } from "components/Box";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box p="20px" position="relative">
      <StyledButton type="button" onClick={toggleModal}>
        Add product
      </StyledButton>
      <ProductsList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <AddProductForm />
          <Box
            display="inlineBlock"
            position="absolute"
            bottom="12px"
            right="12px"
          >
            <button type="button" onClick={toggleModal}>
              Cancel
            </button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
