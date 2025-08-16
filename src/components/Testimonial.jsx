import React, { useRef } from "react";
import bgImage from "../assets/marry.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  const swiperRef = useRef(null);

  // ✅ All testimonials in ONE array (SEO-friendly + map ke liye sahi)
  const testimonials = [
    // Pre-wedding
    {
      name: "Aarav & Ananya",
      quote:
        "The Picture Town - Alipur is the best pre-wedding shoot location in Delhi NCR! Every backdrop felt magical and gave us cinematic memories for life.",
    },
    {
      name: "Rohan & Sneha",
      quote:
        "Such an aesthetic and affordable pre-wedding shoot location in Delhi. Highly recommended for couples looking for dreamy photoshoots!",
    },

    // Maternity
    {
      name: "Mira Sharma",
      quote:
        "I choose The Picture Town - Alipur for my maternity shoot in Delhi NCR, and I couldn't be happier. Serene backdrops and cozy setups made it unforgettable.",
    },
    {
      name: "Sanya Malhotra",
      quote:
        "One of the most beautiful maternity shoot locations in Delhi. The sets are clean, safe, and perfect for capturing timeless motherhood moments.",
    },

    // Fashion
    {
      name: "Ishaan Kapoor",
      quote:
        "We did a fashion shoot at The Picture Town, and the variety of backdrops made my portfolio look world-class. Definitely the best fashion shoot location in Delhi.",
    },

    // Baby
    {
      name: "Diya Bhatia",
      quote:
        "My baby's photoshoot at The Picture Town - Alipur was adorable! Safe, clean, and creative setups make it the best baby shoot location in Delhi.",
    },

    // Commercial
    {
      name: "Aditya Verma",
      quote:
        "The Picture Town is the most versatile commercial shoot location in Delhi NCR. Perfect lighting, themes, and professional support throughout.",
    },
    {
      name: "Creative Studio",
      quote:
        "For brand shoots in Delhi, this place is unbeatable. From props to lighting, everything is tailored for professional photography.",
    },

    // Insta Reels
    {
      name: "Priya Sharma",
      quote:
        "I created Instagram reels here and the results were amazing! Truly the best Instagram reel shoot location in Delhi NCR.",
    },

    // YouTube
    {
      name: "Tech Vlogger",
      quote:
        "This is the ultimate YouTube vlog shoot location in Delhi. Stunning sets, great lighting, and so much variety in one place.",
    },

    // Swimming Pool
    {
      name: "Ritika & Kunal",
      quote:
        "The swimming pool photoshoot at The Picture Town was breathtaking. Truly the best poolside shoot location in Delhi NCR!",
    },

    // Machhan
    {
      name: "Kriti & Vansh",
      quote:
        "The Machhan setup is so unique! Perfect for rustic, cozy, and romantic photoshoots in Delhi NCR. Loved the vibe!",
    },

    // Overall
    {
      name: "Aman & Priya",
      quote:
        "The Picture Town is the best photoshoot location in Delhi NCR with endless backdrops. From romantic to creative, everything is here in one place.",
    },
  ];

  return (
    <section
      className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-200">
          Discover why{" "}
          <span className="text-yellow-400 font-semibold">
            The Picture Town - Alipur
          </span>{" "}
          is rated the <strong>best shoot location in Delhi NCR</strong> for
          pre-wedding, maternity, baby, fashion, commercial, YouTube, and more.
          Professional setups, stunning backdrops, and affordable packages make
          every shoot unforgettable.
        </p>

        {/* ✅ Swiper Slider */}
        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full flex flex-col justify-between">
                  <p className="text-base italic mb-4">“{t.quote}”</p>
                  <div className="text-right font-semibold text-gray-800">
                    – {t.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
