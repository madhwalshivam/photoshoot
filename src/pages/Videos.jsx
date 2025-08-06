import React from "react";
import VideoBanner from "../components/VideoBanner";
import Testimonials from "../components/Testimonial";

export default function OurVideos() {
  const videos = [
    "tb8XpuiAo7U", 
    "eeJykRwVpSw",
    "p_hdNyb6E4c",
    "TqfNwxq2sL0",
    "Y4-Ly0gHGLE",
    "t6TpcyftH6M",
    "KMS1tl8Ets4",
    "7we7w6jfOm4", 
    "PVc3BoRUZRQ",
    "8929qTBQCvE", 
    "a5YO_17FMmA",
    "q1ddvSvu7BA"
  ];

  // Always chunk into 4
  const chunkVideos = (videos) => {
    const chunks = [];
    for (let i = 0; i < videos.length; i += 4) {
      chunks.push(videos.slice(i, i + 4));
    }
    return chunks;
  };

  const videoChunks = chunkVideos(videos);

  return (
    <>
      <VideoBanner />

      <section className="bg-white text-black py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
        <p className="text-2xl md:text-4xl font-bold font-['Pacifico'] mb-4 text-black">
  Capturing Unforgettable Moments<br />
 <p className="text-yellow-400"> in stunning locations</p>
</p>

<p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
  At <span className="font-semibold text-black">The Picture Town</span>, we specialize in creating cinematic memories through
  breathtaking visuals. From romantic pre-wedding shoots to timeless family moments, our handpicked locations and
  professional touch bring your story to life.
</p>


          {videoChunks.map((chunk, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
            >
              {chunk.map((videoId, index) => (
                <div
                  key={index}
                  className="overflow-hidden border border-gray-300 rounded-lg shadow-md hover:shadow-yellow-500 transition-all"
                >
                  <div className="aspect-w-16 aspect-h-15">
                    <iframe
                      width="100%"
                      height="300"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Testimonials/>
    </>
  );
}
