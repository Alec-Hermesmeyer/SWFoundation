import React from 'react'
import { ServiceHero, Navbar, ServiceBody } from '../../components'
import './services.css'
import logo from '../../assets/swlogorwb.png'

const Services = () => {
  return (
    <div>
        <header><Navbar /></header>
        <div>
          <div className="service-header-bg">
            <img src={logo} alt="" />
          </div>
          <ServiceHero />
          <ServiceBody />
        </div>
        </div>
  )
}

export default Services