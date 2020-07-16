import React from "react";
import DefaultTemplate from '../organism/defaultTemplate';
import { HEADER } from '../constants/header';
import blog1 from '../../images/blog-post-3.jpg';
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
            
            <a href='/development-tool' target="_blank" rel="norefferer">{HEADER.DEVELOPMENT_TOOL}</a>
          </div>
        </BlogContainerItemStyle>
        <BlogContainerItemStyle className="card">
          <img className="card-img-top" src={blogImg1} alt="Card" />
          <div className="card-body" style={{ textAlign: 'left' }}>
            <span>June 11, 2020</span><br />
            <a href='/online-business' target="_blank" rel="norefferer">{HEADER.ONLINE_BUSINESS}</a>
          </div>
        </BlogContainerItemStyle>
        <BlogContainerItemStyle className="card">
          <img className="card-img-top" src={blogImg2} alt="Card" />
          <div className="card-body" style={{ textAlign: 'left' }}>
            <span>June 22, 2020</span><br />
            <a href='/software-development' target="_blank" rel="norefferer">{HEADER.SOFTWARE_DEVELOPMENT}</a>
          </div>
        </BlogContainerItemStyle>
      </BlogContainerStyle>
    </DefaultTemplate>
  </>
  );
};
export default BlogContainer;
