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
      // Adding custom text shadow
      textShadow: {
        sunlight: "4px 4px 10px rgba(0, 0, 0, 0.7)", // Sunlight shadow effect
      },
      fontFamily: {
        greatVibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
