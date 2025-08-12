import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import K1 from "../assets/K (1).jpg";
import K2 from "../assets/K (2).jpg";
import K3 from "../assets/K (3).jpg";
import K4 from "../assets/K (4).jpg";
import K5 from "../assets/K (5).jpg";
import K6 from "../assets/K (6).jpg";
import K7 from "../assets/K (7).jpg";
import K8 from "../assets/K (8).jpg";
import K9 from "../assets/K (9).jpg";
import K10 from "../assets/K (10).jpg";
import K11 from "../assets/K (11).jpg";
import K12 from "../assets/K (12).jpg";
import K13 from "../assets/K (13).jpg";
import K14 from "../assets/K (14).jpg";
import K15 from "../assets/K (15).jpg";
import K16 from "../assets/K (16).jpg";
import K17 from "../assets/K (17).jpg";
import K18 from "../assets/K (18).jpg";
import K19 from "../assets/K (19).jpg";
import K20 from "../assets/K (20).jpg";
import K21 from "../assets/K (21).jpg";
import K22 from "../assets/K (22).jpg";
import K23 from "../assets/K (23).jpg";
import K24 from "../assets/K (24).jpg";



import Testimonials from "../components/Testimonial";
import KurbaniSetBanner from "./KurbaniBanner";

const images = [
  K1, K2, K3, K4, K5, K6, K7, K8, K9, K10,
  K11, K12, K13, K14, K15, K16, K17, K18, K19, K20,
  K21, K22, K23, K24, 
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

const Kurbani = () => {
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
  <title>The Picture Town | Best Kurbani Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience the royal charm of The Picture Town's Kurbani Set in Delhi NCR. Perfect for traditional, cultural, and wedding-themed photography."
  />
  <meta property="og:title" content="Kurbani Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture majestic and timeless moments at our Kurbani Set photoshoot location in Delhi NCR — ideal for traditional, regal, and festive themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/kurbani-photoshoot-location-in-delhi" />
</Helmet>



    <KurbaniSetBanner/>
   <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing the Spirit</span>
      <br />
      <span className="text-blue-600">at Our Majestic Kurbani Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Kurbani Set photoshoot location </span>
      blends traditional charm with cinematic grandeur. Whether it’s for a
      <span className="font-semibold text-black"> pre-wedding shoot</span>, festive portraits,
      or a cultural storytelling concept, the detailed décor and authentic ambience
      create a breathtaking backdrop. Recognized as one of the
      <span className="font-semibold text-black"> best heritage-inspired photoshoot locations in Delhi NCR</span>,
      we bring your vision to life with tradition, elegance, and a timeless touch.
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

export default Kurbani;
