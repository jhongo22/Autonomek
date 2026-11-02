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
        background: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        "card-foreground": "var(--fg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted)",
        border: "var(--rule)",
        subtle: "var(--subtle)",
        primary: "var(--primary)",
        "primary-ink": "var(--primary-ink)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "accent-light": "var(--primary)",
        "accent-dark": "var(--secondary)",
        teal: "var(--accent)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        destructive: "#e05252",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        brand: ["var(--font-syne)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "flow-beam": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
        "flow-beam": "flow-beam 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
