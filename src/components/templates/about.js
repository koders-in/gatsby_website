import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { IMAGE } from '../constants/images';
import { ImageContainer, ComponentContainer } from './about.style.js';



const AboutContainer = () => {
  return (<>
    <DefaultTemplate
      title={HEADER.ABOUT}
      line={HEADER.LINE}
      quote={HEADER.QUOTE}
      primary="true"
      isWork
    >
      <ComponentContainer>
        <ImageContainer>
          <img style={{ width: '320px' }} src={IMAGE.creativity} alt="creativity" /> <br></br><br></br>
          <h4 style={{ color: '#0C61A5' }}>We're Creative</h4>
        </ImageContainer>
        <ImageContainer><img style={{ width: '150px' }} src={IMAGE.professional} alt="professional"/> <br></br><br></br>
          <h4 style={{ color: '#0C61A5' }}>We're Professional</h4>
          </ImageContainer>
        <ImageContainer>
          <img style={{ width: '150px' }} src={IMAGE.efficient} alt="efficient" /> <br></br><br></br>
          <h4 style={{ color: '#0C61A5' }}>We're Efficient</h4>
          </ImageContainer>
     </ComponentContainer>
    </DefaultTemplate>
  </>
  );
};
export default AboutContainer;
