import React from 'react';
import styled from "styled-components";
import  { FlexItem } from 'styled-flex-component';



const CardsStyle = styled( FlexItem ).attrs( () => ( {
} ) )`
  width: ${props => props.secondary ? '100%' : '30%' };
  margin-bottom: ${props => props.secondary && '3rem' };
  color: #FCF8FF;
  display: flex;
  flex-direction: ${props => props.primary || props.secondary ? 'row' : 'column' };
`;


const CardItems = ( { children, primary, secondary } ) => {
  return (
    <CardsStyle primary={ primary } secondary={ secondary }>
      { children }
    </CardsStyle> );
};

export default CardItems;

