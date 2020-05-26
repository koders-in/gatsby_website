import React from 'react';
import { DefaultSection } from '../atoms/container';
import {
  ContainerHeaderStyle, ContainerContent,
  DefaultContainerStyle, HeaderTextStyle
} from './defaultTemplate.style';
import { Header1, Paragraph } from '../atoms/header';

const DefaultTemplate = ({ children, isWork, title, quote, primary, secondary, isCustomer, isBlog }) => {
  return (
    <DefaultSection primary={primary} secondary={secondary}  >
      <DefaultContainerStyle primary={primary || isCustomer} secondary={secondary} isBlog={isBlog} >
        <ContainerHeaderStyle >
          <HeaderTextStyle>
            <Header1>{title}</Header1>
            <Paragraph>{quote}</Paragraph>
          </HeaderTextStyle>
        </ContainerHeaderStyle>
        {isWork ?
          children :
          <ContainerContent primary={primary}>
            {children}
          </ContainerContent>}
      </DefaultContainerStyle>
    </DefaultSection >);
};

export default DefaultTemplate;

