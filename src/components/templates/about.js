import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import Cards from '../organism/cards';
import Flex from 'styled-flex-component';
import Images from '../atoms/Images';
import { IMAGE } from '../constants/images';
import { AboutContentStyle,ImageContainer,ComponentContainer} from './about.style.js';


const AboutContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.ABOUT }
      quote={ HEADER.QUOTE }
      primary
      isCustomer
    >
      <Flex column>
        <Cards
          header={
            <ImageContainer>
                <Images src={IMAGE.background}/>
            </ImageContainer>
           
          }
          secondary>
          <AboutContentStyle>
          <h5 style={ { color: '#0C61A5' } } ><b> We strive to make the best for our customers.</b><br></br><br></br></h5>
            <p style={ { color: 'grey' } } >Koders is a software development company that provides a real world solution to your ideas. We firmly believe in turning ideas into products by providing good quality services within required deadlines. We create client centered services using the latest technologies and the energy and efforts of our whole team. Koders stand together with our clients to be the inspiration we seek..</p>
          </AboutContentStyle>
        </Cards>
        <Cards
          secondary>
               <ComponentContainer>
                
                <div style={{
                    paddingTop:'1.7rem',
            marginRight:'0.6rem',
            backgroundColor:'#A9A9A9',
            height: '280px',
            border:'solid'
          }} >
                <img style={{width:'320px'}} src={IMAGE.creativity} alt="Creativity"/> <br></br><br></br>
              <h4 style={{color:'#0C61A5'}}>We're Creative</h4>
          </div>  
            </ComponentContainer>   
              <ComponentContainer>
          <div style={{
            padding: '1.7rem',
            marginRight:'0.6rem',
            backgroundColor:'#A9A9A9',
            height: '280px',
            border:'solid'
          }} ><img style={{width:'150px'}} src={IMAGE.professional} alt="Professional"/> <br></br><br></br>
              <h4 style={{color:'#0C61A5'}}>We're Professional</h4></div>
        </ComponentContainer>
        <ComponentContainer>
        <div style={{
            padding: '1.7rem',
            marginRight:'0.6rem',
            backgroundColor:'#A9A9A9',
            height: '280px',
            border:'solid'
          }} ><img style={{width:'150px'}} src={IMAGE.efficient} alt="Efficient"/> <br></br><br></br>
              <h4 style={{color:'#0C61A5'}}>We're Efficient</h4></div>
        </ComponentContainer>
            
        </Cards>  
      </Flex>
    </DefaultTemplate>
  </>
  );
};
export default AboutContainer;
