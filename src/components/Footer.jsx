import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/icon_sans_fond.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* --- Ligne principale : logo + colonnes de liens --- */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
          {/* Bloc logo + intro + réseaux */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-5">
              <img
                className="h-10 w-auto mr-3"
                src={logo}
                alt="Logo Loopivia"
              />
              <span className="text-2xl font-bold">Loopivia</span>
            </div>

            <p className="text-sm text-gray-300 mb-4 text-center md:text-left max-w-xs">
              Libérez votre productivité avec des outils intelligents, accessibles et sur-mesure pour votre entreprise.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-5 mt-2 mb-4 md:mb-0">
              <a
                href="https://x.com/ContactLoopivia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>

              <a
                href="https://instagram.com/loopivia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-pink-400 transition"
              >
                <FiInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/loopivia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://facebook.com/loopivia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                <FiFacebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.tiktok.com/@loopivia?refer=creator_embed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-300 hover:text-fuchsia-400 transition"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens importants */}
          <div className="flex-1 flex flex-col items-center md:items-end mt-6 md:mt-0">
            <h3 className="font-semibold uppercase tracking-wide mb-4 text-base">
              Liens importants
            </h3>
            <ul className="space-y-2 text-center md:text-right">
              <li>
                <Link
                  to="/qui-sommes-nous"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/pourquoi-automatiser"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Pourquoi automatiser&nbsp;?
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Barre inférieure : copyright + pages légales --- */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-3 md:space-y-0">
          <div>© {new Date().getFullYear()} Loopivia. Tous droits réservés.</div>

          <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-end">
            <li>
              <Link
                to="/mentions-legales"
                className="hover:text-white transition"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                to="/privé"
                className="hover:text-white transition"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                to="/cgu"
                className="hover:text-white transition"
              >
                CGU
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
