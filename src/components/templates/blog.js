import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { BlogHeaderStyle, BlogContentStyle } from './blog.style';
import blog1 from '../../images/blog-post-3.jpg';
import { Link } from 'gatsby'
import Cards from '../organism/cards';
import Images from '../atoms/Images';
import blogPage from "../../pages/blog-1.js";

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
            <img src={blog1} />
            
          </BlogHeaderStyle>
        }>
        <BlogContentStyle>
          <div style={ {
            marginTop:'10px',
            marginBottom: '10px',
            color: 'grey'
          } } ><span>May 24, 2020</span></div>
          <p>Covid-19 and your forgotten quest to start a blog</p>
        </BlogContentStyle>
      </Cards>
      
    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
