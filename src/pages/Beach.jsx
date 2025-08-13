import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF2 from "../assets/BEACH (1).jpg";
import BF3 from "../assets/BEACH (2).jpg";
import BF4 from "../assets/BEACH (4).jpg";
import BF5 from "../assets/beach11.jpg";



import Testimonials from "../components/Testimonial";
import BeachBanner from "./BeachBanner";

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

const Beach = () => {
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
  <title>The Picture Town | Best Beach Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Feel the sun, sand, and sea breeze at The Picture Town's Beach Set in Delhi NCR — a perfect backdrop for tropical, romantic, and summer-themed photography."
  />
  <meta property="og:title" content="Beach Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture sunny and vibrant moments at our Beach Set photoshoot location in Delhi NCR — ideal for couple, lifestyle, and travel-inspired themes."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/beach-photoshoot-location-in-delhi"
  />
</Helmet>




     <BeachBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Soak in the Sun & Breeze</span>
      <br />
      <span className="text-blue-600">at Our Stunning Beach Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Beach Set photoshoot location </span>
      offers a vibrant and scenic backdrop, perfect for capturing sunny, carefree moments. 
      Ideal for <span className="font-semibold text-black">romantic shoots</span>, 
      tropical-inspired themes, or joyful celebrations, the golden sand, calming waves, 
      and bright skies create a refreshing and picturesque setting. Recognized as one of the 
      <span className="font-semibold text-black"> most beautiful and unique photoshoot locations in Delhi NCR</span>, 
      it’s your go-to destination for timeless, sun-kissed captures.
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

export default Beach;