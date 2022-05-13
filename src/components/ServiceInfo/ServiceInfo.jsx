import React from 'react'
import './serviceinfo.css'
import drillimg from '../../drillimg';

const ServiceInfo = () => {
  return (
    <div className='si-outer-container'>
        <div className="si-inner-container">
            {drillimg.map(image => {
                return (
                    <div className='si-inner-container-item'>
                        <img src={image} alt="" />
                    </div>
                )
            })}
           
            
        </div>
        <div className="si-titles">
                <div className="si-left"><h4>Texas Commercial Drilling Services</h4></div>
                <div className="si-center"><h4>Turnkey Drilling Solutions</h4></div>
                <div className="si-right"><h4>Limited-Access Pier Drilling</h4></div>
            </div>
            <div className="service-button">
                <button className="service-info-button">Learn More</button>
            </div>
    </div>
  )
}

export default ServiceInfo