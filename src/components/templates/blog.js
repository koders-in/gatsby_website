import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { BlogHeaderStyle, BlogContentStyle } from './blog.style';
import blog1 from '../../images/blog-post-3.jpg';
import { Link } from 'gatsby'
import Cards from '../organism/cards';
import Images from '../atoms/Images';
import blogPage from "../../pages/blog-1.js";
import { CovidBlog } from '../constants/blogLinks'

const BlogContainer = () => {
  return (<>
    <DefaultTemplate
      title={HEADER.BLOG}
      quote={HEADER.QUOTE}
      style={{ padding: '0 5rem' }}
      primary
      isBlog
    >
      <Cards
        header={
          <img src={blog1} />
        }>
        <BlogContentStyle>
          <div style={{
            marginTop: '10px',
            marginBottom: '10px',
            color: 'grey'
          }} ><span>May 24, 2020</span></div>
          <a href={CovidBlog}><span>Covid-19 and your forgotten quest to start a blog</span></a>
        </BlogContentStyle>
      </Cards>

    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
