// src/config/siteConfig.js

import { Rocket, Satellite, Database, Zap, Settings, ArrowRight } from 'lucide-react';

// Configuration pour le Header
export const navItems = [
  { label: "Blog", path: "/blog" },
  { label: "Offres", path: "/offres-loopivia" },
  { label: "Pourquoi Automatiser?", path: "/pourquoi-automatiser" },
  { label: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
  { label: "Contact", path: "/contact" },
];

// Configuration pour la section Workflow
export const workflowNodes = [
    { id: 'data-collection', icon: Database, title: 'Collecte de Données', description: 'Acquisition auto des données de vol.', position: { x: 10, y: 50 } },
    { id: 'processing', icon: Settings, title: 'Traitement', description: 'Analyse et validation des paramètres.', position: { x: 35, y: 25 } },
    { id: 'optimization', icon: Zap, title: 'Optimisation', description: 'Optimisation des trajectoires.', position: { x: 60, y: 50 } },
    { id: 'simulation', icon: Satellite, title: 'Simulation', description: 'Simulation de mission spatiale.', position: { x: 35, y: 75 } },
    { id: 'launch', icon: Rocket, title: 'Lancement', description: 'Exécution de la mission.', position: { x: 85, y: 50 } },
];

export const workflowConnections = [
    { from: 'data-collection', to: 'processing' },
    { from: 'processing', to: 'optimization' },
    { from: 'processing', to: 'simulation' },
    { from: 'optimization', to: 'launch' },
    { from: 'simulation', to: 'launch' },
];

export const featureItems = [
    { icon: Zap, title: 'Automatisation Intelligente', description: 'Processus automatisés avec IA pour optimiser les performances.' },
    { icon: Satellite, title: 'Simulation Avancée', description: 'Modélisation précise des missions spatiales et aéronautiques.' },
    { icon: Rocket, title: 'Déploiement Rapide', description: 'Mise en œuvre accélérée des solutions d\'ingénierie.' },
];