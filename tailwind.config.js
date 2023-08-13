/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3498db",
          secondary: "#34495e",
          accent: "#fff133",
          neutral: "#2c3e50",
          "base-100": "#ffffff",
          info: "#4aa8bf",
          success: "#2ecc71",
          warning: "#ef8234",
          error: "#ea4034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
