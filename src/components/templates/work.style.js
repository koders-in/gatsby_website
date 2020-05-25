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

export const WorkContainerItems = styled( Flex ).attrs( ( props ) => ( {} ) )`
width: 23%;
height: 240px;
color: black;
display: flex;
flex-direction: ${props => props.primary && 'column' };
&:hover {
 }
`;

export const WorkContainerCards = styled( FlexItem ).attrs( () => ( {

} ) )`
  width: ${props => props.secondary ? '50%' : '100%' };
  height: ${props => !props.primary && ' 100%' };
  color: black;
  background-color: white;
  margin: 0.5rem;
  z-index: -10;
 `;

export const WorkContainerInnerItems = styled( Flex ).attrs( () => ( {
  flex: '0 0 100%',
} ) )`
  width: 100%;
  height: 50%;
  color: black;
  margin: 0;
  padding: 0;
`;

export const WorkItems = styled.div`
  padding: 20px;
  margin-top: 20%;
`;
