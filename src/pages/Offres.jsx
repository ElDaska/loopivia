import React, { useState, useCallback, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { Zap, Rocket, Crown, ArrowRight, Check, Sparkles, Info } from "lucide-react";
import { Link } from "react-router-dom";
import FooterLoopivia from "../components/Footer";

// DRY: Configuration des devises
const CURRENCIES = [
  { code: "EUR", symbol: "€", name: "Euro", rate: 1 },
  { code: "USD", symbol: "$", name: "Dollar", rate: 1.14 },
  { code: "MAD", symbol: "DH", name: "Dirham", rate: 10.48 },
  { code: "XOF", symbol: "CFA", name: "Franc CFA", rate: 655.95 },
  { code: "CAD", symbol: "$", name: "Dollar canadien", rate: 1.56 },
];

// DRY: Offres
const OFFERS = [
  {
    id: "solo-boost",
    icon: Zap,
    title: "Solo Boost",
    price: 297,
    installments: null,
    tag: "Populaire",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
    shadow: "blue-500/25",
    description: "Idéal pour les freelances et solopreneurs...",
    highlights: ["Économisez 5h/semaine", "ROI en 2 semaines", "Setup en 24h"],
    details: [
      "1 automatisation personnalisée",
      "Mini CRM Notion inclus",
      "Messages IA générés automatiquement",
      "Vidéo explicative + support 7 jours",
    ],
    cta: "Commencer maintenant",
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
    shadow: "purple-500/25",
    description: "Parfait pour les indépendants confirmés...",
    highlights: ["Économisez 15h/semaine", "ROI en 1 mois", "3 automatisations"],
    details: [
      "3 automatisations IA complètes",
      "Dashboard Notion personnalisé",
      "Intégrations Make ou n8n",
      "Support 15 jours + 1 modif gratuite",
    ],
    cta: "Choisir Flow Pro",
  },
  {
    id: "master-ops",
    icon: Crown,
    title: "Master Ops",
    price: 1990,
    installments: { count: 4, amount: 550 },
    tag: "Premium",
    popular: false,
    gradient: "from-amber-500 to-orange-500",
    shadow: "amber-500/25",
    description: "La Formule Premium. Pour agences, SaaS...",
    highlights: ["Économisez 30h/semaine", "ROI en 6 semaines", "Agent IA inclus"],
    details: [
      "7 automatisations IA avancées",
      "Agent IA intelligent",
      "Stratégie complète + support 30 jours",
      "Dashboard + documentation pro",
    ],
    cta: "Découvrir Master Ops",
  },
];

// Bouton devise
const CurrencyButton = memo(({ currency, selected, onClick }) => (
  <button
    onClick={() => onClick(currency.code)}
    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
      selected
        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400 shadow-lg scale-105"
        : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white"
    }`}
    aria-pressed={selected}
    aria-label={`Changer la devise vers ${currency.name}`}
  >
    {currency.code} {currency.symbol}
  </button>
));
CurrencyButton.displayName = "CurrencyButton";

// Carte prix
const PricingCard = memo(({ offer, currency, isPopular }) => {
  const Icon = offer.icon;
  // Conversion arrondie SANS virgule
  const convert = useCallback(
    (value) => Math.round(value * currency.rate),
    [currency]
  );

  // CSS dynamiques
  const ctaClasses = useMemo(
    () =>
      `w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        isPopular
          ? `bg-gradient-to-r ${offer.gradient} hover:shadow-xl hover:shadow-${offer.shadow} focus:ring-purple-400`
          : "bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 focus:ring-gray-400"
      }`,
    [isPopular, offer.gradient, offer.shadow]
  );

  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`relative group ${isPopular ? "lg:scale-105 lg:-mt-4" : ""}`}
      aria-labelledby={`offer-title-${offer.id}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div
            className={`bg-gradient-to-r ${offer.gradient} px-4 py-1 rounded-full text-white text-sm font-semibold shadow-lg flex items-center gap-1`}
          >
            <Sparkles className="w-3 h-3" />
            {offer.tag}
          </div>
        </div>
      )}
      <div className="relative p-8 h-full flex flex-col">
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${offer.gradient} p-4 shadow-lg`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
        <header className="text-center mb-6">
          <h2 id={`offer-title-${offer.id}`} className="text-2xl font-bold text-white mb-2">
            {offer.title}
          </h2>
          <div className="mb-3">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {convert(offer.price)}
            </span>
            <span className="text-gray-400 text-sm ml-1">{currency.symbol}</span>
          </div>
          {offer.installments && (
            <p className="text-xs text-gray-400 mb-3">
              ou {offer.installments.count}× {convert(offer.installments.amount)}
              {currency.symbol}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {offer.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
              >
                {highlight}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {offer.description}
          </p>
        </header>
        <div className="flex-grow mb-8">
          <ul className="space-y-3">
            {offer.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-r ${offer.gradient} p-1 flex-shrink-0 mt-0.5`}
                >
                  <Check className="w-full h-full text-white" />
                </div>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/contact" className="block w-full">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={ctaClasses}>
            {offer.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.article>
  );
});
PricingCard.displayName = "PricingCard";

// Composant principal
const OffresLoopivia = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const currency = useMemo(
    () => CURRENCIES.find((c) => c.code === selectedCurrency),
    [selectedCurrency]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      <main className="flex-grow">
        <section className="py-20 md:py-32" aria-labelledby="offers-title">
          <div className="max-w-7xl mx-auto px-6">
            {/* En-tête */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h1 id="offers-title" className="text-5xl md:text-7xl font-black mb-6">
                Nos Offres{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Loopivia
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choisissez le pack qui correspond à votre maturité digitale.
                Prix transparents avec conversion automatique dans votre devise.
              </p>
            </motion.header>
            {/* Sélecteur de devise */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-14 flex-wrap" role="tablist">
              {CURRENCIES.map((curr) => (
                <CurrencyButton
                  key={curr.code}
                  currency={curr}
                  selected={curr.code === selectedCurrency}
                  onClick={setSelectedCurrency}
                />
              ))}
            </div>
            {/* Grille offres */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            >
              {OFFERS.map((offer) => (
                <PricingCard
                  key={offer.id}
                  offer={offer}
                  currency={currency}
                  isPopular={offer.popular}
                />
              ))}
            </motion.div>
            {/* CTA final */}
            <motion.footer
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59,130,246,0.3)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <Sparkles className="w-5 h-5" />
                  Discutons de votre projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mt-4">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" />
                  Consultation gratuite
                </span>
                <span className="flex items-center gap-1">
                  <Info className="w-4 h-4 text-blue-400" />
                  Réponse sous 24h
                </span>
                <span>Sans engagement</span>
              </div>
            </motion.footer>
          </div>
        </section>
      </main>
      <FooterLoopivia />
    </div>
  );
};

export default OffresLoopivia;
