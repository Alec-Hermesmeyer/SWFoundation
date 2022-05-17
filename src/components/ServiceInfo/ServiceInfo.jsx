import React from 'react'
import './serviceinfo.css'
import drill4 from '../../assets/drill4.jpeg';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const ServiceInfo = () => {
    return (
        <div className='si-container'>
            <div className="si-wrapper">
                <div className="si-top">
                    <div className="si-top-left">
                        <img src={drill4} alt="" className="si-top-left-img" />
                    </div>
                    <div className="si-top-right">
                        <h2> Texas Commercial Drilling Solutions</h2>
                        <p>S&W Foundation Contractors is DFW's Commericial Pier Drilling Experts</p>
                        <h3>We Provide A Wide Range of Commercial Drilling Services</h3>
                        <ul>
                            <li className="">Low overhead drilling / limited access</li>
                            <li className="">Retaining Walls</li>
                            <li className="">Remedial Foundation Repairs</li>
                            <li className="">Earth Retention</li>
                            <li className="">Pressure Grouting</li>
                            <li className="">Engineered Design/Build</li>
                        </ul>
                        <button>get an estimate</button>
                    </div>

                </div>
                <div className="si-bottom">
                    <div className="si-bottom-icon"><h1>Recent Projects</h1>
                    <span className="arrow-icon"> <h1>>></h1></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ServiceInfo