// src/components/HeroImage.jsx
import { motion } from "framer-motion";
import heroImage from "../assets/hero.webp";

const HeroImage = () => {
  return (
    <motion.div
      className="relative w-full max-w-[500px]"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 rounded-2xl blur-3xl bg-blue-500/20 z-0 shadow-[0_0_100px_20px_rgba(99,102,241,0.15)]" />
      <img
        src={heroImage}
        alt="Automatisation IA"
        className="relative z-10 w-full rounded-xl shadow-2xl"
      />
    </motion.div>
  );
};

export default HeroImage;
