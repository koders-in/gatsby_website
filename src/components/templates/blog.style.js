import styled from "styled-components";
import media from 'styled-media-query';
import Flex, { FlexItem } from 'styled-flex-component';

const setFormContainerForSmallDevice = () =>
  media.lessThan( 'medium' )`
    padding: 0;
  `;

const setBlogContainerItemStyleSmallDevice = () =>
  media.lessThan( 'medium' )`
    width:100%;
  `;

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
 `;

 export const BlogContainerItemStyle = styled.div`
 width: 33.33%;
 margin: 1rem;
 ${setBlogContainerItemStyleSmallDevice}
 `;
