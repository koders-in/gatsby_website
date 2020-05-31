import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { BlogContentStyle } from './blog.style';
import blog1 from '../../images/blog-post-3.jpg';
import { Link } from 'gatsby'
import Cards from '../organism/cards';


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
          <img src={blog1} alt="Blog 1"/>
        }>
        <BlogContentStyle>
          <div style={{
            marginTop: '10px',
            marginBottom: '10px',
            color: 'grey'
          }} ><span>May 24, 2020</span></div>
          <Link to='/blog-1'>Covid-19 and your forgotten quest to start a blog</Link>
        </BlogContentStyle>
      </Cards>

    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
