import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function BabyVideo() {
  const videos = [
    "Q-e5eg3rh7c", 
    "T71vBahdOz0",
   
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-yellow-400 text-black py-5 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center p-6 rounded-lg">
       <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4 text-black">
  A MOMENT TO REMEMBER
</h2>
<p className="text-xl font-semibold mb-10">
  BABY VIDEOS IN BEST LOCATIONS OF DELHI
</p>

        <Slider {...sliderSettings}>
          {videos.map((videoId, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md hover:shadow-yellow-500 transition-all">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}