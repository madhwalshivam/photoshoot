import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import t1 from "../assets/T (1).jpg";
import t2 from "../assets/T (2).jpg";
import t3 from "../assets/T (3).jpg";
import t4 from "../assets/T (4).jpeg";
import t5 from "../assets/T (5).jpeg";
import t6 from "../assets/T (6).jpeg";
import t7 from "../assets/T (7).jpeg";
import t8 from "../assets/T (9).jpeg";
import t9 from "../assets/T (9).jpg";
import t10 from "../assets/T (10).jpg";
import t11 from "../assets/T (11).jpg";
import t12 from "../assets/T (10).jpeg";
import t13 from "../assets/T (11).jpeg";
import t14 from "../assets/T (12).jpg";
import t15 from "../assets/T (1).jpeg";
import t16 from "../assets/T (16).jpg";
import t17 from "../assets/TREE.jpg";
import t18 from "../assets/TREE.jpeg";
import t19 from "../assets/TREE (5).jpg";
import t20 from "../assets/TREE (4).jpg";
import t21 from "../assets/TREE (3).jpg";
import t23 from "../assets/T (23).jpg";
import t24 from "../assets/T (24).jpg";
import t28 from "../assets/T (28).jpg";
import t31 from "../assets/T (31).jpg";
import t32 from "../assets/T (32).jpg";
import t34 from "../assets/T (34).jpg";
import t35 from "../assets/T (35).jpg";
import t36 from "../assets/T (36).jpg";
import t38 from "../assets/T (38).jpg";
import t39 from "../assets/T (39).jpg";
import t40 from "../assets/T (40).jpg";
import t41 from "../assets/T (60).jpg";
import t42 from "../assets/T (42).jpg";
import t43 from "../assets/T (43).jpg";
import t44 from "../assets/T (44).jpg";
import t45 from "../assets/T (45).jpg";
import t46 from "../assets/T (46).jpg";
import t47 from "../assets/T (47).jpg";
import t48 from "../assets/T (48).jpg";
import t49 from "../assets/T (49).jpg";
import t50 from "../assets/T (50).jpg";



import Testimonials from "../components/Testimonial";
import TreeBanner from "./TreeBanner";

const images = [
  t1, t2, t3, t4, t5, t6, t7, t8, t9, t10,
  t11, t12, t13, t14, t15, t16, t17, t18, t19, t20,
  t21, t23, t24, t28, t31, t32, t34, t35, t36, t38,
  t39, t40, t41, t42, t43, t44, t45, t46, t47, t48,
  t49, t50
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

const Tree = () => {
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
  <title>The Picture Town | Best Tree House Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience rustic charm at The Picture Town's Tree House photoshoot location in Delhi NCR. Ideal for nature-inspired, pre-wedding, and lifestyle photography."
  />
  <meta property="og:title" content="Tree House Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture magical moments surrounded by nature at our Tree House photoshoot location in Delhi NCR — where rustic elegance meets breathtaking backdrops."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/tree-house-photoshoot-location-in-delhi" />
</Helmet>



     <TreeBanner/>

    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
  <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
    <span className="font-playfair">Capturing Magical Moments</span>
    <br />
    <span className="text-green-500">in Our Enchanting Tree House</span>
  </p>

  <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
    At <span className="font-semibold text-black">The Picture Town</span>, our
    <span className="font-semibold text-black"> Tree House photoshoot location </span>
    offers a rare escape into nature’s beauty and rustic charm. Whether it’s for a
    <span className="font-semibold text-black"> pre-wedding shoot</span>, fashion editorial,
    or lifestyle portrait session, the elevated wooden structure and lush surroundings
    create a breathtaking backdrop for every frame. Recognized as one of the
    <span className="font-semibold text-black"> best nature-inspired photoshoot locations in Delhi NCR</span>,
    we bring your vision to life with warmth, serenity, and natural elegance.
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

export default Tree;