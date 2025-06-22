// src/components/FloatingAuditButton.jsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const FloatingAuditButton = () => {
  // On retire la div de positionnement 'fixed'
  return (
    <Link to="/audit" aria-label="Lancer l'audit IA">
      <motion.div
        className="relative group"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      >
        {/* Label contextuel (inchangé) */}
        <motion.div
            className="absolute right-full mr-4 px-3 py-2 bg-slate-800 text-white text-sm font-semibold rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            Lancer votre audit IA
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-slate-800 transform rotate-45 -translate-y-1/2" />
        </motion.div>

        {/* Le bouton principal (inchangé) */}
        <motion.button
          className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30"
          whileHover={{ scale: 1.1, boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <Bot className="w-8 h-8 text-white" />
          </motion.div>
          <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
          />
        </motion.button>
      </motion.div>
    </Link>
  );
};

export default FloatingAuditButton;