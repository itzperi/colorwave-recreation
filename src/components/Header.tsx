import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-raastas-purple">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lovable-uploads/c0f3b15e-060f-4cf6-bc73-70ce9b758695.png" alt="Raastas Logo" className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-raastas-light transition-colors">Industries</a>
            <a href="#" className="text-white hover:text-raastas-light transition-colors">Solutions</a>
            <a href="#" className="text-white hover:text-raastas-light transition-colors">Cases</a>
            <a href="#" className="text-white hover:text-raastas-light transition-colors">Research</a>
            <a href="#" className="text-white hover:text-raastas-light transition-colors">Blog</a>
            <a href="#" className="text-white hover:text-raastas-light transition-colors">News</a>
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
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block text-white hover:text-raastas-light transition-colors">Industries</a>
            <a href="#" className="block text-white hover:text-raastas-light transition-colors">Solutions</a>
            <a href="#" className="block text-white hover:text-raastas-light transition-colors">Cases</a>
            <a href="#" className="block text-white hover:text-raastas-light transition-colors">Research</a>
            <a href="#" className="block text-white hover:text-raastas-light transition-colors">Blog</a>
            <a href="#" className="block text-white hover:text-raastas-light transition-colors">News</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;