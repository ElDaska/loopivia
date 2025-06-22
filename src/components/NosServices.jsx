import { motion } from "framer-motion";
// Optionnel: si vous voulez utiliser des icônes plus professionnelles
// import { BarChart3, BrainCircuit, Code, Zap, Palette } from 'lucide-react'; // Exemple avec Lucide

// REMPLACEZ CECI PAR LES VRAIS SERVICES D'Loopivia
const LoopiviaServices = [
  {
    title: "Stratégie & Conseil Digital",
    desc: "Nous analysons votre marché et vos objectifs pour élaborer des stratégies digitales percutantes et sur-mesure, alignées sur votre croissance.",
    // icon: <BarChart3 className="w-10 h-10 text-sky-400" />,
    emoji: "📈",
  },
  {
    title: "Solutions d'Intelligence Artificielle",
    desc: "Développement et intégration d'IA pour automatiser vos processus, personnaliser l'expérience client et générer des insights précieux.",
    // icon: <BrainCircuit className="w-10 h-10 text-sky-400" />,
    emoji: "🤖",
  },
  {
    title: "Développement Web & Applications",
    desc: "Création de plateformes web performantes, d'applications mobiles intuitives et d'outils métiers pour optimiser vos opérations.",
    // icon: <Code className="w-10 h-10 text-sky-400" />,
    emoji: "💻",
  },
  {
    title: "Optimisation & Automatisation des Processus",
    desc: "Nous identifions et automatisons vos tâches répétitives pour libérer du temps, réduire les erreurs et améliorer l'efficacité globale.",
    // icon: <Zap className="w-10 h-10 text-sky-400" />,
    emoji: "⚙️",
  },
  // Ajoutez d'autres services si besoin, par exemple:
  // {
  //   title: "Design UX/UI & Identité de Marque",
  //   desc: "Conception d'interfaces utilisateur engageantes et création d'identités de marque mémorables qui résonnent avec votre audience.",
  //   // icon: <Palette className="w-10 h-10 text-sky-400" />,
  //   emoji: "🎨",
  // },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({ // i est l'index personnalisé passé par `custom`
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15, // Délai plus court pour une animation plus rapide si beaucoup de cartes
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const NosServicesLoopivia = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900 px-6 md:px-12">
      {/* Le fond était un solide, j'ai gardé un fond uni mais changé la couleur.
          Si vous vouliez un dégradé pour Loopivia:
          className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 px-6 md:px-12"
      */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-white"
        >
          Nos <span className="text-sky-400">Solutions</span> pour Votre Succès
          {/* Ou "Découvrez nos expertises clés" */}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 md:mb-16"
        >
          Loopivia vous accompagne avec des services sur-mesure, conçus pour transformer
          vos défis en opportunités et accélérer votre impact digital.
        </motion.p>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(LoopiviaServices.length, 4)} gap-6 md:gap-8`}>
          {/* Adapte le nombre de colonnes au nombre de services, max 4 pour un bon affichage */}
          {LoopiviaServices.map((service, index) => (
            <motion.div
              key={service.title} // Utiliser un ID unique ou le titre si unique
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Se déclenche quand 20% de la carte est visible
              className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg border border-slate-700
                         hover:shadow-sky-500/20 hover:border-sky-500
                         transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col"
                         // J'ai ajouté flex flex-col pour un meilleur alignement si les descriptions varient en longueur
            >
              <div className="mb-5 text-center">
                {service.icon ? (
                  service.icon
                ) : (
                  <span className="text-4xl md:text-5xl" role="img" aria-label={service.title}>{service.emoji}</span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-sky-400 text-center">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-grow">
                {/* flex-grow pour que les cartes aient la même hauteur si elles sont dans un conteneur flex row implicite (grid) */}
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosServicesLoopivia;