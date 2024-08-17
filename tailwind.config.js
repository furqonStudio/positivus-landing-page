/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#B9FF66',
        gray: '#F3F3F3',
        dark: '#191A23',
        darkGray: '#292A32',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        p: '18px',
        h4: '20px',
        h1: '60px',
        h2: '40px',
        h3: '30px',
        'h1-mob': '43px',
        'h2-mob': '36px',
        'h3-mob': '26px',
        'h4-mob': '18px',
        'p-mob': '16px',
      },
      lineHeight: {
        auto: 'auto',
        24: '24px',
      },
    },
  },
  plugins: [],
}
