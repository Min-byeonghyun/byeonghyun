import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-top: 50px;
  
`;
const InfoName = styled.h1`
  width: 100%;
  font-size: 24px;
  padding-bottom: 20px;
`;
const VideoBox = styled.div`
  margin-top: 20px;
`;
const Title = styled.h1`
  padding: 20px;
  font-size: 20px;
`;

export default function VideoEmbed() {
  return (
    <Wrap>
      <InfoName>시연 영상</InfoName>
      <VideoBox>
        <Title>경매</Title>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/J1AN3FIekg0?si=tkrZE-8aZZeSKAm7"
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
