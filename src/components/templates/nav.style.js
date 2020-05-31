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
