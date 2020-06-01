import styled from "styled-components";
import Flex from 'styled-flex-component';
import media from 'styled-media-query';

const setStyleForSmallDevice = () =>
    media.lessThan('large')`
    flex-direction: column;
    margin-left:5rem;
    justify-content: center;
  `;


export const CardsContainer = styled( Flex ).attrs( ( props ) => ( {
  row: true
} ) )`
width: 100%;
justify-content: center;
flex-direction: ${props => 'column' && props.primary};
justify-content: space-evenly;
${setStyleForSmallDevice}
`;

export const WorkContentStyle = styled.div`
  background-color: white;
  color: black;
  height: auto;
  padding : 0.6rem;
  text-align: left;
  color: rgb(12, 97, 165);
  text-align: center;
 `;
