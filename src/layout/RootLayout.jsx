import React from 'react';
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainContent = styled.main`
  flex-grow: 1;
  width : 100%;
  margin-top : 30px;
  min-height: calc(100vh - 240px);
  display: flex; 
  justify-content: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    margin-top: 10px;
  }
`;


export default function RootLayout () {
  return (
    <>
      <LayoutHeader />
      <MainContent>
        <Outlet /> 
      </MainContent>
      <LayoutFooter />
    </>
  );
};
