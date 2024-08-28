import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'purple-dark': '#282C33', 
        'normal-purple' : '#C778DD',
        'p-gray' : '#ABB2BF',
      }
    },
  },
  plugins: [],
};
export default config;
