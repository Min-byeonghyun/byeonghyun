import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width : 100%;
  height : 150px;
  display : flex;
  justify-content : center;
  align-items : center;

`
const FooterList = styled.div`
  font-size : 18px;
`


export default function LayoutFooter() {
  return (
    <Footer>
      <FooterList>&copy; 2024 byeonghyun Web.</FooterList>
    </Footer>
  );
};

