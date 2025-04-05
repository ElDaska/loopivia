import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";


const articles = [
  {
    id: "pourquoi-automatiser",
    title: "Pourquoi automatiser son entreprise ?",
    description: "Découvrez comment l'automatisation peut transformer la gestion de votre entreprise et booster votre productivité.",
    link: "/blog/pourquoi-automatiser",
  },
  {
    id: "outils-indispensables",
    title: "4 outils indispensables pour freelances et indépendants",
    description: "Automatisez votre quotidien avec des outils simples et efficaces pour gagner du temps et rester focus.",
    link: "/blog/outils-indispensables",
  },
  {
    id: "integrer-ia-tpe",
    title: "Intégrer l'IA dans une TPE ou activité libérale",
    description: "Même sans être une grande entreprise, vous pouvez tirer parti de l’IA pour améliorer vos processus.",
    link: "/blog/integrer-ia-tpe",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Le Blog Loopivia – Automatisation & IA";
  }, []);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      

      <section className="max-w-7xl mx-auto px-6 py-20 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-14">
          Le Blog Loopivia
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              to={article.link}
              key={article.id}
              className="group bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-4">{article.description}</p>
              </div>
              <span className="text-blue-500 font-medium group-hover:underline mt-4 inline-block">
                Lire l'article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
