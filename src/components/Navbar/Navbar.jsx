import React from 'react'
import './navbar.css'
import swlogo from '../../assets/swlogo-white.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-wrapper">
            <div className="left">
            <img src={swlogo} alt="Logo" className='logo'/>
            <span className="phone">214-703-0484</span>
                
            </div>
            <div className="center">
                <ul className="menu">
                    <li className="menuitem">Home</li>
                    <li className="menuitem">About Us</li>
                    <li className="menuitem">Contact Us</li>
                    <li className="menuitem">Services</li>
                    <li className="menuitem">Jobs</li>
                </ul>
            </div>
            <div className="right">
                
                <a href='https://www.facebook.com/SWFoundationContractors'><FacebookIcon className='nav-icon'/></a>
                <LinkedInIcon className='nav-icon'/>
                <LocalPhoneIcon className='nav-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar