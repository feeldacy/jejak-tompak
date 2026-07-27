import { useEffect } from "react";
import { animate, svg } from "animejs";

const PATH =
  "M479.5 369L432.5 427.5L326.5 361.5L260.5 327L169 273.5L136 252.5L129.5 247.5L119.5 240.5L114 228L108.5 225L101 218L88 188L79.5 185L70 174L62 167.5L55.5 153L46.5 142L36 116.5L27 118.5L14 118L7 96L3.5 90.5L5 85L7.5 55L26.5 26.5L46.5 19L68 11L90 3.5L106 17L155.5 57L179.5 78L199.5 64L207.5 56L262 62L329 75.5L466 102.5V105.5L452.5 113.5L449 148.5L475 244.5L508 340.5L479.5 369Z";

export default function MapDusun() {
  useEffect(() => {
    animate(svg.createDrawable("#dusun-outline"), {
      draw: "0 1",
      duration: 2600,
      ease: "inOutSine",
    });
    animate(svg.createDrawable("#dusun-trail"), {
      draw: "0 1",
      duration: 2600,
      delay: 260,
      ease: "inOutSine",
    });
  }, []);

  return (
    <svg
      viewBox="0 0 512 431"
      className="w-full h-full overflow-visible"
      aria-label="Peta wilayah dusun Tompak"
    >
      <defs>
        {/* Stroke glow */}
        <filter id="mapGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Radial fill gradient */}
        <radialGradient id="shapeFill" cx="38%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#5EE89A" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#2E5B1E" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0F1F08" stopOpacity="0.05" />
        </radialGradient>

        {/* Glossy top-left sheen */}
        <linearGradient id="glossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Extrusion depth shadow ── */}
      <path
        d={PATH}
        fill="#0D1F09"
        transform="translate(6,8)"
        filter="url(#extrusion)"
        opacity="0.55"
      />

      {/* ── Ambient halo ── */}
      <path
        d={PATH}
        fill="none"
        stroke="#4ADE80"
        strokeWidth="28"
        filter="url(#halo)"
        opacity="0.14"
      />

      {/* ── Shape fill ── */}
      <path d={PATH} fill="url(#shapeFill)" />


      {/* ── Refraction edge ring (inside clip) ── */}
      <g clipPath="url(#shapeClip)">
        <path
          d={PATH}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.18"
        />
      </g>

      {/* ── Dot grid (clipped) ── */}
      <rect
        width="512"
        height="431"
        fill="url(#hudDots)"
        clipPath="url(#shapeClip)"
      />

      {/* ── Outline (anime.js draw-on) ── */}
      <path
        id="dusun-outline"
        d={PATH}
        fill="none"
        stroke="#4ADE80"
        strokeWidth="2.4"
        strokeLinejoin="round"
        filter="url(#mapGlow)"
      />

      {/* ── Neon thin trail ── */}
      <path
        id="dusun-trail"
        d={PATH}
        fill="none"
        stroke="#B8FFD8"
        strokeWidth="0.85"
        strokeLinejoin="round"
        opacity="0.55"
      />

    </svg>
  );
}
