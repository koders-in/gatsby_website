import React from 'react';
import styled from "styled-components";
import  { FlexItem } from 'styled-flex-component';
import media from 'styled-media-query';

const setStyleForSmallDevice = () =>
    media.lessThan('large')`
    flex-direction: column;
  `;
const setCardStyleForSmallDevice = () =>
  media.lessThan('large')`
  width: 100%;
`;

const CardsStyle = styled( FlexItem ).attrs( () => ( {
} ) )`
  width: ${props => props.secondary ? '100%' : '30%' };
  margin-bottom: ${props => props.secondary && '3rem' };
  color: #FCF8FF;
  display: flex;
  flex-direction: ${props => props.primary || props.secondary ? 'row' : 'column' };
  ${props => props.isService && setStyleForSmallDevice()}
  ${setCardStyleForSmallDevice}
`;


const CardItems = ( { children, primary, secondary , isService} ) => {
  return (
    <CardsStyle primary={ primary } secondary={ secondary } isService={isService}>
      { children }
    </CardsStyle> );
};

export default CardItems;

