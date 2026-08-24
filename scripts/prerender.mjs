/**
 * Post-build prerender script.
 *
 * After `vite build` produces /dist, this script:
 * 1. Starts a local static server pointing at /dist
 * 2. Launches headless Chrome via Puppeteer
 * 3. Visits each route and saves the fully-rendered HTML
 *
 * Usage: node scripts/prerender.mjs
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const PORT = 4173;

// All routes to prerender — add new routes here as your site grows
const ROUTES = [
  "/",
  "/prawira-tani",
  "/artikel/2026-07-09",
  "/artikel/2026-08-04",
  "/artikel/2024-07-26",
  "/artikel/2024-08-15",
];

/**
 * Simple static file server that serves from /dist
 * and falls back to index.html for SPA routes.
 */
function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || filePath.endsWith("/")) {
        filePath = join(DIST, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mimeTypes = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          json: "application/json",
          png: "image/png",
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          svg: "image/svg+xml",
          webp: "image/webp",
        };
        res.writeHead(200, {
          "Content-Type": mimeTypes[ext] || "application/octet-stream",
        });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server running at http://localhost:${PORT}`);
      resolvePromise(server);
    });
  });
}

async function prerender() {
  console.log("\n🔍 Prerendering routes for SEO...\n");

  if (!existsSync(DIST)) {
    console.error("  ❌ /dist not found. Run `npm run build` first.");
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 60000, // Increase timeout to 60 seconds
  });

  const page = await browser.newPage();

  for (const route of ROUTES) {
    console.log(`  Rendering: ${route}`);

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for React to render content in the root div
    try {
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          // Check if root has actual content (more than just empty divs)
          return root && root.innerHTML.length > 1000;
        },
        { timeout: 10000 },
      );

      // Wait for helmet meta tags to be injected
      await page.waitForFunction(
        () => {
          const helmetMetas = document.querySelectorAll('meta[data-rh="true"]');
          return helmetMetas.length >= 5;
        },
        { timeout: 5000 },
      );

      // Extra time for everything to settle
      await page.evaluate(() => new Promise((r) => setTimeout(r, 1500)));
    } catch (e) {
      console.log(`  ⚠️  Warning: Rendering timed out for ${route}`);
    }

    // Extract SEO data that was passed to the SEO component
    // Since Helmet doesn't work in Puppeteer, we'll extract data from window
    const seoData = await page.evaluate(() => {
      // Try to extract from Helmet first
      const getMetaContent = (selector) => {
        const meta = document.querySelector(selector);
        return meta ? meta.getAttribute("content") : null;
      };

      return {
        title: document.title,
        description: getMetaContent('meta[name="description"]'),
        ogTitle: getMetaContent('meta[property="og:title"]'),
        ogDescription: getMetaContent('meta[property="og:description"]'),
        ogImage: getMetaContent('meta[property="og:image"]'),
        ogUrl: getMetaContent('meta[property="og:url"]'),
        ogType: getMetaContent('meta[property="og:type"]'),
        twitterCard: getMetaContent('meta[name="twitter:card"]'),
        canonical: document
          .querySelector('link[rel="canonical"]')
          ?.getAttribute("href"),
      };
    });

    console.log(`  Page title: ${seoData.title}`);
    console.log(`  OG title: ${seoData.ogTitle}`);

    // Get the RENDERED HTML from the DOM, not the source
    let html = await page.evaluate(() => document.documentElement.outerHTML);

    // Remove any existing JSON-LD scripts to avoid duplicates
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
      "",
    );

    // WORKAROUND: Helmet doesn't update during Puppeteer rendering
    // For article pages, manually extract article data and inject correct meta tags
    if (route.startsWith("/artikel/")) {
      const articleData = await page.evaluate(() => {
        // Extract article data from the rendered page
        const h1 = document.querySelector("h1");
        const articleTitle = h1 ? h1.textContent : null;

        // Try to get image from the page
        const articleImage = document.querySelector("article img, main img");
        const imageSrc = articleImage ? articleImage.src : null;

        return {
          title: articleTitle,
          image: imageSrc,
        };
      });

      if (articleData.title && articleData.title !== "Jejak Tompak") {
        const fullTitle = `${articleData.title} — Jejak Tompak`;
        const canonical = `https://jejaktompak.id${route}`;

        // Convert localhost image URL to production URL
        let ogImage =
          articleData.image || "https://jejaktompak.id/og-image.jpg";
        if (ogImage && ogImage.includes("localhost")) {
          ogImage = ogImage.replace(
            /http:\/\/localhost:\d+/,
            "https://jejaktompak.id",
          );
        }

        // Replace the title tag
        html = html.replace(
          /<title>.*?<\/title>/,
          `<title>${fullTitle}</title>`,
        );

        // Replace og:title
        html = html.replace(
          /<meta property="og:title" content=".*?" data-rh="true">/,
          `<meta property="og:title" content="${fullTitle}" data-rh="true">`,
        );

        // Replace og:url
        html = html.replace(
          /<meta property="og:url" content=".*?" data-rh="true">/,
          `<meta property="og:url" content="${canonical}" data-rh="true">`,
        );

        // Replace canonical
        html = html.replace(
          /<link rel="canonical" href=".*?" data-rh="true">/,
          `<link rel="canonical" href="${canonical}" data-rh="true">`,
        );

        // Replace og:image if we have one
        if (articleData.image) {
          html = html.replace(
            /<meta property="og:image" content=".*?" data-rh="true">/,
            `<meta property="og:image" content="${ogImage}" data-rh="true">`,
          );
        }

        console.log(`  ✓ Injected article meta: ${articleData.title}`);
      }
    }

    // Inject structured data (JSON-LD)
    let structuredData = null;

    if (route === "/") {
      // Homepage - Organization schema
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Jejak Tompak",
        description:
          "Menelusuri sejarah, komoditas, dan cerita masyarakat Tompak.",
        url: "https://jejaktompak.id",
        inLanguage: "id-ID",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://jejaktompak.id/artikel?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      };
    } else if (route === "/prawira-tani") {
      // Prawira Tani page - Organization schema
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Prawira Tani",
        description:
          "Usaha pembibitan dan budidaya kakao yang bergerak di Desa Giripurwo, Kulon Progo. Berani berinovasi untuk pertanian berkelanjutan.",
        url: "https://jejaktompak.id/prawira-tani",
        logo: "https://jejaktompak.id/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Giripurwo",
          addressRegion: "Kulon Progo",
          addressCountry: "ID",
        },
        founder: {
          "@type": "Person",
          name: "Muhammad Dwi Prasetyo",
        },
        areaServed: {
          "@type": "Place",
          name: "Desa Giripurwo, Kulon Progo",
        },
      };
    } else if (route.startsWith("/artikel/")) {
      // Article pages - Article schema
      const articleData = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        const articleTitle = h1 ? h1.textContent : null;
        const articleImage = document.querySelector("article img, main img");
        const imageSrc = articleImage ? articleImage.src : null;

        return {
          title: articleTitle,
          image: imageSrc,
        };
      });

      if (articleData.title) {
        let ogImage =
          articleData.image || "https://jejaktompak.id/og-image.jpg";
        // Convert localhost image URL to production URL
        if (ogImage && ogImage.includes("localhost")) {
          ogImage = ogImage.replace(
            /http:\/\/localhost:\d+/,
            "https://jejaktompak.id",
          );
        }

        const publishedDate = route.split("/").pop(); // Extract date from route

        structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: articleData.title,
          image: ogImage,
          datePublished: publishedDate,
          author: {
            "@type": "Organization",
            name: "Jejak Tompak",
          },
          publisher: {
            "@type": "Organization",
            name: "Jejak Tompak",
            logo: {
              "@type": "ImageObject",
              url: "https://jejaktompak.id/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://jejaktompak.id${route}`,
          },
        };
      }
    }

    // Inject structured data into <head> if available
    if (structuredData) {
      const jsonLd = `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
      html = html.replace("</head>", `${jsonLd}\n</head>`);
      console.log(`  ✓ Injected structured data (JSON-LD)`);
    }

    // Determine file output path
    const outputDir =
      route === "/" ? DIST : join(DIST, ...route.split("/").filter(Boolean));

    mkdirSync(outputDir, { recursive: true });
    const outputFile = join(outputDir, "index.html");

    writeFileSync(outputFile, html, "utf-8");
    console.log(`  ✅ Saved: ${outputFile.replace(DIST, "/dist")}`);
  }

  await page.close();
  await browser.close();
  server.close();

  console.log(`\n✨ Prerendered ${ROUTES.length} routes successfully!\n`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
