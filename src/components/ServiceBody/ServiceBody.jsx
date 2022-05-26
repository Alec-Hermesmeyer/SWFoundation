import React from 'react'

import './servicebody.css'

import { Link } from 'react-router-dom';


const ServiceBody = () => {
    return (
        <div className='service-body'>
            <div className="servicebody-container">
                <div className="servicebody-top">
                    <div className="servicebody-top-text">
                    <h1>Commercial Pier Drilling</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        In minus, aut quo, repellendus tempore debitis consectetur enim autem 
                        sapiente et est necessitatibus vitae? Culpa rerum doloremque ipsa in 
                        repellat unde.</p>
                        <Link to='/CPD'><button>Learn More</button></Link>
                    </div>
                </div>
                <div className="servicebody-center">
                    <h1>Limited-Access Pier Drilling</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        In minus, aut quo, repellendus tempore debitis consectetur enim autem 
                        sapiente et est necessitatibus vitae? Culpa rerum doloremque ipsa in 
                        repellat unde.</p>
                        <Link to='/CPD'><button>Learn More</button></Link>
                </div>
                <div className="servicebody-bottom">
                    <h1>Turnkey Drilling Solutions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        In minus, aut quo, repellendus tempore debitis consectetur enim autem 
                        sapiente et est necessitatibus vitae? Culpa rerum doloremque ipsa in 
                        repellat unde.</p>
                        <Link to='/CPD'><button>Learn More</button></Link>
                </div>
            </div> 
        </div>
    )
}

export default ServiceBody