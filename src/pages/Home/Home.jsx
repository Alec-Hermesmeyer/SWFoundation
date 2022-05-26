import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,  HomeHero,ServiceInfo, Stripe, Footer } from '../../components'
import './home.css'
import ariel from '../../assets/ariel.mp4'


const Home = () => {
  return (
    <div className='home-page'>
      <header><Navbar /></header>
      <div className="header-bg">
        <video src={ariel} autoPlay muted loop></video>
        
          
       
      </div>
      
     <body>
      <HomeHero />
      <ServiceInfo />
      <Stripe />
     
     </body>
     
      <footer>
         <Footer />
      </footer>
     
    </div>
  )
}

export default Home