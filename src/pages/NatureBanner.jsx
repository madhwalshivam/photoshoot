import React from "react";
import bgImage from "../assets/nature.jpg"; 

export default function NatureBanner() {
  return (
    <section
      className="h-[300px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center px-4">
          Embrace Nature’s Beauty with Timeless Photography
        </h1>
      </div>
    </section>
  );
}
