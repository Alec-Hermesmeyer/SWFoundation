import { useState, useEffect } from 'react'
import { Navbar, Footer } from '../../components'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config.js'
import './createpost.css'
 import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/blog");
  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/blog");
    }
  }, [])

  return (
    <div className='PostPage'>
      <Navbar />
      <section className='cp-container'>
        <h1>Create A Post</h1>
        <div className="inputgp">
          <label className='cp-label' htmlFor="">Title</label>
          <input type="text" placeholder='Title...' onChange={(e) => {
            setTitle(e.target.value)
          }} />
        </div>
        <div className="inputgp">
          <label className='cp-label' htmlFor="">Post</label>
          <textarea placeholder='What is on your mind?' onChange={(e) => {
            setPostText(e.target.value)
          }} />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </section>
      <Footer />
    </div>
  )
}

export default CreatePost