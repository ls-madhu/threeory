/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 300ms ease',
        slideUp: 'slideUp 300ms ease',
      },
      colors: {
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'foreground-secondary': 'hsl(var(--foreground-secondary))',
        muted: 'hsl(var(--muted))',
      },
      fontFamily: {
        sans: ['MuseoModerno'],
        'sans-secondary': ['Inter'],
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [],
};
