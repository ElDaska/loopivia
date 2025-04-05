import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer";

const articles = {
  "pourquoi-automatiser": {
    title: "Pourquoi automatiser son entreprise ? 5 bénéfices incontournables",
    description:
      "Découvrez les 5 principaux avantages de l'automatisation pour votre entreprise.",
    content: (
      <>
        <p className="mb-4">
          Automatiser vos processus n’est plus une option, mais une nécessité
          pour rester compétitif. Que vous soyez une PME, une TPE ou un
          freelance, l’automatisation améliore votre quotidien et libère votre
          potentiel.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          1. Économisez du temps
        </h2>
        <p className="mb-4">
          L’automatisation des tâches répétitives vous permet de vous
          concentrer sur des activités à forte valeur ajoutée.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          2. Réduisez vos coûts
        </h2>
        <p className="mb-4">
          Moins d’erreurs, moins de charges. Automatisez pour maîtriser vos
          dépenses.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          3. Améliorez l’expérience client
        </h2>
        <p className="mb-4">
          Une meilleure réactivité et un suivi précis boostent la fidélisation.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          4. Fiabilité & sécurité
        </h2>
        <p className="mb-4">
          Plus besoin de vous inquiéter des erreurs de saisie ou des oublis.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          5. Scalabilité sans recrutement
        </h2>
        <p className="mb-4">
          Automatisez pour gérer plus sans embaucher davantage.
        </p>
        <p>
          Loopivia vous accompagne dans chaque étape de cette transformation
          intelligente.
        </p>
      </>
    ),
  },
  "outils-indispensables": {
    title: "4 outils indispensables à automatiser pour les freelances",
    description:
      "Découvrez les outils essentiels pour booster votre efficacité quotidienne.",
    content: (
      <>
        <p className="mb-4">
          En tant que freelance, vous jonglez avec 1000 tâches. Voici les
          automatisations qui vont changer votre vie.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          1. Email intelligent
        </h2>
        <p className="mb-4">
          Automatisez vos relances, réponses et tri de mails via Zapier ou
          Make.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          2. Devis & factures
        </h2>
        <p className="mb-4">
          Ne perdez plus une minute : Loopivia vous aide à automatiser toute
          votre facturation.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          3. Prise de rendez-vous
        </h2>
        <p className="mb-4">
          Intégrez Calendly et libérez votre agenda des allers-retours
          inutiles.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          4. Réseaux sociaux
        </h2>
        <p>
          Automatisez vos posts pour garder une présence constante avec peu
          d'effort.
        </p>
      </>
    ),
  },
  "integrer-ia-tpe": {
    title:
      "Comment intégrer l’IA dans les processus de votre TPE ou profession libérale ?",
    description:
      "Découvrez comment exploiter l'intelligence artificielle pour booster votre activité.",
    content: (
      <>
        <p className="mb-4">
          L’IA devient accessible à tous. Voici comment en profiter même en
          solo.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          1. Assistants intelligents
        </h2>
        <p className="mb-4">
          Chatbots, réponse automatique : déchargez-vous des demandes simples.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          2. Analyse de données
        </h2>
        <p className="mb-4">
          Des outils comme ChatGPT ou Notion AI vous aident à analyser vos
          ventes ou retours clients.
        </p>
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          3. Génération de documents
        </h2>
        <p>
          Automatisez la rédaction de contrats, devis ou rapports en un clic.
        </p>
      </>
    ),
  },
};

const Blog1 = () => {
  const { id } = useParams();
  const article = articles[id];

  useEffect(() => {
    document.title = article
      ? `Loopivia – ${article.title}`
      : "Article non trouvé";
  }, [article]);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-white">
        
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl text-red-400">Article introuvable.</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      
      <div className="flex max-w-7xl mx-auto px-4 py-16 gap-8">
        {/* Barre latérale 1/8 */}
        <aside className="w-1/6 hidden lg:block">
          <div className="bg-[#1e293b] p-4 rounded-xl shadow">
            <h3 className="text-blue-400 font-semibold mb-4">Articles</h3>
            <ul className="space-y-2 text-sm">
              {Object.entries(articles).map(([key, val]) => (
                <li key={key}>
                  <a
                    href={`/blog/${key}`}
                    className={`block hover:text-blue-400 ${
                      key === id ? "text-blue-400 font-bold" : "text-gray-300"
                    }`}
                  >
                    {val.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article 7/8 */}
        <article className="w-full lg:w-5/6 bg-[#1e293b] p-8 rounded-xl shadow-lg animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {article.title}
          </h1>
          <p className="text-gray-400 italic mb-10">{article.description}</p>
          <div className="prose prose-invert max-w-none">{article.content}</div>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default Blog1;
