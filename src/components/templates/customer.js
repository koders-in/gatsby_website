import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import Cards from '../organism/cards';
import Flex from 'styled-flex-component';
import { ReviewContainer } from './customer.style.js';

const CustomerContainer = () => {
  return ( <>
  <div id="testimonials">
    <DefaultTemplate
      title={ HEADER.CUSTOMER }
      isCustomer
    >
      <Flex column style={{width:'100%'}}>
        <Cards          
          secondary>
          <ReviewContainer>
            <h5 style={ { color: '#0C61A5'} } ><b>Jai agarwal (Managing Director, JaiG )</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"I am proud to be a part of a zealous team who always astonishes me with great results. I received exactly what we had planned together."</i></p>
          </ReviewContainer>
        </Cards>

        <Cards
          header={
            <ReviewContainer primary>
              <h5 style={ { color: '#0C61A5'} } ><b>DIT Student</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"Koders’s team was fully committed to delivering good quality work on time and also provided professional advice wherever you need help."</i></p>
            </ReviewContainer>
          }
          secondary >
         
        </Cards>

        <Cards secondary>   
          <ReviewContainer>
          <h5 style={ { color: '#0C61A5' } } ><b>Bradley B.</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"Excellent work - good communication - Understanding - Professional - Highly recommend!"</i></p>
          </ReviewContainer>
        </Cards>
      </Flex>
    </DefaultTemplate>
    </div>
  </>
  );
};
export default CustomerContainer;
