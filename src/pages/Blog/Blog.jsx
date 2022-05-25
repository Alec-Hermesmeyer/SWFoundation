import React from 'react'
import { FeaturedPost, Footer, Navbar } from '../../components'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import LoginIcon from '@mui/icons-material/Login';
// import PostAddIcon from '@mui/icons-material/PostAdd';
import './blog.css';

const Blog = () => {

    return (
        <div className='blog-page'>
            <header>
                <Navbar />
            </header>
            <div>
                <FeaturedPost />
            </div>





        </div>
    )
}

export default Blog