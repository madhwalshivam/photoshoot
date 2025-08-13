
import React from "react";
import bgImage from "../assets/redd.jpg";

export default function RedBanner() {
  return (
    <section
      className="h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair text-center px-4">
      Red Courtyard Haveli – A Royal Tale of Timeless Charm
        </h1>
      </div>
    </section>
  );
}