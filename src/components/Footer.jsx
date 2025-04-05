import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/icon_sans_fond.png"; // Assurez-vous que le logo est dans le dossier "assets"

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo + Intro */}
          <div className="flex flex-col items-start mb-4 lg:mb-0">
            <div className="flex items-center mb-6">
              <img className="h-10 w-auto mr-3" src={logo} alt="Logo Loopivia" />
              <span className="text-2xl font-bold text-white">Loopivia</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Libérez votre productivité avec des outils intelligents, accessibles et sur-mesure pour votre entreprise.
            </p>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://x.com/ContactLoopivia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.loopivia.com/ComingSoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
                aria-label="Instagram"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/loopivia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.loopivia.com/ComingSoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
                aria-label="Facebook"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@loopivia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens principaux alignés à droite */}
          <div className="text-right lg:col-start-4">
            <h3 className="text-right font-semibold text-white uppercase tracking-wide mb-4">Liens importants</h3>
            <ul className="space-y-2">
              <li><Link to="/qui-sommes-nous" className="text-gray-300 hover:text-gray-400 text-sm">À propos</Link></li>
              <li><Link to="/pourquoi-automatiser" className="text-gray-300 hover:text-gray-400 text-sm">Pourquoi automatiser ?</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gray-400 text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Loopivia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
