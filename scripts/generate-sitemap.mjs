import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = "https://jejaktompak.id";

// Generate sitemap.xml
async function generateSitemap() {
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/prawira-tani", priority: "0.8", changefreq: "monthly" },
  ];

  // Read prerendered article directories to build article URLs
  const distPath = join(__dirname, "../dist/artikel");
  let articlePages = [];

  if (fs.existsSync(distPath)) {
    const articleDirs = fs.readdirSync(distPath);
    articlePages = articleDirs.map((date) => ({
      url: `/artikel/${date}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: date, // Use the date from the directory name
    }));
  }

  const allPages = [...staticPages, ...articlePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(join(__dirname, "../dist/sitemap.xml"), sitemap);
  console.log(
    `✅ sitemap.xml generated successfully with ${allPages.length} URLs`,
  );
}

generateSitemap();
