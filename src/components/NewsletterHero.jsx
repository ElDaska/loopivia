// 📬 Loopivia Newsletter Page - React + Tailwind Components (Refonte + Animations)

// === 1. NewsletterHero.jsx ===
export const NewsletterHero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] text-white py-20 px-6 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
        Recevez nos meilleurs conseils IA & automatisation
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Deux fois par semaine, une dose d'inspiration concrète pour booster votre business sans coder.
      </p>
    </section>
  );
};