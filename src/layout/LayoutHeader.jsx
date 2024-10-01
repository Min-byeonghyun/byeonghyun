import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e8e9ec;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
   
  }
`;
const Nav = styled.nav`
  width: 100%;
  
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 0 15px;
  font-size: 20px;
  position: relative;

  a {
    text-decoration: none;
    transition: color 0.3s;
    color: black;

    &:hover {
      color: #4fd66e;
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #4fd66e;
      position: absolute;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

export default function LayoutHeader() {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/resume">Resume</Link>
          </NavItem>
          <NavItem>
            <Link to="/portfolio">Portfolio</Link>
          </NavItem>
          <NavItem>
            <a
              href="https://github.com/Min-byeonghyun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://velog.io/@min9999/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Velog
            </a>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
