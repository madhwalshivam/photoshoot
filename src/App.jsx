import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar.jsx';
import Home from './pages/Home.jsx'; 
import Footer from './components/Footer.jsx';
import OurVideos from './pages/Videos.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<OurVideos/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
