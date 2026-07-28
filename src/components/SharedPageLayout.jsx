// Reusable layout for full-page detail views (Article page, Prawira Tani page, etc.)
// Layout:
//   1) Global <Header /> lives in App.jsx and stays fixed at the top
//   2) A cover image sits below the header with `sticky top-0 -z-10` — it stays
//      pinned in the viewport as the user scrolls
//   3) A white content sheet with a higher z-index slides UP over the cover as the
//      user scrolls, hiding the image behind it
//   4) Optional `footer` slot renders below the body (used for prev/next nav)

export default function SharedPageLayout({
  coverImage,
  coverAlt = "",
  title,
  children,
  footer,
}) {
  return (
    // `isolate` creates a local stacking context so our -z-10 on the cover
    // doesn't escape and disappear behind ancestor backgrounds.
    <div className="relative isolate">
      {/* ── Sticky cover ── */}
      <div className="sticky top-0 -z-10 h-[70vh] overflow-hidden">
        <img
          src={coverImage}
          alt={coverAlt}
          className="h-full w-full object-cover"
        />
        {/* Soft dark gradient improves title contrast during initial reveal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
      </div>

      {/* ── White content sheet — slides up over the cover ── */}
      <div className="relative bg-white rounded-t-[2.5rem] shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.25)] -mt-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 py-16 sm:py-20">
          {/* Title — strictly centered */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-center text-tompak-green-deep leading-tight">
            {title}
          </h1>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-tompak-green-soft to-transparent" />

          {/* Body */}
          <div className="mt-10">{children}</div>

          {/* Optional footer (pagination, etc.) */}
          {footer ? <div className="mt-14">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}
