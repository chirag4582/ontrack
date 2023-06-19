/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slide: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
        custrot: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(30deg)" },
          "20%": { transform: "rotate(60deg)" },
          "30%": { transform: "rotate(90deg)" },
          "40%": { transform: "rotate(120deg)" },
          "50%": { transform: "rotate(140deg)" },
          "60%": { transform: "rotate(170deg)" },
          "100%": { transform: "rotate(270deg)" },
        },
        pop: {
          "0%": { width: "0px", height: "0px", opacity: 0 },
          "10%": { width: "2px", height: "2px", opacity: 0.5 },
          "20%": { width: "5px", height: "5px", opacity: 0.7 },
          "30%": { width: "10px", height: "10px", opacity: 0.8 },
          "40%": { width: "15px", height: "15px", opacity: 0.9},
          "50%": { width: "17px", height: "17px", opacity: 0.95 },
          "60%": { width: "20px", height: "20px", opacity: 1 },
          "100%": { width: "25px", height: "25px", opacity: 1 },
        },
      },
      animation: {
        "slide-transition": "slide 0.5s linear forwards",
        "rotate-stop": "custrot 1s linear forwards",
        "pop-out": "pop 3s linear forwards",
      },
    },
  },
  plugins: [],
};
