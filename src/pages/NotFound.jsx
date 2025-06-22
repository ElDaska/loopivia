import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

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
  const SearchIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>
  );

  const HomeIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );

  const RefreshIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <polyline points="23,4 23,10 17,10"/>
      <polyline points="1,20 1,14 7,14"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </svg>
  );

  const ArrowLeftIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12,19 5,12 12,5"/>
    </svg>
  );

  const AlertTriangleIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );

  const RobotIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6.5C12.7 6.5 12.4 6.5 12 6.5S11.3 6.5 11 6.5V7.5C11 8.1 10.6 8.5 10 8.5S9 8.1 9 7.5V6.5L3 7V9C3 10.1 3.9 11 5 11V12.5C3.9 12.5 3 13.4 3 14.5V16.5C3 17.6 3.9 18.5 5 18.5H19C20.1 18.5 21 17.6 21 16.5V14.5C21 13.4 20.1 12.5 19 12.5V11C20.1 11 21 10.1 21 9M16 10C16 12.2 14.2 14 12 14S8 12.2 8 14V10C8 7.8 9.8 6 12 6S16 7.8 16 10Z"/>
    </svg>
  );

  // Floating error particles
  const errorParticles = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20"
      animate={{
        x: [0, Math.random() * 40 - 20 + mousePosition.x * 15],
        y: [0, Math.random() * 40 - 20 + mousePosition.y * 15],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
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
      style={{ y, opacity }}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic Background with mouse interaction */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(239, 68, 68, 0.1), transparent 70%)`
        }}
      />
      
      {/* Floating Error Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {errorParticles}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]"></div>

      {/* Animated Glow Effects */}
      <motion.div 
        className="absolute top-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-red-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 2, ease: "easeOut" },
          y: { duration: 2, ease: "easeOut" },
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 404 Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 sm:mb-12"
        >
          {/* Large 404 with glitch effect */}
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(239, 68, 68, 0.5)",
                "0 0 40px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.3)",
                "0 0 20px rgba(239, 68, 68, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text leading-none"
          >
            404
          </motion.div>

          {/* Broken Robot Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : 20,
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <RobotIcon className="w-16 h-16 sm:w-20 sm:h-20 text-red-400 opacity-80" />
              {/* Sparks around broken robot */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 sm:space-y-6 mb-8 sm:mb-12"
        >
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full text-sm font-medium text-red-300 backdrop-blur-sm"
          >
            <AlertTriangleIcon className="w-4 h-4" />
            Erreur 404 - Page introuvable
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="block text-slate-200">Oups ! Cette page</span>
            <span className="block bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              n'existe pas
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Il semblerait que notre IA ait perdu cette page dans le cyberespace. 
            Mais ne vous inquiétez pas, nous pouvons vous aider à retrouver votre chemin !
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-12"
        >
          {[
            { 
              icon: SearchIcon, 
              title: "Vérifiez l'URL", 
              description: "Assurez-vous que l'adresse est correcte" 
            },
            { 
              icon: RefreshIcon, 
              title: "Actualisez", 
              description: "Parfois un simple rechargement suffit" 
            },
            { 
              icon: HomeIcon, 
              title: "Page d'accueil", 
              description: "Retournez à la base pour repartir" 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-full mb-4 mx-auto">
                <item.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl font-semibold text-lg shadow-2xl overflow-hidden w-full sm:w-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center justify-center gap-2">
                <HomeIcon className="w-5 h-5" />
                Retour à l'accueil
              </span>
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.history.back()}
            className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Page précédente
          </motion.button>
        </motion.div>

        {/* Fun Error Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.5 : 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 right-4 text-xs font-mono text-slate-500"
        >
          ERROR_CODE: AI_PAGE_NOT_FOUND_404
        </motion.div>
      </div>

      {/* Floating Glitch Effect */}
      <motion.div
        animate={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5"
      />
    </motion.section>
  );
};

export default NotFound;