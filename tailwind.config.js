/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
  './node_modules/stwui/**/*.{svelte,js,ts,html}'

],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'),
  require('stwui/plugin'),
],
  
  
};
