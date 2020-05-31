import React from 'react';
import { DefaultSection } from '../atoms/container';
import {
  ContainerHeaderStyle, ContainerContent,
  DefaultContainerStyle, HeaderTextStyle
} from './defaultTemplate.style';
import { Header1, Header4, Paragraph } from '../atoms/header';

const DefaultTemplate = ({ children, line, isWork, title, quote, primary, secondary, isCustomer, isBlog }) => {
  return (
    <DefaultSection primary={primary} secondary={secondary}  >
      <DefaultContainerStyle primary={primary || isCustomer} secondary={secondary} isBlog={isBlog} >
        <ContainerHeaderStyle >
          <HeaderTextStyle>
            <Header1>{title}</Header1>
            <Header4 blue>{line}</Header4>
            <Paragraph>{quote}</Paragraph>
          </HeaderTextStyle>
        </ContainerHeaderStyle>
        <div className="container">
          {isWork ?
            children :
            <ContainerContent primary={primary}>
              {children}
            </ContainerContent>}
        </div>
      </DefaultContainerStyle>
    </DefaultSection >);
};

export default DefaultTemplate;

