import React from 'react';
import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';



const ImageStyle = styled.img`
width: ${props => props.primary ? '100%' : '20%' };
height: 150px;
background-color:  ${props => props.theme.color.red }
`;


const Image = ( props ) => {
  return ( <ImageStyle { ...props }
    alt='image'
  ></ImageStyle> );
};

export default Image;

