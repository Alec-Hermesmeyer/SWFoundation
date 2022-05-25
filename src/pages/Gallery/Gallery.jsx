import React from 'react'
import {  Navbar, Footer } from '../../components'
import './gallery.css'

const Gallery = () => {
  return (
    <div className='Gallery-Page'>
      <header>
        <Navbar />
      </header>
     <div className="section">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste odit modi voluptas placeat molestias nulla earum, itaque fugiat voluptatibus minima ipsa neque. Rem temporibus quos molestiae necessitatibus tenetur? Quidem.</p>
     </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Gallery