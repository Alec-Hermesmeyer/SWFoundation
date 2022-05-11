import React from 'react'
import './jobform.css';

const JobForm = () => {
  return (
    <section>
        <form className='job-form'>
            <label htmlFor="name" className="form-input">Name</label>
            <input type="text" />
            <label htmlFor="email" className="form-input">Email</label>
            <input type="email" />
            <label htmlFor="tel" className="form-input">Number</label>
            <input type="text" />
            <label htmlFor="name" className="form-input">Name</label>
            <input type="text" />
        </form>
    </section>
  )
}

export default JobForm