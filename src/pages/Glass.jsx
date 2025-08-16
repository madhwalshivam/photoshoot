import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import g1 from "../assets/G (1).jpeg";
import g2 from "../assets/G (2).jpeg";
import g3 from "../assets/glass.jpeg";
import g4 from "../assets/G (4).jpeg";
import g5 from "../assets/G (5).jpg";
import g6 from "../assets/G (6).jpg";
import g7 from "../assets/G (7).jpg";
import g8 from "../assets/G (8).jpg";
import g9 from "../assets/G (9).jpg";
import g10 from "../assets/G (10).jpg";
import g11 from "../assets/G (11).jpg";
import g12 from "../assets/G (12).jpg";
import g13 from "../assets/G (13).jpg";
import g14 from "../assets/G (14).jpg";
import g15 from "../assets/G (15).jpg";
import g16 from "../assets/G (16).jpg";
import g17 from "../assets/G (17).jpg";
import g18 from "../assets/G (18).jpg";
import g19 from "../assets/G (19).jpg";
import g20 from "../assets/G (20).jpg";
import g21 from "../assets/G (21).jpg";
import g22 from "../assets/G (22).jpg";
import g23 from "../assets/G (23).jpg";
import g24 from "../assets/G (24).jpg";
import g25 from "../assets/G (25).jpg";
import g26 from "../assets/G (26).jpg";
import g27 from "../assets/G (27).jpg";
import g28 from "../assets/G (28).jpg";
import g29 from "../assets/G (29).jpg";
import g30 from "../assets/G (30).jpg";
import g31 from "../assets/G (31).jpg";
import g32 from "../assets/G (32).jpg";
import g33 from "../assets/G (33).jpg";
import g34 from "../assets/G (34).jpg";
import g35 from "../assets/G (35).jpg";
import g36 from "../assets/G (36).jpg";

import Testimonials from "../components/Testimonial";
import GlassBanner from "./GlassBanner";

const images = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33, g34, g35, g36
];


// Custom hook to detect scroll into view
const useInView = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Glass = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
     <Helmet>
  <title>The Picture Town -Alipur | Best Glasshouse Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience stunning photography at The Picture Town -Alipur's Glasshouse photoshoot location in Delhi NCR. Perfect for fashion, pre-wedding, and lifestyle shoots."
  />
  <meta property="og:title" content="Elegant Glasshouse Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture timeless moments at our Glasshouse photoshoot location in Delhi NCR — the perfect blend of natural light and modern elegance."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/glasshouse-photoshoot-location-in-delhi" />
</Helmet>

     <GlassBanner/>

     <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing Timeless Moments</span>
      <br />
      <span className="text-orange-500">in Our Elegant Glasshouse</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our 
      <span className="font-semibold text-black"> Glasshouse photoshoot location </span> 
       offers the perfect blend of natural light and architectural beauty. Whether it’s for 
      a <span className="font-semibold text-black">pre-wedding shoot</span>, fashion campaign, 
      or lifestyle session, the glass walls and scenic surroundings create a stunning 
      backdrop for every frame. Recognized as one of the 
      <span className="font-semibold text-black"> best photoshoot locations in Delhi NCR</span>, 
      we make your moments shine with elegance, warmth, and unforgettable charm.
    </p>
  </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {images.map((img, index) => {
            const [ref, visible] = useInView();
            return (
              <div
                key={index}
                ref={ref}
                onClick={() => openLightbox(index)}
                className={`overflow-hidden shadow-md transition-all duration-1000 transform will-change-transform cursor-pointer ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={img}
                  alt={`Fashion Shoot ${index + 1}`}
                  loading="eager"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            ❮
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Fashion Large View"
            className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}

      <Testimonials />
    </div>
  );
};

export default Glass;