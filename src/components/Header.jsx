import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/icon_sans_fond.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Fermer le menu quand la route change
  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo + Nom */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={handleLinkClick}
        >
          <img src={logo} alt="Logo Loopivia" className="h-12 w-12" />
          <span className="text-2xl md:text-3xl font-bold text-blue-400 tracking-tight">Loopivia</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold">
          <Link to="/pourquoi-automatiser" onClick={handleLinkClick} className="hover:text-blue-400 transition">
            Pourquoi automatiser ?
          </Link>
          <Link to="/qui-sommes-nous" onClick={handleLinkClick} className="hover:text-blue-400 transition">
            Qui sommes-nous ?
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-[#0f172a] text-base font-semibold">
          <Link to="/pourquoi-automatiser" onClick={handleLinkClick} className="block hover:text-blue-400 transition">
            Pourquoi automatiser ?
          </Link>
          <Link to="/qui-sommes-nous" onClick={handleLinkClick} className="block hover:text-blue-400 transition">
            Qui sommes-nous ?
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="block hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
