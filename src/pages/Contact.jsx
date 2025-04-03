import { useState } from "react";
import { FaChevronDown, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <section className="text-center py-20 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Contactez-nous</h1>
          <p className="text-lg text-gray-300">
            Choisissez votre méthode de contact préférée.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-6">
        {/* Accordion Section */}
        {[
          {
            key: "email",
            title: "Par email",
            icon: <FaEnvelope className="text-blue-400 mr-3" />,
            content: (
              <p className="text-gray-300 text-lg">
                Envoyez-nous un message à : <strong>support@loopivia.com</strong>  
                <br />Nous répondons sous 24h ouvrées.
              </p>
            ),
          },
          {
            key: "form",
            title: "Formulaire de contact",
            icon: <FaPhone className="text-blue-400 mr-3" />,
            content: (
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-300">Nom</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-[#1f2937] text-white rounded-lg focus:outline-none"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-[#1f2937] text-white rounded-lg focus:outline-none"
                    placeholder="Votre email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300">Message</label>
                  <textarea
                    rows="4"
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
                <Link
                  to="/calendrier"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition"
                >
                  Réserver un créneau
                </Link>
              </div>
            ),
          },
        ].map(({ key, title, icon, content }) => (
          <div
            key={key}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl"
          >
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex items-center justify-between px-6 py-5 focus:outline-none hover:bg-[#273449] transition"
            >
              <div className="flex items-center text-left">
                {icon}
                <span className="text-xl font-semibold">{title}</span>
              </div>
              <FaChevronDown
                className={`text-gray-300 transition-transform duration-300 ${
                  openSection === key ? "rotate-180" : ""
                }`}
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
