import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectWrap = styled.div`
  width: 1000px;
  padding: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
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
  flex: 0.8;
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
  list-style-type: none;
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
          <BoxTitle>팀 프로젝트</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>프론트엔드 3명 / 백엔드 3명 </BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle>프로젝트 결과물</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>
              <Link
                to="https://github.com/Fan-Tion"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Min-byeonghyun/Fan-Tion
              </Link>
            </BoxList>
            <BoxList>
              <Link
                to="https://fan-tion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fan-tion.vercel.app
              </Link>
            </BoxList>
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
      <Box>
        <BoxLeft>
          <BoxTitle>트러블슈팅 및 배운점</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>
              코드의 재사용성을 높이기 위해, 효율적으로 컴포넌트를 구성하고, 각
              컴포넌트 및 함수가 본연의 역할의 충실할 수 있도록 고민하며
              구현했습니다.
            </BoxList>
            <BoxList>
              프로젝트에서 styled-components를 전역적으로 사용하는 대신, 각
              컴포넌트 별로 스타일을 분리하여 유지보수성을 높였습니다.
            </BoxList>
            <BoxList>
              페이지를 lazy loading 방식으로 구현하여 초기 로딩 시간을
              단축시켰고, 컴포넌트를 pages 폴더에 모아두고 index.ts에서
              효율적으로 관리하였습니다.
            </BoxList>
            <BoxList>
              {" "}
              axios 인스턴스를 설정하고, 인터셉터를 통해 API 요청 시 토큰 인증
              및 데이터 처리 과정을 자동화하여 코드의 일관성과 유지보수성을
              강화했습니다.
            </BoxList>
            <BoxList>
              {" "}
              react-cookie를 사용해 로그인 시 토큰을 쿠키에 저장하여 사용자가
              인증 정보를 안전하게 관리할 수 있도록 구현했습니다.
            </BoxList>
            <BoxList>
              {" "}
              페어 프로그래밍을 통해 팀원과 함께 문제를 해결하며, 코드 품질을
              향상시키고 다양한 관점에서 접근하는 방법을 배웠습니다.
            </BoxList>
            <BoxList>
              {" "}
              Slack, Discord를 통해 매일 팀원과 소통하며 트러블슈팅과 코드리뷰를
              함께 진행했고, 그 과정에서 커뮤니케이션 스킬을 향상시켰습니다.
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
            <BoxList>
              <Link
                to="https://github.com/Min-byeonghyun/petTalk"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Min-byeonghyun/petTalk
              </Link>
            </BoxList>
            <BoxList>
              <Link
                to="https://everycar-6008d.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                pettalk.com
              </Link>
            </BoxList>
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
            <BoxList>유저관련 (회원가입, 소셜로그인, 마이페이지)</BoxList>
            <BoxList>카카오 맵 api를 활용한 애견을 위한 장소 검색 기능 구현</BoxList>
            <BoxList>게시판 CRUD 기능 구현 </BoxList>
            <BoxList>게시판 댓글, 좋아요 기능 구현</BoxList>
           
            <BoxList>페이지네이션 구현</BoxList>
            <BoxList>Firebase 배포</BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
      <Box>
        <BoxLeft>
          <BoxTitle color="#FFC459">트러블슈팅 및 배운점</BoxTitle>
        </BoxLeft>
        <BoxRight>
          <BoxInfo>
            <BoxList>{" "}Firebase를 처음 접하며 온라인 강의를 통해 학습하였고, 프로젝트에 적용하는 과정에서 Firebase Authentication, Firestore 등의 다양한 기능을 익혔습니다.</BoxList>
            <BoxList>{" "}로그인 기능을 구현할 때 Firebase Authentication을 사용해 사용자 인증을 처리하였고, 이를 통해 인증 시스템을 손쉽게 구축할 수 있었습니다.</BoxList>
            <BoxList>{" "}카카오맵 API를 활용하여 검색 위치에서 가까운 애견샵이나 애견공원을 찾아주는 기능을 구현하며, 위치 정보를 기반으로 데이터를 처리하고 표시하는 방법을 배웠습니다.</BoxList>
            <BoxList>{" "}동적 페이지 버튼 생성 문제 처음에는 고정된 버튼을 사용해 페이지를 구현하려 했으나, 사용자가 지정한 총 페이지 수에 맞춰 버튼을 동적으로 생성하는 방법을 찾아 해결했습니다. 이를 통해 다양한 페이지 수에 유연하게 대응할 수 있는 페이지네이션을 구현했습니다.</BoxList>
            <BoxList>{" "}이전/다음 버튼 비활성화 처리 문제 처음에는 이전과 다음 버튼이 항상 활성화되어 있었지만, 첫 페이지와 마지막 페이지에서 버튼을 비활성화하는 로직을 추가해 사용자 경험을 개선했습니다. disabled 속성을 통해 버튼 클릭을 제어하는 방법을 사용했습니다.</BoxList>
          </BoxInfo>
        </BoxRight>
      </Box>
    </ProjectWrap>
  );
}
