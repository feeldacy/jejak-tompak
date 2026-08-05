import { getT } from "../data/translations.js";
import imageBg from "../assets/IMG_0760.jpg";
import { useState, useEffect, useRef } from "react";

const sejarahImages = import.meta.glob(
  "../assets/sejarahsection/sejarah/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const asalusulImages = import.meta.glob(
  "../assets/sejarahsection/asalusul/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const watuImages = import.meta.glob(
  "../assets/sejarahsection/watu/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const filosofiImages = import.meta.glob(
  "../assets/sejarahsection/filosofi/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

// Map each tab key to its images array
const TAB_IMAGES = {
  sejarah: Object.values(sejarahImages).map((m) => m.default),
  asalUsul: Object.values(asalusulImages).map((m) => m.default),
  watutompak: Object.values(watuImages).map((m) => m.default),
  filosofi: Object.values(filosofiImages).map((m) => m.default),
};

const TAB_KEYS = ["sejarah", "asalUsul", "watutompak", "filosofi"];

export default function SejarahSection({ language }) {
  const t = getT(language).sejarah;
  const [activeTab, setActiveTab] = useState("asalUsul");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const tab = t.tabs[activeTab];
  const images = TAB_IMAGES[activeTab] || [];
  const intervalRef = useRef(null);

  // Reset image index when tab changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  // Auto-advance carousel every 1 second
  useEffect(() => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [activeTab, images.length]);

  return (
    <section id="sejarah" className="relative py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageBg})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-br from-tompak-green-deep/70 via-transparent to-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 font-display font-bold text-3xl vollkorn-title sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            {t.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-14 items-start">
          {/* Sticky media card with carousel — 2/5 width */}
          <div className="lg:col-span-2 order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl group">
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${tab.label} ${idx + 1}`}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      idx === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {/* Gradient blur overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-24 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 backdrop-blur-lg bg-black/30 border-t border-white/10 px-5 py-4">
                    <h3 className="text-white font-display font-bold text-base md:text-lg text-center leading-snug drop-shadow-lg">
                      {tab.label}
                    </h3>
                  </div>
                </div>
              </div>
              {/* Carousel dot indicators */}
              {images.length > 1 && (
                <div className="flex justify-center gap-1.5 py-3 bg-black/40">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? "w-5 bg-tompak-green-soft"
                          : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2">
            {/* Tab triggers */}
            <div
              role="tablist"
              aria-label="Bagian sejarah"
              className="flex flex-wrap gap-2 border-b border-white/10 pb-3"
            >
              {TAB_KEYS.map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition duration-300 border ${
                      isActive
                        ? "bg-tompak-green-soft/70 border-tompak-green-soft text-white"
                        : "bg-white/70 border-white/40 text-black hover:bg-white hover:text-black"
                    }`}
                  >
                    {t.tabs[key].label}
                    {isActive && (
                      <span className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-tompak-green-soft" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab panels */}
            <div className="mt-8 min-h-[280px]">
              {activeTab === "sejarah" && (
                <div className="space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p1}
                  </p>
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p2}
                  </p>
                </div>
              )}
              {activeTab === "asalUsul" && (
                <div className="space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p1}
                  </p>
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p2}
                  </p>
                </div>
              )}

              {activeTab === "watutompak" && (
                <div className="space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p1}
                  </p>
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p2}
                  </p>
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p3}
                  </p>
                </div>
              )}

              {activeTab === "filosofi" && (
                <div className="space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p1}
                  </p>
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p2}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
