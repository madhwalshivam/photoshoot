import React from "react";
import bgImage from "../assets/bulb.jpg"; 

export default function BulbSetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Warm golden overlay for glowing effect */}
      <div className="absolute inset-0 bg-yellow-700 bg-opacity-30" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center drop-shadow-lg">
          Bulb Set | Warm & Magical Ambiance
        </h1>
      </div>
    </section>
  );
}
