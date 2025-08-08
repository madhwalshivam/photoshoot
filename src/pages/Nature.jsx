import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import C1 from "../assets/C (1).jpeg";
import C2 from "../assets/C (2).jpeg";
import C3 from "../assets/C (3).jpeg";
import C4 from "../assets/C (4).jpeg";
import C5 from "../assets/C (5).jpg";
import C6 from "../assets/C .jpeg";
import C7 from "../assets/C (7).jpeg";
import C8 from "../assets/C (8).jpeg";
import C9 from "../assets/C (3).jpg";
import C10 from "../assets/C (11).jpeg";
import C11 from "../assets/C (11).jpg";
import C12 from "../assets/C (12).jpeg";
import C13 from "../assets/C (13).jpeg";
import C14 from "../assets/C (14).jpeg";
import C15 from "../assets/C (15).jpeg";
import C16 from "../assets/C (16).jpeg";
import C17 from "../assets/C (17).jpeg";
import C18 from "../assets/C (18).jpeg";
import C19 from "../assets/C (19).jpeg";
import C20 from "../assets/C (20).jpeg";

import Testimonials from "../components/Testimonial";
import NatureBanner from "./NatureBanner";

const images = [
  C1, C2, C3, C4, C5, C6, C7, C8,
  C9, C10, C11, C12, C13, C14, C15, C16,
  C17, C18, C19, C20
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

const Nature = () => {
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
        <title>The Picture Town | Best Nature Shoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town offers breathtaking nature photoshoots in Delhi NCR, capturing the beauty of the outdoors with creativity and passion."
        />
        <meta
          property="og:title"
          content="Stunning Nature Photography in Delhi NCR | The Picture Town"
        />
        <meta
          property="og:description"
          content="Celebrate nature’s beauty with professional photoshoots. The Picture Town delivers captivating and timeless outdoor photography in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thepicturetown.com/nature-shoot-in-delhi"
        />
      </Helmet>

      <NatureBanner />

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Breathtaking Nature Shoots</span>
            <br />
            <span className="text-yellow-400">Capturing the Beauty of the Outdoors</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town</span>, we specialize in
            stunning <span className="font-semibold text-black">nature photoshoots</span> that
            celebrate the splendor of natural landscapes, wildlife, and outdoor moments.
            From serene forests and vibrant gardens to majestic mountains and rivers,
            our expert photographers capture the essence of nature with artistry and passion.
            Recognized as one of the{" "}
            <span className="font-semibold text-black">
              best nature shoot locations in Delhi NCR
            </span>
            , we deliver images that inspire wonder and preserve memories for a lifetime.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
                  alt={`Nature Shoot ${index + 1}`}
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
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            ❮
          </button>
          <img
            src={images[currentIndex]}
            alt={`Nature Shoot Large View ${currentIndex + 1}`}
            className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
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

export default Nature;
