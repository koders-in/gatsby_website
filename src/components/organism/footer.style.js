import styled from "styled-components";
import media from 'styled-media-query';

const setLinkContainerForSmallDevice = () =>
    media.lessThan('large')`
    margin-bottom:5rem;
    width:auto;
  `;
  const setContainerForSmallDevice = () =>
  media.lessThan('large')`
  margin-top: -10rem !important;
`;
export const SiteLinks = styled.div`
    ${setLinkContainerForSmallDevice}`

export const FooterContainerStye = styled.div`
width: 100%;
height: auto;
padding: 2rem 5rem;
${setContainerForSmallDevice}
`;

