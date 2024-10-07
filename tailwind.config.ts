import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-purple': '#373ACC',
        'button-purple': '#381E72',
        'light-gray': '#D9D9D9',
        'dark-gray': '#1E1E1E',
        'medium-gray': '#757575',
        'text-gray': '#B3B3B3',
      },
    },
  },
  plugins: [],
};
export default config;
