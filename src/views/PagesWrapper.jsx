import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';
import TextLogo from '../components/TextLogo';
import SliderMD from "../components/Slideshow/SliderMD";

const SlideshowWrapper = styled.div`
  display: none;
  position: relative;
  
  @media (min-width: 530px) {
    display: block;
    flex-grow: 1; // grows as much as space left
  }  
`;

const LeftMenu = styled.div`
  
  position: relative;
  width: 110px;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  flex-shrink: 0; // does not shrink
`;

const Content = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100vw - 110px);
  overflow-y: scroll;
  flex-shrink: 0; // does not shrink
  
  @media (min-width: 530px) {
    width: 50vw;
    min-width: 420px;
    max-width: 420px;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: ${p => p.theme.colors.light};
  &::before {
    content: "";
  }
  display: flex;
  align-items: stretch;
`;

const LogoWrapper = styled(Link)`
  display: block;
  padding: 40px 25px 0;
  svg {
    ${p => p.theme.transitions};
    fill: ${p => p.theme.colors.dark};
    &:hover{
      fill: ${p => p.theme.colors.main};  
    }
  }
`;

const PagesWrapper = ({location, galleries }) => {
  return (
    <Wrapper>
      {/*<PageBorders />*/}
      <LeftMenu>
        <LogoWrapper to="/">
          <TextLogo />
        </LogoWrapper>
        <Navigation />
      </LeftMenu>
      <Content>
        <Carte
          name='carte'
          isCurrent={location.pathname === '/carte'}
          currentMenu={carte}
          gallery={galleries.carte}
        />
        <Carte
          name='restaurant'
          isCurrent={location.pathname === '/restaurant'}
          currentMenu={restaurant}
          gallery={galleries.restaurant}
        />
        <Carte
          name='vins'
          isCurrent={location.pathname === '/vins'}
          currentMenu={vins}

        />
      </Content>
      <SlideshowWrapper>
        <SliderMD gallery={galleries[location.pathname.slice(1)]}/>
      </SlideshowWrapper>
    </Wrapper>
  );
};

export default PagesWrapper;
