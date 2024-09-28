import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectWrap = styled.div`
  width: 1000px;
  padding: 20px;
  margin-bottom: 40px;
`;
const ProjectTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const ProjectTitleWrap2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0 30px;
`;
const ProjectImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
const ProjectImg2 = styled.img`
  width: 80px;
  height: 70px;
  object-fit: contain;
`;
const ProjectTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "#4fd66e")};
  margin-bottom: 20px;
  align-items: center;
`;
const ProjectDescription = styled.h1`
  border: 1px solid #ced4da;
  padding: 20px;
  border-radius: 25px;
  font-size: 18px;
  line-height: 1.5;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px;
  border-bottom: 1px solid #ced4da;
`;
const BoxLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const BoxRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const BoxTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "#4fd66e")};
`;
const BoxInfo = styled.ul`
  font-size: 18px;
  line-height: 30px;
  list-style-type: none;
  padding-left: 0;
  li::before {
    content: "•";
    margin-right: 8px;
  }
`;
const BoxList = styled.li`
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

export default function Project() {
  return (
    <ProjectWrap>
      <ProjectTitleWrap>
        <ProjectImg src="/img/mainLogo2.png" />
        <ProjectTitle>FAN-TION (팬덤 경매 플랫폼)</ProjectTitle>
      </ProjectTitleWrap>
      <ProjectDescription>
        팬들이 경매를 통해 자신이 좋아하는 아이템을 구매할 수 있는 팬덤 경매
        플랫폼. <br />
        실시간 경매 시스템과 사용자 간 소통 기능을 제공하며, 팬 커뮤니티를
        형성할 수 있도록 기획되었습니다.
      </ProjectDescription>
      <Box>
        <BoxLeft>
          <BoxTitle>개인 프로젝트</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>프론트엔드 / 백엔드 3명 </BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle>프로젝트 결과물</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList><Link to="https://github.com/Fan-Tion" target="_blank" rel="noopener noreferrer">github.com/Min-byeonghyun/Fan-Tion</Link></BoxList>
            <BoxList><Link to="https://fan-tion.vercel.app/" target="_blank" rel="noopener noreferrer">fan-tion.vercel.app</Link></BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle>활용 기술스택</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>Javascript, Typescript , React</BoxList>
            <BoxList>styled-components, react-Router, ToastUI</BoxList>
            <BoxList>MSW, socket.io , vercel </BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle>구현 기능</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>
              유저관련 (회원가입, 소셜로그인(연동기능),마이페이지)
            </BoxList>
            <BoxList>검색기능 (경매검색,커뮤니티 검색기능)</BoxList>
            <BoxList>커뮤니티 채널생성 페이지</BoxList>
            <BoxList>커뮤니티 채널 페이지 , 게시글페이지, 게시판페이지</BoxList>
            <BoxList>경매 실시간 구독기능 개발</BoxList>
            <BoxList>Daum 우편번호 서비스 기능 </BoxList>
            <BoxList>인기카테고리 리스트 UI/UX</BoxList>
            <BoxList>
              axios의 인터셉터, 인스턴스를 활용하여 네트워크 요청 모듈화
            </BoxList>
            <BoxList>
              MSW를 활용하여 Mock 데이터를 사용해 백엔드 서버 배포되기전 테스트
              코드 작성
            </BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <ProjectTitleWrap2>
        <ProjectImg2 src="/img/pettalk.png" />
        <ProjectTitle color="#FFC459">
          PetTalk (애견 커뮤니티 플랫폼)
        </ProjectTitle>
      </ProjectTitleWrap2>
      <ProjectDescription>
        애견 커뮤니티 펫톡(PetTalk) 애견인들이 강아지와 함께 하는 일상을
        공유하고, <br />
        애견 관련 정보를 얻어갈 수 있는 종합 커뮤니티
      </ProjectDescription>
      <Box>
        <BoxLeft>
          <BoxTitle color="#FFC459">개인 프로젝트</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>프론트엔드 1명 </BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle color="#FFC459">프로젝트 결과물</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
          <BoxList><Link to="https://github.com/Min-byeonghyun/petTalk" target="_blank" rel="noopener noreferrer">github.com/Min-byeonghyun/petTalk</Link></BoxList>
          <BoxList><Link to="https://everycar-6008d.web.app/" target="_blank" rel="noopener noreferrer">pettalk.com</Link></BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle color="#FFC459">활용 기술스택</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>Javascript, React, Firebase</BoxList>
            <BoxList>styled-components, react-Router</BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle color="#FFC459">구현 기능</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>유저관련 (회원가입, 소셜로그인,마이페이지)</BoxList>
            <BoxList>카카오 맵 api를 활용한 애견을 위한 장소 찾기 기능</BoxList>
            <BoxList>게시판 CRUD 기능</BoxList>
            <BoxList>Firebase 배포</BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
    </ProjectWrap>
  );
}
