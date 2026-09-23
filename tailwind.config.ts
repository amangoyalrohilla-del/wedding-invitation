import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF3F1",
        cream: "#EFDCDA",
        gold: "#C98A4B",
        "gold-soft": "#D9A468",
        burgundy: "#7A3F55",
        forest: "#3D1420",
        charcoal: "#2A1015",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(42, 16, 21, 0.35)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
