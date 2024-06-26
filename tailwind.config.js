/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-rs": "#007f5f",
        "green-check": "#34b233",
        "green-check-dark": "#278526",
        "red-rs": "#d62828",
        "red-dark": "#b02121",
        "yellow-rs": "#fcbf49",
        "blue-rs": "#2C84CB",
        "blue-rs-dark": "#205f91"

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif']
      },
      fontSize: {
        smaller: "12px",
        smallest: "10px"
      }
    },
  },
  plugins: [],
};
