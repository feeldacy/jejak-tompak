import { getT } from "../data/translations.js";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function AboutTompakSection({ language }) {
  const t = getT(language).tagline;
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const targets = [headingRef.current, descRef.current].filter(Boolean);

    // Set initial invisible state
    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        animate(targets, {
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 700,
          ease: "outExpo",
          delay: stagger(120),
        });
      },
      { threshold: 0.18 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="relative min-h-[70vh] flex items-center pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-white"
    >
      {/* Soft edge blends */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-tompak-green-mist/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-tompak-brown-soft/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <h2
          ref={headingRef}
          className="vollkorn-title text-center text-3xl sm:text-5xl md:text-6xl max-w-2xl mx-auto"
        >
          {t.title}
        </h2>
        <p
          ref={descRef}
          className="mt-6 text-center text-base md:text-lg text-tompak-green-deep/70 max-w-3xl lg:max-w-6xl mx-auto leading-relaxed"
        >
          {t.paragraph1}
        </p>
        <p
          ref={descRef}
          className="mt-6 text-center text-base md:text-lg text-tompak-green-deep/70 max-w-3xl lg:max-w-6xl mx-auto leading-relaxed"
        >
          {t.paragraph2}
        </p>
      </div>
    </section>
  );
}
