import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PreBanner from "./PreBanner";
import Testimonials from "../components/Testimonial";

// --- All imports ---
import img1 from "../assets/pre1.jpg";
import img2 from "../assets/pre7.jpeg";
import img3 from "../assets/pre3.jpg";
import img4 from "../assets/pre4.jpeg";
import img5 from "../assets/pre5.jpg";
import img6 from "../assets/pre6.jpg";
import img30 from "../assets/PRE-WEDDING SHOOT (30).jpeg";
import img31 from "../assets/PRE-WEDDING SHOOT (31).jpeg";
import img32 from "../assets/PRE-WEDDING SHOOT (61).jpeg";
import img33 from "../assets/PRE-WEDDING SHOOT (33).jpeg";
import img34 from "../assets/PRE-WEDDING SHOOT (34).jpeg";
import img35 from "../assets/PRE-WEDDING SHOOT (65).jpeg";
import img36 from "../assets/PRE-WEDDING SHOOT (66).jpeg";
import img37 from "../assets/PRE-WEDDING SHOOT (37).jpeg";
import img38 from "../assets/PRE-WEDDING SHOOT (38).jpeg";
import img39 from "../assets/PRE-WEDDING SHOOT (39).jpeg";
import img40 from "../assets/PRE-WEDDING SHOOT (40).jpeg";
import img41 from "../assets/PRE-WEDDING SHOOT (41).jpeg";
import img42 from "../assets/PRE-WEDDING SHOOT (42).jpeg";
import img43 from "../assets/PRE-WEDDING SHOOT (43).jpeg";
import img44 from "../assets/PRE-WEDDING SHOOT (44).jpeg";
import img45 from "../assets/PRE-WEDDING SHOOT (45).jpeg";
import img46 from "../assets/PRE-WEDDING SHOOT (46).jpeg";
import img47 from "../assets/PRE-WEDDING SHOOT (47).jpeg";
import img48 from "../assets/PRE-WEDDING SHOOT (48).jpeg";
import img49 from "../assets/PRE-WEDDING SHOOT (49).jpeg";
import img50 from "../assets/PRE-WEDDING SHOOT (50).jpeg";
import img51 from "../assets/PRE-WEDDING SHOOT (64).jpeg";
import img52 from "../assets/PRE-WEDDING SHOOT (52).jpeg";
import img53 from "../assets/PRE-WEDDING SHOOT (53).jpeg";
import img54 from "../assets/PRE-WEDDING SHOOT (54).jpeg";
import img55 from "../assets/PRE-WEDDING SHOOT (55).jpeg";
import img56 from "../assets/PRE-WEDDING SHOOT (56).jpeg";
import img57 from "../assets/PRE-WEDDING SHOOT (57).jpeg";
import img58 from "../assets/PRE-WEDDING SHOOT (58).jpeg";
import img59 from "../assets/PRE-WEDDING SHOOT (59).jpeg";
import img60 from "../assets/PRE-WEDDING SHOOT (60).jpeg";
import img61 from "../assets/PRE-WEDDING SHOOT (63).jpeg";
import img62 from "../assets/PRE-WEDDING SHOOT (66).jpeg";
import img63 from "../assets/PRE-WEDDING SHOOT (62).jpeg";

// All images array
const images = [
  img1, img2, img3, img4, img5, img6,
  img30, img31, img32, img33, img34, img35, img36, img37, img38, img39,
  img40, img41, img42, img43, img44, img45, img46, img47, img48, img49,
  img50, img51, img52, img53, img54, img55, img56, img57, img58, img59,
  img60, img61, img62, img63
];

// Hook for fade-in on scroll
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

const PreWeddingPhotos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Pre-Wedding Shoot in Delhi NCR | The Picture Town</title>
        <meta
          name="description"
          content="Explore our stunning pre-wedding shoot gallery at The Picture Town. Best shoot locations in Delhi NCR with cinematic backdrops for your love story."
        />
        <meta
          name="keywords"
          content="Pre-Wedding Shoot, Delhi NCR Photography, Cinematic Shoot Location, Wedding Photography, The Picture Town Gallery"
        />
        <link rel="canonical" href="https://thepicturetown.com/pre-wedding-photography-delhi" />
        <meta property="og:title" content="Pre-Wedding Shoot Gallery | The Picture Town" />
        <meta property="og:description" content="See our beautiful pre-wedding shoots in Delhi NCR with dreamy locations and cinematic props." />
        <meta property="og:image" content="https://thepicturetown.com/assets/pre1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/pre-wedding-photography-delhi" />
      </Helmet>

      <PreBanner />

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            Capturing Your Love Story<br />
            <span className="text-yellow-400">at Dreamy Locations</span>
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town</span>, we turn your pre-wedding moments into cinematic memories. 
            Recognized for the <span className="font-semibold text-black">best pre-wedding shoots in Delhi NCR</span>, our handpicked romantic spots 
            and artistic direction bring your love story to life through stunning visuals.
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
                className={`overflow-hidden shadow-md cursor-pointer transition-all duration-1000 transform will-change-transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={img}
                  alt={`Pre-Wedding ${index + 1}`}
                  loading="lazy"
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ×
          </button>
          <button
            className="absolute left-5 text-white text-4xl font-bold"
            onClick={showPrev}
          >
            ❮
          </button>
          <img
            src={images[selectedIndex]}
            alt="Enlarged view"
            className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-5 text-white text-4xl font-bold"
            onClick={showNext}
          >
            ❯
          </button>
        </div>
      )}

      <Testimonials />
    </div>
  );
};

export default PreWeddingPhotos;




