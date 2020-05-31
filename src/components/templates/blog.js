import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import blog1 from '../../images/blog-post-3.jpg';
import { Link } from 'gatsby'


const BlogContainer = () => {
  return (<>
    <DefaultTemplate
      title={HEADER.BLOG}
      style={{ padding: '0 5rem' }}
      primary="true"
      isBlog
    >
      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src={blog1} alt="Card" />
        <div class="card-body" style={{textAlign: 'left'}}>
          <span>May 24, 2020</span><br/>
          <Link to='/blog-1'>Covid-19 and your forgotten quest to start a blog</Link>
        </div>
      </div>
    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
