import styled from "styled-components";
import VideoEmbed from "./VideoEmbed";
import VideoEmbed2 from "./VideoEmbed2";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
const ModalImg = styled.img`
  width: 100%;
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
`;
const ModalListBox = styled.div`
  width: 100%;
  height: 60px;
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
  list-style-type: none;
  padding-left: 0;
  li::before {
    content: "•";
    margin-right: 8px;
  }
`;
const InfoList = styled.li`
  font-size: 16px;
  line-height: 50px;
`;
const Team = styled.div`
  padding: 30px;
  font-size: 20px;
`;
const MyInfoBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  gap: 10px;
  width: 100%;
`;
const MyImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: fill;
`;
const MyImgSub = styled.div``;
const Myfunction = styled.h1`
  font-size: 24px;

  margin-top: 30px;
`;
const Collaboration = styled.div`
  line-height: 30px;
  margin-top: 20px;
  font-size: 20px;

  padding-top: 20px;
`;
const ProcessBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Process = styled.div`
  padding: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 30px;
`;

const GitHubStrategy = styled.div`
  line-height: 40px;
  margin-top: 20px;
  font-size: 18px;
  padding-bottom : 20px;
`;
const LinkBox = styled.div`
  display : flex;
  flex-direction : column;
  line-height : 40px;
  align-items : center;
  justify-content : center;
  margin-top : 30px;
  margin-bottom : 40px;
  
`
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
 
`


export default function Fantion() {
  return (
    <Wrap>
      <ImgBox>
        <ModalImg src="/img/mainLogo2.png" />
      </ImgBox>
      <ModalBox>
        <ModalTitle>FAN-TION(팬덤 경매 플랫폼)</ModalTitle>
      </ModalBox>
      <TopBox>
        <ModalListBox>
          <ModalLeft>소개글</ModalLeft>
          <ModalRight>
            팬들이 경매를 통해 자신이 좋아하는 아이템을 구매할 수 있는 팬덤 경매
            플랫폼.
            <br />
            실시간 경매 시스템과 사용자 간 소통 기능을 제공하며, 팬 커뮤니티를
            형성할 수 있도록 기획되었습니다.
          </ModalRight>
        </ModalListBox>
        <ModalListBox>
          <ModalLeft>진행 기간</ModalLeft>
          <ModalRight>2024년 6월 24일 ~ 2024년 7월 27일</ModalRight>
        </ModalListBox>
        <ModalListBox>
          <ModalLeft>Skills & Libraries</ModalLeft>
          <ModalRight>
            <StackList>Typescript</StackList>
            <StackList>Javascript</StackList>
            <StackList>React</StackList>
            <StackList>Socket.io</StackList>
            <StackList>Styled-components</StackList>
            <StackList>axios</StackList>
            <StackList>MSW</StackList>
          </ModalRight>
        </ModalListBox>
      </TopBox>
      <ProjectInfo>
        <InfoName>프로젝트 소개</InfoName>
        <BoxInfo>
          <InfoList>
            Fan-Tion은 유저에게 경매와 커뮤니티 서비스를 제공하는 플랫폼입니다.
          </InfoList>
          <InfoList>
            주 타겟은 아이돌팬덤, 영화 , 애니메이션의 팬 등 서브컬쳐를 즐기는
            사용자를 대상으로 한 서비스 입니다.
          </InfoList>
          <InfoList>
            일반 상품은 중고 거래 시 가격대가 원가격을 기준으로 형성되지만,
            서브컬처의 굿즈는 가격 책정이 어렵습니다.
          </InfoList>
          <InfoList>
            Fan-Tion은 경매 시스템을 통해 이 문제를 해결하고, 최근 경매 이력을
            제공하여 사용자에게 편의를 제공합니다.
          </InfoList>
          <InfoList>
            커뮤니티 서비스를 통해 유저의 플랫폼 체류 시간을 늘리고, 경매
            서비스의 재이용률을 높이는 효과를 기대합니다.
          </InfoList>
          <InfoList>
            이 플랫폼은 커뮤니티를 제공하여 각 채널에 맞는 유저들끼리 이야기 할
            수 있는 공간을 제공합니다.
          </InfoList>
          <InfoList>
            이를 통해 각 팬덤 구성원이 더 큰 소속감을 느끼고, 공정한 가격으로
            원하는 굿즈를 손에 넣을 수 있습니다.
          </InfoList>
        </BoxInfo>
        <Team>구성원 : 프론트엔드 / 백엔드 3명</Team>
      </ProjectInfo>
      <ProjectInfo>
        <InfoName>내가 기여한 부분</InfoName>
        <BoxInfo>
          <InfoList>
            유저관련 (회원가입, 소셜로그인(연동기능),마이페이지)
          </InfoList>
          <InfoList>검색기능 (경매검색,커뮤니티 검색기능)</InfoList>
          <InfoList>커뮤니티 채널생성 페이지</InfoList>
          <InfoList>커뮤니티 채널 페이지 , 게시글페이지, 게시판페이지</InfoList>
          <InfoList>경매 실시간 구독기능 개발</InfoList>
          <InfoList>Daum 우편번호 서비스 기능</InfoList>
          <InfoList>인기카테고리 리스트 UI/UX</InfoList>
          <InfoList>
            axios의 인터셉터, 인스턴스를 활용하여 네트워크 요청 모듈화
          </InfoList>
          <InfoList>
            MSW를 활용하여 Mock 데이터를 사용해 백엔드 서버 배포되기전 테스트
            코드 작성
          </InfoList>
        </BoxInfo>
        <Myfunction>내가 구현한 기능</Myfunction>
        <MyInfoBox>
          <ImgWrap>
            <MyImg src="/img/login.gif" />
            <MyImgSub>로그인 </MyImgSub>
          </ImgWrap>
          <ImgWrap>
            <MyImg src="/img/signup.gif" />
            <MyImgSub>회원가입</MyImgSub>
          </ImgWrap>
        </MyInfoBox>
        <MyInfoBox>
          <ImgWrap>
            <MyImg src="/img/mypage.png" />
            <MyImgSub>마이페이지</MyImgSub>
          </ImgWrap>
          <ImgWrap>
            <MyImg src="/img/naverLogin.png" />
            <MyImgSub>소셜로그인 연동</MyImgSub>
          </ImgWrap>
        </MyInfoBox>
        <MyInfoBox>
          <ImgWrap>
            <MyImg src="/img/category.png" />
            <MyImgSub>인기 카테고리 리스트</MyImgSub>
          </ImgWrap>
          <ImgWrap>
            <MyImg src="/img/subscribe.png" />
            <MyImgSub>실시간 구독</MyImgSub>
          </ImgWrap>
        </MyInfoBox>
        <MyInfoBox>
          <ImgWrap>
            <MyImg src="/img/boardSearch.gif" />
            <MyImgSub>게시글 검색</MyImgSub>
          </ImgWrap>
          <ImgWrap>
            <MyImg src="/img/search.gif" />
            <MyImgSub>경매 검색</MyImgSub>
          </ImgWrap>
        </MyInfoBox>
        <MyInfoBox>
          <ImgWrap>
            <MyImg src="/img/channel.gif" />
            <MyImgSub>채널 생성</MyImgSub>
          </ImgWrap>
          <ImgWrap>
            <MyImg src="/img/inventory.gif" />
            <MyImgSub>채널 목록</MyImgSub>
          </ImgWrap>
        </MyInfoBox>
      </ProjectInfo>
      <ProjectInfo>
        <InfoName>프로젝트 협업 방식</InfoName>
        <Collaboration>
          Notion과 Discord를 활용하여 소통하고, 프로젝트 기간 동안 매일 30분
          이상 팀원과 미팅을 진행하였습니다. <br />
          <br />
          팀원들의 진행 상황을 매일 공유하며, 트러블슈팅이 생기면 Notion에
          공유하거나 Discord에서 함께 논의해 해결했습니다. <br />
        </Collaboration>
        <ProcessBox>
          <Process>
            - 프로젝트 마지막 단계에서 Notion을 이용해 QA를 진행하여 문제를
            스레드에 모아서 다 같이 해결했습니다.
          </Process>
        </ProcessBox>
      </ProjectInfo>
      <ProjectInfo>
        <InfoName>GitHub 브랜치 전략</InfoName>
        <GitHubStrategy>
          1. 로컬 브랜치에서 지속적으로 작업을 진행. <br />
          2. 작업 완료 후 Remote Repository(Github)에 브랜치를 올림. <br />
          3. PR(리뷰 요청)을 통해 코드 검토. <br />
          4. 수정 사항이 있다면 재작업 후 다시 PR. <br />
          5. 리뷰 통과 시 Merge를 통해 반영.
          <br />
        </GitHubStrategy>
      </ProjectInfo>
      <VideoEmbed />
      <VideoEmbed2/>
      <ProjectInfo>
        <InfoName>프로젝트 링크</InfoName>
        <LinkBox>
        <LinkTitle>FAN-TION : <Link to="https://fan-tion.vercel.app/" target="_blank" rel="noopener noreferrer">fan-tion.vercel.app</Link></LinkTitle>
        <LinkTitle>Github : <Link to="https://github.com/Fan-Tion" target="_blank" rel="noopener noreferrer">github.com/Fan-tion</Link></LinkTitle>
        <LinkTitle>Notion : <Link to="https://www.notion.so/3-Fan-Tion-Fandom-Auction-653e7db602c84c1987e9cbd94c6b5f77" target="_blank" rel="noopener noreferrer">notion.so/fantion</Link></LinkTitle>
        </LinkBox>
      </ProjectInfo>
    </Wrap>
  );
}
