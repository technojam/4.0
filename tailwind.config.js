/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Phudu: ["Phudu"],
        Tilt_Prism:["Tilt Prism"],
        Kode_Mono:["Kode Mono"],
        Orbitron:["Orbitron"],
      },
    },
  },
  plugins: [],
}

