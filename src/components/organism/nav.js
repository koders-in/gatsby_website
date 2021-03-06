import React, { useState } from "react";
import { RoundIconConatiner } from '../templates/service.style';
import websiteIcon from '../../../static/website-icon.png';
import Image from '../atoms/Images';
import { NaviconIcon } from '../constants/styledIcons'
import { Link } from "react-scroll";


const NavContainer = ({isBlogPage}) => {
    const [isShow, showDropDown] = useState(true);

    const handleDisplay = () => {
        showDropDown(!isShow)
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md" style={{ backgroundColor: '#070707' }}>
                <a className="navbar-brand" href="# " style={{ zIndex: '1' }}>
                    <RoundIconConatiner primary>
                        <Image src={websiteIcon} height="50px" width="50px"/>
                    </RoundIconConatiner>
                </a>
                
                <button onClick={() => handleDisplay()} className={`navbar-toggler ${isShow ? '' : 'collapsed'}`}
                    type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
                    aria-expanded={`${isShow ? true : false}`}>
                    <NaviconIcon />
                </button>
                <div className={`navbar-collapse ${isShow ? 'collapse show' : 'collapse'}`} id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    {isBlogPage ?
                            <li className="nav-item">
                            </li>
                            : <>
                                <li className="nav-item">
                                    <Link style={{ cursor: 'pointer' }} className="nav-link text-white" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ cursor: 'pointer' }} className="nav-link text-white" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ cursor: 'pointer' }} className="nav-link text-white" to="contact" spy={true} smooth={true} offset={-500} duration={500}>Contact</Link>
                                </li>
                            </>}
                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default NavContainer;

