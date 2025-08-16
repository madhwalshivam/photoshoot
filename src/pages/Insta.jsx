import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import i1 from "../assets/f7.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpeg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import i12 from "../assets/i12.png";
import i13 from "../assets/i13.png";
import i14 from "../assets/i14.png";
import i15 from "../assets/i15.png";
import i16 from "../assets/i16.png";
import i17 from "../assets/i17.png";
import i18 from "../assets/i18.png";
import i19 from "../assets/i19.png";
import i20 from "../assets/i20.png";


import Testimonials from "../components/Testimonial";
import InstaBanner from "./InstaBanner";  
import InstaVideo from "./InstaVideos";

const images = [
  i1, i2, i3, i4, i5, i6, i7, i8,
  i9, i10, i11, i12, i13, i14, i15, i16,
  i17, i18, i19, i20
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

const InstaShoot = () => {
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
        <title>The Picture Town -Alipur | Best Instagram Shoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town -Alipur offers stylish Instagram photoshoots in Delhi NCR, capturing your best moments with creativity and flair for social media impact."
        />
        <meta
          property="og:title"
          content="Creative Instagram Photoshoots in Delhi NCR | The Picture Town -Alipur"
        />
        <meta
          property="og:description"
          content="Boost your Instagram profile with professional photoshoots. The Picture Town -Alipur delivers trendy and engaging Instagram shoot experiences in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thepicturetown.com/instagram-reel-shoot-in-delhi"
        />
      </Helmet>

      <InstaBanner />

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Trendy Instagram Shoots</span>
            <br />
            <span className="text-pink-500">Capture Your Best Social Moments</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town -Alipur</span>, we
            craft creative <span className="font-semibold text-black">Instagram photoshoots</span> tailored
            for social media impact. Whether it's lifestyle, fashion, or candid moments,
            our expert photographers help you stand out with vibrant, stylish imagery.
            Known as one of the{" "}
            <span className="font-semibold text-black">
              best Instagram shoot locations in Delhi NCR
            </span>
            , we deliver photos that engage your followers and elevate your personal brand.
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
                  alt={`Instagram Shoot ${index + 1}`}
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
            alt={`Instagram Shoot Large View ${currentIndex + 1}`}
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
      <InstaVideo/>
      <Testimonials />
    </div>
  );
};

export default InstaShoot;
