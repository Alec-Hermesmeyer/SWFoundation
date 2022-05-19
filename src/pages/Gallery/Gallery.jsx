import React from 'react'
import { Footer, Navbar, TitlebarImageList } from '../../components'

const Gallery = () => {
  return (
    <div className='Gallery-Page'>
      <div className="header">
      <Navbar />
      </div>
     
      <section className='gallery-images'>
        <div className="gallerywrapper">
      <TitlebarImageList />
      </div>
      </section>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Gallery