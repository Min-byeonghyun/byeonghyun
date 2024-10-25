import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
`;
const ModalImg = styled.img`
  width: 50%;
  height: 200px;
  object-fit: fill;
`;
const ModalBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-bottom: 1px solid #ced4da;
`;
const ModalTitle = styled.h1`
  font-size: 40px;
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ced4da;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ModalListBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
`;
const ModalLeft = styled.div`
  width: 200px;
  font-size: 20px;
  color: #ced4da;
  font-weight: bold;
`;
const ModalRight = styled.div`
  width: 100%;
  line-height: 25px;
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

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-bottom: 1px solid #ced4da;
`;
const InfoName = styled.h1`
  font-size: 24px;
`;

const BoxInfo = styled.ul`
  margin-top: 15px;
  font-size: 18px;
  line-height: 30px;
  list-style-type: disc;
  padding-left: 0;
`;
const InfoList = styled.li`
  font-size: 18px;
  line-height: 43px;
  font-weight: bold;
`;

const BoxSub = styled.p`
  font-size: 16px;
  font-weight: normal;
`;
const Team = styled.div`
  padding: 20px;
`;

const Collaboration = styled.div`
  line-height: 30px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 40px;
  padding-top: 20px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;
const LinkTitle = styled.div`
  font-size: 18px;
  line-height: 40px;
  a {
    transition: color 0.3s;
    color: black;
    &:hover {
      color: #4fd66e;
    }
  }
`;

export default function PetTalk() {
  return (
    <Wrap>
      <ImgBox>
        <ModalImg src="/img/pettalk.png" />
      </ImgBox>
      <ModalBox>
        <ModalTitle>PetTalk(애견 커뮤니티 플랫폼)</ModalTitle>
      </ModalBox>
      <TopBox>
        <ModalListBox>
          <ModalLeft>소개글</ModalLeft>
          <ModalRight>
            애견 커뮤니티 펫톡(PetTalk) 애견인들이 자신의 애견과 함께 하는
            일상을 공유하고
            <br />
            애견 관련 정보를 얻어갈 수 있는 종합 커뮤니티
          </ModalRight>
        </ModalListBox>
        <ModalListBox>
          <ModalLeft>진행 기간</ModalLeft>
          <ModalRight>2024년 4월 23일 ~ 2024년 5월 16일</ModalRight>
        </ModalListBox>
        <ModalListBox>
          <ModalLeft>Skills & Libraries</ModalLeft>
          <ModalRight>
            <StackList>Javascript</StackList>
            <StackList>React</StackList>
            <StackList>Styled-components</StackList>
            <StackList>Firebase</StackList>
            <StackList>CSS</StackList>
          </ModalRight>
        </ModalListBox>
      </TopBox>
      <ProjectInfo>
        <InfoName>구현 기능</InfoName>
        <BoxInfo>
          <InfoList>
            유저 관리 기능 :
            <BoxSub>
              - Firebase Authentication을 활용하여 회원가입, 로그인, 소셜 로그인
              ( 구글, 깃헙) 을 구현
            </BoxSub>
          </InfoList>
          <InfoList>
            애견 지도 개발 :
            <BoxSub>
              - kakao 맵 API를 활용해 내 위치를 검색창에 검색할 시 내 위치에서
              가까운 애견 공원 및 애견 샵 등을 지도에 표시하는 기능 구현{" "}
            </BoxSub>
          </InfoList>
          <InfoList>
            커뮤니티 기능 :
            <BoxSub>
              - Firebase Firestore를 사용해 커뮤니티 글과 댓글을 안전하게
              저장하고 실시간으로 관리
            </BoxSub>
            <BoxSub>
              - 커뮤니티 글에 대한 좋아요 기능, 댓글 수정 및 삭제 기능 구현{" "}
            </BoxSub>
            <BoxSub>- 커뮤니티 게시판 페이지네이션 기능 구현</BoxSub>
          </InfoList>
          <InfoList>마이페이지 :</InfoList>
          <BoxSub>
            - 사용자 닉네임 수정 , 내 게시글 조회 및 수정 삭제 기능 구현
          </BoxSub>
          <InfoList>
            배포 :
            <BoxSub>
              - Firebase Hosting을 사용하여 프로젝트를 배포하고, 사용자들이
              안정적으로 서비스를 이용할 수 있도록 설정.
            </BoxSub>
          </InfoList>
          <Team></Team>
        </BoxInfo>
      </ProjectInfo>
      <ProjectInfo>
        <InfoName> 첫 번째 Firebase 프로젝트: 배움과 성장의 과정</InfoName>
        <Collaboration>
          이 프로젝트는 처음으로 진행한 개인 프로젝트로, Firebase를 활용해ㅇ\
          보자는 목표에서 시작하였습니다.
          <br />
          Firebase를 처음 사용해보았기 때문에 결과물이 제가 생각했던 만큼
          완성되지 않았습니다.
          <br />
          하지만 이 과정에서 Firebase와 React에 대한 학습이 많이 이루어졌습니다.
          <br />
          개인 프로젝트를 진행하는 동안 부트캠프 팀원들과 매일 ZEP에서 회의를
          하며 서로 모르는 부분을 공유하고, 알게 된 점들을 나누는 소중한 경험을
          하였습니다. <br />
          이 프로젝트가 원하는 수준에 미치지 못했지만, 그 과정에서 얻은 많은
          것들이 저에게는 값진 경험이었습니다. <br />
        </Collaboration>
        <Team></Team>
      </ProjectInfo>
      <ProjectInfo>
        <InfoName>프로젝트 링크</InfoName>
        <LinkBox>
          <LinkTitle>
            PetTalk :{" "}
            <Link
              to="https://everycar-6008d.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pettalk.com
            </Link>
          </LinkTitle>
          <LinkTitle>
            Github :{" "}
            <Link
              to="https://github.com/Min-byeonghyun/petTalk"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/PetTalk
            </Link>
          </LinkTitle>
        </LinkBox>
      </ProjectInfo>
    </Wrap>
  );
}
