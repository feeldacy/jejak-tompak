import { getT } from "../data/translations.js";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    alt: "Hutan tropis Tompak",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    alt: "Puncak gunung berkabut",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80",
    alt: "Matahari terbenam berkabut",
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80",
    alt: "Sungai di dalam hutan",
  },
  {
    src: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1000&q=80",
    alt: "Hutan hijau lebat",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    alt: "Lembah dan danau",
  },
];

export default function DokumentasiSection({ language }) {
  const t = getT(language).dokumentasi;

  return (
    <section
      id="dokumentasi"
      className="relative py-28 overflow-hidden bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-tompak-green-deep/70 text-base md:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {PHOTOS.map((photo, i) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl glass shadow-sm transition duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-tompak-green-soft/70 hover:animate-glow-soft ${
                i === 0
                  ? "md:row-span-2 md:aspect-auto aspect-square"
                  : "aspect-square"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-500">
                {photo.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
