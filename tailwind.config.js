/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
      },
      keyframes: {
        "zoom-in-down": {
            "0%": {
              opacity: 0,
              transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
            },
            "60%": {
              opacity: 1,
              transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
            },
          },
          "fade-in-up": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(0, 100%, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
          },
      },
      animation: {
        zoomInDown: 'zoom-in-down 1s ease-in 0.10s 1',
        fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [],
};
