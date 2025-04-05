import { useState, useEffect } from "react";
import { FaChevronDown, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const [openSection, setOpenSection] = useState(null);
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyuoBv5-Set7plJI69dnaZpcvDN-iNK6pU_dBFFzRm1DFyz_2zShqcTU-SYsaqn3qx6/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setSubmitted(true);
      setFormData({ nom: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    }
  };

  // Injecte le script Calendly une seule fois
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[rgb(15,23,42)] text-white">
      <section className="text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Contactez-nous</h1>
          <p className="text-lg text-gray-300">Choisissez votre méthode de contact préférée.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-6">
        {[{
          key: "email",
          title: "Par email",
          icon: <FaEnvelope className="text-blue-400 mr-3" />,
          content: (
            <p className="text-gray-300 text-lg">
              Envoyez-nous un message à : <strong>contact@loopivia.com</strong><br />
              Nous répondons sous 24h ouvrées.
            </p>
          ),
        },
        {
          key: "form",
          title: "Formulaire de contact",
          icon: <FaPhone className="text-blue-400 mr-3" />,
          content: submitted ? (
            <span className="text-green-400 font-semibold text-lg">
              Merci pour votre message ! Nous vous contacterons rapidement.
            </span>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-300">Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1f2937] text-white rounded-lg focus:outline-none"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1f2937] text-white rounded-lg focus:outline-none"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1f2937] text-white rounded-lg focus:outline-none"
                  placeholder="Votre message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
              >
                Envoyer
              </button>
            </form>
          ),
        },
        {
          key: "rdv",
          title: "Réserver un rendez-vous",
          icon: <FaCalendarAlt className="text-blue-400 mr-3" />,
          content: (
            <div className="mt-4">
              <p className="text-gray-300 mb-4">
                Prenez un rendez-vous de 15 minutes avec un membre de notre équipe.
              </p>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/loopivia/30min?locale=fr&background_color=0f172a&text_color=ffffff&primary_color=60a5fa"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </div>
          ),
        }].map(({ key, title, icon, content }) => (
          <div key={key} className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex items-center justify-between px-6 py-5 focus:outline-none hover:bg-[#273449] transition"
            >
              <div className="flex items-center text-left">
                {icon}
                <span className="text-xl font-semibold">{title}</span>
              </div>
              <FaChevronDown
                className={`text-gray-300 transition-transform duration-300 ${openSection === key ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`transition-all duration-500 px-6 ${
                openSection === key ? "max-h-[1000px] pb-6" : "max-h-0 overflow-hidden"
              }`}
            >
              {content}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
