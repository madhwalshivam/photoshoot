import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF1 from "../assets/BW (1).jpeg";
import BF2 from "../assets/BW (2).jpg";
import BF3 from "../assets/BW (3).jpg";
import BF4 from "../assets/BW (4).jpg";
import BF10 from "../assets/BW (10).jpg";
import BF11 from "../assets/BW (11).jpg";
import BF12 from "../assets/BW (12).jpg";
import BF13 from "../assets/BW (13).jpg";
import BF14 from "../assets/BW (14).jpg";
import BF15 from "../assets/BW (15).jpg";
import BF16 from "../assets/BW (16).jpg";
import BF17 from "../assets/BW (17).jpg";
import BF18 from "../assets/BW (18).jpg";
import BF19 from "../assets/BW (19).jpg";
import BF20 from "../assets/BW (20).jpg";
import BF21 from "../assets/BW (21).jpg";
import BF22 from "../assets/BW (22).jpg";
import BF23 from "../assets/BW (23).jpg";
import BF24 from "../assets/BW (24).jpg";



import Testimonials from "../components/Testimonial";
import BrickWallSetBanner from "./WallBanner";

const images = [
  BF1, BF2, BF3, BF4, BF10, BF11, BF12,
  BF13, BF14, BF15, BF16, BF17, BF18,
  BF19, BF20, BF21, BF22, BF23, BF24
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

const Wall = () => {
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
  <title>The Picture Town | Best Brick Wall Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Add a rustic and vintage charm to your memories at The Picture Town's Brick Wall Set in Delhi NCR — perfect for pre-wedding, lifestyle, fashion, and creative photoshoots."
  />
  <meta 
    property="og:title" 
    content="Brick Wall Set Photoshoots in Delhi NCR" 
  />
  <meta
    property="og:description"
    content="Capture rustic, bold, and timeless moments at our beautifully crafted Brick Wall Set photoshoot location in Delhi NCR — ideal for couples, influencers, and creative shoots."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/brick-wall-photoshoot-location-in-delhi"
  />
</Helmet>


   <BrickWallSetBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Add Rustic Charm to Your Memories</span>
      <br />
      <span className="text-red-700">at Our Vintage Brick Wall Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Brick Wall Set photoshoot location </span>
      brings a raw, bold, and vintage charm to your pictures, making it a unique 
      backdrop for <span className="font-semibold text-black">pre-wedding shoots</span>, 
      lifestyle portraits, fashion photography, or creative editorial concepts. 
      The rich brick textures and rustic aesthetics add depth, character, and warmth to every shot. 
      Recognized as one of the 
      <span className="font-semibold text-black"> most authentic and Instagram-worthy photoshoot spots in Delhi NCR</span>, 
      it’s the perfect place to give your memories a timeless, old-world appeal.
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

export default Wall;