import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import blog1 from '../../images/blog-post-3.jpg';
import { Link } from 'gatsby'
import { BlogContainerStyle, BlogContainerItemStyle } from './blog.style';
import blogImg1 from '../../images/blog-post-1.jpg';
import blogImg2 from '../../images/background3.jpeg';

const BlogContainer = () => {
  return (<>
    <DefaultTemplate
      title={HEADER.BLOG}
      style={{ padding: '0 5rem' }}
      primary="true"
      isBlog
      isWork
    >
      <BlogContainerStyle>
        <BlogContainerItemStyle className="card">
          <img className="card-img-top" src={blog1} alt="Card" />
          <div className="card-body" style={{ textAlign: 'left' }}>
            <span>June 7, 2020</span><br />
            <Link to='/development-tool'>{HEADER.DEVELOPMENT_TOOL}</Link>
          </div>
        </BlogContainerItemStyle>
        <BlogContainerItemStyle className="card">
          <img className="card-img-top" src={blogImg1} alt="Card" />
          <div className="card-body" style={{ textAlign: 'left' }}>
            <span>June 11, 2020</span><br />
            <Link to='/online-business'>{HEADER.ONLINE_BUSINESS}</Link>
          </div>
        </BlogContainerItemStyle>
        <BlogContainerItemStyle className="card">
          <img className="card-img-top" src={blogImg2} alt="Card" />
          <div className="card-body" style={{ textAlign: 'left' }}>
            <span>June 22, 2020</span><br />
            <Link to='/software-development'>{HEADER.SOFTWARE_DEVELOPMENT}</Link>
          </div>
        </BlogContainerItemStyle>
      </BlogContainerStyle>
    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
