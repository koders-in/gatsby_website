import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/DefaultTemplate';
import { BlogHeaderStyle, BlogContentStyle } from './blog.style';
import Cards from '../organism/cards';
import Image from '../atoms/image';

const BlogContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.BLOG }
      quote={ HEADER.QUOTE }
      style={ { padding: '0 5rem' } }
      primary
      isBlog
    >
      <Cards
        header={
          <BlogHeaderStyle>
            <Image primary></Image>
          </BlogHeaderStyle>
        }>
        <BlogContentStyle>
          <div style={ {
            marginBottom: '10px',
            color: 'grey'
          } }><span>July 12, 2018 Admin  3</span></div>
          <p>Even the all-powerful Pointing has no control about the blind texts</p>
        </BlogContentStyle>
      </Cards>
      <Cards
        header={
          <BlogHeaderStyle>
            <Image primary></Image>
          </BlogHeaderStyle>
        }>
        <BlogContentStyle>
          <div style={ {
            marginBottom: '10px',
            color: 'grey'
          } }><span>July 12, 2018 Admin  3</span></div>
          <p>Even the all-powerful Pointing has no control about the blind texts</p>
        </BlogContentStyle>
      </Cards>
      <Cards
        header={
          <BlogHeaderStyle>
            <Image primary></Image>
          </BlogHeaderStyle>
        }>
        <BlogContentStyle>
          <div style={ {
            marginBottom: '10px',
            color: 'grey'
          } }><span>July 12, 2018 Admin  3</span></div>
          <p>Even the all-powerful Pointing has no control about the blind texts</p>
        </BlogContentStyle>
      </Cards>
    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
