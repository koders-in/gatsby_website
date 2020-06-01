import styled from "styled-components";
import media from 'styled-media-query';
import { FlexItem } from 'styled-flex-component';

const setLinkContainerForSmallDevice = () =>
    media.lessThan('large')`
    margin-bottom:5rem;
    flex-direction: row !important;
  `;
  const setContainerForSmallDevice = () =>
  media.lessThan('large')`
  margin-top: -10rem !important;
`;
export const SiteLinks = styled( FlexItem ).attrs( () => ( { } ) )`
    ${setLinkContainerForSmallDevice}`

export const FooterContainerStye = styled.div`
width: 100%;
height: auto;
padding: 2rem 5rem;
${setContainerForSmallDevice}
`;

