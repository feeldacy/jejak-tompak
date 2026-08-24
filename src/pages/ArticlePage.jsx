import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getArticleByDate,
  articles,
  formatIndoDate,
} from "../data/articles.js";
import SEO from "../components/SEO.jsx";
import SharedPageLayout from "../components/SharedPageLayout.jsx";
import ArticleRenderer from "../components/articles/ArticleRenderer.jsx";

export default function ArticlePage() {
  const { date } = useParams();
  const navigate = useNavigate();
  const article = getArticleByDate(date);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32">
        <div className="glass rounded-3xl px-12 py-14 max-w-md shadow-xl">
          <p className="text-6xl mb-6">🌿</p>
          <h1 className="font-display font-bold text-3xl text-tompak-green-deep">
            Artikel Tidak Ditemukan
          </h1>
          <p className="mt-4 text-tompak-green-deep/70 leading-relaxed">
            Artikel yang kamu cari mungkin sudah dipindahkan atau belum
            tersedia.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-tompak-green-mid text-white font-semibold px-6 py-3 text-sm shadow transition hover:bg-tompak-green hover:scale-105"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  // Get previous / next articles for navigation.
  // `articles` is sorted newest-first, so:
  //   - the *older* article (Sebelumnya) sits at currentIdx + 1
  //   - the *newer* article (Berikutnya) sits at currentIdx - 1
  const currentIdx = articles.findIndex(
    (a) => a.publishedAt === article.publishedAt,
  );
  const prev = articles[currentIdx + 1] ?? null;
  const next = articles[currentIdx - 1] ?? null;

  // Structured data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title.ID,
    description: article.snippet.ID,
    image: article.image.startsWith("http")
      ? article.image
      : `https://jejaktompak.id${article.image}`,
    datePublished: article.publishedAt,
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
      "@id": `https://jejaktompak.id/artikel/${article.publishedAt}`,
    },
  };

  return (
    <>
      <SEO
        title={article.title.ID}
        description={article.snippet.ID}
        path={`/artikel/${article.publishedAt}`}
        image={article.image}
        type="article"
        article={{
          publishedAt: article.publishedAt,
          category: article.category,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SharedPageLayout
        coverImage={article.image}
        coverAlt={article.title.ID}
        title={article.title.ID}
        footer={
          <>
            {/* Prev / Next navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  to={`/artikel/${prev.publishedAt}`}
                  className="group glass rounded-2xl px-6 py-5 shadow hover:shadow-md transition hover:-translate-y-0.5 flex flex-col gap-1"
                >
                  <span className="text-[10px] uppercase tracking-widest text-tompak-green-deep/60 flex items-center gap-1">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3 w-3 transition group-hover:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path
                        d="M16 10H4M10 4L4 10l6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Artikel Sebelumnya
                  </span>
                  <span className="font-display font-semibold text-tompak-green-deep text-sm line-clamp-2">
                    {prev.title.ID}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to={`/artikel/${next.publishedAt}`}
                  className="group glass rounded-2xl px-6 py-5 shadow hover:shadow-md transition hover:-translate-y-0.5 flex flex-col gap-1 sm:text-right"
                >
                  <span className="text-[10px] uppercase tracking-widest text-tompak-green-deep/60 flex items-center gap-1 sm:justify-end">
                    Artikel Berikutnya
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3 w-3 transition group-hover:translate-x-1"
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
                  </span>
                  <span className="font-display font-semibold text-tompak-green-deep text-sm line-clamp-2">
                    {next.title.ID}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Back to home */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full glass border border-tompak-green-soft/40 px-6 py-2.5 text-sm font-semibold text-tompak-green-deep transition hover:bg-white/80 hover:scale-105"
              >
                ← Kembali ke Beranda
              </Link>
            </div>
          </>
        }
      >
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-tompak-green-deep/70 hover:text-tompak-green-deep transition mb-6 group"
        >
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 transition group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path
              d="M16 10H4M10 4L4 10l6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Kembali
        </button>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-6">
          <span className="rounded-full bg-tompak-green-mid/10 border border-tompak-green-mid/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-tompak-green-mid">
            Cerita
          </span>
          <span className="text-xs text-tompak-green-deep/60">
            {formatIndoDate(article.publishedAt)}
          </span>
        </div>

        {/* Article content — block-based (content) or legacy paragraphs (body) */}
        {article.content ? (
          <ArticleRenderer blocks={article.content} />
        ) : (
          <div className="prose prose-lg max-w-none text-tompak-green-deep/80 space-y-5">
            {article.body.map((para, i) => (
              <p key={i} className="leading-[1.85] text-base md:text-[1.05rem]">
                {para}
              </p>
            ))}
          </div>
        )}
      </SharedPageLayout>
    </>
  );
}
