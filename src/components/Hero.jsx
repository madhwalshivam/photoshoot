import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import img1 from "../assets/pre5.jpg";
import img1Mob from "../assets/pre5.jpg";
import img2 from "../assets/baby1.jpg";
import img2Mob from "../assets/baby1.jpg";
import img3 from "../assets/f2.jpg";
import img3Mob from "../assets/f1.jpg";
import img4 from "../assets/ban2.jpg";
import img4Mob from "../assets/maternity.jpg";
import img5 from "../assets/ban6.jpg";
import img5Mob from "../assets/ban6.jpg";
import img6 from "../assets/ban1.jpg";
import img6Mob from "../assets/f9.jpg";
import img7 from "../assets/ban5.jpg";
import img7Mob from "../assets/f7.jpg";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    { desktop: img1, mobile: img1Mob },
    { desktop: img2, mobile: img2Mob },
    { desktop: img3, mobile: img3Mob },
    { desktop: img4, mobile: img4Mob },
    { desktop: img5, mobile: img5Mob },
    { desktop: img6, mobile: img6Mob },
    { desktop: img7, mobile: img7Mob },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {isMobile ? (
        <div className="relative w-full flex justify-center bg-gray-100">
          <div className="max-w-sm w-full overflow-hidden shadow-lg bg-white relative">
            <img
              src={slides[current].mobile}
              alt={`Slide ${current}`}
              className="w-full h-[550px] object-cover transition-opacity duration-1000"
            />

            {/* Arrows for Mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.desktop}
                alt={`Slide ${index}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}

          {/* Arrows for Desktop */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2  text-white p-3 rounded-full z-20 hover:bg-gray-800"
          >
            <ArrowBackIosNewIcon fontSize="medium" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2  text-white p-3 rounded-full z-20 hover:bg-gray-800"
          >
            <ArrowForwardIosIcon fontSize="medium" />
          </button>
        </div>
      )}
    </>
  );
};

export default Hero;

