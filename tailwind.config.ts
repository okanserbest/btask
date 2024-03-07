import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        heroOrange: "#FBBF24",
        midnightBlue: "#0F172A",
        heroTriangle: "#FEF3C7",
      },
      boxShadow: {
        'secondSectionCard': '0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.07)',
      },
      maxWidth: {
        '1440': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
