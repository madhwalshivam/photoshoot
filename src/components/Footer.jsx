import React from 'react';
import footerBg from '../assets/footer.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import logo from '../assets/logo.png'
export default function Footer() {
  return (
    <>
     
 <div className="bg-gray-100 py-8 px-6">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-2xl font-semibold font-playfair text-gray-800 mb-4">
      Best Photoshoot Locations in Delhi – Pre-Wedding, Song-Shoot, Fashion-Shoot & More
    </h3>
    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
      Looking for the <strong>best pre-wedding shoot locations in Delhi</strong>? At <strong>The Picture Town -Alipur</strong>, we offer some of the most scenic, iconic, and cinematic spots across Delhi NCR to make your love story unforgettable. Whether it’s a royal heritage site, lush garden, or a styled indoor studio, our locations provide the perfect backdrop for your pre-wedding memories.
      <br /><br />
      Expecting a little one? We also have <strong>beautiful maternity photoshoot locations in Delhi</strong> that blend comfort, elegance, and natural charm — perfect for celebrating the joy of motherhood.
      <br /><br />
      For proud new parents, we recommend our <strong>adorable baby shoot locations in Delhi</strong> with natural light, baby-friendly settings, and cute props that bring out every smile and expression.
      <br /><br />
      Want something trendy? Our <strong>fashion shoot</strong> and <strong>Instagram reel shoot locations</strong> are curated for influencers, models, and creators who want bold, stylish visuals. We also provide premium spaces for <strong>brand shoots</strong> and <strong>commercial photography</strong> that help businesses stand out.
      <br /><br />
      Book your session today and explore why we’re considered one of the <strong>top photoshoot location providers in Delhi</strong> for every special occasion — from <strong>anniversaries</strong> to <strong>family shoots</strong>, <strong>YouTube blog shoots</strong>, and more.
    </p>
  </div>
</div>


      {/* ===== Footer Section ===== */}
      <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={footerBg}
            alt="Studio Background"
            className="w-full h-full object-cover object-top opacity-10"
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Studio Info */}
            <div>
               <div >
      <img src={logo} alt="The Picture Town -Alipur Logo" className="h-28" />
    </div>
    <p className="font-playfair font-bold text-yellow-400 mb-2">
      The Picture Town -Alipur
              </p>
              <p className="text-gray-300 mb-4">
                Best Pre Wedding Location in Delhi. Affordable, cinematic sets for prewedding, maternity, anniversary, and more.
              </p>
              <p className="text-yellow-400 text-sm">
                Follow us on Instagram for latest shoot updates and behind-the-scenes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-playfair text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/prewedding" className="font-playfair text-yellow-400 font-semibold hover:text-white">Pre Wedding</a></li>
                <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="/backdrops" className="hover:text-white">Our Backdrops</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
           <div>
  <h4 className="font-semibold mb-4 font-playfair text-yellow-400">Contact Info</h4>
  <ul className="text-gray-300 space-y-3 text-sm">
    <li className="flex items-start gap-2">
      <LocationOnIcon className="text-yellow-400" />
     Alipur-Narela road , Alipur opposite Jeet Farm  <br /> New Delhi- 110082
    </li>
    <li className="flex items-center gap-2">
      <WhatsAppIcon className="text-green-400 ml-1" /> <PhoneIcon className="text-red-500" />
      RAAJ <a href="tel:08287589910" className="hover:text-white">: 8287211620</a>
     
    </li>
    <li className="flex items-center gap-2">
       <WhatsAppIcon className="text-green-400 ml-1" /><PhoneIcon className="text-red-500" />
      NISHANT <a href="tel:08287211620" className="hover:text-white">: 8287589910</a>
     
    </li>
    <li className="flex items-center gap-2">
    <WhatsAppIcon className="text-green-400 ml-1" /> <PhoneIcon className="text-red-500" />
      SUMITA <a href="tel:08287211620" className="hover:text-white">: 9899939355</a>
    
    </li>
    <li className="flex items-center gap-2">
     <WhatsAppIcon className="text-green-400 ml-1" /> <PhoneIcon className="text-red-500" />
      RITIKA JAIN <a href="tel:08287211620" className="hover:text-white">: 9899198297</a>
      
    </li>
  </ul>
</div>
 

            {/* Social Links */}
            <div>
            <h4 className="font-semibold mb-4 font-playfair text-yellow-400">
  Follow Us <span className="text-gray-300">/ Subscribe Us</span>
</h4>

              <div className="flex space-x-4">
                <a href="https://www.facebook.com/thepicturetown" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/thepicturetown/#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                  <InstagramIcon />
                </a>
                 <a href="https://www.youtube.com/@ThePictureTown" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                  <YouTubeIcon/>
                </a>
               
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} The Picture Town -Alipur | All Rights Reserved</p>
            <p className="mt-2">
              Designed by <a href="https://websiteseotool.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-playfair hover:underline">Advertising India</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
