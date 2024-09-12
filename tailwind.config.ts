import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        theme:
          "linear-gradient(0deg, rgba(34,195,39,1) 0%, rgba(226,154,0,1) 100%)",
        foreground: "var(--foreground)",
        ligthGreen: "rgba(34,195,39,1)",
        ligthYellow: "rgba(226,154,0,1)",
      },
      backgroundImage: {
        theme:
          "linear-gradient(0deg, rgba(34,195,39,1) 0%, rgba(226,154,0,1) 100%)", // Gradient for the theme
      },
    },
  },
  plugins: [],
};
export default config;
