import React from "react";
import PropTypes from "prop-types";

import { LaptopMacIcon, DomainIcon, PagesIcon } from '../constants/styledIcons';

import { HeaderContainer, Container, HeaderContainerText, AboutUsContainer } from './dashboard.style';
import { ServiceContainer, ServiceContainerItems, ServiceItems, RoundIconConatiner, ServiceTextStyle } from './service.style';

import { AboutContainerCard, AboutContainerItems, AboutTextContainer } from './about.style';

import FooterContainer from '../organism/footer.js';


import WorkDefaultContainer from './workContainer';


const DashboardPage = ( { children } ) => {

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

        <Container primary style={ { backgroundColor: '#1A1A1A', color: 'white' } }>
          <ServiceTextStyle>
            <div style={ { width: '40%' } }>
              <h1 style={ { marginBottom: '1.5rem' } }>Web <span style={ { color: '#E43C5C' } }>&</span> Mobile app design, bring your ideas to life</h1>
              <p style={ { color: '#DCDCDC' } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
            </div>
          </ServiceTextStyle>
          <ServiceContainer>
            <ServiceContainerItems>
              <ServiceItems >
                <RoundIconConatiner>
                  <LaptopMacIcon />
                </RoundIconConatiner>
              </ServiceItems>
              <ServiceItems>
                <h4>Strategy</h4>
                <p style={ { color: 'grey' } }>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>

            <ServiceContainerItems>
              <ServiceItems>
                <RoundIconConatiner>
                  <DomainIcon />
                </RoundIconConatiner>
              </ServiceItems>
              <ServiceItems>
                <h4>Design</h4>
                <p style={ { color: 'grey' } }>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>

            <ServiceContainerItems>
              <ServiceItems>
                <RoundIconConatiner>
                  <PagesIcon />
                </RoundIconConatiner>
              </ServiceItems>
              <ServiceItems>
                <h4>Development</h4>
                <p style={ { color: 'grey' } }>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>

          </ServiceContainer>
        </Container>

        <WorkDefaultContainer />



        <Container primary secondary >
          <AboutUsContainer>
            <ServiceTextStyle>
              <div style={ { width: '40%' } }>
                <h1 style={ { marginBottom: '1.5rem', color: 'white' } }>Our achievements</h1>
                <p style={ { color: '#DCDCDC' } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
              </div>
            </ServiceTextStyle>
            <AboutContainerCard>
              <AboutContainerItems>
                <strong style={ { fontSize: '35px', color: '#E43C5C' } }>400</strong>
                <span>Customers are satisfied with our professional support</span>
              </AboutContainerItems>
              <AboutContainerItems >
                <strong style={ { fontSize: '35px', color: '#E43C5C' } }>1000</strong>
                <span>Amazing preset options to be mixed and combined</span>
              </AboutContainerItems>
              <AboutContainerItems >
                <strong style={ { fontSize: '35px', color: '#E43C5C' } }>8000</strong>
                <span>Average response time on live chat support channel</span>
              </AboutContainerItems>

            </AboutContainerCard>
          </AboutUsContainer>
        </Container>


        <Container primary style={ { marginTop: '0', backgroundColor: '#1A1A1A' } }>
          <div style={ { width: '100%', height: '200px' } }>
            <h1 className="mb-4 text-white"> Our Team</h1>

          </div>


        </Container>
        <Container primary style={ { marginTop: '0', backgroundColor: '#070707' } }>
          <div style={ { width: '100%', height: '200px' } }>
            <h1 className="mb-4 text-white">Our satisfied customer says</h1>

          </div>


        </Container>

      </main>
      <FooterContainer />
    </>
  );
};

DashboardPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardPage;
