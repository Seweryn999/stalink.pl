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
        darkBg: "#0e0e0e", // Kept this for a solid dark base
        gray: {
          600: "#4b5563", // For loading states
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        blue: {
          600: "#2563eb", // Button base
          700: "#1d4ed8", // Hover
          800: "#1e40af", // Active
          900: "#1e3a8a", // Darker active
        },
      },
      boxShadow: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Subtle hover shadow
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)", // For active press
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
      borderRadius: {
        md: "0.375rem", // Default for buttons
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Clean, modern font
      },
    },
  },
  plugins: [],
};
