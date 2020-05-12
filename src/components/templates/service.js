import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/DefaultTemplate';

import { LaptopMacIcon, DomainIcon, PagesIcon } from '../constants/styledIcons';
import { Header4, Paragraph } from '../atoms/header';
import { RoundIconConatiner } from './service.style';

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
        <Paragraph primary>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</Paragraph>
      </Cards>
      <Cards
        header={
          <RoundIconConatiner>
            <DomainIcon />
          </RoundIconConatiner>
        }
        primary>
        <Header4>Design</Header4>
        <Paragraph primary>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</Paragraph>
      </Cards>
      <Cards
        header={
          <RoundIconConatiner>
            <PagesIcon />
          </RoundIconConatiner>
        }
        primary>
        <Header4>Development</Header4>
        <Paragraph primary>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</Paragraph>
      </Cards>
    </DefaultTemplate>
  </>
  );
};

export default ServiceContainer;

