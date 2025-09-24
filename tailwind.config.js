/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#764613",
        lightBrown: "#895525",
        beige: "#feeb9e",
        caramel: "#cb8933",
        dark : '#382F32'
      },
    },
  },
  plugins: [],
}
