import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from './AboutBanner';
import image1 from '../assets/pre1.jpg';
import image2 from '../assets/pre4.jpeg';
import image3 from '../assets/front.jpg';
import image4 from '../assets/pre5.jpeg';

export default function AboutStory() {
  const timeline = [
    {
      year: '2012',
      title: 'The Beginning',
      description:
        'Every story begins with a spark, and ours started with a passion for storytelling through the lens., Armed with a vintage camera and a heart full of dreams, we began our journey capturing life’s raw and beautiful moments. What started as a one-person mission soon became a name people trusted for their most cherished memories. This was the foundation of what would eventually evolve into The Picture Town — where every click tells a story.',
      image: image1,
    },
    {
      year: '2016',
      title: 'Rising to Fame',
      description:
        'Our work had gained recognition for its distinct visual style and deep emotional storytelling. Our projects were featured in leading photography magazines, and we proudly received our first international award for excellence in wedding photography. Clients started choosing us not just for pictures, but for the experience — an artistic journey they could feel. Word of mouth, real testimonials, and the love of our clients fueled our rapid growth.',
      image: image2,
    },
    {
      year: '2019',
      title: 'The Picture Town is Born',
      description:
        'This was the turning point. To cater to growing creative demand, we launched our dream project — *The Picture Town*. Located in Holambi Kalan, Delhi, it quickly earned the reputation of being the **best pre-wedding shoot location in Delhi NCR**. With over **50+ themed backdrops**, **200+ cinematic props**, and premium amenities like **fully air-conditioned changing/makeup rooms**, our space was designed for pure visual storytelling. It’s not just a location, it’s a visual playground for photographers and couples alike.',
      image: image3,
    },
    {
      year: '2024',
      title: 'Best in Delhi & Beyond',
      description:
        'Today, The Picture Town stands tall as the **foremost pre-wedding and creative shoot destination in Delhi NCR**. With over 1000 love stories captured and a community of creators that grows every day, we continue to push the boundaries of visual storytelling. We offer a seamless, serene, and highly customizable environment — perfect for weddings, fashion shoots, music videos, and more. Our team is committed to delivering a smooth, stress-free experience, allowing every artist and client to focus purely on their vision.',
      image: image4,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>About Us | The Picture Town – Best Pre-Wedding Shoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="Explore the inspiring journey of The Picture Town – from a single lens dream to Delhi NCR’s most loved and best pre-wedding shoot location. Discover our story!"
        />
        <meta
          name="keywords"
          content="About The Picture Town, Pre Wedding Shoot in Delhi, Best Photography Studio Delhi NCR, Timeline, Wedding Photography, Cinematic Studio Delhi"
        />
        <link rel="canonical" href="https://thepicturetown.com/about" />
      </Helmet>
      <AboutBanner />

      <section className="py-10 bg-gradient-to-b from-white to-yellow-50">
        <div className="px-6 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest bg-yellow-100 px-6 py-2 rounded-full">
                Our Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-playfair mb-4 text-black">
              Every Great Story <span className="text-yellow-400">Has a Beginning</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              From humble beginnings to becoming one of the most sought-after photography studios,
              our journey has been filled with passion, dedication, and countless beautiful moments.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-300 hidden lg:block" />

            <div className="space-y-20">
              {timeline.map((item, index) => (
                <div key={index}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text Block */}
                    <div className="lg:w-1/2 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-black">{item.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                    </div>

                    {/* Image Block */}
                    <div className="lg:w-1/2">
                      <div className="overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 lg:h-80 object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-24">
            <div className="bg-black text-white p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Ready to Be Part of <span className="text-yellow-400">Our Story?</span>
              </h3>
              <p className="text-gray-300 text-base mb-6">
                Let’s create something beautiful together. Your moment, our passion, combined to
                create timeless memories.
              </p>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300">
                Start Your Journey →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

