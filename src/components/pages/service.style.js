import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';

export const ServiceContainer = styled( Flex ).attrs( () => ( {
  alignCenter: true,
  full: true,
  row: true,
  justifyBetween: true,
} ) )`

width: 100%;
height: auto;
padding: 0 5rem;
`;

export const ServiceContainerItems = styled( FlexItem ).attrs( () => ( {
} ) )`
width: 33%;
height: 240px;
color: #FCF8FF;
display: flex;
flex-direction: row;

&:hover {
 }
`;

export const ServiceItems = styled.div`
  text-align: left;
  padding: 1rem
`;

export const RoundIconConatiner = styled.div`
  border: 1px solid white;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 2.7;
  text-align: center;

`;
