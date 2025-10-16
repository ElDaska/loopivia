// scripts/generate-sitemap.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/sitemap.xml");

// crée public si besoin
mkdirSync(resolve(__dirname, "../public"), { recursive: true });

const BASE = "https://www.loopivia.com";
const today = new Date().toISOString().slice(0,10);

const urls = [
  "/", "/pourquoi-automatiser", "/offres-loopivia",
  "/qui-sommes-nous", "/contact",
  "/politique-de-confidentialite", "/cgu", "/mentions-legales",
  "/blog", "/glossaire-automatisation", "/audit",
  // ajoute "/audit" seulement si elle répond 200 en prod
  "/comingsoon",
  // Posts blog connus (mets à jour si besoin)
  "/blog/blog_automatisation_ia_2025",
  "/blog/automatisation-ia-comprendre-bases"
];

const body = urls.map(u => `
  <url>
    <loc>${BASE}${u}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}
</urlset>`;

writeFileSync(OUT, xml, "utf8");
console.log("✅ sitemap.xml généré :", OUT);
