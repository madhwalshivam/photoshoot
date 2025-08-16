import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Machhan1 from "../assets/Machan1.jpeg";
import Machhan2 from "../assets/Machan2.jpg";
import Machhan3 from "../assets/Machan3.jpeg";
import Machhan4 from "../assets/Machan4.jpg";
import Machhan5 from "../assets/Machan5.jpeg";
import Machhan6 from "../assets/Machan6.jpg";
import Machhan7 from "../assets/Machan7.jpeg";
import Machhan8 from "../assets/Machan8.jpg";
import Machhan9 from "../assets/Machan9.jpeg";
import Machhan10 from "../assets/Machan10.jpg";
import Machhan11 from "../assets/Machan11.jpeg";
import Machhan12 from "../assets/Machan12.jpg";
import Machhan13 from "../assets/Machan13.jpeg";
import Machhan14 from "../assets/Machan14.jpg";
import Machhan15 from "../assets/Machan15.jpeg";
import Machhan16 from "../assets/Machan16.jpg";



import Testimonials from "../components/Testimonial";
import MachhanBanner from "./MachanBanner";

const images = [
  Machhan1, Machhan2, Machhan3, Machhan4,
  Machhan5, Machhan6, Machhan7, Machhan8,
  Machhan9, Machhan10, Machhan11, Machhan12,
  Machhan13, Machhan14, Machhan15, Machhan16
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

const Machhan = () => {
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
  <title>The Picture Town -Alipur | Best Machhan Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience rustic charm at The Picture Town -Alipur's stunning Machhan photoshoot location in Delhi NCR. Perfect for romantic shoots, pre-weddings, and capturing timeless memories amidst nature."
  />
  <meta property="og:title" content="Machhan Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Celebrate love in rustic elegance at our exclusive Machhan photoshoot setup in Delhi NCR — ideal for romantic celebrations, proposals, and unforgettable photography."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/machhan-photoshoot-location-in-delhi" />
</Helmet>



    <MachhanBanner/>
<div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Celebrate Love in Rustic Charm</span>
      <br />
      <span className="text-green-600">at Our Stunning Machhan Setup</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town - Alipur</span>, our
      <span className="font-semibold text-black"> Machhan photoshoot location </span>
      blends nature’s beauty with cozy, elevated décor for an unforgettable
      experience. With rustic wooden charm, soft lighting, and a serene
      countryside vibe, it’s the perfect spot to capture your love story or host
      an intimate celebration. 
      Recognized as one of the
      <span className="font-semibold text-black"> most unique photoshoot setups in Delhi NCR</span>, 
      we create the ideal backdrop for moments that feel timeless and magical.
    </p>
  </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
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

export default Machhan;