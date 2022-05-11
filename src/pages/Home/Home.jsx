import React from 'react'
import { Navbar, ServiceInfo, Recent } from '../../components'
import './home.css'
// import drill3 from '../../assets/drill3.jpeg';
// import adsc2 from '../../assets/adsc2.png';


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home-intro">
        <div className="home-intro-container"></div>
        <div className="left-home">
          <h1>Commercial and Limited-Access Pier Drilling</h1>
          <h3>S&W Foundation Contractors is the most reliable choice for all foundation drilling</h3>
          <h4>For Nationwide Service, call 214-703-0484</h4>
          <button className="estimate-button">GET AN ESTIMATE</button>
        </div>
      </section>
      <section className="intro-bottom">
        <div className="whitespace"></div>
        <div className="slash"></div>
        <div className="intro-bottom-left">
          <h3 className="intro-bottom-left-text">ADSC Member</h3>
          <div>
            {/* <img src={adsc2} alt="" className="intro-bottom-left-img" className="adsc2-logo"/> */}
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
      <ServiceInfo />
      <Recent />
    </div>
  )
}

export default Home