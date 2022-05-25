import React from 'react'
import './serviceinfo.css'
// import drill4 from '../../assets/drill4.jpeg';
import { Link } from 'react-router-dom';
import logo from '../../assets/swlogorwb.png';
import drill from '../../assets/drill2.jpeg';
import drillimg from '../../drillimg';
//import TitlebarImageList from '../Gallery/TitlebarImageList';
// import swlogo from '../../assets/updatedLogo.png';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const ServiceInfo = () => {
    return (
        <div className='si-container' id='about'>
            <div className="si-wrapper">
                <div className="divide-top"></div>
                <div className="about-section">
                    <div className="about-text-container">
                        <h1>about</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eos omnis quam corrupti? 
                            Repudiandae eius incidunt laudantium explicabo, fuga tempora doloremque dolorum vitae harum 
                            sed a perspiciatis ut error eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Veritatis nostrum iusto reprehenderit mollitia inventore, quisquam tempora numquam molestiae 
                            molestias perspiciatis, fugiat quam laboriosam in sit corporis ut deleniti illum recusandae!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint aliquam excepturi dolores. 
                            Fugit earum cumque iusto? Ducimus provident assumenda quos exercitationem, voluptatibus, 
                            dolorem in cum laboriosam, voluptates fugiat minus.
                            <Link to='/about' style={{ color: 'black', marginLeft: 10, cursor: 'pointer' }}>Read More</Link></p>
                    </div>
                    <div className="about-img-container">
                        <img src={logo} alt="S&W Red White and Blue Logo" />
                    </div>
                </div>

                <div className="divide"></div>

                <div className="service-section">
                    <div className="service-text-container">
                        <h1>
                            what We Do
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Pariatur repellendus quia fuga aliquam suscipit, 
                            id quisquam non debitis ex odio praesentium. Consectetur quisquam eos harum 
                            sunt nemo officiis quas iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Nesciunt beatae nisi iusto voluptate nostrum nam eaque, autem adipisci repellendus, 
                            alias quasi rem! Non aspernatur animi sapiente ex quaerat beatae delectus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt deleniti, 
                            soluta veritatis dolor illo quos nobis excepturi minus, 
                            ad laborum voluptates asperiores corrupti! Doloremque 
                            dolorem et omnis similique accusamus?
                            <Link to='/services' style={{marginLeft: 5, color: 'black'}}>Learn More</Link></p>
                    </div>
                    <div className="service-img-container">
                        <img src={drill} alt="" />
                    </div>
                </div>

                <div className="divide"></div>

                <div className="gallery-section-home">
                    <div className="home-gallery-text">
                        <h1>Recent Projects</h1>
                    </div>
                    <div className="home-gallery-container">
                        {drillimg.map((image) => {
                            return (
                                <div className='home-gallery-img'>
                                    <div className='home-gallery-item'>
                                        <img className='featured-img' src={image} alt="" style={{ boxShadow: '10px 10px 14px black' }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Link to='/gallery' style={{ textDecoration: 'none', marginTop: 60}}><button className='home-gallery-button'>View More</button></Link>
                </div>

            </div>

        </div>
    )
}

export default ServiceInfo