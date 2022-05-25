import React from 'react'
import './homehero.css'
import adsc from '../../assets/adsc2.png';

const HomeHero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-wrapper">
        <div className="hero-far-left"></div>
        <div className="vertical-divide"></div>
        <div className="hero-left">
          <h1>DFW's Most Reliable </h1>
          <ul>
            <li>Fully Licenced and Insured but the Texas State License Board</li>
            <li>Privately-owned and locally-operated for more than 30 years.</li>
            <li>Experienced in residential and commercial foundation repair.</li>
            <li>Limited access pier drilling specialist</li>
          </ul>

        </div>
        <div className="vertical-divide"></div>
        <div className="hero-center">
          <h1>ADSC MEMBER</h1>
          <h3>Quality Contrctor of the year recipient</h3>
          <h3>13-Time ADSC Safety Award Winner</h3>
          <img src={adsc} alt="" />

        </div>
        <div className="vertical-divide"></div>
        <div className="hero-right">
          <h1>Trustworthy</h1>
          <h4>With a wide diversity of top of the line
            <br /><br /> 
            equipment, we can handle projects of any
            <br /><br />  size or type.</h4>
        </div>
      </div>
      
    </div>
  )
}

export default HomeHero