import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF1 from "../assets/swing1.jpeg";
import BF2 from "../assets/swing2.jpg";
import BF3 from "../assets/swing3.jpeg";
import BF4 from "../assets/swing4.jpg";
import BF5 from "../assets/swing5.jpg";
import BF6 from "../assets/swing6.jpg";
import BF7 from "../assets/swing7.jpg";
import BF8 from "../assets/swing8.jpg";
import BF9 from "../assets/swing9.jpg";
import BF10 from "../assets/swing10.jpg";
import BF11 from "../assets/swing11.jpg";
import BF12 from "../assets/swing12.jpg";

import Testimonials from "../components/Testimonial";
import SwingSetBanner from "./SwingBanner";

const images = [
  BF1, BF2, BF3, BF4, BF5, BF6, BF7, BF8, BF9, BF10,
  BF11, BF12, 
];



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

const Swing = () => {
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
  <title>The Picture Town | Best Swing Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience playful romance and charming outdoor vibes at The Picture Town's Swing Set in Delhi NCR — perfect for pre-wedding, lifestyle, and themed photoshoots."
  />
  <meta 
    property="og:title" 
    content="Swing Set Photoshoots in Delhi NCR" 
  />
  <meta
    property="og:description"
    content="Capture joyful, romantic, and cinematic moments at our beautifully crafted Swing Set photoshoot location in Delhi NCR — ideal for couples, pre-weddings, and outdoor-themed shoots."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/swing-set-photoshoot-location-in-delhi"
  />
</Helmet>



    <SwingSetBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Swing into Moments of Joy</span>
      <br />
      <span className="text-pink-600">at Our Charming Outdoor Swing Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Outdoor Swing Set photoshoot location </span>
      brings together romance, fun, and natural beauty — the perfect setting for
      <span className="font-semibold text-black"> pre-wedding shoots</span>, candid couple portraits,
      or lifestyle photography. Surrounded by lush greenery and crafted with rustic elegance, 
      the swing creates an intimate yet playful backdrop for capturing laughter, connection, 
      and heartfelt moments. Recognized as one of the
      <span className="font-semibold text-black"> most unique and dreamy photoshoot spots in Delhi NCR</span>,
      it’s a timeless way to turn simple swings into unforgettable memories.
    </p>
  </div>
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
                  alt={`Gazebo Shoot ${index + 1}`}
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
            alt="Gazebo Large View"
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

export default Swing;