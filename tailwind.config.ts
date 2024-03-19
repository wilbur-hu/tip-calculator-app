import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "#26C2AE",
        "dark-grayish-cyan": "#5E7A7D",
        "very-dark-cyan": "#00474B",
        "light-grayish-cyan": "#C5E4E7",
        "very-light-grayish-cyan": "#F3F9FA",
        "grayish-cyan": "#7F9D9F",
      },
      fontFamily: {
        "space-mono": ["Space Mono"],
      },
      screens: {
        sm: "375px",
      },
    },
  },
  plugins: [],
} satisfies Config;
