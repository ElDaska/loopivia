import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer'; // On garde le footer pour le bas de page

const Pourquoi = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <section className="text-center py-20 md:py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Pourquoi automatiser votre business ?
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            L’automatisation permet de libérer votre temps, réduire les erreurs humaines et d'augmenter l'efficacité. 
            Grâce aux outils comme Make, Zapier et N8N, nous connectons vos applications pour vous faire travailler moins — 
            mais plus intelligemment. Vous pouvez scaler votre entreprise sans avoir besoin de recruter.
          </p>


          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Quels sont les bénéfices ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
            <div className="bg-[#1e293b] p-8 rounded-xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Gain de temps</h3>
              <p className="text-gray-300">
                Automatisez vos processus répétitifs et gagnez un temps précieux pour vous concentrer sur des tâches stratégiques.
              </p>
            </div>

            <div className="bg-[#1e293b] p-8 rounded-xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Réduction des erreurs</h3>
              <p className="text-gray-300">
                Éliminez les erreurs humaines en automatisant les tâches complexes. Offrez des services plus fiables.
              </p>
            </div>

            <div className="bg-[#1e293b] p-8 rounded-xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Scalabilité</h3>
              <p className="text-gray-300">
                Automatisez à l’échelle pour gérer une croissance sans embaucher. Scalez sans contraintes.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-xl transition duration-300 transform hover:scale-105"
            >
              <span>Demander un audit gratuit</span>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> {/* Le footer est maintenant ici et sera appelé en bas */}
    </div>
  );
};

export default Pourquoi;
