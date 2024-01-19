/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

//npx tailwindcss -i ./src/input.css -o ./build/output.css --watch
