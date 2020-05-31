import React ,{useState} from "react";

import { RoundIconConatiner } from './service.style';
import websiteIcon from '../../images/website-icon.png';
import Image from '../atoms/Images';
import {NaviconIcon} from '../constants/styledIcons'
import { Link } from "react-scroll";


const NavContainer = () => {
    const [isShow, showDropDown] = useState(false);

    const handleDisplay = ()=>{
        showDropDown(!isShow)
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md" style={{ backgroundColor: '#070707' }}>
                <a className="navbar-brand" href="# " style={{zIndex: '1'}}>
                    <RoundIconConatiner primary>
                        <Image src={websiteIcon} />
                    </RoundIconConatiner>
                </a>
                <button onClick={()=>handleDisplay()} className={`navbar-toggler ${isShow ? '':'collapsed'}`}
                 type="button" data-toggle="collapse" data-target="#collapsibleNavbar" 
                 aria-expanded={`${isShow ? true: false}`}>
                    <NaviconIcon/>
                </button>
                <div className={`navbar-collapse ${isShow ? 'collapse show':'collapse'}`} id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="contact" spy={true} smooth={true} offset={-500} duration={500}>Contact</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    );
};

export default NavContainer;

