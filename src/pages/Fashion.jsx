import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import a8 from "../assets/a8.jpg";
import a9 from "../assets/a9.jpg";
import a10 from "../assets/a10.jpg";
import a11 from "../assets/a13.jpg";
import a12 from "../assets/a12.jpg";
import Testimonials from "../components/Testimonial";
import FashionBanner from "./FasionBanner";

const images = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];

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

const Fashion = () => {
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
        <title>The Picture Town | Best Fashion Shoots in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town offers the best maternity photoshoots in Delhi NCR. Capture your motherhood journey with timeless and elegant photography."
        />
        <meta property="og:title" content="Celebrating the Journey of Motherhood" />
        <meta
          property="og:description"
          content="Heartfelt maternity photoshoots that honor your beautiful journey into motherhood. Trusted by families in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/fashion-shoot-in-delhi" />
      </Helmet>

      <FashionBanner />

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Capturing the Essence of Fashion</span>
            <br />
            <span className="text-orange-500">with Style and Elegance</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town</span>, we bring your style to life through
            professionally curated <span className="font-semibold text-black">fashion photoshoots</span>. Whether it's
            for a portfolio, brand campaign, or personal styling session, we specialize in bold, expressive, and
            high-end imagery that defines your unique look. Trusted as one of the{" "}
            <span className="font-semibold text-black">top fashion photographers in Delhi NCR</span>, we blend
            creativity and expertise to deliver magazine-quality visuals every time.
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

export default Fashion;

