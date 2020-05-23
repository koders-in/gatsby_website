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
          header={
            <ImageContainer>
              <Images></Images>
            </ImageContainer>
          }
          secondary>
          <ReviewContainer>
            <p style={ { color: 'grey' } } >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
          </ReviewContainer>
        </Cards>

        <Cards
          header={
            <ReviewContainer primary>
              <p style={ { color: 'grey' } } >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            </ReviewContainer>
          }
          secondary >
          <ImageContainer>
            <Images></Images>
          </ImageContainer>
        </Cards>

        <Cards
          header={
            <ImageContainer>
              <Images></Images>
            </ImageContainer>
          }
          secondary>
          <ReviewContainer>
            <p style={ { color: 'grey' } } >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
          </ReviewContainer>
        </Cards>
      </Flex>
    </DefaultTemplate>
  </>
  );
};
export default CustomerContainer;
