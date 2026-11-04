/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "360px",
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#FF9D50",
        "primary-hover": "#E58535",
        "primary-light": "#FFF4EB",
        brandOrange: "#FF9D50",
        "brandOrange-hover": "#E58535",
        "brandOrange-light": "#FFF3E8",
        brandCream: "#FFF9D8",
        "brandCream-dark": "#F2E7BA",
        brandCyan: "#1DCED8",
        "brandCyan-hover": "#14B8C1",
        "brandCyan-light": "#E3FBFC",
        brandGreen: "#55E07E",
        "brandGreen-hover": "#3BC966",
        "brandGreen-light": "#EDFDF2",
        surface: "#FFFDF8",
        "surface-soft": "#FFF9E8",
        dark: "#141E28",
        "dark-soft": "#253241",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "2xs": "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        xs: "0 1px 3px 0 rgba(0, 0, 0, 0.06)",
        luxury: "0 12px 32px -10px rgba(255, 157, 80, 0.12)",
        "luxury-lg": "0 20px 44px -12px rgba(255, 157, 80, 0.18)",
        cyan: "0 12px 32px -10px rgba(29, 206, 216, 0.18)",
        orange: "0 12px 32px -10px rgba(255, 157, 80, 0.22)",
        green: "0 12px 32px -10px rgba(85, 224, 126, 0.22)",
      },
    },
  },
  plugins: [],
};
