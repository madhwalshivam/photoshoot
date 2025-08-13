import React from "react";
import bgImage from "../assets/junkkk.jpg"; 

export default function JunkyardSetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center">
          Junkyard Set | Rustic Grit & Raw Vibes
        </h1>
      </div>
    </section>
  );
}
