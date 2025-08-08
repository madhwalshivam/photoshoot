import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import img1 from "../assets/s1.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/s3.png";
import img4 from "../assets/s4.png";
import img5 from "../assets/s5.png";
import img6 from "../assets/s6.png";
import img7 from "../assets/s7.png";
import img8 from "../assets/s8.png";
import Testimonials from "../components/Testimonial";
import SongBanner from "./SongBanner";

// All images
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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

const Song = () => {
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
        <title>The Picture Town | Best Song Shoots in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town offers the best song shoots in Delhi NCR. Capture your music videos and creative moments with cinematic and elegant photography."
        />
        <meta property="og:title" content="Best Song Shoots in Delhi NCR" />
        <meta
          property="og:description"
          content="Cinematic song shoots with stunning visuals and creative direction. Trusted by artists and creators in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/song-shoot-in-delhi" />
      </Helmet>

      <SongBanner />

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Capturing the Rhythm of Your Story</span>
            <br />
            <span className="text-pink-500">with Frames that Sing</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10 text-justify leading-relaxed">
            At <span className="font-semibold text-black">The Picture Town</span>, we specialize in delivering the{" "}
            <span className="font-semibold text-black">best song shoot in Delhi</span>, blending cinematic artistry with
            emotional depth. Whether it’s a soulful ballad or a high-energy track, our expert team captures every beat,
            lyric, and emotion in stunning visuals that bring your music to life. From creative concepts to flawless
            execution, we ensure your song video becomes a masterpiece you’ll cherish and replay forever.
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
                  alt={`Song Shoot ${index + 1}`}
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
            alt="Song Large View"
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

export default Song;

