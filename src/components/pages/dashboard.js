/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ImageContainer, ImageStyle, Container } from './dashboard.style';
import background from '../../images/background.jpg';


const DashboardPage = ( { children } ) => {
  const data = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log( background );

  return (
    <>
      <Container className="mbr-fullscreen mbr-parallax-background" >
        {/* //navbar navbar-dark bg-dark */ }
        <nav class="navbar navbar-expand-md p-4">
          <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#">logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="row align-items-center justify-content-center h-75">
          <div class="col-md-7 text-center">
            <h1 class="mb-4 text-white">Mighty Web Design Agency</h1>
            <p class="mb-4 text-white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
          </div>
        </div>


        <ImageContainer>
          <ImageStyle
            src={ background }
            alt='background-img'
          />

        </ImageContainer>


      </Container>
      <Container>


      </Container>
    </>
  );
};

DashboardPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardPage;
