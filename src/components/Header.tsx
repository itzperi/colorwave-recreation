import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Industries', items: [] },
    { label: 'Solutions', items: [] },
    { label: 'Cases', items: [] },
    { label: 'Research', items: [] },
    { label: 'Blog', items: [] },
    { label: 'News', items: [] },
  ];

  const bottomMenuItems = [
    { label: 'Categories', hasDropdown: true },
    { label: 'Services', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false },
    { label: 'About us', hasDropdown: false },
    { label: 'Help', hasDropdown: true },
  ];

  return (
    <header className="bg-[#1A1F2C]">
      <nav className="container mx-auto">
        {/* Top Navigation */}
        <div className="hidden md:flex justify-end py-2 space-x-4 bg-[#1A1F2C]">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="text-white hover:text-raastas-light transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-2 border-t border-gray-700">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/94226ab9-122b-4ace-b2e0-2c4ca37d51c4.png"
              alt="Raastas Logo"
              className="h-48 w-auto object-contain" // Increased height even more
            />
          </Link>

          {/* Desktop Bottom Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {bottomMenuItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center text-white hover:text-raastas-light transition-colors">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-raastas-light transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            {[...menuItems, ...bottomMenuItems].map((item) => (
              <a
                key={item.label}
                href="#"
                className="block text-white hover:text-raastas-light transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;