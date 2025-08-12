import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import B3 from "../assets/B (2).jpeg";
import B4 from "../assets/B (4).jpg";
import B5 from "../assets/B (5).jpg";
import B6 from "../assets/B (6).jpg";
import B7 from "../assets/B (7).jpg";
import B8 from "../assets/B (8).jpg";
import B9 from "../assets/B (9).jpg";
import B10 from "../assets/B (10).jpg";
import B11 from "../assets/B (11).jpg";
import B12 from "../assets/B (12).jpg";
import B13 from "../assets/B (13).jpg";
import B14 from "../assets/B (14).jpg";
import B15 from "../assets/B (15).jpg";
import B16 from "../assets/B (16).jpg";
import B18 from "../assets/B (18).jpg";
import B19 from "../assets/B (19).jpg";
import B20 from "../assets/B (20).jpg";
import B21 from "../assets/B (21).jpg";
import B22 from "../assets/B (22).jpg";
import B23 from "../assets/B (23).jpg";
import B24 from "../assets/B (24).jpg";
import B25 from "../assets/B (25).jpg";
import B26 from "../assets/B (26).jpg";
import B27 from "../assets/B (27).jpg";
import B28 from "../assets/B (28).jpg";
import B29 from "../assets/B (29).jpg";
import B30 from "../assets/B (30).jpg";
import B31 from "../assets/B (31).jpg";
import B32 from "../assets/B (32).jpg";
import B34 from "../assets/B (34).jpg";
import B35 from "../assets/B (5).jpeg";
import B36 from "../assets/B (36).jpg";
import B37 from "../assets/B (37).jpg";
import B38 from "../assets/B (38).jpg";
import B39 from "../assets/B (39).jpg";
import B40 from "../assets/B (40).jpg";
import B41 from "../assets/B (41).jpg";
import B42 from "../assets/B (42).jpg";
import B43 from "../assets/B (43).jpg";



import Testimonials from "../components/Testimonial";
import BenchSetBanner from "./BenchBanner";

const images = [
   B3, B4, B5, B6, B7, B8, B9, B10, B11,
  B12, B13, B14, B15, B16, B18, B19, B20, B21,
  B22, B23, B24, B25, B26, B27, B28, B29, B30, B31,
  B32, B34, B35, B36, B37, B38, B39, B40, B41,
  B42, B43 
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

const Bench = () => {
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
  <title>The Picture Town | Best Bench Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Create timeless memories at The Picture Town's Bench Set in Delhi NCR — the perfect backdrop for romantic, serene, and classic-themed photography."
  />
  <meta property="og:title" content="Bench Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture serene, romantic, and elegant moments at our Bench Set photoshoot location in Delhi NCR — ideal for couples, portraits, and storytelling themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/bench-photoshoot-location-in-delhi" />
</Helmet>


        <BenchSetBanner/>



   <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing Timeless Moments</span>
      <br />
      <span className="text-blue-600">on Our Elegant Bench Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Bench Set photoshoot location </span>
      offers a perfect blend of elegance and serenity. Ideal for
      <span className="font-semibold text-black"> couple portraits</span>, romantic pre-wedding shoots,
      or peaceful storytelling themes, the graceful design and tranquil setting
      create an unforgettable backdrop. Recognized as one of the
      <span className="font-semibold text-black"> best romantic and classic photoshoot locations in Delhi NCR</span>,
      we bring your story to life with beauty, charm, and a timeless touch.
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

export default Bench;
