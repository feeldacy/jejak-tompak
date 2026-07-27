/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tompak: {
          white: "#FFFFFF",
          cream: "#F7F3EC",
          green: {
            DEFAULT: "#1A330F",
            deep: "#0F1F08",
            mid: "#2E5B1E",
            soft: "#8CB27A",
            mist: "#E4EFD9",
          },
          brown: {
            DEFAULT: "#A52A2A",
            deep: "#5C1A1A",
            soft: "#D9A7A7",
            warm: "#8B4A2B",
          },
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(140, 178, 122, 0.0)" },
          "50%": { boxShadow: "0 0 30px rgba(140, 178, 122, 0.35)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "glow-soft": "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
