import React from 'react'
import { ServiceData } from '../../ServiceData'
import './servicebody.css'

const ServiceBody = () => {
    return (
        <div className='service-body'>
            <div className="servicebody-container">
                {ServiceData.map((title, desc, img) => {
                    return (
                        <div className="item-container">
                            <h1>{title}</h1>
                            
                            <div className="item-content">
                                <p>{desc}</p>
                                <img src={img} alt="" />
                            </div>

                        </div>
                    )
                })}
                
            </div> 
        </div>
    )
}

export default ServiceBody