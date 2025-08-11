import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSetsDropdown, setShowSetsDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSetsOpen, setMobileSetsOpen] = useState(false);

  const servicesTimeoutRef = useRef(null);
  const setsTimeoutRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Pre-Wedding', href: '/pre-wedding-photography-delhi' },
  ];

  const rightNavItems = [
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Songs Shoot', href: '/song-shoot-in-delhi' },
    { name: 'Fashion Shoot', href: '/fashion-shoot-in-delhi' },
    { name: 'Commercial Shoot', href: '/commercial-shoot-in-delhi' },
    { name: 'Brand Shoot', href: '/brand-shoot-in-delhi' },
    { name: 'Nature Shoot', href: '/nature-shoot-in-delhi' },
    { name: 'Instagram Reel Shoot', href: '/instagram-reel-shoot-in-delhi' },
    { name: 'YouTube Blog Shoot', href: '/youtube-blog-shoot-in-delhi' },
    { name: 'Maternity Shoot', href: '/maternity-shoot-in-delhi' },
    { name: 'Baby Shoot', href: '/baby-shoot-in-delhi' },
  ];

  const sets = [
    { name: 'Glasshouse', href: '/glasshouse-photoshoot-location-in-delhi' },
    { name: 'Red Courtyard Haveli', href: '/red-courtyard-haveli-photoshoot-location-in-delhi' },
    { name: 'Scottish House', href: '/scottish-house-photoshoot-location-in-delhi' },
    { name: 'Tree House', href: '/tree-house-photoshoot-location-in-delhi' },
    { name: 'Santorini', href: '/santorini-photoshoot-location-in-delhi' },
    { name: 'Roman Pillar', href: '/roman-pillar-photoshoot-location-in-delhi' },
    { name: 'Swimming Pool', href: '/swimming-pool-photoshoot-location-in-delhi' },
    { name: 'Gazebo', href: '/gazebo-photoshoot-location-in-delhi' },
    { name: 'Marry Me', href: '/marry-me-photoshoot-location-in-delhi' },
    { name: 'Library', href: '/library-photoshoot-location-in-delhi' },
    { name: 'Kitchen', href: '/kitchen-photoshoot-location-in-delhi' },
    { name: 'Bar', href: '/bar-photoshoot-location-in-delhi' },
    { name: 'Kurbani', href: '/kurbani-photoshoot-location-in-delhi' },
    { name: 'Lounge', href: '/lounge-photoshoot-location-in-delhi' },
    { name: 'Bench', href: '/bench-photoshoot-location-in-delhi' },
    { name: 'Tubelight', href: '/tubelight-photoshoot-location-in-delhi' },
    { name: 'Village', href: '/village-photoshoot-location-in-delhi' },
    { name: 'Wheel Wheel Spanish Cafe', href: '/wheel-wheel-spanish-cafe-photoshoot-location-in-delhi' },
    { name: 'Windmill', href: '/windmill-photoshoot-location-in-delhi' },
    { name: 'Red Piano + Tree', href: '/red-piano-tree-photoshoot-location-in-delhi' },
    { name: 'Picnic', href: '/picnic-photoshoot-location-in-delhi' },
    { name: 'Madhuban', href: '/madhuban-photoshoot-location-in-delhi' },
    { name: 'Junkyard Red Car', href: '/junkyard-red-car-photoshoot-location-in-delhi' },
    { name: 'Bonfire', href: '/bonfire-photoshoot-location-in-delhi' },
    { name: 'Bricked Arches', href: '/bricked-arches-photoshoot-location-in-delhi' },
    { name: 'Back Archies', href: '/back-archies-photoshoot-location-in-delhi' },
    { name: 'Pillar Walk', href: '/pillar-walk-photoshoot-location-in-delhi' },
    { name: 'Bulb Set', href: '/bulb-set-photoshoot-location-in-delhi' },
    { name: 'Colour Wall', href: '/colour-wall-photoshoot-location-in-delhi' },
    { name: 'Swing Set', href: '/swing-set-photoshoot-location-in-delhi' },
    { name: 'Foodplum', href: '/foodplum-photoshoot-location-in-delhi' },
    { name: 'Railway Station', href: '/railway-station-photoshoot-location-in-delhi' },
    { name: 'London Street', href: '/london-street-photoshoot-location-in-delhi' },
    { name: 'Beach', href: '/beach-photoshoot-location-in-delhi' },
  ];

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setShowServicesDropdown(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 500);
  };

  const handleSetsEnter = () => {
    clearTimeout(setsTimeoutRef.current);
    setShowSetsDropdown(true);
  };

  const handleSetsLeave = () => {
    setsTimeoutRef.current = setTimeout(() => {
      setShowSetsDropdown(false);
    }, 500);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between lg:justify-center relative">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-white font-playfair hover:text-yellow-400 font-medium transition">
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="text-white font-playfair hover:text-yellow-400 font-medium flex items-center gap-1">
                Services <ExpandMoreIcon fontSize="small" />
              </button>
              {showServicesDropdown && (
                <div className="absolute top-full font-playfair left-0 mt-2 w-60 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20">
                  {services.map((item) => (
                    <Link key={item.href} to={item.href} className="block px-6 py-1 text-gray-800 hover:bg-gray-100">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Logo */}
            <Link to="/" className="text-3xl font-playfair text-white mx-8">
              The Picture Town
            </Link>

            {/* Sets Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSetsEnter}
              onMouseLeave={handleSetsLeave}
            >
              <button className="text-white font-playfair hover:text-yellow-400 font-medium flex items-center gap-1">
                Sets <ExpandMoreIcon fontSize="small" />
              </button>
              {showSetsDropdown && (
                <div className="absolute top-full font-playfair right-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 max-h-60 overflow-y-auto">
                  {sets.map((set) => (
                    <Link
                      key={set.href}
                      to={set.href}
                      className="block px-6 py-1 hover:bg-gray-100 text-gray-800"
                    >
                      {set.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {rightNavItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-white font-playfair hover:text-yellow-400 font-medium transition">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden text-3xl font-playfair text-white">
            The Picture Town
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-black/70 rounded-lg backdrop-blur-sm">
            {[...navItems, ...rightNavItems].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 px-4 text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="border-t border-white/20 mt-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left px-4 py-3 text-white flex justify-between items-center"
              >
                Services
                <ExpandMoreIcon
                  className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 max-h-60 overflow-y-auto">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 text-white hover:text-gray-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Sets Dropdown */}
            <div className="border-t border-white/20 mt-2">
              <button
                onClick={() => setMobileSetsOpen(!mobileSetsOpen)}
                className="w-full text-left px-4 py-3 text-white flex justify-between items-center"
              >
                Sets
                <ExpandMoreIcon
                  className={`transition-transform ${mobileSetsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileSetsOpen && (
                <div className="pl-6 pb-2 max-h-60 overflow-y-auto">
                  {sets.map((set) => (
                    <Link
                      key={set.href}
                      to={set.href}
                      className="block py-1 text-white text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {set.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

