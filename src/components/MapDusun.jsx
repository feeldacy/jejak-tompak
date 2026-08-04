import { useEffect, useRef } from "react";
import { animate, svg } from "animejs";

// Outline of Dusun Tompak — single closed path, drawn on scroll.
const PATH =
  "M479.5 369L432.5 427.5L326.5 361.5L260.5 327L169 273.5L136 252.5L129.5 247.5L119.5 240.5L114 228L108.5 225L101 218L88 188L79.5 185L70 174L62 167.5L55.5 153L46.5 142L36 116.5L27 118.5L14 118L7 96L3.5 90.5L5 85L7.5 55L26.5 26.5L46.5 19L68 11L90 3.5L106 17L155.5 57L179.5 78L199.5 64L207.5 56L262 62L329 75.5L466 102.5V105.5L452.5 113.5L449 148.5L475 244.5L508 340.5L479.5 369Z";

export default function MapDusun() {
  const svgRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const node = svgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed.current) {
            hasPlayed.current = true;
            animate(svg.createDrawable("#dusun-outline"), {
              draw: "0 1",
              duration: 2600,
              ease: "inOutSine",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 512 431"
      className="w-full h-full overflow-visible"
      aria-label="Peta wilayah dusun Tompak"
    >
      <path
        id="dusun-outline"
        d={PATH}
        fill="none"
        stroke="#1F3B1A"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
