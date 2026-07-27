import { getT } from "../data/translations.js";
import imageBg from "../assets/IMG_0760.jpg";
import { useState } from "react";

const TAB_KEYS = ["asalUsul", "legenda", "agraris"];

export default function SejarahSection({ language }) {
  const t = getT(language).sejarah;
  const [activeTab, setActiveTab] = useState("asalUsul");
  const tab = t.tabs[activeTab];

  return (
    <section id="sejarah" className="relative py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageBg})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-br from-tompak-green-deep/70 via-transparent to-black/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 font-display font-bold text-3xl vollkorn-title sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            {t.title}
          </h2>

          <div className="mx-auto mt-6 max-w-2xl glass-dark rounded-2xl border border-white/10 px-6 py-4 shadow-xl">
            <p className="font-display italic text-lg md:text-xl text-white/90">
              {t.motto}
            </p>
          </div>

          {/* Acronym grid — T·O·M·P·A·K */}
          {/* <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {t.acronym.map((item) => (
              <div
                key={item.letter}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-4 text-center transition duration-300 hover:bg-white/10 hover:border-tompak-green-soft/40 hover:-translate-y-0.5"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-tompak-green-soft">
                  {item.letter}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-white/70">
                  {item.word}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Sticky media card — 2/5 width */}
          <div className="lg:col-span-2 order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl group">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={imageBg}
                  alt={t.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-5 py-3 border-t border-white/10 bg-black/30 backdrop-blur-sm">
                <p className="text-xs text-white/70 italic">{t.caption}</p>
              </div>
            </div>
          </div>

          {/* Tabs — 3/5 width */}
          <div className="lg:col-span-3 order-1 lg:order-2">
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
                        ? "bg-tompak-green-soft/20 border-tompak-green-soft/50 text-white"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
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
              {activeTab === "asalUsul" && (
                <div className="space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.p1}
                  </p>
                  <p className="text-white/85 leading-relaxed text-sm md:text-base">
                    {tab.p2}
                  </p>
                </div>
              )}

              {activeTab === "legenda" && (
                <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.story}
                  </p>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/50 mb-3">
                      {language === "EN" ? "Sacred Sites" : "Situs Keramat"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tab.locations.map((loc) => (
                        <span
                          key={loc}
                          className="rounded-full border border-tompak-green-soft/30 bg-tompak-green-deep/30 px-3 py-1 text-xs text-white/85 backdrop-blur"
                        >
                          ◈ {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "agraris" && (
                <div className="space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-white/85 leading-relaxed text-base md:text-lg">
                    {tab.content}
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
