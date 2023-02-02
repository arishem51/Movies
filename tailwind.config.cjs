/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
