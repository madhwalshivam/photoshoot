import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import K29 from "../assets/K (29).jpg";
import K30 from "../assets/kitchen.jpg";
import K31 from "../assets/K (31).jpg";
import K37 from "../assets/K (37).jpg";
import K38 from "../assets/K (38).jpg";
import K39 from "../assets/K (39).jpg";
import K40 from "../assets/K (40).jpg";
import K41 from "../assets/K (41).jpg";
import K42 from "../assets/K (42).jpg";
import K49 from "../assets/K (49).jpg";
import K50 from "../assets/K (50).jpg";
import K51 from "../assets/K (51).jpg";
import K52 from "../assets/K (52).jpg";
import K53 from "../assets/K (53).jpg";
import Testimonials from "../components/Testimonial";
import KitchenSetBanner from "./KitchenBanner";

const images = [
 K29, K30,
  K31, K37, K38, K39, K40,
  K41, K42,  K49, K50,
  K51, K52, K53,
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

const Kitchen = () => {
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
  <title>The Picture Town -Alipur | Best Kitchen Set Photoshoot Location in Delhi NCR</title>
  <meta
    name="description"
    content="Experience the perfect blend of style and warmth at The Picture Town -Alipur's Kitchen Set photoshoot location in Delhi NCR. Ideal for culinary-themed, lifestyle, and pre-wedding photography."
  />
  <meta property="og:title" content="Kitchen Set Photoshoots in Delhi NCR" />
  <meta
    property="og:description"
    content="Capture stylish and cozy moments at our Kitchen Set photoshoot location in Delhi NCR — perfect for food lovers, lifestyle shoots, and elegant culinary themes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thepicturetown.com/kitchen-photoshoot-location-in-delhi" />
</Helmet>


     <KitchenSetBanner/>

     <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
      <span className="font-playfair">Capturing Stylish Comfort</span>
      <br />
      <span className="text-orange-600">at Our Elegant Kitchen Set</span>
    </p>

    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
      At <span className="font-semibold text-black">The Picture Town -Alipur</span>, our
      <span className="font-semibold text-black"> Kitchen Set photoshoot location </span>
      offers a warm, inviting, and stylish culinary-inspired ambiance. Whether it’s for a
      <span className="font-semibold text-black"> pre-wedding shoot</span>, food-themed lifestyle editorial,
      or fashion session, the beautifully designed kitchen with modern and rustic elements
      provides a unique and intimate backdrop. Recognized as one of the
      <span className="font-semibold text-black"> best kitchen-inspired photoshoot locations in Delhi NCR</span>,
      we bring your vision to life with flavor, charm, and timeless style.
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

export default Kitchen;
