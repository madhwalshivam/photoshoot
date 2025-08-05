import React from 'react';
import footerBg from '../assets/footer.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <>
      {/* ===== SEO Keywords Section ===== */}
      <div className="bg-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold font-['Pacifico'] text-gray-800 mb-4">Popular Pre-Wedding Searches in Delhi NCR</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-700">
            {[
              'Pre-wedding shoot location in Delhi',
              'Pre wedding shoot locations',
              'Pre wedding photoshoot location',
              'Places for pre wedding photoshoot',
              'Prewedding photo shoot location',
              'Places for pre wedding shoot',
              'Wedding pre shoot locations',
              'Pre-wedding photography Delhi',
              'Best pre-wedding shoot location',
              'Pre-wedding venue in Delhi',
              'Pre-wedding photography locations',
              'Affordable pre-wedding shoot in Delhi',
              'Delhi pre-wedding shoot packages',
              'Pre-wedding backdrops in Delhi',
              'Pre-wedding props Delhi',
              'Pre wedding shoot locations near me',
              'Farmhouse for pre-wedding shoot',
             ' Romantic pre wedding shoot Delhi',
             'Outdoor pre wedding shoot locations',
             'Cinematic pre wedding shoot places',
            ].map((keyword, index) => (
              <a
                key={index}
                href={`/${keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}
                className="hover:text-yellow-600 transition"
              >
                {keyword}
              </a>
            ))}
          </div>
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
              <h3 className="text-2xl font-bold mb-4 font-['Pacifico'] text-yellow-400">THE PICTURE TOWN</h3>
              <p className="text-gray-300 mb-4">
                Best Pre Wedding Location in Delhi. Affordable, cinematic sets for prewedding, maternity, anniversary, and more.
              </p>
              <p className="text-yellow-400 text-sm">
                Follow us on Instagram for latest shoot updates and behind-the-scenes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 font-['Pacifico'] text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/prewedding" className="font-['Pacifico'] text-yellow-400 font-semibold hover:text-white">Pre Wedding</a></li>
                <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="/backdrops" className="hover:text-white">Our Backdrops</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 font-['Pacifico'] text-yellow-400">Contact Info</h4>
              <ul className="text-gray-300 space-y-3 text-sm">
                <li>📍 Alipur - Narela Rd, opposite Jeet Farm,<br />Holambi Kalan, Delhi, 110082</li>
                <li>📞 <a href="tel:08287589910" className="hover:text-white">08287589910</a></li>
                <li>📞 <a href="tel:08287211620" className="hover:text-white">08287211620</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 font-['Pacifico'] text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/thepicturetown" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/thepicturetown/#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <InstagramIcon />
                </a>
               
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} THE PICTURE TOWN | All Rights Reserved</p>
            <p className="mt-2">
              Designed by <a href="https://websiteseotool.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-['Pacifico'] hover:underline">Advertising India</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
