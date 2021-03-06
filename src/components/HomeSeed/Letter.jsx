import React from 'react';
import styled from 'styled-components';
import {svgCss} from "./svgCss";

export const StyledLetter = styled.svg`
  ${svgCss}
`;

const Letter = ({ letter, show }) => (
  <StyledLetter
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    className="letter"
    show={ show }
    letter={ letter }
  >
    { letter === 'H' && <path d="M73.7 51.9V22h14.8v76.2H73.7V64H46.3v34H31.5V21.8h14.8v29.9c0 .1 27.4.2 27.4.2z"/> }
    { letter === 'A' && <path d="M66.2 20.9H54.6L25 99.1h15.6L46.8 83h26.5l5.9 16.1H95L66.2 20.9zM51 70.9l8.5-27.7h.2l9.4 27.7H51z"/> }
    { letter === 'U' && <path d="M32 20.9h14.8v42.7c0 9.4.8 22.6 13.4 22.6S73.5 73 73.5 63.6V20.9h14.8v45.6c0 18.6-7.8 32.6-28.3 32.6s-28.3-14-28.3-32.6l.3-45.6z"/> }
  </StyledLetter>
);

export default Letter;
