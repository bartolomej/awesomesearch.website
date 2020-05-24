import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as logo } from "../assets/logo.svg";
import UseAnimations from "react-useanimations";
import { Link } from "react-router-dom";
import RandomItem from "../components/RandomItem";
import { GithubLink, MessageWrapper } from "../components/ui";
import { theme } from "../colors";


export default function Home () {
  const [randomPics, setRandomPics] = useState(null);
  const [linkCount, setLinkCount] = useState('...');
  const [repoCount, setRepoCount] = useState('...');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + '/random')
      .then(res => res.json())
      .then(setRandomPics)
    fetch(process.env.REACT_APP_API_HOST + '/stats')
      .then(res => res.json())
      .then(s => {
        setLinkCount(s.link_count);
        setRepoCount(s.repo_count);
      })
  }, []);

  return (
    <Container>
      <GithubLink href={'https://github.com/bartolomej/awesome-search'}/>
      <TopWrapper>
        <AwesomeSearchLogo/>
        <Description>
          Search engine for discovering more relevant awesome stuff from <a href="https://awesome.re/">Awesome
          Lists.</a> Includes over {linkCount} indexed awesome links from {repoCount} awesome lists.
        </Description>
        <SearchLink to="/search">
          Go to Search
          <UseAnimations
            animationKey="arrowDown"
            size={30}
            style={{ transform: 'rotate(-90deg)', paddingTop: 10 }}
          />
        </SearchLink>
      </TopWrapper>
      <BottomWrapper>
        <SectionTitle>Random Pics</SectionTitle>
        <PickedItemsWrapper>
          {!randomPics && (
            <MessageWrapper>
              {/* https://www.davidhu.io/react-spinners/ */}
              <UseAnimations
                animationKey="loading2"
                size={60}
                style={{ padding: 100, color: theme.primary }}
              />
            </MessageWrapper>
          )}
          {randomPics && randomPics.map(item => (
            <RandomItem
              key={item.url}
              url={item.url}
              image={item.image_url}
              title={item.title || item.uid}
              repoId={item.source}
              repoUrl={`https://github.com/${item.source}`}
            />
          ))}
        </PickedItemsWrapper>
      </BottomWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  @media (max-width: 500px) {
    height: 70vh;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  color: ${props => props.theme.primary};
  font-weight: bold;
  margin-bottom: 30px;
`;

const PickedItemsWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.lightText};
  font-size: 1.1em;
  text-align: center;
  max-width: 500px;
  margin-top: 30px;
  margin-bottom: 50px;
  a {
    color: ${props => props.theme.secondary};
  }
  @media (max-width: 500px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const SearchLink = styled(Link)`
  color: ${props => props.theme.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
`;

const AwesomeSearchLogo = styled(logo)`
  width: 350px;
  @media (max-width: 700px) {
    width: 200px;
  }
`;