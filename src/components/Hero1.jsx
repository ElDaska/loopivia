import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage"; // ✅ Ton image animée

const Hero = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte à gauche avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Automatisez, Accélérez, <br /> Gagnez un temps fou.
          </h1>
          <p className="text-gray-300">
            Automatisez votre business en toute simplicité avec Loopivia. Pensé pour les PME, freelances, TPE et indépendants
            <br />
            Nous connectons vos outils, alimentons vos process avec l’IA,
            et mettons votre business en pilote automatique.
          </p>
          <p className="text-blue-400 font-medium">
          gagnez du temps, réduisez vos coûts et boostez votre croissance grâce à nos outils d’automatisation sur-mesure.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Demander un audit gratuit
          </Link>
        </motion.div>

        {/* Image animée à droite */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
