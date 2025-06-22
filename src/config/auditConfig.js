// src/config/auditConfig.js

export const auditQuestions = [
  // --- Phase 1: Compréhension du Contexte ---
  {
    id: 'role',
    question: "Quel est votre rôle principal dans l'entreprise ?",
    type: 'qcm',
    options: ['Fondateur / Dirigeant', 'Manager / Chef de projet', 'Opérationnel / Spécialiste', 'Commercial / Marketing', 'Support / Admin'],
    allowOther: true,
    ui: { icon: 'Briefcase' }
  },
  {
    id: 'taille_entreprise',
    question: "Combien de personnes composent votre équipe ?",
    type: 'qcm',
    options: ['Moi uniquement', '2-10 personnes', '11-50 personnes', '51-200 personnes', '+200 personnes'],
    allowOther: false,
    ui: { icon: 'Users' } // Nouvelle icône
  },
  {
    id: 'secteur',
    question: "Dans quel univers votre entreprise évolue-t-elle ?",
    type: 'qcm',
    options: ['E-commerce & Retail', 'Services & Conseil (B2B/B2C)', 'Logiciels & Technologie (SaaS)', 'Industrie & Fabrication', 'Santé & Bien-être', 'Finance & Assurance'],
    allowOther: true,
    ui: { icon: 'Building2' }
  },

  // --- Phase 2: Identification des Points de Douleur ---
  {
    id: 'taches_repetitives',
    question: "Imaginez une semaine de travail idéale. Quelle tâche répétitive voudriez-vous voir disparaître à jamais ?",
    type: 'qcm',
    description: "Celle qui vous prend le plus d'énergie pour le moins de valeur ajoutée.",
    options: [
      'La saisie de données entre différents logiciels (Excel, CRM, etc.)',
      'Le tri et la réponse aux e-mails récurrents',
      'La création manuelle de rapports et de tableaux de bord',
      'Le processus de facturation et de suivi des paiements',
      'La gestion des rendez-vous et des agendas',
      'Le support client de premier niveau'
    ],
    allowOther: true,
    ui: { icon: 'Repeat' }
  },
  {
    id: 'source_inefficacite',
    question: "Selon vous, où se situe la plus grande source de 'friction' ou de perte de temps dans vos processus actuels ?",
    type: 'qcm',
    options: [
        'Des outils qui ne communiquent pas entre eux',
        'Des erreurs humaines dues à la saisie manuelle',
        'Un manque de visibilité sur les données en temps réel',
        'Des délais de réponse trop longs (clients ou internes)',
        'Des processus qui dépendent d\'une seule personne'
    ],
    allowOther: true,
    ui: { icon: 'ZapOff' }
  },

  // --- Phase 3: Quantification et Projection ---
  {
    id: 'impact_automatisation',
    question: "Si cette 'friction' était éliminée, quel serait l'impact le plus significatif pour vous ?",
    type: 'qcm',
    options: [
      'Plus de temps pour la stratégie et la croissance',
      'Une meilleure expérience pour nos clients',
      'Moins de stress et plus de satisfaction pour l\'équipe',
      'Une prise de décision plus rapide et éclairée',
      'Une augmentation directe de la rentabilité'
    ],
    allowOther: false,
    ui: { icon: 'TrendingUp' }
  },
  {
    id: 'budget',
    question: "Pour résoudre ce problème, quel niveau d'investissement mensuel considérez-vous comme raisonnable ?",
    type: 'qcm',
    description: "Votre réponse nous aide à vous proposer des solutions adaptées et réalistes.",
    options: ['Moins de 200€/mois', '200€ - 500€/mois', '500€ - 1500€/mois', '+1500€/mois', 'Je préfère ne pas répondre'],
    allowOther: false,
    ui: { icon: 'CircleDollarSign' } // Nouvelle icône
  },
  
  // --- Phase 4: La Solution et la Conversion ---
  {
    id: 'projet_specifique',
    question: "Pour finir, si vous avez une idée précise en tête, décrivez-la ici.",
    type: 'text',
    description: "C'est optionnel, mais plus vous nous en dites, plus le rapport sera précis.",
    isOptional: true, // Marqueur pour rendre la question optionnelle
    ui: { icon: 'Wand2' }
  },
  {
    id: 'source_decouverte',
    question: "Une dernière chose, comment avez-vous entendu parler de Loopivia ?",
    type: 'qcm',
    options: ['Recherche Google', 'LinkedIn', 'Recommandation', 'Publicité en ligne', 'Un autre événement/canal'],
    allowOther: true,
    isOptional: true, // Marqueur pour rendre la question optionnelle
    ui: { icon: 'Search' } // Nouvelle icône
  },
  {
    id: 'contact_email',
    question: "Impressionnant. Nous avons tout ce qu'il faut. Où envoyons-nous votre plan d'action personnalisé ?",
    type: 'email',
    isFinal: true,
    ui: { icon: 'Mail' }
  },
];