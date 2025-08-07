import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider

import Header from './components/Navbar.jsx';
import Home from './pages/Home.jsx'; 
import Footer from './components/Footer.jsx';
import OurVideos from './pages/Videos.jsx';
import PreWedding from './pages/PreWedding.jsx';
import Mat from './pages/Mat.jsx';
import PhotoshootContact from './pages/Contact.jsx';
import AboutStory from './pages/About.jsx';

function App() {
  return (
    <HelmetProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<OurVideos />} />
        <Route path="/pre-wedding-photography-delhi" element={<PreWedding />} />
        <Route path="/maternity-shoot-in-delhi" element={<Mat />} />
        <Route path="/contact" element={<PhotoshootContact/>} />
         <Route path="/about" element={<AboutStory/>} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;

