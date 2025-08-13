import React from "react";
import bgImage from "../assets/color.jpg"; 

export default function ColourWallSetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Vibrant overlay for colourful vibe */}
      <div className="absolute inset-0 bg-pink-600 bg-opacity-25" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-yellow-100 text-3xl md:text-5xl font-bold font-playfair text-center drop-shadow-lg">
          Colour Wall Set | Vibrant & Creative Vibes
        </h1>
      </div>
    </section>
  );
}
