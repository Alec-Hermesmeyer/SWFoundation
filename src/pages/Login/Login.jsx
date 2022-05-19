import React from 'react'
import { Navbar, Footer } from '../../components'
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/blog/createpost");
    })

    
  }
  return (
    <div className='login-page'>
      <Navbar />
      <section>
        <h1>Sign in With Google to continue</h1>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
          </section>
      <Footer />
    </div>
  )
}

export default Login