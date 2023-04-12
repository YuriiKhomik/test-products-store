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
    <Box p="20px">
      <StyledButton type="button" onClick={toggleModal}>
        Add product
      </StyledButton>
      <ProductsList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <AddProductForm />
          <Box display="flex" justifyContent="end">
            <button type="button" onClick={toggleModal}>
              Cancel
            </button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
