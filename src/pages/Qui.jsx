import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaUsers, FaLightbulb, FaChartBar, FaArrowRight, FaStar } from 'react-icons/fa';
import { memo, useMemo } from 'react';
import Footer from "../components/Footer";

// Données déplacées hors du composant pour éviter les re-créations
const LOOPIVIA_VALUES = [
  {
    icon: FaLightbulb,
    title: "Innovation Stratégique",
    desc: "Nous plaçons l'innovation au cœur de nos stratégies pour anticiper les tendances et vous offrir des solutions d'avant-garde.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    icon: FaUsers,
    title: "Partenariat & Confiance",
    desc: "Nous construisons des relations solides basées sur la transparence, l'écoute et une collaboration étroite pour atteindre vos objectifs.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: FaChartBar,
    title: "Impact Mesurable",
    desc: "Notre engagement est de fournir des résultats concrets et mesurables, en alignant nos actions sur votre performance et votre croissance.",
    gradient: "from-purple-400 to-pink-500"
  },
];

const STATS = [
  { number: "100+", label: "Projets Réalisés" },
  { number: "98%", label: "Clients Satisfaits" },
  { number: "5+", label: "Experts Dédiés" },
  { number: "4+", label: "Années d'Excellence" }
];

// Composant de carte de valeur mémorisé
const ValueCard = memo(({ value, index, shouldReduceMotion }) => {
  const IconComponent = value.icon;
  
  const cardVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700/50
                 hover:border-sky-400/50 hover:shadow-sky-400/10 transform hover:-translate-y-3
                 transition-all duration-500 ease-out"
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Icône avec gradient */}
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} 
                      flex items-center justify-center mb-6 mx-auto
                      group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">
        {value.title}
      </h3>
      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
        {value.desc}
      </p>
      
      {/* Indicateur de performance */}
      <div className="flex items-center mt-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-3 h-3 mr-1" />
        ))}
        <span className="text-xs text-slate-400 ml-2">Excellence garantie</span>
      </div>
    </motion.div>
  );
});

ValueCard.displayName = 'ValueCard';

// Composant de statistique mémorisé
const StatCard = memo(({ stat, index, shouldReduceMotion }) => {
  const statVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={statVariants}
      className="text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text 
                      bg-gradient-to-r from-sky-400 to-blue-500 mb-2">
        {stat.number}
      </div>
      <div className="text-slate-300 font-medium group-hover:text-white transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
});

StatCard.displayName = 'StatCard';

const QuiSommesNousLoopivia = () => {
  const shouldReduceMotion = useReducedMotion();
  
  // Variantes d'animation optimisées
  const sectionVariants = useMemo(() => 
    shouldReduceMotion ? {} : {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    }
  , [shouldReduceMotion]);

  const containerVariants = useMemo(() => 
    shouldReduceMotion ? {} : {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }
  , [shouldReduceMotion]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section avec parallaxe */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden"
      >
        {/* Background avec effet de particules */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center py-20 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-8"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Découvrez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-purple-500">
                Loopivia
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Votre partenaire de confiance pour la transformation digitale et l'intégration de
              solutions intelligentes. Nous aidons les entreprises à innover, optimiser leurs performances
              et créer un impact durable grâce à notre expertise en stratégie, IA et technologies de pointe.
            </motion.p>

            {/* Statistiques */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {STATS.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} shouldReduceMotion={shouldReduceMotion} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Équipe */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 md:py-28"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Notre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Équipe d'Experts
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            Notre force réside dans une équipe pluridisciplinaire de stratèges, data scientists,
            développeurs et consultants passionnés. Unis par une vision commune d'excellence,
            nous collaborons pour transformer vos défis en opportunités de croissance.
          </p>
        </div>
      </motion.section>

      {/* Section Mission */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 via-slate-800/50 to-purple-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Notre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Mission
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Habiliter les entreprises à prospérer à l'ère numérique. Nous nous engageons à fournir
            des stratégies innovantes, des solutions technologiques sur-mesure et un accompagnement
            personnalisé pour décupler votre potentiel et atteindre vos ambitions.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center 
                         bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500
                         text-white py-4 px-10 rounded-full font-bold text-xl
                         shadow-2xl shadow-sky-500/25 hover:shadow-sky-400/40
                         transform transition-all duration-300 ease-out
                         border border-sky-400/50 hover:border-sky-300/70"
            >
              <span className="mr-3">Lancez votre transformation</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Valeurs */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Valeurs Fondamentales
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et définissent notre approche unique
            </p>
          </div>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {LOOPIVIA_VALUES.map((value, index) => (
              <ValueCard 
                key={value.title} 
                value={value} 
                index={index} 
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer placeholder - assumé que FooterLoopivia est importé ailleurs */}
      <div className="mt-20">
        {/* FooterLoopivia serait ici */}
      </div>
      <Footer />
    </div>
  );
};

export default QuiSommesNousLoopivia;