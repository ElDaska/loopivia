import Footer from "../components/Footer";

const CGU = () => {
  return (
    <main className="min-h-screen bg-[rgb(15,23,42)] text-white">
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Conditions Générales d’Utilisation</h1>
        <p className="text-gray-300 mb-8">
          En utilisant Loopivia, vous acceptez les présentes conditions générales. Merci de les lire attentivement.
        </p>

        <div className="space-y-6 text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">1. Objet</h2>
            <p>
              Les présentes CGU ont pour objet de définir les conditions d’accès et d’utilisation du site et des services Loopivia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">2. Accès au service</h2>
            <p>
              Le service est accessible gratuitement 24h/24, 7j/7, sauf cas de force majeure ou maintenance. Loopivia se réserve le droit de suspendre ou modifier l’accès sans préavis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">3. Utilisation du contenu</h2>
            <p>
              Toute reproduction, représentation ou diffusion des contenus disponibles sur Loopivia est strictement interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">4. Responsabilité</h2>
            <p>
              Loopivia ne saurait être tenue responsable en cas de dysfonctionnement technique ou d’utilisation abusive du service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">5. Données personnelles</h2>
            <p>
              La collecte et le traitement des données sont régis par notre <a href="/politique-de-confidentialite" className="text-blue-400 underline">Politique de confidentialité</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">6. Modification des CGU</h2>
            <p>
              Loopivia se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prendront effet dès leur mise en ligne.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-300 mb-2">7. Contact</h2>
            <p>
              Pour toute question relative aux CGU, vous pouvez nous contacter à l’adresse : <span className="text-blue-400">support@loopivia.com</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CGU;
