import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "h1": "54px",
        "h2": "36px",
        "h3": "24px",
        "p1": "20px",
        "p2": "16px",
        "p3": "14px",
        "p4": "12px",
      },
    },
  },
  plugins: [],
};
export default config;
