import { useEffect, useState } from "react";
import { getT } from "../data/translations.js";

const images = import.meta.glob(
  "../assets/hero-bg/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
  },
);

const HERO_IMAGES = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, image]) => image.default);

export default function HeroSection({ language }) {
  const t = getT(language).hero;

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] ease-in-out
            ${
              index === currentImage
                ? "opacity-100 scale-110"
                : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Color Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b
            from-tompak-green-deep/70
            via-tompak-green-deep/25
            to-transparent"
        />

        {/* Blur around text */}
        <div className="absolute inset-x-0 top-24 bottom-28 backdrop-blur-sm [mask-image:radial-gradient(ellipse_70%_55%_at_50%_45%,black,transparent)]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent via-white/40 to-white" />
      </div>

      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-10 left-[-80px] h-80 w-80 rounded-full bg-tompak-green-soft/30 blur-3xl" />
        <div className="absolute bottom-16 right-[-60px] h-96 w-96 rounded-full bg-tompak-brown-soft/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Title */}
        <h1 className="font-display vollkorn-title font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight drop-shadow-lg animate-fade-up [animation-delay:400ms]">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed animate-fade-up [animation-delay:600ms]">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:800ms]">
          <a
            href="#artikel"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#artikel")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-tompak-green-mid text-white font-semibold text-sm px-7 py-3.5 shadow-lg transition duration-300 hover:bg-tompak-green hover:scale-105 hover:shadow-tompak-green-soft/40 hover:shadow-2xl"
          >
            {t.ctaPrimary}
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
          </a>
          <a
            href="#tagline"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#tagline")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full glass text-tompak-green-deep font-semibold text-sm px-7 py-3.5 transition duration-300 hover:bg-white/70 hover:scale-105"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* White glow */}
      <div className="absolute -bottom-32 left-1/2 h-80 w-[140%] -translate-x-1/2 rounded-full bg-white blur-[120px] opacity-95" />
      {/* Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-white/40 to-white" />
    </section>
  );
}
