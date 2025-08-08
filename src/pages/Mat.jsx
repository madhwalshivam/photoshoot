import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";

import Testimonials from "../components/Testimonial";
import MatBanner from "./MatBanner";

// All images
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

// Custom hook to detect scroll into view
const useInView = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Mat = () => {
  return (
    <div>
      <Helmet>
        <title>The Picture Town | Best Maternity Shoots in Delhi NCR</title>
        <meta
          name="description"
          content="The Picture Town offers the best maternity photoshoots in Delhi NCR. Capture your motherhood journey with timeless and elegant photography."
        />
        <meta property="og:title" content="Celebrating the Journey of Motherhood" />
        <meta
          property="og:description"
          content="Heartfelt maternity photoshoots that honor your beautiful journey into motherhood. Trusted by families in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/maternity-shoot-in-delhi" />
        {/* <meta property="og:image" content="https://yourdomain.com/path/to/cover.jpg" /> */}
      </Helmet>

      <MatBanner />

      <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold mb-4 font-playfair text-black">
            <span className="font-playfair">Celebrating the Journey of Motherhood</span>
            <br />
            <span className="text-pink-500">with Timeless Memories</span>
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10 text-justify leading-relaxed">
  At <span className="font-semibold text-black">The Picture Town</span>, we specialize in
  crafting heartfelt maternity photoshoots that honor your beautiful journey into motherhood.
  Recognized for delivering the <span className="font-semibold text-black">best maternity shoots in Delhi NCR</span>,
  we focus on elegance, comfort, and emotional connection to create images you’ll cherish forever.
</p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {images.map((img, index) => {
            const [ref, visible] = useInView();

            return (
              <div
                key={index}
                ref={ref}
                className={`overflow-hidden shadow-md transition-all duration-1000 transform will-change-transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={img}
                  alt={`Maternity Shoot ${index + 1}`}
                  loading="eager"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Mat;
