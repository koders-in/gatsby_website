import React from 'react';
import styled from "styled-components";




const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  z-index: -1;
`;


const Images= ( props ) => {
  return ( <ImageStyle { ...props }
    alt='image'
  ></ImageStyle> );
};

export default Images;

