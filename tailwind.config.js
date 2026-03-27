/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "steel-blue": "#4d76a8",
        "burnt-coral": "#e9865b",
        "charcoal-blue": "#40404f",
        slate: {
          200: "#e2e8f0",
          700: "#334155",
          800: "#1e293b",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
