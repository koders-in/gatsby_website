import React from "react";
import PropTypes from "prop-types";

import WorkContainer from '../templates/work';
import ServiceContainer from '../templates/service';
import AchievementContainer from '../templates/achievement';
import BlogContainer from '../templates/blog';
import CustomerContainer from '../templates/customer';
import ContactUsContainer from '../templates/contactUs';
import AboutContainer from '../templates/about';
import NavContainer from '../templates/nav';

import { HeaderContainer, HeaderContainerText , InnerContentContainer} from '../templates/dashboard.style';

import FooterContainer from '../organism/footer.js';
class DashboardPage extends React.Component {
  
  render () {
    return (
      <>
        <NavContainer/>
        <HeaderContainer>
          <HeaderContainerText data-sal="slide-up" data-sal-delay="500" data-sal-easing="linear">
            <InnerContentContainer>
              <h1 className="mb-4" style={{color:'#0C61A5'}}>Koders</h1>
              <p className="mb-4 text-white" >Whether you are Fortune-500 or a start-up, we at Koders help you to unlock various business opportunities by creating client-centered products that add value to your business and pave the way for success.</p>
            </InnerContentContainer>
          </HeaderContainerText>
        </HeaderContainer>
        <main id="main">
          <AboutContainer/>
          <ServiceContainer />
          <WorkContainer />
          <AchievementContainer />
         <CustomerContainer /> 
          <BlogContainer />
          <ContactUsContainer/>
        </main>
        <FooterContainer />
      </>
    );
  }
};

DashboardPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardPage;
