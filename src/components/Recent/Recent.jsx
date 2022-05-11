import React from 'react'
import './recent.css'
import logo from '../../logo';

const Recent = () => {
  return (
    <div className='recent'>
        <div className="recent-container">
            <h2 className="recent-heading">Our Recent Clients</h2>
            <div className="recent-inner-container">
                {logo.map(image => {
                    return (
                        <div className="recent-item">
                            <img src={image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Recent