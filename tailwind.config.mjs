/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gridCell: "#191C26",
        mainBg: "#12151d",
      },
      fontFamily: {
        main: ["'Baloo 2'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
