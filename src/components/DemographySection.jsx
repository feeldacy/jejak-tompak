import { getT } from "../data/translations.js";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import MapDusun from "./MapDusun.jsx";

export default function DemographySection({ language }) {
  const t = getT(language).tagline;
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const mapRef = useRef(null);
  const hasAnimated = useRef(false);

  const stats = [
    { icon: "◉", value: "73.93 Ha", label: t.luasDusun },
    { icon: "◉", value: "2 RW ", label: t.jumlahrw },
    { icon: "◉", value: "5 RT ", label: t.jumlahrt },
    { icon: "◉", value: "±90 Kartu Keluarga", label: t.jumlahkk },
  ];

  useEffect(() => {
    // Set initial hidden state (overlapping in center)
    if (cardRef.current) {
      cardRef.current.style.opacity = "0";
      cardRef.current.style.transform = "translateX(200px) scale(0.2)";
    }
    if (mapRef.current) {
      mapRef.current.style.opacity = "0";
      mapRef.current.style.transform = "translateX(-200px) scale(0.2)";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        // Simultaneous entrance — both slide from center to their columns
        animate(cardRef.current, {
          translateX: [200, 0],
          scale: [0.2, 1],
          opacity: [0, 1],
          duration: 1200,
          ease: "outExpo",
        });

        animate(mapRef.current, {
          translateX: [-200, 0],
          scale: [0.2, 1],
          opacity: [0, 1],
          duration: 1200,
          ease: "outExpo",
        });
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demografi"
      className="relative pt-8 lg:pt-12 pb-24 overflow-hidden bg-white"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div ref={cardRef} className="w-full order-2 md:order-1">
            <div
              className="relative rounded-2xl border border-tompak-green-soft/30
                bg-white
                backdrop-blur-md shadow-xl p-6 sm:p-8"
            >
              {/* Stats grid */}
              <div className="flex flex-col gap-3">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="relative group flex items-center gap-4 rounded-xl
                      bg-gradient-to-r  to-white/60
                      border border-tompak-green-soft/30
                      px-5 py-4
                      transition duration-300 hover:border-tompak-green-mid/50 hover:shadow-md"
                  >
                    <span className="text-tompak-green-mid/60 text-base leading-none w-5 text-center font-mono">
                      {s.icon}
                    </span>
                    <div className="flex-1">
                      <p className="font-display vollkorn-title font-bold text-2xl text-tompak-green-mid leading-none">
                        {s.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-widest text-tompak-green-deep/60 font-medium">
                        {s.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — Map SVG ── */}
          <div ref={mapRef} className="w-full order-1 md:order-2">
            <div className="relative">
              <MapDusun />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
