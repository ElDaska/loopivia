import React from "react";
import { 
  FileText, 
  Target, 
  Globe, 
  Copyright, 
  Shield, 
  Database, 
  RefreshCw, 
  Mail,
  Clock,
  Zap,
  Lock,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ArrowLeft
} from "lucide-react";

// Composant Footer basique pour la démo
const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-700 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <p className="text-gray-400 text-sm">© 2024 Loopivia. Tous droits réservés.</p>
    </div>
  </footer>
);

const CGU = () => {
  const sections = [
    {
      id: "objet",
      title: "Objet",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "blue",
      content: (
        <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Les présentes Conditions Générales d'Utilisation ont pour objet de définir 
                les modalités et conditions d'accès et d'utilisation du site web et des 
                services proposés par <strong className="text-blue-300">Loopivia</strong>.
              </p>
              <div className="mt-4 p-3 bg-blue-800/30 rounded-lg border border-blue-600/20">
                <p className="text-xs sm:text-sm text-blue-200">
                  En accédant à notre plateforme, vous acceptez de respecter ces conditions 
                  dans leur intégralité.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "acces",
      title: "Accès au service",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "green",
      content: (
        <div className="space-y-4">
          <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="font-semibold text-green-300 mb-2 text-sm sm:text-base">Disponibilité du service</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Le service est accessible gratuitement 24h/24, 7j/7, sauf cas de force majeure, 
                  maintenance programmée ou incidents techniques.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-800/30 rounded-lg p-3 sm:p-4 border border-green-600/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-medium text-green-300 text-sm sm:text-base">Disponibilité</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Service accessible en continu, avec un taux de disponibilité optimal
                </p>
              </div>
              
              <div className="bg-green-800/30 rounded-lg p-3 sm:p-4 border border-green-600/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-medium text-green-300 text-sm sm:text-base">Maintenance</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Interventions programmées avec notification préalable
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-amber-900/20 rounded-lg border border-amber-600/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium text-amber-300 text-sm sm:text-base">Réserve de modification</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">
                Loopivia se réserve le droit de suspendre ou modifier l'accès au service 
                sans préavis en cas de nécessité technique ou légale.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "contenu",
      title: "Utilisation du contenu",
      icon: <Copyright className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "purple",
      content: (
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Copyright className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
            <div className="space-y-4 min-w-0">
              <div>
                <h4 className="font-semibold text-purple-300 mb-2 text-sm sm:text-base">Propriété intellectuelle</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Tous les contenus disponibles sur Loopivia (textes, images, logos, interfaces, 
                  codes, algorithmes) sont protégés par les droits de propriété intellectuelle.
                </p>
              </div>
              
              <div className="bg-purple-800/30 rounded-lg p-3 sm:p-4 border border-purple-600/20">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="font-medium text-purple-300 text-sm sm:text-base">Restrictions d'usage</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span>Reproduction non autorisée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span>Distribution sans permission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span>Modification des contenus</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-purple-200 bg-purple-800/20 p-3 rounded-lg">
                Toute utilisation commerciale ou redistribution nécessite une autorisation 
                écrite préalable de Loopivia.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "responsabilite",
      title: "Responsabilité",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "orange",
      content: (
        <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
            <div className="space-y-4 min-w-0">
              <div>
                <h4 className="font-semibold text-orange-300 mb-2 text-sm sm:text-base">Limitation de responsabilité</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Loopivia s'engage à fournir un service de qualité mais ne peut être tenue 
                  responsable des dommages directs ou indirects résultant de l'utilisation 
                  de la plateforme.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-800/30 rounded-lg p-3 sm:p-4 border border-orange-600/20">
                  <h5 className="font-medium text-orange-300 mb-2 text-sm">Exclusions de responsabilité</h5>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                      <span>Dysfonctionnements techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                      <span>Utilisation abusive du service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                      <span>Interruptions de service</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-800/30 rounded-lg p-3 sm:p-4 border border-orange-600/20">
                  <h5 className="font-medium text-orange-300 mb-2 text-sm">Engagements</h5>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>Sécurité des données</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>Amélioration continue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>Support utilisateur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "donnees",
      title: "Données personnelles",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "cyan",
      content: (
        <div className="bg-cyan-900/20 border border-cyan-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Database className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
            <div className="space-y-4 min-w-0">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2 text-sm sm:text-base">Protection des données</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  La collecte, le traitement et la protection de vos données personnelles 
                  sont régis par notre politique de confidentialité dédiée.
                </p>
              </div>
              
              <div className="bg-cyan-800/30 rounded-lg p-3 sm:p-4 border border-cyan-600/20">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="font-medium text-cyan-300 text-sm sm:text-base">Conformité RGPD</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-3">
                  Nos pratiques de traitement des données respectent intégralement 
                  le Règlement Général sur la Protection des Données.
                </p>
                <a 
                  href="/politique-de-confidentialite" 
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium break-all"
                >
                  <span>Consulter notre Politique de confidentialité</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "modifications",
      title: "Modification des CGU",
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "indigo",
      content: (
        <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
            <div className="space-y-4 min-w-0">
              <div>
                <h4 className="font-semibold text-indigo-300 mb-2 text-sm sm:text-base">Évolution des conditions</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Loopivia se réserve le droit de modifier les présentes Conditions Générales 
                  d'Utilisation à tout moment pour s'adapter aux évolutions légales, 
                  techniques ou commerciales.
                </p>
              </div>
              
              <div className="bg-indigo-800/30 rounded-lg p-3 sm:p-4 border border-indigo-600/20">
                <h5 className="font-medium text-indigo-300 mb-2 text-sm">Modalités de modification</h5>
                <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Les modifications prennent effet dès leur publication en ligne</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Notification par email en cas de changement substantiel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Historique des versions disponible sur demande</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-indigo-200 bg-indigo-800/20 p-3 rounded-lg">
                La poursuite de l'utilisation du service après modification 
                vaut acceptation des nouvelles conditions.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "emerald",
      content: (
        <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
            <div className="space-y-4 min-w-0">
              <div>
                <h4 className="font-semibold text-emerald-300 mb-2 text-sm sm:text-base">Support et questions</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Pour toute question, remarque ou demande d'information concernant 
                  ces Conditions Générales d'Utilisation, notre équipe support 
                  est à votre disposition.
                </p>
              </div>
              
              <div className="bg-emerald-800/30 rounded-lg p-4 sm:p-5 border border-emerald-600/20">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-emerald-300 text-sm sm:text-base">Email de support</h5>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <a 
                      href="mailto:contact@loopivia.com" 
                      className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-base sm:text-lg break-all"
                    >
                      contact@loopivia.com
                    </a>
                    <p className="text-xs text-gray-400 mt-1">
                      Réponse sous 24h en moyenne
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-xs sm:text-sm text-emerald-200 bg-emerald-800/20 p-3 rounded-lg">
                <strong>Note :</strong> Précisez "CGU" dans l'objet de votre email 
                pour un traitement prioritaire de votre demande.
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header avec breadcrumb */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <span>Accueil</span>
              <span>/</span>
              <span className="text-blue-400 break-words">Conditions Générales d'Utilisation</span>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              <span>Retour à l'accueil</span>
            </a>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Conditions Générales d'Utilisation
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto px-4">
            En utilisant Loopivia, vous acceptez les présentes conditions générales. 
            Merci de les lire attentivement avant d'utiliser nos services.
          </p>
        </div>

        {/* Navigation rapide */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-blue-300">Navigation rapide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                      <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
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
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <div className="ml-0 sm:ml-16">
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
              <span className="text-xs sm:text-sm font-medium text-gray-300">Dernière mise à jour</span>
            </div>
            <p className="text-gray-400 text-base sm:text-lg font-medium">
              {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Version 1.0 
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CGU;