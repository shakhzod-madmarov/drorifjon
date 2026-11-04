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
        primary: "#0C6E5A",
        "primary-hover": "#095446",
        "primary-light": "#ECFDF5",
        brandTeal: "#0C6E5A",
        "brandTeal-hover": "#095446",
        "brandTeal-light": "#ECFDF5",
        brandEmerald: "#10B981",
        "brandEmerald-hover": "#059669",
        "brandEmerald-light": "#D1FAE5",
        brandIndigo: "#6366F1",
        "brandIndigo-light": "#EEF2FF",
        brandSlate: "#0F172A",
        surface: "#F8FAFB",
        "surface-soft": "#F1F5F9",
        dark: "#0A1628",
        "dark-soft": "#1E293B",
      },
      fontFamily: {
        serif: ["'DM Serif Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
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
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)",
        "card-hover":
          "0 10px 25px -5px rgba(12, 110, 90, 0.10), 0 4px 10px -6px rgba(12, 110, 90, 0.08)",
        luxury: "0 12px 32px -10px rgba(12, 110, 90, 0.12)",
        "luxury-lg": "0 20px 44px -12px rgba(12, 110, 90, 0.18)",
      },
    },
  },
  plugins: [],
};
