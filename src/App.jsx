import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pourquoi from './pages/Pourquoi';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton'; // Importation du bouton de remontée
import Qui from './pages/Qui'; // Importation de la page "Qui sommes-nous ?"
import ComingSoon from './pages/ComingSoon';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog/Blog1'; // Importation de la page "Blog"

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pourquoi-automatiser" element={<Pourquoi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qui-sommes-nous" element={<Qui />} /> {/* Route pour la page "Qui sommes-nous ?" */}
        <Route path="/comingsoon" element={<ComingSoon />} /> {/* Route pour la page "Coming Soon" */}
        <Route path="/blog" element={<Blog />} /> {/* Route pour la page "Blog" */}   
        <Route path="/blog/:id" element={<Blog1 />} /> {/* Route pour les articles de blog */}
      </Routes>
      <ScrollToTopButton /> {/* Le bouton pour remonter la page */}
    </div>
  );
}

export default App;
