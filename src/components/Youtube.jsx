import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Youtube() {
  const videos = [
     "tb8XpuiAo7U", 
    "eeJykRwVpSw",
    "p_hdNyb6E4c",
    "t_FV_LQB3AU",
    "uZai20Hhv9w",
    "l0rmkrAQN2M",
    "zDZJrrMTAPA",
    "Wr0lmXf5-Zk",
     "xrhVADUKeJw", 
    "eJFyyf7fwhE",
    "fmPjbLnbfv0",
    "OBPAhBUSTHM",
    "TqfNwxq2sL0",
    "Y4-Ly0gHGLE",
    "t6TpcyftH6M",
    "KMS1tl8Ets4",
    "Jx14cXmbOls",
    "-oJ09lvmi0Y",
    "P2vDFEmGGJo",
    "DbhtBul52JM",
    "a5YO_17FMmA",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
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
          PRE-WEDDING & OTHERS VIDEOS IN BEST LOCATIONS OF DELHI
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

