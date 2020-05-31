import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { IMAGE } from '../constants/images';
import { ImageContainer, ComponentContainer, ImageView } from './about.style.js';



const AboutContainer = () => {
  return (<>
  <div id="about">
    <DefaultTemplate
      title={HEADER.ABOUT}
      line={HEADER.LINE}
      quote={HEADER.QUOTE}
      primary="true"
      isWork
    >
      <ComponentContainer>
        <ImageContainer>
          <ImageView  src={IMAGE.creativity} /><br></br><br></br>
          <span style={{ color: '#0C61A5' }}>We're Creative</span>
        </ImageContainer>
        <ImageContainer>
          <ImageView  src={IMAGE.professional} /> <br></br><br></br>
          <span style={{ color: '#0C61A5' }}>We're Proficient</span>
          </ImageContainer>
        <ImageContainer>
          <ImageView  src={IMAGE.efficient} /><br></br><br></br>
          <span style={{ color: '#0C61A5' }}>We're Efficient</span>
          </ImageContainer>
     </ComponentContainer>
    </DefaultTemplate>
    </div>
  </>
  );
};
export default AboutContainer;
