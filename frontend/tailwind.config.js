/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cores inspiradas em Moçambique
        primary: "#007956", // Verde Moçambique
        accent: "#D4A54B", // Ouro
        dark: "#2C3E50", // Cinzento escuro
        light: "#ECF0F1", // Cinzento claro
      },
    },
  },
  plugins: [],
};
