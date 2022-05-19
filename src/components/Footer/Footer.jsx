import React from 'react'
import './footer.css';
import swlogo from '../../assets/swlogo-white.svg';
import adsc from '../../assets/adsc1.png';
import fra from '../../assets/fra-logo-white.png';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <ul className="footer-menu">
                    <Link style={{textDecoration: 'none'}} to='/'><li className="menuitem">Home</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/about'><li className="menuitem">About</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/contact'><li className="menuitem">Contact</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/services'><li className="menuitem">Services</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/gallery'><li className="menuitem">Gallery</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/blog'><li className="menuitem">Blog</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/jobs'><li className="menuitem">Jobs</li></Link>
                    </ul>
                </div>
                <div className="footer-center">
                    <div className="logo-container">
                        <img src={swlogo} alt="" />
                        <h5>2806 Singleton St, Rowlett TX, 75088</h5>
                        <h5>Commercial Pier Drilling</h5>
                    </div>
                </div>
                <div className="footer-right">
                        <h4>Association Membership</h4>
                        <img src={adsc} alt="" className="footer-icons" />
                        <img src={fra} alt="" className="footer-icons" />
                </div>
            </div>

        </div>
    )
}

export default Footer