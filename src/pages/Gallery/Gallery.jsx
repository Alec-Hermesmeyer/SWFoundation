import React from 'react'
import { Navbar } from '../../components'
import images from '../../images';
import './gallery.css';

const Gallery = () => {
    
  return (
      
    <div className='gallery'>
        <Navbar />
        <div className="gallery-title">
            <h1 className="gallery-heading">
                Gallery
            </h1>
        </div>
        <div className="outer-container">
            <div className="inner-container">
                {images.map(image => {
                    return(
                        <div className='item'>
                            <img src={image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Gallery