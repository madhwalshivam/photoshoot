import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import WIND2 from "../assets/WIND (2).jpg";
import WIND3 from "../assets/WIND (3).jpg";
import WIND4 from "../assets/WIND (4).jpg";
import WIND5 from "../assets/WIND (5).jpg";
import WIND6 from "../assets/WIND (6).jpg";
import WIND7 from "../assets/WIND (7).jpg";
import WIND8 from "../assets/WIND (8).jpg";
import WIND10 from "../assets/WIND (10).jpg";
import WIND11 from "../assets/WIND (11).jpeg";
import WIND12 from "../assets/WIND.jpg";


import Testimonials from "../components/Testimonial";
import WindMillSetBanner from "./WindBanner";

const images = [
   WIND3, WIND4, WIND5, WIND6, WIND7,WIND2, WIND8, WIND10, WIND11, WIND12
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

const Wind = () => {
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
  <title>The Picture Town | Best Wind Mill Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Discover the serene and timeless beauty of The Picture Town's Wind Mill Set in Delhi NCR — an ideal setting for peaceful, nature-inspired, and elegant photography."
  />
  <meta property="og:title" content="Wind Mill Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture tranquil and graceful moments at our Wind Mill Set photoshoot location in Delhi NCR — perfect for heritage, lifestyle, and romantic themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/windmill-photoshoot-location-in-delhi" />
</Helmet>


     <WindMillSetBanner/>


<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Experience Tranquil Beauty</span>
      <br />
      <span className="text-green-700">at Our Serene Wind Mill Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Wind Mill Set photoshoot location </span>
      offers a peaceful and picturesque backdrop inspired by rustic charm and nature. Perfect for
      <span className="font-semibold text-black"> heritage shoots</span>, romantic portraits,
      or calm storytelling themes, the elegant windmill and open skies create a timeless setting. Recognized as one of the
      <span className="font-semibold text-black"> most scenic and graceful photoshoot locations in Delhi NCR</span>,
      it’s your go-to spot for serene and heartfelt captures.
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

export default Wind;