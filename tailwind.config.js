/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberdark: '#030712',
        cybercard: '#0B0F19',
        cyberindigo: '#6366F1',
        cybercyan: '#06B6D4',
        cyberoffwhite: '#F3F4F6'
      },
    },
  },
  plugins: [],
};
