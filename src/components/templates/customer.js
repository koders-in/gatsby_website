import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import Cards from '../organism/cards';
import Flex from 'styled-flex-component';
import { ReviewContainer, ImageContainer } from './customer.style.js';
import Images from '../atoms/Images';

const CustomerContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.CUSTOMER }
      quote={ HEADER.QUOTE }
      isCustomer
    >
      <Flex column>
        <Cards
          
          secondary>
          <ReviewContainer>
            <h5 style={ { color: '#0C61A5'} } ><b>Jai agarwal (Managing Director, JaiG )</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"I am glad that we have such a zealous team who always astonish us with
      there amazing work out of what we have planned forth. "</i></p>
          </ReviewContainer>
        </Cards>

        <Cards
          header={
            <ReviewContainer primary>
              <h5 style={ { color: '#0C61A5'} } ><b>DIT Student</b><br></br></h5>
            <p style={ { color: 'grey' } } ><i>"Their project is delivered with proper documentation and proper explanation of the code. Their codial service is a great way to get work done within a deadline"</i></p>
            </ReviewContainer>
          }
          secondary >
         
        </Cards>

        <Cards
          
          secondary>
          
        
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
