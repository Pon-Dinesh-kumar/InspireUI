
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				purple: {
					DEFAULT: '#be2edd',
					light: '#d568ea',
					dark: '#9b26b6'
				},
				teal: {
					DEFAULT: '#00cec9',
					light: '#81ecec',
					dark: '#00b5b1'
				},
				pink: {
					DEFAULT: '#D946EF',
					light: '#F472B6',
					dark: '#C026D3'
				},
				blue: {
					DEFAULT: '#1EAEDB',
					light: '#33C3F0',
					dark: '#0C96C5'
				},
				darkbg: {
					DEFAULT: '#08090c',
					light: '#111319',
					lighter: '#1a1d26',
					panel: '#12141c'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 10px 2px rgba(190, 46, 221, 0.3)'
					},
					'50%': {
						opacity: '0.7',
						boxShadow: '0 0 20px 4px rgba(190, 46, 221, 0.5)'
					}
				},
				'float-motion': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shine': {
					'0%': {
						backgroundPosition: '200% center',
						opacity: '0.5'
					},
					'100%': {
						backgroundPosition: '-200% center',
						opacity: '1.0'
					}
				},
				'pulse-border': {
					'0%, 100%': {
						borderColor: 'rgba(212, 70, 239, 0.4)'
					},
					'50%': {
						borderColor: 'rgba(30, 174, 219, 0.8)'
					}
				},
				'rotate-slow': {
					'100%': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float-motion': 'float-motion 6s ease-in-out infinite',
				'shine': 'shine 8s ease-in-out infinite',
				'pulse-border': 'pulse-border 4s infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-pink-blue': 'linear-gradient(90deg, #D946EF 0%, #1EAEDB 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
