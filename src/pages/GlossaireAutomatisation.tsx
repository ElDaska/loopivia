import { useState } from "react";
import FooterLoopivia from "../components/Footer";

// Les termes du glossaire
const glossaire = [
  { terme: "Action", def: "Une tâche réalisée automatiquement après un déclencheur (ex : envoyer un email, créer un fichier)." },
  { terme: "API (Interface de Programmation Applicative)", def: "Une passerelle pour connecter deux logiciels entre eux et leur permettre de communiquer." },
  { terme: "Bot", def: "Un programme qui effectue des tâches répétitives (ex : répondre à un message, collecter des infos)." },
  { terme: "Connecteur", def: "Un pont qui permet à deux applications de dialoguer dans un outil d’automatisation (Zapier, Make, n8n…)." },
  { terme: "CRM", def: "Logiciel de gestion de la relation client, souvent automatisable pour gagner du temps (ex : relances, envois d’emails…)." },
  { terme: "Déclencheur (Trigger)", def: "L’événement qui démarre une automatisation (ex : réception d’un email, création d’un nouveau contact…)." },
  { terme: "Dashboard", def: "Tableau de bord qui affiche en temps réel des informations, souvent alimenté par des automatisations." },
  { terme: "ETL", def: "Processus d’extraction, de transformation et de chargement de données, souvent automatisé." },
  { terme: "Email automatisé", def: "Courriel envoyé automatiquement suite à un événement défini (inscription, commande, relance…)." },
  { terme: "Flux de travail (Workflow)", def: "Enchaînement d’étapes automatisées pour gagner du temps (ex : recevoir une commande → créer facture → envoyer email)." },
  { terme: "IA (Intelligence Artificielle)", def: "Programme capable d’analyser, comprendre, apprendre et agir sans consigne précise pour chaque cas." },
  { terme: "Intégration", def: "Connexion automatisée entre deux outils pour qu’ils partagent infos et actions (ex : relier Google Sheets à Notion)." },
  { terme: "Make", def: "Outil d’automatisation visuel, parfait pour automatiser des processus métiers complexes." },
  { terme: "No-code", def: "Méthode qui permet de créer des automatisations sans coder, via interfaces visuelles (ex : Zapier, Make, Loopivia)." },
  { terme: "n8n", def: "Outil open source d’automatisation, très puissant et flexible." },
  { terme: "Prompt", def: "Instruction ou question envoyée à une IA pour obtenir une réponse/action personnalisée." },
  { terme: "RPA (Robotic Process Automation)", def: "Automatisation robotisée de tâches (ex : logiciels qui imitent le travail humain sur un ordinateur)." },
  { terme: "Reporting automatisé", def: "Rapport généré automatiquement, sans intervention humaine." },
  { terme: "Scénario", def: "Suite d’actions automatisées, souvent représentée visuellement (ex : Make, n8n)." },
  { terme: "Scraping", def: "Extraction automatisée de données depuis un site ou un document (légal : sur données publiques seulement)." },
  { terme: "Trigger (Déclencheur)", def: "Voir 'Déclencheur' : événement qui lance une automatisation." },
  { terme: "Webhook", def: "Lien spécial qui permet à un service d’envoyer ou recevoir des données automatiquement, déclenchant une action ailleurs." },
  { terme: "Workflow", def: "Voir 'Flux de travail' ou 'Scénario'." },
];

const Glossaire = () => {
  const [search, setSearch] = useState("");
  const termesFiltres = glossaire
    .filter(({ terme, def }) =>
      terme.toLowerCase().includes(search.toLowerCase()) ||
      def.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.terme.localeCompare(b.terme));

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      {/* Header glossy */}
      <header className="py-14 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-center mb-10 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
          Glossaire <span className="text-sky-400">Automatisation & IA</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Tous les mots-clés à connaître pour automatiser ton business, expliqués simplement.
        </p>
      </header>

      {/* Search */}
      <main className="flex-grow max-w-3xl mx-auto w-full px-4">
        <input
          type="text"
          placeholder="Rechercher un mot ou une définition…"
          className="w-full p-3 mb-8 bg-slate-800 text-white border-none rounded-2xl shadow focus:ring-2 focus:ring-sky-500"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Liste des termes */}
        <section className="grid grid-cols-1 gap-8 pb-16">
          {termesFiltres.length === 0 && (
            <div className="col-span-1 text-center text-slate-400 py-12">
              Aucun terme trouvé.
            </div>
          )}
          {termesFiltres.map(({ terme, def }) => (
            <div
              key={terme}
              className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl shadow-lg border border-slate-700 hover:border-sky-400 transition group p-6"
            >
              <h2 className="font-bold text-xl text-sky-300 group-hover:text-sky-400 transition mb-2">
                {terme}
              </h2>
              <p className="text-slate-200">{def}</p>
            </div>
          ))}
        </section>
      </main>

      <FooterLoopivia />
    </div>
  );
};

export default Glossaire;
