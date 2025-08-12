import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import h1 from "../assets/H (1).jpg";
import h2 from "../assets/H (2).jpg";
import h3 from "../assets/H (3).jpg";
import h4 from "../assets/H (4).jpg";
import h5 from "../assets/H (5).jpg";
import h6 from "../assets/H (6).jpg";
import h7 from "../assets/H (7).jpg";
import h8 from "../assets/H (8).jpg";
import h9 from "../assets/H (9).jpg";
import h10 from "../assets/H (10).jpg";
import h11 from "../assets/H (11).jpg";
import h12 from "../assets/H (12).jpg";
import h13 from "../assets/H (13).jpg";
import h14 from "../assets/H (14).jpg";
import h15 from "../assets/H (15).jpg";
import h16 from "../assets/H (16).jpg";
import h17 from "../assets/H (17).jpg";
import h18 from "../assets/H (18).jpg";
import h19 from "../assets/H (19).jpg";
import h20 from "../assets/H (20).jpg";
import h21 from "../assets/H (21).jpg";
import h22 from "../assets/H (22).jpg";
import h23 from "../assets/H (23).jpg";
import h24 from "../assets/H (24).jpg";
import h25 from "../assets/H (25).jpg";
import h26 from "../assets/H (26).jpg";
import h27 from "../assets/H (27).jpg";
import h28 from "../assets/H (28).jpg";
import h29 from "../assets/H (29).jpg";
import h30 from "../assets/H (30).jpg";
import h31 from "../assets/H (31).jpg";
import h32 from "../assets/H (32).jpg";
import h33 from "../assets/H (33).jpg";
import h34 from "../assets/H (34).jpg";
import h35 from "../assets/H (35).jpg";
import h36 from "../assets/H (36).jpg";
import h37 from "../assets/H (37).jpg";
import h38 from "../assets/H (38).jpg";
import h39 from "../assets/H (39).jpg";
import h40 from "../assets/H (1).jpeg";
import h41 from "../assets/H (41).jpg";
import h42 from "../assets/H (42).jpg";
import h43 from "../assets/H (43).jpg";
import h44 from "../assets/H (44).jpg";
import h45 from "../assets/H (45).jpg";
import h46 from "../assets/H (46).jpg";
import h47 from "../assets/H (47).jpg";
import h48 from "../assets/H (48).jpg";
import h49 from "../assets/H (49).jpg";
import h50 from "../assets/H (50).jpg";
import h51 from "../assets/H (51).jpg";
import h52 from "../assets/H (52).jpg";
import h53 from "../assets/H (53).jpg";
import h54 from "../assets/H (54).jpg";
import h55 from "../assets/H (55).jpg";
import h56 from "../assets/H (56).jpg";
import h57 from "../assets/H (57).jpg";
import h58 from "../assets/H (58).jpg";
import h59 from "../assets/H (59).jpg";
import h60 from "../assets/H (60).jpg";
import h61 from "../assets/H (61).jpg";
import h62 from "../assets/H (62).jpg";
import h63 from "../assets/H (63).jpg";
import h64 from "../assets/H (64).jpg";
import h65 from "../assets/H (65).jpg";
import h66 from "../assets/H (76).jpg";
import h67 from "../assets/H (77).jpg";
import h68 from "../assets/H (68).jpg";
import h69 from "../assets/H (69).jpg";
import h70 from "../assets/H (70).jpg";


import Testimonials from "../components/Testimonial";
import HouseBanner from "./HouseBanner";

const images = [
  h1, h2, h3, h4, h5, h6, h7, h8, h9, h10,
  h11, h12, h13, h14, h15, h16, h17, h18, h19, h20,
  h21, h22, h23, h24, h25, h26, h27, h28, h29, h30,
  h31, h32, h33, h34, h35, h36, h37, h38, h39, h40,
  h41, h42, h43, h44, h45, h46, h47, h48, h49, h50,
  h51, h52, h53, h54, h55, h56, h57, h58, h59, h60,
  h61, h62, h63, h64, h65, h66, h67, h68, h69, h70
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

const House = () => {
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
  <title>The Picture Town | Best Scottish House Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Step into elegance at The Picture Town's Scottish House photoshoot location in Delhi NCR. Perfect for heritage-inspired, pre-wedding, and fashion photography."
  />
  <meta property="og:title" content="Scottish House Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture timeless charm and architectural beauty at our Scottish House photoshoot location in Delhi NCR — where history meets modern photography."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/scottish-house-photoshoot-location-in-delhi" />
</Helmet>


     <HouseBanner/>

    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing Timeless Moments</span>
      <br />
      <span className="text-yellow-400">in Our Majestic Scottish House</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Scottish House photoshoot location </span>
      offers a unique blend of heritage charm and architectural grandeur. Whether it’s for a
      <span className="font-semibold text-black"> pre-wedding shoot</span>, fashion editorial,
      or lifestyle portrait session, the timeless stone walls and elegant courtyard create a
      picturesque backdrop for unforgettable frames. Celebrated as one of the
      <span className="font-semibold text-black"> best heritage photoshoot locations in Delhi NCR</span>,
      we ensure every shot reflects sophistication, style, and a touch of classic elegance.
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

export default House;