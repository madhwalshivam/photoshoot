import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import a1 from "../assets/BRAND2.png";
import a2 from "../assets/BRAND3.png";
import a3 from "../assets/BRAND4.png";
import a4 from "../assets/BRAND5.png";
import a5 from "../assets/BRAND6.png";
import a6 from "../assets/BRAND7.png";
import a7 from "../assets/BRAND8.png";
import a8 from "../assets/BRAND9.png";
import a9 from "../assets/BRAND10.png";
import a10 from "../assets/BRAND1.png";
import a11 from "../assets/BRAND11.jpg";
import a12 from "../assets/BRAND12.jpg";

import Testimonials from "../components/Testimonial";
import BrandBanner from "./BrandBanner";

const images = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];

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

const Brand = () => {
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
  <title>The Picture Town | Best Brand Shoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="The Picture Town offers premium brand shoots in Delhi NCR, specializing in lifestyle, corporate, and product photography that highlights your brand's unique identity."
  />
  <meta 
    property="og:title" 
    content="Professional Brand Shoots in Delhi NCR | The Picture Town" 
  />
  <meta
    property="og:description"
    content="Elevate your brand with stunning photography. From lifestyle to corporate campaigns, The Picture Town delivers creative and impactful brand shoots in Delhi NCR."
  />
  <meta property="og:type" content="website" />
  <meta 
    property="og:url" 
    content="https://thepicturetown.com/brand-shoot-in-delhi" 
  />
</Helmet>



     <BrandBanner/>

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
  <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
    <span className="font-playfair">Professional Brand Shoots</span>
    <br />
    <span className="text-green-500">That Define Your Identity</span>
  </p>

  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
    At <span className="font-semibold text-black">The Picture Town</span>, we
    specialize in creating impactful{" "}
    <span className="font-semibold text-black">brand photoshoots</span> that
    showcase your business’s unique personality. From fashion labels and product
    lines to corporate branding and promotional campaigns, our creative
    photography captures your story with elegance and precision. Recognized among the{" "}
    <span className="font-semibold text-black">
      best brand shoot locations in Delhi NCR
    </span>
    , we blend artistic vision with professional execution to deliver visuals
    that inspire trust, build recognition, and connect with your audience.
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

export default Brand;