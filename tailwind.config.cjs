/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        qidian: "//qidian.qpic.cn/qidian_common/349573/78fce8716a866511419f688546de7f67/0"
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        robo: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
