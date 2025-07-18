import Footer from "../components/Footer";

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-[rgb(15,23,42)] text-white">
      <section className="max-w-4xl mx-auto py-20 px-6 space-y-8">
        <h1 className="text-4xl font-bold text-blue-400">Mentions légales</h1>

        {/* Éditeur du site */}
        <article className="text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-2xl font-semibold text-white">1. Éditeur du site</h2>
          <p><strong>Nom :</strong> ElHadji Balla</p>
          <p><strong>Statut :</strong> Auto‑entrepreneur inscrit au Registre National de l’Auto‑Entrepreneur</p>
          <p><strong>Identifiant auto‑entrepreneur :</strong> 003083746000069</p>
          <p><strong>Centre de Formalités (CS) :</strong> C023175E</p>
          <p><strong>Identifiant fiscal :</strong> 52468286</p>
          <p><strong>Numéro de taxe professionnelle :</strong> 13101965</p>
          <p><strong>Adresse :</strong> 8 Rue Ibn Taymiya, 30000 Fès, Maroc</p>
          <p><strong>Email :</strong> diop.ehb@gmail.com</p>
          <p><strong>Téléphone :</strong> +212 609 68 56 67</p>
        </article>

        {/* Hébergement */}
        <article className="text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-2xl font-semibold text-white">2. Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel, Inc.</strong><br/>
            Adresse siège social : 340 S Lemon Ave #4133, West Covina, CA 91791, USA<br/>
            Site web : <a href="https://vercel.com" className="text-blue-400 hover:underline">vercel.com</a>
          </p>
        </article>

        {/* Propriété intellectuelle */}
        <article className="text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-2xl font-semibold text-white">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus (textes, images, logos, charte graphique, code source…) publiés sur ce site est protégé par le droit de la propriété intellectuelle.
            Toute reproduction, distribution ou modification sans autorisation écrite préalable de l’éditeur est strictement interdite.
          </p>
        </article>

        {/* Responsabilité */}
        <article className="text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-2xl font-semibold text-white">4. Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont données à titre purement indicatif. 
            L’éditeur ne pourra être tenu responsable des erreurs, omissions ou d’une mauvaise interprétation des informations publiées.
          </p>
        </article>

        {/* Champ d’application */}
        <article className="text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-2xl font-semibold text-white">5. Champ d’application</h2>
          <p>
            Ce site et ses services s’adressent à l’ensemble des pays francophones du monde.
          </p>
        </article>

        {/* Données personnelles */}
        <article className="text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-2xl font-semibold text-white">6. Données personnelles</h2>
          <p>
            Vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. 
            Pour exercer ce droit, contactez-nous à <strong>diop.ehb@gmail.com</strong>.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default MentionsLegales;
