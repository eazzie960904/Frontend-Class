import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button``;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const CloseButton = styled.button``;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={openModal}>모달버튼</Button>
      <Modal isOpen={isModalOpen} onClick={closeModal}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <h2>이것이 모달이다</h2>
        <p>이것이 모달내용이다!</p>
      </Modal>
    </>
  );
};

export default App;
