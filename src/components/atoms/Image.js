import React from 'react';
import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';



const ImageStyle = styled.img`
width: ${props => props.primary ? '100%' : '20%' };
height: 150px;
background-color:  #E43C5C;
`;


const Image = ( props ) => {
  return ( <ImageStyle { ...props }
    alt='image'
  ></ImageStyle> );
};

export default Image;

