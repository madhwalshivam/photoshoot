import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import s1 from "../assets/S (50).jpg";
import s2 from "../assets/S (2).jpg";
import s3 from "../assets/S (3).jpeg";
import s4 from "../assets/S (52).jpg";
import s5 from "../assets/S (5).jpeg";
import s6 from "../assets/S (4).jpg";
import s7 from "../assets/S (2).jpeg";
import s8 from "../assets/S (8).jpeg";
import s9 from "../assets/sant.jpeg";
import s10 from "../assets/S (10).jpg";
import s11 from "../assets/S (11).jpg";
import s12 from "../assets/S (12).jpg";
import s13 from "../assets/S (13).jpg";
import s14 from "../assets/S (14).jpg";
import s15 from "../assets/S (15).jpg";
import s16 from "../assets/S (16).jpg";
import s17 from "../assets/S (17).jpg";
import s18 from "../assets/S (18).jpg";
import s19 from "../assets/S (19).jpg";
import s20 from "../assets/S (20).jpg";
import s21 from "../assets/S (21).jpg";
import s22 from "../assets/S (22).jpg";
import s23 from "../assets/S (23).jpg";
import s24 from "../assets/S (24).jpg";
import s25 from "../assets/S (25).jpg";
import s26 from "../assets/S (26).jpg";
import s27 from "../assets/S (27).jpg";
import s28 from "../assets/S (28).jpg";
import s29 from "../assets/S (29).jpg";
import s30 from "../assets/S (51).jpg";
import s31 from "../assets/S (49).jpg";
import s32 from "../assets/S (32).jpg";
import s33 from "../assets/S (40).jpg";
import s34 from "../assets/S (34).jpg";




import Testimonials from "../components/Testimonial";
import SantoriniBanner from "./SantoorniBanner";

const images = [
  s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
  s11, s12, s13, s14, s15, s16, s17, s18, s19, s20,
  s21, s22, s23, s24, s25, s26, s27, s28, s29, s30,
  s31, s32, s33, s34
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

const Sant = () => {
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
  <title>The Picture Town | Best Santorini Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Step into Mediterranean elegance at The Picture Town's Santorini Set photoshoot location in Delhi NCR. Perfect for dreamy, coastal-inspired, pre-wedding, and fashion photography."
  />
  <meta property="og:title" content="Santorini Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture stunning moments with Mediterranean charm at our Santorini Set photoshoot location in Delhi NCR — where white-washed beauty meets vibrant coastal vibes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/santorini-photoshoot-location-in-delhi" />
</Helmet>




    <SantoriniBanner/>

    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
 <div className="max-w-7xl mx-auto text-center">
  <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
    <span className="font-playfair">Capturing Dreamy Moments</span>
    <br />
    <span className="text-blue-500">in Our Stunning Santorini Set</span>
  </p>

  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
    At <span className="font-semibold text-black">The Picture Town</span>, our
    <span className="font-semibold text-black"> Santorini Set photoshoot location </span>
    brings the magic of the Mediterranean to Delhi NCR. With whitewashed walls, vibrant blue accents,
    and sunlit open spaces, it’s the perfect stage for a
    <span className="font-semibold text-black"> pre-wedding shoot</span>, fashion editorial,
    or lifestyle session. Inspired by the coastal beauty of Greece, the serene ambiance and striking
    architecture make it one of the
    <span className="font-semibold text-black"> best Mediterranean-style photoshoot locations in Delhi NCR</span>,
    ensuring every shot is filled with elegance, vibrance, and timeless charm.
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

export default Sant;