import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
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
import YouTubeShoot from './pages/Youtube.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Glass from './pages/Glass.jsx';
import Red from './pages/Red.jsx';
import House from './pages/House.jsx';
import Tree from './pages/Tree.jsx';
import Sant from './pages/Santorini.jsx';
import Roman from './pages/Roman.jsx';
import SwimmingPool from './pages/Swimming.jsx';
import Gazebo from './pages/Gazebo.jsx';
import Marry from './pages/Marry.jsx';
import Lib from './pages/Library.jsx';
import Kitchen from './pages/Kitchen.jsx';
import Bar from './pages/Bar.jsx';
import Kurbani from './pages/Kurbani.jsx';
import Launge from './pages/Launge.jsx';
import Bench from './pages/Bench.jsx';
import Tube from './pages/Tubelight.jsx';
import Village from './pages/Village.jsx';
import Street from './pages/Street.jsx';
import Wind from './pages/Wind.jsx';
import Picnic from './pages/Picnic.jsx';
import Junk from './pages/Junk.jsx';
import Born from './pages/Born.jsx';
import Brick from './pages/Brick.jsx';
import Beach from './pages/Beach.jsx';
import London from './pages/London.jsx';
import Railway from './pages/Railway.jsx';
import Car from './pages/Car.jsx';
import Swing from './pages/Swing.jsx';
import Color from './pages/Color.jsx';
import Bulb from './pages/Bulb.jsx';
import Pillar from './pages/Pillar.jsx';
import Wall from './pages/Wall.jsx';

function App() {
  return (
    <HelmetProvider>
      <Header />
      <ScrollToTop/>
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
          <Route path="/youtube-blog-shoot-in-delhi" element={<YouTubeShoot/>} />
            <Route path="/glasshouse-photoshoot-location-in-delhi" element={<Glass/>} />
           <Route path="/red-courtyard-haveli-photoshoot-location-in-delhi" element={<Red/>} />
          <Route path="/scottish-house-photoshoot-location-in-delhi" element={<House/>} />
          <Route path="/tree-house-photoshoot-location-in-delhi" element={<Tree/>} />
          <Route path="/santorini-photoshoot-location-in-delhi" element={<Sant/>} />
           <Route path="/roman-pillar-photoshoot-location-in-delhi" element={<Roman/>} />
          <Route path="/swimming-pool-photoshoot-location-in-delhi" element={<SwimmingPool/>} />
           <Route path="/gazebo-photoshoot-location-in-delhi" element={<Gazebo/>} />
           <Route path="/marry-me-photoshoot-location-in-delhi" element={<Marry/>} />
           <Route path="/library-photoshoot-location-in-delhi" element={<Lib/>} />
           <Route path="/kitchen-photoshoot-location-in-delhi" element={<Kitchen/>} />
           <Route path="/bar-photoshoot-location-in-delhi" element={<Bar/>} />
            <Route path="/kurbani-photoshoot-location-in-delhi" element={<Kurbani/>} />
            <Route path="/lounge-photoshoot-location-in-delhi" element={<Launge/>} />
            <Route path="/bench-photoshoot-location-in-delhi" element={<Bench/>} />
          <Route path="/tubelight-photoshoot-location-in-delhi" element={<Tube/>} />
           <Route path="/village-photoshoot-location-in-delhi" element={<Village/>} />
           <Route path="/spanish-cafe-photoshoot-location-in-delhi" element={<Street/>} />
           <Route path="/windmill-photoshoot-location-in-delhi" element={<Wind/>} />
           <Route path="/picnic-photoshoot-location-in-delhi" element={<Picnic/>} />
           <Route path="/junkyard-photoshoot-location-in-delhi" element={<Junk/>} />
           <Route path="/bonfire-photoshoot-location-in-delhi" element={<Born/>} />
           <Route path="/bricked-arches-photoshoot-location-in-delhi" element={<Brick/>} />
           <Route path="/beach-photoshoot-location-in-delhi" element={<Beach/>} />
           <Route path="/london-street-photoshoot-location-in-delhi" element={<London/>} />
           <Route path="/railway-station-photoshoot-location-in-delhi" element={<Railway/>} />
           <Route path="/red-open-car-photoshoot-location-in-delhi" element={<Car/>} />
            <Route path="/swing-set-photoshoot-location-in-delhi" element={<Swing/>} />
            <Route path="/colour-wall-photoshoot-location-in-delhi" element={<Color/>} />
            <Route path="/bulb-set-photoshoot-location-in-delhi" element={<Bulb/>} />
             <Route path="/pillar-set-photoshoot-location-in-delhi" element={<Pillar/>} />
              <Route path="/brick-wall-photoshoot-location-in-delhi" element={<Wall/>} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;

