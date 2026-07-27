import { getT } from "../data/translations.js";
import prawiraTani from "../assets/prawira-tani.jpg";

export default function PrawiraTaniSection({ language }) {
  const t = getT(language).prawira;

  return (
    <section id="prawira" className="relative py-28 overflow-hidden bg-white">
      {/* Soft blends */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-tompak-green-mist/70 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-tompak-brown-soft/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="section-title vollkorn-title mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
              {t.title}
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-tompak-green-mid to-transparent" />
            <p className="mt-6 text-tompak-green-deep/80 leading-relaxed text-base md:text-lg">
              {t.paragraph1}
            </p>
            <p className="mt-4 text-tompak-green-deep/70 leading-relaxed text-sm md:text-base">
              {t.paragraph2}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-tompak-green-mid text-white font-semibold text-sm px-6 py-3 shadow-lg transition duration-300 hover:bg-tompak-green hover:scale-105"
              >
                {t.cta}
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
              </button>

              {/* Mini stats */}
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-display font-bold text-2xl text-tompak-green-mid">
                    120+
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-tompak-green-deep/60">
                    Prawira
                  </p>
                </div>
                <div className="h-8 w-px bg-tompak-green-deep/15" />
                <div>
                  <p className="font-display font-bold text-2xl text-tompak-green-mid">
                    8
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-tompak-green-deep/60">
                    Desa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="glass rounded-3xl overflow-hidden shadow-xl group">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={prawiraTani}
                  alt="Prawira Tani"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
