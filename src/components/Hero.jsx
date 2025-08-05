import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/pre5.jpg";
import img1Mob from "../assets/pre5.jpg";
import img2 from "../assets/baby1.jpg";
import img2Mob from "../assets/baby1.jpg";
import img3 from "../assets/f2.jpg";
import img3Mob from "../assets/f1.jpg";
import img4 from "../assets/ma1.jpg";
import img4Mob from "../assets/maternity.jpg";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    {
      desktop: img1,
      mobile: img1Mob,
      title: "Pre Wedding",
      desc: "Cinematic love stories, beautifully captured.",
    },
    {
      desktop: img2,
      mobile: img2Mob,
      title: "Baby Shoot",
      desc: "Adorable moments frozen in time.",
    },
    {
      desktop: img3,
      mobile: img3Mob,
      title: "Fashion",
      desc: "Stylish & bold portraits tailored for you.",
    },
    {
      desktop: img4,
      mobile: img4Mob,
      title: "Maternity",
      desc: "Celebrate the glow and joy of motherhood.",
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Mobile resize detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        // 📱 Mobile View
        <div className="w-full flex justify-center bg-gray-100 relative">
          <div className="max-w-sm w-full overflow-hidden shadow-lg bg-white relative">
            <img
              src={slides[current].mobile}
              alt={`Slide ${current}`}
              className="w-full h-[550px] object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4 transition-opacity duration-1000">
              <h2 className="text-4xl font-['Pacifico'] font-bold mb-2">{slides[current].title}</h2>
              <p className="text-sm mb-4">{slides[current].desc}</p>
            </div>
          </div>
        </div>
      ) : (
        // 🖥 Desktop View
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center px-6">
                <h2 className="text-8xl font-['Pacifico'] font-extrabold mb-2 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-lg mb-6 max-w-2xl">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Hero;
