import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  border-bottom: 1px solid #ced4da;

`;
const VideoBox = styled.div`
  margin-top: 20px;
`;
const Title = styled.h1`
  padding: 20px;
  font-size: 20px;
`;

export default function VideoEmbed2() {
  return (
    <Wrap>

      <VideoBox>
        <Title>커뮤니티</Title>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vdu0txXeygA?si=aQqvaydBVj7N0wth"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </VideoBox>
    </Wrap>
  );
}
