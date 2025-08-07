import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar.jsx';
import Home from './pages/Home.jsx'; 
import Footer from './components/Footer.jsx';
import OurVideos from './pages/Videos.jsx';
import PreWedding from './pages/PreWedding.jsx';
import Mat from './pages/Mat.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<OurVideos/>} />
         <Route path="/pre-wedding-photography-delhi" element={<PreWedding/>} />
          <Route path="/maternity-shoot-in-delhi" element={<Mat/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
