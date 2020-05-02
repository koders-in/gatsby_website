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
width: 23%;
height: 240px;
color: black;
background-color: white;


&:hover {
  background-color: #F6F5F5;
 }
`;

export const ServiceItems = styled.div`
padding: 20px;
margin-top: 20%;
`;
