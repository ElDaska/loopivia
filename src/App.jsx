import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pourquoi from './pages/Pourquoi';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Qui from './pages/Qui'; // Importation de la page "Qui sommes-nous ?"
import ComingSoon from './pages/ComingSoon';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost'; // Importation de la page des articles de blog
import GlossairePage from './pages/GlossaireAutomatisation';
import PageAudit from './pages/PageAudit'; // Importation de la page d'audit

import OffresLoopivia from './pages/Offres';
import FloatingActions from './components/FloatingActions';
import ChatbotIA from './components/chatbot/ChatbotIA';
import NotFound from './pages/NotFound';
import CGU from './pages/CGU';
import MentionsLegales from './pages/MentionsLegales'; // Importation de la page des mentions légales

// ANALYTICS
import CookieBanner from './components/CookieBanner';
import Privé from './pages/Privé'; // Importation de la page de politique de confidentialité


function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <FloatingActions /> {/* Le bouton flottant pour lancer l'audit IA */}
      <ChatbotIA /> {/* Le chatbot IA pour l'assistance */}
      <CookieBanner /> {/* Le bandeau de consentement aux cookies */}
      
      {/* Définition des routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pourquoi-automatiser" element={<Pourquoi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/audit" element={<PageAudit />} /> {/* Route pour la page d'audit */}
        <Route path="/offres-loopivia" element={<OffresLoopivia />} /> {/* Route pour la page des offres Loopivia */}
        <Route path="/qui-sommes-nous" element={<Qui />} /> {/* Route pour la page "Qui sommes-nous ?" */}
        <Route path="/comingsoon" element={<ComingSoon />} /> {/* Route pour la page "Coming Soon" */}
        <Route path="/blog" element={<Blog />} /> {/* Route pour la page "Blog" */} 
        <Route path="/blog/:slug" element={<BlogPost />} /> {/* Route pour les articles de blog */}  
        <Route path="/glossaire-automatisation" element={<GlossairePage />} /> {/* Route pour la page de glossaire */}
        <Route path="/politique-de-confidentialite" element={<Privé />} /> {/* Route pour la page de politique de confidentialité */}
        <Route path="/cgu" element={<CGU />} /> {/* Route pour la page des CGU */}
        <Route path="/mentions-legales" element={<MentionsLegales />} /> {/* Route pour la page des mentions légales */}
        <Route path="*" element={<NotFound />} /> {/* Route pour la page 404 */}
        
      </Routes>
      
    </div>
  );
}

export default App;
