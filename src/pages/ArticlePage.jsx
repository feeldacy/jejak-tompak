import { useParams, Link, useNavigate } from "react-router-dom";
import { getArticleById, articles } from "../data/articles.js";

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = getArticleById(id);

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

  // Get previous and next articles for navigation
  const currentIdx = articles.findIndex((a) => a.id === id);
  const prev = articles[currentIdx - 1] ?? null;
  const next = articles[currentIdx + 1] ?? null;

  return (
    <article className="pt-28 pb-24">
      {/* Hero image */}
      <div className="relative h-72 sm:h-96 lg:h-[520px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title.ID}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tompak-green-deep/40 via-transparent to-white" />
      </div>

      {/* Content card */}
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="glass rounded-3xl px-6 sm:px-10 py-10 shadow-2xl">
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
          <div className="flex items-center gap-2 mb-4">
            <span className="rounded-full bg-tompak-green-mid/10 border border-tompak-green-mid/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-tompak-green-mid">
              Cerita
            </span>
            <span className="text-xs text-tompak-green-deep/60">
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-tompak-green-deep leading-tight">
            {article.title.ID}
          </h1>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-tompak-green-soft/50 via-tompak-brown-soft/30 to-transparent" />

          {/* Body paragraphs */}
          <div className="prose prose-lg max-w-none text-tompak-green-deep/80 space-y-5">
            {article.body.map((para, i) => (
              <p key={i} className="leading-[1.85] text-base md:text-[1.05rem]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/artikel/${prev.id}`}
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
              to={`/artikel/${next.id}`}
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
      </div>
    </article>
  );
}
