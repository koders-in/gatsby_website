import React from "react";
import PropTypes from "prop-types";

import WorkContainer from '../templates/work';
import ServiceContainer from '../templates/service';
import AchievementContainer from '../templates/achievement';
import BlogContainer from '../templates/blog';
import CustomerContainer from '../templates/customer';

import { HeaderContainer, HeaderContainerText } from '../templates/dashboard.style';

import FooterContainer from '../organism/footer.js';
class DashboardPage extends React.Component {
  render () {
    return (
      <>
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" style={ { backgroundColor: '#070707', padding: '1rem' } }>
            <div className="mx-auto order-0">
              <a className="navbar-brand mx-auto text-white" href="#">logo</a>
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
            <h1 className="mb-4 text-white">Mighty Web Design Agency</h1>
            <p className="mb-4 text-white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
          </HeaderContainerText>
        </HeaderContainer>
        <main id="main">
          <ServiceContainer />
          <WorkContainer />
          <AchievementContainer />
          <CustomerContainer />
          <BlogContainer />
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
