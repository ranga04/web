/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0d1b2a",
        darkGrayishBlue: "#1b263b",
        moderateBlue: "#415a77",
        lightGrayishBlue: "#778da9",
        veryLightGray: "#e0e1dd",
      },
      backgroundImage: {
        "about-bg": "url('/src/assets/peak.jpeg')", // Update with the correct path to your image
      },
    },
  },
  plugins: [],
};
