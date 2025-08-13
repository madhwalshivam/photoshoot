import React from "react";
import bgImage from "../assets/pillar.jpg"; 

export default function PillarSetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Elegant marble overlay for royal vibe */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center drop-shadow-lg">
          Pillar Set | Elegant & Timeless Grandeur
        </h1>
      </div>
    </section>
  );
}
