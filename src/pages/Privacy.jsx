import { Link } from "react-router-dom";
import FooterLoopivia from "../components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-slate-900 text-white flex flex-col">
    <main className="flex-grow">
      <div className="max-w-3xl mx-auto py-14 px-4">
        <Link to="/" className="text-sky-400 hover:underline mb-8 block">
          ← Retour à l’accueil
        </Link>
        <h1 className="text-4xl font-extrabold mb-6">Politique de Confidentialité</h1>
        <p className="mb-8 text-slate-300">
          Cette politique décrit comment Loopivia collecte, utilise, protège et partage vos données lorsque vous utilisez notre site ou nos services.
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Qui sommes-nous ?</h2>
          <p className="text-slate-400">Loopivia est un site d’automatisation et d’IA destiné aux entrepreneurs, TPE, PME et professionnels francophones.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. Quelles données collectons-nous ?</h2>
          <ul className="list-disc ml-6 text-slate-400">
            <li>Données de contact (nom, email, entreprise… lors du remplissage d’un formulaire)</li>
            <li>Données de navigation (via cookies, analytics : pages visitées, durée…)</li>
            <li>Informations techniques (navigateur, appareil…)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. Comment utilisons-nous vos données ?</h2>
          <ul className="list-disc ml-6 text-slate-400">
            <li>Pour fournir et améliorer nos services</li>
            <li>Pour vous contacter si besoin</li>
            <li>Pour analyser et optimiser l’expérience utilisateur</li>
            <li>Pour répondre à nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. Cookies & statistiques</h2>
          <p className="text-slate-400 mb-2">
            Loopivia utilise des cookies pour le fonctionnement du site et, avec votre accord, pour les statistiques de fréquentation (Google Analytics, etc.).
          </p>
          <p className="text-slate-400">
            Vous pouvez accepter ou refuser les cookies à tout moment via le bandeau d’information affiché lors de votre première visite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">5. Où sont stockées vos données ?</h2>
          <p className="text-slate-400">
            Vos données sont hébergées dans l’Union Européenne et protégées par des mesures de sécurité appropriées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">6. Partage de données</h2>
          <p className="text-slate-400">
            Vos données ne sont <span className="font-bold">jamais</span> vendues. Elles peuvent être partagées uniquement :
          </p>
          <ul className="list-disc ml-6 text-slate-400">
            <li>Avec nos prestataires techniques (hébergement, email) pour le bon fonctionnement du service</li>
            <li>En cas d’obligation légale</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">7. Vos droits (RGPD)</h2>
          <ul className="list-disc ml-6 text-slate-400">
            <li>Droit d’accès, de modification, de suppression de vos données</li>
            <li>Droit d’opposition à certains traitements</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p className="text-slate-400 mt-2">
            Pour exercer vos droits ou toute question, contactez-nous à :{" "}
            <a href="mailto:support@loopivia.com" className="text-sky-400 underline">support@loopivia.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">8. Modifications</h2>
          <p className="text-slate-400">
            Nous pouvons mettre à jour cette politique : la date de mise à jour sera toujours indiquée en haut de la page.
          </p>
        </section>

        <div className="mt-10 text-sm text-gray-500">
          Dernière mise à jour : 20 juin 2025
        </div>
      </div>
    </main>
    <FooterLoopivia />
  </div>
);

export default Privacy;
