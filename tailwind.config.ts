import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        base: ["0.875rem", { lineHeight: "1.5rem" }], // 14px/24px
        lg: ["1rem", { lineHeight: "1.5rem" }], // 16px/24px
        xl: ["1.125rem", { lineHeight: "1.75rem" }], // 18px/28px
        "2xl": ["1.25rem", { lineHeight: "1.875rem" }], // 20px/30px
        "3xl": ["1.5rem", { lineHeight: "2rem" }], // 24px/32px
        "4xl": ["2rem", { lineHeight: "2.5rem" }], // 32px/40px
        "5xl": ["2.5rem", { lineHeight: "1" }], // 40px/40px
      },
    },
  },
  plugins: [],
} satisfies Config;
