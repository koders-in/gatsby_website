import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';

export const ServiceContainerStyle = styled( Flex ).attrs( () => ( {
  alignCenter: true,
  full: true,
  row: true,
  justifyBetween: true,
} ) )`
width: 100%;
height: auto;
padding: 2rem 5rem;
`;

export const ServiceContainerItems = styled( FlexItem ).attrs( () => ( {
} ) )`
  width: 33%;
  height: 200px;
  color: #FCF8FF;
  display: flex;
  flex-direction: row;

&:hover {
 }
`;

export const ServiceItems = styled.div`
  text-align: left;
  padding: 1rem
  background-color: ${props => props.theme.color.purple }
`;

export const RoundIconConatiner = styled.div`
  border: ${props => props.primary ? 'none' : '1px solid white' };
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: ${props => props.primary ? 'none' : '2.7' };
  text-align: center;
  object-fit: cover;

`;

export const ServiceTextStyle = styled( Flex ).attrs( () => ( {
} ) )`
  margin-top: 3rem;
  justify-content: center !important;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 2;

`;

export const ListContainerStyle = styled.ul`
  color: gray;
  `;

  export const ListItem =styled.li`
  &:before {
    content: "\2022";
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  `;

