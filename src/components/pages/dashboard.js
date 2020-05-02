/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";


import { ImageContainer, ImageStyle, Container, MainContainer, MiddleText, BackgroundImageStyle } from './dashboard.style';
import { ServiceContainer, ServiceContainerItems, ServiceItems } from './service.style';

import background from '../../images/background.jpg';
import background1 from '../../images/background1.jpg';


const DashboardPage = ( { children } ) => {

  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" style={ { backgroundColor: '#333333' } }>
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
      <MainContainer>
        <Container style={ { position: 'fixed' } }>
          <MiddleText className="row align-items-center justify-content-center h-100">
            <div className="col-md-7 text-center">
              <h1 className="mb-4 text-white">Mighty Web Design Agency</h1>
              <p className="mb-4 text-white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
            </div>
          </MiddleText>


          <ImageContainer>
            <ImageStyle
              src={ background }
              alt='background-img'
            />
          </ImageContainer>


        </Container>

        <Container primary style={ { marginTop: '100%' } }>
          <div style={ { width: '100%', height: '200px' } }>

          </div>


        </Container>
        <Container primary style={ { backgroundColor: 'rgb(51, 51, 51)', color: 'white' } }>
          <h1>Our Services</h1>
          <ServiceContainer>

            <ServiceContainerItems>
              <ServiceItems>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>

            <ServiceContainerItems>
              <ServiceItems>
                <h4>Graphic Design</h4>
                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>

            <ServiceContainerItems>
              <ServiceItems>
                <h4>App Design</h4>
                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>

            <ServiceContainerItems>
              <ServiceItems>
                <h4>Ecommerce</h4>
                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
              </ServiceItems>
            </ServiceContainerItems>
          </ServiceContainer>


        </Container>

        <Container primary style={ { position: 'fixed' } }>
          <div style={ {  } }>
              {/* <BackgroundImageStyle
                src={ background }
                alt='background-img'
              /> */}
          </div>


        </Container>
        <Container primary style={ {marginTop: '200px', backgroundColor: 'rgb(51, 51, 51)' } }>
          <div style={ { width: '100%', height: '200px' } }>

          </div>


        </Container>
      </MainContainer>
    </>
  );
};

DashboardPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardPage;
