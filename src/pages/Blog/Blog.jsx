import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../../components'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import LoginIcon from '@mui/icons-material/Login';
// import PostAddIcon from '@mui/icons-material/PostAdd';
import './blog.css';

const Blog = ({isAuth}) => {
    const [postLists, setPostList] = useState([]);
    const postCollectionRef = collection(db, 'posts');

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    })
    const deletePost = async (id) =>{
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
    }
    return (
        <div className='blog-page'>
            <header>
                <Navbar />
            </header>
            <section>
                <Link to='/blog/createpost'><button>Create a Post</button></Link>
                {postLists.map((post) => {
                    return (
                        <div>
                            <div>
                            <h1>{post.title}</h1>
                            </div>
                            <div className="blog-text">
                                {post.postText}
                            </div>
                            <div>@{post.author.name}</div>
                            <div>
                                {isAuth&&post.author.id === auth.currentUser.uid&& (
                                <button onClick={() => {
                                deletePost(post.id)
                                }}>x</button>)}
                                </div>
                        </div>
                    );

                })}


            </section>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Blog