import styled from "styled-components";
import media from 'styled-media-query';
import Flex, { FlexItem }  from 'styled-flex-component';

const setFormContainerForSmallDevice = () =>
  media.lessThan( 'medium' )`
    padding: 0;
  `;

const setBlogContainerItemStyleSmallDevice = () =>
  media.lessThan( 'medium' )`
    width:100%;
    margin: 0;
  `;


  const setTextForSmallDevice = () =>
  media.lessThan( 'medium' )`
  width:100%;
  padding: 0 1em;
  `;


  export const ImageContainer= styled( FlexItem ).attrs( () => ( { 
    alignCenter: true,
    full: true,
    row: true,
    justifyBetween: true,
  } ) )`
    padding: 1rem;
    width: 100%;
    margin: 0 10px;
    ${setTextForSmallDevice}
   `;
  export const ImageView = styled.img`
  max-width: 100%;
  max-height: 80%;`;

export const BlogPragraph = styled.div`
    width: 100%;
    text-align: left;
    padding: 0 7em;
    ${setFormContainerForSmallDevice}
`;

export const BlogSpan = styled.div`
    color: #dd1717;
`;

export const BlogContainerStyle = styled( Flex ).attrs( () => ( { 
  row: true,
} ) )`
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
 `;

 export const BlogContainerItemStyle = styled.div`
 width: 30%;
 margin: 1rem;
 ${setBlogContainerItemStyleSmallDevice}
 `;
