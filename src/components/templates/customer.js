import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import Cards from '../organism/cards';
import Flex from 'styled-flex-component';
import { ReviewContainer } from './customer.style.js';

const CustomerContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.CUSTOMER }
      isCustomer
    >
      <Flex column>
        <Cards          
          secondary>
          <ReviewContainer>
            <h5 style={ { color: '#0C61A5'} } ><b>Jai agarwal (Managing Director, JaiG )</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"I am proud to be a part of a zealous team who always astonishes me with great results. I received exactly what we had planned together. Thank you, Koders."</i></p>
          </ReviewContainer>
        </Cards>

        <Cards
          header={
            <ReviewContainer primary>
              <h5 style={ { color: '#0C61A5'} } ><b>DIT Student</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"The Software was developed in an organized manner. There was a methodical documentation and explanation of the code. Their walk through video proved very instrumental in learning the architecture of the software. Koders always had a cordial and happy-to-help attitude even under pressure."</i></p>
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
  </>
  );
};
export default CustomerContainer;
