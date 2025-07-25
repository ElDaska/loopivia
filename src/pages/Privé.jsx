import FooterLoopivia from "../components/Footer";
import { 
  ArrowLeft, 
  Shield, 
  Users, 
  Database, 
  Settings, 
  Cookie, 
  Server, 
  Share2, 
  Scale, 
  RefreshCw,
  Eye,
  Lock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      id: "qui-sommes-nous",
      title: "Qui sommes-nous ?",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "blue",
      content: (
        <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <strong className="text-blue-300">Loopivia</strong> est une plateforme d'automatisation et d'intelligence artificielle 
                spécialement conçue pour accompagner les entrepreneurs, TPE, PME et professionnels francophones 
                dans leur transformation digitale.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "donnees-collectees",
      title: "Quelles données collectons-nous ?",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "green",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="font-semibold text-green-300 text-sm sm:text-base">Données de contact</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Nom, email, entreprise collectés lors du remplissage de formulaires
              </p>
            </div>
            
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="font-semibold text-green-300 text-sm sm:text-base">Données de navigation</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Pages visitées, durée de visite via cookies et analytics
              </p>
            </div>
            
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="font-semibold text-green-300 text-sm sm:text-base">Infos techniques</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Type de navigateur, appareil utilisé, système d'exploitation
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "utilisation-donnees",
      title: "Comment utilisons-nous vos données ?",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "purple",
      content: (
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">Fournir et améliorer nos services</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">Vous contacter si nécessaire</span>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">Analyser et optimiser l'expérience utilisateur</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">Répondre à nos obligations légales</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "cookies",
      title: "Cookies & statistiques",
      icon: <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "orange",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Loopivia utilise des cookies pour le fonctionnement du site et, avec votre accord, 
                  pour les statistiques de fréquentation (Google Analytics, etc.).
                </p>
                <div className="bg-orange-800/30 rounded-lg p-3 sm:p-4 border border-orange-600/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-orange-400" />
                    <span className="font-medium text-orange-300 text-sm sm:text-base">Gestion des cookies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Vous pouvez accepter ou refuser les cookies à tout moment via le bandeau 
                    d'information affiché lors de votre première visite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "stockage",
      title: "Où sont stockées vos données ?",
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "cyan",
      content: (
        <div className="bg-cyan-900/20 border border-cyan-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Server className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-cyan-300">Union Européenne</h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Vos données sont hébergées dans l'Union Européenne et protégées par des 
                mesures de sécurité appropriées conformes au RGPD.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300 font-medium">Chiffrement et sécurisation</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "partage",
      title: "Partage de données",
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "red",
      content: (
        <div className="space-y-4">
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-300 mb-2 text-sm sm:text-base">Engagement de confidentialité</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Vos données ne sont <span className="font-bold text-red-300">jamais vendues</span>. 
                  Elles peuvent être partagées uniquement dans les cas suivants :
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-red-800/20 rounded-lg p-3 sm:p-4 border border-red-600/20">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="w-4 h-4 text-red-400" />
                  <span className="font-medium text-red-300 text-sm sm:text-base">Prestataires techniques</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Hébergement, services email pour le bon fonctionnement du service
                </p>
              </div>
              
              <div className="bg-red-800/20 rounded-lg p-3 sm:p-4 border border-red-600/20">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-4 h-4 text-red-400" />
                  <span className="font-medium text-red-300 text-sm sm:text-base">Obligations légales</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  En cas de demande judiciaire ou administrative
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "droits-rgpd",
      title: "Vos droits (RGPD)",
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "indigo",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                </div>
                <h4 className="font-semibold text-indigo-300 mb-2 text-sm sm:text-base">Accès & Modification</h4>
                <p className="text-xs sm:text-sm text-gray-400">Consultez et modifiez vos données</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                </div>
                <h4 className="font-semibold text-indigo-300 mb-2 text-sm sm:text-base">Opposition</h4>
                <p className="text-xs sm:text-sm text-gray-400">Refusez certains traitements</p>
              </div>
              
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                </div>
                <h4 className="font-semibold text-indigo-300 mb-2 text-sm sm:text-base">Portabilité</h4>
                <p className="text-xs sm:text-sm text-gray-400">Récupérez vos données</p>
              </div>
            </div>
            
            <div className="bg-indigo-800/30 rounded-lg p-4 sm:p-5 border border-indigo-600/20">
              <h4 className="font-semibold text-indigo-300 mb-3 text-sm sm:text-base">Contact pour exercer vos droits</h4>
              <p className="text-gray-300 mb-3 text-sm sm:text-base">
                Pour exercer vos droits ou toute question concernant vos données personnelles :
              </p>
              <a 
                href="mailto:contact@loopivia.com" 
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-sm sm:text-base break-all sm:break-normal"
              >
                <span>contact@loopivia.com</span>
                <ArrowLeft className="w-4 h-4 rotate-180 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "modifications",
      title: "Modifications",
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "gray",
      content: (
        <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Nous nous réservons le droit de mettre à jour cette politique de confidentialité. 
                La date de dernière mise à jour sera toujours clairement indiquée.
              </p>
              <div className="mt-4 p-3 bg-gray-700/30 rounded-lg border border-gray-600/20">
                <p className="text-xs sm:text-sm text-gray-400">
                  En cas de modification substantielle, nous vous en informerons par email 
                  ou via une notification sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      cyan: "from-cyan-500 to-cyan-600",
      red: "from-red-500 to-red-600",
      indigo: "from-indigo-500 to-indigo-600",
      gray: "from-gray-500 to-gray-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Header avec breadcrumb */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <span>Accueil</span>
              <span>/</span>
              <span className="text-blue-400">Politique de confidentialité</span>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-medium text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          {/* En-tête */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center sm:text-left">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Cette politique décrit comment Loopivia collecte, utilise, protège et partage vos données 
              lorsque vous utilisez notre site ou nos services.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Navigation rapide</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0">
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors line-clamp-2">
                        {section.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8 sm:space-y-12">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="group scroll-mt-20"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r opacity-20 rounded-xl group-hover:opacity-30 transition-opacity flex-shrink-0">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <span className="text-xs sm:text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded w-fit">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:ml-16">
                    {section.content}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer de section */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-700">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-2">
                <RefreshCw className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">Dernière mise à jour</span>
              </div>
              <p className="text-gray-400 text-base sm:text-lg font-medium">
                {new Date('2025-07-23').toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <FooterLoopivia />
    </div>
  );
};

export default Privacy;