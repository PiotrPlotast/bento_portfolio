/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        lg: "1178px",
      },
      colors: {
        gridCell: "#191C26",
        mainBg: "#12151d",
      },
      fontFamily: {
        main: ["'Baloo 2'", "sans-serif"],
      },
      gridTemplateAreas: {
        layout: [
          "hero hero hero aboutMe",
          "technologies projects projects aboutMe",
          "technologies projects projects contactMe",
        ],
      },
      gridTemplateColumns: {
        layout: "24rem 1fr 2rem",
      },
      gridTemplateRows: {
        layout: "6rem 3rem 1fr auto",
      },
      animation: {
        text: "text 5s ease infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
