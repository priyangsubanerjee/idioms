/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      boxShadow: {
        "3xl": "10px 5px 60px -15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
