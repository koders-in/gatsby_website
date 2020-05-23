import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';

import { LaptopMacIcon, DomainIcon, PagesIcon } from '../constants/styledIcons';
import { Header4, Paragraph } from '../atoms/header';
import { RoundIconConatiner, ListContainerStyle, ListItem } from './service.style';

import Cards from '../organism/cards';


const ServiceContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.SERVICE }
      quote={ HEADER.QUOTE }>
      <Cards
        header={
          <RoundIconConatiner>
            <LaptopMacIcon />
          </RoundIconConatiner>
        }
        primary
      >
        <Header4>Development</Header4>
        <ListContainerStyle>
          <li>Android Development</li>
          <li>iOS Development</li>
          <li>Web Development</li>
          <li>Software Development</li>
        </ListContainerStyle>
      </Cards>
      <Cards
        header={
          <RoundIconConatiner>
            <DomainIcon />
          </RoundIconConatiner>
        }
        primary>
        <Header4>Design</Header4>
        <ListContainerStyle>
          <li>User Experience Design</li>
          <li>Interaction Design</li>
          <li>Visual Design</li>
        </ListContainerStyle>
      </Cards>
      <Cards
        header={
          <RoundIconConatiner>
            <PagesIcon />
          </RoundIconConatiner>
        }
        primary>
        <Header4>IT Solutions</Header4>
        <ListContainerStyle>
          <li>Customer Insights</li>
          <li>Software Support</li>
          <li>Reviews & Reports</li>
        </ListContainerStyle>
      </Cards>
    </DefaultTemplate>
  </>
  );
};

export default ServiceContainer;

