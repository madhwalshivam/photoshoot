import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF1 from "../assets/PILLAR (1).jpeg";
import BF2 from "../assets/PILLAR (2).jpg";
import BF3 from "../assets/PILLAR (3).jpeg";
import BF4 from "../assets/PILLAR (4).jpg";
import BF5 from "../assets/PILLAR (5).jpg";
import BF6 from "../assets/PILLAR (6).jpg";
import BF7 from "../assets/pillar.jpg";
import BF8 from "../assets/PILLAR (8).jpg";
import BF9 from "../assets/PILLAR (9).jpg";
import BF10 from "../assets/PILLAR (10).jpg";
import BF11 from "../assets/PILLAR (11).jpg";
import BF12 from "../assets/PILLAR (12).jpg";
import BF13 from "../assets/PILLAR (13).jpeg";
import BF14 from "../assets/PILLAR (14).jpg";
import BF15 from "../assets/PILLAR (15).jpg";
import BF16 from "../assets/PILLAR (16).jpg";
import BF17 from "../assets/PILLAR (17).jpg";
import BF18 from "../assets/PILLAR (18).jpg";


import Testimonials from "../components/Testimonial";
import PillarSetBanner from "./PillarBanner";

const images = [
  BF1, BF2, BF3, BF4, BF5, BF6,
  BF7, BF8, BF9, BF10, BF11, BF12,
  BF13, BF14, BF15, BF16, BF17, BF18
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

const Pillar = () => {
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
  <title>The Picture Town | Best Pillar Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Step into elegance and timeless beauty at The Picture Town's Pillar Set in Delhi NCR — perfect for pre-wedding, bridal, fashion, and royal-themed photoshoots."
  />
  <meta 
    property="og:title" 
    content="Pillar Set Photoshoots in Delhi NCR" 
  />
  <meta
    property="og:description"
    content="Capture regal, elegant, and grand moments at our beautifully designed Pillar Set photoshoot location in Delhi NCR — ideal for couples, bridal portraits, and luxury-themed shoots."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/pillar-set-photoshoot-location-in-delhi"
  />
</Helmet>


    <PillarSetBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Step into Timeless Elegance</span>
      <br />
      <span className="text-yellow-700">at Our Grand Pillar Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Pillar Set photoshoot location </span>
      blends regal architecture with cinematic charm, offering the perfect backdrop 
      for <span className="font-semibold text-black">pre-wedding shoots</span>, bridal portraits, 
      fashion photography, or royal-themed concepts. The majestic pillars, intricate detailing, 
      and grand ambience create a sense of luxury and timeless beauty in every frame. 
      Celebrated as one of the
      <span className="font-semibold text-black"> most elegant and sophisticated photoshoot spots in Delhi NCR</span>, 
      it’s the ultimate way to make your special moments feel truly royal.
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

export default Pillar;