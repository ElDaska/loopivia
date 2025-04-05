import React, { useEffect } from "react";
import { FaXTwitter, FaLinkedin, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa6";
import Footer from "../components/Footer";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Loopivia – Réseaux à venir";
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#0f172a] text-white">
      <Header />

      <section className="text-center px-6 py-20 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Facebook & Instagram arrivent très bientôt 🚧
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Nous finalisons actuellement nos pages Facebook et Instagram pour rester connecté avec vous au quotidien.
        </p>

        <p className="text-md text-gray-400 mb-6">
          En attendant, suivez-nous sur nos réseaux actifs :
        </p>

        <div className="flex gap-6 justify-center text-3xl mb-10">
          <a href="https://x.com/loopivia" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/company/loopivia" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a href="https://tiktok.com/@loopivia" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-blue-400 transition" />
          </a>
          <span className="text-gray-500 cursor-not-allowed">
            <FaInstagram />
          </span>
          <span className="text-gray-500 cursor-not-allowed">
            <FaFacebook />
          </span>
        </div>

        <a
          href="https://www.loopivia.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Réserver une démo gratuite
        </a>
      </section>

      <Footer />
    </main>
  );
};

export default ComingSoon;
