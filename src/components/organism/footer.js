import React from "react";
import PropTypes from "prop-types";
import { FooterContainerStye } from './footer.style';
import { FacebookCircleIcon, InstagramIcon, TwitterIcon } from '../constants/styledIcons';

class FooterContainer extends React.Component {
  render() {
    return (
      <footer primary style={{
        backgroundColor: '#000000', padding: ' 8em 0',
        color: 'grey'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{ lineHeight: '2' }}>
              <h2 className="footer-heading mb-4 text-white">Quick Links</h2>
              <ul className="list-unstyled" >
                <li><a href="#" style={{ color: '#0C61A5' }}>About Us</a></li>
                <li><a href="#" style={{ color: '#0C61A5' }}>Testimonials</a></li>
                <li><a href="#" style={{ color: '#0C61A5' }}>Terms of Service</a></li>
                <li><a href="#" style={{ color: '#0C61A5' }}>Privacy</a></li>
                <li><a href="#" style={{ color: '#0C61A5' }}>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-8 ml-auto mt-5">
              <div className="row">
                <div className="col-lg-10" style={{ textAlign: 'right' }}>
                  <a href="#" style={{ paddingRight: '1.7rem' }}><FacebookCircleIcon /></a>
                  <a href="#" style={{ paddingRight: '1.7rem' }}><InstagramIcon /></a>
                  <a href="#" ><TwitterIcon /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript">document.write(new Date().getFullYear());</script>2020 All rights reserved
              </p>
            </div>
          </div>
        </div>

      </footer>
    );
  }
};


FooterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterContainer;
