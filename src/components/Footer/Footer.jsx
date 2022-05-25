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
                    <ul className="footer-menu" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                        <Link to='/' style={{color: 'white', cursor: 'pointer' , textDecoration: 'none'}}>Home</Link>
                        <Link to='/about' style={{color: 'white', cursor: 'pointer' , marginTop: 10, textDecoration: 'none'}}>About</Link>
                        <Link to='/services' style={{color: 'white', cursor: 'pointer' , marginTop: 10, textDecoration: 'none'}}>Services</Link>
                        <Link to='/gallery' style={{color: 'white', cursor: 'pointer' , marginTop: 10, textDecoration: 'none'}}>Gallery</Link>
                        <Link to='/contact' style={{color: 'white', cursor: 'pointer' , marginTop: 10, textDecoration: 'none'}}>Contact</Link>
                        <Link to='/jobs' style={{color: 'white', cursor: 'pointer' , marginTop: 10, textDecoration: 'none'}}>Join Us</Link>
                        <Link to='/blog' style={{color: 'white', cursor: 'pointer' , marginTop: 10, textDecoration: 'none'}}>Blog</Link>
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