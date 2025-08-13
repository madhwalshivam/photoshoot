import React from "react";
import bgImage from "../assets/swing1.jpeg"; 

export default function SwingSetBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Light warm overlay for cozy feel */}
      <div className="absolute inset-0 bg-yellow-900 bg-opacity-30" />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center drop-shadow-lg">
          Swing Set | Playful & Romantic Vibes
        </h1>
      </div>
    </section>
  );
}
