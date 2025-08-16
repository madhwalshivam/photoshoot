import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from './AboutBanner';
import image1 from '../assets/pre1.jpg';
import image2 from '../assets/pre4.jpeg';
import image3 from '../assets/front.jpg';
import image4 from '../assets/pre5.jpeg';

function AboutStory() {
  // Memoized Timeline Data
 const timeline = useMemo(
  () => [
    {
      year: '2012',
      title: 'The Beginning',
      description:
        'Every great journey begins with a single frame. In 2012, our passion for storytelling through photography took shape. With a vintage camera and endless creative dreams, we began capturing life’s purest emotions. What started as a small, heartfelt photography journey soon became the foundation for one of the **best photography locations in Delhi NCR** — a place where every click would tell a story worth remembering.',
      image: image1,
      alt: 'Photography journey begins in 2012 with vintage camera',
    },
    {
      year: '2016',
      title: 'Rising to Fame',
      description:
        'By 2016, our work had earned recognition for its unique visual style and emotional depth. Featured in top photography magazines and awarded internationally for our wedding photography, we became a trusted choice for couples seeking more than just pictures — they came for the full artistic experience. This growing reputation laid the groundwork for what would soon be known as the **best pre-wedding shoot in Delhi**.',
      image: image2,
      alt: 'Award-winning wedding and pre-wedding photography in Delhi 2016',
    },
    {
      year: '2019',
      title: 'The Picture Town -Alipur is Born',
      description:
        'In 2019, we officially launched *The Picture Town -Alipur* — now celebrated as the **best pre-wedding shoot location in Delhi NCR**, our venue offers over **50+ themed backdrops**, **200+ cinematic props**, and premium facilities like air-conditioned makeup rooms. From dreamy wedding sets to creative cinematic spaces, it became a visual paradise for photographers, couples, and brands alike.',
      image: image3,
      alt: 'The Picture Town -Alipur best pre-wedding shoot location in Delhi NCR',
    },
    {
      year: '2024',
      title: 'Best in Delhi & Beyond',
      description:
        'Today, *The Picture Town -Alipur* proudly stands as the **leading photography and creative shoot destination in Delhi NCR**. With over 1000 love stories captured, we’ve hosted countless weddings, fashion shoots, music videos, and maternity sessions. Known for our unmatched backdrops, cinematic flair, and seamless shooting experience, we continue to set the standard for the **best photography location in Delhi NCR** and beyond.',
      image: image4,
      alt: 'Leading photography and pre-wedding shoot destination in Delhi NCR 2024',
    },
  ],
    []
  );

  return (
    <div>
      {/* SEO Tags */}
      <Helmet>
        <title>About Us | The Picture Town -Alipur – Best Pre-Wedding Shoot Location in Delhi NCR</title>
        <meta
          name="description"
          content="Discover the journey of The Picture Town -Alipur – from a dream to Delhi NCR’s most loved pre-wedding shoot location. Explore our story of passion, creativity, and excellence."
        />
        <meta
          name="keywords"
          content="About The Picture Town -Alipur, Pre Wedding Shoot in Delhi, Best Photography Studio Delhi NCR, Wedding Photography, Cinematic Studio Delhi"
        />
        <link rel="canonical" href="https://thepicturetown.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | The Picture Town -Alipur" />
        <meta
          property="og:description"
          content="The inspiring journey from one lens to Delhi NCR’s best pre-wedding shoot location."
        />
        <meta property="og:image" content="https://thepicturetown.com/assets/front.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepicturetown.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | The Picture Town -Alipur" />
        <meta
          name="twitter:description"
          content="The inspiring journey from one lens to Delhi NCR’s best pre-wedding shoot location."
        />
        <meta name="twitter:image" content="https://thepicturetown.com/assets/front.jpg" />
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
            <h1 className="text-2xl md:text-4xl font-bold font-playfair mb-4 text-black">
              Every Great Story <span className="text-yellow-400">Has a Beginning</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              From humble beginnings to becoming one of the most sought-after photography studios,
              our journey has been filled with passion, dedication, and countless beautiful moments.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-300 hidden lg:block" />

            <div className="space-y-20">
              {timeline.map((item, index) => (
                <div key={item.year}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text Block */}
                    <div className="lg:w-1/2 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-black">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                    </div>

                    {/* Image Block with Lazy Loading */}
                    <div className="lg:w-1/2">
                      <div className="overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                          width="100%"
                          height="100%"
                          className="w-full h-64 lg:h-80 object-cover object-center transition-transform duration-500 hover:scale-105"
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
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Ready to Be Part of <span className="text-yellow-400">Our Story?</span>
              </h2>
              <p className="text-gray-300 text-base mb-6">
                Let’s create something beautiful together. Your moment, our passion — timeless
                memories.
              </p>
              <a
                href="/contact"
                aria-label="Start your photography journey with us"
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 inline-block"
              >
                Start Your Journey →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(AboutStory);

