import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ArrowLeft, Check, Briefcase, Building2, Repeat, ZapOff,
  TrendingUp, BrainCircuit, Wand2, Download, AlertCircle,
  Users, CircleDollarSign, Search, SkipForward, Shield, User,
  FileText, Eye, Lock, UserCheck, Mail, AtSign, Globe, Rocket,
  Star, Zap, Target, Clock, Award, ChevronRight, Play
} from 'lucide-react'
import ReportPreview from './ReportPreview'

// === QUESTIONS DEMANDEES ===
const auditQuestions = [
  {
    id: 'role',
    question: "Quel est votre rôle principal dans l'entreprise ?",
    type: 'qcm-multiple',
    options: ['Fondateur / Dirigeant', 'Manager / Chef de projet', 'Opérationnel / Spécialiste', 'Commercial / Marketing', 'Support / Admin'],
    allowOther: true,
    otherPlaceholder: "Précisez votre rôle",
    ui: { icon: 'Briefcase' }
  },
  {
    id: 'taille_entreprise',
    question: "Combien de personnes composent votre équipe ?",
    type: 'qcm',
    options: ['Moi uniquement', '2-10 personnes', '11-50 personnes', '51-200 personnes', '+200 personnes'],
    allowOther: false,
    ui: { icon: 'Users' }
  },
  {
    id: 'secteur',
    question: "Dans quel univers votre entreprise évolue-t-elle ?",
    type: 'qcm',
    options: ['E-commerce & Retail', 'Services & Conseil (B2B/B2C)', 'Logiciels & Technologie (SaaS)', 'Industrie & Fabrication', 'Santé & Bien-être', 'Finance & Assurance'],
    allowOther: true,
    otherPlaceholder: "Précisez votre secteur d'activité",
    ui: { icon: 'Building2' }
  },
  {
    id: 'taches_repetitives',
    question: "Quelles tâches répétitives voudriez-vous voir disparaître à jamais ?",
    type: 'qcm-multiple',
    description: "Celles qui vous prennent le plus d'énergie pour le moins de valeur ajoutée.",
    options: [
      'La saisie de données entre différents logiciels (Excel, CRM, etc.)',
      'Le tri et la réponse aux e-mails récurrents',
      'La création manuelle de rapports et de tableaux de bord',
      'Le processus de facturation et de suivi des paiements',
      'La gestion des rendez-vous et des agendas',
      'Le support client de premier niveau'
    ],
    allowOther: true,
    otherPlaceholder: "Décrivez vos tâches répétitives",
    ui: { icon: 'Repeat' }
  },
  {
    id: 'source_inefficacite',
    question: "Où se situe la plus grande source de 'friction' ou de perte de temps dans vos processus ?",
    type: 'qcm-multiple',
    options: [
      'Des outils qui ne communiquent pas entre eux',
      'Des erreurs humaines dues à la saisie manuelle',
      'Un manque de visibilité sur les données en temps réel',
      'Des délais de réponse trop longs (clients ou internes)',
      'Des processus qui dépendent d\'une seule personne'
    ],
    allowOther: true,
    otherPlaceholder: "Décrivez vos sources d'inefficacité",
    ui: { icon: 'ZapOff' }
  },
  {
    id: 'impact_automatisation',
    question: "Si cette 'friction' était éliminée, quels seraient les impacts les plus significatifs ?",
    type: 'qcm-multiple',
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
    id: 'outils',
    question: "Quels outils/logiciels utilisez-vous régulièrement ?",
    type: 'qcm-multiple',
    options: [
      'Excel / Google Sheets', 'Notion', 'Trello', 'Slack / Teams',
      'ERP métier', 'CRM', 'Gmail / Outlook', 'Zapier / Make / N8N',
      'ChatGPT / Copilot', 'Aucun'
    ],
    allowOther: true,
    otherPlaceholder: "Listez vos outils principaux",
    ui: { icon: 'Wand2' }
  },
  {
    id: 'budget',
    question: "Quel niveau d'investissement mensuel considérez-vous comme raisonnable ?",
    type: 'qcm',
    description: "Votre réponse nous aide à vous proposer des solutions adaptées et réalistes.",
    options: ['Moins de 200€/mois', '200€ - 500€/mois', '500€ - 1500€/mois', '+1500€/mois', 'Je préfère ne pas répondre'],
    allowOther: false,
    ui: { icon: 'CircleDollarSign' }
  },
  {
    id: 'projet_specifique',
    question: "Décrivez ici votre projet spécifique (optionnel).",
    type: 'text',
    isOptional: true,
    ui: { icon: 'Wand2' }
  },
  {
    id: 'source_decouverte',
    question: "Comment avez-vous entendu parler de Loopivia ?",
    type: 'qcm',
    options: ['Recherche Google', 'LinkedIn', 'Recommandation', 'Publicité en ligne', 'Autre événement/canal'],
    allowOther: true,
    otherPlaceholder: "Précisez comment",
    isOptional: true,
    ui: { icon: 'Search' }
  }
]

const iconMap = {
  Briefcase, Building2, Users, Repeat, ZapOff, TrendingUp,
  CircleDollarSign, Wand2, Search, Shield, User, FileText,
  Eye, Lock, UserCheck, Mail, AtSign, Globe, Rocket
}

// === COMPOSANT OPTION QCM / QCM MULTIPLE ===
const QCMOption = ({ option, onSelect, isSelected, isMultiple, disabled = false }) => (
  <motion.li
    onClick={disabled ? undefined : () => onSelect(option)}
    variants={{ 
      hidden: { opacity: 0, y: 10 }, 
      visible: { opacity: 1, y: 0 } 
    }}
    className={`
      flex items-center gap-4 p-4 border rounded-xl transition-all duration-200
      ${disabled 
        ? 'opacity-50 cursor-not-allowed' 
        : 'cursor-pointer'
      }
      ${isSelected
        ? 'bg-blue-600/30 border-blue-500 text-white shadow-lg shadow-blue-500/20'
        : 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/60 hover:border-slate-500 hover:shadow-md'}
    `}
    whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
    whileTap={disabled ? {} : { scale: 0.98 }}
  >
    <div className={`
      w-7 h-7 flex items-center justify-center
      ${isMultiple ? 'rounded-md' : 'rounded-lg'} border-2 transition-all duration-200
      ${isSelected 
        ? 'border-blue-500 bg-blue-500 shadow-sm' 
        : 'border-slate-500 hover:border-slate-400'}
    `}>
      {isSelected && <Check className="w-5 h-5 text-white" />}
    </div>
    <span className="flex-1 text-sm sm:text-base">{option}</span>
  </motion.li>
)

// === SECTION RÉPONSE MANUELLE ===
const ManualResponseSection = ({ question, inputValue, setInputValue, showOtherInput, multipleAnswers }) => {
  const shouldShow = question.type === 'text' || 
    (question.allowOther && (
      (question.type === 'qcm-multiple' && multipleAnswers.includes('Autre')) ||
      (question.type === 'qcm' && showOtherInput)
    ))

  if (!shouldShow) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
        <label className="block text-sm font-medium text-slate-300 mb-3">
          {question.type === 'text' ? 'Votre réponse :' : 'Précisez votre choix :'}
        </label>
        {question.type === 'text' ? (
          <textarea
            rows={4}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Décrivez votre situation en détail..."
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
          />
        ) : (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={question.otherPlaceholder || "Précisez votre réponse..."}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
          />
        )}
      </div>
    </motion.div>
  )
}

// === LANDING PAGE PREMIUM ===
const LandingPage = ({ onStart }) => {
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const features = [
    {
      icon: Target,
      title: "Diagnostic Personnalisé",
      description: "Analyse précise de vos processus actuels et identification des opportunités d'automatisation"
    },
    {
      icon: Zap,
      title: "Quick Wins Identifiés",
      description: "Solutions rapides à implémenter pour un ROI immédiat et mesurable"
    },
    {
      icon: Award,
      title: "Stratégie Sur-Mesure",
      description: "Plan d'action adapté à votre secteur, taille d'équipe et budget"
    }
  ]

  const stats = [
    { number: "30h", label: "économisées/semaine" },
    { number: "ROI 6x", label: "en moyenne" },
    { number: "24h", label: "setup moyen" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Audit Premium Loopivia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Libérez le potentiel
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              de votre entreprise
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            En 2 minutes, découvrez comment l'automatisation et l'IA peuvent transformer 
            vos processus et <span className="text-blue-400 font-semibold">multiplier votre productivité</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <Play className="w-6 h-6" />
              Commencer mon audit gratuit
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-slate-400 mt-3">
              ✨ Gratuit • Sans engagement • Résultats en 2 minutes
            </p>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="bg-blue-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-slate-300 mb-2">
            "Loopivia a transformé notre façon de travailler. Nous avons économisé 25h/semaine dès le premier mois."
          </p>
          <p className="text-sm text-slate-400">
            — Sarah M., Fondatrice d'une agence marketing
          </p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

// === ÉCRAN RGPD ===
const RGPDWelcome = ({ onAccept, userInfo, setUserInfo, error, setError }) => {
  const handleSubmit = useCallback(() => {
    setError('')
    
    const validations = [
      { condition: !userInfo.name?.trim(), message: 'Veuillez saisir votre nom' },
      { condition: !userInfo.email?.trim(), message: 'Veuillez saisir votre e-mail' },
      { condition: !/\S+@\S+\.\S+/.test(userInfo.email), message: 'Format d\'e-mail invalide' },
      { condition: !userInfo.country?.trim(), message: 'Veuillez saisir votre pays' },
      { condition: !userInfo.consent, message: 'Vous devez accepter les conditions RGPD' }
    ]

    const firstError = validations.find(v => v.condition)
    if (firstError) {
      setError(firstError.message)
      return
    }

    onAccept()
  }, [userInfo, setError, onAccept])

  const handleInputChange = useCallback((field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }))
    if (error) setError('')
  }, [setUserInfo, error, setError])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-slate-900/50 backdrop-blur-xl text-white p-8 rounded-2xl mx-auto max-w-2xl border border-slate-700/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Vos informations</h2>
            <p className="text-slate-400">Quelques informations pour personnaliser votre audit</p>
          </div>

          <div className="space-y-6">
            {[
              { field: 'name', label: 'Nom *', type: 'text', required: true },
              { field: 'email', label: 'E-mail *', type: 'email', required: true },
              { field: 'country', label: 'Pays *', type: 'text', required: true },
              { field: 'company', label: 'Entreprise', type: 'text', required: false }
            ].map(({ field, label, type, required }) => (
              <div key={field}>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  value={userInfo[field] || ''}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  placeholder={required ? '' : '(optionnel)'}
                  className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <label className="inline-flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox"
                checked={userInfo.consent || false}
                onChange={(e) => handleInputChange('consent', e.target.checked)}
                className="w-5 h-5 mt-0.5 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm text-slate-300 leading-relaxed">
                J'accepte le traitement de mes données personnelles conformément au RGPD 
                pour recevoir mon audit personnalisé. *
              </span>
            </label>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleSubmit}
            className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            Continuer vers l'audit
          </button>
        </motion.div>
      </div>
    </div>
  )
}

// === COMPOSANT PRINCIPAL ===
const AuditAgent = () => {
  const [step, setStep] = useState('landing')
  const [userInfo, setUserInfo] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    country: '', 
    consent: false 
  })
  const [answers, setAnswers] = useState({})
  const [inputValue, setInputValue] = useState('')
  const [multipleAnswers, setMultipleAnswers] = useState([])
  const [error, setError] = useState('')
  const [currentQ, setCurrentQ] = useState(0)
  const [report, setReport] = useState('')
  const [pdfUrl, setPdfUrl] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const question = auditQuestions[currentQ]
  const progressPercent = useMemo(() => 
    ((currentQ + 1) / auditQuestions.length) * 100, [currentQ]
  )
  const Icon = question?.ui?.icon ? iconMap[question.ui.icon] : null

  // Navigation
  const handleStart = useCallback(() => setStep('rgpd'), [])
  const handleRGPD = useCallback(() => setStep('audit'), [])

  const handlePrevious = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ(prev => prev - 1)
      setError('')
      setInputValue('')
      setMultipleAnswers([])
    }
  }, [currentQ])

  // Sélection des options
  const handleSelect = useCallback((option) => {
    setError('')
    
    if (question.type === 'qcm-multiple') {
      setMultipleAnswers(prev => 
        prev.includes(option) 
          ? prev.filter(x => x !== option) 
          : [...prev, option]
      )
    } else {
      setAnswers(prev => ({ ...prev, [question.id]: option }))
      if (option !== 'Autre') {
        setTimeout(() => handleNext(), 300)
      }
    }
  }, [question])

  // Validation et passage à la question suivante
  const handleNext = useCallback(() => {
    setError('')
    
    let finalAnswer = answers[question.id]
    
    if (question.type === 'qcm-multiple') {
      if (!multipleAnswers.length && !question.isOptional) {
        return setError("Veuillez sélectionner au moins une option")
      }
      finalAnswer = multipleAnswers.join(', ')
    }
    
    const needsManualInput = question.type === 'text' || 
      (finalAnswer === 'Autre') ||
      (question.type === 'qcm-multiple' && multipleAnswers.includes('Autre'))
    
    if (!question.isOptional && (!finalAnswer || (needsManualInput && !inputValue.trim()))) {
      return setError("Veuillez compléter votre réponse pour continuer")
    }
    
    // Construire la réponse finale
    const updatedAnswers = { ...answers }
    if (question.type === 'qcm-multiple') {
      updatedAnswers[question.id] = finalAnswer
    } else if (needsManualInput && inputValue.trim()) {
      updatedAnswers[question.id] = inputValue.trim()
    }
    
    setAnswers(updatedAnswers)
    setInputValue('')
    setMultipleAnswers([])

    if (currentQ === auditQuestions.length - 1) {
      handleSubmit(updatedAnswers)
    } else {
      setCurrentQ(prev => prev + 1)
    }
  }, [answers, multipleAnswers, inputValue, currentQ, question])

  // Passer une question optionnelle
  const handleSkip = useCallback(() => {
    setError('')
    setInputValue('')
    setMultipleAnswers([])
    
    const updatedAnswers = { ...answers, [question.id]: 'Non répondu' }
    setAnswers(updatedAnswers)
    
    if (currentQ === auditQuestions.length - 1) {
      handleSubmit(updatedAnswers)
    } else {
      setCurrentQ(prev => prev + 1)
    }
  }, [currentQ, answers, question])

  // Soumission finale avec intégration backend (dev + prod)
const handleSubmit = useCallback(async (finalAnswers) => {
  setStep("loading");

  // 1) On récupère l’URL de l’API dans l’env (Vite injecte VITE_API_URL)
  const isLocal = window.location.hostname === "localhost";
  const API = 
  import.meta.env.VITE_API_URL ??
  (window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : window.location.origin); // fallback HTTPS même domaine

  try {
    const response = await fetch(`${API}/api/generate-audit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: userInfo,
        answers: finalAnswers,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur serveur: ${response.status} – ${errorText}`);
    }

    const { report, pdf_url } = await response.json();
    setReport(report);
    setPdfUrl(pdf_url.startsWith("http") ? pdf_url : `${API}${pdf_url}`); // lien absolu
    setStep("completed");
  } catch (err) {
    console.error("Erreur lors de la soumission:", err);
    setError(`Erreur lors de la génération du rapport: ${err.message}`);
    setStep("audit");
  }
}, [userInfo]);


  // Téléchargement du rapport PDF depuis le backend
  // Ouvrir le PDF dans un nouvel onglet
const handleDownload = useCallback(async () => {
  setIsDownloading(true);

  // URL backend (définie dans .env) - fallback localhost pour dev
  const isLocal = window.location.hostname === "localhost";
  const API = 
  import.meta.env.VITE_API_URL ??
  (window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : window.location.origin); // fallback HTTPS même domaine

  try {
    // Si pdfUrl est déjà absolu (commence par http), on l’utilise tel quel
    const urlToOpen = pdfUrl.startsWith("http")
      ? pdfUrl
      : `${API}${pdfUrl}`;

    window.open(urlToOpen, "_blank");
  } catch (err) {
    console.error("Erreur téléchargement:", err);
    setError("Erreur lors du téléchargement du rapport");
  } finally {
    setIsDownloading(false);
  }
}, [pdfUrl]);


  // === RENDU CONDITIONNEL ===
  if (step === 'landing') {
    return <LandingPage onStart={handleStart} />
  }
  
  if (step === 'rgpd') {
    return (
      <RGPDWelcome 
        onAccept={handleRGPD} 
        userInfo={userInfo} 
        setUserInfo={setUserInfo} 
        error={error} 
        setError={setError} 
      />
    )
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center p-8">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="mb-6"
          >
            <BrainCircuit className="w-16 h-16 mx-auto text-blue-400" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">Analyse en cours...</h2>
          <p className="text-slate-400 text-lg mb-8">Notre IA génère votre rapport personnalisé</p>
          <div className="w-64 mx-auto bg-slate-700 rounded-full h-3">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (step === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center p-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="bg-green-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-400" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Merci {userInfo.name} !
          </h2>
          
          <p className="text-slate-300 mb-8 text-xl">
            Votre audit d'automatisation personnalisé est prêt
          </p>

          <ReportPreview
          report={report}
          userInfo={userInfo}
          date={new Date().toLocaleDateString()}
          />

          
          <motion.button
            onClick={handleDownload}
            disabled={isDownloading || !pdfUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-800 disabled:to-blue-900 rounded-xl text-white font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            {isDownloading ? (
              <>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
                Téléchargement...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Télécharger le rapport PDF
              </>
            )}
          </motion.button>
          
          <p className="text-slate-400 text-sm mt-4">
            Le rapport sera ouvert dans un nouvel onglet
          </p>
        </div>
      </div>
    )
  }

  // === QUESTIONNAIRE ===
  if (!question) return null

  const showOtherInput = question.allowOther && answers[question.id] === 'Autre'
  const hasMultipleOther = question.type === 'qcm-multiple' && multipleAnswers.includes('Autre')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 p-6">
      <div className="text-white max-w-4xl mx-auto py-8">
        {/* Barre de progression améliorée */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-slate-400">
              Question {currentQ + 1} sur {auditQuestions.length}
            </span>
            <span className="text-sm text-slate-400">
              {Math.round(progressPercent)}% complété
            </span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div 
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          {Icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <Icon className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>
          )}
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {question.question}
          </h3>
          
          {question.isOptional && (
            <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full mb-4">
              optionnel
            </span>
          )}
          
          {question.description && (
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              {question.description}
            </p>
          )}
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.ul 
            className="space-y-3 mb-6"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {question.options?.map((option) => (
              <QCMOption
                key={option}
                option={option}
                onSelect={handleSelect}
                isSelected={
                  question.type === 'qcm-multiple'
                    ? multipleAnswers.includes(option)
                    : answers[question.id] === option
                }
                isMultiple={question.type === 'qcm-multiple'}
              />
            ))}
            
            {question.allowOther && (
              <QCMOption
                option="Autre"
                onSelect={handleSelect}
                isSelected={
                  question.type === 'qcm-multiple'
                    ? multipleAnswers.includes('Autre')
                    : answers[question.id] === 'Autre'
                }
                isMultiple={question.type === 'qcm-multiple'}
              />
            )}
          </motion.ul>
        </motion.div>

        {/* Section réponse manuelle */}
        <AnimatePresence>
          <ManualResponseSection
            question={question}
            inputValue={inputValue}
            setInputValue={setInputValue}
            showOtherInput={showOtherInput}
            multipleAnswers={multipleAnswers}
          />
        </AnimatePresence>

        {/* Message d'erreur */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-400">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Boutons de navigation */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            {currentQ > 0 && (
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </motion.button>
            )}
            
            {question.isOptional && (
              <motion.button
                onClick={handleSkip}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded-xl font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <SkipForward className="w-4 h-4" />
                Passer
              </motion.button>
            )}
          </div>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25"
          >
            {currentQ === auditQuestions.length - 1 ? 'Terminer l\'audit' : 'Suivant'}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default AuditAgent