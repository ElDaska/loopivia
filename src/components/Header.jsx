import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/icon_sans_fond.png';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo + nom déclenchent navigation + scrollTo top */}
        <div onClick={handleHomeClick} className="flex items-center space-x-3 cursor-pointer">
          <img src={logo} alt="Logo Loopivia" className="h-12 w-12 md:h-14 md:w-14 transition-transform duration-300" />
          <span className="text-3xl md:text-4xl font-extrabold text-blue-400 tracking-tight">Loopivia</span>
          </div>


        {/* Menu */}
        <nav className="space-x-8 text-lg md:text-xl font-semibold">
          <a href="/pourquoi-automatiser" className="hover:text-blue-400 transition">Pourquoi automatiser ?</a>
          <a href="/qui-sommes-nous" className="hover:text-blue-400 transition">Qui sommes-nous ?</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
