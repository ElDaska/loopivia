import { motion, useScroll, useTransform, } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";   




const AIAAHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    setIsVisible(true);
    
    // Mouse movement tracking
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // SVG Icons Components
  const BotIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6.5C12.7 6.5 12.4 6.5 12 6.5S11.3 6.5 11 6.5V7.5C11 8.1 10.6 8.5 10 8.5S9 8.1 9 7.5V6.5L3 7V9C3 10.1 3.9 11 5 11V12.5C3.9 12.5 3 13.4 3 14.5V16.5C3 17.6 3.9 18.5 5 18.5H19C20.1 18.5 21 17.6 21 16.5V14.5C21 13.4 20.1 12.5 19 12.5V11C20.1 11 21 10.1 21 9M16 10C16 12.2 14.2 14 12 14S8 12.2 8 14V10C8 7.8 9.8 6 12 6S16 7.8 16 10Z"/>
    </svg>
  );

  const ZapIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
    </svg>
  );

  const SparklesIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.5 14.25l-5.584 2.718c-.569.275-.891.973-.806 1.647s.553 1.25 1.275 1.25H12c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25H4.391c-.722 0-1.19.576-1.275 1.25s.237 1.372.806 1.647L9.5 14.25zM21 12l-4.62-6.327A.75.75 0 0015.75 5.25H8.25A.75.75 0 008.25 6.75h7.5L21 12z"/>
    </svg>
  );

  const ArrowRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  );

  const PlayIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  );

  const ChevronDownIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );

  const EyeIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  // Floating particles with mouse interaction
  const particles = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
      animate={{
        x: [0, Math.random() * 60 - 30 + mousePosition.x * 20],
        y: [0, Math.random() * 60 - 30 + mousePosition.y * 20],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  return (
    <motion.section 
      style={{ y, opacity, scale }}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden"
    >
      {/* Dynamic Background with mouse interaction */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"
        style={{
          background: `radial-gradient(ellipse at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(6, 182, 212, 0.15), transparent 70%)`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]"></div>

      {/* Animated Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 2, ease: "easeOut" },
          y: { duration: 2, ease: "easeOut" },
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          x: { duration: 2.5, ease: "easeOut" },
          y: { duration: 2.5, ease: "easeOut" },
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh] sm:min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full text-xs sm:text-sm font-medium text-cyan-300 backdrop-blur-sm"
            >
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              Révolutionnez votre entreprise avec l'IA
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="block">L'Automatisation</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Intelligente
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-slate-300 font-light mt-2">
                pour Votre Business
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Libérez le potentiel de votre entreprise avec nos solutions d'IA personnalisées. 
              Automatisez vos tâches répétitives, optimisez vos processus et concentrez-vous 
              sur ce qui compte vraiment : votre croissance.
            </motion.p>

            {/* Features Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: BotIcon, text: "IA Conversationnelle" },
                { icon: ZapIcon, text: "Automatisation RPA" },
                { icon: SparklesIcon, text: "Machine Learning" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm"
                >
                  <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            {/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
>
  <Link to="/contact" className="w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.25)" }}
      whileTap={{ scale: 0.98 }}
      className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-base sm:text-lg shadow-2xl overflow-hidden w-full"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative flex items-center justify-center gap-2">
        Démarrer votre transformation
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  </Link>

  <Link to="/offres-loopivia" className="w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/5 transition-all duration-300 w-full"
    >
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
        <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      Découvrir nos offres
    </motion.button>
  </Link>
</motion.div>

            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              {[
                { 
                  icon: "⏱️", 
                  title: "Temps", 
                  description: "Automatisez vos tâches répétitives et récupérez des heures précieuses chaque jour" 
                },
                { 
                  icon: "📈", 
                  title: "Productivité", 
                  description: "Optimisez vos processus métier et multipliez l'efficacité de vos équipes" 
                },
                { 
                  icon: "💰", 
                  title: "Rentabilité", 
                  description: "Réduisez vos coûts opérationnels et maximisez votre retour sur investissement" 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center p-4 bg-white/3 backdrop-blur-sm rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                  <div className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">{item.title}</div>
                  <div className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            {/* Central Orb with mouse interaction */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              style={{
                rotateY: mousePosition.x * 10,
                rotateX: mousePosition.y * -10,
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)"
                }}
              >
                <motion.div 
                  className="absolute top-0 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-0 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute left-0 top-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 sm:inset-8 border border-cyan-400/15 rounded-full"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute right-0 bottom-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-300 rounded-full" />
              </motion.div>

              {/* Central Core */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 40px rgba(6, 182, 212, 0.2)",
                    "0 0 80px rgba(6, 182, 212, 0.4)",
                    "0 0 40px rgba(6, 182, 212, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-12 sm:inset-16 bg-gradient-to-br from-cyan-500/15 to-indigo-600/15 rounded-full backdrop-blur-sm border border-cyan-400/25 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{
                    rotateY: mousePosition.x * -15,
                    rotateX: mousePosition.y * 15,
                  }}
                >
                  <BotIcon className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              {[
                { icon: ZapIcon, className: "absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2", delay: 0 },
                { icon: SparklesIcon, className: "absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2", delay: 1 },
                { icon: BotIcon, className: "absolute -bottom-6 sm:-bottom-8 right-1/3", delay: 2 },
                { icon: ArrowRightIcon, className: "absolute -left-6 sm:-left-8 bottom-1/3", delay: 3 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 180, 360],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  style={{
                    x: mousePosition.x * 5,
                    y: mousePosition.y * 5,
                  }}
                  transition={{
                    y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8 + index * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                    x: { duration: 2, ease: "easeOut" },
                  }}
                  className={`${item.className} w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 backdrop-blur-sm border border-cyan-400/25 rounded-full flex items-center justify-center`}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs sm:text-sm">Découvrez nos solutions</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIAAHero;