/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};

