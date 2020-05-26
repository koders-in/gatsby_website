import styled, { keyframes } from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';


const rotate = keyframes``;
// `
//   from {
//     transform: translateZ(0px) translateY(0%);
//   }

//   to {
//     transform: translateZ(0px) translateY(-2.22222%);
//   }
// `;

export const CardSContainer = styled( Flex ).attrs( ( props ) => ( {
  row: true
} ) )`
width: 100%;
justify-content: center;
flex-direction: ${props => props.primary && 'column' };
&:hover {
 }
`;

export const WorkContentStyle = styled.div`
  background-color: white;
  color: black;
  height: auto;
  padding : 0.6rem;
  text-align: left;
  color: rgb(12, 97, 165);
  text-align: center;
  width: 350px;
 `;
