import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Recent, HomeHero,ServiceInfo, Stripe, Footer } from '../../components'
import './home.css'


const Home = () => {
  return (
    <div className='home-page'>
      <Navbar />
      <div className="header-bg">
        
        
          
       
      </div>
      
      <Recent />
      <HomeHero />
      <ServiceInfo />
      <Stripe />
     
     
      <footer>
         <Footer />
      </footer>
     
    </div>
  )
}

export default Home