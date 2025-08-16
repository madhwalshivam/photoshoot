import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import P1 from "../assets/P (1).jpg";
import P2 from "../assets/P (2).jpg";
import P3 from "../assets/P (3).jpg";
import P4 from "../assets/P (4).jpg";
import P5 from "../assets/P (5).jpg";
import P6 from "../assets/P (6).jpg";
import P7 from "../assets/P (7).jpg";
import P8 from "../assets/P (8).jpg";
import P9 from "../assets/P (9).jpeg";
import P10 from "../assets/P (10).jpeg";
import P11 from "../assets/P (11).jpeg";
import P12 from "../assets/P (12).jpeg";
import P25 from "../assets/P (25).jpg";
import P26 from "../assets/P (26).jpg";
import P28 from "../assets/P (28).jpg";
import P29 from "../assets/P (29).jpg";
import P30 from "../assets/P (30).jpg";
import P31 from "../assets/P (31).jpg";
import P32 from "../assets/P (32).jpg";
import P33 from "../assets/P (33).jpg";
import P34 from "../assets/P (34).jpg";
import P35 from "../assets/P (35).jpg";
import P36 from "../assets/P (36).jpg";
import P37 from "../assets/P (37).jpg";
import P39 from "../assets/P (39).jpg";
import P40 from "../assets/P (40).jpg";
import P41 from "../assets/P (41).jpg";
import P42 from "../assets/P (42).jpg";
import P43 from "../assets/P (43).jpg";
import P44 from "../assets/P (44).jpg";
import P45 from "../assets/P (45).jpg";
import P46 from "../assets/P (46).jpg";
import P47 from "../assets/P (47).jpg";
import P48 from "../assets/P (48).jpg";
import P49 from "../assets/P (49).jpg";
import P50 from "../assets/P (50).jpg";
import P51 from "../assets/P (51).jpg";
import P52 from "../assets/P (52).jpg";
import P53 from "../assets/P (53).jpg";
import P54 from "../assets/P (54).jpg";
import P55 from "../assets/P (55).jpg";
import P56 from "../assets/P (56).jpg";
import P57 from "../assets/P (57).jpg";
import P58 from "../assets/P (58).jpg";
import P59 from "../assets/P (59).jpg";
import P60 from "../assets/P (60).jpg";



import Testimonials from "../components/Testimonial";
import PicnicSetBanner from "./PicnicBanner";

const images = [
  P1, P2, P3, P4, P5, P6, P7, P8, P9, P10,
  P11, P12, P25, P26, P28, P29, P30,
  P31, P32, P33, P34, P35, P36, P37, P39, P40,
  P41, P42, P43, P44, P45, P46, P47, P48, P49, P50,
  P51, P52, P53, P54, P55, P56, P57, P58, P59, P60,
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

const Picnic = () => {
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
  <title>The Picture Town -Alipur | Best Picnic Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Enjoy the fresh air and joyful ambiance of The Picture Town -Alipur's Picnic Set in Delhi NCR — a perfect backdrop for casual, fun, and nature-inspired photography."
  />
  <meta property="og:title" content="Picnic Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture cheerful and relaxed moments at our Picnic Set photoshoot location in Delhi NCR — ideal for lifestyle, family, and candid themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/picnic-photoshoot-location-in-delhi" />
</Helmet>


     <PicnicSetBanner/>

<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Celebrate Joyful Moments</span>
      <br />
      <span className="text-green-700">at Our Vibrant Picnic Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Picnic Set photoshoot location </span>
      offers a lively and refreshing atmosphere perfect for casual fun and nature-inspired portraits. Ideal for
      <span className="font-semibold text-black"> family shoots</span>, friends’ gatherings,
      or candid storytelling, the colorful picnic setup brings warmth and happiness to every frame. Known as one of the
      <span className="font-semibold text-black"> most cheerful and natural photoshoot locations in Delhi NCR</span>,
      it’s your perfect spot for capturing joyful and memorable moments.
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

export default Picnic;