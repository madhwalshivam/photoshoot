// src/components/HomeService.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/pre1.jpg'
import image2 from '../assets/baby1.jpg'
import image3 from '../assets/MAT.jpeg'
import image4 from '../assets/f4.jpg'

const services = [
  {
    title: "Pre Wedding",
    image: image1,
    desc: "Capture your love story with cinematic frames."
  },
  {
    title: "Baby Shoot",
    image: image2,
    desc: "Adorable moments of your little one, frozen in time."
  },
  {
    title: "Maternity",
    image: image3,
    desc: "Celebrate the beauty and glow of motherhood."
  },
  {
    title: "Fashion",
    image: image4,
    desc: "Stylish portraits for models, influencers & creatives."
  }
];

const HomeService = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-center text-4xl font-['Pacifico'] font-semibold mb-10 tracking-wide text-black">
        OUR SERVICES
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div
                className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group"
                style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-opacity-60">
                  <h3 className="text-white font-['Pacifico'] text-xl font-bold">{service.title}</h3>
                  <p className="text-white text-sm tracking-wide mt-1">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeService;


