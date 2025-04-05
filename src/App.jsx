import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pourquoi from './pages/Pourquoi';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton'; // Importation du bouton de remontée
import Qui from './pages/Qui'; // Importation de la page "Qui sommes-nous ?"
import ComingSoon from './pages/ComingSoon';

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
      </Routes>
      <ScrollToTopButton /> {/* Le bouton pour remonter la page */}
    </div>
  );
}

export default App;
