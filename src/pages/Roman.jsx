import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ro2 from "../assets/Ro (2).jpeg";
import ro4 from "../assets/Ro (4).jpeg";
import ro8 from "../assets/Ro (8).jpg";
import ro9 from "../assets/Ro (9).jpg";
import ro10 from "../assets/Ro (10).jpg";
import ro11 from "../assets/Ro (11).jpg";
import ro12 from "../assets/Ro (12).jpg";
import ro13 from "../assets/Ro (13).jpg";
import ro14 from "../assets/Ro (14).jpg";
import ro15 from "../assets/Ro (15).jpg";
import ro16 from "../assets/Ro (16).jpg";
import ro17 from "../assets/Ro (17).jpg";
import ro18 from "../assets/Ro (18).jpg";
import ro19 from "../assets/Ro (19).jpg";
import ro20 from "../assets/Ro (20).jpg";
import ro21 from "../assets/Ro (21).jpg";
import ro22 from "../assets/Ro (22).jpg";
import ro23 from "../assets/Ro (23).jpg";




import Testimonials from "../components/Testimonial";
import RomanPillarBanner from "./RomanBanner";

const images = [
   ro2, ro4, ro8, ro9, ro10,
  ro11, ro12, ro13, ro14, ro15, ro16, ro17, ro18, ro19, ro20,
  ro21, ro22, ro23
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

const Roman = () => {
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
  <title>The Picture Town | Best Roman Pillar Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience timeless grandeur at The Picture Town's Roman Pillar photoshoot location in Delhi NCR. Perfect for heritage, classical, pre-wedding, and fashion photography."
  />
  <meta property="og:title" content="Roman Pillar Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture elegance and history at our Roman Pillar photoshoot location in Delhi NCR — where majestic columns meet classical beauty."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/roman-pillar-photoshoot-location-in-delhi" />
</Helmet>





    <RomanPillarBanner/>

    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
<div className="max-w-7xl mx-auto text-center">
  <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
    <span className="font-playfair">Capturing Timeless Elegance</span>
    <br />
    <span className="text-gray-700">amidst Our Majestic Roman Pillars</span>
  </p>

  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
    At <span className="font-semibold text-black">The Picture Town</span>, our
    <span className="font-semibold text-black"> Roman Pillar photoshoot location </span>
    offers an aura of classical grandeur and architectural beauty. Featuring majestic stone columns
    and historic-inspired settings, it’s ideal for a
    <span className="font-semibold text-black"> pre-wedding shoot</span>, fashion editorial,
    or lifestyle session. Drawing inspiration from timeless Roman architecture, the setting creates
    one of the
    <span className="font-semibold text-black"> best heritage-style photoshoot locations in Delhi NCR</span>,
    ensuring each frame reflects sophistication, strength, and enduring charm.
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
                  alt={`Fashion Shoot ${index + 1}`}
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
            alt="Fashion Large View"
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

export default Roman;