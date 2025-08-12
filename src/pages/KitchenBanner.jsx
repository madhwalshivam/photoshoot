import React from "react";
import bgImage from "../assets/minimalist-background.jpg";

export default function KitchenSetBanner() {
  return (
    <section
      className="h-[300px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-center leading-tight drop-shadow-lg">
          Perfect Spot for Your Kitchen Set
        </h1>
      </div>
    </section>
  );
}