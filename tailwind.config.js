/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral charcoal ground — no blue cast.
        ink: {
          950: "#0E1013",
          900: "#131518",
          850: "#191C20",
          800: "#1D2126",
          700: "#262A30",
        },
        // Accent is semantic (healthy / live / available), used sparingly.
        accent: {
          DEFAULT: "#4ADE80",
          soft: "#86EFAC",
          deep: "#22C55E",
        },
        // Text hierarchy: strong -> fg -> mute -> dim
        fg: "#C6CBD2",
        mute: "#7C838D",
        dim: "#5A606A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Flat, console-like: a crisp edge instead of a coloured glow.
        glow: "0 0 0 1px rgba(74,222,128,0.18)",
        card: "0 1px 2px rgba(0,0,0,0.4), 0 18px 40px -28px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};
