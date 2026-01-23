import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        accent: "#C8A165",
        bgSoft: "#FAF7F2",
      },
    },
  },
  plugins: [],
};

export default config;
