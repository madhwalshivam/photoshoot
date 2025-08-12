import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import MM1 from "../assets/MARRY ME  (1).jpg";
import MM2 from "../assets/MARRY ME  (2).jpg";
import MM3 from "../assets/MARRY ME  (3).jpg";
import MM4 from "../assets/MARRY ME  (4).jpg";
import MM5 from "../assets/MARRY ME  (5).jpg";
import MM6 from "../assets/MARRY ME  (1).jpeg";
import MM7 from "../assets/MARRY ME  (7).jpg";
import MM8 from "../assets/MARRY ME  (8).jpg";
import MM9 from "../assets/MARRY ME  (9).jpg";
import MM10 from "../assets/MARRY ME  (1)..jpg";
import MM11 from "../assets/MARRY ME  (11).jpg";
import MM12 from "../assets/MARRY ME  (12).jpg";
import MM13 from "../assets/MARRY ME  (13).jpg";
import MM14 from "../assets/MARRY ME  (14).jpg";
import MM15 from "../assets/MARRY ME  (15).jpg";
import MM16 from "../assets/MARRY ME  (16).jpg";
import MM17 from "../assets/MARRY ME  (17).jpg";
import MM18 from "../assets/MARRY ME  (18).jpg";
import MM19 from "../assets/MARRY ME  (19).jpg";
import MM20 from "../assets/MARRY ME  (20).jpg";
import MM21 from "../assets/MARRY ME  (21).jpg";
import MM22 from "../assets/MARRY ME  (22).jpeg";
import MM23 from "../assets/MARRY ME  (23).jpg";
import MM24 from "../assets/MARRY ME  (24).jpg";
import MM25 from "../assets/MARRY ME  (25).jpg";
import MM26 from "../assets/MARRY ME  (26).jpg";
import MM27 from "../assets/MARRY ME  (27).jpg";
import MM28 from "../assets/MARRY ME  (28).jpg";


import Testimonials from "../components/Testimonial";
import MarryMeBanner from "./MarryBanner";


const images = [
  MM1, MM2, MM3, MM4, MM5, MM6, MM7, MM8, MM9, MM10,
  MM11, MM12, MM13, MM14, MM15, MM16, MM17, MM18, MM19, MM20,
  MM21, MM22, MM23, MM24, MM25, MM26, MM27, MM28
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

const Marry = () => {
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
  <title>The Picture Town | Best Marry Me Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Celebrate love with The Picture Town's romantic 'Marry Me' photoshoot location in Delhi NCR. Perfect for proposals, pre-wedding shoots, and capturing forever memories."
  />
  <meta property="og:title" content="Marry Me Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Make your special moment unforgettable at our stunning 'Marry Me' photoshoot location in Delhi NCR — perfect for proposals and romantic memories."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/marry-me-photoshoot-location-in-delhi" />
</Helmet>


     <MarryMeBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Say “Yes” to Forever</span>
      <br />
      <span className="text-green-600">at Our Stunning Marry Me Setup</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Marry Me photoshoot location </span>
      sets the stage for unforgettable proposals and romantic celebrations.
      With dreamy décor, warm lighting, and a magical ambiance, it’s the perfect
      spot to pop the question or capture your love story.
      Recognized as one of the
      <span className="font-semibold text-black"> most romantic proposal locations in Delhi NCR</span>,
      we create the perfect backdrop for moments you’ll cherish for a lifetime.
    </p>
  </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
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

export default Marry;