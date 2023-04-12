import { useState } from "react";
import { ProductsList } from "components/ProductsList";
import { StyledButton } from "components/Buttons";
import { Modal } from "components/Modal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ padding: "20px" }}>
      <StyledButton type="button" onClick={toggleModal}>
        Add product
      </StyledButton>
      <ProductsList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi
            corrupti veniam id, consectetur expedita exercitationem illum quis
            deleniti dolorum distinctio quasi. Corrupti quisquam, vitae officia
            quibusdam sint ad debitis mollitia. Expedita hic iste, repellendus
            est officiis adipisci sequi enim?
          </p>
        </Modal>
      )}
    </div>
  );
};
