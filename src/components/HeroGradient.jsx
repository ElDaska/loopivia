import { motion } from "framer-motion";
// Optionnel: Si vous souhaitez utiliser des icônes plus élaborées
// import { Lightbulb, Zap, TrendingUp } from 'lucide-react'; // Exemple avec lucide-react

// Données pour les cartes d'avantages - plus facile à gérer ainsi
const LoopiviaAdvantages = [
  {
    // icon: <Lightbulb className="w-8 h-8 text-sky-400 mb-3" />, // Exemple avec Lucide
    emoji: "💡",
    title: "Stratégies Éclairées",
    desc: "Des analyses prédictives et des insights basés sur les données pour guider vos décisions et celles de vos clients.",
  },
  {
    // icon: <Zap className="w-8 h-8 text-sky-400 mb-3" />,
    emoji: "⚙️",
    title: "Optimisation Intelligente",
    desc: "Intégration d'IA et automatisation des processus pour une efficacité maximale et une réduction des coûts opérationnels.",
  },
  {
    // icon: <TrendingUp className="w-8 h-8 text-sky-400 mb-3" />,
    emoji: "📈",
    title: "Impact Mesurable & Croissance",
    desc: "Des solutions conçues pour la performance, offrant des résultats tangibles et une croissance accélérée pour votre agence.",
  },
];

const HeroGradientLoopivia = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 md:py-28 px-6 md:px-12">
      {/* Dégradé d'arrière-plan subtil */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black/30 opacity-75 pointer-events-none"
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Se déclenche une fois, quand 30% est visible
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Exploitez la puissance de l'IA pour{" "}
          <span className="text-sky-400">transformer votre agence</span>.
          {/* Autre idée : "Loopivia : L'Intelligence au service de votre Performance." */}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 md:mb-16"
        >
          Chez <span className="text-sky-400 font-semibold">Loopivia</span>, nous
          vous aidons à intégrer des solutions d'intelligence artificielle et des stratégies data-driven
          pour innover, optimiser et surpasser vos objectifs.
        </motion.p>

        {/* Avantages animés */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {LoopiviaAdvantages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              // Le style des cartes : un peu plus de subtilité avec fond semi-transparent
              className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-700 transition-all duration-300 flex flex-col items-center"
            >
              {/* Affichage de l'icône ou de l'émoji */}
              {item.icon ? (
                item.icon
              ) : (
                <span className="text-3xl mb-3" role="img" aria-label={item.title}>{item.emoji}</span>
              )}
              <h3 className="text-xl font-semibold mb-3 text-sky-400">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGradientLoopivia;