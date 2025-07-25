import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import FooterLoopivia from "../components/Footer";

function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const modules = import.meta.glob('../blog/*.md', { query: '?raw', import: 'default', eager: true });
        const loadedPosts = Object.entries(modules).map(([path, raw]) => {
          const { data } = matter(raw);
          const slug = path.split('/').pop().replace('.md', '');
          return { ...data, slug };
        });
        setPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading };
}

// Fonction pour calculer le temps de lecture
const calculateReadingTime = (excerpt) => {
  if (!excerpt) return 1;
  const wordsPerMinute = 200;
  const words = excerpt.split(' ').length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

// Composant carte d'article optimisé
const BlogCard = ({ post }) => (
  <article
    className="card-blog fade-in hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
    style={{ minHeight: "420px", display: "flex", flexDirection: "column" }}
  >
    {/* Image article avec lazy loading */}
    <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-t-xl">
      {post.image ? (
        <img
          src={post.image}
          alt={post.alt_image || post.title}
          className="w-full h-56 object-cover object-center hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <div className="w-full h-56 bg-gradient-to-br from-sky-900 to-slate-800 flex items-center justify-center">
          <span className="text-sky-300 text-6xl">📝</span>
        </div>
      )}
    </Link>

    {/* Contenu article */}
    <div className="p-6 flex flex-col flex-1">
      {/* Métadonnées */}
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
        {post.tags?.[0] && (
          <span className="bg-sky-900 text-sky-300 rounded-full px-3 py-1 font-semibold uppercase tracking-wide">
            {post.tags[0]}
          </span>
        )}
        <span className="text-gray-400">
          {post.date && new Date(post.date).toLocaleDateString("fr-FR", { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
          })}
        </span>
        {post.reading_time && (
          <span className="text-gray-400">• {post.reading_time} lecture</span>
        )}
        {post.author && (
          <span className="text-gray-400 ml-auto">Par {post.author}</span>
        )}
      </div>

      {/* Titre */}
      <h2 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 hover:text-sky-300 transition-colors">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      {/* Extrait */}
      <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3 flex-grow">
        {post.excerpt}
      </p>

      {/* Tags supplémentaires */}
      {post.tags && post.tags.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-1">
          {post.tags.slice(1, 4).map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-slate-700 text-slate-300 rounded px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-2">
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2 bg-sky-600 rounded-lg font-semibold text-white shadow hover:bg-sky-500 transition-all duration-200 group"
        >
          Lire l'article 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  </article>
);

const Blog = () => {
  const { posts, loading } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Mise à jour du titre de la page
  useEffect(() => {
    document.title = "Blog Loopivia | IA, Automatisation & Productivité";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Découvrez nos conseils d'experts sur l'IA, l'automatisation et la productivité. Guides pratiques, formations et actualités pour optimiser votre business.";
    }
  }, []);

  // Filtrage des articles
  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Récupération de tous les tags uniques
  const allTags = [...new Set(posts.flatMap(post => post.tags || []))].sort();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <main className="flex-grow">
        {/* Header amélioré */}
        <header className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-center mb-8 shadow-lg fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            Le Blog <span className="text-sky-400">Loopivia</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 px-4">
            Conseils d'experts, formations pratiques & actualités sur l'IA, l'automatisation et la productivité pour tous les métiers.
          </p>

          {/* Barre de recherche et filtres */}
          <div className="max-w-2xl mx-auto px-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un article..."
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                🔍
              </div>
            </div>

            {/* Filtres par tags */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedTag("")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    !selectedTag 
                      ? 'bg-sky-600 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Tous
                </button>
                {allTags.slice(0, 8).map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedTag === tag 
                        ? 'bg-sky-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Statistiques du blog */}
        {posts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
            <div className="text-center text-slate-400 text-sm">
              {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} 
              {searchTerm && ` trouvé${filteredPosts.length > 1 ? 's' : ''} pour "${searchTerm}"`}
              {selectedTag && ` dans "${selectedTag}"`}
            </div>
          </div>
        )}

        {/* Grille des articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400"></div>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-300">
                {searchTerm || selectedTag ? 'Aucun résultat trouvé' : 'Aucun article publié'}
              </h3>
              <p className="text-slate-400 mb-6">
                {searchTerm || selectedTag 
                  ? 'Essayez avec d\'autres mots-clés ou supprimez les filtres'
                  : 'Les premiers articles arrivent bientôt !'
                }
              </p>
              {(searchTerm || selectedTag) && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("");
                  }}
                  className="px-4 py-2 bg-sky-600 rounded-lg text-white hover:bg-sky-500 transition-colors"
                >
                  Effacer les filtres
                </button>
              )}
            </div>
          )}
        </section>
      </main>
      <FooterLoopivia />
    </div>
  );
};

export default Blog;