/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white':{
          DEFAULT:'hsl(0, 0%, 100%)',
          off:'hsl(0, 0%, 94%)'
        },
        'grey':{
          DEFAULT:'hsl(0, 0%, 86%)',
          smokey: 'hsl(0, 1%, 44%)'
        },
        'off-black': 'hsl(0, 0%, 8%)',
        'purple': 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)'
      },
    },
  },
  plugins: [],
}
