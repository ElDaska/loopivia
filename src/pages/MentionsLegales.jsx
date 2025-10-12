import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Globe, Shield, FileText, User, Server, ChevronRight, ExternalLink, Check } from "lucide-react";
import Footer from "../components/Footer";

const MentionsLegales = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);

      // Détection de la section active
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = null;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3) {
          currentSection = section.getAttribute('data-section');
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: "editeur",
      title: "Éditeur du site",
      icon: <User className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      content: (
        <div className="space-y-8">
          {/* Carte identité principale */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 p-6 sm:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ElHadji Balla Diop</h3>
                  <p className="text-blue-300 font-medium">Fondateur & CEO</p>
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Statut juridique</p>
                  <p className="text-white font-medium">Auto-entrepreneur</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Enregistrement</p>
                  <p className="text-white font-medium">Registre National</p>
                </div>
              </div>
            </div>
          </div>

          {/* Identifiants légaux */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <h4 className="text-lg font-bold text-white">Identifiants légaux</h4>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Identifiant de l'auto-entrepreneur", value: "003083746000069" },
                  { label: "Activité exercée", value: "20015" },
                  { label: "Identifiant fiscal", value: "52468286" },
                  { label: "Taxe professionnelle", value: "13101965" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                    <span className="text-gray-400 text-sm font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-white text-sm">{item.value}</span>
                      <Check className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <h4 className="text-lg font-bold text-white">Coordonnées</h4>
              </div>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=8+Rue+Ibn+Taymiya+Fès" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">8 Rue Ibn Taymiya</p>
                    <p className="text-sm text-gray-400">30000 Fès, Maroc</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>

                <a href="mailto:contact@loopivia.com" 
                   className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors break-all">
                      contact@loopivia.com
                    </p>
                    <p className="text-sm text-gray-400">Support & Contact</p>
                  </div>
                </a>

                <a href="tel:+2120712217196" 
                   className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">+212 07 12 21 71 96</p>
                    <p className="text-sm text-gray-400">Téléphone direct</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "hebergement",
      title: "Hébergement",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      content: (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-purple-500/20 p-6 sm:p-8">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col sm:flex-row items-start gap-6">
            <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl border border-gray-800">
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Vercel, Inc.</h4>
                <p className="text-gray-400">Cloud Infrastructure Platform</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Localisation</p>
                  <p className="text-sm text-gray-300">340 S Lemon Ave #4133</p>
                  <p className="text-sm text-gray-300">West Covina, CA 91791, USA</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Infrastructure</p>
                  <p className="text-sm text-gray-300">Edge Network Global</p>
                  <a href="https://vercel.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    <Globe className="w-4 h-4" />
                    <span>vercel.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "propriete",
      title: "Propriété intellectuelle",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      content: (
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 p-6 sm:p-8">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-gray-300 leading-relaxed">
                  L'ensemble des contenus présents sur ce site (textes, images, logos, charte graphique, 
                  code source, design, architecture technique) est protégé par le droit de la propriété 
                  intellectuelle et appartient exclusivement à Loopivia.
                </p>
                <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <div className="text-amber-400 mt-0.5">⚠️</div>
                  <p className="text-sm text-gray-300">
                    Toute reproduction, distribution, modification ou utilisation commerciale 
                    sans autorisation écrite préalable est strictement interdite et passible de poursuites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "responsabilite",
      title: "Limitation de responsabilité",
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      content: (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent border border-orange-500/20 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-orange-400" />
            </div>
            <div className="space-y-4 flex-1">
              <p className="text-gray-300 leading-relaxed">
                Les informations diffusées sur ce site sont fournies à titre purement indicatif 
                et ne sauraient engager la responsabilité de l'éditeur.
              </p>
              <ul className="space-y-2">
                {[
                  "Nous nous efforçons de maintenir l'exactitude des informations",
                  "Aucune garantie n'est donnée quant à l'exhaustivité du contenu",
                  "L'utilisateur reste seul responsable de l'interprétation des données"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "donnees",
      title: "Protection des données",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      content: (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-indigo-500/20 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="space-y-4 flex-1">
                <h4 className="text-xl font-bold text-white">Vos droits RGPD</h4>
                <p className="text-gray-300 leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez des droits suivants :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Droit d'accès",
                    "Droit de rectification",
                    "Droit à l'effacement",
                    "Droit à la portabilité",
                    "Droit d'opposition",
                    "Droit de limitation"
                  ].map((right, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{right}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 p-4 bg-indigo-500/20 border border-indigo-500/30 rounded-xl mt-4">
                  <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Pour exercer vos droits, contactez-nous :</p>
                    <a href="mailto:contact@loopivia.com" 
                       className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">
                      contact@loopivia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(`[data-section="${id}"]`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation sticky */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 flex-shrink-0">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-white">Mentions légales</span>
            </div>
            <div className="flex items-center gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {section.icon}
                  <span className="hidden sm:inline">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm text-blue-300 font-medium">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mentions légales
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transparence totale sur notre structure juridique, nos engagements et vos droits. 
              Parce que la confiance se construit sur la clarté.
            </p>
          </div>
        </section>

        {/* Navigation Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative overflow-hidden p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105 ${
                  activeSection === section.id ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                    {section.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Sections Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
          {sections.map((section, index) => (
            <article
              key={section.id}
              data-section={section.id}
              className="group scroll-mt-24"
            >
              <div className="space-y-6">
                {/* Section Header */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-xl flex-shrink-0`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-gray-500 bg-slate-800 px-2 py-1 rounded">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent"></div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className="pl-0 sm:pl-20">
                  {section.content}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Footer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border border-blue-500/20 p-8 sm:p-12">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Des questions ?
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos interrogations 
                concernant nos mentions légales ou vos droits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:contact@loopivia.com" 
                   className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all">
                  <Mail className="w-5 h-5" />
                  <span>Nous contacter</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+2120712217196" 
                   className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700">
                  <Phone className="w-5 h-5" />
                  <span>+212 07 12 21 71 96</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
};

export default MentionsLegales;