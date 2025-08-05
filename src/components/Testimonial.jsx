import React from "react";
import bgImage from '../assets/marry.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav & Ananya",
      quote:
        "The Picture Town is truly the best pre-wedding shoot location in Delhi. The setup, lighting, and backdrops gave our pictures a magical feel. It’s worth every penny!",
    },
    {
      name: "Mira Sharma",
      quote:
        "I chose The Picture Town for my maternity shoot and I’m so happy I did! The locations were serene and creative, and the staff was incredibly supportive throughout.",
    },
    {
      name: "Rohan & Sneha",
      quote:
        "This is the most aesthetic and affordable shoot location in Delhi NCR! Perfect for couples looking for cinematic shots. Highly recommend The Picture Town!",
    },
    {
      name: "Ishaan Kapoor",
      quote:
        "We did a fashion portfolio shoot here, and the variety of themes and props helped bring my vision to life. A must-visit location for creatives and influencers!",
    },
    {
      name: "Kriti & Vansh",
      quote:
        "Loved the experience at The Picture Town. Every backdrop is better than the last – so many creative options for couples. Truly the best location for photography lovers.",
    },
    {
      name: "Diya Bhatia",
      quote:
        "My baby shoot at The Picture Town was absolutely adorable. Safe, clean, and beautifully maintained sets made everything smooth and joyful.",
    },
    {
      name: "Aman & Priya",
      quote:
        "We were amazed by how professional yet friendly the team was. From outfit changes to posing ideas, everything felt easy and enjoyable!",
    },
    {
      name: "Sanya Malhotra",
      quote:
        "One of the best places in Delhi for maternity and baby shoots! It offers so much variety in a single location. Truly a hidden gem for photographers and families.",
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
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-200">
          Discover why <span className="text-yellow-400 font-semibold">The Picture Town</span> is rated the <strong>best shoot location in Delhi</strong> for pre-wedding, maternity, baby, and fashion photography. Professional setups, stunning backdrops, and affordable packages make every shoot unforgettable.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full flex flex-col justify-between">
                <p className="text-base italic mb-4">“{t.quote}”</p>
                <div className="text-right font-semibold text-gray-800">– {t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
