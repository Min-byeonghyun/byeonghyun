import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../utils/Modal";
import Fantion from "./Fantion";
import PetTalk from "./PetTalk";
import BlogIcon from "../icons/BlogIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import GithubIcon from "../icons/GithubIcon";
import CakeIcon from "../icons/CakeIcon";
import AcademicIcon from "../icons/AcademicIcon";
import HomeIcon from "../icons/HomeIcon";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconBox = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

const PortfolioWrap = styled.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 40px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const ExplainWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 600px;
  border-radius: 25px;
  gap: 15px;
  border: 1px solid #ced4da;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ExplainBox = styled.div`
  display: flex;
  align-items: center;
`;

const ExplainTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  margin-right: 10px;
`;

const StackTitle = styled.span`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const ExplainList = styled.span`
  font-size: 20px;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: #4fd66e;
    }
  }
`;
const Bubble = styled.div`
  position: relative;
  display: inline-block;
  background: #f9f9f9;
  border: 1px solid #ced4da;
  border-radius: 15px;
  padding: 10px 15px;
  margin-top: 10px;
  width: 100%;
  max-width: 800px;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    line-height: 30px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 100%;
  left: -10px;
  margin-left: -5px;

  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #4fd66e transparent;
  transform: rotate(-45deg);
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
  border-bottom: 1px solid #ced4da;
  font-size: 24px;
`;
const StackBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ced4da;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;
const FooterBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 25px 25px;
  transition: background-color 0.3s;
`;

const StackItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StackList = styled.span`
  font-size: 15px;
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  margin-left: 15px;
  background: rgba(135, 131, 120, 0.15);
  line-height: normal;
  color: #6940a5;
  border-radius: 3px;
  padding: 0.2em 0.4em;
`;

const ProjectWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
`;
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 450px;
  border: 1px solid #ced4da;
  border-radius: 25px;
  transition: all 0.3s;

  &:hover ${FooterBox} {
    background-color: rgba(135, 131, 120, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const ProjectImg = styled.img`
  width: 100%;
  height: 55%;
  object-fit: fill;
  border-radius: 25px 25px 0 0;
  border-bottom: 1px solid #ced4da;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ProjectName = styled.div`
  width: 100%;
  padding: 10px 12px 6px;
`;
const ProjectDate = styled.div`
  width: 100%;
  padding: 10px 12px 6px;
`;
const ListBox = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 5px 6px;
  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 480px) {
    width: 100%;
    overflow: hidden;
  }
`;
const ListName = styled.span`
  font-size: 13px;
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  background: rgba(83, 82, 77, 0.15);
  line-height: normal;
  color: ${(props) => (props.color ? props.color : "#6940a5")};
  border-radius: 3px;
  padding: 0.2em 0.4em;
  margin-left: 5px;
`;
const ListLink = styled.div`
  width: 100px;
  border-radius: 25px;
  font-size: 14px;
  padding: 10px 12px 6px;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(94, 92, 87, 0.1);
  }
`;
const ListLabel = styled.span`
  font-size: 13px;
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  color: rgb(93, 23, 21);
  background: rgb(255, 232, 231);
  line-height: normal;
  border-radius: 3px;
  padding: 0.2em 0.4em;
  margin-left: 5px;
`;
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 50%;
    flex-direction: column;
    align-items: center;
  }
`;

const CertificationsBox = styled.div`
  display: flex;
  line-height: 40px;
  width: 100%;
  padding: 20px;
  font-size: 18px;
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
    font-size: 16px;
    width: 100%;
  }
`;
const LeftDev = styled.div`
  width: 350px;
  font-weight: bold;
  line-height: 30px;

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
  font-size: 18px;
  line-height: 40px;
`;
export default function Portfolio() {
  const [isFantionModalOpen, setIsFantionModalOpen] = useState(false);
  const [isPetTalkModalOpen, setIsPetTalkModalOpen] = useState(false);

  const handleFantionClick = () => {
    setIsFantionModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handlePetTalkClick = () => {
    setIsPetTalkModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFantionModal = () => {
    setIsFantionModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const closePetTalkModal = () => {
    setIsPetTalkModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <Wrap>
      <PortfolioWrap>민병현 | 포트폴리오</PortfolioWrap>
      <ProfileBox>
        <ProfileImg src="/img/byeonghyun.jpg" />
        <ExplainWrap>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <CakeIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList> 1999.01.25</ExplainList>
          </ExplainBox>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <HomeIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList> 서울특별시 중랑구</ExplainList>
          </ExplainBox>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <EmailIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList> qudgus5125@naver.com</ExplainList>
          </ExplainBox>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <PhoneIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList> 010-4230-5125</ExplainList>
          </ExplainBox>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <AcademicIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList> 경복대학교 (IT보안과)</ExplainList>
          </ExplainBox>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <GithubIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList>
              <Link
                to="https://github.com/Min-byeonghyun"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                github.com/Min-byeonghyun
              </Link>
            </ExplainList>
          </ExplainBox>
          <ExplainBox>
            <ExplainTitle>
              <IconBox>
                <BlogIcon />
              </IconBox>
            </ExplainTitle>
            <ExplainList>
              <Link
                to="https://velog.io/@min9999/posts"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                velog.io/@min9999/posts
              </Link>
            </ExplainList>
          </ExplainBox>
        </ExplainWrap>
      </ProfileBox>
      <Bubble>
        <Arrow />
        사용자가 직관적으로 이용할 수 있는, 생각한 대로 원활하게 작동하는
        서비스를 만드는 것을 목표로 합니다.
        <br />
        서비스는 혼자가 아닌 함께 만들어가는 것이라고 믿습니다.
        <br />
        적극적인 소통과 협업을 통해 가치 있는 결과를 함께 이루어낼 수 있다고
        생각합니다.. <br />
        UX뿐만아니라 같이 일하는 팀원들의 DX를 고려하여 코드를 설계하기 위해
        노력합니다.
        <br />
      </Bubble>
      <TitleBox>
        <Title>기술스택</Title>
        <StackBox>
          <StackItem>
            <StackTitle>Language</StackTitle>
            <StackList>HTML</StackList>
            <StackList>CSS</StackList>
            <StackList>Javascript</StackList>
            <StackList>Typescript</StackList>
          </StackItem>
          <StackItem>
            <StackTitle>Framework & Library</StackTitle>
            <StackList>React</StackList>
            <StackList>Next.js</StackList>
            <StackList>SCSS</StackList>
            <StackList>Styled-components</StackList>
            <StackList>React-router</StackList>
          </StackItem>
          <StackItem>
            <StackTitle>Tools & Others</StackTitle>
            <StackList>Git</StackList>
            <StackList>GitHub</StackList>
            <StackList>Axios</StackList>
            <StackList>Firebase</StackList>
            <StackList>Vercel</StackList>
          </StackItem>
          <StackItem>
            <StackTitle>Database</StackTitle>
            <StackList>MongoDB</StackList>
          </StackItem>
        </StackBox>
      </TitleBox>
      <TitleBox>
        <Title>프로젝트</Title>
        <FlexBox>
          <ProjectWrap>
            <ProjectBox onClick={handleFantionClick}>
              <ProjectImg src="/img/mainLogo2.png" />
              <FooterBox>
                <ProjectName>FAN-TION (팬덤 경매 플랫폼)</ProjectName>
                <ProjectDate>2024년 6월 24일 ~ 2024년 8월 16일 </ProjectDate>
                <ListBox>
                  <ListName>Javascript</ListName>
                  <ListName>React</ListName>
                  <ListName>Typescript</ListName>
                  <ListName>axios</ListName>
                </ListBox>
                <ListLink>
                  <Link>fantion.com</Link>
                </ListLink>
                <ListLink>
                  <Link>github.com</Link>
                </ListLink>
                <ListBox>
                  <ListLabel>팀프로젝트</ListLabel>
                </ListBox>
              </FooterBox>
            </ProjectBox>
          </ProjectWrap>
          <ProjectWrap>
            <ProjectBox onClick={handlePetTalkClick}>
              <ProjectImg src="/img/pettalk.png" />
              <FooterBox>
                <ProjectName>PetTalk (애견 커뮤니티 플랫폼)</ProjectName>
                <ProjectDate>2024년 5월 20일 ~ 2024년 6월 15일 </ProjectDate>
                <ListBox>
                  <ListName>React</ListName>
                  <ListName>Javascript</ListName>
                  <ListName>Firebase</ListName>
                </ListBox>
                <ListLink>
                  <Link>petTalk.com</Link>
                </ListLink>
                <ListLink>
                  <Link>github.com</Link>
                </ListLink>
                <ListBox>
                  <ListLabel>개인프로젝트</ListLabel>
                </ListBox>
              </FooterBox>
            </ProjectBox>
          </ProjectWrap>
        </FlexBox>
        <TitleBox>
          <Title>교육</Title>
        </TitleBox>
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
        <TitleBox>
          <Title>Certifications</Title>
          <CertificationsBox>
            컴퓨터 활용능력 1급 (2023.06.09){" "}
          </CertificationsBox>
        </TitleBox>
      </TitleBox>
      <Modal isOpen={isFantionModalOpen} onClose={closeFantionModal}>
        <Fantion />
      </Modal>

      <Modal isOpen={isPetTalkModalOpen} onClose={closePetTalkModal}>
        <PetTalk />
      </Modal>
    </Wrap>
  );
}
