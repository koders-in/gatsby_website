import React from 'react';
import styled from "styled-components";
import Flex, { FlexItem } from 'styled-flex-component';

import CardItems from '../atoms/cards';

import { CardHeaderStyle, CardContentStyle } from './cards.style';




const Cards = ( { children, header, primary, secondary } ) => {

  if ( secondary ) {
    return ( <CardItems primary={ primary } secondary={ secondary }>
      { header }
      { children }
    </CardItems> );
  }

  return (
    <CardItems primary={ primary } >
      <CardHeaderStyle primary={ primary }>
        { header }
      </CardHeaderStyle>
      <CardHeaderStyle primary={ primary }>
        { children }
      </CardHeaderStyle>
    </CardItems> );
};

export default Cards;

