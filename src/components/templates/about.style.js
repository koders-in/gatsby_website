import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';
import media from 'styled-media-query';

const setTextForSmallDevice = () =>
  media.lessThan( 'medium' )`
  `;

export const AboutContentStyle = styled.div`
  color: black;
  height: 150px;
  padding : 2rem;
  color: rgb(12, 97, 165);
  text-align: left;
  width: 100%;
 `;
 export const ImageContainer= styled( FlexItem ).attrs( () => ( { 
  alignCenter: true,
  full: true,
  row: true,
  justifyBetween: true,
} ) )`
  padding: 1rem;
  background-Color: #A9A9A9;
  height: 280px;
  border: solid;
  width: 100%;
  margin: 0 10px;
  ${setTextForSmallDevice}
 `;

 export const ImageView = styled.img`
  max-width: 90%;
  max-height: 60%;`;

 export const ComponentContainer = styled( Flex ).attrs( () => ( {
   row: true,
  } ) )`
 justify-content: space;
 margin: 0 30px;
 `;

