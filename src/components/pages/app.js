import React from "react";
import PropTypes from "prop-types";

import WorkContainer from '../templates/work';
import ServiceContainer from '../templates/service';
import AchievementContainer from '../templates/achievement';
import BlogContainer from '../templates/blog';
import CustomerContainer from '../templates/customer';
import ContactUsContainer from '../templates/contactUs'
import websiteIcon from '../../images/website-icon.png';
import { RoundIconConatiner } from '../templates/service.style';
import Image from '../atoms/Images';

import { HeaderContainer, HeaderContainerText , InnerContentContainer} from '../templates/dashboard.style';

import FooterContainer from '../organism/footer.js';
class DashboardPage extends React.Component {
  render () {
    return (
      <>
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" style={ { backgroundColor: '#070707' } }>
            <div className="mx-auto order-0">
              <a className="navbar-brand mx-auto text-white" href="#">
                <RoundIconConatiner primary><Image src={ websiteIcon }
                /></RoundIconConatiner>
              </a>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <HeaderContainer>
          <HeaderContainerText data-sal="slide-up" data-sal-delay="500" data-sal-easing="linear">
            <InnerContentContainer>
              <h1 className="mb-4" style={{color:'#0C61A5'}}>Koders</h1>
              <p className="mb-4 text-white" >Whether you are Fortune-500 or a start-up, we at Koders help you to unlock various business opportunities by creating client-centered products that add value to your business and pave the way for success.</p>
            </InnerContentContainer>
          </HeaderContainerText>
        </HeaderContainer>
        <main id="main">
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
