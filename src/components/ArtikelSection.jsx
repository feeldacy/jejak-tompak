import { Link } from "react-router-dom";
import { getT } from "../data/translations.js";
import { articles, formatIndoDate } from "../data/articles.js";

export default function ArtikelSection({ language }) {
  const t = getT(language).artikel;
  // Dashboard shows only the three most recent articles.
  // `articles` is already sorted newest-first in articles.js.
  const latestArticles = articles.slice(0, 3);

  return (
    <section id="artikel" className="relative py-28 overflow-hidden">
      {/* Blends */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-tompak-green-mist/40 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-tompak-brown-soft/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
            <p className="mt-4 text-tompak-green-deep/70 max-w-xl leading-relaxed">
              {t.description}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="h-px w-16 bg-tompak-green-deep/20" />
            <span className="text-xs uppercase tracking-widest text-tompak-green-deep/60">
              {latestArticles.length} {t.title.split(" ")[0]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <Link
              key={article.publishedAt}
              to={`/artikel/${article.publishedAt}`}
              className="group relative glass rounded-3xl overflow-hidden shadow-sm transition duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-tompak-green-soft/60 focus-visible:outline-none"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title[language] || article.title.ID}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tompak-green-deep/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-tompak-green-mid">
                  Cerita
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-widest text-tompak-green-deep/60 font-medium">
                  {formatIndoDate(article.publishedAt)}
                </p>
                <h3 className="mt-2 font-display font-bold text-lg text-tompak-green-deep leading-snug group-hover:text-tompak-green-mid transition">
                  {article.title[language] || article.title.ID}
                </h3>
                <p className="mt-3 text-sm text-tompak-green-deep/70 leading-relaxed line-clamp-3">
                  {article.snippet[language] || article.snippet.ID}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tompak-green-mid">
                  {t.readMore}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      d="M4 10h12M10 4l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
