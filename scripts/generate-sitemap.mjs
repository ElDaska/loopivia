import { createWriteStream } from "node:fs";
import { SitemapStream } from "sitemap";

const BASE_URL = "https://www.loopivia.com";

// Routes statiques depuis ton App.jsx
const staticRoutes = [
  "/", "/pourquoi-automatiser", "/offres-loopivia",
  "/qui-sommes-nous", "/contact",
  "/politique-de-confidentialite", "/cgu", "/mentions-legales",
  "/blog", "/glossaire-automatisation",
  // Ajoute "/audit" uniquement si la page sert bien un 200 en prod
  "/audit",
  "/comingsoon"
];

// Articles de blog connus (idéalement, charge-les depuis ta source de contenu)
const blogSlugs = [
  "blog_automatisation_ia_2025",
  "automatisation-ia-comprendre-bases"
];

const today = new Date().toISOString().slice(0,10);
const smStream = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream("./public/sitemap.xml");

smStream.pipe(writeStream);

// pages statiques
for (const path of staticRoutes) {
  smStream.write({ url: path, lastmod: today });
}

// blog posts
for (const slug of blogSlugs) {
  smStream.write({ url: `/blog/${slug}`, lastmod: "2025-07-26" });
}

smStream.end();

writeStream.on("finish", () => {
  console.log("✅ sitemap.xml généré dans /public");
});
