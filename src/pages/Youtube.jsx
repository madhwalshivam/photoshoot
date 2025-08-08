import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

// Material UI Icon
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import vid1 from "../assets/video.mp4";
import vid2 from "../assets/video1.mp4";

import Testimonials from "../components/Testimonial";

const videos = [vid1, vid2];

const useInView = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const YouTubeShoot = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevVideo = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <Helmet>
        <title>The Picture Town | Best YouTube Shoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town offers professional YouTube video shoots in Delhi NCR, delivering high-quality visuals to elevate your channel and engage viewers."
        />
        <meta
          property="og:title"
          content="Professional YouTube Video Shoots in Delhi NCR | The Picture Town"
        />
        <meta
          property="og:description"
          content="Create compelling YouTube content with expert video shoots. The Picture Town specializes in dynamic and creative video production in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thepicturetown.com/youtube-blog-shoot-in-delhi"
        />
      </Helmet>

      

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Professional YouTube Shoots</span>
            <br />
            <span className="text-red-600">Create Impactful Video Content</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-black">The Picture Town</span>, we
            provide expert <span className="font-semibold text-black">YouTube video shoots</span> tailored
            to boost your channel’s presence. Whether it's vlogs, tutorials, or promotional videos,
            our creative video production delivers professional quality that captivates your audience.
            Recognized as one of the{" "}
            <span className="font-semibold text-black">
              best YouTube shoot locations in Delhi NCR
            </span>
            , we help you create videos that inspire, engage, and grow your subscriber base.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {videos.map((video, index) => {
            const [ref, visible] = useInView();
            return (
              <div
                key={index}
                ref={ref}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden shadow-md rounded-md cursor-pointer transition-all duration-1000 transform will-change-transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <video
                  src={video}
                  className="w-full h-[380px] object-cover rounded-md"
                  muted
                  playsInline
                  preload="metadata"
                />
                {/* Play Icon Overlay */}
                <PlayCircleOutlineIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: 64,
                    color: "rgba(255, 255, 255, 0.8)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevVideo}
          >
            ❮
          </button>

          <video
            src={videos[currentIndex]}
            className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextVideo}
          >
            ❯
          </button>
        </div>
      )}

      <Testimonials />
    </div>
  );
};

export default YouTubeShoot;

