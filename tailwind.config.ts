import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        appear: "appear 1s linear forwards",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", clipPath: "inset(100% 100% 0 0)" },
          "100%": { opacity: "1", clipPath: "inset(0 0 0 0)" },
        },
      },
      colors: {
        background: "var(--background)",
        theme:
          "linear-gradient(0deg, #2E56A7 0%, #BB6DE5 100%)",
        foreground: "var(--foreground)",
        ligthGreen: "#2E56A7",
        ligthYellow: "#BB6DE5",
        "custom-blue": "#2E56A7",
        "custom-purple": "#BB6DE5",
        "dark-text": "rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        theme: "linear-gradient(0deg, #BB6DE5  0%, #2E56A7 100%)", // Gradient for the theme
      },
    },
  },
  plugins: [],
};
export default config;

