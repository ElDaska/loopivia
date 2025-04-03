/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Si tu veux switcher dark/light plus tard
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#3B82F6', // bleu Tailwind classique
        dark: '#0f172a',
        darker: '#0b1220',
        text: '#E5E7EB',
        accent: '#6366F1', // violet indigo
      },
      boxShadow: {
        xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slide: 'slide 20s linear infinite',  // Ajout de l'animation de défilement
      },
      keyframes: {
        // Animation de défilement horizontal
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
