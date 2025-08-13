import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF2 from "../assets/LONDON (1).jpg";
import BF3 from "../assets/LONDON (2).jpg";
import BF4 from "../assets/LONDON (3).jpg";
import BF5 from "../assets/LONDON (4).jpg";
import Testimonials from "../components/Testimonial";
import LondonStreetBanner from "./LondonBanner";

const images = [
  BF2, BF3, BF4, BF5, 
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

const London = () => {
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
  <title>The Picture Town | Best London Street Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Step into the charm of classic European streets at The Picture Town's London Street Set in Delhi NCR — perfect for vintage, fashion, and urban-themed photography."
  />
  <meta property="og:title" content="London Street Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture timeless elegance and city vibes at our London Street Set photoshoot location in Delhi NCR — ideal for couple portraits, fashion shoots, and lifestyle themes."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/london-street-photoshoot-location-in-delhi"
  />
</Helmet>





     <LondonStreetBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Experience Classic City Vibes</span>
      <br />
      <span className="text-red-600">at Our London Street Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> London Street Set photoshoot location </span>
      transports you to the charm of European streets, perfect for capturing timeless and
      stylish moments. Ideal for <span className="font-semibold text-black">fashion shoots</span>,
      pre-wedding portraits, or urban-themed concepts, the cobblestone paths, vintage facades,
      and street-side elegance provide a truly unique backdrop. Recognized as one of the
      <span className="font-semibold text-black"> most distinctive and atmospheric photoshoot locations in Delhi NCR</span>,
      it’s your go-to spot for elegant, cinematic captures.
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

export default London;