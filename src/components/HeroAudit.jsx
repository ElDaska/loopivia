import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, Check, Zap, Target, Award, Clock, TrendingUp,
  BrainCircuit, Sparkles, ChevronRight, Play, Star, Users,
  BarChart3, Rocket, Shield, Eye, Wand2, Activity, Timer,
  CheckCircle2, ArrowUpRight
} from 'lucide-react'

const AuditHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Rotation automatique des features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: '2 min', label: 'Temps requis', icon: Timer },
    { value: '30h/sem', label: 'Temps économisé', icon: Clock },
    { value: 'ROI 6x', label: 'Retour moyen', icon: TrendingUp },
    { value: '98%', label: 'Satisfaction', icon: Star }
  ]

  const features = [
    {
      icon: Target,
      title: 'Diagnostic Précis',
      description: 'Analyse complète de vos processus actuels et identification des goulots d\'étranglement',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Quick Wins',
      description: 'Solutions d\'automatisation rapides à implémenter pour un impact immédiat',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Plan Sur-Mesure',
      description: 'Stratégie d\'automatisation adaptée à votre secteur et votre budget',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    'Identification des tâches répétitives à automatiser',
    'Recommandations d\'outils adaptés à votre budget',
    'Plan d\'action priorisé pour maximiser le ROI',
    'Évaluation du potentiel d\'économie de temps',
    'Stratégie d\'implémentation étape par étape'
  ]

  const testimonials = [
    {
      text: "L'audit Loopivia a révélé des opportunités d'automatisation que nous n'avions jamais envisagées. Résultat : 25h économisées par semaine !",
      author: "Marie Laurent",
      role: "CEO, TechConseil",
      avatar: "ML"
    },
    {
      text: "En 2 minutes, j'ai obtenu un plan d'action complet. L'automatisation proposée nous a fait économiser 40% de temps sur nos processus.",
      author: "Fatou Sene Diop",
      role: "Fondatrice, MFSD Prestige",
      avatar: "FS"
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      {/* Effets de fond animés */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* En-tête principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            >
              <BrainCircuit className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Audit IA Gratuit</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Découvrez votre
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                potentiel d'automatisation
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              En seulement <span className="text-blue-400 font-bold">2 minutes</span>, 
              obtenez un audit personnalisé qui révèle comment l'IA peut 
              <span className="text-purple-400 font-bold"> transformer votre entreprise</span>
            </p>

            {/* Stats animées */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <a
                href="/audit"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-purple-700 hover:to-purple-800 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transform"
              >
                <Play className="w-7 h-7" />
                <span>Commencer mon audit gratuit</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300 -z-10"></div>
              </a>
              
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>100% Gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-purple-400" />
                  <span>Résultats en 2 min</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className={`group relative bg-slate-800/40 backdrop-blur-sm border rounded-3xl p-8 hover:bg-slate-700/40 transition-all duration-500 ${
                  activeFeature === index ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-slate-700/50'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bénéfices détaillés */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 md:p-12 mb-20"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ce que vous découvrirez dans votre audit
              </h3>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Un rapport complet et actionnable, généré par notre IA spécialisée
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Témoignages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à transformer votre entreprise ?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines d'entrepreneurs qui ont déjà découvert leur potentiel d'automatisation
              </p>
              
              <a
                href="/audit"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <Rocket className="w-6 h-6" />
                <span>Commencer maintenant</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
              
              <p className="text-sm text-slate-400 mt-4">
                ⚡ Démarrage instantané • 🎯 Résultats personnalisés • 🔒 Données sécurisées
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AuditHeroSection