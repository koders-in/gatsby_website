import React from "react";
import PropTypes from "prop-types";
import { FooterContainerStye } from './footer.style';

class FooterContainer extends React.Component {
  render () {
    return (
      <footer primary style={ {
        backgroundColor: '#1A1A1A', padding: ' 8em 0',
        color: 'grey'
      } }>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="footer-heading mb-3 text-white">About Us</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="col-lg-8 ml-auto">
              <div className="row">
                <div className="col-lg-6 ml-auto">
                  <h2 className="footer-heading mb-4 text-white">Quick Links</h2>
                  <ul className="list-unstyled" >
                    <li><a href="#" style={ { color: '#E43C5C' } }>About Us</a></li>
                    <li><a href="#" style={ { color: '#E43C5C' } }>Testimonials</a></li>
                    <li><a href="#" style={ { color: '#E43C5C' } }>Terms of Service</a></li>
                    <li><a href="#" style={ { color: '#E43C5C' } }>Privacy</a></li>
                    <li><a href="#" style={ { color: '#E43C5C' } }>Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h2 className="footer-heading mb-4 text-white">Connect</h2>
                  <div className="social_29128 white mb-5">
                    <a href="#"><span className="icon-facebook"></span></a>
                    <a href="#"><span className="icon-instagram"></span></a>
                    <a href="#"><span className="icon-twitter"></span></a>
                  </div>
                  <h2 className="footer-heading mb-4 text-white">Newsletter</h2>
                  <form action="#" className="d-flex">
                    <input type="text" className="form-control mr-3" placeholder="Email" />
                    <input type="submit" value="Send" className="btn btn-primary" />
                  </form>
                </div>
              </div>
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
