import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import z from "../assets/z.jpg";
import z2 from "../assets/z2.jpeg";
import z3 from "../assets/z3.jpg";
import z4 from "../assets/z4.jpg";
import z5 from "../assets/z5.jpg";
import z6 from "../assets/z6.jpg";
import z7 from "../assets/z7.jpg";
import z8 from "../assets/z8.jpg";
import z9 from "../assets/z9.jpeg";
import z10 from "../assets/z10.jpg";
import z11 from "../assets/z11.jpg";
import z12 from "../assets/z12.jpeg";
import z13 from "../assets/z1.jpeg";
import z14 from "../assets/z14.jpg";
import z15 from "../assets/z15.jpeg";
import z16 from "../assets/z16.jpeg";


import Testimonials from "../components/Testimonial";
import BabyBanner from "./BabyBanner";
import BabyVideo from "./BabyVideos";


const images = [z, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12, z13, z14, z15, z16];


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

const Baby = () => {
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
        <title>The Picture Town -Alipur | Best Baby Shoot location in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town -Alipur offers heartwarming baby photoshoots in Delhi NCR, capturing the cutest smiles and most precious early memories with love and creativity."
        />
        <meta 
          property="og:title" 
          content="Adorable Baby Photography in Delhi NCR | The Picture Town -Alipur" 
        />
        <meta
          property="og:description"
          content="Preserve your baby's magical first moments with professional photography. The Picture Town -Alipur specializes in creative and timeless baby shoots in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta 
          property="og:url" 
          content="https://thepicturetown.com/baby-shoot-in-delhi" 
        />
      </Helmet>

      <BabyBanner/>

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Precious Baby Shoots</span>
            <br />
            <span className="text-pink-500">Capturing Love in Every Giggle</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town -Alipur</span>, we create heart-touching{" "}
            <span className="font-semibold text-black">baby photoshoots</span> that preserve your little one's
            sweetest smiles, cutest expressions, and magical first milestones. From newborn photography to playful toddler sessions,
            our creative approach blends warmth, patience, and artistry. Known among the{" "}
            <span className="font-semibold text-black">
              best baby shoot location in Delhi NCR
            </span>
            , we craft timeless images your family will cherish forever.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                  alt={`Baby Shoot ${index + 1}`}
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
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            ❮
          </button>
          <img
            src={images[currentIndex]}
            alt={`Baby Shoot Large View ${currentIndex + 1}`}
            className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}
      <BabyVideo/>
      <Testimonials />
    </div>
  );
};

export default Baby;
