import React from 'react';
import CardItems from '../atoms/cards';
import { CardHeaderStyle} from './cards.style';




const Cards = ( { children, header, primary, secondary, isWork } ) => {

  if ( secondary ) {
    return ( <CardItems primary={ primary } secondary={ secondary }>
      { header }
      { children }
    </CardItems> );
  }

  return (
    <CardItems primary={ primary }  >
      <CardHeaderStyle primary={ primary } isWork={isWork}>
        { header }
      </CardHeaderStyle>
      <CardHeaderStyle primary={ primary } isWork={isWork}>
        { children }
      </CardHeaderStyle>
    </CardItems> );
};

export default Cards;

