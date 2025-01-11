/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			raleway: [
  				'Raleway',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			'zoom-in-down': {
  				'0%': {
  					opacity: 0,
  					transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)'
  				},
  				'60%': {
  					opacity: 1,
  					transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: 0,
  					transform: 'translate3d(0, 100%, 0)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			'loop-scroll': {
  				'to': {
  					transform: 'translateX(calc(-100% - 40px))'
  				}
  			},
  			'loop-right': {
  				'from': {
  					transform: 'translateX(calc(-100% - 35px))'
  				},
  				'to': {
  					transform: 'translateX(0%)'
  				}
  			}
  		},
  		animation: {
  			zoomInDown: 'zoom-in-down 1s ease-in 0.10s 1',
  			fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
  			loopScroll: 'loop-scroll 20s linear infinite',
  			loopRight: 'loop-right 20s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
