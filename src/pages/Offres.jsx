import React, { useState, useCallback, useMemo, memo } from "react";
import { Zap, Rocket, Crown, ArrowRight, Check, Sparkles, Info, Server, Bot, Target, Settings, FileText, Headphones } from "lucide-react";

// Configuration des devises avec taux de change précis
const CURRENCIES = [
  { code: "EUR", symbol: "€", name: "Euro", rate: 1 },
  { code: "USD", symbol: "$", name: "Dollar américain", rate: 1.09 },
  { code: "MAD", symbol: "DH", name: "Dirham marocain", rate: 10.85 },
  { code: "XOF", symbol: "CFA", name: "Franc CFA", rate: 655.95 },
  { code: "CAD", symbol: "C$", name: "Dollar canadien", rate: 1.47 },
  { code: "CHF", symbol: "CHF", name: "Franc suisse", rate: 0.98 },
];

// Configuration des offres
const OFFERS = [
  {
    id: "boost-solo",
    icon: Zap,
    title: "Boost Solo",
    price: 297,
    installments: null,
    tag: "Idéal pour débuter",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
    shadow: "blue-500/30",
    description: "Idéal pour freelances et solopreneurs souhaitant un premier gain de temps rapide.",
    targetAudience: "Freelances • Solopreneurs • Débutants",
    results: {
      timesSaved: "5h par semaine",
      roi: "2 semaines",
      guarantee: "Installation garantie sous 24h"
    },
    features: [
      {
        icon: Settings,
        title: "1 automatisation personnalisée",
        description: "Make ou n8n adaptée à ton besoin immédiat"
      },
      {
        icon: FileText,
        title: "Mini CRM Notion inclus",
        description: "Prêt à l'emploi pour gérer tes clients"
      },
      {
        icon: Bot,
        title: "Messages IA générés automatiquement",
        description: "Emails, posts, prompts personnalisés"
      },
      {
        icon: Info,
        title: "Vidéo explicative complète",
        description: "Pour prise en main autonome"
      },
      {
        icon: Headphones,
        title: "Support technique 7 jours",
        description: "Après livraison pour t'accompagner"
      }
    ],
    cta: "Commencer avec Boost Solo",
  },
  {
    id: "flow-pro",
    icon: Rocket,
    title: "Flow Pro",
    price: 890,
    installments: { count: 3, amount: 330 },
    tag: "Recommandé",
    popular: true,
    gradient: "from-purple-500 to-pink-500",
    shadow: "purple-500/30",
    description: "Parfait pour indépendants confirmés, TPE, petites équipes cherchant un vrai levier d'automatisation.",
    targetAudience: "Indépendants confirmés • TPE • Petites équipes",
    results: {
      timesSaved: "15h par semaine",
      roi: "1 mois",
      guarantee: "1 modification gratuite sous 30 jours"
    },
    features: [
      {
        icon: Settings,
        title: "3 automatisations IA complètes",
        description: "Intégrées dans vos workflows actuels"
      },
      {
        icon: Target,
        title: "Tableau de bord Notion personnalisé",
        description: "Gestion automatisations + KPI"
      },
      {
        icon: Bot,
        title: "Intégrations Make ou n8n",
        description: "Architecture optimale pour vous"
      },
      {
        icon: Check,
        title: "1 modification gratuite",
        description: "Sous 30 jours pour ajustements"
      },
      {
        icon: Headphones,
        title: "Support technique 15 jours",
        description: "Post-livraison pour optimisation"
      }
    ],
    cta: "Choisir Flow Pro",
  },
  {
    id: "maitre-operations",
    icon: Crown,
    title: "Maître des Opérations",
    price: 1990,
    installments: { count: 4, amount: 550 },
    tag: "Premium",
    popular: false,
    gradient: "from-amber-500 to-orange-500",
    shadow: "amber-500/30",
    description: "La formule Premium, conçue pour agences, PME, SaaS, professions libérales structurées voulant un système complet et scalable.",
    targetAudience: "Agences • PME • SaaS • Professions libérales",
    results: {
      timesSaved: "30h par semaine",
      roi: "6 semaines",
      guarantee: "VPS offert 12 mois (valeur ~120€/an)"
    },
    features: [
      {
        icon: Settings,
        title: "7 automatisations IA avancées",
        description: "Construites sur mesure et interconnectées"
      },
      {
        icon: Bot,
        title: "Agent IA intelligent personnalisé",
        description: "Chatbot interne, assistant support ou génération automatisée"
      },
      {
        icon: Target,
        title: "Stratégie complète d'automatisation",
        description: "Analyse process + recommandations optimisées"
      },
      {
        icon: Headphones,
        title: "Accompagnement personnalisé 30 jours",
        description: "Suivi, optimisation continue, mini-formation équipe"
      },
      {
        icon: FileText,
        title: "Tableau de bord Notion complet",
        description: "Documentation pro détaillée incluse"
      },
      {
        icon: Server,
        title: "VPS offert 12 mois",
        description: "Hébergement privé pour vos automates (valeur ~120€/an)"
      }
    ],
    cta: "Découvrir Maître des Opérations",
  },
];

// Composant bouton devise optimisé
const CurrencyButton = memo(({ currency, isSelected, onClick }) => (
  <button
    onClick={() => onClick(currency.code)}
    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
      isSelected
        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400 shadow-lg shadow-blue-500/25 scale-105"
        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105"
    }`}
    aria-pressed={isSelected}
    aria-label={`Changer la devise vers ${currency.name}`}
  >
    <span className="font-bold">{currency.code}</span>
    <span className="ml-1 opacity-75">{currency.symbol}</span>
  </button>
));
CurrencyButton.displayName = "CurrencyButton";

// Composant carte de fonctionnalité
const FeatureItem = memo(({ feature, gradient }) => {
  const Icon = feature.icon;
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${gradient} p-2.5 flex-shrink-0`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
});
FeatureItem.displayName = "FeatureItem";

// Composant carte de prix principal
const PricingCard = memo(({ offer, currency }) => {
  const Icon = offer.icon;
  
  // Fonction de conversion avec arrondi intelligent
  const convertPrice = useCallback(
    (price) => {
      const converted = price * currency.rate;
      // Arrondi intelligent selon la devise
      if (currency.code === 'XOF' || currency.code === 'MAD') {
        return Math.round(converted / 5) * 5; // Arrondi au 5 le plus proche
      }
      return Math.round(converted);
    },
    [currency]
  );

  // Formatage du prix avec séparateurs
  const formatPrice = useCallback(
    (price) => {
      return new Intl.NumberFormat('fr-FR').format(convertPrice(price));
    },
    [convertPrice]
  );

  const isPopular = offer.popular;

  return (
    <div className={`relative group ${isPopular ? 'lg:scale-105 lg:-mt-4' : ''}`}>
      {/* Badge populaire */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className={`bg-gradient-to-r ${offer.gradient} px-6 py-2 rounded-full text-white text-sm font-bold shadow-xl flex items-center gap-2`}>
            <Sparkles className="w-4 h-4" />
            {offer.tag}
          </div>
        </div>
      )}

      {/* Carte principale */}
      <div className={`relative h-full rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ${
        isPopular 
          ? 'bg-gradient-to-br from-white/15 to-white/5 border-white/30 shadow-purple-500/20' 
          : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20'
      }`}>
        
        {/* En-tête avec icône animée */}
        <div className="p-8 text-center">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${offer.gradient} p-5 shadow-lg shadow-${offer.shadow} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-full h-full text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{offer.targetAudience}</p>
          
          {/* Prix principal */}
          <div className="mb-4">
            <div className="flex items-baseline justify-center gap-2">
              <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${offer.gradient}`}>
                {formatPrice(offer.price)}
              </span>
              <span className="text-xl text-gray-400 font-medium">{currency.symbol}</span>
            </div>
            
            {/* Prix en plusieurs fois */}
            {offer.installments && (
              <p className="text-sm text-gray-400 mt-2">
                ou <span className="font-semibold text-white">{offer.installments.count} × {formatPrice(offer.installments.amount)}{currency.symbol}</span>
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {offer.description}
          </p>
        </div>

        {/* Résultats attendus */}
        <div className="px-8 mb-6">
          <div className={`bg-gradient-to-r ${offer.gradient} rounded-xl p-4 text-white`}>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Résultats garantis
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Économisez <strong>{offer.results.timesSaved}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>ROI en <strong>{offer.results.roi}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{offer.results.guarantee}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des fonctionnalités */}
        <div className="px-8 pb-8 space-y-3 flex-grow">
          {offer.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} gradient={offer.gradient} />
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 pt-0">
          <button 
            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
              isPopular
                ? `bg-gradient-to-r ${offer.gradient} hover:shadow-xl hover:shadow-${offer.shadow} focus:ring-purple-400 hover:scale-105`
                : `bg-gradient-to-r ${offer.gradient} hover:shadow-xl hover:shadow-${offer.shadow} focus:ring-blue-400 hover:scale-105`
            }`}
          >
            {offer.cta}
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
});
PricingCard.displayName = "PricingCard";

// Composant principal
const PricingPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  
  const currentCurrency = useMemo(
    () => CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0],
    [selectedCurrency]
  );

  const handleCurrencyChange = useCallback((currencyCode) => {
    setSelectedCurrency(currencyCode);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* En-tête principal */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Titre et description */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Nos Offres{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Loopivia
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Choisissez le pack qui correspond à votre maturité digitale. 
              Prix transparents avec conversion automatique dans votre devise préférée.
            </p>
            
            {/* Badge de confiance */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-12">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Consultation gratuite
              </span>
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                Réponse sous 24h
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Sans engagement
              </span>
            </div>
          </div>

          {/* Sélecteur de devise */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              {CURRENCIES.map((currency) => (
                <CurrencyButton
                  key={currency.code}
                  currency={currency}
                  isSelected={currency.code === selectedCurrency}
                  onClick={handleCurrencyChange}
                />
              ))}
            </div>
          </div>

          {/* Grille des offres */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {OFFERS.map((offer) => (
              <PricingCard
                key={offer.id}
                offer={offer}
                currency={currentCurrency}
              />
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 group">
              <Sparkles className="w-6 h-6" />
              Discutons de votre projet
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
              Vous hésitez encore ? Réservez un appel découverte gratuit de 30 minutes pour identifier 
              les automatisations qui auront le plus d'impact sur votre activité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;