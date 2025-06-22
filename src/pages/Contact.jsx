import { useState } from "react";
import { FaChevronDown, FaEnvelope, FaEdit, FaCheckCircle, FaSpinner } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const [openSection, setOpenSection] = useState("email"); // Ouvre email par défaut
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    if (formData.message.trim().length < 10) newErrors.message = "Le message doit contenir au moins 10 caractères";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Supprime l'erreur du champ en cours de modification
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
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
      setErrors({});
      
      // Retour automatique au message de confirmation après 5 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ nom: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <main className="min-h-screen bg-[rgb(15,23,42)] text-white">
      <section className="text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Contactez-nous</h1>
          <p className="text-lg text-gray-300 mb-8">
            Nous sommes là pour vous accompagner. Choisissez votre méthode de contact préférée.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Support personnalisé</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-6">
        {[
          {
            key: "email",
            title: "Contact direct par email",
            icon: <FaEnvelope className="text-blue-400 mr-3" />,
            content: (
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Pour une réponse rapide, écrivez-nous directement :
                </p>
                <div className="bg-[#0f172a] rounded-lg p-4 border border-blue-400/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-400 font-semibold text-xl">contact@loopivia.com</p>
                      <p className="text-gray-400 text-sm mt-1">Cliquez pour copier l'adresse</p>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("contact@loopivia.com");
                        alert("Adresse email copiée !");
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition text-sm"
                    >
                      Copier
                    </button>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                    <span>Réponse garantie sous 24h ouvrées</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                    <span>Support technique disponible</span>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "form",
            title: "Formulaire de contact",
            icon: <FaEdit className="text-blue-400 mr-3" />,
            content: submitted ? (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-4" />
                <h3 className="text-green-400 font-semibold text-xl mb-2">
                  Message envoyé avec succès !
                </h3>
                <p className="text-gray-300 mb-6">
                  Merci pour votre message. Nous vous contacterons rapidement à l'adresse <strong>{formData.email || "indiquée"}</strong>.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-300 mb-6">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement :
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Nom complet <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full p-4 bg-[#1f2937] text-white rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.nom ? "border-2 border-red-400 focus:ring-red-400" : "focus:ring-blue-400"
                      }`}
                      placeholder="Ex: Jean Dupont"
                      disabled={isSubmitting}
                    />
                    {errors.nom && <p className="text-red-400 text-sm mt-1">{errors.nom}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Adresse email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-4 bg-[#1f2937] text-white rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.email ? "border-2 border-red-400 focus:ring-red-400" : "focus:ring-blue-400"
                      }`}
                      placeholder="jean.dupont@exemple.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Votre message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-4 bg-[#1f2937] text-white rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
                        errors.message ? "border-2 border-red-400 focus:ring-red-400" : "focus:ring-blue-400"
                      }`}
                      placeholder="Décrivez votre demande, votre projet ou vos questions..."
                      disabled={isSubmitting}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                      <p className="text-gray-400 text-sm ml-auto">
                        {formData.message.length} caractères (min. 10)
                      </p>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                  
                  <p className="text-gray-400 text-sm text-center">
                    En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  </p>
                </form>
              </div>
            ),
          },
        ].map(({ key, title, icon, content }) => (
          <div key={key} className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl border border-gray-700/50">
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex items-center justify-between px-6 py-6 focus:outline-none hover:bg-[#273449] transition-colors"
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
              className={`transition-all duration-500 ease-in-out px-6 ${
                openSection === key ? "max-h-[2000px] pb-6 opacity-100" : "max-h-0 overflow-hidden opacity-0"
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