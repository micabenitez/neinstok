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
              transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
            },
            "80%": {
              opacity: 0.8,
              transform: "scale3d(1.1, 1.1, 1.1)",
            },
            "100%": {
              opacity: 1,
              transform: "translate3d(0, 0%, 0)"
            },
          },
      },
      animation: {
        zoomInDown: 'zoom-in-down 1s ease-in-out 0.10s 1',
      },
    },
  },
  plugins: [],
};
