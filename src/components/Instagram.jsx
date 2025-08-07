import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from "../assets/cw.jpg";
import image1 from "../assets/cw1.jpeg";
import image2 from "../assets/bar1.jpg";
import image3 from "../assets/bar.jpg";
import image4 from "../assets/cw2.jpeg";
import image5 from "../assets/f.jpg";
import image6 from "../assets/pre2.jpg";
import image7 from "../assets/f1.jpg";
import image8 from "../assets/pre3.jpg";
import image9 from "../assets/marry.jpg";
import image10 from "../assets/pre4.jpeg";
import image11 from "../assets/f4.jpg";
import image12 from "../assets/f2.jpg";

export default function Instagram() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image,image8,image9,image10,image11,image12];

 const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 600,
  slidesToShow: 7,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

  return (
    <section className="bg-white py-16 px-4 text-center">
     <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-black font-serif">
  ~ INSTAGRAM ~
</h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden rounded-md shadow-md hover:shadow-yellow-500 transition-all">
                <img
                  src={src}
                  alt={`Instagram ${index + 1}`}
                  className="object-cover w-full h-[200px]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-10">
        <a
          href="https://www.instagram.com/thepicturetown/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
        >
          Check Our Insta Page
        </a>
      </div>
    </section>
  );
}
