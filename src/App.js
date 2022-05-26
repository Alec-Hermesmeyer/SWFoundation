// import logo from './logo.svg';
// import './App.css';

// import TitlebarImageList from "./components/new/New";
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Blog, Gallery, Services, Jobs, About, Contact, CreatePost, Login, CPD  } from "./pages";
// import { signOut } from 'firebase/auth';
// import { auth } from './firebase-config';


function App() {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear()
  //     setIsAuth(false);
  //     window.location.pathname = '/blog';
  //   })
  // }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About /> } />
          <Route path='/contact' element={<Contact /> } />
          <Route path='/services' element={<Services /> } />
          <Route path='/blog' element={<Blog />} />
          <Route path='/jobs' element={<Jobs /> } />
          <Route path='/CPD' element={<CPD />} />
          
        
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
