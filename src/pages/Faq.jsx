import { useState } from "react";
import { 
  FaChevronDown, 
  FaSearch, 
  FaRobot, 
  FaCog, 
  FaEuroSign, 
  FaShieldAlt, 
  FaHeadset, 
  FaRocket,
  FaCheckCircle,
  FaClock,
  FaGraduationCap
} from "react-icons/fa";
import Footer from "../components/Footer";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      category: "Présentation",
      icon: <FaRocket />,
      color: "blue",
      questions: [
        {
          question: "Qu'est-ce que Loopivia ?",
          answer: "Loopivia est une agence d'automatisation & IA spécialisée pour les PME et TPE francophones. Nous aidons les entrepreneurs à gagner du temps et à augmenter leur productivité en automatisant leurs processus métier sans nécessiter de compétences techniques.",
          keywords: ["loopivia", "agence", "automatisation", "ia", "pme"]
        },
        {
          question: "Quels services propose Loopivia ?",
          answer: "Nous proposons plusieurs services : intégration n8n, RPA (Robotic Process Automation), chatbots IA personnalisés, optimisation de processus, analytics et reporting automatisé. Chaque solution est adaptée à vos besoins spécifiques pour maximiser votre ROI.",
          keywords: ["services", "n8n", "rpa", "chatbot", "optimisation"]
        }
      ]
    },
    {
      category: "Technique",
      icon: <FaCog />,
      color: "purple",
      questions: [
        {
          question: "Comment fonctionne l'intégration n8n ?",
          answer: "L'intégration n8n permet de créer des workflows low-code pour automatiser vos tâches. Via des Webhooks et API ou des automatisations Python, nous connectons vos différents outils (CRM, emails, bases de données, etc.) pour qu'ils travaillent ensemble sans intervention manuelle.",
          keywords: ["n8n", "workflow", "webhook", "api", "intégration"]
        },
        {
          question: "Quels sont les prérequis techniques ?",
          answer: "Aucun prérequis technique n'est nécessaire de votre côté ! Nous avons besoin d'accès API à vos outils, de serveurs web accessibles, et d'un compte non auto-hébergé si vous utilisez des services cloud. Notre équipe s'occupe de toute la partie technique.",
          keywords: ["prérequis", "technique", "api", "serveur"]
        },
        {
          question: "Comment sécuriser mes données ?",
          answer: "Vos données sont protégées par plusieurs couches de sécurité : hébergement GDPR-compliant, chiffrement TLS pour toutes les communications, contrôle d'accès strict avec authentification OAuth/JWT, et audits de sécurité réguliers. Nous ne stockons que les données essentielles au fonctionnement de vos automatisations.",
          keywords: ["sécurité", "gdpr", "données", "chiffrement", "protection"]
        },
        {
          question: "Comment accéder aux logs d'exécution ?",
          answer: "Tous nos clients ont accès à une interface n8n dédiée où ils peuvent consulter l'historique complet de leurs workflows : nombre d'exécutions, statuts (succès/échec), données traitées, et export CSV pour analyse. Vous recevez également des alertes en temps réel en cas d'erreur.",
          keywords: ["logs", "exécution", "monitoring", "interface"]
        },
        {
          question: "Comment ajouter des utilisateurs à n8n ?",
          answer: "La gestion des utilisateurs se fait via configuration RBAC (Role-Based Access Control) dans votre instance n8n. Vous pouvez créer des utilisateurs avec différents niveaux d'accès (admin, éditeur, lecteur) via un nœud Users ou via authentification externe OAuth/JWT pour une intégration SSO.",
          keywords: ["utilisateurs", "rbac", "accès", "permissions", "oauth"]
        },
        {
          question: "Comment conserver l'historique de mes workflows ?",
          answer: "L'historique de vos workflows est automatiquement conservé dans plusieurs emplacements : stockage local dans Google Sheets pour un accès rapide, base de données externe via connexion à votre CRM, et exports réguliers au format CSV. La durée de rétention est configurable selon vos besoins (30 jours à illimité).",
          keywords: ["historique", "sauvegarde", "archivage", "backup"]
        }
      ]
    },
    {
      category: "ROI",
      icon: <FaEuroSign />,
      color: "green",
      questions: [
        {
          question: "Quel est le ROI moyen de l'automatisation ?",
          answer: "Nos clients observent généralement un ROI impressionnant : réduction des coûts opérationnels de 35% minimum, gain de productivité de 60% sur les tâches automatisées, et retour sur investissement complet en 6 mois maximum. Par exemple, un client a économisé 300h/mois avec son équipe en automatisant sa gestion de leads et les relances clients.",
          keywords: ["roi", "rentabilité", "économies", "productivité"]
        },
        {
          question: "Quels tarifs pour démarrer ?",
          answer: "Nos tarifs démarrent à 297€/mois pour notre offre Boost Solo (1 automatisation IA ). Chaque devis est adapté à vos besoins réels pour maximiser votre investissement.",
          keywords: ["tarifs", "prix", "coût", "abonnement", "devis"]
        }
      ]
    },
    {
      category: "Commercial",
      icon: <FaRocket />,
      color: "cyan",
      questions: [
        {
          question: "Comment demander un audit gratuit ?",
          answer: "En seulement 2 minutes, obtenez un audit personnalisé qui révèle comment l'IA peut transformer votre entreprise au www.loopivia.com/audit",
          keywords: ["audit", "gratuit", "diagnostic", "analyse"]
        },
        {
          question: "Quels sont les bénéfices des offres Loopivia ?",
          answer: "Nos offres vous garantissent un ROI rapide (3 jours à 2 semaines selon l'offre), des automatisations IA avancées clé en main, des outils intégrés (Notion, Make, n8n), un support technique avec garanties SLA, et un accompagnement personnalisé par des experts francophones.",
          keywords: ["bénéfices", "avantages", "offres", "garanties"]
        },
        {
          question: "Est-il possible de payer en plusieurs fois ?",
          answer: "Oui, absolument ! Chaque offre propose plusieurs moyens de paiement flexibles, à définir lors de la signature du devis. Nous acceptons les paiements échelonnés, virements bancaires, et cartes de crédit. Contactez-nous pour établir un plan adapté à votre trésorerie.",
          keywords: ["paiement", "échelonné", "facilités", "financement"]
        }
      ]
    },
    {
      category: "Support",
      icon: <FaHeadset />,
      color: "pink",
      questions: [
        {
          question: "Comment fonctionne le support N1 ?",
          answer: "Notre support N1 (niveau 1) fonctionne via plusieurs canaux : Chatbot IA disponible 24/7 pour les FAQ et questions simples, suivi de ticket via notre système de ticketing pour traçabilité, et escalade automatique vers un expert humain si nécessaire. Temps de réponse garanti : 2h en heures ouvrées.",
          keywords: ["support", "n1", "assistance", "chatbot", "ticket"]
        },
        {
          question: "Le chatbot Loopivia est-il disponible 24/7 ?",
          answer: "Oui ! Notre chatbot IA est disponible 24h/24, 7j/7 pour répondre à vos questions fréquentes, vous guider dans l'utilisation de vos automatisations, et créer des tickets si nécessaire. Pour les demandes complexes nécessitant un expert humain, notre équipe intervient sous 2h en jours ouvrés.",
          keywords: ["chatbot", "24/7", "disponibilité", "ia", "assistance"]
        },
        {
          question: "Quel support est inclus avec les offres Loopivia ?",
          answer: "Chaque offre inclut un support adapté : Boost Solo inclut 7-30 jours de support selon l'offre, Flow Pro offre un support technique 7j/7 pendant 2 semaines, et Maître des Opérations inclut 12 mois de support prioritaire avec VPS dédié. Tous nos supports incluent documentation complète, vidéos explicatives, et hotline dédiée.",
          keywords: ["support inclus", "assistance", "garantie", "hotline"]
        }
      ]
    },
    {
      category: "Offres et Tarifs",
      icon: <FaEuroSign />,
      color: "amber",
      questions: [
        {
          question: "Quelle est l'offre Flow Pro de Loopivia ?",
          answer: "L'offre Flow Pro à 890€ comprend 3 automatisations IA entièrement configurées, un tableau de bord Notion partagé pour suivre vos workflows, une intégration complète Make/n8n avec vos outils existants, et un ROI garanti en 1 semaine. Idéale pour démarrer rapidement avec l'automatisation.",
          keywords: ["flow pro", "offre", "890", "automatisation", "notion"]
        },

        {
          question: "Quelle est l'offre Boost Solo ?",
          answer: "L'offre Boost Solo à 297€ inclut 1 automatisation paramétrable, un mini CRM Notion personnalisé, une vidéo explicative complète, un support technique de 7 jours, avec un ROI attendu en 2 semaines. Parfaite pour les solopreneurs et petites structures qui veulent tester l'automatisation. Résultats garantis.",
          keywords: ["boost solo", "297", "crm", "notion", "solopreneur"]
        },
        {
          question: "Quelle est l'offre Maître des Opérations ?",
          answer: "Notre offre premium à 1990€ avec ROI en 3 jours. Elle inclut 7 automatisations IA, un agent IA intelligent, un tableau de bord Notion complet, un VPS dédié offert pendant 12 mois, des résultats garantis, et une stratégie complète d'optimisation. Idéale pour les entreprises qui veulent transformer tous leurs processus.",
          keywords: ["maître opérations", "1990", "premium", "vps", "agent ia"]
        }
      ]
    },
    {
      category: "Délais",
      icon: <FaClock />,
      color: "orange",
      questions: [
        {
          question: "Quelle est la durée d'implémentation typique ?",
          answer: "La durée d'implémentation varie selon la complexité : projets simples en 2-4 semaines (1-3 automatisations), projets moyens en 4-8 semaines (intégration complète d'un processus), projets complexes en 8-12 semaines (transformation digitale complète). Chaque projet commence par un audit de 2-5 jours pour établir un planning précis.",
          keywords: ["délais", "implémentation", "durée", "planning"]
        },
        {
          question: "Quel SLA pour l'hébergement n8n managé ?",
          answer: "Notre hébergement n8n managé garantit une disponibilité de 99,9% sur le front-end et 99% sur le back-end n8n. En cas d'incident, notre équipe intervient sous 2h maximum en jours ouvrés. Nous incluons monitoring 24/7, sauvegardes quotidiennes, et mises à jour automatiques de sécurité.",
          keywords: ["sla", "hébergement", "disponibilité", "uptime", "n8n"]
        }
      ]
    },
    {
      category: "Sécurité",
      icon: <FaShieldAlt />,
      color: "red",
      questions: [
        {
          question: "Comment sécuriser mes données ?",
          answer: "Vos données sont protégées à plusieurs niveaux : hébergement GDPR-compliant en Europe, chiffrement TLS 1.3 pour toutes les communications, contrôle d'accès strict avec authentification OAuth2/JWT, isolation des données clients, sauvegardes chiffrées quotidiennes, et audits de sécurité trimestriels. Conformité RGPD garantie.",
          keywords: ["sécurité", "gdpr", "chiffrement", "protection", "rgpd"]
        }
      ]
    },
    {
      category: "Contact",
      icon: <FaHeadset />,
      color: "teal",
      questions: [
        {
          question: "Comment contacter le support humain ?",
          answer: "Plusieurs moyens de nous joindre : Email prioritaire à contact@loopivia.com (réponse sous 2h en jours ouvrés), prise de rendez-vous direct via Calendly sur notre site, ou chatbot IA qui peut créer un ticket urgent. Pour les clients premium, numéro de téléphone dédié : (+212) 0712217196.",
          keywords: ["contact", "support", "email", "téléphone", "calendly"]
        },
        {
          question: "Numéro de téléphone Loopivia",
          answer: "Notre numéro de téléphone direct est le (+212) 0712217196. Disponible du lundi au vendredi de 9h à 18h (heure de Fès, Maroc). Pour les demandes urgentes en dehors de ces horaires, utilisez notre chatbot IA ou envoyez un email à contact@loopivia.com avec [URGENT] dans l'objet.",
          keywords: ["téléphone", "numéro", "contact", "horaires"]
        }
      ]
    },
    {
      category: "Formation",
      icon: <FaGraduationCap />,
      color: "indigo",
      questions: [
        {
          question: "Loopivia propose-t-il des formations ?",
          answer: "Oui ! Nous proposons des formations complètes : workshops n8n pratiques sur site ou en ligne, ateliers IA personnalisés pour votre équipe, formations Make/Zapier pour l'autonomie, et webinaires gratuits mensuels sur les bonnes pratiques d'automatisation. Certaines formations sont incluses dans nos offres premium.",
          keywords: ["formation", "workshop", "atelier", "webinaire", "apprentissage"]
        }
      ]
    },
    {
      category: "Audit",
      icon: <FaRocket />,
      color: "violet",
      questions: [
        {
          question: "Quels sont les avantages d'un audit personnalisé Loopivia ?",
          answer: "Notre audit personnalisé vous permet d'identifier rapidement les tâches à automatiser via un formulaire de 2 minutes, d'obtenir un rapport PDF complet et personnalisé instantanément, avec recommandations précises, ROI estimé pour chaque automatisation, et roadmap d'implémentation sur 3-6 mois. L'audit est offert et sans engagement.",
          keywords: ["audit", "diagnostic", "analyse", "rapport", "recommandations"]
        },
        {
          question: "Comment fonctionne l'IA dans l'audit Loopivia ?",
          answer: "Notre IA analyse automatiquement vos réponses au questionnaire d'audit pour identifier les processus à fort potentiel d'automatisation. Elle compare vos besoins avec notre base de données de 500+ automatisations réussies pour vous proposer des solutions éprouvées, avec ROI prévisible et délais d'implémentation réalistes.",
          keywords: ["ia", "audit", "analyse", "intelligence artificielle", "diagnostic"]
        }
      ]
    },
    {
      category: "Procédures",
      icon: <FaCheckCircle />,
      color: "lime",
      questions: [
        {
          question: "Comment démarre un projet Loopivia ?",
          answer: "Le démarrage suit 5 étapes simples : 1) Audit gratuit via notre formulaire (2 min), 2) Appel découverte de 30 minutes pour affiner vos besoins, 3) Proposition commerciale détaillée sous 48h, 4) Signature du devis et paiement initial, 5) Lancement du projet avec kick-off meeting et planning détaillé. Tout est cadencé pour un démarrage rapide en moins de 7 jours.",
          keywords: ["démarrage", "processus", "étapes", "onboarding", "projet"]
        }
      ]
    }
  ];

  // Filtrage des questions
  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => {
      const matchesSearch = searchTerm === "" || 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = activeCategory === "all" || category.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    })
  })).filter(category => category.questions.length > 0);

  // Extraction des catégories uniques
  const categories = ["all", ...new Set(faqData.map(item => item.category))];

  // Couleurs par catégorie
  const categoryColors = {
    "Présentation": "blue",
    "Services": "cyan",
    "Technique": "purple",
    "ROI": "green",
    "Tarifs": "amber",
    "Commercial": "cyan",
    "Support": "pink",
    "Offres et Tarifs": "amber",
    "Délais": "orange",
    "Sécurité": "red",
    "Contact": "teal",
    "Formation": "indigo",
    "Audit": "violet",
    "Procédures": "lime"
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
      purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20",
      green: "bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500/20",
      cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20",
      pink: "bg-pink-500/10 text-pink-400 border-pink-500/30 hover:bg-pink-500/20",
      amber: "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20",
      orange: "bg-orange-500/10 text-orange-400 border-orange-500/30 hover:bg-orange-500/20",
      red: "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20",
      teal: "bg-teal-500/10 text-teal-400 border-teal-500/30 hover:bg-teal-500/20",
      indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20",
      violet: "bg-violet-500/10 text-violet-400 border-violet-500/30 hover:bg-violet-500/20",
      lime: "bg-lime-500/10 text-lime-400 border-lime-500/30 hover:bg-lime-500/20"
    };
    return colors[color] || colors.blue;
  };

  return (
    <main className="min-h-screen bg-[rgb(15,23,42)] text-white">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        {/* Effet de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
            <FaRobot className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-wider">CENTRE D'AIDE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Questions Fréquentes
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services d'automatisation et d'IA.
          </p>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une question... (ex: tarifs, n8n, ROI)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#1e293b] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-700/50 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Questions", value: faqData.reduce((acc, cat) => acc + cat.questions.length, 0), icon: <FaRobot /> },
              { label: "Catégories", value: categories.length - 1, icon: <FaCog /> },
              { label: "Support 24/7", value: "✓", icon: <FaHeadset /> },
              { label: "Réponse < 2h", value: "✓", icon: <FaClock /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#1e293b] rounded-xl p-4 border border-gray-700/50">
                <div className="text-2xl md:text-3xl text-blue-400 mb-2">{stat.icon}</div>
                <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-[#1e293b] text-gray-300 border-gray-700/50 hover:bg-[#273449] hover:border-blue-500/30"
              }`}
            >
              {cat === "all" ? "📋 Toutes" : `${cat}`}
            </button>
          ))}
        </div>
      </section>

      {/* Questions par catégorie */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        {filteredFAQ.length === 0 ? (
          <div className="text-center py-16">
            <FaSearch className="text-6xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-500">Essayez avec d'autres mots-clés ou parcourez toutes les catégories.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredFAQ.map((categoryData, catIdx) => (
              <div key={catIdx} className="space-y-4">
                {/* En-tête de catégorie */}
                <div className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${getColorClasses(categoryData.color)}`}>
                  <div className="text-2xl">{categoryData.icon}</div>
                  <h2 className="text-2xl font-bold">{categoryData.category}</h2>
                  <span className="ml-auto text-sm font-medium px-3 py-1 bg-black/20 rounded-full">
                    {categoryData.questions.length} {categoryData.questions.length > 1 ? "questions" : "question"}
                  </span>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {categoryData.questions.map((item, qIdx) => {
                    const globalIndex = `${catIdx}-${qIdx}`;
                    const isOpen = openQuestion === globalIndex;
                    
                    return (
                      <div
                        key={qIdx}
                        className="bg-[#1e293b] rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full flex items-start justify-between px-6 py-5 text-left focus:outline-none group"
                        >
                          <div className="flex-1 pr-4">
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {item.question}
                            </h3>
                          </div>
                          <FaChevronDown
                            className={`text-gray-400 group-hover:text-blue-400 transition-all duration-300 flex-shrink-0 mt-1 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        <div
                          className={`transition-all duration-500 ease-in-out ${
                            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="pl-4 border-l-4 border-blue-500/30">
                              <p className="text-gray-300 leading-relaxed text-base">
                                {item.answer}
                              </p>
                            </div>
                            
                            {/* Tags de mots-clés */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                                        {item.keywords.map((keyword, kIdx) => (
                                                          <span
                                                            key={kIdx}
                                                            className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                                                          >
                                                            #{keyword}
                                                          </span>
                                                        ))}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </section>
                          
                                <Footer />
                          
                              </main>
                            );
                          };
                          
                          export default FAQ;