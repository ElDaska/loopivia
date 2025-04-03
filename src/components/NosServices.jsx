const services = [
  {
    title: "Automatisation sans effort",
    desc: "Connectez tous vos outils avec Zapier, Make ou N8N. Laissez vos processus tourner automatiquement et concentrez-vous sur ce qui compte vraiment.",
  },
  {
    title: "IA sur-mesure",
    desc: "Des agents intelligents créés pour répondre, rédiger, analyser et prendre des décisions. L'IA au service de votre business, pour une efficacité maximale.",
  },
  {
    title: "Scraping éthique et puissant",
    desc: "Récupérez les meilleures données en toute légalité avec nos workflows prêts à l'emploi. L'automatisation du scraping sans coder, 100% conforme.",
  },
  {
    title: "Outils sur mesure pour votre entreprise",
    desc: "Des solutions personnalisées : tableaux de bord, suivi des KPIs, CRM Notion et plus. Créez l'écosystème parfait pour piloter votre entreprise.",
  },
];

const NosServices = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-10">
        Nos services exclusifs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-xl text-left shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{s.title}</h3>
            <p className="text-gray-300 mb-6">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NosServices;

