import React from 'react'
import './featuredpost.css'
import featuredImg from '../../featuredImg'

const FeaturedPost = () => {
  return (

    <section className="featured-post">
      <div className="text">
        <h1>Featured Articles</h1>
      </div>
      <div className="feature-container">
      {featuredImg.map((image) => {
      return(
        <div className='featured-post-container'>
        <div className="featured-post-item">
          <img className='featured-post-img' src={image} alt="" />
        </div>
      </div>
      )
    })}
      </div>

    </section>
  )
}

export default FeaturedPost