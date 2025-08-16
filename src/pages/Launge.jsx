import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import D1 from "../assets/D (1).jpg";
import D2 from "../assets/D (2).jpg";
import D3 from "../assets/D (3).jpg";
import D4 from "../assets/D (4).jpg";
import D5 from "../assets/D (5).jpg";
import D6 from "../assets/D (6).jpg";
import D7 from "../assets/D (7).jpg";
import D8 from "../assets/D (8).jpg";
import D9 from "../assets/D (6).jpeg";
import D10 from "../assets/D (10).jpg";
import D11 from "../assets/D (11).jpg";
import D12 from "../assets/D (12).jpg";
import D13 from "../assets/D (10).jpeg";
import D14 from "../assets/D (12).jpeg";
import D15 from "../assets/D (14).jpeg";
import D16 from "../assets/D (16).jpg";
import D17 from "../assets/D (16).jpeg";
import D18 from "../assets/D (18).jpg";
import D19 from "../assets/D (19).jpg";
import D20 from "../assets/D (1).jpeg";



import Testimonials from "../components/Testimonial";
import LoungeSetBanner from "./LaungeBanner";


const images = [
  D1, D2, D3, D4, D5, D6, D7, D8, D9, D10,
  D11, D12, D13, D14, D15, D16, D17, D18, D19, D20
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

const Launge = () => {
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
  <title>The Picture Town -Alipur | Best Lounge Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Unwind and pose at The Picture Town -Alipur's Lounge Set in Delhi NCR — a perfect backdrop for casual, chic, and lifestyle-themed photography."
  />
  <meta property="og:title" content="Lounge Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture cozy, stylish, and candid moments at our Lounge Set photoshoot location in Delhi NCR — ideal for lifestyle, fashion, and casual themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/lounge-photoshoot-location-in-delhi" />
</Helmet>

        <LoungeSetBanner/>



   <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing the Comfort</span>
      <br />
      <span className="text-blue-600">in Our Chic Lounge Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Lounge Set photoshoot location </span>
      combines modern elegance with a relaxed vibe. Perfect for a
      <span className="font-semibold text-black"> lifestyle shoot</span>, fashion portraits,
      or cozy candid moments, the stylish décor and inviting ambience
      create a picture-perfect backdrop. Recognized as one of the
      <span className="font-semibold text-black"> best lifestyle-inspired photoshoot locations in Delhi NCR</span>,
      we bring your vision to life with comfort, charm, and a touch of sophistication.
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

export default Launge;
