// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../config/siteConfig"; // Importation centralisée
import logoLoopivia from "/src/assets/icon_sans_fond.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Les classes sont déjà bien définies, on les conserve.
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-blue-400 bg-slate-700"
        : "text-gray-300 hover:bg-slate-700 hover:text-white"
    }`;
  
  const mobileLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium ${linkClasses({ isActive })}`;

  return (
    <header
      className={`
        bg-slate-900 sticky top-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-opacity-80 backdrop-blur-md shadow-lg" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img src={logoLoopivia} alt="Logo Loopivia" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-400 tracking-tight">Loopivia</span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.path} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Ouvrir/Fermer le menu</span>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={mobileLinkClasses}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;