import { useState } from 'react'
import { FileText, ChevronDown, ChevronUp, Sparkles, TrendingUp, Zap } from 'lucide-react'

export default function ReportPreview({ report, userInfo, date }) {
  const [expanded, setExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  if (!report) return null

  // Intro (1er paragraphe) + 3 points clés
  const intro = report?.split('\n\n')[0]?.replace(/(^#+\s*)|(\*\*|>)/g, '')?.trim() || "Rapport d'analyse avancée généré par notre IA de nouvelle génération"
  const highlights = report
    ?.split('\n')
    ?.filter(line => line.trim().startsWith('-'))
    ?.slice(0, 3)
    ?.map(l => l.replace(/^-+\s*/, '').replace(/\*\*/g, '').trim()) || [
    "Analyse prédictive basée sur 10M+ de points de données",
    "Recommandations personnalisées avec 94% de précision",
    "Insights actionables générés en temps réel"
  ]

  return (
    <div 
      className="relative mx-auto max-w-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-purple-500/25">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_26%,rgba(255,255,255,0.1)_27%,transparent_28%,transparent_74%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%)] bg-[length:20px_20px] animate-pulse" />
        </div>

        {/* Top Gradient Bar */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
        
        <div className="relative p-6 sm:p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-md opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-2xl">
                  <FileText className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                {isHovered && (
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-bounce" />
                  </div>
                )}
              </div>
              <div>
                <h5 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-1">
                  Rapport Intelligent
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Généré par IA avancée
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setExpanded(e => !e)}
              className="group/btn relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-white/10 hover:border-white/20 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:scale-105 self-start"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2 text-white font-medium">
                <span className="text-sm">{expanded ? 'Réduire' : 'Développer'}</span>
                <div className="transition-transform duration-300 group-hover/btn:scale-110">
                  {expanded
                    ? <ChevronUp className="w-4 h-4" />
                    : <ChevronDown className="w-4 h-4" />
                  }
                </div>
              </div>
            </button>
          </div>

          {/* Metadata Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { label: 'Entreprise', value: userInfo?.company || '—', icon: TrendingUp },
              { label: 'Utilisateur', value: userInfo?.name || 'Utilisateur', icon: Sparkles },
              { label: 'Généré le', value: date || new Date().toLocaleDateString('fr-FR'), icon: Zap }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group/card bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/5 rounded-2xl p-3 sm:p-4 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl flex-shrink-0">
                    <item.icon className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">{item.label}</p>
                    <p className="text-sm text-white font-semibold truncate">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expandable Intro Section */}
          <div 
            className={`overflow-hidden transition-all duration-700 ease-out ${
              expanded ? 'max-h-96 opacity-100 mb-6 sm:mb-8' : 'max-h-0 opacity-0 mb-0'
            }`}
          >
            <div className="relative bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-white/10 rounded-2xl p-4 sm:p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl" />
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                {intro}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3 sm:space-y-4">
            <h6 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              Points Clés
            </h6>
            
            {highlights.map((text, i) => (
              <div 
                key={i}
                className="group/item relative bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-white/5 rounded-2xl p-4 sm:p-5 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:translate-x-2"
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="relative mt-1 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-50 group-hover/item:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                      {text}
                    </p>
                  </div>
                  
                  <div className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/item:translate-x-0 flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Rapport actualisé en temps réel</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>IA v4.0</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>94% précision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}