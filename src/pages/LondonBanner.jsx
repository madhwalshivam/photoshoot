import React from "react";
import bgImage from "../assets/london.jpg"; 

export default function LondonStreetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center">
          London Street Set | Classic Urban Charm
        </h1>
      </div>
    </section>
  );
}
