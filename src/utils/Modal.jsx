import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // React Router 사용

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1000px;
  max-height: 80%;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 95%;
    padding: 20px;
  }
`;

const CloseButton = styled.button`
  margin-top: 30px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #ff4d4d;

  &:hover {
    color: #d00000;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      navigate(".", { replace: false });

      const handlePopState = () => {
        onClose();
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isOpen, navigate, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleBackgroundClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
