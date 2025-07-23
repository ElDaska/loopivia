import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Globe, Shield, FileText, User, Server } from "lucide-react";

const MentionsLegales = () => {
  const sections = [
    {
      id: "editeur",
      title: "Éditeur du site",
      icon: <User className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Nom</span>
              </div>
              <p className="text-lg font-medium">ElHadji Balla Diop</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Statut</span>
              </div>
              <p className="text-lg">Auto‑entrepreneur inscrit au Registre National</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Identifiants</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Auto‑entrepreneur</span>
                  <span className="font-mono">003083746000069</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Centre de Formalités</span>
                  <span className="font-mono">C023175E</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Identifiant fiscal</span>
                  <span className="font-mono">52468286</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Taxe professionnelle</span>
                  <span className="font-mono">13101965</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>8 Rue Ibn Taymiya, 30000 Fès, Maroc</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:contact@loopivia.com" 
                     className="text-blue-400 hover:text-blue-300 transition-colors">
                    contact@loopivia.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+2120712217196" 
                     className="text-blue-400 hover:text-blue-300 transition-colors">
                    +212 07 12 21 71 96
                  </a>
                </div>
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
      content: (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">▲</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Vercel, Inc.</h4>
              <p className="text-gray-400 text-sm">340 S Lemon Ave #4133, West Covina, CA 91791, USA</p>
              <a href="https://vercel.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                <Globe className="w-4 h-4" />
                vercel.com
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "propriete",
      title: "Propriété intellectuelle",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 leading-relaxed">
                  L'ensemble des contenus (textes, images, logos, charte graphique, code source…) 
                  publiés sur ce site est protégé par le droit de la propriété intellectuelle.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Toute reproduction, distribution ou modification sans autorisation écrite 
                  préalable de l'éditeur est strictement interdite.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "responsabilite",
      title: "Responsabilité",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed">
              Les informations fournies sur ce site sont données à titre purement indicatif. 
              L'éditeur ne pourra être tenu responsable des erreurs, omissions ou d'une 
              mauvaise interprétation des informations publiées.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "champ",
      title: "Champ d'application",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed">
              Ce site et ses services s'adressent à l'ensemble des pays francophones du monde.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "donnees",
      title: "Données personnelles",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 leading-relaxed">
                Vous disposez d'un droit d'accès, de rectification et de suppression 
                de vos données personnelles.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                Pour exercer ce droit, contactez-nous à{' '}
                <a href="mailto:contact@loopivia.com" 
                   className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  contact@loopivia.com
                </a>
              </p>
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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Accueil</span>
            <span>/</span>
            <span className="text-blue-400">Mentions légales</span>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Mentions légales
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Informations légales obligatoires concernant l'édition et l'hébergement de ce site web
          </p>
        </div>

        {/* Navigation rapide */}
        <div className="mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Navigation rapide</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300">
                    {section.icon}
                  </div>
                  <span className="text-sm font-medium group-hover:text-white transition-colors">
                    {index + 1}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="group scroll-mt-20"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <div className="ml-16">
                  {section.content}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer de section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MentionsLegales;