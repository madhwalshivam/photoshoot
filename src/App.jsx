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
import Fashion from './pages/Fashion.jsx';
import Song from './pages/Song.jsx';
import Comm from './pages/Comm.jsx';
import Brand from './pages/Brand.jsx';
import Baby from './pages/Baby.jsx';
import Nature from './pages/Nature.jsx';
import InstaShoot from './pages/Insta.jsx';

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
         <Route path="/fashion-shoot-in-delhi" element={<Fashion/>} />
         <Route path="/song-shoot-in-delhi" element={<Song/>} />
         <Route path="/commercial-shoot-in-delhi" element={<Comm/>} />
          <Route path="/brand-shoot-in-delhi" element={<Brand/>} />
          <Route path="/baby-shoot-in-delhi" element={<Baby/>} />
           <Route path="/nature-shoot-in-delhi" element={<Nature/>} />
           <Route path="/instagram-reel-shoot-in-delhi" element={<InstaShoot/>} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;

