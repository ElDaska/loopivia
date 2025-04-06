// 📬 NewsletterForm.jsx - Formulaire connecté à Apps Script
import { useState } from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbywuHVzdrs9kM-SFPZFC7-lvenIfq8yQB0bt_HR7b9XKrjRDHuoPh1WApeXHOIGxOUr/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email
        })
      });

      const result = await response.text();
      setMessage(result);
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section className="bg-[#0f172a] py-12 px-6 text-center animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Abonnez-vous gratuitement à la newsletter Loopivia
      </h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Votre prénom ou nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium"
        >
          S’inscrire
        </button>
      </form>
      {submitted && message && (
        <p className="text-green-400 mt-4">{message}</p>
      )}
    </section>
  );
};