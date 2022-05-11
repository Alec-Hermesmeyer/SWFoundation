import React from 'react'
import { Navbar, Slider } from '../../components'
import './home.css'
import drill from '../../assets/drill.jpeg';
import ntexcon from '../../assets/ntexcon.png';
import osbl from '../../assets/osbl.png';
import redden from '../../assets/redden_logo_header.png';
import kent from '../../assets/kent.png';
import adsc2 from '../../assets/adsc2.png';


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home-intro">
        <div className="left-home">
          <h1>Commercial and Limited-Access Pier Drilling</h1>
          <h3>S&W Foundation Contractors is the most reliable choice for all foundation drilling</h3>
          <button className='estimate-button'>Get An Estimate</button>
        </div>
        <div className="center-home">
          <img className='center-home-img' src={drill} alt="Rig drilling hole" />
        </div>
        <div className="right-home">
          <div className="img-container-home-right">
            <div className="top-container">
              <div className="top-title">
               <h3>Current Clients</h3>
              </div>
              <div className="right-top-top">
                <img src={ntexcon} alt="" className='ntexcon-logo' />
              </div>
              <div className="right-top-center">
                <img src={osbl} alt="" className='osbl-logo' />
              </div>
              <div className="right-top-lc">
                <img src={redden} alt="" className='redden-logo' />
              </div>
              <div className="right-top-bottom">
                <img src={kent} alt="" className='kent-logo' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-bottom">
        <div className="whitespace"></div>
        <div className="slash"></div>
        <div className="intro-bottom-left">
          <h3 className="intro-bottom-left-text">ADSC Member</h3>
          <div>
            <img src={adsc2} alt="" className="intro-bottom-left-img" className="adsc2-logo"/>
          </div>
        </div>
        <div className="slash"></div>
        <div className="intro-bottom-center">
          <h3>Quality Contractor of the Year Recipient</h3>

        </div>
        <div className="slash"></div>
        <div className="intro-bottom-right">
          <h3 className="intro-bottom-right">
            13-Time ADSC
            Safety Award Winner
          </h3>
        </div>

      </section>
      <Slider />
    </div>
  )
}

export default Home