import { Buffer } from "buffer";
window.Buffer = Buffer;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import FooterLoopivia from "../components/Footer";

// ============ UTILITAIRES ============

const calculateReadingTime = (content) => {
  if (!content) return 1;
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

const extractHeadings = (content) => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\{#[\w-]+\}/, '').trim();
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    if (text && id) {
      headings.push({ level, text, id });
    }
  }
  return headings;
};

const generateStructuredData = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt || post.meta_description || post.title,
  "image": post.image,
  "author": {
    "@type": "Person",
    "name": post.author || "Loopivia"
  },
  "datePublished": post.date,
  "dateModified": post.updated || post.date,
  "publisher": {
    "@type": "Organization",
    "name": "Loopivia",
    "logo": {
      "@type": "ImageObject",
      "url": "/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": window.location.href
  }
});

// ============ HOOKS PERSONNALISÉS ============

const useActiveHeading = (headings) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);

        if (visibleHeadings.length > 0) {
          // Prendre le premier heading visible
          setActiveId(visibleHeadings[0]);
        }
      },
      { 
        rootMargin: '-20% 0% -80% 0%',
        threshold: 0.1
      }
    );

    const elements = headings
      .map(heading => document.getElementById(heading.id))
      .filter(Boolean);

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  return activeId;
};

const useBlogPost = (slug) => {
  const [state, setState] = useState({
    post: null,
    relatedPosts: [],
    loading: true,
    notFound: false
  });

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      try {
        const modules = import.meta.glob('../blog/*.md', { 
          query: '?raw', 
          import: 'default' 
        });
        
        const mdPath = `../blog/${slug}.md`;

        if (!modules[mdPath]) {
          if (isMounted) {
            setState(prev => ({ ...prev, notFound: true, loading: false }));
          }
          return;
        }

        const raw = await modules[mdPath]();
        const { data, content } = matter(raw);
        const readingTime = calculateReadingTime(content);
        
        const post = { ...data, content, readingTime };

        // Charger les articles connexes en parallèle
        const relatedPostsPromise = loadRelatedPosts(modules, mdPath, data.tags);
        const relatedPosts = await relatedPostsPromise;

        if (isMounted) {
          setState({
            post,
            relatedPosts,
            loading: false,
            notFound: false
          });
        }

      } catch (error) {
        console.error('Erreur lors du chargement de l\'article:', error);
        if (isMounted) {
          setState(prev => ({ ...prev, notFound: true, loading: false }));
        }
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return state;
};

const loadRelatedPosts = async (modules, currentPath, currentTags = []) => {
  try {
    const relatedEntries = Object.entries(modules)
      .filter(([path]) => path !== currentPath)
      .slice(0, 6); // Limiter pour les performances

    const relatedPosts = await Promise.all(
      relatedEntries.map(async ([path, loader]) => {
        try {
          const content = await loader();
          const { data } = matter(content);
          const postSlug = path.split('/').pop().replace('.md', '');
          return { ...data, slug: postSlug, path };
        } catch (error) {
          console.warn(`Erreur lors du chargement de ${path}:`, error);
          return null;
        }
      })
    );

    return relatedPosts
      .filter(Boolean)
      .filter(post => post.tags?.some(tag => currentTags?.includes(tag)))
      .slice(0, 3);
  } catch (error) {
    console.error('Erreur lors du chargement des articles connexes:', error);
    return [];
  }
};

// ============ COMPOSANTS ============

const TableOfContents = ({ headings, activeId }) => {
  if (headings.length === 0) return null;

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 mb-8 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <h3 className="font-semibold text-sky-300 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
        <span>📋</span> Table des matières
      </h3>
      <ul className="space-y-1 text-sm">
        {headings.map((heading, idx) => (
          <li key={`${heading.id}-${idx}`}>
            <a
              href={`#${heading.id}`}
              className={`block py-2 px-3 rounded-md transition-all duration-200 ${
                heading.level === 3 ? 'ml-4 text-xs' : ''
              } ${
                activeId === heading.id
                  ? 'bg-sky-600/30 text-sky-200 border-l-2 border-sky-400'
                  : 'text-slate-300 hover:text-sky-300 hover:bg-slate-700/50'
              }`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  const offset = 80; // Offset pour le scroll
                  const top = element.offsetTop - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ArticleHeader = ({ post }) => (
  <header className="mb-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
      {post.title}
    </h1>
    
    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
      {post.date && (
        <time 
          dateTime={post.date}
          className="flex items-center gap-1"
        >
          <span>📅</span>
          {new Date(post.date).toLocaleDateString("fr-FR", { 
            year: "numeric", 
            month: "long", 
            day: "2-digit" 
          })}
        </time>
      )}
      
      {post.updated && post.updated !== post.date && (
        <span className="flex items-center gap-1">
          <span>🔄</span>
          Mis à jour le {new Date(post.updated).toLocaleDateString("fr-FR", { 
            day: "2-digit", 
            month: "short", 
            year: "numeric" 
          })}
        </span>
      )}
      
      {post.readingTime && (
        <span className="flex items-center gap-1">
          <span>⏱️</span>
          {post.readingTime} min de lecture
        </span>
      )}
      
      {post.author && (
        <span className="flex items-center gap-1">
          <span>✍️</span>
          Par {post.author}
        </span>
      )}
    </div>

    {post.tags?.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag, idx) => (
          <span 
            key={`${tag}-${idx}`}
            className="bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-800/50"
          >
            #{tag}
          </span>
        ))}
      </div>
    )}

    {post.excerpt && (
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 border-l-4 border-sky-500 p-6 rounded-r-lg mb-8 backdrop-blur-sm">
        <p className="text-lg text-slate-200 italic leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    )}
  </header>
);

const RelatedPosts = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-700">
      <h3 className="text-xl font-bold mb-6 text-sky-300 flex items-center gap-2">
        <span>📚</span>
        Articles connexes
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <Link
            key={`${post.slug}-${idx}`}
            to={`/blog/${post.slug}`}
            className="block p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-sky-600/50 transition-all duration-200 hover:bg-slate-800/50 group"
          >
            <h4 className="font-semibold text-slate-200 mb-2 group-hover:text-sky-300 transition-colors line-clamp-2">
              {post.title}
            </h4>
            {post.excerpt && (
              <p className="text-sm text-slate-400 line-clamp-2">
                {post.excerpt}
              </p>
            )}
            {post.date && (
              <time className="text-xs text-slate-500 mt-2 block">
                {new Date(post.date).toLocaleDateString("fr-FR")}
              </time>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

const LoadingState = () => (
  <div className="min-h-screen bg-slate-900 text-white flex flex-col">
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400 mx-auto mb-4"></div>
        <p className="text-slate-400">Chargement de l'article...</p>
      </div>
    </main>
    <FooterLoopivia />
  </div>
);

const NotFoundState = () => (
  <div className="min-h-screen bg-slate-900 text-white flex flex-col">
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center p-12 max-w-md">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold mb-4">Article introuvable</h2>
        <p className="text-slate-400 mb-6">
          Cet article n'existe pas ou a été déplacé.
        </p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 rounded-lg text-white hover:bg-sky-500 transition-colors font-semibold group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Retour au blog
        </Link>
      </div>
    </main>
    <FooterLoopivia />
  </div>
);

// ============ COMPOSANTS MARKDOWN ============

const MarkdownComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-6 text-white border-b border-slate-700 pb-3" {...props}>
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }) => {
    const text = children?.toString() || '';
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    return (
      <h2 
        id={id}
        className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-sky-300 scroll-mt-20" 
        {...props}
      >
        {children}
      </h2>
    );
  },
  
  h3: ({ children, ...props }) => {
    const text = children?.toString() || '';
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    return (
      <h3 
        id={id}
        className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-slate-200 scroll-mt-20" 
        {...props}
      >
        {children}
      </h3>
    );
  },
  
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed text-slate-200" {...props}>{children}</p>
  ),
  
  ul: ({ children, ...props }) => (
    <ul className="mb-4 space-y-2 text-slate-200 pl-4" {...props}>{children}</ul>
  ),
  
  ol: ({ children, ...props }) => (
    <ol className="mb-4 space-y-2 text-slate-200 list-decimal list-inside pl-4" {...props}>{children}</ol>
  ),
  
  li: ({ children, ...props }) => (
    <li className="leading-relaxed flex items-start" {...props}>
      <span className="text-sky-400 mr-2 mt-1 flex-shrink-0">•</span>
      <span>{children}</span>
    </li>
  ),
  
  blockquote: ({ children, ...props }) => (
    <blockquote 
      className="border-l-4 border-sky-500 bg-slate-800/50 pl-6 py-4 my-6 italic text-slate-300 rounded-r-lg backdrop-blur-sm" 
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  code: ({ inline, children, ...props }) => (
    inline ? (
      <code className="bg-slate-800 text-sky-300 px-2 py-1 rounded text-sm font-mono border border-slate-700" {...props}>
        {children}
      </code>
    ) : (
      <code 
        className="block bg-slate-800 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4 border border-slate-700 relative" 
        {...props}
      >
        {children}
      </code>
    )
  ),
  
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-slate-600">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }) => (
    <th className="border-b border-slate-600 bg-slate-800 px-4 py-3 text-left font-semibold text-sky-300" {...props}>
      {children}
    </th>
  ),
  
  td: ({ children, ...props }) => (
    <td className="border-b border-slate-700 px-4 py-3 text-slate-200" {...props}>{children}</td>
  ),
  
  a: ({ children, href, ...props }) => (
    <a 
      href={href} 
      className="text-sky-400 hover:text-sky-300 underline decoration-sky-400/50 hover:decoration-sky-300 transition-colors font-medium" 
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  
  img: ({ src, alt, ...props }) => (
    <figure className="my-6">
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-lg shadow-lg border border-slate-700"
        loading="lazy"
        {...props}
      />
      {alt && (
        <figcaption className="text-center text-sm text-slate-400 mt-3 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  
  hr: ({ ...props }) => (
    <hr className="my-8 border-slate-600" {...props} />
  ),
  
  strong: ({ children, ...props }) => (
    <strong className="font-bold text-white" {...props}>{children}</strong>
  ),
  
  em: ({ children, ...props }) => (
    <em className="italic text-slate-300" {...props}>{children}</em>
  )
};

// ============ COMPOSANT PRINCIPAL ============

const BlogPost = () => {
  const { slug } = useParams();
  const { post, relatedPosts, loading, notFound } = useBlogPost(slug);
  
  const headings = useMemo(() => 
    post ? extractHeadings(post.content) : [], 
    [post?.content]
  );
  
  const activeId = useActiveHeading(headings);

  // Gestion des métadonnées et structured data
  useEffect(() => {
    if (!post) return;

    // Titre de la page
    document.title = `${post.title} | Loopivia Blog`;
    
    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = post.meta_description || post.excerpt || post.title;
    }

    // Structured data pour SEO
    const structuredData = generateStructuredData(post);
    let script = document.getElementById('structured-data');
    
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);

    // Cleanup
    return () => {
      const script = document.getElementById('structured-data');
      if (script) script.remove();
    };
  }, [post]);

  if (loading) return <LoadingState />;
  if (notFound || !post) return <NotFoundState />;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Navigation */}
          <nav className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Retour au blog
            </Link>
          </nav>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Contenu principal */}
            <article className="lg:col-span-3">
              {/* Image hero */}
              {post.image && (
                <div className="mb-8">
                  <img 
                    src={post.image} 
                    alt={post.alt_image || post.title} 
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg border border-slate-700"
                    loading="eager"
                  />
                </div>
              )}

              <ArticleHeader post={post} />

              {/* Contenu */}
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown components={MarkdownComponents}>
                  {post.content}
                </ReactMarkdown>
              </div>

              <RelatedPosts posts={relatedPosts} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-8 lg:mt-0">
              <TableOfContents headings={headings} activeId={activeId} />
            </aside>
          </div>
        </div>
      </main>
      <FooterLoopivia />
    </div>
  );
};

export default BlogPost;