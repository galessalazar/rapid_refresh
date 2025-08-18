/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        
      },
      ringColor: {
        ring: "rgba(59, 130, 246, 0.5)",
      },
      outlineColor: {
        ring: 'rgba(59, 130, 246, 0.5)',
      }
    },
  },
  plugins: [],
};
