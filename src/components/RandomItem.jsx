import React from "react";
import styled from "styled-components";


export default function ({ image, title, repoId, repoUrl, url }) {

  return (
    <Container target="_blank" href={url}>
      <ImageWrapper>
        <Image alt={title} src={image} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title.length >= 55 ? `${title.substring(0, 55)}...` : title}</Title>
        <RepoLink>{repoId}</RepoLink>
      </TextWrapper>
    </Container>
  )
}

const Container = styled.a` 
  margin-bottom: 30px;
  padding: 15px;
  width: 300px;
  display: flex;
  flex-direction: row;
  border-radius: 22px;
  transition: all 0.2s ease-out;
  background: #F5F7FB;
  box-shadow:  5px 5px 12px #bfc1c4, 
             -5px -5px 12px #ffffff;
  &:hover {
    transform: scale(1.02);
    box-shadow:  7px 7px 14px #d0d2d5, 
             -7px -7px 14px #ffffff;
  }
`;

const TextWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 4;
  text-align: left;
`;

const ImageWrapper = styled.div`
  height: 60px;
  width: 60px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const Title = styled.span`
  font-size: 0.9em;
  font-weight: bolder;
  color: ${props => props.theme.primary};
  margin-bottom: 3px;
  line-height: 1.1;
`;

const RepoLink = styled.span`
  color: ${props => props.theme.secondary};
  font-size: 0.7em;
`;