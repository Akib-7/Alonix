/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Roboto Mono", "monospace"],
        heading: ["Pixelify Sans"],
        sp: ["Jersey 20"],
      },
    },
  },
  plugins: [],
};
