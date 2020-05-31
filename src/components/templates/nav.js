import React ,{useState} from "react";

import { RoundIconConatiner } from './service.style';
import { NavStyle, LinkContainer } from './nav.style';
import ContactUsContainer from './contactUs';
import websiteIcon from '../../images/website-icon.png';
import Image from '../atoms/Images';
import { Link } from "gatsby"
import {NaviconIcon} from '../constants/styledIcons'


const NavContainer = () => {
    const [isShow, showDropDown] = useState(false);

    const handleDisplay = ()=>{
        showDropDown(!isShow)
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md" style={{ backgroundColor: '#070707' }}>
                <a className="navbar-brand" href="#" style={{zIndex: '1'}}>
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
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={<ContactUsContainer />} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavContainer;

