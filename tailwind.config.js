/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff2d95",
        neonBlue: "#4df9ff",
        neonGreen: "#39ff14",
        darkBg: "#0e0e0e",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      boxShadow: {
        neon: "0 0 10px rgba(255, 45, 149, 0.8)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px #4df9ff",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow: "0 0 5px #ff2d95, 0 0 10px #ff2d95, 0 0 20px #4df9ff",
          },
          "50%": {
            textShadow: "0 0 10px #ff2d95, 0 0 20px #ff2d95, 0 0 40px #4df9ff",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        move: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-2000px) translateY(1000px)" },
        },
      },
      animation: {
        glow: "glow 2s infinite ease-in-out",
        fadeInUp: "fadeInUp 0.8s ease-out both",
        "star-twinkle": "twinkle 2s infinite",
        "star-move": "move 50s linear infinite",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
  safelist: ["animate-star-twinkle", "animate-star-move"],
};
