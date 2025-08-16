import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import r1 from "../assets/R (1).jpg";
import r2 from "../assets/R (2).jpg";
import r3 from "../assets/R (3).jpg";
import r4 from "../assets/R (4).jpg";
import r5 from "../assets/R (5).jpg";
import r6 from "../assets/R (6).jpg";
import r7 from "../assets/R (7).jpg";
import r8 from "../assets/R (8).jpg";
import r9 from "../assets/R (9).jpg";
import r10 from "../assets/R (10).jpg";
import r11 from "../assets/R (11).jpg";
import r12 from "../assets/R (12).jpg";
import r13 from "../assets/R (13).jpg";
import r14 from "../assets/R (14).jpg";
import r15 from "../assets/R (15).jpg";
import r16 from "../assets/R (16).jpeg";
import r17 from "../assets/R (17).jpg";
import r18 from "../assets/R (18).jpeg";
import r19 from "../assets/redd.jpg";
import r20 from "../assets/R (20).jpeg";
import r21 from "../assets/R (21).jpg";
import r22 from "../assets/R (22).jpeg";
import r23 from "../assets/R (23).jpg";
import r24 from "../assets/R (24).jpeg";
import r25 from "../assets/R (25).jpg";
import r26 from "../assets/R (26).jpeg";
import r27 from "../assets/R (27).jpg";
import r28 from "../assets/R (28).jpeg";
import r29 from "../assets/R (29).jpeg";
import r30 from "../assets/R (30).jpeg";
import r31 from "../assets/R (31).jpeg";
import r32 from "../assets/R (32).jpeg";
import r33 from "../assets/R (33).jpeg";


import Testimonials from "../components/Testimonial";
import RedBanner from "./RedBanner";

const images = [
  r1, r2, r3, r4, r5, r6, r7, r8, r9, r10,
  r11, r12, r13, r14, r15, r16, r17, r18, r19, r20,
  r21, r22, r23, r24, r25, r26, r27, r28, r29, r30,
  r31, r32, r33
];



// Custom hook to detect scroll into view
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

const Red = () => {
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
  <title>The Picture Town -Alipur | Best Red Courtyard Haveli Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Step into royalty at The Picture Town -Alipur's Red Courtyard Haveli photoshoot location in Delhi NCR. Perfect for pre-wedding, fashion, and traditional shoots."
  />
  <meta property="og:title" content="Royal Red Courtyard Haveli Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Experience the grandeur of heritage with our Red Courtyard Haveli photoshoot location in Delhi NCR — the perfect backdrop for timeless memories."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/red-Courtyard-haveli-photoshoot-location-in-delhi" />
</Helmet>


     <RedBanner/>

    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing Timeless Moments</span>
      <br />
      <span className="text-red-500">at the Royal Red Courtyard Haveli</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Red Courtyard Haveli photoshoot location </span>
      blends regal architecture with vibrant heritage charm. Whether it’s for a
      <span className="font-semibold text-black"> pre-wedding shoot</span>, fashion editorial,
      or cultural portrait session, the haveli’s intricate details and royal ambience
      offer a backdrop steeped in tradition. Known as one of the
      <span className="font-semibold text-black"> most captivating photoshoot locations in Delhi NCR</span>,
      it transforms your special moments into timeless works of art.
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

export default Red;