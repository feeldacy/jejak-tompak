import { getT } from "../data/translations.js";

// Ambil semua foto dari folder dokumentasi secara otomatis
const photoFiles = import.meta.glob(
  "../assets/documentation/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Ubah hasil glob menjadi array
const PHOTOS = Object.entries(photoFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    // Ambil nama file untuk dijadikan alt
    const filename = path.split("/").pop().split(".")[0];

    return {
      src,
      alt: filename
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    };
  });

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

