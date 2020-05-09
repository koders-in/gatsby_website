import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';

export const AboutContainerCard = styled( Flex ).attrs( () => ( {
  alignCenter: true,
  full: true,
  row: true,
  justifyBetween: true,
} ) )`
width: 100%;
height: auto;
padding: 2rem 5rem;
`;

export const AboutContainerItems = styled( FlexItem ).attrs( () => ( {
} ) )`

  width: 33%;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 20px;


&:hover {
 }
`;

export const AboutItems = styled.div`
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

export const AboutTextContainer = styled.div`

`;
