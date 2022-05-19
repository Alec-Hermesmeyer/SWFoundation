import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Recent, ServiceInfo, Stripe, Footer } from '../../components'
import './home.css'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="header-bg">
        <h1 className='header-text'>S&W Foundation Contractors</h1>
        <h2 className='header-text'>DFW'S most trusted choice for all foundation drilling</h2>
        <div className="buttons-header">
          <div className="buttons-left">
            <Link to='/services'><button className='media-button'>Learn More</button></Link>
          </div>
          <div className="buttons-center">
            <Link to='/contact'><button className="quote-button">Get A Quote</button></Link>
          </div>
        </div>
      </div>
      <Recent />
      <ServiceInfo />
      <Stripe />
      <div className='stripe-text'>
        <h3>Join the family</h3>
        <h4>Email: CliffW@SWFoundation.com</h4>
      </div>
      <Footer />
    </div>
  )
}

export default Home