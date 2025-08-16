import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import STREET1 from "../assets/STREET (1).jpg";
import STREET2 from "../assets/STREET (2).jpg";
import STREET4 from "../assets/STREET (4).jpg";
import STREET5 from "../assets/STREET (5).jpg";
import STREET6 from "../assets/STREET (6).jpg";
import STREET7 from "../assets/STREET (7).jpg";
import STREET8 from "../assets/STREET (8).jpg";
import STREET9 from "../assets/STREET (9).jpg";
import STREET10 from "../assets/STREET1.jpg";
import STREET11 from "../assets/STREET (11).jpeg";
import STREET12 from "../assets/STREET.jpg";


import Testimonials from "../components/Testimonial";
import SpanishCafeStreetBanner from "./StreetBanner";

const images = [
  STREET1, STREET2, STREET4, STREET5, STREET6,
  STREET7, STREET8, STREET9, STREET10, STREET11, STREET12
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

const Street = () => {
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
  <title>The Picture Town -Alipur | Best Spanish Cafe Street Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Immerse yourself in the vibrant charm of The Picture Town -Alipur's Spanish Cafe Street Set in Delhi NCR — a perfect backdrop for cozy, cultural, and lifestyle photography."
  />
  <meta property="og:title" content="Spanish Cafe Street Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture lively and intimate moments at our Spanish Cafe Street photoshoot location in Delhi NCR — ideal for fashion, candid portraits, and cultural themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/spanish-cafe-photoshoot-location-in-delhi" />
</Helmet>

      <SpanishCafeStreetBanner/>



  <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Savor the Vibrant Charm</span>
      <br />
      <span className="text-red-600">of Our Spanish Cafe Street Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Spanish Cafe Street photoshoot location </span>
      captures the lively and cozy atmosphere of authentic Spanish streets. Perfect for
      <span className="font-semibold text-black"> lifestyle shoots</span>, candid portraits,
      or cultural storytelling, the colorful café setting offers a warm and inviting
      backdrop. Known as one of the
      <span className="font-semibold text-black"> most unique and atmospheric photoshoot locations in Delhi NCR</span>,
      it’s your perfect choice for memorable, spirited captures.
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

export default Street;