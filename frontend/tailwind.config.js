/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      backgroundColor: {
        bg: " background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )",
      },
    },
  },
  plugins: [],
};
