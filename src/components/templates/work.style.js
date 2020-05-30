import styled from "styled-components";
import Flex from 'styled-flex-component';


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
