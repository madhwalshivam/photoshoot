import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Tu1 from "../assets/Tu(1).jpg";
import Tu2 from "../assets/Tu(2).jpeg";
import Tu3 from "../assets/Tu(3).jpg";
import Tu6 from "../assets/Tu(6).jpg";
import Tu7 from "../assets/Tu(7).jpg";
import Tu8 from "../assets/tubelight1.jpg";
import Tu9 from "../assets/Tu(9).jpg";
import Tu10 from "../assets/Tu(10).jpg";
import Tu11 from "../assets/Tu(11).jpeg";
import Tu12 from "../assets/Tu(12).jpg";
import Tu13 from "../assets/Tu(13).jpeg";
import Tu15 from "../assets/Tu(15).jpeg";
import Tu16 from "../assets/Tu(16).jpg";
import Tu17 from "../assets/Tu(17).jpeg";
import Tu20 from "../assets/Tu(20).jpg";
import Tu21 from "../assets/Tu(21).jpeg";
import Tu23 from "../assets/tubelight.jpg";


import Testimonials from "../components/Testimonial";
import TubelightRoomBanner from "./TubelightBanner";

const images = [
  Tu1, Tu2, Tu3,  Tu6, Tu7, Tu8, Tu9, Tu10,
  Tu11, Tu12, Tu13,  Tu15, Tu16, Tu17, Tu20,
  Tu21, Tu23,
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

const Tube = () => {
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
  <title>The Picture Town | Best Tubelight Room Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Step into The Picture Town's Tubelight Room Set in Delhi NCR — a vibrant and stylish backdrop for modern, creative, and cinematic photography."
  />
  <meta property="og:title" content="Tubelight Room Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Illuminate your moments at our Tubelight Room Set photoshoot location in Delhi NCR — perfect for fashion, portraits, music videos, and creative shoots."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/tubelight-photoshoot-location-in-delhi" />
</Helmet>



       <TubelightRoomBanner/>



  <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Light Up Your Creativity</span>
      <br />
      <span className="text-purple-600">in Our Vibrant Tubelight Room Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town</span>, our
      <span className="font-semibold text-black"> Tubelight Room Set photoshoot location </span>
      offers a bold and modern space that transforms your vision into striking visuals.
      Perfect for <span className="font-semibold text-black">fashion shoots</span>, music videos,
      portraits, or creative campaigns, the glowing tubelight setup creates a cinematic
      and futuristic atmosphere. Known as one of the
      <span className="font-semibold text-black"> most unique and high-impact photoshoot locations in Delhi NCR</span>,
      it’s the ideal backdrop for vibrant, edgy, and unforgettable captures.
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

export default Tube;
