/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
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
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [],
};
