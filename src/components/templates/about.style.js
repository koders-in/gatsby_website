import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';

export const AboutContentStyle = styled.div`
  color: black;
  height: 150px;
  padding : 2rem;
  color: rgb(12, 97, 165);
  text-align: left;
  width: 100%;
 `;
 export const ImageContainer= styled( FlexItem ).attrs( () => ( { } ) )`
  padding: 1.7rem;
  background-Color: #A9A9A9;
  height: 280px;
  border: solid;
  width: 33.33%;
  margin: 0 10px;
 `;

 export const ComponentContainer = styled( Flex ).attrs( () => ( {
   row: true,
  } ) )`
 justify-content: space;
 margin: 0 30px;
 `;

