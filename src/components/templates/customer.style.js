import styled from "styled-components";
import media from 'styled-media-query';

const setTextForSmallDevice = () =>
  media.lessThan('medium')`
  
  `;

export const ReviewContainer = styled.div`
height: 90px;
width: 100%;
padding-right:10px;
text-align: ${props => props.primary ? 'right' : 'left'};
${setTextForSmallDevice}
`;

/*export const ImageContainer= styled.div`
background-color: #0C61A5;
width: 20%;
150px;

`;
*/