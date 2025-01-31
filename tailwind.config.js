const defaultTheme = required('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html', // Make sure to add paths to your HTML or JS files
    './src/**/*.{js,ts,jsx,tsx}', // Add the paths for your JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        beige: '#EFEBE3', // Custom beige color
      },
    },
  },
  plugins: [required('daisyui')],
};
