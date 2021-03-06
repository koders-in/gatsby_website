import React, { useState }  from "react";
import { SiteLinks, FooterContainerStye } from './footer.style';
import { FacebookCircleIcon, InstagramIcon, TwitterIcon, LinkedinIcon, GithubIcon } from '../constants/styledIcons';
import { Link } from 'react-scroll'

const FooterContainer = ({isBlogPage}) => {
  const [isShow, showDropDown] = useState(true);

  const handleDisplay = () => {
      showDropDown(!isShow)
  }
    return (
      <footer primary="true" style={{
        backgroundColor: '#000000', padding: ' 4em 0',
        color: 'grey'
      }}>
        <FooterContainerStye>
          <div className="container">
            <div className="row" style={{ marginTop: '1rem' }}>
              <div className="col-lg-4" style={{ lineHeight: '2' }}>
                <ul className="list-unstyled" >
                {isBlogPage ?
                            <li className="nav-item">
                            </li>
                            : <>
                  <h2 className="footer-heading mb-4 text-white">Quick Links</h2>
                  <li className="nav-item">  
                    <Link style={{ cursor: 'pointer' }}  className="nav-link text-white" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{ cursor: 'pointer' }}  className="nav-link text-white" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{ cursor: 'pointer' }}  className="nav-link text-white" to="contact" spy={true} smooth={true} offset={-500} duration={500}>Contact</Link>
                  </li>
                  </>}
                </ul>
              </div>
              <div className="col-lg-8 ml-auto mt-5">
                <div className="row">
                  <SiteLinks className="col-lg-10" style={{ textAlign: 'right' }}>
                    <a aria-label="facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/Koders-Organization-706497809743948/" style={{ paddingRight: '1.7rem' }}><FacebookCircleIcon /></a>
                    <a aria-label="instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/koders_in/" style={{ paddingRight: '1.7rem' }}><InstagramIcon /></a>
                    <a aria-label="twitter" target="_blank" rel="noreferrer" href="https://twitter.com/KodersHQ" style={{ paddingRight: '1.7rem' }}><TwitterIcon /></a>
                    <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/koders-in-88575a1a0/" style={{ paddingRight: '1.7rem' }} ><LinkedinIcon /></a>
                    <a aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/koders-in" ><GithubIcon /></a>
                  </SiteLinks>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p><br></br>
                  Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript">document.write(new Date().getFullYear());</script>2020 All rights reserved
              </p>
              </div>
            </div>
          </div>
        </FooterContainerStye>
      </footer>
    );
  }


export default FooterContainer;
