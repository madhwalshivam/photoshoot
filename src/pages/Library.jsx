import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import L1 from "../assets/L (1).jpg";
import L2 from "../assets/L (2).jpg";
import L3 from "../assets/L (3).jpg";
import L4 from "../assets/L (4).jpg";
import L5 from "../assets/L (5).jpg";
import L6 from "../assets/L (6).jpg";
import L7 from "../assets/L (7).jpg";
import L8 from "../assets/L (8).jpg";
import L9 from "../assets/L (9).jpg";
import L10 from "../assets/L (1).jpeg";
import L11 from "../assets/L (11).jpg";
import L12 from "../assets/L (12).jpg";
import Testimonials from "../components/Testimonial";
import LibrarySetBanner from "./LibraryBanner";


const images = [
  L1,L3,L2, L4, L5, L6, L7, L8, L9, L10,
  L11, L12
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

const Lib = () => {
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
  <title>The Picture Town | Best Library Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience the timeless charm of The Picture Town's Library Set photoshoot location in Delhi NCR. Perfect for book lovers, vintage vibes, pre-wedding, and lifestyle photography."
  />
  <meta property="og:title" content="Library Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture elegant and classic moments at our Library Set photoshoot location in Delhi NCR — ideal for book-themed, vintage, and stylish shoots."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/library-photoshoot-location-in-delhi" />
</Helmet>


     <LibrarySetBanner/>

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing Timeless Elegance</span>
      <br />
      <span className="text-red-600">at Our Classic Library Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Library Set photoshoot location </span>
      offers a sophisticated and vintage-inspired ambiance. Whether it’s for a
      <span className="font-semibold text-black"> pre-wedding shoot</span>, editorial portrait,
      or fashion session, the beautifully curated library filled with books and classic décor
      provides an elegant and intellectual backdrop. Recognized as one of the
      <span className="font-semibold text-black"> best indoor-themed photoshoot locations in Delhi NCR</span>,
      we bring your vision to life with warmth, refinement, and timeless style.
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

export default Lib;
