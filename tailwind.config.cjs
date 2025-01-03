
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: "#F5AB34",
        lightgray: "#e5ddd9",
        brown: "#362d2c",
        yellow: "#f99f0e",
        lightyellow: "#fccf86",
        gray: "#ebe5e2",
        signin: "#ed800d",
        darkgold: "c86400",
        fder: "362d2c",
        lightblack: "#334155",
        line: "#666666",
        lin: "#c9c3c1",
        background: "#ebe5e2",
        smallText: "#362D2C",
        quote: "#a9a9a9",
        contactbg: "#181515",
        dropbox: "#b9bab8",
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"]
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",

      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
};
