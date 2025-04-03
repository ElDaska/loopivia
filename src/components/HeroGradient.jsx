const HeroGradient = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0f172a] py-20 px-6 md:px-20">
      {/* Dégradé centré avec un effet subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-80"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Et si vos outils travaillaient pour vous ?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Chez <span className="text-blue-400 font-semibold">Loopivia</span>, nous conçoivons des workflows automatisés alimentés par l’IA pour connecter vos outils et booster votre business — sans coder, sans recruter.
        </p>

        {/* 3 points forts avec effet de zoom au survol */}
        <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">🔗 Connexions intelligentes</h3>
            <p className="text-gray-300 text-sm">
              Intégration fluide avec vos apps : Gmail, Notion, Sheets, WhatsApp, Stripe, etc.
            </p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">🧠 IA intégrée</h3>
            <p className="text-gray-300 text-sm">
              Génération de contenu, prise de décision, traitement automatisé des données. Tout devient plus rapide.
            </p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">🚀 Zéro friction, zéro perte de temps</h3>
            <p className="text-gray-300 text-sm">
              Vous vous concentrez sur la stratégie. Nous gérons l'automatisation et l’exécution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGradient;
