import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import HomeSeed, { Wrapper as HomeSeedWrapper } from './HomeSeed';
import LetterH from '../components/HomeSeed/LetterH';
import LetterA from '../components/HomeSeed/LetterA';
import LetterU from '../components/HomeSeed/LetterU';
import { StyledSeed } from '../components/HomeSeed/Seed';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 20px; // slide a bit because svg ar not centered

  div {
    svg {
      fill: ${p => p.theme.colors.dark};
    }
  }

  .selected {
    div {
      svg {
        fill: ${p => p.theme.colors.main};
      }
    }
  }
`;

const SeedLink = styled(NavLink)`
  display: block;
  ${HomeSeedWrapper} {
    padding-top: 100%;
  }
  .seed {
    transform: rotate(${p => p.theme.seedRotation[3]}deg);
  }
`;

const FirstSeedLink = SeedLink.extend`
  .seed {
    transform: rotate(0deg) translateX(3px) translateY(-5px);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <FirstSeedLink
        activeClassName="selected"
        to='/carte'
      >
        <HomeSeed
          Letter={<LetterH />}
        />
      </FirstSeedLink>
      <SeedLink
        activeClassName="selected"
        to='/vins'
      >
        <HomeSeed
          Letter={<LetterA />}
        />
      </SeedLink>
      <SeedLink
        activeClassName="selected"
        to='/restaurant'
      >
        <HomeSeed
          Letter={<LetterU />}
        />
      </SeedLink>
    </Wrapper>
  );
};

export default Navigation;
