import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pourquoi from './pages/Pourquoi';
import Contact from './pages/Contact';
import Qui from './pages/Qui'; // Importation de la page "Qui sommes-nous ?"
import ComingSoon from './pages/ComingSoon';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost'; // Importation de la page des articles de blog
import GlossairePage from './pages/GlossaireAutomatisation';
import PageAudit from './pages/PageAudit'; // Importation de la page d'audit

import OffresLoopivia from './pages/Offres';
import FloatingActions from './components/FloatingActions';
import NotFound from './pages/NotFound';

// ANALYTICS
import CookieBanner from './components/CookieBanner';
import Privacy from './pages/Privacy';


function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <FloatingActions /> {/* Le bouton flottant pour lancer l'audit IA */}
      <CookieBanner /> {/* Le bandeau de consentement aux cookies */}
      
      {/* Définition des routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pourquoi-automatiser" element={<Pourquoi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/audit" element={<PageAudit />} /> {/* Route pour la page d'audit */}
        <Route path="/offres-loopivia" element={<OffresLoopivia />} /> {/* Route pour la page des offres Loopivia */}
        <Route path="/qui-sommes-nous" element={<Qui />} /> {/* Route pour la page "Qui sommes-nous ?" */}
        <Route path="/comingsoon" element={<ComingSoon />} /> {/* Route pour la page "Coming Soon" */}
        <Route path="/blog" element={<Blog />} /> {/* Route pour la page "Blog" */} 
        <Route path="/blog/:slug" element={<BlogPost />} /> {/* Route pour les articles de blog */}  
        <Route path="/glossaire-automatisation" element={<GlossairePage />} /> {/* Route pour la page de glossaire */}
        <Route path="/privacy" element={<Privacy />} /> {/* Route pour la page de politique de confidentialité */}
        <Route path="*" element={<NotFound />} /> {/* Route pour la page 404 */}
        
      </Routes>
      
    </div>
  );
}

export default App;
