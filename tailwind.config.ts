import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkMyt: {
          25: "var(--darkMyt-25)",
          50: "var(--darkMyt-50)",
          75: "var(--darkMyt-75)",
          100: "var(--darkMyt-100)",
        },
        lightMyt: {
          25: "var(--lightMyt-25)",
          50: "var(--lightMyt-50)",
          75: "var(--lightMyt-75)",
          100: "var(--lightMyt-100)",
        },
        baseMyt: {
          red: "var(--baseMyt-red)",
          yellow: "var(--baseMyt-yellow)",
          blue: "var(--baseMyt-blue)",
          green: "var(--baseMyt-green)",
          orange: "var(--baseMyt-orange)",
          purple: "var(--baseMyt-purple)",
          cyan: "var(--baseMyt-cyan)",
        },
        futureMyt: {
          red: "var(--futureMyt-red)",
          yellow: "var(--futureMyt-yellow)",
          blue: "var(--futureMyt-blue)",
          green: "var(--futureMyt-green)",
          orange: "var(--futureMyt-orange)",
          purple: "var(--futureMyt-purple)",
          cyan: "var(--futureMyt-cyan)",
        },
        natureMyt: {
          red: "var(--natureMyt-red)",
          yellow: "var(--natureMyt-yellow)",
          blue: "var(--natureMyt-blue)",
          green: "var(--natureMyt-green)",
          orange: "var(--natureMyt-orange)",
          purple: "var(--natureMyt-purple)",
          cyan: "var(--natureMyt-cyan)",
        },
        brightMyt: {
          red: "var(--brightMyt-red)",
          yellow: "var(--brightMyt-yellow)",
          blue: "var(--brightMyt-blue)",
          green: "var(--brightMyt-green)",
          orange: "var(--brightMyt-orange)",
          purple: "var(--brightMyt-purple)",
          cyan: "var(--brightMyt-cyan)",
        },
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        slideOut: "slideOut 0.5s forwards",
        slideIn: "slideIn 0.5s cubic-bezier(0.2, .4, .6, 1)",
      },
      keyframes: {
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(10%)", opacity: "0.3" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // plugin(function ({ addComponents }) {
    //   const newComponents = {
    //     '.vertical-rl': {
    //       writingMode: 'vertical-rl'
    //     },
    //
    //   }
    //   addComponents(newComponents)
    // }),
  ],
};
export default config;
