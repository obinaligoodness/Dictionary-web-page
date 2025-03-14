module.exports = {
    darkMode: 'class', 
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], 
    theme: {
      extend: {
        fontFamily: {
          sans: ["Arial", "sans-serif"],
          serif: ["Times New Roman", "serif"],
          mono: ["Courier New", "monospace"],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
  