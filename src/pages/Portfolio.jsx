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
  width: 1000px;
`;

const IconBox = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

const PortfolioWrap = styled.h1`
  font-weight: 700;
  font-size: 40px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 400px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ced4da;
`;

const ExplainWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 600px;
  border-radius: 25px;
  gap: 15px;
  border: 1px solid #ced4da;
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
  width: 800px;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  line-height: 40px;
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
`;
const FooterBox = styled.div`
  height: 100%;
  border-radius: 0 0 25px 25px;
  transition: background-color 0.3s;
`;

const StackItem = styled.div`
  display: flex;
  align-items: center;
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
  margin: 30px 0 0 70px;
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
`;
const ProjectImg = styled.img`
  width: 100%;
  height: 55%;
  object-fit: fill;
  border-radius: 25px 25px 0 0;
  border-bottom: 1px solid #ced4da;
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
  width: 100%;
  padding: 10px 5px 6px;
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
  display: flex;
`;

const CertificationsBox = styled.div`
  display: flex;
  line-height: 40px;
  width: 100%;
  padding: 20px;
  font-size: 18px;
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
        안녕하세요! 저는 새로운 도전을 즐기고, 열정적으로 행동하는 개발자입니다.{" "}
        <br />
        사람들과의 소통을 소중히 여기며, 이를 통해 성장해왔습니다. <br />
        웹 개발에 관심이 생긴 후 프론트엔드 부트캠프에 참여하여 매일 꾸준히
        미팅을 통해 <br /> 협업과 커뮤니케이션 능력을 키웠습니다.
        <br />
        프로젝트 진행 중에는 문제 해결을 위한 협업에 적극 참여하며 팀워크의
        중요성을 체감했고, <br />
        이를 통해 실력과 팀 내 역할에 대한 자신감을 얻게 되었습니다.
        <br />
        다양한 도전과 경험을 통해 여러 기술 스택을 쌓아 최고의 UI/UX를 제공할 수
        있는
        <br /> 프론트엔드 개발자로 성장하고자 합니다.
        <br /> 앞으로도 끊임없이 배우고, 팀과 함께 발전해 나가겠습니다.
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
            <StackList>AWS</StackList>
            <StackList>Vercel</StackList>
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
                <ProjectDate>2024년 6월 24일 ~ 2024년 7월 27일 </ProjectDate>
                <ListBox>
                  <ListName>React</ListName>
                  <ListName>Typescript</ListName>
                  <ListName>Socket.io</ListName>
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
