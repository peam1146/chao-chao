import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      sm: '375px',
      md: '481px',
      lg: '821px',
      xl: '1024px',
    },
    extend: {
      fontSize: {
        h1: ['var(--font-size-h1)', 'var(--line-height-h1)'],
        h2: ['var(--font-size-h2)', 'var(--line-height-h2)'],
        h3: ['var(--font-size-h3)', 'var(--line-height-h3)'],
        h4: ['var(--font-size-h4)', 'var(--line-height-h4)'],
        h5: ['var(--font-size-h5)', 'var(--line-height-h5)'],
        h6: ['var(--font-size-h6)', 'var(--line-height-h6)'],
        tiny: ['var(--font-size-tiny)', 'var(--line-height-tiny)'],
        body1: ['var(--font-size-body1)', 'var(--line-height-body1)'],
        body2: ['var(--font-size-body2)', 'var(--line-height-body2)'],
        body3: ['var(--font-size-body3)', 'var(--line-height-body3)'],
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        looped: ['var(--font-looped)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          hover: 'hsl(var(--secondary-hover))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          hover: 'hsl(var(--destructive-hover))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        text: {
          DEFAULT: 'hsl(var(--text)',
          light: 'hsl(var(--text-light)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow-default)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        'focused-primary': 'var(--shadow-primary)',
        'focused-secondary': 'var(--shadow-secondary)',
        'focused-error': 'var(--shadow-error)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
