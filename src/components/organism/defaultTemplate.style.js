import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';


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
width: 100 %;
height: auto;
padding: 0 ${props => props.primary ? 0 : '5rem' };
`;

export const HeaderTextStyle = styled.div`
width: 45%;
margin-bottom: 3rem

`;

