import React from 'react'
import './footer.css';
import swlogo from '../../assets/swlogo-white.svg';
import adsc from '../../assets/adsc1.png';
import fra from '../../assets/fra-logo-white.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <ul className="footer-menu">
                        <li className="footer-menu-item">Home</li>
                        <li className="footer-menu-item">About</li>
                        <li className="footer-menu-item">Contact</li>
                        <li className="footer-menu-item">Service</li>
                        <li className="footer-menu-item">Jobs</li>
                        <li className="footer-menu-item">Blog</li>
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