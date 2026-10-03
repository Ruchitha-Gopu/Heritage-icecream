import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF6E9",
          light: "#FFFBF3",
          dark: "#FBE9CF",
        },
        cocoa: {
          DEFAULT: "#3E2417",
          light: "#5A3826",
          dark: "#26150C",
        },
        berry: {
          DEFAULT: "#E63950",
          light: "#FF5A70",
          dark: "#B92440",
        },
        blush: {
          DEFAULT: "#FBD2DE",
          light: "#FEE8EF",
          dark: "#F3A8C0",
        },
        sunshine: {
          DEFAULT: "#FFCB4C",
          light: "#FFE29A",
          dark: "#F0A800",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        scoop: "50% 50% 50% 50% / 60% 60% 40% 40%",
        blob: "63% 37% 54% 46% / 55% 48% 52% 45%",
      },
      boxShadow: {
        scoop: "0 20px 40px -15px rgba(62, 36, 23, 0.35)",
      },
      keyframes: {
        drip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        drip: "drip 3s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
