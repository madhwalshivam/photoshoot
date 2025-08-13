import React from "react";
import bgImage from "../assets/car.jpg"; 

export default function RedOpenCarBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay with red tint */}
      <div className="absolute inset-0 bg-red-900 bg-opacity-40" />

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center drop-shadow-lg">
          Red Open Car | Classic Drive Experience
        </h1>
        <p className="mt-3 text-white text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
          Feel the wind, embrace the road — vintage style reimagined.
        </p>
      </div>
    </section>
  );
}
