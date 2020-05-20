import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/DefaultTemplate';

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
        <Header4>Strategy</Header4>
        <ListContainerStyle>
          <ListItem>Product Strategy</ListItem>
          <li>Design Exploration</li>
          <li>Market Research</li>
          <li>Product Definition</li>
          <li>User Insights</li>
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
          <li>Design QA</li>
        </ListContainerStyle>
      </Cards>
      <Cards
        header={
          <RoundIconConatiner>
            <PagesIcon />
          </RoundIconConatiner>
        }
        primary>
        <Header4>Insights</Header4>
        <ListContainerStyle>
          <li>Target Customer Insights</li>
          <li>Analytics & Metrics tracking</li>
          <li>Reviews & Reports</li>
        </ListContainerStyle>
      </Cards>
    </DefaultTemplate>
  </>
  );
};

export default ServiceContainer;

