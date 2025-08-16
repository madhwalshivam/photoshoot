import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF1 from "../assets/BULB (1).jpg";
import BF2 from "../assets/BULB (1).jpeg";
import BF3 from "../assets/BULB (3).jpg";
import BF4 from "../assets/BULB (4).jpg";
import BF5 from "../assets/BULB (5).jpg";
import BF9 from "../assets/BULB (9).jpg";
import BF10 from "../assets/BULB (10).jpg";
import BF11 from "../assets/BULB (11).jpg";
import BF12 from "../assets/bulb.jpg";

import Testimonials from "../components/Testimonial";
import BulbSetBanner from "./BulbBanner";

const images = [
  BF1, BF2, BF3, BF5,  BF9, BF10,
  BF11, BF12, BF4,
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

const Bulb = () => {
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
  <title>The Picture Town -Alipur | Best Bulb Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Create warm, glowing, and cinematic memories at The Picture Town -Alipur's Bulb Set in Delhi NCR — perfect for pre-wedding, lifestyle, night, and creative photoshoots."
  />
  <meta 
    property="og:title" 
    content="Bulb Set Photoshoots in Delhi NCR" 
  />
  <meta
    property="og:description"
    content="Capture magical, warm, and ambient moments at our beautifully lit Bulb Set photoshoot location in Delhi NCR — ideal for couples, influencers, and creative night shoots."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/bulb-set-photoshoot-location-in-delhi"
  />
</Helmet>

    <BulbSetBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Light Up Your Special Moments</span>
      <br />
      <span className="text-amber-500">at Our Magical Bulb Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Bulb Set photoshoot location </span>
      offers a warm, glowing, and cinematic ambiance, perfect for creating
      unforgettable memories. Ideal for <span className="font-semibold text-black">pre-wedding shoots</span>,
      romantic couple portraits, lifestyle photography, or creative night concepts,
      the softly lit bulbs and cozy setting create a dreamy atmosphere in every shot.
      Recognized as one of the
      <span className="font-semibold text-black"> most magical and aesthetically stunning photoshoot spots in Delhi NCR</span>,
      it’s the perfect way to add a golden glow to your timeless moments.
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

export default Bulb;