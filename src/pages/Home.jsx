import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;

  @media (max-width: 768px) {
    padding: 30px;
    align-items: center;
  }
`;

const MyName = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const MyName2 = styled.h2`
  font-size: 38px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MyImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ced4da;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ExplainBox = styled.div`
  margin-top: 50px;
  width: 900px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Explain = styled.p`
  font-size: 20px;
  line-height: 2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  margin-top: 30px;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Box = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  a {
    text-decoration: none;
  }
`;

const ResumeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const PortfolioBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ResumeImg = styled.img`
  width: 400px;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const PortfolioImg = styled.img`
  width: 400px;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const ResumeTitle = styled.div`
  font-size: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PortfolioTitle = styled.div`
  font-size: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <ImgBox>
        <MyImg src="/img/byeonghyun.jpg" />
        <NameBox>
          <MyName>민병현</MyName>
          <MyName2>Frontend Developer.</MyName2>
        </NameBox>
      </ImgBox>
      <ExplainBox>
        <Explain>
          안녕하세요 프론트엔드 개발자 민병현입니다.
          <br />
          새로운 것을 배우고 도전하는 것을 좋아합니다. <br />
          관심이 생기면 곧바로 실천에 옮기며, 이러한 열정이 웹 개발에 대한
          관심으로 이어졌습니다.
          <br />
          다양한 도전과 경험을 통해 여러 기술 스택을 쌓아 <br /> 최고의 UI/UX를
          제공할 수 있는 프론트엔드 개발자로 성장하고 싶습니다.
        </Explain>
      </ExplainBox>
      <MainBox>
        <BoxTitle>Read Me</BoxTitle>
        <Box>
          <Link to="/resume">
            <ResumeBox>
              <ResumeImg src="img/resume.gif" />
              <ResumeTitle>이력서를 보려면 Resume을 클릭해주세요.</ResumeTitle>
            </ResumeBox>
          </Link>
          <Link to="/portfolio">
            <PortfolioBox>
              <PortfolioImg src="img/portfolio.gif" />
              <PortfolioTitle>
                포트폴리오를 보려면 Portfolio를 클릭해주세요.
              </PortfolioTitle>
            </PortfolioBox>
          </Link>
        </Box>
      </MainBox>
    </Wrapper>
  );
};

export default Home;
