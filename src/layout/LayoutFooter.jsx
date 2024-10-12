import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const FooterList = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export default function LayoutFooter() {
  return (
    <Footer>
      <FooterList>&copy; 2024 Minbyeonghyun Web.</FooterList>
    </Footer>
  );
};

