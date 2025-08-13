import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import J1 from "../assets/J (1).jpg";
import J2 from "../assets/J (2).jpg";
import J3 from "../assets/J (3).jpg";

import J5 from "../assets/J (5).jpg";
import J6 from "../assets/J (6).jpg";
import J7 from "../assets/J (7).jpg";
import J8 from "../assets/J (8).jpg";
import J9 from "../assets/J (9).jpg";
import J10 from "../assets/J (10).jpg";
import J11 from "../assets/J (11).jpg";
import J12 from "../assets/J (12).jpg";
import J13 from "../assets/J (13).jpg";
import J14 from "../assets/junkkk.jpg";
import J15 from "../assets/J (15).jpg";
import J16 from "../assets/J (16).jpg";
import J17 from "../assets/J (17).jpg";
import J18 from "../assets/JUNK.jpeg";
import J21 from "../assets/J (21).jpg";
import J24 from "../assets/J (24).jpg";
import J25 from "../assets/J (25).jpg";
import J26 from "../assets/J (26).jpg";
import J27 from "../assets/J (27).jpg";
import J28 from "../assets/J (28).jpg";




import Testimonials from "../components/Testimonial";
import JunkyardSetBanner from "./JunkBanner";

const images = [
  J1, J2, J3, J5, J6, J7, J8, J9, J10,
  J11, J12, J13, J14, J15, J16, J17, J18, 
  J21, J24, J25, J26, J27, J28
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

const Junk = () => {
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
  <title>The Picture Town | Best Junkyard Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Explore the raw, rustic charm of The Picture Town's Junkyard Set in Delhi NCR — a perfect backdrop for edgy, gritty, and urban-inspired photography."
  />
  <meta property="og:title" content="Junkyard Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture bold and authentic moments at our Junkyard Set photoshoot location in Delhi NCR — ideal for fashion, street style, and artistic themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/junkyard-photoshoot-location-in-delhi" />
</Helmet>



     <JunkyardSetBanner/>

<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Embrace Raw Authenticity</span>
      <br />
      <span className="text-red-700">at Our Gritty Junkyard Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Junkyard Set photoshoot location </span>
      delivers an edgy and raw atmosphere perfect for bold, artistic, and urban-themed portraits. Ideal for
      <span className="font-semibold text-black"> fashion shoots</span>, creative storytelling,
      or street-style captures, the rugged junkyard backdrop adds character and attitude to every shot. Known as one of the
      <span className="font-semibold text-black"> most unique and striking photoshoot locations in Delhi NCR</span>,
      it’s your go-to spot for authentic and memorable imagery.
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

export default Junk;