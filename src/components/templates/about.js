import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import Cards from '../organism/cards';
import Flex from 'styled-flex-component';
import Images from '../atoms/Images';
import { IMAGE } from '../constants/images';
import { AboutContentStyle, ImageContainer, ComponentContainer } from './about.style.js';
import { LaptopMacIcon, WbIncandescentIcon } from '../constants/styledIcons';


const AboutContainer = () => {
  return (<>
    <DefaultTemplate
      title={HEADER.ABOUT}
      line={HEADER.LINE}
      quote={HEADER.QUOTE}
      primary
      isWork
    >
      <ComponentContainer>
        <ImageContainer>
          <img style={{ width: '320px' }} src={IMAGE.creativity} /> <br></br><br></br>
          <h4 style={{ color: '#0C61A5' }}>We're Creative</h4>
        </ImageContainer>
        <ImageContainer><img style={{ width: '150px' }} src={IMAGE.professional} /> <br></br><br></br>
          <h4 style={{ color: '#0C61A5' }}>We're Professional</h4>
          </ImageContainer>
        <ImageContainer>
          <img style={{ width: '150px' }} src={IMAGE.efficient} /> <br></br><br></br>
          <h4 style={{ color: '#0C61A5' }}>We're Efficient</h4>
          </ImageContainer>
     </ComponentContainer>
    </DefaultTemplate>
  </>
  );
};
export default AboutContainer;
