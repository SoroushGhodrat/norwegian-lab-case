import { CloseButton, ModalContainer, ModalOverlay } from "./Modal.style";

import SuccessfilImg from "../../../assets/successful.png";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  return (
    <ModalOverlay onClick={props.onClose}>
      <ModalContainer>
        <img src={SuccessfilImg} alt="successfil" />
        {props.children}
        <CloseButton onClick={props.onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
