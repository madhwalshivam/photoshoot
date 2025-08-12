import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import sp1 from "../assets/SWIMMING POOL (1).jpg";
import sp2 from "../assets/SWIMMING POOL (2).jpg";
import sp3 from "../assets/SWIMMING POOL (3).jpg";
import sp4 from "../assets/SWIMMING POOL (4).jpg";
import sp5 from "../assets/SWIMMING POOL (5).jpg";
import sp6 from "../assets/SWIMMING POOL (6).jpg";
import sp7 from "../assets/SWIMMING POOL (7).jpg";
import sp8 from "../assets/SWIMMING POOL (8).jpg";
import sp9 from "../assets/SWIMMING POOL (9).jpg";
import sp10 from "../assets/SWIMMING POOL (10).jpg";
import sp11 from "../assets/SWIMMING POOL (11).jpg";
import sp12 from "../assets/SWIMMING POOL (12).jpg";
import sp13 from "../assets/SWIMMING POOL (13).jpeg";
import sp14 from "../assets/SWIMMING POOL (14).jpg";
import sp15 from "../assets/SWIMMING POOL (15).jpg";
import sp16 from "../assets/SWIMMING POOL (16).jpg";
import sp17 from "../assets/SWIMMING POOL (17).jpg";
import sp18 from "../assets/SWIMMING POOL (18).jpg";
import sp19 from "../assets/SWIMMING POOL (19).jpg";
import sp20 from "../assets/SWIMMING POOL (20).jpeg";

import Testimonials from "../components/Testimonial";
import SwimmingPoolBanner from "./SwimmingBanner";

const images = [
  sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10,
  sp11, sp12, sp13, sp14, sp15, sp16, sp17, sp18, sp19, sp20,
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

const SwimmingPool = () => {
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
        <title>The Picture Town | Best Swimming Pool Photoshoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="Relax and shine at The Picture Town's Swimming Pool photoshoot location in Delhi NCR. Ideal for refreshing, lifestyle, pre-wedding, and fashion photography."
        />
        <meta property="og:title" content="Swimming Pool Photoshoots in Delhi NCR" />
        <meta
          property="og:description"
          content="Capture refreshing and elegant moments at our Swimming Pool photoshoot location in Delhi NCR — perfect for vibrant, stylish shoots."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/swimming-pool-photoshoot-location-in-delhi" />
      </Helmet>

      <SwimmingPoolBanner/>
      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Capturing Refreshing Moments</span>
            <br />
            <span className="text-blue-400">at Our Stunning Swimming Pool</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town</span>, our
            <span className="font-semibold text-black"> Swimming Pool photoshoot location </span>
            offers a perfect blend of elegance and tranquility. Whether it’s for a
            <span className="font-semibold text-black"> pre-wedding shoot</span>, fashion editorial,
            or lifestyle session, the sparkling waters and serene surroundings create a
            breathtaking backdrop for every frame. Recognized as one of the
            <span className="font-semibold text-black"> best Swimming Pool photoshoot locations in Delhi NCR</span>,
            we bring your vision to life with style, charm, and vibrant energy.
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
            alt="Swimming Pool Large View"
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

export default SwimmingPool;
