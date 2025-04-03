import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/src/assets/icon_sans_fond.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo Loopivia" className="h-10 w-10" />
          <span className="text-2xl font-bold text-blue-400 tracking-tight">Loopivia</span>
        </Link>

        {/* Hamburger pour mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold">
          <Link to="/pourquoi-automatiser" className="hover:text-blue-400 transition">Pourquoi automatiser ?</Link>
          <Link to="/qui-sommes-nous" className="hover:text-blue-400 transition">Qui sommes-nous ?</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-[#0f172a] text-white">
          <Link to="/pourquoi-automatiser" className="block hover:text-blue-400">Pourquoi automatiser ?</Link>
          <Link to="/qui-sommes-nous" className="block hover:text-blue-400">Qui sommes-nous ?</Link>
          <Link to="/contact" className="block hover:text-blue-400">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
