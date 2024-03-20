import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "button-color": "var(--button-color)",
        "muted-button-color": "var(--mutedButton-color)",
        "bright-yellow-color": "var(--brightYellow-color)",
      },
    },
  },
  plugins: [],
};
export default config;
