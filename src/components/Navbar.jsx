import { Link } from 'react-router-dom';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSetsDropdown, setShowSetsDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSetsOpen, setMobileSetsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  const rightNavItems = [
    { name: 'Pre-Weeding', href: '/Best-Preweeding-in-india' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact & Pricing', href: '/contact' },
  ];

  const services = [
    { name: 'Maternity Photography', href: '/services/maternity' },
    { name: 'Baby Shoot', href: '/services/baby-shoot' },
    { name: 'Fashion Photography', href: '/services/fashion' },
  ];

  const sets = [
    'Bonfire', 'Brick Wall', 'Bricked Arches', 'Bulb Set', 'Cafe',
    'Colour Wall', 'Food Truck', 'Frame In Jungle', 'Marry Me', 'Village', 'Others'
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between lg:justify-center relative">

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">

            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-white hover:text-gray-300 font-medium transition">
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="text-white hover:text-gray-300 font-medium flex items-center gap-1">
                Services <ExpandMoreIcon fontSize="small" />
              </button>
              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20">
                  {services.map((item) => (
                    <Link key={item.name} to={item.href} className="block px-6 py-3 text-gray-800 hover:bg-gray-100">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sets Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSetsDropdown(true)}
              onMouseLeave={() => setShowSetsDropdown(false)}
            >
              <button className="text-white hover:text-gray-300 font-medium flex items-center gap-1">
                Sets <ExpandMoreIcon fontSize="small" />
              </button>
              {showSetsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20">
                  {sets.map((set) => (
                    <div key={set} className="px-6 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                      {set}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Center Logo */}
            <Link to="/" className="text-3xl font-['Pacifico'] text-white mx-8">
              The Picture Town
            </Link>

            {/* Right Nav */}
            {rightNavItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-white hover:text-gray-300 font-medium transition">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden text-3xl font-['Pacifico'] text-white">
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
                <div className="pl-6">
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
                <div className="pl-6 pb-2">
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
