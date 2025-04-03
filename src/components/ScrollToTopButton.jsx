import { FaArrowUp } from 'react-icons/fa'; // Vous pouvez aussi utiliser FiArrowUp de react-icons

const ScrollToTopButton = () => {
  return (
    <button 
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      aria-label="Retour en haut"
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
