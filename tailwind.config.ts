import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#fcfcfb",
        plane: "#f9f9f7",
        ink: {
          primary: "#0b0b0b",
          secondary: "#52514e",
          muted: "#898781",
        },
        line: {
          hair: "#e1e0d9",
          baseline: "#c3c2b7",
        },
        accent: {
          DEFAULT: "#2a78d6",
        },
        status: {
          good: "#0ca30c",
          warning: "#c98500",
          critical: "#d03b3b",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Inter",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
