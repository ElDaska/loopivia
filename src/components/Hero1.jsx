import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Texte immersif */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6 text-center md:text-left md:mb-40"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-snug">
            Et si votre business fonctionnait tout seul ?
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            <span className="text-blue-400 font-semibold">Loopivia</span> connecte vos outils préférés à l'intelligence artificielle et à des processus automatisés pour libérer tout le potentiel de votre activité.
          </p>
          <p className="text-blue-400 font-medium italic">
            Réduisez vos tâches, boostez vos résultats.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 transition duration-300 px-6 py-3 rounded-xl text-lg font-semibold shadow-xl"
          >
            Réserver un appel
          </Link>
        </motion.div>

        {/* Image animée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
