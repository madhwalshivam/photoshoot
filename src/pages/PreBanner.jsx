import React from "react";
import bgImage from "../assets/pre3.jpg";

export default function PreBanner() {
  return (
    <section
      className="h-[400px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center px-4">
          PRE WEDDING MOMENTS 
        </h1>
      </div>
    </section>
  );
}
