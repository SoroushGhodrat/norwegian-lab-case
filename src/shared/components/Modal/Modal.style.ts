import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 500px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 768px) {
    width: 300px;

    img {
      width: 150px;
      height: 150px;
    }
  }
`;

const CloseButton = styled.button`
  text-transform: uppercase;

  width: 10rem;
  padding: 0.5rem 1rem;
  margin-bottom: 10px;
  border-radius: 0.25rem;
  border: none;
  background-color: #3c639d;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #b4c5e4;
  }
`;

export { CloseButton, ModalContainer, ModalOverlay };
