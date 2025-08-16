import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF2 from "../assets/BF (2).jpg";
import BF3 from "../assets/BF (3).jpg";
import BF4 from "../assets/BF (4).jpeg";
import BF5 from "../assets/BF (5).jpg";
import BF6 from "../assets/BF (6).jpeg";
import BF8 from "../assets/BF (8).jpg";
import BF10 from "../assets/BF (10).jpg";
import BF11 from "../assets/BF (11).jpeg";
import BF14 from "../assets/BF (14).jpeg";
import BF15 from "../assets/BF (15).jpeg";
import BF18 from "../assets/BF (18).jpeg";
import BF19 from "../assets/BF (19).jpeg";
import BF22 from "../assets/BF (22).jpg";
import BF23 from "../assets/BF (23).jpeg";



import Testimonials from "../components/Testimonial";
import BonfireSetBanner from "./BFBanner";

const images = [
  BF2, BF3, BF4, BF5, BF6, BF8,  BF10,
  BF11, BF14, BF15,  BF18, BF19,
  BF22, BF23, 
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

const Born = () => {
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
  <title>The Picture Town -Alipur | Best Bonfire Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience the cozy warmth and magical ambiance of The Picture Town -Alipur's Bonfire Set in Delhi NCR — an ideal setting for intimate, rustic, and evening-themed photography."
  />
  <meta property="og:title" content="Bonfire Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture warm and heartfelt moments at our Bonfire Set photoshoot location in Delhi NCR — perfect for romantic, lifestyle, and nature-inspired themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/bonfire-photoshoot-location-in-delhi" />
</Helmet>



     <BonfireSetBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Warm Up Your Evenings</span>
      <br />
      <span className="text-orange-600">at Our Cozy Bonfire Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Bonfire Set photoshoot location </span>
      provides an inviting and intimate atmosphere perfect for capturing warm, heartfelt moments. Ideal for
      <span className="font-semibold text-black"> romantic portraits</span>, close-knit gatherings,
      or cozy storytelling, the flickering flames and rustic ambiance bring magic and charm to every frame. Recognized as one of the
      <span className="font-semibold text-black"> most enchanting and atmospheric photoshoot locations in Delhi NCR</span>,
      it’s your go-to spot for memorable, glowing captures.
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

export default Born;