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
    'Glasshouse',
    'Red Contrard Haveli',
    'Scottish House',
    'Tree House',
    'Santorini',
    'Roman Pillar',
    'Swimming Pool',
    'Gazebo',
    'Marry Me',
    'Library',
    'Kitchen',
    'Bar',
    'Kurbani',
    'Lounge',
    'Bench',
    'Tubelight',
    'Village',
    'Wheel Wheel Spanish Cafe',
    'Windmill',
    'Red Piano + Tree',
    'Picnic',
    'Madhuban',
    'Junkyard Red Car',
    'Bonfire',
    'Bricked Arches',
    'Back Archies',
    'Pillar Walk',
    'Bulb Set',
    'Colour Wall',
    'Swing Set',
    'Foodplum',
    'Railway Station',
    'London Street',
    'Beach',
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
            {/* Left Nav Items */}
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-white font-playfair hover:text-yellow-400 font-medium transition ">
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
                    <Link key={item.name} to={item.href} className="block px-6 py-1 text-gray-800 hover:bg-gray-100">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Logo in Center */}
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
                    <div
                      key={set}
                      className="px-6 py-1 hover:bg-gray-100 text-gray-800 cursor-pointer"
                    >
                      {set}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Nav Items */}
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

          {/* Mobile Menu Toggle */}
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
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 max-h-60 overflow-y-auto">
                  {services.map((item) => (
                    <Link
                      key={item.name}
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
                  className={`transition-transform ${mobileSetsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSetsOpen && (
                <div className="pl-6 pb-2 max-h-60 overflow-y-auto">
                  {sets.map((set) => (
                    <div key={set} className="py-1 text-white text-sm">
                      {set}
                    </div>
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

