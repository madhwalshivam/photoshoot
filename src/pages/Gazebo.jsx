import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Go1 from "../assets/Go (1).jpeg";
import Go3 from "../assets/Go (3).jpg";
import Go4 from "../assets/Go (4).jpg";
import Go5 from "../assets/Go (5).jpg";
import Go6 from "../assets/Go (6).jpg";
import Go7 from "../assets/Go (7).jpg";
import Go8 from "../assets/Go (8).jpg";
import Go9 from "../assets/Go (9).jpg";
import Go10 from "../assets/Go (10).jpg";
import Go11 from "../assets/Go (11).jpg";
import Go12 from "../assets/Go (12).jpg";
import Go13 from "../assets/Go (13).jpg";
import Go14 from "../assets/Go (14).jpg";
import Go15 from "../assets/Go (15).jpg";
import Go17 from "../assets/Go (17).jpg";
import Go18 from "../assets/Go (18).jpg";
import Go19 from "../assets/Go (19).jpg";
import Go20 from "../assets/Go (20).jpg";
import Go21 from "../assets/Go (21).jpg";
import Go22 from "../assets/Go (22).jpg";
import Go23 from "../assets/Go (23).jpg";
import Go24 from "../assets/Go (24).jpg";
import Go25 from "../assets/Go (25).jpg";
import Go26 from "../assets/Go (26).jpg";
import Go27 from "../assets/Go (27).jpg";
import Go28 from "../assets/Go (1).jpg";
import Go29 from "../assets/Go (29).jpg";
import Go30 from "../assets/Go (30).jpg";
import Go31 from "../assets/Go (31).jpg";
import Go32 from "../assets/Go (32).jpg";
import Go33 from "../assets/Go (33).jpg";
import Go34 from "../assets/Go (34).jpg";
import Go35 from "../assets/Go (35).jpg";
import Go36 from "../assets/Go (36).jpg";
import Go37 from "../assets/Go (37).jpg";
import Go38 from "../assets/Go (38).jpg";
import Go39 from "../assets/Go (39).jpg";
import Go40 from "../assets/Go (40).jpg";
import Go41 from "../assets/Go (41).jpg";
import Go42 from "../assets/Go (42).jpg";
import Go43 from "../assets/Go (43).jpg";
import Go44 from "../assets/Go (44).jpg";
import Go45 from "../assets/Go (45).jpg";
import Go46 from "../assets/Go (46).jpg";
import Go47 from "../assets/Go (47).jpg";
import Go48 from "../assets/Go (48).jpg";
import Go49 from "../assets/Go (49).jpg";
import Go50 from "../assets/Go (50).jpg";
import Go2 from "../assets/Go (2).jpg";

import Testimonials from "../components/Testimonial";
import GazeboBanner from "./GazeeboBanner";


const images = [
  Go1, Go4, Go5, Go6, Go7, Go8, Go9, Go10,
  Go11, Go12, Go13, Go14, Go15, Go17, Go18, Go19, Go20,
  Go21, Go22, Go23, Go24, Go25, Go26, Go27, Go28, Go29, Go30,
  Go31, Go32, Go33, Go34, Go35, Go36, Go37, Go38, Go39, Go40,
  Go41, Go42, Go43, Go44, Go45, Go46, Go47, Go48, Go49, Go50,Go2, Go3,
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

const Gazebo = () => {
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
        <title>The Picture Town | Best Gazebo Set Photoshoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="Experience charming outdoor elegance at The Picture Town's Gazebo Set photoshoot location in Delhi NCR. Ideal for cozy, nature-inspired, pre-wedding, and lifestyle photography."
        />
        <meta property="og:title" content="Gazebo Set Photoshoots in Delhi NCR" />
        <meta
          property="og:description"
          content="Capture cozy and elegant moments at our Gazebo Set photoshoot location in Delhi NCR — perfect for nature lovers and stylish shoots."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/gazebo-photoshoot-location-in-delhi" />
      </Helmet>

     <GazeboBanner/>

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Capturing Cozy Elegance</span>
            <br />
            <span className="text-green-600">at Our Charming Gazebo Set</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town</span>, our
            <span className="font-semibold text-black"> Gazebo Set photoshoot location </span>
            offers a warm and inviting outdoor ambiance. Whether it’s for a
            <span className="font-semibold text-black"> pre-wedding shoot</span>, lifestyle editorial,
            or fashion session, the picturesque gazebo surrounded by nature provides
            a beautiful and intimate backdrop. Recognized as one of the
            <span className="font-semibold text-black"> best nature-inspired photoshoot locations in Delhi NCR</span>,
            we bring your vision to life with comfort, charm, and timeless style.
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

export default Gazebo;
