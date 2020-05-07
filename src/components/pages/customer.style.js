import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';

export const CustomerContainer = styled( Flex ).attrs( () => ( {
  alignCenter: true,
  full: true,
  row: true,
  justifyBetween: true,
} ) )`
width: 100%;
height: 240px;
padding: 2rem 5rem;
`;

export const ImageContainer = styled.div`
width: 20%;
height: 150px;
background-color: white;

`;

export const ReviewContainer = styled.div`
text-align: ${props => props.primary ? 'right' : 'left' };
height: 150px;
width: 80%;
padding: 0 1.5rem;

`;
