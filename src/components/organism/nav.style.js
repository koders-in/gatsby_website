import styled from "styled-components";
import media from 'styled-media-query';

const setLinkContainerForSmallDevice = () =>
    media.lessThan('large')`
    height: 5rem !important;
  `;

const setForSmallDevice = () =>
    media.lessThan('large')`
    height: 5rem !important;
    `;

export const LinkContainer = styled.div`
   ${setForSmallDevice}
    `

export const NavStyle = styled.nav`
    ${setLinkContainerForSmallDevice}
    `;
    export const RoundIconConatiner = styled.div`
    border: ${props => props.primary ? 'none' : '1px solid white' };
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: ${props => props.primary ? 'none' : '2.7' };
    text-align: center;
    object-fit: cover;
    ${setStyleForSmallDevice}

  `;

  
