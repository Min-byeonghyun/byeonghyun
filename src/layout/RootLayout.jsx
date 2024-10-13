import React, { useState, useEffect } from 'react';
import LayoutHeader from './LayoutHeader';
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

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.7s;

  &:hover {
    opacity: 1;
  }

 
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export default function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.scrollY  > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <LayoutHeader />
      <MainContent>
        <Outlet />
      </MainContent>
      <LayoutFooter />
      
     
      {isVisible && <ScrollButton onClick={scrollToTop}>↑</ScrollButton>}
    </>
  );
}