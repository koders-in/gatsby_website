import styled from "styled-components";
import Flex from 'styled-flex-component';
import media from 'styled-media-query';

const setStyleForSmallDevice = () =>
    media.lessThan('large')`
    width: 100%;
  `;


export const DefaultContainerStyle = styled.div`
 padding:  5rem ${props => props.primary && !props.isBlog ? 0 : '5rem' };
 display: block;
 text-align: center;
 background:${props => props.secondary ? 'rgba(0,0,0,0.7)' : 'none' }
`;
export const ContainerHeaderStyle = styled( Flex ).attrs( () => ( {
} ) )`;
justify-content: center!important;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
line-height: 2;
`;

export const ContainerContent = styled( Flex ).attrs( () => ( {
  alignCenter: true,
  full: true,
  row: true,
  justifyBetween: true,
} ) )`;
width: 100%;
height: auto;
flex-wrap: wrap;
${setStyleForSmallDevice}
`;

export const HeaderTextStyle = styled.div`
width: 65%;
margin-bottom: 3rem

`;

export const WorkContainerStyle= styled.div`
height: 450px;
width: 100%;`;

