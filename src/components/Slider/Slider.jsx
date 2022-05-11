import React from 'react'
import './slider.css'
import ntexcon from '../../assets/ntexcon.png';
import osbl from '../../assets/osbl.png';
import redden from '../../assets/redden_logo_header.png';
import kent from '../../assets/kent.png';
const Slider = () => {
  return (
    <section className='slider'>
      <div className="slider-wrapper">
        <div className="slider-top">
          <div className="stl">
          <h2 className='slider-heading'>Recent Projects</h2>
          <h4 className='slider-subheading'>We Are A Proud Family Owned Company And Operated Pier Drilling Company Serving Clients Nationwide</h4>
          </div>
          <div className="stc">

          </div>
          <div className="str">

          </div>
        </div>
        <div className="slider-bottom">
              <div className="sbl">

              </div>
              <div className="sbr">
                <div className="logos">
                  <img src={ntexcon} alt="" className='ntexcon-logo' />
                  <img src={osbl} alt="" className='osbl-logo'/>
                  <img src={redden} alt="" className='redden-logo'/>
                  <img src={kent} alt=""className='kent-logo' />
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Slider