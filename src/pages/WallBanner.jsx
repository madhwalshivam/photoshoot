import React from "react";
import bgImage from "../assets/wall.jpg"; 

export default function BrickWallSetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Rustic warm overlay for cozy, vintage vibe */}
      <div className="absolute inset-0 bg-red-900 bg-opacity-30" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-yellow-100 text-3xl md:text-5xl font-bold font-playfair text-center drop-shadow-lg">
          Brick Wall Set | Rustic & Vintage Charm
        </h1>
      </div>
    </section>
  );
}
