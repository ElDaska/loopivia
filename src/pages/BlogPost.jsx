import { Buffer } from "buffer";
window.Buffer = Buffer;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import FooterLoopivia from "../components/Footer";



const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Nouvelle syntaxe Vite 5+
    const modules = import.meta.glob('../blog/*.md', { query: '?raw', import: 'default' });
    const mdPath = `../blog/${slug}.md`;

    if (!modules[mdPath]) {
      setNotFound(true);
      return;
    }
    // Charger le markdown demandé
    modules[mdPath]().then((raw) => {
      const { data, content } = matter(raw);
      setPost({ ...data, content });
      setNotFound(false);
    });
  }, [slug]);

  if (notFound)
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-12">
            <h2 className="text-2xl font-bold mb-4">Article introuvable</h2>
            <Link to="/blog" className="text-sky-400 hover:underline">← Retour au blog</Link>
          </div>
        </main>
        <FooterLoopivia />
      </div>
    );

  if (!post)
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-12">Chargement...</div>
        </main>
        <FooterLoopivia />
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto py-14 px-4">
          <Link to="/blog" className="text-sky-400 hover:underline mb-6 block">← Retour au blog</Link>
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded-xl mb-7" />
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
          <div className="text-gray-400 mb-8">
            {post.date && new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "2-digit" })}
            {post.author && <span> · {post.author}</span>}
          </div>
          <div className="prose prose-invert max-w-none text-slate-100">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </main>
      <FooterLoopivia />
    </div>
  );
};

export default BlogPost;
