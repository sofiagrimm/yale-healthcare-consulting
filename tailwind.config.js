/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yale-blue': '#14486f',
        'yale-blue-dark': '#093a72',
        'yale-blue-deeper': '#072050',
        'yale-teal': '#29b6c6',
        'yale-teal-light': '#e6f4f4',
        'surface': '#f8f8f6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #14486f 0%, #072050 100%)',
        'hero-gradient-subtle': 'linear-gradient(135deg, #14486f 0%, #093a72 100%)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.1)',
        'nav': '0 1px 0 rgba(0,0,0,0.06)',
      },
      letterSpacing: {
        'tighter-xl': '-0.03em',
      },
    },
  },
  plugins: [],
}
