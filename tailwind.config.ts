import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#D2B48C', // Light beige for background or accent
        darkBlue: '#223344', // Dark blue for text and primary elements
        offWhite: '#FDFBF5', // Off-white for cards and light areas
      },
    },
  },
  plugins: [],
} satisfies Config;
