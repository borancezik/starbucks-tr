/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ["salem"]: "#008248",
        ["salem-hover"]: "rgba(0, 168, 98, 0.9)",
        ["entry-hover"]: "rgba(0,0,0,.06)",
        ["join-us-hover"]: "rgba(0,0,0,.7)",
      },
    },
  },
  plugins: [],
};
