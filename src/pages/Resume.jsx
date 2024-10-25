import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "./Project";
import BlogIcon from "../icons/BlogIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import GithubIcon from "../icons/GithubIcon";
import CakeIcon from "../icons/CakeIcon";
import AcademicIcon from "../icons/AcademicIcon";
import HomeIcon from "../icons/HomeIcon";

const IconBox = styled.div`
  width: 30px;
  height: 35px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 30px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const ResumeWrap = styled.h1`
  font-weight: 700;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ced4da;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ExplainBox = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  line-height: 50px;

  @media (max-width: 768px) {
    width: 100%;
    line-height: 40px;
    align-items: center;
  }
`;

const ProfileExplain = styled.h2`
  font-size: 32px;
  color: #4fd66e;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ExplainList = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    transition: color 0.3s;
    color: black;
    &:hover {
      color: #4fd66e;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  width: 100%;
  color: #4fd66e;
  font-weight: bold;
  padding: 20px;
  border-bottom: 1px solid black;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 10px;
  }
`;

const Description = styled.span`
  display: flex;
  line-height: 40px;
  width: 100%;
  padding: 20px;
  font-size: 18px;

  @media (max-width: 768px) {
    line-height: 30px;
    font-size: 16px;
  }
`;

const DevDescription = styled.div`
  width: 1000px;
  padding: 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ced4da;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    font-size: 16px;
  }
`;

const LeftDev = styled.div`
  width: 350px;

  line-height: 30px;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightDev = styled.div`
  width: 780px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ListWrap = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const List = styled.li`
  font-size: 16px;
  line-height: 40px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

const SkillsCategory = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #4fd66e;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SkillList = styled.ul`
  list-style-type: disc;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 18px;
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

const CertificationsBox = styled.div`
  display: flex;
  line-height: 40px;
  width: 100%;
  padding: 20px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
    line-height: 30px;
  }
`;

export default function Resume() {
  return (
    <Wrap>
      <ResumeWrap>민병현 | 이력서 </ResumeWrap>
      <ProfileBox>
        <ProfileImg src="/img/resume.jpg" />
        <ExplainBox>
          <ProfileExplain>Contact</ProfileExplain>
          <ExplainList>
            <IconBox>
              <CakeIcon />
            </IconBox>{" "}
            1999.01.25
          </ExplainList>
          <ExplainList>
            <IconBox>
              <HomeIcon />
            </IconBox>{" "}
            서울특별시 중랑구
          </ExplainList>
          <ExplainList>
            <IconBox>
              <EmailIcon />
            </IconBox>{" "}
            qudgus5125@naver.com
          </ExplainList>
          <ExplainList>
            <IconBox>
              <PhoneIcon />
            </IconBox>{" "}
            010-4230-5125
          </ExplainList>
          <ExplainList>
            <IconBox>
              <AcademicIcon />
            </IconBox>{" "}
            경복대학교 (IT보안과)
          </ExplainList>
          <ProfileExplain>Channel</ProfileExplain>
          <ExplainList>
            <IconBox>
              <BlogIcon />
            </IconBox>
            <Link
              to="https://velog.io/@min9999/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
          </ExplainList>
          <ExplainList>
            <IconBox>
              <GithubIcon />
            </IconBox>
            <Link
              to="https://github.com/Min-byeonghyun"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </ExplainList>
        </ExplainBox>
      </ProfileBox>
      <TitleBox>
        <Title>Introduce</Title>
        <Description>
        IT 보안 전공 후 우연히 웹 개발에 매료되어 독학을 시작했습니다. <br/>
    이후 부트캠프에서 HTML, CSS, JavaScript, React, TypeScript를 체계적으로 학습하며, 
    직접 웹 페이지를 설계하고 구현하는 과정에서 큰 흥미를 느꼈습니다.
    <br />
    개인 프로젝트와 팀 프로젝트를 통해 Firebase를 활용한 백엔드 기능 구축 경험과 
    협업의 중요성을 깨달았습니다. Discord와 Slack을 통해 팀원들과의 원활한 소통을 
    이어가며 문제를 해결해 나가는 과정에서 자신감을 얻었습니다.
    <br />
    앞으로도 사용자 경험을 개선하는 프론트엔드 개발자로 성장하기 위해 
    꾸준히 학습하고 도전해 나갈 것입니다.
    <br />
        </Description>
      </TitleBox>
      <TitleBox>
        <Title>Projects</Title>
        <Project />
      </TitleBox>
      <TitleBox>
        <Title>Skills</Title>
        <SkillsWrapper>
          <SkillsCategory>
            <SkillsTitle>Languages</SkillsTitle>
            <SkillList>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>TypeScript</SkillItem>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
            </SkillList>
          </SkillsCategory>

          <SkillsCategory>
            <SkillsTitle>Frameworks & Libraries</SkillsTitle>
            <SkillList>
              <SkillItem>React</SkillItem>
              <SkillItem>SCSS</SkillItem>
              <SkillItem>styled-components</SkillItem>
              <SkillItem>react-router</SkillItem>
            </SkillList>
          </SkillsCategory>
          <SkillsCategory>
            <SkillsTitle>Tools & Others</SkillsTitle>
            <SkillList>
              <SkillItem>Git</SkillItem>
              <SkillItem>GitHub</SkillItem>
              <SkillItem>Axios</SkillItem>
              <SkillItem>Firebase</SkillItem>
              <SkillItem>AWS</SkillItem>
            </SkillList>
          </SkillsCategory>
        </SkillsWrapper>
      </TitleBox>
      <TitleBox>
        <Title>Dev Experience</Title>
        <DevDescription>
          <LeftDev>
            제로베이스 부트캠프
            <br />
            2024-01 ~ 2024-08
          </LeftDev>
          <RightDev>
            <ListWrap>
              <List>
                자바스크립트 및 타입스크립트의 핵심 개념을 학습하고, 이를 다양한
                프로젝트에 적용
              </List>
              <List>
                React의 훅과 주요 라이브러리를 익히고, 개인 및 팀 프로젝트를
                통해 실무 감각을 배양
              </List>
              <List>HTML과 CSS를 활용한 웹 개발의 기초부터 심화까지 학습</List>
              <List>
                웹 표준, 웹 접근성, 웹 호환성의 중요성을 이해하고 구현
              </List>
              <List>
                팀 협업을 통해 원활한 소통과 문제 해결 능력을 향상시킴
              </List>
            </ListWrap>
          </RightDev>
        </DevDescription>
        <DevDescription>
          <LeftDev>
            코딩애플 온라인 강의 수강
            <br />
            2024-03 ~ 2024-05
          </LeftDev>
          <RightDev>
            <ListWrap>
              <List>
                협업 시 필수적인 Git과 GitHub 사용법을 익혀, 효율적인 버전
                관리와 팀 작업을 경험{" "}
              </List>
              <List>
                React의 기초부터 실무에 필요한 TypeScript를 활용하여 더 안전한
                코드 작성법을 학습
              </List>
              <List>
                개인 프로젝트에서 Firebase를 활용해 백엔드 없이 손쉽게
                데이터베이스와 인증 시스템을 구현
              </List>
            </ListWrap>
          </RightDev>
        </DevDescription>
      </TitleBox>
      <TitleBox>
        <Title>Certifications</Title>
        <CertificationsBox>컴퓨터 활용능력 1급 (2023.06.09) </CertificationsBox>
      </TitleBox>
    </Wrap>
  );
}
