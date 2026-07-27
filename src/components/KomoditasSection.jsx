import { getT } from "../data/translations.js";

const IMAGES = [
  "https://images.unsplash.com/photo-1442411397904-fa5c5c9ef4a4?auto=format&fit=crop&w=900&q=80", // coffee cherries
  "https://images.unsplash.com/photo-1611592738068-24efd1b02f78?auto=format&fit=crop&w=900&q=80", // cinnamon
  "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80", // honey
];

export default function KomoditasSection({ language }) {
  const t = getT(language).komoditas;

  return (
    <section id="komoditas" className="relative py-28 overflow-hidden bg-white">
      {/* Green-to-white blends */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-tompak-green-mist/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-tompak-green-mist/60 to-transparent" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-tompak-green-soft/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-tompak-brown-soft/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title vollkorn-title mt-4 text-3xl sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-tompak-green-deep/70 text-base md:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, idx) => (
            <article
              key={item.title}
              className="group relative glass rounded-3xl overflow-hidden shadow-sm transition duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES[idx]}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tompak-green-deep/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-tompak-green-mid">
                  0{idx + 1}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-tompak-green-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-tompak-green-deep/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-tompak-green-mid via-tompak-green to-tompak-green-mid" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
