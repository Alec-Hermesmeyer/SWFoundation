import React from 'react'
import { Navbar, Recent, AboutHero } from '../../components'
import './about.css';

const About = () => {
  return (
    <div className='about-page'>
        <header><Navbar /></header>
        <div className="stripe-bg"></div>
        <Recent />
        <AboutHero />
        
    </div>
  )
}

export default About