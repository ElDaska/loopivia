import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const QuiSommesNous = () => {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Section de présentation */}
      <section className="text-center py-20 md:py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            Nous sommes une équipe passionnée par l'automatisation et l'IA. Notre mission est de rendre la productivité accessible à tous grâce à des outils intelligents, performants et sur-mesure.
          </p>
          

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
            Notre équipe
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Nous sommes une équipe diversifiée de professionnels issus de différents horizons, mais unis par notre passion pour l'innovation et la productivité. Notre équipe s'engage à rendre votre entreprise plus performante en automatisant vos processus.
          </p>
        </div>
      </section>

      {/* Section Mission */}
      <section className="bg-[#111827] py-5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Nous croyons fermement que l'automatisation est la clé pour libérer du temps, améliorer l'efficacité et éliminer les erreurs humaines. Grâce à notre expertise et à nos outils, nous vous aidons à automatiser vos processus sans complexité.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-xl transition duration-300 transform hover:scale-105"
          >
            Rejoignez-nous et boostez votre entreprise
          </Link>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left">
            <div className="bg-[#1e293b] p-8 rounded-xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Innovation</h3>
              <p className="text-gray-300">
                Nous sommes constamment à la recherche de nouvelles solutions pour rendre vos processus plus efficaces et vous faire gagner du temps.
              </p>
            </div>

            <div className="bg-[#1e293b] p-8 rounded-xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Fiabilité</h3>
              <p className="text-gray-300">
                Nos solutions sont conçues pour être fiables, scalables et prêtes à l'emploi, afin de vous offrir une expérience sans tracas.
              </p>
            </div>

            <div className="bg-[#1e293b] p-8 rounded-xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Accessibilité</h3>
              <p className="text-gray-300">
                Nous croyons que la technologie doit être accessible à tous. Nos solutions sont simples à intégrer et abordables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> {/* Le footer est maintenant ici et sera appelé en bas */}
    </main>
  );
};
export default QuiSommesNous;
