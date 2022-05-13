import React from 'react'
import './recent.css'
import logo from '../../logo';

const Recent = () => {
  return (
    <div className='recent'>
        <div className="recent-container">
            <div className="recent-top">
            <h4 className='recent-subheading'>Family Owned and Operated</h4>
            <h2 className="recent-heading">OUR RECENT CLIENTS</h2>
            <h4 className='recent-subheading-2'>Since 1986</h4>
            </div>
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