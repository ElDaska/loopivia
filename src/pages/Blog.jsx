import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import FooterLoopivia from "../components/Footer";

function useBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // ⚠️ Pour Vite 5+, adapte les options glob si besoin
    const modules = import.meta.glob('../blog/*.md', { query: '?raw', import: 'default', eager: true });
    const loadedPosts = Object.entries(modules).map(([path, raw]) => {
      const { data } = matter(raw);
      const slug = path.split('/').pop().replace('.md', '');
      return { ...data, slug };
    });
    setPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  return posts;
}

const Blog = () => {
  const posts = useBlogPosts();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <main className="flex-grow">
        {/* Header amélioré */}
        <header className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-center mb-8 shadow-lg fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Le Blog <span className="text-sky-400">Loopivia</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Conseils, formations & actus sur l'IA, l'automatisation et la productivité pour tous.
          </p>
        </header>

        {/* Grille des articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
              <div
                key={post.slug}
                className="card-blog fade-in hover:-translate-y-1 transition-transform"
                style={{ minHeight: "420px", display: "flex", flexDirection: "column" }}
              >
                {/* Image article */}
                <Link to={`/blog/${post.slug}`}>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover object-center"
                      loading="lazy"
                      style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
                    />
                  )}
                </Link>
                {/* Infos article */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs bg-sky-900 text-sky-300 rounded-full px-3 py-1 font-semibold uppercase tracking-wide">{post.tags?.[0]}</span>
                    <span className="text-xs text-gray-400">
                      {post.date && new Date(post.date).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    {post.author && (
                      <span className="text-xs text-gray-400 ml-auto">Par {post.author}</span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-300 text-base mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto pt-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block px-5 py-2 bg-sky-600 rounded-lg font-semibold text-white shadow hover:bg-sky-500 transition"
                    >
                      Lire l'article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* Message si pas d'article */}
            {posts.length === 0 && (
              <div className="col-span-3 text-center text-lg text-slate-400 py-12">
                Aucun article publié pour le moment.
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterLoopivia />
    </div>
  );
};

export default Blog;
