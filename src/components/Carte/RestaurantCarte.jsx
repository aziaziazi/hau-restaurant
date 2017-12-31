import React from 'react';
import styled from 'styled-components';

import {Content, ContentSection, H1, ItemLine, ItemName, Items, SectionName, Wrapper} from "./index";

const Link = styled.a`
  color: ${props => props.theme.colors.dark};
`;

const Credit = styled(ContentSection)`
  margin-top: 50px;
  font-size: 10px;
  opacity: 0.7;
`;

const RestaurantCarte = (props) => {
  const {
    name,
  } = props;

  return (
    <Wrapper>
      <H1>{name}</H1>
      <Content>
        <ContentSection>
          <Items>
            <ItemLine>
              <ItemName>
                Bienvenue chez Hau. <br />
                Vietnamien d’origine, chez Hau on y mange sa cuisine. Dans ce cadre unique rempli de saveurs et d’histoire, le chef vous propose une convivialité bien à lui : une cuisine fine aux saveurs asiatiques, fraîche, et toujours repensée, accompagnée d’une belle carte de vin biologique et naturelle. Un voyage gastronomique proposé à midi comme au soir."
              </ItemName>
            </ItemLine>
          </Items>
        </ContentSection>
        <ContentSection>
          <SectionName>Fermetures</SectionName>
          <ItemLine>
            <ItemName>
              Fermé le mardi, le mercredi, et le samedi midi.
            </ItemName>
          </ItemLine>
        </ContentSection>
        <ContentSection>
          <SectionName>Contact</SectionName>
          <ItemLine>
            <ItemName>
              Vous pouvez nous joindre sur <Link href="https://www.facebook.com/haurestaurant/">Facebook</Link> ou par téléphone au <Link href="tel:003227629980">+32 2 762 99 80</Link>.
            </ItemName>
          </ItemLine>
        </ContentSection>
        <ContentSection>
          <SectionName>Localisation</SectionName>
          <ItemLine>
            <ItemName>
              Avenue Salomé 1 - 1150 Woluwe-saint-pierre
              <iframe
                width="100%"
                height="500"
                frameborder="0"
                style={{border:0}}
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAJh50zH0pcBu-6VDsUk6HXvMkzsEdCx0s&&q=hau+bruxelles&zoom=11"
                allowfullscreen>
              </iframe>
            </ItemName>
          </ItemLine>
        </ContentSection>
        <Credit>
          <ItemLine>
            <ItemName>
              hau-restaurant.com is designed by <Link target="_blank" href="http://www.michikovandevelde.com">Michiko Van de Velde</Link> and developed by <Link target="_blank" href="http://camillegabrieli.com">Camille Gabrieli</Link>. Pictures by <Link target="_blank" href="mailto:samon.vdv@gmail.com">Samon Van de Velde</Link>.
            </ItemName>
          </ItemLine>
        </Credit>
      </Content>
    </Wrapper>
  );
};

export default RestaurantCarte;