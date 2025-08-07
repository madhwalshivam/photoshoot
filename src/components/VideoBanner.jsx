import React from "react";
import bgImage from "../assets/footer.jpg"; 

export default function VideoBanner() {
  return (
    <section
      className="h-[300px] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Dark overlay */}
      <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold font-playfair">
        OUR VIDEOS
      </h1>
    </section>
  );
}
