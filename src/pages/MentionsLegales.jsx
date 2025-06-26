import Footer from "../components/Footer";

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-[rgb(15,23,42)] text-white">
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Mentions légales</h1>
        <div className="text-gray-400 leading-relaxed space-y-6">
          <p><strong>Éditeur du site :</strong><br/>Loopivia, projet édité par Helitel Consulting</p>
          <p><strong>Responsable de la publication :</strong><br/>Balla Diop – support@loopivia.com</p>
          <p><strong>Hébergement :</strong><br/>Railway (railway.app) – Hébergement sécurisé cloud</p>
          <p><strong>Propriété intellectuelle :</strong><br/>Tout le contenu du site Loopivia est protégé. Toute reproduction est interdite sans autorisation écrite.</p>
          <p><strong>Pays concernés :</strong><br/>Maroc, Sénégal et tous les pays francophones d’Afrique.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MentionsLegales;
