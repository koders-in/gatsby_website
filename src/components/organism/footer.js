import React from "react";
import { SiteLinks } from './footer.style';
import { FacebookCircleIcon, InstagramIcon, TwitterIcon,LinkedinIcon,GithubIcon } from '../constants/styledIcons';

class FooterContainer extends React.Component {
  render() {
    return (
      <footer primary="true" style={{
        backgroundColor: '#000000', padding: ' 8em 0',
        color: 'grey'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{ lineHeight: '2' }}>
              <h2 className="footer-heading mb-4 text-white">Quick Links</h2>
              <ul className="list-unstyled" >
                <li><a href="# " style={{ color: '#0C61A5' }}>About Us</a></li>
                <li><a href="# " style={{ color: '#0C61A5' }}>Testimonials</a></li>
                <li><a href="# " style={{ color: '#0C61A5' }}>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-8 ml-auto mt-5">
              <div className="row">
                <SiteLinks className="col-lg-10" style={{ textAlign: 'right' }}>
                  <a aria-label="facebook" href="https://www.facebook.com/Koders-Organization-706497809743948/" style={{ paddingRight: '1.7rem' }}><FacebookCircleIcon /></a>
                  <a aria-label="instagram" href="https://www.instagram.com/koders_in/" style={{ paddingRight: '1.7rem' }}><InstagramIcon /></a>
                  <a aria-label="twitter" href="https://twitter.com/KodersHQ" style={{ paddingRight: '1.7rem' }}><TwitterIcon /></a>
                  <a aria-label="linkedin" href="https://www.linkedin.com/in/koders-in-88575a1a0/" style={{ paddingRight: '1.7rem' }} ><LinkedinIcon /></a>
                  <a aria-label="github" href="https://github.com/koders-in" ><GithubIcon /></a>
                </SiteLinks>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
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

export default FooterContainer;
