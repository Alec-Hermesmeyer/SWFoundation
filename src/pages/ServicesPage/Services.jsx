import React from 'react'
import { ServiceHero, Navbar, ServiceBody, Footer } from '../../components'
import './services.css'
import logo from '../../assets/swlogorwb.png'
import csite from '../../assets/csite.mp4'

const Services = () => {
  return (
    <div>
        <header><Navbar /></header>
        <div>
          <div className="service-header-bg">
            <video src={csite} autoPlay muted loop></video>
          </div>
          <body>
          <ServiceHero />
          <ServiceBody />
          </body>
          
        </div>
        <footer><Footer/></footer>
        </div>
        
  )
}

export default Services