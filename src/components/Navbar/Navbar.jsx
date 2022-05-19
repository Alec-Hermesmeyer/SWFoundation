import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
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
                    <Link style={{textDecoration: 'none'}} to='/'><li className="menuitem">Home</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/about'><li className="menuitem">About</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/contact'><li className="menuitem">Contact</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/services'><li className="menuitem">Services</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/gallery'><li className="menuitem">Gallery</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/blog'><li className="menuitem">Blog</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/jobs'><li className="menuitem">Jobs</li></Link>
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