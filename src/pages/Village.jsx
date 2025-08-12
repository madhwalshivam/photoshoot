import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import V1 from "../assets/V (1).jpg";
import V2 from "../assets/V (2).jpeg";
import V3 from "../assets/V (3).jpeg";
import V4 from "../assets/V (4).jpeg";
import V5 from "../assets/V (5).jpg";
import V6 from "../assets/V (6).jpg";
import V7 from "../assets/V (7).jpg";
import V8 from "../assets/V (8).jpg";
import V9 from "../assets/V (9).jpg";
import V10 from "../assets/V (10).jpg";
import V11 from "../assets/V (11).jpg";
import V12 from "../assets/V (12).jpg";
import V13 from "../assets/V (13).jpg";
import V14 from "../assets/V (14).jpg";
import V15 from "../assets/V (15).jpg";
import V16 from "../assets/V (16).jpg";
import V17 from "../assets/V (17).jpg";
import V18 from "../assets/V (18).jpg";
import V19 from "../assets/V (21).jpg";
import V20 from "../assets/V (20).jpg";


import Testimonials from "../components/Testimonial";
import VillageSetBanner from "./VillageBanner";

const images = [
  V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
  V11, V12, V13, V14, V15, V16, V17, V18, V19, V20
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

const Village = () => {
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
  <title>The Picture Town | Best Village Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience the authentic rustic beauty of The Picture Town's Village Set in Delhi NCR — an ideal setting for traditional, cultural, and nature-inspired photography."
  />
  <meta property="og:title" content="Village Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture timeless and heartfelt moments at our Village Set photoshoot location in Delhi NCR — perfect for heritage, lifestyle, and storytelling themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/village-photoshoot-location-in-delhi" />
</Helmet>




       <VillageSetBanner/>



  <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Embrace Rustic Beauty</span>
      <br />
      <span className="text-green-700">in Our Charming Village Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Village Set photoshoot location </span>
      celebrates the simple, authentic charm of rural life. Perfect for
      <span className="font-semibold text-black"> heritage shoots</span>, lifestyle portraits,
      or nature-inspired storytelling, the cozy village ambiance provides a warm and inviting
      backdrop. Known as one of the
      <span className="font-semibold text-black"> most picturesque and heartfelt photoshoot locations in Delhi NCR</span>,
      it’s your ideal choice for timeless, soulful captures.
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

export default Village;