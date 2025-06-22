import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { ArrowRight, Settings, Brain, TrendingUp, Zap, Target, Shield, Rocket } from 'lucide-react';
import { Link } from "react-router-dom";


// Données déplacées hors du composant pour éviter les re-créations
const LOOPIVIA_BENEFITS = [
  {
    icon: Settings,
    title: "Efficacité Opérationnelle",
    desc: "Optimisez vos processus grâce à l'automatisation et à des solutions intelligentes, réduisant les tâches manuelles et les coûts.",
    gradient: "from-emerald-400 to-teal-500",
    metric: "70% de temps économisé"
  },
  {
    icon: Brain,
    title: "Innovation Continue",
    desc: "Intégrez l'intelligence artificielle et les dernières technologies pour rester compétitif et proposer des services avant-gardistes.",
    gradient: "from-purple-400 to-pink-500",
    metric: "IA de pointe intégrée"
  },
  {
    icon: TrendingUp,
    title: "Croissance Accélérée",
    desc: "Des stratégies data-driven et des outils performants pour scaler votre activité, atteindre de nouveaux marchés et maximiser votre ROI.",
    gradient: "from-amber-400 to-orange-500",
    metric: "3x ROI en moyenne"
  },
];

const ADDITIONAL_FEATURES = [
  {
    icon: Zap,
    title: "Déploiement Rapide",
    desc: "Solutions opérationnelles en moins de 30 jours",
    color: "text-yellow-400"
  },
  {
    icon: Target,
    title: "Résultats Mesurables",
    desc: "KPIs transparents et reporting en temps réel",
    color: "text-red-400"
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    desc: "Conformité RGPD et sécurité enterprise-grade",
    color: "text-green-400"
  },
  {
    icon: Rocket,
    title: "Support 24/7",
    desc: "Accompagnement continu par nos experts",
    color: "text-blue-400"
  }
];

const STATS = [
  { number: "300%", label: "Amélioration ROI Moyenne", icon: TrendingUp },
  { number: "45j", label: "Temps Moyen de Déploiement", icon: Zap },
  { number: "24/7", label: "Support Expert Dédié", icon: Shield },
  { number: "99.9%", label: "Taux de Satisfaction Client", icon: Target }
];

// Composant de carte de bénéfice optimisé
const BenefitCard = ({ benefit, index }) => {
  const IconComponent = benefit.icon;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 
                 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-700/50
                 hover:border-sky-400/50 hover:shadow-sky-400/20 transform hover:-translate-y-4
                 transition-all duration-500 ease-out"
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Badge métrique */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-sky-500 to-blue-600 
                      text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        {benefit.metric}
      </div>
      
      {/* Icône avec gradient dynamique */}
      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.gradient} 
                      flex items-center justify-center mb-6 mx-auto
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                      shadow-lg`}>
        <IconComponent className="w-10 h-10 text-white" />
        {/* Effet de pulsation */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} 
                        opacity-0 group-hover:opacity-30 scale-110 animate-pulse`} />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">
        {benefit.title}
      </h3>
      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors mb-6">
        {benefit.desc}
      </p>
      
      {/* Barre de progression décorative */}
      <div className="w-full bg-slate-700 rounded-full h-1 mb-4">
        <div className={`h-1 bg-gradient-to-r ${benefit.gradient} rounded-full w-0 
                        group-hover:w-full transition-all duration-1000 delay-200`} />
      </div>
      
      {/* Bouton d'action */}
      <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg
                         opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0
                         transition-all duration-300 delay-100 font-medium">
        
      </button>
    </motion.div>
  );
};

// Composant de feature additionnel
const FeatureCard = ({ feature, index }) => {
  const IconComponent = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800/80
                 border border-slate-700/50 hover:border-slate-600 transition-all duration-300
                 group cursor-pointer"
    >
      <div className={`p-3 rounded-xl bg-slate-700 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className={`w-6 h-6 ${feature.color}`} />
      </div>
      <div>
        <h4 className="font-semibold text-white group-hover:text-sky-300 transition-colors">
          {feature.title}
        </h4>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
};

// Composant de statistique
const StatCard = ({ stat, index }) => {
  const IconComponent = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center group hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center justify-center mb-3">
        <IconComponent className="w-8 h-8 text-sky-400 mr-2" />
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text 
                        bg-gradient-to-r from-sky-400 to-blue-500">
          {stat.number}
        </div>
      </div>
      <div className="text-slate-300 font-medium group-hover:text-white transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
};

const PourquoiLoopivia = () => {
  const [contactClicked, setContactClicked] = useState(false);
  
  const handleContactClick = useCallback(() => {
    setContactClicked(true);
    alert("Redirection vers la page contact...");
  }, []);

  // Variantes d'animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section avec effet de particules */}
      <section className="relative overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-sky-400/20 rounded-full animate-pulse"
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
          <div className="max-w-6xl mx-auto">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              Pourquoi choisir{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-purple-500">
                Loopivia
              </span>{" "}
              <br />
              <span className="text-3xl md:text-5xl font-semibold text-slate-300">
                pour transformer votre agence ?
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed max-w-5xl mx-auto"
            >
              Chez Loopivia, nous ne nous contentons pas d'automatiser. Nous réinventons vos processus avec des solutions
              stratégiques, l'intelligence artificielle et une expertise digitale pointue. Libérez le potentiel
              de votre agence pour vous concentrer sur l'innovation et la croissance.
            </motion.p>

            {/* Statistiques */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {STATS.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section des bénéfices principaux */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Les Avantages{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Concrets
              </span>{" "}
              de Notre Partenariat
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez comment Loopivia transforme votre entreprise avec des résultats mesurables
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {LOOPIVIA_BENEFITS.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section des fonctionnalités additionnelles */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi Nos Clients Nous Font{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Confiance
              </span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADDITIONAL_FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background décoratif */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 via-purple-900/20 to-blue-900/30 rounded-3xl" />
            
            <div className="relative z-10 p-12 rounded-3xl border border-sky-500/30">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Prêt à Transformer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                  Votre Agence
                </span> ?
              </h3>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Rejoignez les entreprises qui ont choisi l'excellence avec Loopivia. 
                Discutons de votre projet et découvrez votre potentiel de croissance.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button
                  onClick={handleContactClick}
                  className="group relative inline-flex items-center justify-center 
                             bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500
                             text-white py-4 px-12 rounded-full font-bold text-xl
                             shadow-2xl shadow-sky-500/25 hover:shadow-sky-400/40
                             transform transition-all duration-300 ease-out
                             border border-sky-400/50 hover:border-sky-300/70"
                >
                  <Link to="/contact" 
                  className="flex items-center group cursor-pointer">
                  <span className="mr-3">Discutons de votre projet</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
                </button>
              </motion.div>
              
              {/* Garantie */}
              <div className="flex items-center justify-center mt-8 text-slate-400">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm">Consultation gratuite • Sans engagement • Devis sous 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer placeholder */}
      <div className="mt-20">
        {/* FooterLoopivia serait ici */}
      </div>
    </div>
  );
};

export default PourquoiLoopivia;