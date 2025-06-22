// src/components/FloatingActions.jsx

import FloatingAuditButton from '../components/audit_loopivia/FloatingAuditButton';
import ScrollToTopButton from '../components/ScrollToTopButton';

const FloatingActions = () => {
  return (
    // Ce conteneur est fixé et gère l'alignement
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/*
        Le bouton "Retour en haut" est en premier.
        Il n'apparaîtra que lorsque sa logique interne (le scroll) est satisfaite.
      */}
      <ScrollToTopButton />
      
      {/*
        Le bouton d'audit est en second.
        Il sera toujours visible et positionné en bas de la pile.
      */}
      <FloatingAuditButton />
    </div>
  );
};

export default FloatingActions;