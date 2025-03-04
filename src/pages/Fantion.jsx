import styled from "styled-components";
import VideoEmbed from "./VideoEmbed";
import VideoEmbed2 from "./VideoEmbed2";
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ModalListBox = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
  height: auto;
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
  font-size: 16px;
  line-height: 50px;
`;

const BoxSub = styled.p`
  font-size: 16px;
  font-weight: normal;
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
          <ModalRight>2024년 6월 24일 ~ 2024년 8월 16일</ModalRight>
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
            Fan-Tion은 팬들이 경매를 통해 자신이 좋아하는 아이템을 구매할 수
            있는 팬덤 경매 커뮤니티 플랫폼입니다.
          </InfoList>
          <InfoList>
            실시간 경매 시스템과 사용자 간 소통 기능을 제공하며, 팬 커뮤니티를
            형성할 수 있도록 기획되었습니다.
          </InfoList>
          <InfoList>
            주 타겟은 아이돌팬덤, 영화 , 애니메이션의 팬 등 서브컬쳐를 즐기는
            사용자를 대상으로 한 서비스 입니다.
          </InfoList>
        </BoxInfo>
        <Team>구성원 : 프론트엔드 3명 / 백엔드 3명</Team>
      </ProjectInfo>
      <ProjectInfo>
        <InfoName>내가 기여한 부분</InfoName>
        <BoxInfo>
          <InfoList>
            로그인 및 회원가입 기능 개발:
            <BoxSub>
              - 회원가입 시 이메일 중복 체크 및 프로필 이미지 설정 기능 구현,
            </BoxSub>
            <BoxSub>
              - Daum 우편번호 서비스 API를 활용한 주소 검색 기능 개발
            </BoxSub>
          </InfoList>
          <InfoList>
            커뮤니티 채널 게시글 페이지 개발 :
            <BoxSub>
              - 커뮤니티 채널 생성 및 게시글 리스트 받아오는 기능 개발
            </BoxSub>
            <BoxSub>
              - 많은 게시글을 효율적으로 보여주기 위해 페이지네이션을 적용하여
              성능 최적화
            </BoxSub>
          </InfoList>
          <InfoList>
            {" "}
            프로필 페이지 개발 :
            <BoxSub>
              - 사용자의 닉네임, 전화번호, 이메일, 배송지 정보를 불러와 화면에
              표시
            </BoxSub>
            <BoxSub>
              - 프로필 정보 수정 및 저장 기능 구현, 사용자 경험을 고려한 UI 설계
            </BoxSub>
          </InfoList>
          <InfoList>
            검색 기능 개발:
            <BoxSub>
              - 경매 물품, 커뮤니티 제목, 작성자에 따른 검색 기능 구현,
            </BoxSub>
            <BoxSub>- 카테고리 리스트를 받아오는 기능 개발</BoxSub>
          </InfoList>
          <InfoList>
            네트워크 요청 모듈화 :
            <BoxSub>
              - axios 인터셉터 인스턴스를 활용하여 네트워크 요청을 모듈화하고,
              유지보수성 향상
            </BoxSub>
          </InfoList>
          <InfoList>
            테스트 코드 작성 :
            <BoxSub>
              - msw를 사용하여 백엔드 서버 배포 전 mock 데이터를 활용한 테스트
              코드 작성
            </BoxSub>
          </InfoList>
          <InfoList>
            경매 실시간 구독 기능 :
            <BoxSub>
              - EventSource를 사용하여 경매 진행 시 실시간으로 구매자의 닉네임과
              가격이 업데이트되는 기능 개발
            </BoxSub>
          </InfoList>
          <InfoList>
            UI 개발 :
            <BoxSub>
              - 전체적인 UI의 약 70% 작업, styled-components를 사용해 일관된
              디자인 적용
            </BoxSub>
          </InfoList>
          <InfoList>
            협업 및 관리 :
            <BoxSub>
              - Slack과 Discord를 사용해 팀원들과 매일 1시간씩 회의를 진행하며
              소통
            </BoxSub>
            <BoxSub>
              - 트러블슈팅 시 Notion에 이슈를 기록하고, Discord및 Slack에서
              팀원들과 함께 해결
            </BoxSub>
            <BoxSub>
              - 프로젝트 마지막 단계에서 QA 진행, 문제를 Slack 스레드에 정리해
              팀원들과 해결
            </BoxSub>
          </InfoList>
          <InfoList>
            협업 프로세스 :
            <BoxSub>
              - GitHub 브랜치 전략을 사용하여 Main과 Dev 브랜치로 나눠 개발
            </BoxSub>
            <BoxSub>
              - 각자 로컬 브랜치에서 작업 후 PR을 생성하여 Dev 브랜치에 머지,
              문제없을 시 Main 브랜치로 머지
            </BoxSub>
            <BoxSub>
              - PR 시 Slack에 내용을 공유하여 모든 팀원이 진행 상황을 파악하고
              피드백을 주고받음
            </BoxSub>
          </InfoList>
        </BoxInfo>
        <Myfunction>내가 구현한 기능 영상</Myfunction>
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

      <VideoEmbed />
      <VideoEmbed2 />
      <ProjectInfo>
        <InfoName>프로젝트 링크</InfoName>
        <LinkBox>
          <LinkTitle>
            FAN-TION :{" "}
            <Link
              to="https://fan-tion.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              fan-tion.vercel.app
            </Link>
          </LinkTitle>
          <LinkTitle>
            Github :{" "}
            <Link
              to="https://github.com/Min-byeonghyun/Fan-Tion"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Fan-tion
            </Link>
          </LinkTitle>
          <LinkTitle>
            Notion :{" "}
            <Link
              to="https://www.notion.so/3-Fan-Tion-Fandom-Auction-653e7db602c84c1987e9cbd94c6b5f77"
              target="_blank"
              rel="noopener noreferrer"
            >
              notion.so/fantion
            </Link>
          </LinkTitle>
        </LinkBox>
      </ProjectInfo>
    </Wrap>
  );
}
