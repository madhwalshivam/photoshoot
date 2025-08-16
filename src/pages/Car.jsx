import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BF1 from "../assets/RED CAR (1).jpg";
import BF2 from "../assets/RED CAR (2).jpg";
import BF3 from "../assets/RED CAR (3).jpeg";
import BF4 from "../assets/RED CAR (4).jpg";
import BF5 from "../assets/RED CAR (5).jpg";
import BF6 from "../assets/RED CAR (6).jpeg";
import BF7 from "../assets/RED CAR (7).jpeg";
import BF8 from "../assets/RED CAR (8).jpeg";
import BF9 from "../assets/RED CAR (9).jpeg";
import BF10 from "../assets/RED CAR (10).jpeg";
import BF11 from "../assets/RED CAR (11).jpeg";
import BF12 from "../assets/RED CAR (12).jpeg";
import Testimonials from "../components/Testimonial";
import RedOpenCarBanner from "./CarBanner";

const images = [
  BF1, BF2, BF3, BF4, BF5, BF6, BF7, BF8, BF9, BF10,
  BF11, BF12, 
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

const Car = () => {
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
  <title>The Picture Town -Alipur | Best Red Open Car Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience the thrill of classic drives with The Picture Town -Alipur's Red Open Car photoshoot location in Delhi NCR — perfect for pre-wedding, cinematic, and retro-themed shoots."
  />
  <meta 
    property="og:title" 
    content="Red Open Car Photoshoots in Delhi NCR" 
  />
  <meta
    property="og:description"
    content="Capture timeless elegance and cinematic charm with our vintage Red Open Car photoshoot setup in Delhi NCR — ideal for couple portraits, pre-weddings, and themed shoots."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://thepicturetown.com/red-open-car-photoshoot-location-in-delhi"
  />
</Helmet>


       <RedOpenCarBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Feel the Wind in Your Hair</span>
      <br />
      <span className="text-red-600">with Our Vintage Red Open Car Shoot</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Vintage Red Open Car photoshoot location </span>
      brings the golden age of convertible drives to life — perfect for capturing a mix of
      romance, freedom, and cinematic style. Ideal for <span className="font-semibold text-black">pre-wedding shoots</span>,
      lifestyle portraits, or retro-inspired campaigns, the gleaming red bodywork, chrome detailing,
      and open-top charm create an unforgettable backdrop. Known as one of the
      <span className="font-semibold text-black"> most stylish and unique photoshoot destinations in Delhi NCR</span>,
      it’s the perfect place to capture elegance, adventure, and timeless allure.
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

export default Car;