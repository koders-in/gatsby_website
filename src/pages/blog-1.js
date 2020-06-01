import React from "react";
import DefaultTemplate from "../components/organism/defaultTemplate";
import { HEADER } from '../components/constants/header';

class BlogPage extends React.Component {
  render () {
    return (
      <>
      <div>
      <DefaultTemplate
      title={HEADER.BLOGTITLE}
      quote={HEADER.BLOGHEAD}
      primary="true"
      isBlog
      >
        </DefaultTemplate>
        </div>
      </>
    );
  }
};


export default BlogPage;
