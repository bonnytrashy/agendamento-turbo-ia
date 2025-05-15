
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				custom: {
					black: '#000000',
					darkBlue: '#011d45',
					white: '#ffffff',
					neonBlue: '#00a8f3',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #00a8f3, 0 0 10px #00a8f3'
					},
					'50%': { 
						boxShadow: '0 0 20px #00a8f3, 0 0 30px #00a8f3'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'circuit-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'circuit-flow': 'circuit-flow 20s linear infinite',
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
			backgroundImage: {
				'circuit-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQxLTguMDU5LTE4LTE4LTE4Uzk5LjA1OSAxOCAwIDE4djQzLjg0NEMwIDUyLjU2OSA1LjQzMSA1OCAxMi4xNTYgNThoNDcuNjg4QzY2LjU2OSA1OCA3MiA1Mi41NjkgNzIgNDUuODQ0VjE4SDM2eiIgZmlsbD0iIzAxMWQ0NSIvPjxwYXRoIGQ9Ik0zOSAzMGMwLTcuNzMyLTYuMjY4LTE0LTE0LTE0cy0xNCA2LjI2OC0xNCAxNCA2LjI2OCAxNCAxNCAxNCAzMS43MzIgMTggMzEgMTgiIHN0cm9rZT0iIzAwYThmMyIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0xMiAxMmwxMS4yOTMgMTEuMjkzbC0xMS4yOTQgMTEuMjk0TDAgMjMuMjloMy4wMDVMMTIgMTQuMjkgMjAuOTk1IDIzLjI5SDI0TDEyIDExLjI5eiIgZmlsbD0iIzAwYThmMyIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
